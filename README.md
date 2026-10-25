# QuizUp ✦ — Modern Interactive Quiz Gaming Hub
> **“Learn something new, one question at a time.”**

QuizUp is a modern, responsive quiz gaming web application created for learners and trivia enthusiasts of different ages and backgrounds.

---

## 🌟 Releases & Milestones

### Prompt 1: Project Foundation & UI Design
- Complete semantic single-page layout for all 4 primary views (Dashboard, Quiz Setup, Active Quiz, Results & Review).
- Soft lavender, white, and slate design system with typography (*Plus Jakarta Sans*), micro-animations, and mobile-first responsiveness.
- Initial state management, `localStorage` integration, and accessible modal navigation.

### Prompt 2: Comprehensive Question Bank & Selection Engine
- **Initial Question Bank**: 30 questions per subject category across 3 difficulty tiers.
- **Extensible Question Structure**: Modular dictionary mapping categories (`programming`, `general`, `science`, `math`) to difficulty levels.
- **Randomized Question & Option Shuffling**:
  - Implements Fisher-Yates array shuffling on every quiz attempt.
  - Dynamically recalculates `correctIndex` to ensure answer evaluation remains 100% accurate regardless of option reordering.
  - Safe pool capping: seamlessly handles requests when question count exceeds available questions.
- **Configurable Practice Length**:
  - Choose between **5 Questions** (Quick Sprint) and **10 Questions** (Full Challenge) in Quiz Setup.
- **Learning Mode vs. Exam Mode**:
  - *Learning Mode*: Instant feedback, option locking, and conceptual explanations.
  - *Exam Mode*: Strict timed countdown, provisional option selection, and post-session review.
- **Data Hardening & Safe Persistence**:
  - Resilient `localStorage` parsing that sanitizes corrupted or malformed data while preserving learner attempt history and best scores.

### Prompt 4: Premium QuizWiz-Inspired Design, Interactions & Animations
- **QuizWiz-Inspired Design System**: Deep royal purple (`#7c3aed`), soft lavender surface layers (`#ede9fe`, `#f5f3ff`), clean white cards, subtle pink accents (`#ec4899`), glassmorphism headers, and mobile-first app aesthetics.
- **Dynamic Welcome & Dashboard**:
  - Time-of-day personalized greeting (Morning, Afternoon, Evening) with quick stats ribbon.
  - **Daily Spark ⚡**: Fast daily 5-question mixed challenge with dynamic date-based seed.
  - Featured Quizzes row with quick-start action tags.
  - Learning Mode vs. Exam Mode showcase banners with one-click direct entry.
- **Expanded to 6 Full Categories (270 Practice Questions)**:
  - **Technology** (formerly Programming): HTML, CSS, JS, logic, debugging.
  - **Academics** (formerly Science): Physics, Chemistry, Biology, Astronomy.
  - **General Knowledge**: World geography, history, inventions, landmarks.
  - **Competitive Exams** (formerly Math & Aptitude): Commercial math, percentages, logical deductions, sequences, problem solving.
  - **Sports (NEW)**: Olympics, football, cricket, tennis, athletics, world records.
  - **Entertainment (NEW)**: World cinema, Oscars, global music, literature, pop culture.
- **Enhanced Interactive Quiz Experience**:
  - Fluid card entrance transitions without blocking delays.
  - Animated answer selection with subtle scale and violet glow.
  - Learning Mode: instant feedback, emerald correct / rose incorrect highlights, and clear explanation card.
  - Exam Mode: strict countdown timer with subtle urgency pulse, provisional selection, and submission lock.
  - Full keyboard navigation: numeric keys `1`-`4` or `A`-`D` to select options, `Enter` to advance/submit, `Esc` to toggle the exit modal.
- **Celebration & Results Screen**:
  - Smooth score count-up number animation.
  - Complete accuracy breakdown: Correct, Incorrect, and Unanswered count.
  - Adaptive celebration badge and lightweight celebratory confetti particles for scores ≥ 80%.
  - Review Answers filter: view All questions or toggle Mistakes only with comprehensive explanations.
### Prompt 5: Complete Quiz Engine Implementation
- **Robust Quiz Engine Architecture**:
  - Full support for 6 subject categories (`Technology`, `Academics`, `General Knowledge`, `Competitive Exams`, `Sports`, `Entertainment`) and 3 difficulty tiers (`Easy`, `Medium`, `Hard`).
  - Sensible defaults applied automatically if selections are omitted or invalid (`technology`, `easy`, `learning`, `5 questions`).
  - Guaranteed alignment: verified that selected settings strictly determine which questions are loaded and presented.
- **Strict Mode Differentiation**:
  - **Learning Mode**: Single-selection confirmation, immediate locking (prevents changing answers after confirmation), instant emerald/rose correctness feedback, dynamic explanation drawer, and forward navigation.
  - **Exam Mode**: Zero answer/explanation leaks before final submission; free multi-directional navigation (users can skip questions and navigate back/forward); provisional option changing and deselecting; active countdown timer.
  - **Unanswered Question Interceptor**: Automated audit on final submission; displays an interactive confirmation modal if questions remain unanswered with options to *Review Questions* or *Submit Anyway*.
