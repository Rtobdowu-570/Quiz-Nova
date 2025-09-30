// Quiz Class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = this.shuffleQuestions(questions, 30);
        this.timer = 900; // 15 minutes in seconds
        this.currentQuestionIndex = 0;
        this.totalQuestions = 30;
        this.userAnswers = {};
    }

    // Shuffle and limit questions
    shuffleQuestions(questions, limit) {
        const shuffled = questions.sort( () => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    }

// Check answer 
    checkAnswer(selectedOption) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            this.score++;
            return true;
        }
        return false;
    }

     // save user's answer
    saveAnswer(questionIndex, selectedOption) {
        this.userAnswers[questionIndex] = selectedOption;
    }
    
    //  get saved answer
    getSavedAnswer(questionIndex) {
        return this.userAnswers[questionIndex];
    }

    // Submit quiz
    submitQuiz() {

        // calculate final score 
        this.score = 0;
        for (let i = 0; i < this.totalQuestions; i++) {
            const savedAnswer = this.getSavedAnswer(i);
            const correctAnswer = this.questions[i].answer;
            if (savedAnswer === correctAnswer) {
                this.score++;
            }
        }

        // Logic to handle quiz submission
        const scoreEl = document.querySelector('.quiz-score');
        scoreEl.textContent = `${this.score} / ${this.totalQuestions}`;
 
    }

    //Quiz remarks 
    getRemarks() {
        const percentage = (this.score / this.totalQuestions) * 100;
        const remarksEl = document.querySelector('.quiz-remarks');
        if (percentage >= 80) {
            remarksEl.textContent = `Excellent Work! You scored ${percentage.toFixed(2)}%`;
        } else if (percentage >= 50) {
            remarksEl.textContent = `Great job! You scored ${percentage.toFixed(2)}%`;
        } else {
            remarksEl.textContent = `You scored ${percentage.toFixed(2)}%. Better luck next time!`;
        }
    }

    // Quiz summary
    getSummary() {
        const summaryEl = document.querySelector('.quiz-summary');
        const correctEl = document.querySelector('#correct-answers');
        const incorrectEl = document.querySelector('#incorrect-answers');
        const unansweredEl = document.querySelector('#unanswered-questions');

        correctEl.textContent = this.score;
        incorrectEl.textContent = this.totalQuestions - this.score;
        unansweredEl.textContent = this.totalQuestions - Object.keys(this.userAnswers).length;
    }
}


// UI Class
class UI {
    static displayQuestionContent(quiz) {
        const questionContainer = document.querySelector('.question-content');
        const questionEl = document.querySelector('.question-text');
        const optionsEl = document.querySelector('.question-options');

    // Current Question
    const currentQuestion = quiz.questions[quiz.currentQuestionIndex];

    // Display question
    questionEl.textContent = currentQuestion.question;

    // clear old options 
    optionsEl.innerHTML = '';

    // Display options
    currentQuestion.options.forEach( (option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.dataset.index = index;

         // show previously selected option
        if (option === quiz.getSavedAnswer(quiz.currentQuestionIndex)) {
            optionDiv.classList.add('selected');
        }

        optionsEl.appendChild(optionDiv);
    });


    // Update question tracker
    this.updateQuestionTracker(quiz);
}

    // Add selected class to a selected  option
    static selectedOption(optionEl) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        optionEl.classList.add('selected');
    }

    // question tracker
    static updateQuestionTracker(quiz) {
        const trackerEl = document.querySelector('.question-tracker');
        trackerEl.textContent = `${quiz.currentQuestionIndex + 1} / ${quiz.totalQuestions}`;
    }

    // Timer
    static startTimer(quiz) {
        let timer = quiz.timer, minutes, seconds;
        let timerDisplay = document.querySelector('.timer-display');
        
        // Update the timer every second
        const interval = setInterval( () => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(interval);
                // Time's up logic here
                UI.showFinalResults(quiz);
            }
        }, 1000);
    }

    // Move to next question
    static nextQuestion(quiz) {
        if (quiz.currentQuestionIndex < quiz.totalQuestions - 1) {
            quiz.currentQuestionIndex++;
            this.displayQuestionContent(quiz);
        }
    }

    // Move to previous question
    static prevQuestion(quiz) {
        if (quiz.currentQuestionIndex > 0) {
            quiz.currentQuestionIndex--;
            this.displayQuestionContent(quiz);
        }
    }

    // Show results
    static showFinalResults(quiz) {
    quiz.submitQuiz();
    quiz.getRemarks();
    quiz.getSummary();


    // Stop the timer
    const timerDisplay = document.querySelector('.timer-display');
    timerDisplay.textContent = '00:00';

    // Hide quiz section and show results section
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
    }

}


// Local Storage
class Store {}


// Event listeners

// store quiz instance globally
let quizInstance;

// display question on DOM load
document.addEventListener('DOMContentLoaded', () => {
    quizInstance = new Quiz(questions);
    UI.displayQuestionContent(quizInstance);
    UI.startTimer(quizInstance);
});

// Handle option selection
document.querySelector('.question-options').addEventListener('click', (e) => {
    if (e.target.classList.contains('option')) {
        UI.selectedOption(e.target);

        // Save selected option
        const selectedOption = e.target.textContent;
        quizInstance.saveAnswer(quizInstance.currentQuestionIndex, selectedOption);
    }
});


// Handle previous button 
document.querySelector('.prev-button').addEventListener('click', () => {
    UI.prevQuestion(quizInstance);
});

// Handle next button and submit button
const  nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', getResult);

function getResult() {
    if (quizInstance.currentQuestionIndex === quizInstance.totalQuestions - 1) {
        // Show final results
        UI.showFinalResults(quizInstance);


    } else {
        // Move to next question
        UI.nextQuestion(quizInstance);

         // Check if NEXT question is the last one, then change button text
        if (quizInstance.currentQuestionIndex === quizInstance.totalQuestions - 1) {
            nextButton.textContent = 'Submit';
        }
    }
}