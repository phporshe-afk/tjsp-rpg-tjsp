import { useState } from "react";
import "./theme.css";
function App() {
  const [screen, setScreen] = useState("menu");
  const [materia, setMateria] = useState(null);

  const materias = ["Português", "Constitucional", "Informática", "Raciocínio Lógico"];

  return (
    <div style={{ padding: "20px" }}>
      {screen === "menu" && (
        <>
          <h1>TJ-SP Chronicles — Treineiro Competitivo 🏰</h1>
          <p>Bem-vindo, jovem escudeiro! Escolha sua trilha de conhecimento:</p>

          {materias.map((m) => (
            <button
              key={m}
              onClick={() => {
                setMateria(m);
                setScreen("quest");
              }}
              style={{ display: "block", margin: "10px 0" }}
            >
              {m}
            </button>
          ))}
        </>
      )}

      {screen === "quest" && (
        <>
          <h2>Disciplina: {materia}</h2>
          <p>Aqui virão as quests (questões) da banca TJ-SP.</p>
          <button onClick={() => setScreen("menu")}>Voltar</button>
        </>
      )}
    </div>
  );
}

export default App;
