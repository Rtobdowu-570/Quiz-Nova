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
    this.timerInterval = null;
  } // Stop timer


  _createClass(Quiz, [{
    key: "stopTimer",
    value: function stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    } // Shuffle and limit questions

  }, {
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
      var timerDisplay = document.querySelector('.timer-display'); // clear any existing timer

      if (quiz.timerInterval) {
        clearInterval(quiz.timerInterval);
      } // Update the timer every second


      quiz.timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.textContent = "".concat(minutes, ":").concat(seconds);

        if (--timer < 0) {
          clearInterval(quiz.timerInterval);
          quiz.timerInterval = null; // Time's up, submit the quiz

          UI.showFinalResults(quiz);
        }

        quiz.timer = timer; // update quiz timer state
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
      var timerDisplay;
      return regeneratorRuntime.async(function showFinalResults$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              quiz.stopTimer();
              quiz.submitQuiz();
              quiz.getRemarks();
              quiz.getSummary();
              _context.next = 6;
              return regeneratorRuntime.awrap(Store.saveCompletedQuiz(quiz));

            case 6:
              Store.clearProgress(); // Stop the timer

              timerDisplay = document.querySelector('.timer-display');
              timerDisplay.textContent = '00:00'; // Hide quiz section and show results section

              document.querySelector('.question-container').style.display = 'none';
              document.querySelector('.result-container').style.display = 'block';

            case 11:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return UI;
}(); // Local Storage 


var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
    key: "saveProgress",
    // Auto save Quiz progress
    value: function saveProgress(quiz) {
      var _this = this;

      var progress;
      return regeneratorRuntime.async(function saveProgress$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              progress = {
                currentQuestionIndex: quiz.currentQuestionIndex,
                timer: quiz.timer,
                userAnswers: quiz.userAnswers,
                questions: quiz.questions
              };
              _context2.next = 4;
              return regeneratorRuntime.awrap(new Promise(function (resolve) {
                localStorage.setItem(_this.STORAGE_KEY.PROGRESS, JSON.stringify(progress));
                resolve();
              }));

            case 4:
              return _context2.abrupt("return", true);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error('Error Saving progress:', _context2.t0);
              return _context2.abrupt("return", false);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    } // load saved quiz progress

  }, {
    key: "loadProgress",
    value: function loadProgress() {
      try {
        var savedProgress = localStorage.getItem(this.STORAGE_KEY.PROGRESS);
        return savedProgress ? JSON.parse(savedProgress) : null;
      } catch (error) {
        console.error('Error loading progress:', error);
        return null;
      }
    } // check for saved progress

  }, {
    key: "hasSavedProgress",
    value: function hasSavedProgress() {
      return localStorage.getItem(this.STORAGE_KEY.PROGRESS) !== null;
    } // clear saved progress after quiz completion

  }, {
    key: "clearProgress",
    value: function clearProgress() {
      try {
        localStorage.removeItem(this.STORAGE_KEY.PROGRESS);
      } catch (error) {
        console.error('Error clearing progress:', error);
      }
    } // Save Completed quiz results

  }, {
    key: "saveCompletedQuiz",
    value: function saveCompletedQuiz(quiz) {
      var _this2 = this;

      var History, quizRecord;
      return regeneratorRuntime.async(function saveCompletedQuiz$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              History = this.getHistory();
              quizRecord = {
                date: new Date().toISOString().split('T')[0],
                score: quiz.score,
                totalQuestions: quiz.totalQuestions,
                Answers: this._formatAnswers(quiz),
                timeTaken: 900 - quiz.timer,
                // time taken in seconds
                remarks: quiz.remarks,
                summary: quiz.summary
              };
              History.unshift(quizRecord);
              _context3.next = 6;
              return regeneratorRuntime.awrap(new Promise(function (resolve) {
                localStorage.setItem(_this2.STORAGE_KEY.RESULTS, JSON.stringify(History));
                resolve();
              }));

            case 6:
              return _context3.abrupt("return", true);

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.error('Error saving completed quiz:', _context3.t0);
              return _context3.abrupt("return", false);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }, {
    key: "_formatAnswers",
    // Format Answers
    value: function _formatAnswers(quiz) {
      var formattedAnswers = {};
      quiz.questions.forEach(function (question, index) {
        var userAnswer = quiz.userAnswers[index];
        formattedAnswers[index] = {
          question: question.question,
          options: question.options,
          selected: userAnswer || 'Unanswered',
          correct: question.answer,
          isCorrect: userAnswer === question.answer
        };
      });
      return formattedAnswers;
    }
  }, {
    key: "getHistory",
    // Get quiz history
    value: function getHistory() {
      try {
        var history = localStorage.getItem(this.STORAGE_KEY.RESULTS);
        return history ? JSON.parse(history) : [];
      } catch (error) {
        console.error('Error getting quiz history:', error);
        return [];
      }
    }
  }]);

  return Store;
}(); // Storage keys


Store.STORAGE_KEY = {
  PROGRESS: 'quizProgress',
  RESULTS: 'quizResults'
}; // Event listeners
// store quiz instance globally

var quizInstance; // display question on DOM load

document.addEventListener('DOMContentLoaded', function _callee() {
  var shouldResume, progress;
  return regeneratorRuntime.async(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!Store.hasSavedProgress()) {
            _context4.next = 20;
            break;
          }

          shouldResume = confirm('You have a saved quiz progress. Do you want to resume?');

          if (!shouldResume) {
            _context4.next = 14;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(Store.loadProgress());

        case 5:
          progress = _context4.sent;
          quizInstance = new Quiz(progress.questions || questions); // Use saved questions or default
          // Restore state

          quizInstance.currentQuestionIndex = progress.currentQuestionIndex;
          quizInstance.timer = progress.timer;
          quizInstance.userAnswers = progress.userAnswers;
          UI.displayQuestionContent(quizInstance);
          UI.startTimer(quizInstance);
          _context4.next = 18;
          break;

        case 14:
          // Clear saved progress and start new quiz
          Store.clearProgress();
          quizInstance = new Quiz(questions);
          UI.displayQuestionContent(quizInstance);
          UI.startTimer(quizInstance);

        case 18:
          _context4.next = 23;
          break;

        case 20:
          // No saved progress, start new quiz
          quizInstance = new Quiz(questions);
          UI.displayQuestionContent(quizInstance);
          UI.startTimer(quizInstance);

        case 23:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Handle option selection

document.querySelector('.question-options').addEventListener('click', function _callee2(e) {
  var selectedOption;
  return regeneratorRuntime.async(function _callee2$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!e.target.classList.contains('option')) {
            _context5.next = 6;
            break;
          }

          UI.selectedOption(e.target); // Save selected option

          selectedOption = e.target.textContent;
          quizInstance.saveAnswer(quizInstance.currentQuestionIndex, selectedOption);
          _context5.next = 6;
          return regeneratorRuntime.awrap(Store.saveProgress(quizInstance));

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
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
