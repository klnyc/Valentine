import { useState } from "react";
import "./styles/App.css";
import { Confetti } from "./Confetti";

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
        <img
          src="https://media1.tenor.com/m/87IGhMRUfdoAAAAd/lady-and.gif"
          className="valentine-gif"
        />
      </div>

      {isValentine && <Confetti />}
    </>
  );
}

export default App;
