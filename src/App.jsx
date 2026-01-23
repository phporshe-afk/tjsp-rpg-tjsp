import { useState } from "react";
import "./theme.css";

function App() {
  const [screen, setScreen] = useState("menu");
  const [materia, setMateria] = useState(null);
  const [index, setIndex] = useState(0);
  const [acertou, setAcertou] = useState(null);

  const materias = ["Português", "Constitucional", "Informática", "Raciocínio Lógico"];

  const quests = {
    "Constitucional": [
      {
        pergunta: "Direitos fundamentais são:",
        alternativas: [
          "Cláusulas pétreas",
          "Abolíveis por EC",
          "Sem aplicabilidade imediata",
          "Meramente programáticos"
        ],
        correta: 0
      }
    ],
    "Português": [
      {
        pergunta: "Na frase “Os livros foram entregues a eles”, o termo 'a' é:",
        alternativas: [
          "Artigo",
          "Preposição",
          "Conjunção",
          "Pronome"
        ],
        correta: 1
      }
    ]
  };

  function responder(altIndex) {
    const quest = quests[materia][index];
    setAcertou(altIndex === quest.correta);

    setTimeout(() => {
      setAcertou(null);
      if (index + 1 < quests[materia].length) {
        setIndex(index + 1);
      } else {
        setScreen("fim");
      }
    }, 1200);
  }

  return (
    <div className="medieval-container">
      {screen === "menu" && (
        <>
          <h1>🏰 TJ-SP Chronicles — Treineiro Competitivo</h1>
          <p>Seja bem-vindo, jovem escudeiro! Escolha tua trilha de conhecimento:</p>

          {materias.map((m) => (
            <button
              key={m}
              onClick={() => {
                setMateria(m);
                setIndex(0);
                setScreen("quest");
              }}
              className="btn-medieval"
            >
              {m}
            </button>
          ))}
        </>
      )}

      {screen === "quest" && (
        <>
          <h2>📜 Disciplina: {materia}</h2>
          <p><strong>Quest {index + 1}:</strong> {quests[materia][index].pergunta}</p>

          {quests[materia][index].alternativas.map((alt, i) => (
            <button
              key={i}
              onClick={() => responder(i)}
              className="btn-opcao"
            >
              {alt}
            </button>
          ))}

          {acertou === true && <p className="acerto">✔ Correto! Honra e glória ao cavaleiro!</p>}
          {acertou === false && <p className="erro">✘ Errou! Mas até os reis tropeçam.</p>}
        </>
      )}

      {screen === "fim" && (
        <>
          <h2>🎉 Jornada concluída!</h2>
          <p>Tua honra foi posta à prova, e apesar dos percalços, triunfaste!</p>
          <button onClick={() => setScreen("menu")} className="btn-voltar">Voltar ao castelo</button>
        </>
      )}
    </div>
  );
}

export default App;
