import { useState } from "react";

const questions = {
  portugues: [
    { q: "Assinale a regência correta:", options: ["Assistiu o filme", "Assistiu ao filme", "Assistiu ao professor", "Assistiu ao professor"], correct: [1,3], explain: "Verbo assistir no sentido de ver exige preposição 'a'." },
    { q: "Assinale a crase correta:", options: ["Vou a Roma", "Vou à Itália", "Vou à Roma", "Vou a Itália"], correct: [1], explain: "Só há crase com artigo feminino; Itália tem, Roma não." },
    { q: "Em qual alternativa a vírgula está correta?", options: ["Se chover iremos", "Se chover, iremos", "Se, chover iremos", "Se chover iremos,"], correct: [1], explain: "Orações condicionais deslocadas pedem vírgula." },
    { q: "Qual plural está correto?", options: ["cidadãos", "cidadões", "cidadães", "cidadãos"], correct: [0], explain: "Plural de cidadão é cidadãos." },
    { q: "Qual alternativa apresenta regência nominal correta?", options: ["amor à pátria", "amor a pátria", "amor pela pátria", "amor com pátria"], correct: [0,2], explain: "Amor 'a' algo; com artigo feminino ocorre crase." }
  ],
  constitucional: [
    { q: "Direitos fundamentais são:", options: ["Cláusulas pétreas", "Abolíveis por EC", "Sem aplicabilidade imediata", "Meramente programáticos"], correct: [0], explain: "Direitos e garantias individuais são cláusulas pétreas (art. 60, §4º, IV)." },
    { q: "Sobre controle de constitucionalidade:", options: ["Pode ser difuso", "Pode ser concentrado", "Só pode ser difuso", "Só pode ser concentrado"], correct: [0,1], explain: "O Brasil adota ambos os modelos." },
    { q: "A CF/88 adotou a forma:", options: ["Federativa", "Unitária", "Confederada", "Imperial"], correct: [0], explain: "CF/88, art. 1º: República Federativa do Brasil." },
    { q: "Quem pode propor ADI?", options: ["Presidente", "Governador", "Cidadão", "PGR"], correct: [0,1,3], explain: "Legitimados do art. 103 incluem PR, Governadores e PGR; cidadão não." },
    { q: "Característica do STF no controle concentrado:", options: ["Efeito erga omnes", "Efeito inter partes", "Vinculante", "Não vinculante"], correct: [0,2], explain: "Decisões do STF em ADI têm efeito erga omnes e vinculante." }
  ]
};

export default function App() {
  const [matter, setMatter] = useState("portugues");
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);

  const current = questions[matter][idx];

  const toggle = (i) => {
    setSelected((prev) => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const submit = () => {
    const ok = current.correct.every(c => selected.includes(c)) && selected.every(s => current.correct.includes(s));
    setResult(ok ? "Acertou! 🏆 XP +10" : "Errou! ❌ XP +0");
  };

  const next = () => {
    setSelected([]);
    setResult(null);
    setIdx((prev) => (prev + 1) % questions[matter].length);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">TJ-SP Chronicles — Treineiro Competitivo</h1>
      <p className="text-base">Estude jogando: escolha a matéria, responda e farme XP!</p>

      <div className="flex gap-2">
        <button onClick={() => { setMatter("portugues"); setIdx(0); }} className="px-3 py-1 rounded-lg bg-gray-200">Português</button>
        <button onClick={() => { setMatter("constitucional"); setIdx(0); }} className="px-3 py-1 rounded-lg bg-gray-200">Constitucional</button>
      </div>

      <div className="border rounded-xl p-4 space-y-3 shadow">
        <h2 className="font-semibold">{current.q}</h2>
        <div className="space-y-2">
          {current.options.map((opt, i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" checked={selected.includes(i)} onChange={() => toggle(i)} />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        {result && (
          <div className="mt-3 p-3 rounded-lg bg-gray-100">
            <p className="font-semibold">{result}</p>
            {!result.includes("Acertou") && (
              <p className="text-sm mt-1"><strong>Insight:</strong> {current.explain}</p>
            )}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          {!result && (<button onClick={submit} className="px-3 py-1 rounded-lg bg-gray-800 text-white">Responder</button>)}
          {result && (<button onClick={next} className="px-3 py-1 rounded-lg bg-gray-200">Próxima</button>)}
        </div>
      </div>
    </div>
  );
}
