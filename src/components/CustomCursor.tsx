import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] rounded-full mix-blend-difference transition-[width,height,transform] duration-200 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 56 : 14,
          height: hover ? 56 : 14,
          transform: "translate(-50%, -50%)",
          background: "white",
          opacity: 0.9,
        }}
      />
      <div
        className="pointer-events-none fixed z-[100] rounded-full border border-brand-magenta/60 transition-transform duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: 36,
          height: 36,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
