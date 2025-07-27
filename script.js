const questions = [
  {
    question: "What is the correct syntax for output in java?",
    answers: [
      {text: "print()",correct: false},
      {text: "printf()",correct: false},
      {text: "Println()",correct: false},
      {text: "System.out.println()",correct: true},
    ]
  },
  {
    question: "Which of the following is not an OOPS concept in java?",
    answers: [
      {text: "Inheritance",correct: false},
      {text: "Auto-Boxing",correct: true},
      {text: "Abstraction",correct: false},
      {text: "Encapsulation",correct: false},
    ]
  },
  {
    question: "Which of the following is a correct way to declare a variable in JavaScript?",
    answers: [
      {text: "let myVar",correct: false},
      {text: "const myVar",correct: false},
      {text: "var myVar",correct: false},
      {text: "All of the above",correct: true},
    ]
  },
  {
    question: "What does typeof NaN return?",
    answers: [
      {text: "NaN",correct: false},
      {text: "undefined",correct: false},
      {text: "number",correct: true},
      {text: "object",correct: false},
    ]
  },
  {
    question: "What is the output of console.log(typeof [])?",
    answers: [
      {text: "object",correct: true},
      {text: "array",correct: false},
      {text: "list",correct: false},
      {text: "undefined",correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.
question;
  currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct=answer.correct;
      }
      button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
  nextButton.style.display ="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer (e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
selectedBtn.classList.add("correct");
score++;
}else{
selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
if(button.dataset.correct === "true") {
button.classList.add("correct");
}
button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore() {
resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.
length}!`;
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length) {
showQuestion();
}else{
showScore();
}
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length) {
handleNextButton();
}else{
startQuiz();
}
});

startQuiz();
