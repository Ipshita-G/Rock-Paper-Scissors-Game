# 🎮 Rock Paper Scissors - Battle Arena

A modern, visually stunning **Rock Paper Scissors** game with an epic battle arena aesthetic. Challenge the computer in this classic game of strategy and luck!

## ✨ Features

- **Battle Arena Layout**: Experience a "fight between two" design with players on opposite sides
- **Live Choice Display**: See both your choice and the computer's choice in real-time
- **Score Tracking**: Keep track of wins with a running score system
- **Responsive Design**: Beautiful gameplay on desktop, tablet, and mobile devices
- **Dynamic Feedback**: Color-coded results (green for wins, red for losses, yellow for ties)
- **Futuristic UI**: Glowing cyan neon aesthetic with smooth animations
- **Victory Conditions**: Win 5 rounds to claim victory and see your triumph screen

## 🎮 How to Play

1. **Choose Your Weapon**: Click one of the three buttons:
   - 🪨 Rock
   - 📄 Paper
   - ✂️ Scissors

2. **Battle**: Your choice and the computer's choice are displayed side-by-side in the battle arena

3. **View Results**: The center displays:
   - Who won the round
   - Color indicator (green = you won, red = computer won, yellow = tie)

4. **Win Condition**: First to 5 wins claims victory!
   - **You Win**: Redirects to winner screen
   - **Computer Wins**: Redirects to computer victory screen

## 🎨 Game Rules

- **Rock** beats **Scissors** ✂️ → 🪨
- **Paper** beats **Rock** 🪨 → 📄
- **Scissors** beats **Paper** 📄 → ✂️
- **Same choice** = **Tie** 🤝

## 🛠️ Tech Stack

- **HTML5**: Semantic structure with battle arena layout
- **CSS3**: 
  - Modern Grid and Flexbox layouts
  - Gradient backgrounds and neon glow effects
  - Smooth transitions and animations
  - Fully responsive design
  - Mobile-first approach

- **JavaScript (ES6)**:
  - Dynamic DOM manipulation
  - Random computer choices
  - Real-time score management
  - Game state logic
  - Page navigation on victory

## 📱 Responsive Breakpoints

- **Desktop (900px+)**: Three-column battle arena layout
- **Tablet (540px - 900px)**: Stacked single-column layout
- **Mobile (< 540px)**: Optimized touch-friendly interface

## 🎨 Design Highlights

### Color Palette
- **Primary**: Cyan/Blue (#85e5ff)
- **Success**: Green (#5cea92)
- **Warning**: Yellow (#f9d76b)
- **Error**: Red (#ff6c8e)
- **Background**: Dark space gradient

### Visual Effects
- Radial glow backgrounds
- Glowing text shadows
- Smooth hover animations
- Shadow effects on cards
- Radiant center VS indicator

## 📂 Project Structure

```
Rock Paper Scissors/
├── index.html          # Main game page
├── index.js            # Game logic
├── style.css           # Styling and animations
├── pw.html             # Player win screen
├── pw.css              # Player win styles
├── cw.html             # Computer win screen
├── cw.css              # Computer win styles
└── README.md           # This file
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Click** on a weapon to start playing
4. **Have Fun** battling the computer!

No dependencies, no installation required - just pure HTML, CSS, and JavaScript!

## 🎯 Game Flow

```
Start Game
    ↓
Choose Weapon (Rock/Paper/Scissors)
    ↓
Computer Makes Random Choice
    ↓
Compare & Display Result
    ↓
Update Scores
    ↓
First to 5 Wins?
    ├→ YES: Show Victory Screen
    └→ NO: Return to Choose Weapon
```

## 💡 Features in Detail

### Battle Arena
- **Left Side (YOU)**: Your information and choices
- **Center (VS)**: Result and battle indicator
- **Right Side (COMPUTER)**: Computer's information and choices

### Score System
- Tracks individual round wins
- First player to reach 5 wins the match
- Scores reset after victory for a rematch

### Visual Feedback
- Large emoji displays for immediate understanding
- Animated transitions when choices are made
- Color-coded result messages for quick feedback
- Glowing effects to highlight important information

## 🔮 Future Enhancements

- [ ] Add difficulty levels (Easy/Medium/Hard)
- [ ] Multiplayer mode with two controllers
- [ ] Sound effects and background music
- [ ] Achievement badges
- [ ] Game statistics and win history
- [ ] Leaderboard system
- [ ] VS Computer AI with strategy patterns

## 📝 Notes

- The game uses `window.location.replace()` to navigate to victory screens
- Scores automatically reset when transitioning to win screens
- Game is fully client-side (no backend required)
- All data stored in JavaScript variables (no persistence)

## 🎉 Enjoy!

Challenge yourself against the computer and prove your strategic thinking! May the best player win! 🏆

---

**Created with ❤️ using HTML, CSS, and JavaScript**
