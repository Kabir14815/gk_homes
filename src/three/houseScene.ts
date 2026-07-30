import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const MODEL_URL = "/assets/models/showcase-building.glb";

const PROJECT_TEXTURES = [
  "/assets/projects/villa-sunset.png",
  "/assets/projects/chanoria-house.png",
  "/assets/projects/modern-grey-house.png",
  "/assets/projects/corner-villa.png",
  "/assets/projects/sgr-niwas-front.png",
  "/assets/projects/compact-three-storey.png",
];

export class HouseScene {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private pivot: THREE.Group;
  private animationId = 0;
  private isDragging = false;
  private previousMouse = { x: 0, y: 0 };
  private targetRotation = 0.35;
  private currentRotation = 0.35;
  private boundResize: () => void;
  private boundPointerDown: (e: PointerEvent) => void;
  private boundPointerMove: (e: PointerEvent) => void;
  private boundPointerUp: () => void;
  private disposed = false;
  private pmrem?: THREE.PMREMGenerator;
  private mixer?: THREE.AnimationMixer;
  private clock = new THREE.Clock();

  constructor(container: HTMLElement) {
    this.container = container;
    this.boundResize = () => this.onResize();
    this.boundPointerDown = (e) => this.onPointerDown(e);
    this.boundPointerMove = (e) => this.onPointerMove(e);
    this.boundPointerUp = () => this.onPointerUp();

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf3f7f7);
    this.scene.fog = new THREE.Fog(0xf3f7f7, 18, 42);

    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200);
    this.camera.position.set(6.5, 4.2, 8.5);
    this.camera.lookAt(0, 1.4, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    this.pivot = new THREE.Group();
    this.scene.add(this.pivot);

    this.setupEnvironment();
    this.addLights();
    this.addGround();
    void this.loadContent();

    container.addEventListener("pointerdown", this.boundPointerDown);
    window.addEventListener("pointermove", this.boundPointerMove);
    window.addEventListener("pointerup", this.boundPointerUp);
    window.addEventListener("resize", this.boundResize);

    this.animate();
  }

  private setupEnvironment(): void {
    this.pmrem = new THREE.PMREMGenerator(this.renderer);
    const env = this.pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = env;
  }

  private addLights(): void {
    this.scene.add(new THREE.HemisphereLight(0xf8fafc, 0xcbd5e1, 0.55));

    const sun = new THREE.DirectionalLight(0xfff4e6, 1.45);
    sun.position.set(8, 14, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.bias = -0.0002;
    sun.shadow.normalBias = 0.02;
    const extent = 12;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 40;
    sun.shadow.camera.left = -extent;
    sun.shadow.camera.right = extent;
    sun.shadow.camera.top = extent;
    sun.shadow.camera.bottom = -extent;
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0x99f6e4, 0.45);
    fill.position.set(-6, 5, -4);
    this.scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffffff, 0.25);
    rim.position.set(0, 4, -8);
    this.scene.add(rim);
  }

  private addGround(): void {
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(16, 64),
      new THREE.MeshStandardMaterial({
        color: 0xe8eef0,
        roughness: 0.95,
        metalness: 0.02,
      }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(5.2, 5.35, 64),
      new THREE.MeshStandardMaterial({
        color: 0x0d9488,
        roughness: 0.6,
        metalness: 0.1,
        transparent: true,
        opacity: 0.35,
      }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    this.scene.add(ring);
  }

  private async loadContent(): Promise<void> {
    try {
      await this.loadGlbModel();
    } catch {
      if (!this.disposed) {
        await this.loadPhotoGallery();
      }
    }
  }

  private loadGlbModel(): Promise<void> {
    return new Promise((resolve, reject) => {
      const draco = new DRACOLoader();
      draco.setDecoderPath("/draco/");

      const loader = new GLTFLoader();
      loader.setDRACOLoader(draco);

      loader.load(
        MODEL_URL,
        (gltf) => {
          if (this.disposed) {
            draco.dispose();
            resolve();
            return;
          }

          const root = gltf.scene;
          root.traverse((obj) => {
            const mesh = obj as THREE.Mesh;
            if (!mesh.isMesh) return;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              const std = mat as THREE.MeshStandardMaterial;
              if (std.map) std.map.colorSpace = THREE.SRGBColorSpace;
              std.envMapIntensity = 0.9;
            });
          });

          this.fitObject(root, 5.5);
          this.pivot.add(root);

          if (gltf.animations.length) {
            this.mixer = new THREE.AnimationMixer(root);
            this.mixer.clipAction(gltf.animations[0]).play();
          }

          draco.dispose();
          resolve();
        },
        undefined,
        (err) => {
          draco.dispose();
          reject(err);
        },
      );
    });
  }

  private loadPhotoGallery(): Promise<void> {
    const loader = new THREE.TextureLoader();
    const radius = 4.2;
    const frameDepth = 0.08;

    return Promise.all(
      PROJECT_TEXTURES.map(
        (url) =>
          new Promise<THREE.Texture>((res, rej) => {
            loader.load(url, res, undefined, rej);
          }),
      ),
    ).then((textures) => {
      if (this.disposed) return;

      textures.forEach((texture, index) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());

        const image = texture.image as { width: number; height: number };
        const aspect = image.width / Math.max(image.height, 1);
        const height = 2.4;
        const width = height * aspect;
        const group = new THREE.Group();
        const angle = (index / textures.length) * Math.PI * 2;

        const photo = new THREE.Mesh(
          new THREE.PlaneGeometry(width, height),
          new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.35,
            metalness: 0.05,
          }),
        );
        photo.castShadow = true;
        photo.position.z = frameDepth / 2 + 0.01;

        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(width + 0.12, height + 0.12, frameDepth),
          new THREE.MeshStandardMaterial({
            color: 0x0f172a,
            roughness: 0.55,
            metalness: 0.15,
          }),
        );
        frame.castShadow = true;
        frame.receiveShadow = true;

        const stand = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.09, 0.9, 12),
          new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 }),
        );
        stand.position.y = -height / 2 - 0.45;
        stand.castShadow = true;

        group.add(frame, photo, stand);
        group.position.set(Math.sin(angle) * radius, height / 2 + 0.9, Math.cos(angle) * radius);
        group.lookAt(0, height / 2 + 0.9, 0);
        this.pivot.add(group);
      });

      this.camera.position.set(0, 3.8, 9.5);
      this.camera.lookAt(0, 1.6, 0);
    });
  }

  private fitObject(object: THREE.Object3D, targetSize: number): void {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = targetSize / maxDim;
    object.scale.setScalar(scale);

    const scaledCenter = center.multiplyScalar(scale);
    object.position.sub(scaledCenter);
    object.position.y -= box.min.y * scale;
  }

  private onPointerDown(e: PointerEvent): void {
    this.isDragging = true;
    this.previousMouse = { x: e.clientX, y: e.clientY };
    this.container.setPointerCapture(e.pointerId);
  }

  private onPointerMove(e: PointerEvent): void {
    if (!this.isDragging) return;
    const deltaX = e.clientX - this.previousMouse.x;
    this.targetRotation += deltaX * 0.007;
    this.previousMouse = { x: e.clientX, y: e.clientY };
  }

  private onPointerUp(): void {
    this.isDragging = false;
  }

  private onResize(): void {
    const width = Math.max(this.container.clientWidth, 1);
    const height = Math.max(this.container.clientHeight, 1);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);
    this.mixer?.update(this.clock.getDelta());

    if (!this.isDragging) {
      this.targetRotation += 0.0025;
    }

    this.currentRotation += (this.targetRotation - this.currentRotation) * 0.08;
    this.pivot.rotation.y = this.currentRotation;
    this.renderer.render(this.scene, this.camera);
  };

  destroy(): void {
    this.disposed = true;
    cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.boundResize);
    window.removeEventListener("pointermove", this.boundPointerMove);
    window.removeEventListener("pointerup", this.boundPointerUp);
    this.container.removeEventListener("pointerdown", this.boundPointerDown);
    this.pmrem?.dispose();
    this.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry?.dispose();
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((mat) => {
        const std = mat as THREE.MeshStandardMaterial;
        std.map?.dispose();
        std.dispose();
      });
    });
    this.renderer.dispose();
    this.container.innerHTML = "";
  }
}
