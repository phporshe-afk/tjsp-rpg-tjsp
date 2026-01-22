import { useState } from "react";

export default function ConstitucionalQuest1({ onFinish }) {
  const [selected, setSelected] = useState(null);
  const [resolved, setResolved] = useState(false);

  const alternativas = [
    { id: "A", text: "Jurar lealdade ao Reinado" },
    { id: "B", text: "Proteger os Manuscritos da Carta Magna" },
    { id: "C", text: "Pagar tributos à Guilda dos Tributaristas" },
  ];

  function handleSelect(id) {
    setSelected(id);
  }

  function handleConfirm() {
    setResolved(true);
    setTimeout(() => onFinish(selected), 1500);
  }

  return (
    <div style={{ padding: "1rem", fontFamily: "serif" }}>
      <h2>📜 Quest I: O Juramento do Cidadão</h2>
      <p>
        Ao entrar na Assembleia Imperial, o arauto te encara e te questiona:
        <i> "Qual é o dever fundamental de um cidadão do Reino Constitucional?"</i>
      </p>

      {!resolved && (
        <div>
          {alternativas.map((alt) => (
            <button
              key={alt.id}
              onClick={() => handleSelect(alt.id)}
              style={{
                display: "block",
                margin: "0.5rem 0",
                border: selected === alt.id ? "2px solid red" : "1px solid #aaa",
              }}
            >
              {alt.id}) {alt.text}
            </button>
          ))}

          <button
            disabled={!selected}
            onClick={handleConfirm}
            style={{ marginTop: "1rem" }}
          >
            Confirmar Resposta
          </button>
        </div>
      )}

      {resolved && (
        <p>
          ⚖️ <i>Registrando tua escolha nos anais do Reino...</i>
        </p>
      )}
    </div>
  );
}

