import { useEffect, useRef } from "react";
import { HouseScene } from "../three/houseScene";

type Props = {
  id?: string;
  large?: boolean;
  label: string;
};

export function HouseCanvas({ id, large, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scene = new HouseScene(el);
    return () => scene.destroy();
  }, []);

  return (
    <div className={`canvas-frame${large ? " canvas-frame-lg" : ""}`}>
      <div
        id={id}
        ref={ref}
        className={`three-canvas${large ? " three-canvas-lg" : ""}`}
        aria-label={label}
      />
      <div className="canvas-glow" aria-hidden="true" />
    </div>
  );
}