- **Accurate Non-Duplicating Scoring & Results**:
  - Score calculated precisely from confirmed responses with zero duplicate scoring on forward/backward navigation.
  - Comprehensive results metrics: **Total Score** (fraction `X of Y`), **Percentage Accuracy**, **Correct Count**, **Incorrect Count**, **Unanswered Count**, and **Time Elapsed**.
  - Interactive Answer Review with **All** and **Mistakes Only** filter views.
  - Working **Retake Quiz**, **Return to Dashboard**, and **Choose Another Subject** navigation actions.
- **Resilient LocalStorage**:
  - Stores past attempts, dates, modes, difficulty, and category best scores.
  - Restores all dashboard stats and recent attempts seamlessly upon page refresh.
  - Graceful error handling for missing, corrupted, or disabled `localStorage` without crashing.

### Prompt 6: Final Accessibility, Responsiveness & Browser Audit
- **Comprehensive Viewport Optimization**:
  - Verified and optimized across **320px**, **375px**, **425px** (Mobile), **768px** (Tablet), **1024px** (Laptop), and **1440px+** (Desktop).
  - Enforced `overflow-x: hidden` and flexible box/grid boundaries to prevent horizontal scrollbars on narrow viewports.
  - Sized touch targets with `min-height: 44px` across all primary and secondary buttons for seamless touch operation.
- **Accessibility & Contrast Hardening**:
  - Implemented high-contrast `:focus-visible` focus rings (`2.5px solid #7c3aed` with ambient glow) on all buttons, links, inputs, and interactive cards.
  - Updated secondary muted text contrast (`--text-muted: #625985`) to guarantee full WCAG 2.1 AA compliance (ratio > 4.5:1).
  - Added descriptive `aria-label` attributes to all 6 category cards, modal dialogs (`role="dialog" aria-modal="true"`), and interactive setup radio groups (`role="radiogroup"`).
  - Full keyboard accessibility: `Tab`/`Shift+Tab` focus cycling, `Enter`/`Space` activation, `1`-`4` or `A`-`D` option selection, `Enter` next/submit, and `Esc` modal dismiss.
### Prompt 7: Next-Gen Animated Quiz Gaming Platform
- **Trending Visual Design & Themes**:
  - Multi-shade coordinated color palettes with gradients, layered glassmorphism cards, glowing badges, floating accents, and confetti celebrations.
  - **Theme Studio (8 Complete Themes)**:
    1. *Lavender Dream* (Default purple/lavender/white/orange)
    2. *Neon Arcade* (Cyberpunk electric cyan & neon magenta on midnight arcade canvas)
    3. *Ocean Glow* (Deep marine teal, cyan waves & seafoam highlights)
    4. *Sunset Pop* (Warm coral, amber gold & energetic sunset magenta)
    5. *Mint Fresh* (Crisp emerald, spearmint & clean forest jade)
    6. *Midnight Galaxy* (Deep nebula space indigo, violet radiance & starlight)
    7. *Rose Quartz* (Blush pink, rose gold & warm violet accents)
    8. *Minimal Light* (High-contrast slate monochrome & modern clarity)
  - Accessible contrast ratios, preview cards, and persistent theme selection.
- **Font & Display Customization**:
  - Live typography previews supporting **Plus Jakarta Sans**, **Outfit**, **Poppins**, **Inter**, and **Lexend**.
  - Font scaling: **Small (14.5px)**, **Medium (16px)**, **Large (17.5px)** with fluid responsive clamping.
- **Avatar Studio**:
  - 12 selectable character presets (`🦊, 🦉, 🚀, 🦁, 🐼, 🤖, ⚡, 👑, 🦄, 🐲, 🐱, 🐶`).
  - Virtual coin-unlockable accessories: 👑 Golden Crown (100 coins), 🕶️ Cool Shades (60 coins), 🎧 Gaming Headset (80 coins), 🎓 Scholar Cap (75 coins), 💎 Diamond Halo (150 coins), 🚀 Jetpack Aura (120 coins).
  - Live interactive preview, display name editor, and "Randomize 🎲" button.
- **XP, Leveling & Gamification**:
  - XP progression with visual level progress bar (`+10 XP` per correct answer, `+50 XP` per quiz, `+100 XP` for daily challenge).
  - Virtual gold coins awarded for gameplay victories; safe `localStorage` persistence.
- **Interactive Playable Puzzle Formats (in Discover & Play)**:
  1. *Classic Quiz*: 4 options across all 6 subject categories.
  2. *Speed Sprint*: 10-second fast question countdown with bonus accuracy points.
  3. *True or False*: Rapid fact-or-fiction evaluation with immediate feedback.
  4. *Daily Challenge*: Curated 5-question sprint with 2X coin multiplier (+40 coins).
  5. *Word Puzzle*: Anagram letter-unscramble tiles to decode terminology.
  6. *Memory Match*: 12-card visual recall matching game (6 symbol pairs).
  7. *Survival Arena*: 3 Hearts mode (❤️❤️❤️) where incorrect answers cost lives.
  8. *Riddle Challenge*: Lateral reasoning puzzles with hints and answer reveals.
  9. *Play vs Computer*: ByteBot AI opponent with simulated 1.2–2s thought latency and clearly explained ~75% heuristic strategy.
  10. *Play With a Friend*: Two-player pass-and-play experience with turn handover prompt.
  11. *Multiplayer Demo Room*: Private room code generation (`QZ-8842`), copy tool, and client-side simulation notice.
