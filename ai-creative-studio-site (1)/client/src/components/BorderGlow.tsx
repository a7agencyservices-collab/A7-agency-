import { useCallback, useRef } from "react";
import "./BorderGlow.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowIntensity?: number;
  colors?: string[];
};

function parseHSL(value: string) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  return match ? { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) } : { h: 195, s: 90, l: 75 };
}

function buildVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor);
  const levels = [100, 60, 45, 30, 18];
  return Object.fromEntries(levels.map((level, index) => [`--glow-${index}`, `hsl(${h} ${s}% ${l}% / ${Math.min(level * intensity, 100)}%)`])) as React.CSSProperties;
}

export default function BorderGlow({ children, className = "", id, glowColor = "195 90 75", backgroundColor = "rgba(8, 12, 32, .72)", borderRadius = 24, glowIntensity = 1, colors = ["#69efff", "#4b6bff", "#ef7cff"] }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const move = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--pointer-x", `${x}%`);
    el.style.setProperty("--pointer-y", `${y}%`);
  }, []);
  return <div id={id} ref={ref} onPointerMove={move} className={`border-glow-card ${className}`} style={{ "--card-bg": backgroundColor, "--border-radius": `${borderRadius}px`, "--gradient-one": colors[0], "--gradient-two": colors[1] || colors[0], "--gradient-three": colors[2] || colors[0], ...buildVars(glowColor, glowIntensity) } as React.CSSProperties}><span className="border-glow-edge" /><div className="border-glow-inner">{children}</div></div>;
}
