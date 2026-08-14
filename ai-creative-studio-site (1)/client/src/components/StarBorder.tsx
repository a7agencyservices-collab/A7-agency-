import type { CSSProperties, ElementType, ReactNode } from "react";
import "./StarBorder.css";

type StarBorderProps = {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
  style?: CSSProperties;
  [key: string]: unknown;
};

export default function StarBorder({
  as: Component = "button",
  className = "",
  color = "#ffffff",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) {
  const borderStyle = {
    "--star-color": color,
    "--star-speed": speed,
    "--star-thickness": `${thickness}px`,
    ...style,
  } as CSSProperties;

  return (
    <Component className={`star-border-container ${className}`} style={borderStyle} {...rest}>
      <span className="border-gradient-bottom" aria-hidden="true" />
      <span className="border-gradient-top" aria-hidden="true" />
      <span className="inner-content">{children}</span>
    </Component>
  );
}
