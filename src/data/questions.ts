export interface Question {
  question: string;
  options: string[];
  answer: string;
}

const data: Question[] = [
  {
    question: "O que é Vanilla JavaScript?",
    options: [
      "JavaScript puro",
      "Uma biblioteca JavaScript",
      "Um framework JavaScript",
      "Um compilador de JavaScript",
    ],
    answer: "JavaScript puro",
  },
  {
    question: "Com qual instrução declaramos uma constante em JavaScript?",
    options: ["const", "let", "var", "define"],
    answer: "const",
  },
  {
    question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
    options: ["string", "number", "boolean", "float"],
    answer: "float",
  },
  {
    question: "Qual dos métodos a seguir seleciona um elemento?",
    options: ["querySelector", "parseInt", "sort", "reduce"],
    answer: "querySelector",
  },
  {
    question:
      "Qual destas propriedades dá a quantidade de elementos de um array?",
    options: ["qty", "length", "items", "index"],
    answer: "length",
  },
];

export default data;
