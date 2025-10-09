// Quiz Class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = this.shuffleQuestions(questions, 30);
        this.timer = 900; // 15 minutes in seconds
        this.currentQuestionIndex = 0;
        this.totalQuestions = 30;
        this.userAnswers = {};
        this.timerInterval = null;
    }

    // Stop timer
        stopTimer() {
            if(this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
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

        // clear any existing timer
        if (quiz.timerInterval) {
            clearInterval(quiz.timerInterval);
        }

        
        // Update the timer every second
        quiz.timerInterval = setInterval( () => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(quiz.timerInterval);
                quiz.timerInterval = null;
                // Time's up, submit the quiz
                UI.showFinalResults(quiz);
            }
            quiz.timer = timer; // update quiz timer state
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
    static  async showFinalResults(quiz) {
    quiz.stopTimer();
    quiz.submitQuiz();
    quiz.getRemarks();
    quiz.getSummary();
    await Store.saveCompletedQuiz(quiz);
    Store.clearProgress();


    // Stop the timer
    const timerDisplay = document.querySelector('.timer-display');
    timerDisplay.textContent = '00:00';

    // Hide quiz section and show results section
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
    }

}


// Local Storage 
class Store {


    // Auto save Quiz progress
    static async saveProgress(quiz) {
        try {
            const progress = {
                currentQuestionIndex: quiz.currentQuestionIndex,
                timer: quiz.timer,
                userAnswers: quiz.userAnswers,
                questions: quiz.questions,
            }
            await new Promise( (resolve) => {
                localStorage.setItem(this.STORAGE_KEY.PROGRESS, JSON.stringify(progress));
                resolve();
            })
            return true;
        } catch(error) {
            console.error('Error Saving progress:', error);
            return false;
        }
    }

    // load saved quiz progress
    static loadProgress() {
                try {
                    const savedProgress = localStorage.getItem(this.STORAGE_KEY.PROGRESS);
                    return savedProgress ? JSON.parse(savedProgress) : null;
                } catch(error) {
                    console.error('Error loading progress:', error);
                    return null;
                }
            }

    // check for saved progress
        static hasSavedProgress() {
            return localStorage.getItem(this.STORAGE_KEY.PROGRESS) !== null;
        }

    // clear saved progress after quiz completion
        static clearProgress() {
        try {
            localStorage.removeItem(this.STORAGE_KEY.PROGRESS); 
        } catch(error) {
            console.error('Error clearing progress:', error);
        }
        }


    // Save Completed quiz results
    static async saveCompletedQuiz(quiz) {
        try {
            const History = this.getHistory()

            const quizRecord = {
                date: new Date().toISOString().split('T')[0],
                score: quiz.score,
                totalQuestions: quiz.totalQuestions,
                Answers: this._formatAnswers(quiz),
                timeTaken: 900 - quiz.timer, // time taken in seconds
                remarks: quiz.remarks,
                summary: quiz.summary,
            };

            History.unshift(quizRecord);
            await new Promise( (resolve) => {
                localStorage.setItem(this.STORAGE_KEY.RESULTS, JSON.stringify(History));
                resolve();
            });
            return true;
        }  catch(error) {
            console.error('Error saving completed quiz:', error);
            return false;
        }
    };

    // Format Answers
    static _formatAnswers(quiz) {
        const formattedAnswers = {};

        quiz.questions.forEach( (question, index) => {
            const userAnswer = quiz.userAnswers[index];
            formattedAnswers[index] = {
                question: question.question,
                options: question.options,
                selected: userAnswer || 'Unanswered',
                correct: question.answer,
                isCorrect: userAnswer === question.answer,
            };
        });
        return formattedAnswers;
    };

    // Get quiz history
    static getHistory() {
        try {
            const history = localStorage.getItem(this.STORAGE_KEY.RESULTS); 
            return history ? JSON.parse(history) : [];
        } catch(error) {
            console.error('Error getting quiz history:', error);
            return [];
        }
    };
}

// Storage keys
Store.STORAGE_KEY = {
    PROGRESS: 'quizProgress',
    RESULTS: 'quizResults',
};


// Event listeners

// store quiz instance globally
let quizInstance;

// display question on DOM load
document.addEventListener('DOMContentLoaded', async () => {
    if (Store.hasSavedProgress()) {
        const shouldResume = confirm('You have a saved quiz progress. Do you want to resume?');
    
    if (shouldResume) {
        const progress = await Store.loadProgress();
        quizInstance = new Quiz(progress.questions || questions); // Use saved questions or default

        // Restore state
        quizInstance.currentQuestionIndex = progress.currentQuestionIndex;
        quizInstance.timer = progress.timer;
        quizInstance.userAnswers = progress.userAnswers;

        UI.displayQuestionContent(quizInstance);
        UI.startTimer(quizInstance);
    }  else{
        // Clear saved progress and start new quiz
        Store.clearProgress();
        quizInstance = new Quiz(questions);
        UI.displayQuestionContent(quizInstance);
        UI.startTimer(quizInstance);
    }

    } else {
        // No saved progress, start new quiz
        quizInstance = new Quiz(questions);
        UI.displayQuestionContent(quizInstance);
        UI.startTimer(quizInstance);
    }
});

// Handle option selection
document.querySelector('.question-options').addEventListener('click', async (e) => {
    if (e.target.classList.contains('option')) {
        UI.selectedOption(e.target);

        // Save selected option
        const selectedOption = e.target.textContent;
        quizInstance.saveAnswer(quizInstance.currentQuestionIndex, selectedOption);
        await Store.saveProgress(quizInstance);
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