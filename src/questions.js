/* eslint quotes: ["error", "double", { "avoidEscape": true }] */

export default [
  {
    title: "Różnica między `==` & `===`?",
    answers: [
      "żadna, to to samo",
      "`==` ewentualnie konwertuje swoje operandy, `===` nie"
    ],
    correctAnswerIndex: 1
  },
  {
    title: "Różnica między `null` a `undefined`?",
    answers: [
      "żadna, to to samo",
      "`null` jest to obiekt, `undefined` to nieokreślona wartość"
    ],
    correctAnswerIndex: 1
  },
  {
    title: "W jaki sposób można odwrócić ciąg znaków? Z **pies** otrzymać **seip**.",
    answers: [
      "`'pies'.reverse()`",
      "`'pies'.split('').reverse().join('')`",
      "`'pies'.invert()`",
      "`'pies'.join('').reverse().split('')`",
      "`'pies'.flip()`"
    ],
    correctAnswerIndex: 1
  },
  {
    title: "Co zwróci operator `typeof` dla tablicy",
    answers: [
      "array",
      "object"
    ],
    correctAnswerIndex: 1
  },
  {
    title: "Jak usunąć element (węzeł) z dokumentu?",
    answers: [
      "`element.removeNode()`",
      "`element.removeElement()`",
      "`element.parentNode.removeChild(element)`",
      "`element.remove()`"
    ],
    correctAnswerIndex: 2
  },
  {
    title: "Jak skopiować tablicę?",
    answers: [
      "`[1, 2].copy(true)`;",
      "`[1, 2].copy()`;",
      "`[1, 2].clone()`;",
      "`[1, 2].slice(0)`;"
    ],
    correctAnswerIndex: 3
  }
]
