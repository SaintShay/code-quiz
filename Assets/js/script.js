function init() {
    grabScore()
};

var startButton = document.querySelector(".start");
var scoreButton = document.querySelector(".scoreboard");
var timerPiece = document.querySelector("#time-left");
var footer = document.querySelector(".footer");
var quizCont = document.querySelector("#quiz-content");

var score = 0;
var timeLeft = 0;
var timer;
var currentQuestion = -1;

var questions = [{
    title: "The external JavaScript file must contain the 'script' tag.",
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
    timeLeft = 100;
    timerPiece.innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        timerPiece.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameEnd();
        }
    }, 1000);
    loop();
};

function gameEnd() {
    clearInterval(timer);

    var quizContent = `
    <p class="p-title-small">Game Over!</p>
    <p class="p-title-smaller">Your score is ` + score +  ` /120!</p>
    <p class="p-title-smaller">You got ` + score / 20 +  ` questions correct!</p>
    <input type="text" id="name" placeholder="Initials here"> 
    <button class="quiz-button" onclick="setScore()">Save Score!</button>`;
    
    quizCont.innerHTML = quizContent;
    console.log(quizContent)
};

function goodAnswer() {
    score += 20;
    loop();
};

function badAnswer() {
    timeLeft -= 10;
    loop();
};

function loop() {
    currentQuestion++;
      
    if (currentQuestion > questions.length - 1) {
        gameEnd();
        return;
    }

    var quizContent = `<p class="p-title">` + questions[currentQuestion].title + `</p>`
  
    for (var quesOptionLoop = 0; quesOptionLoop < questions[currentQuestion].choices.length; quesOptionLoop++) {
  
        var quesButton = `<button class="ques-button" onclick=\"[ANS]\">[CHOICE]</button>`; 
        quesButton = quesButton.replace("[CHOICE]", questions[currentQuestion].choices[quesOptionLoop]);

        if (questions[currentQuestion].choices[quesOptionLoop] == questions[currentQuestion].answer) {
            quesButton = quesButton.replace("[ANS]", "goodAnswer()");
        } else {
            quesButton = quesButton.replace("[ANS]", "badAnswer()");
        }

      console.log(quesButton)
      quizContent += quesButton
    }
  
    console.log(quizContent) 
    quizCont.innerHTML = quizContent;
};

function grabScore() {
    var quizContent = `
      <p class="p-title">` + localStorage.getItem("highscoreName") + ` your highscore is:</p>
      <p class="p-title">` + localStorage.getItem("highscore") + `</p><br> 
      <button class="quiz-button" onclick="clearScore()">Clear score!</button>
      <button class="quiz-button" onclick="resetGame()">Play Again!</button> `;

      quizCont.innerHTML = quizContent;
  };

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById("name").value);
    
    grabScore()

};

function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
  
    timerPiece.innerHTML = timeLeft;
   
    var quizContent = `
    <p id="top-text">Welcome to the Code Knowledge Tester! See just how much you really know!</p>
    <p id= "bottom-text">Answer questions correctly, and you won't lose time! Answer incorrectly, and your time will decrease, leading to a lower score!</p>
    <button onclick="gameStart()" class="start">Start!</button>
    `
    quizCont.innerHTML = quizContent;
    console.log(quizContent)
  }

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
  
    resetGame()
  };