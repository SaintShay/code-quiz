function init() {
    grabScore()
}

var startButton = document.querySelector(".start");
var scoreButton = document.querySelector(".scoreboard");
var timerPiece = document.querySelector("#time-left");
var footer = document.querySelector(".footer");
var quizCont = document.getElementById("quiz-content");

var score = 0;
var timeLeft = 0;
var timer;
var currentQuestion = -1;

var questions = [{
    title: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    answer: "False"
},
{
    title: "How do you write 'Hello World' in an alert box?",
    choices: ['msg("Hello World")', 'msgBox("Hello World")', 'alertBox("Hello World")', 'alert("Hello World")' ],
    answer: 'alert("Hello World")'
},
{
    title: "Which operator is used to assign a value to a variable?",
    choices: [" - ", " = ", " * ", " x "],
    answer: " = " 
},
{
    title: "Inside what tag is the correct place to insert a JavaScript?",
    choices: ["head tag", "footer tag", "body tag", "html tag"],
    answer: "body tag"
},
{
    title: "Which of the following methods has the ability to combine two arrays and return one new array?",
    choices: ["map()", "sort()", "splice()", "concat()"],
    answer: "concat()"
},
{
    title: "What javascript method removes the last element from an array and returns that element.",
    choices: ["push()", "pop()", "reverse()", "length()"],
    answer: "pop()"
}
]

startButton.addEventListener("click", gameStart)
scoreButton.addEventListener("click", grabScore)

function gameStart() {

}

function gameEnd() {
    clearInterval(timer);
}