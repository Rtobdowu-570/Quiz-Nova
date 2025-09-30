# Quiz-Nova

A modern, interactive quiz application built with vanilla JavaScript, HTML, and CSS. Test your knowledge across multiple categories including science, history, geography, arts, sports, technology, mathematics, and biology.

![Quiz-Nova Logo](assets/images/nova.png)

## 🌟 Features

- **Diverse Question Bank**: Over 200 carefully curated questions across 8 different categories
- **Timed Quiz**: 15-minute timer for a challenging experience
- **30 Random Questions**: Each quiz session selects 30 random questions from the pool
- **Interactive Navigation**: Navigate between questions with previous/next buttons
- **Real-time Scoring**: Instant feedback and scoring system
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Results Summary**: Detailed breakdown of correct, incorrect, and unanswered questions
- **Performance-based Remarks**: Encouraging feedback based on your score

## 🚀 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ features, classes, and DOM manipulation
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Inter font family for typography

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required - runs entirely in the browser

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/quiz-nova.git
   cd quiz-nova
   ```

2. **Open the application**:
   - Open `index.html` in your web browser, or
   - Use a local server for better experience:
     ```bash
     # Using Python (if installed)
     python -m http.server 8000

     # Using Node.js (if installed)
     npx http-server

     # Using PHP (if installed)
     php -S localhost:8000
     ```

3. **Navigate to the application**:
   - Open your browser and go to `http://localhost:8000` (or the appropriate URL)

## 🎮 How to Use

1. **Start the Quiz**: Click the "Start Quiz Now" button on the homepage
2. **Answer Questions**: Select your answer from the four options provided
3. **Navigate**: Use the Previous/Next buttons to move between questions
4. **Timer**: You have 15 minutes to complete all 30 questions
5. **Submit**: Click "Submit" on the last question to view your results
6. **Review Results**: See your score, breakdown, and performance remarks
7. **Try Again**: Click "Start Another Quiz" to take a new quiz with different questions

## 📁 Project Structure

```
quiz-nova/
├── index.html              # Landing page
├── quiz.html               # Quiz interface
├── README.md               # Project documentation
├── assets/
│   ├── css/
│   │   ├── style.css       # Homepage styles
│   │   └── quiz.css        # Quiz page styles
│   ├── icons/
│   │   └── favicon.ico     # Website favicon
│   └── images/
│       └── nova.png        # Logo image
├── config/
│   └── questions.js        # Question database
└── js/
    └── quiz.js             # Quiz logic and UI interactions
```

## 🎯 Quiz Rules

- Each quiz consists of 30 randomly selected questions
- You have 30 seconds per question (15 minutes total)
- Questions are multiple-choice with 4 options
- You can navigate back and forth between questions
- Only one answer can be selected per question
- Unanswered questions count as incorrect
- Timer continues running even when navigating between questions

## 🔧 Customization

### Adding New Questions

To add new questions, edit `config/questions.js`:

```javascript
{
  question: "Your question here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answer: "Correct Option"
}
```

### Modifying Quiz Settings

In `js/quiz.js`, you can adjust:
- Number of questions per quiz (currently 30)
- Timer duration (currently 15 minutes)
- Scoring system

### Styling Changes

- `assets/css/style.css`: Homepage styling
- `assets/css/quiz.css`: Quiz page styling
- Uses CSS custom properties for easy theme customization

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (up to 767px)

## 🌐 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Questions sourced from various educational resources
- Icons provided by Font Awesome
- Fonts from Google Fonts
- Inspiration from modern web design trends

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainers.

---

**Happy quizzing with Quiz-Nova! 🧠✨**
# Quiz-Nova