- **Navigation & Accessibility**:
  - Persistent 5-item mobile bottom navigation: Rankings, Discover, Play, Rewards, Profile.
  - Prominent "Play Now ⚡" on initial Leaderboard screen.
  - Dedicated user reduced-motion setting and `@media (prefers-reduced-motion: reduce)`.

### Milestone: Soft Candy Theme Refinement
- **Aesthetic Refinement**: Softer, calmer, and highly readable Gen-Z gaming interface.
- **Harmonious Color Palette**:
  - **Main background**: `#F7F4FF`
  - **Card surfaces**: `#FFFFFF`
  - **Primary purple**: `#9A83E8`
  - **Secondary lavender**: `#E9DFFF`
  - **Pastel pink**: `#F5A5C8`
  - **Mint green**: `#92D9D0`
  - **Butter yellow**: `#FFDFA0`
  - **Main text**: `#302B40`
  - **Secondary text**: `#6F687D`
  - **Subtle borders**: `#E7E1F0`
- **Subtle Elevation & Contrast**: Clean cards with gentle layered shadows (`0 2px 8px rgba(48, 43, 64, 0.05)`), delicate thin borders (`1.5px solid #E7E1F0`), and WCAG AA high-contrast dark typography on light pastel surfaces.
- **Role-Based Mapping**: Purple for primary actions, pink for streaks and highlights, mint green for success feedback and correct answers, butter yellow for coins and podium rewards.
- **Interactive Assistant & Exploration**: QuizBuddy AI helper, Discover search & recommendations, and Avatar Studio.
- **Responsive & Accessible**: Optimized across 375px, 430px, 768px, and 1280px with full reduced-motion support.

## 📊 Question Bank Breakdown

| Subject Category | Easy | Medium | Hard | Total Questions | Topics Covered |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Technology** | 15 | 15 | 15 | **45** | HTML5, CSS layouts/cascade, JS ES6+, programming logic (loops/recursion), debugging (Type/Reference errors, TDZ) |
| **Academics** | 15 | 15 | 15 | **45** | Physics (optics/forces/quantum), Chemistry (bonds/pH/laws), Biology (cell/DNA/meiosis), Astronomy (solar system/redshift/stars) |
| **General Knowledge** | 15 | 15 | 15 | **45** | World geography, ancient & modern history, scientific/printing/lunar discoveries, global landmarks |
| **Competitive Exams** | 15 | 15 | 15 | **45** | Arithmetic & fractions, percentages & profit/loss, logical reasoning & deductions, sequences, work/speed/alligation |
| **Sports** | 15 | 15 | 15 | **45** | Olympic history, World Cup football, Grand Slam tennis, Cricket world records, athletics, championships |
| **Entertainment** | 15 | 15 | 15 | **45** | Academy Awards, classic & modern cinema, world literature, orchestral & contemporary music, pop culture |
| **Overall Total** | **90** | **90** | **90** | **270** | **Comprehensive curriculum across all 6 disciplines** |

---

## 📁 Project Structure

```text
Quizora/
├── index.html     # Semantic single-page layout for all 4 views + QuizWiz dashboard
├── style.css      # QuizWiz-inspired purple & lavender design system, micro-animations, responsive rules
├── script.js      # 270-question bank, daily spark generator, count-up animation, keyboard shortcuts, storage
└── README.md      # Comprehensive project documentation, verification, and guide
```

---

## 🛠️ Technology Stack
- **HTML5**: Semantic tags, accessible forms, inline SVG icons.
- **CSS3**: CSS Variables (Design Tokens), Flexbox, CSS Grid, mobile-first media queries.
- **Vanilla JavaScript**: ES6+, modular event handling, DOM manipulation, custom state management.
- **Browser Web Storage**: `localStorage` for persisting attempts and high scores locally with data validation.
- **Zero Heavy Dependencies**: No React, Vue, Angular, TypeScript, bundlers, external backend, or paid APIs.

---

## 🚀 How to Run Locally

Because Quizora is built with pure web standards (HTML5, CSS3, Vanilla JS), you can run it in multiple easy ways:

### Option A: Direct Browser File Launch
Simply double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open with > Chrome / Edge / Firefox**.

### Option B: Local Static Server (Node.js / npx)
From the project folder in terminal or PowerShell:
```bash
npx serve .
# or
npx http-server .
```
Then visit the printed localhost URL (e.g. `http://localhost:3000` or `http://localhost:8080`).

### Option C: VS Code / IDE Live Server
If you use VS Code, right-click `index.html` and select **"Open with Live Server"**.
