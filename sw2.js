const quizData = [
    {
        question: "What is the output of the following code?console.log(typeof 42)",
        a: "Number",
        b: "string",
        c: "boolean",
        d: "undefined",
        correct: "a"
    },
    {
        question: "Which of the following is not a valid variable name in JavaScript?",
        a: "var1",
        b: "1var",
        c: "-var",
        d: "$var",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which of the following data types does not exist in JavaScript?",
        a: "undefined",
        b: "Float",
        c: "Number",
        d: "Symbol",
        correct: "b"
    },
    {
        question: "What is the output of the following code?console.log(typeof null)",
        a: "object",
        b: "null",
        c: "undefind",
        d: "function",
        correct: "a"
    },
    {
        question: "Which of the following is the correct syntax for a function expression?",
        a: "function myFunc(){}",
        b: "let myFunc = function(){}",
        c: "function = myFunc(){}",
        d: "myFunc function(){}",
        correct: "b"
    },
    {
        question: "What is the output of the following code?(function(){console.log(Hello, World!)})()",
        a: "Hello, World!",
        b: "undefind",
        c: "function",
        d: "Error",
        correct: "d"
    },
    {
        question: "Which of the following is an Immediately Invoked Function Expression (IIFE)?",
        a: "function(){}",
        b: "(function() {})",
        c: "(function(){}())",
        d: "function() {}()",
        correct: "c"
    },
    {
        question: "What will the following code output?function test() { console.log(this);} test(); ",
        a: "window object (in a browser context)",
        b: "undefind",
        c: "Error",
        d: "null",
        correct: "a"
    }
];

let currentQuiz = 0;
let score = 0;
let userAnswers = [];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const showAnswerBtn = document.getElementById('show-answer');
const reloadBtn = document.getElementById('reload');

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        userAnswers.push(answer);
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
                <button id="show-answers">Show Answers</button>
            `;
            const showAnswersBtn = document.getElementById('show-answers');
            showAnswersBtn.addEventListener('click', showAnswers);
        }
    }
});

function showAnswers() {
    quiz.style.display = 'none';
    const reviewContainer = document.getElementById('review');
    reviewContainer.style.display = 'block';
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    quizData.forEach((quizItem, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <b>Q${index + 1}:</b> ${quizItem.question}<br>
            <b>Your answer:</b> ${quizItem[userAnswers[index]] || 'Not answered'}<br>
            <b>Correct answer:</b> ${quizItem[quizItem.correct]}<br>
        `;
        reviewList.appendChild(li);
    });
}
