import * as THREE from "three";

const ORANGE = 0xe85d04;
const YELLOW = 0xfbbf24;
const CREAM = 0xf5f0e8;
const NAVY = 0x1e293b;

export class HouseScene {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private house: THREE.Group;
  private animationId = 0;
  private isDragging = false;
  private previousMouse = { x: 0, y: 0 };
  private targetRotation = 0;
  private currentRotation = 0;
  private boundResize: () => void;
  private boundPointerDown: (e: PointerEvent) => void;
  private boundPointerMove: (e: PointerEvent) => void;
  private boundPointerUp: () => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.boundResize = () => this.onResize();
    this.boundPointerDown = (e) => this.onPointerDown(e);
    this.boundPointerMove = (e) => this.onPointerMove(e);
    this.boundPointerUp = () => this.onPointerUp();

    const width = container.clientWidth;
    const height = container.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xfff7ed);
    this.scene.fog = new THREE.Fog(0xfff7ed, 10, 20);

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(4.5, 3.2, 5.5);
    this.camera.lookAt(0, 1.2, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);

    this.house = this.buildHouse();
    this.scene.add(this.house);
    this.addEnvironment();
    this.addLights();

    container.addEventListener("pointerdown", this.boundPointerDown);
    window.addEventListener("pointermove", this.boundPointerMove);
    window.addEventListener("pointerup", this.boundPointerUp);
    window.addEventListener("resize", this.boundResize);

    this.animate();
  }

  private buildHouse(): THREE.Group {
    const group = new THREE.Group();

    const bodyGeo = new THREE.BoxGeometry(2.4, 1.8, 2);
    const bodyMat = new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.75, metalness: 0.02 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.9;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    const roofGeo = new THREE.ConeGeometry(1.85, 1.1, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: ORANGE, roughness: 0.45, metalness: 0.05 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 2.35;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    const doorGeo = new THREE.BoxGeometry(0.55, 0.95, 0.08);
    const doorMat = new THREE.MeshStandardMaterial({ color: NAVY, roughness: 0.7 });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 0.48, 1.02);
    group.add(door);

    const windowMat = new THREE.MeshStandardMaterial({
      color: YELLOW,
      emissive: YELLOW,
      emissiveIntensity: 0.25,
      roughness: 0.3,
    });

    const windowPositions: [number, number][] = [
      [-0.75, 1.15],
      [0.75, 1.15],
    ];

    for (const [x, y] of windowPositions) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.08), windowMat);
      win.position.set(x, y, 1.02);
      group.add(win);
    }

    const foundationGeo = new THREE.BoxGeometry(2.7, 0.15, 2.3);
    const foundationMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.9 });
    const foundation = new THREE.Mesh(foundationGeo, foundationMat);
    foundation.position.y = 0.075;
    foundation.receiveShadow = true;
    group.add(foundation);

    const chimney = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.55, 0.28),
      new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 }),
    );
    chimney.position.set(0.85, 2.55, -0.35);
    chimney.castShadow = true;
    group.add(chimney);

    const groundGeo = new THREE.CircleGeometry(6, 48);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 1 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    group.add(ground);

    return group;
  }

  private addEnvironment(): void {
    const treePositions: [number, number, number][] = [
      [-2.8, 0, -1.5],
      [2.6, 0, -1.2],
      [-2.2, 0, 2],
    ];

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.8 });

    for (const [x, , z] of treePositions) {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.6, 8), trunkMat);
      trunk.position.set(x, 0.3, z);
      trunk.castShadow = true;
      this.scene.add(trunk);

      const foliage = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), foliageMat);
      foliage.position.set(x, 0.85, z);
      foliage.castShadow = true;
      this.scene.add(foliage);
    }
  }

  private addLights(): void {
    const hemi = new THREE.HemisphereLight(0xfff7ed, 0xe2e8f0, 0.65);
    this.scene.add(hemi);

    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff7ed, 1.25);
    sun.position.set(5, 8, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 20;
    sun.shadow.camera.left = -6;
    sun.shadow.camera.right = 6;
    sun.shadow.camera.top = 6;
    sun.shadow.camera.bottom = -6;
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0xfbbf24, 0.35);
    fill.position.set(-4, 3, -2);
    this.scene.add(fill);
  }

  private onPointerDown(e: PointerEvent): void {
    this.isDragging = true;
    this.previousMouse = { x: e.clientX, y: e.clientY };
    this.container.setPointerCapture(e.pointerId);
  }

  private onPointerMove(e: PointerEvent): void {
    if (!this.isDragging) return;
    const deltaX = e.clientX - this.previousMouse.x;
    this.targetRotation += deltaX * 0.008;
    this.previousMouse = { x: e.clientX, y: e.clientY };
  }

  private onPointerUp(): void {
    this.isDragging = false;
  }

  private onResize(): void {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    if (!this.isDragging) {
      this.targetRotation += 0.003;
    }

    this.currentRotation += (this.targetRotation - this.currentRotation) * 0.08;
    this.house.rotation.y = this.currentRotation;

    this.renderer.render(this.scene, this.camera);
  };

  destroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.boundResize);
    window.removeEventListener("pointermove", this.boundPointerMove);
    window.removeEventListener("pointerup", this.boundPointerUp);
    this.container.removeEventListener("pointerdown", this.boundPointerDown);
    this.renderer.dispose();
    this.container.innerHTML = "";
  }
}
