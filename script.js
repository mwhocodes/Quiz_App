const quizData = [
  {
    question:
      'I have thick grey skin. \n I have big ears and a long trunk. \n I can spray water with my trunk. \n What am I ?',
    a: 'Spider',
    b: 'Elephant',
    c: 'Cat',
    d: 'Duck',
    correct: 'b'
  },
  {
    question:
      'I have 4 legs and a tail. \n I have whiskers. \n People like to keep me as a pet. \n What am I ?',
    a: 'Cat',
    b: 'Fish',
    c: 'Snail',
    d: 'Duck',
    correct: 'a'
  },
  {
    question:
      'I am a bird. \n I can swim but I cannot fly. \n I am black and white.\n What am I ?',
    a: 'Goldfish',
    b: 'Shark',
    c: 'Dolphin',
    d: 'Penguin',
    correct: 'd'
  },
  {
    question:
      'I have a large tail and big feet. \n I can hop along very fast. \n I live in Australia. \n What am I ?',
    a: 'Zebra',
    b: 'Elephant',
    c: 'Giraffe',
    d: 'Kangaroo',
    correct: 'd'
  },
  {
    question:
      'I am a bird. \n I make a "hoot" sound. \n I am usually awake at night. \n What am I ?',
    a: 'Cat',
    b: 'Dog',
    c: 'Owl',
    d: 'Rooster',
    correct: 'c'
  }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswer()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
  answerEls.forEach(answerEl => (answerEl.checked = false))
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You answer correctly at ${score}/${quizData.length} questions</h2>
      <button onClick="location.reload()">Reload</button>`
    }
  }
})
