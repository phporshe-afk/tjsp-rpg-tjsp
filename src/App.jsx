import ConstitucionalQuest1 from "./ui/ConstitucionalQuest1";
import { useState } from "react";

export default function App() {
  const [finished, setFinished] = useState(null);

  function handleFinish(resp) {
    setFinished(resp);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>⚔️ TJ-SP Chronicles — Treineiro Competitivo ⚔️</h1>

      {!finished && <ConstitucionalQuest1 onFinish={handleFinish} />}

      {finished && (
        <p>
          🧾 Tu escolheu: <b>{finished}</b> — a Guilda dos Juristas anotou no
          grande livro dos cidadãos!
        </p>
      )}
    </div>
  );
}
