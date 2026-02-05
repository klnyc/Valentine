import { type CSSProperties } from "react";
import "./styles/Confetti.css";

interface CustomCSSProperties extends CSSProperties {
  "--x"?: string;
  "--rotate"?: string;
  "--delay"?: string;
  "--size"?: string;
}

export const Confetti = () => {
  return (
    <div className="confetti">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          style={
            {
              "--x": `${Math.random() * 100}vw`,
              "--rotate": `${Math.random() * 360}deg`,
              "--color": `hsl(${Math.random() * 360}, 90%, 60%)`,
              "--size": `${4 + Math.random() * 6}px`,
              "--delay": `${Math.random() * 0.5}s`,
            } as CustomCSSProperties
          }
        >
          ❤️
        </span>
      ))}
    </div>
  );
};
