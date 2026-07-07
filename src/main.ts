import "./styles.css";
import { initScrollReveal, initHeaderScroll } from "./animations";
import { initNav } from "./nav";
import { HouseScene } from "./three/houseScene";

initNav();
initScrollReveal();
initHeaderScroll();

const heroCanvas = document.querySelector<HTMLElement>("#hero-canvas");
const vizCanvas = document.querySelector<HTMLElement>("#viz-canvas");

const scenes: HouseScene[] = [];

if (heroCanvas) {
  scenes.push(new HouseScene(heroCanvas));
}

if (vizCanvas) {
  scenes.push(new HouseScene(vizCanvas));
}

window.addEventListener("beforeunload", () => {
  scenes.forEach((scene) => scene.destroy());
});
