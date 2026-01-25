const questions = {
  portugues: [
    {
      enunciado: "Assinale a alternativa cujo emprego do sinal indicativo de crase está correto:",
      alternativas: [
        "a) Entreguei o relatório à todos os presentes.",
        "b) Refiro-me à situação mencionada.",
        "c) O ingresso é à partir das 18h.",
        "d) Apliquei-me às tarefas sem demora.",
        "e) Aquela é a estratégia à seguir."
      ],
      correta: 1
    },
    {
      enunciado: "Assinale a alternativa em que NÃO há erro de concordância:",
      alternativas: [
        "a) Houveram reclamações diversas.",
        "b) Fazem muitos anos que estudo.",
        "c) Há necessidade de revisão urgente.",
        "d) Precisam ser ajustados os parâmetros.",
        "e) Existiam poucas opções válidas."
      ],
      correta: 2
    },
    {
      enunciado: "Em 'Aqueles relatórios, cansados, foram arquivados', o termo destacado exerce função de:",
      alternativas: [
        "a) Vocativo",
        "b) Aposto explicativo",
        "c) Adjunto adverbial",
        "d) Predicativo do sujeito",
        "e) Objeto indireto"
      ],
      correta: 1
    },
    {
      enunciado: "Assinale a alternativa em que a regência verbal está correta:",
      alternativas: [
        "a) Assistir televisão",
        "b) Preferir por café",
        "c) Gosto de estudar",
        "d) Chegar em casa",
        "e) Interferir sobre decisões"
      ],
      correta: 2
    },
    {
      enunciado: "Assinale a opção em que a pontuação está adequada:",
      alternativas: [
        "a) Se chover não iremos ao evento.",
        "b) Se chover não iremos, ao evento.",
        "c) Se chover, não iremos ao evento.",
        "d) Se chorver, iremos ao evento.",
        "e) Se chover iremos, não ao evento."
      ],
      correta: 2
    },
    {
      enunciado: "Assinale a alternativa em que há ambiguidade claramente perceptível:",
      alternativas: [
        "a) Ele viajou com o colega favorito.",
        "b) Ele visitou o museu ontem.",
        "c) Ela comeu a pizza toda.",
        "d) O livro foi lido.",
        "e) Nós chegamos cedo."
      ],
      correta: 0
    },
    {
      enunciado: "Assinale a alternativa cuja expressão está no modo subjuntivo:",
      alternativas: [
        "a) Se eu tiver tempo",
        "b) Eu terei tempo",
        "c) Eu tinha tempo",
        "d) Eu tenho tempo",
        "e) Eu tive tempo"
      ],
      correta: 0
    },
    {
      enunciado: "Em “Ele disse que viria”, a oração “que viria” é classificada como:",
      alternativas: [
        "a) Coordenada",
        "b) Subordinada substantiva",
        "c) Adverbial condicional",
        "d) Adjetiva restritiva",
        "e) Integrada à frase"
      ],
      correta: 1
    },
    {
      enunciado: "Assinale a alternativa que contém erro de colocação pronominal:",
      alternativas: [
        "a) Entregou-lhe o documento.",
        "b) Diga-me a verdade.",
        "c) Não se preocupe.",
        "d) Explica-nos melhor.",
        "e) Já lhe disseram."
      ],
      correta: 3
    },
    {
      enunciado: "Assinale a forma corretamente acentuada:",
      alternativas: [
        "a) Ideia",
        "b) Heroi",
        "c) Reu",
        "d) Paralelepípedo",
        "e) Ruis"
      ],
      correta: 3
    }
  ],

  constitucional: [
    {
      enunciado: "O controle de constitucionalidade pode ser exercido de forma:",
      alternativas: [
        "a) Limitada e irrestrita",
        "b) Difuso e concentrado",
        "c) Facultativo",
        "d) Administrativo apenas",
        "e) Financeiro apenas"
      ],
      correta: 1
    },
    {
      enunciado: "Direitos e garantias fundamentais são:",
      alternativas: [
        "a) Normas transitórias",
        "b) Normas programáticas",
        "c) Cláusulas pétreas",
        "d) Súmulas vinculantes",
        "e) Atos ordinatórios"
      ],
      correta: 2
    },
    {
      enunciado: "A Constituição Federal do Brasil foi promulgada em:",
      alternativas: [
        "a) 5 de outubro de 1988",
        "b) 7 de setembro de 1988",
        "c) 21 de abril de 1989",
        "d) 15 de novembro de 1989",
        "e) 1º de janeiro de 1988"
      ],
      correta: 0
    }
  ],

  informatica: [ // <-- SEM ASPAS, SEM ACENTO E COM VÍRGULA ANTES
    {
      enunciado: "Qual destas alternativas representa um recurso de segurança em redes de computadores?",
      alternativas: [
        "Firewall",
        "HD externo",
        "Mouse",
        "Monitor"
      ],
      correta: 0
    },
    {
      enunciado: "Qual extensão é típica de arquivos executáveis no Windows?",
      alternativas: [
        ".txt",
        ".exe",
        ".mp3",
        ".dll"
      ],
      correta: 1
    },
    {
      enunciado: "O que significa a sigla 'URL'?",
      alternativas: [
        "Universal Resource Link",
        "Uniform Resource Locator",
        "Unified Reference Link",
        "User Random Locator"
      ],
      correta: 1
    },
    {
      enunciado: "Qual navegador pertence à Google?",
      alternativas: [
        "Safari",
        "Firefox",
        "Chrome",
        "Opera"
      ],
      correta: 2
    },
    {
      enunciado: "Qual dispositivo é considerado periférico de entrada?",
      alternativas: [
        "Monitor",
        "Impressora",
        "Teclado",
        "Pen Drive"
      ],
      correta: 2
    }
  ],

  raciocinio: [
    {
      enunciado: "Se João tem 5 maçãs e compra mais 3, quantas maçãs ele tem agora?",
      alternativas: ["6","7","8","9"],
      correta: 2
    },
    {
      enunciado: "Na sequência 2, 4, 8, 16, o próximo número é:",
      alternativas: ["20","24","28","32"],
      correta: 3
    },
    {
      enunciado: "Qual a negação de: 'Todos estudam'?",
      alternativas: [
        "Ninguém estuda",
        "Alguns estudam",
        "Nem todos estudam",
        "Todos não estudam"
      ],
      correta: 2
    },
    {
      enunciado: "Se hoje é quarta-feira, que dia será daqui a 10 dias?",
      alternativas: [
        "Sábado",
        "Domingo",
        "Segunda-feira",
        "Sexta-feira"
      ],
      correta: 3
    },
    {
      enunciado: "Complete a sequência: A, C, E, G, ...",
      alternativas: ["I","H","J","L"],
      correta: 0
    }
  ]
};

export { questions };
