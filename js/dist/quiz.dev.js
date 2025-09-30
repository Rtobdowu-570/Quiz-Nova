"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Quiz Class
var Quiz =
/*#__PURE__*/
function () {
  function Quiz(questions) {
    _classCallCheck(this, Quiz);

    this.score = 0;
    this.questions = this.shuffleQuestions(questions, 30);
    this.timer = 900; // 15 minutes in seconds

    this.currentQuestionIndex = 0;
    this.totalQuestions = 30;
    this.userAnswers = {};
  } // Shuffle and limit questions


  _createClass(Quiz, [{
    key: "shuffleQuestions",
    value: function shuffleQuestions(questions, limit) {
      var shuffled = questions.sort(function () {
        return 0.5 - Math.random();
      });
      return shuffled.slice(0, limit);
    } // Check answer 

  }, {
    key: "checkAnswer",
    value: function checkAnswer(selectedOption) {
      var currentQuestion = this.questions[this.currentQuestionIndex];

      if (selectedOption === currentQuestion.answer) {
        this.score++;
        return true;
      }

      return false;
    } // save user's answer

  }, {
    key: "saveAnswer",
    value: function saveAnswer(questionIndex, selectedOption) {
      this.userAnswers[questionIndex] = selectedOption;
    } //  get saved answer

  }, {
    key: "getSavedAnswer",
    value: function getSavedAnswer(questionIndex) {
      return this.userAnswers[questionIndex];
    } // Submit quiz

  }, {
    key: "submitQuiz",
    value: function submitQuiz() {
      // calculate final score 
      this.score = 0;

      for (var i = 0; i < this.totalQuestions; i++) {
        var savedAnswer = this.getSavedAnswer(i);
        var correctAnswer = this.questions[i].answer;

        if (savedAnswer === correctAnswer) {
          this.score++;
        }
      } // Logic to handle quiz submission


      var scoreEl = document.querySelector('.quiz-score');
      scoreEl.textContent = "".concat(this.score, " / ").concat(this.totalQuestions);
    } //Quiz remarks 

  }, {
    key: "getRemarks",
    value: function getRemarks() {
      var percentage = this.score / this.totalQuestions * 100;
      var remarksEl = document.querySelector('.quiz-remarks');

      if (percentage >= 80) {
        remarksEl.textContent = "Excellent Work! You scored ".concat(percentage.toFixed(2), "%");
      } else if (percentage >= 50) {
        remarksEl.textContent = "Great job! You scored ".concat(percentage.toFixed(2), "%");
      } else {
        remarksEl.textContent = "You scored ".concat(percentage.toFixed(2), "%. Better luck next time!");
      }
    } // Quiz summary

  }, {
    key: "getSummary",
    value: function getSummary() {
      var summaryEl = document.querySelector('.quiz-summary');
      var correctEl = document.querySelector('#correct-answers');
      var incorrectEl = document.querySelector('#incorrect-answers');
      var unansweredEl = document.querySelector('#unanswered-questions');
      correctEl.textContent = this.score;
      incorrectEl.textContent = this.totalQuestions - this.score;
      unansweredEl.textContent = this.totalQuestions - Object.keys(this.userAnswers).length;
    }
  }]);

  return Quiz;
}(); // UI Class


var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, null, [{
    key: "displayQuestionContent",
    value: function displayQuestionContent(quiz) {
      var questionContainer = document.querySelector('.question-content');
      var questionEl = document.querySelector('.question-text');
      var optionsEl = document.querySelector('.question-options'); // Current Question

      var currentQuestion = quiz.questions[quiz.currentQuestionIndex]; // Display question

      questionEl.textContent = currentQuestion.question; // clear old options 

      optionsEl.innerHTML = ''; // Display options

      currentQuestion.options.forEach(function (option, index) {
        var optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.dataset.index = index; // show previously selected option

        if (option === quiz.getSavedAnswer(quiz.currentQuestionIndex)) {
          optionDiv.classList.add('selected');
        }

        optionsEl.appendChild(optionDiv);
      }); // Update question tracker

      this.updateQuestionTracker(quiz);
    } // Add selected class to a selected  option

  }, {
    key: "selectedOption",
    value: function selectedOption(optionEl) {
      var options = document.querySelectorAll('.option');
      options.forEach(function (option) {
        return option.classList.remove('selected');
      });
      optionEl.classList.add('selected');
    } // question tracker

  }, {
    key: "updateQuestionTracker",
    value: function updateQuestionTracker(quiz) {
      var trackerEl = document.querySelector('.question-tracker');
      trackerEl.textContent = "".concat(quiz.currentQuestionIndex + 1, " / ").concat(quiz.totalQuestions);
    } // Timer

  }, {
    key: "startTimer",
    value: function startTimer(quiz) {
      var timer = quiz.timer,
          minutes,
          seconds;
      var timerDisplay = document.querySelector('.timer-display'); // Update the timer every second

      var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.textContent = "".concat(minutes, ":").concat(seconds);

        if (--timer < 0) {
          clearInterval(interval); // Time's up logic here

          UI.showFinalResults(quiz);
        }
      }, 1000);
    } // Move to next question

  }, {
    key: "nextQuestion",
    value: function nextQuestion(quiz) {
      if (quiz.currentQuestionIndex < quiz.totalQuestions - 1) {
        quiz.currentQuestionIndex++;
        this.displayQuestionContent(quiz);
      }
    } // Move to previous question

  }, {
    key: "prevQuestion",
    value: function prevQuestion(quiz) {
      if (quiz.currentQuestionIndex > 0) {
        quiz.currentQuestionIndex--;
        this.displayQuestionContent(quiz);
      }
    } // Show results

  }, {
    key: "showFinalResults",
    value: function showFinalResults(quiz) {
      quiz.submitQuiz();
      quiz.getRemarks();
      quiz.getSummary(); // Stop the timer

      var timerDisplay = document.querySelector('.timer-display');
      timerDisplay.textContent = '00:00'; // Hide quiz section and show results section

      document.querySelector('.question-container').style.display = 'none';
      document.querySelector('.result-container').style.display = 'block';
    }
  }]);

  return UI;
}(); // Local Storage


var Store = function Store() {
  _classCallCheck(this, Store);
}; // Event listeners
// store quiz instance globally


var quizInstance; // display question on DOM load

document.addEventListener('DOMContentLoaded', function () {
  quizInstance = new Quiz(questions);
  UI.displayQuestionContent(quizInstance);
  UI.startTimer(quizInstance);
}); // Handle option selection

document.querySelector('.question-options').addEventListener('click', function (e) {
  if (e.target.classList.contains('option')) {
    UI.selectedOption(e.target); // Save selected option

    var selectedOption = e.target.textContent;
    quizInstance.saveAnswer(quizInstance.currentQuestionIndex, selectedOption);
  }
}); // Handle previous button 

document.querySelector('.prev-button').addEventListener('click', function () {
  UI.prevQuestion(quizInstance);
}); // Handle next button and submit button

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', getResult);

function getResult() {
  if (quizInstance.currentQuestionIndex === quizInstance.totalQuestions - 1) {
    // Show final results
    UI.showFinalResults(quizInstance);
  } else {
    // Move to next question
    UI.nextQuestion(quizInstance); // Check if NEXT question is the last one, then change button text

    if (quizInstance.currentQuestionIndex === quizInstance.totalQuestions - 1) {
      nextButton.textContent = 'Submit';
    }
  }
}
//# sourceMappingURL=quiz.dev.js.map
