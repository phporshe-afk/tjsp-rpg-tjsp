import { useState } from "react";
import "./theme.css";

export default function App() {
  const [screen, setScreen] = useState("menu");
  const [materia, setMateria] = useState(null);

  const materias = [
    "Português",
    "Constitucional",
    "Informática",
    "Raciocínio Lógico",
  ];

  return (
    <div className="page">
      {screen === "menu" && (
        <div className="menu">
          <h1 className="title">TJ-SP Chronicles ⚔️📜</h1>
          <p className="subtitle">
            Bem-vindo ao salão do conhecimento, jovem escudeiro.  
            Escolha tua senda e acumule prestígio na prova TJ-SP!
          </p>

          <div className="list">
            {materias.map((m) => (
              <button
                key={m}
                className="btn materia"
                onClick={() => {
                  setMateria(m);
                  setScreen("quest");
                }}
              >
                {m}
              </button>
            ))}
          </div>

          <p className="footer-lore">
            *Toda jornada começa com um clique poderoso.*
          </p>
        </div>
      )}

      {screen === "quest" && (
        <div className="quest">
          <h2 className="title">{materia} — Arena das Questões 🏹</h2>

          <p className="quest-desc">
            Aqui surgirão desafios da banca TJ-SP.  
            Responda, vença e farme XP jurídico-tecnológico.
          </p>

          <button
            className="btn back"
            onClick={() => setScreen("menu")}
          >
            ⬅ Retornar ao Salão Inicial
          </button>
        </div>
      )}
    </div>
  );
}
