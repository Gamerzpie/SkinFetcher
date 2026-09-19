"use client";

import { useEffect, useRef } from "react";

type SkinViewerInstance = {
  setSize: (width: number, height: number) => void;
  dispose: () => void;
  disposed?: boolean;
  playerWrapper: { rotation: { y: number } };
  controls: {
    enablePan: boolean;
    enableZoom: boolean;
    enableRotate: boolean;
  };
};

export function RotatableSkinViewer({
  skinUrl,
  skinType,
  username,
}: {
  skinUrl: string;
  skinType: "Classic/Steve" | "Slim/Alex";
  username: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: SkinViewerInstance | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let mounted = true;

    async function setupViewer() {
      const { IdleAnimation, SkinViewer } = await import("skinview3d");

      if (!canvasRef.current || !wrapperRef.current || !mounted) return;

      const bounds = wrapperRef.current.getBoundingClientRect();
      viewer = new SkinViewer({
        canvas: canvasRef.current,
        width: Math.max(280, bounds.width),
        height: Math.max(330, bounds.height),
        skin: skinUrl,
        model: skinType === "Slim/Alex" ? "slim" : "default",
        animation: new IdleAnimation(),
        enableControls: true,
        zoom: 0.86,
        fov: 48,
      });

      viewer.controls.enablePan = false;
      viewer.controls.enableZoom = false;
      viewer.controls.enableRotate = true;
      viewer.playerWrapper.rotation.y = -0.35;

      resizeObserver = new ResizeObserver(([entry]) => {
        if (!entry || !viewer || viewer.disposed) return;
        viewer.setSize(Math.max(280, entry.contentRect.width), Math.max(330, entry.contentRect.height));
      });
      resizeObserver.observe(wrapperRef.current);
    }

    setupViewer();

    return () => {
      mounted = false;
      resizeObserver?.disconnect();
      viewer?.dispose();
    };
  }, [skinType, skinUrl]);

  return (
    <div className="skin-viewer-canvas-wrap" ref={wrapperRef}>
      <canvas ref={canvasRef} aria-label={`${username} interactive 3D Minecraft skin`} />
    </div>
  );
}
