import { useState, type CSSProperties } from "react";
import "./App.css";

interface CustomCSSProperties extends CSSProperties {
  "--x"?: string;
  "--rotate"?: string;
  "--delay"?: string;
  "--size"?: string;
}

function App() {
  const [isValentine, setIsValentine] = useState(false);

  return (
    <>
      <h1>~ Riolu & Capy ~</h1>

      <div className="question-section">
        <div className="riolu-container">
          <img
            src="https://media.tenor.com/HVXRMg8BstoAAAAi/riolu-dance.gif"
            className="riolu-gif"
          />
        </div>

        <div className="question-container">
          <h2>Will you be my Valentine?</h2>
          <div className="button-container">
            <button onClick={() => setIsValentine(true)}>Yes</button>
            <button onClick={() => setIsValentine(false)}>No</button>
          </div>
        </div>

        <div className="capybara-container">
          <img
            src="https://media.tenor.com/_iNTPDlgTgEAAAAi/coffee-bara-capybara.gif"
            className="capybara-gif"
          />
        </div>
      </div>

      <div className={`valentine-container ${isValentine ? "show" : ""}`}>
        <img src="https://media1.tenor.com/m/87IGhMRUfdoAAAAd/lady-and.gif" />
      </div>

      {isValentine && (
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
      )}
    </>
  );
}

export default App;
