import { useState } from "react";
import questions from "./questions";
import "./theme.css";

function App() {
  const [screen, setScreen] = useState("menu");
  const [materia, setMateria] = useState(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [resultado, setResultado] = useState(null);

  const materias = Object.keys(questions);

  const currentQuest = materia ? questions[materia][index] : null;

  function responder(idx) {
    setSelected(idx);

    if (idx === currentQuest.correta) {
      setResultado("Você desferiu um golpe certeiro! Resposta correta! ⚔️");
    } else {
      setResultado("O dragão desviou do golpe! Resposta incorreta 🐉");
    }
  }

  function proxima() {
    setSelected(null);
    setResultado(null);
    setIndex((i) => i + 1);
  }

  return (
    <div style={{ padding: "20px" }}>
      {screen === "menu" && (
        <>
          <h1>TJ-SP Chronicles — Treineiro Competitivo 🏰</h1>
          <p>Saudações, escudeiro! Selecione sua disciplina:</p>

          {materias.map((m) => (
            <button
              key={m}
              onClick={() => {
                setMateria(m);
                setIndex(0);
                setScreen("quest");
              }}
              style={{ display: "block", margin: "10px 0" }}
            >
              {m}
            </button>
          ))}
        </>
      )}

      {screen === "quest" && currentQuest && (
        <>
          <h2>{materia} — Quest {index + 1}</h2>
          <p>{currentQuest.enunciado}</p>

          {currentQuest.alternativas.map((alt, idx) => (
            <button
              key={idx}
              onClick={() => responder(idx)}
              disabled={selected !== null}
              style={{ display: "block", margin: "8px 0" }}
            >
              {alt}
            </button>
          ))}

          {resultado && (
            <>
              <p style={{ marginTop: "10px" }}>{resultado}</p>

              {index + 1 < questions[materia].length ? (
                <button onClick={proxima}>Próxima Quest →</button>
              ) : (
                <button onClick={() => setScreen("menu")}>
                  Voltar ao Salão Principal 🏛️
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
