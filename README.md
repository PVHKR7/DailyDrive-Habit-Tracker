# DailyDrive — Habit Tracker

A modern, dark-themed habit tracking web app that helps you build consistency with daily habits. Track progress, maintain streaks, get angry motivational notifications, and visualize your journey — all synced across devices.

## Live Demo

[pvhkr7.github.io/DailyDrive-Habit-Tracker](https://pvhkr7.github.io/DailyDrive-Habit-Tracker)

## Features

- **Daily Habit Tracking** — Tick off 10 customizable habits each day with a satisfying check-off experience
- **Streak Counter** — Tracks consecutive perfect days (resets if you miss even one habit)
- **Monthly Calendar View** — Color-coded overview showing complete, partial, and missed days at a glance
- **Analytics & Insights** — Interactive charts powered by Chart.js:
  - Daily completion rate over the month
  - Per-habit completion breakdown
  - Overall status doughnut chart
  - Consistency heatmap
- **Angry Motivational Notifications** — Miss your habits? Get roasted in English and Telugu at 8:00 PM
- **All-Done Celebration** — Short, punchy toast message when you complete every habit for the day
- **Cloud Sync** — Sign in with Google to sync data across all your devices via Firebase
- **Offline Mode** — Works without an account using local storage
- **PWA / Installable** — Install on mobile or desktop as a native-like app
- **Responsive Design** — Hamburger menu with slide-out sidebar on mobile, full layout on desktop

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (ES6+) |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Auth | Firebase Authentication (Google Sign-In) |
| Database | Cloud Firestore (real-time sync) |
| Offline | Service Worker + Local Storage |
| Hosting | GitHub Pages |
| PWA | Web App Manifest + Service Worker |

## Screenshots

### Desktop — Habit Tracker
The main view with today's habits, progress ring, and monthly calendar.

### Mobile — Responsive Layout
Hamburger menu, compact streak badge, and touch-friendly habit cards.

### Analytics
Charts showing daily completion rate, per-habit breakdown, overall status, and consistency heatmap.

## Getting Started

### Prerequisites
- A modern web browser
- (Optional) Firebase project for cloud sync

### Run Locally

```bash
# Clone the repo
git clone https://github.com/PVHKR7/DailyDrive-Habit-Tracker.git
cd DailyDrive-Habit-Tracker

# Start a local server
python3 -m http.server 3000

# Open in browser
open http://localhost:3000
```

### Firebase Setup (Optional)

To enable Google Sign-In and cross-device sync:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** (Google provider)
3. Enable **Cloud Firestore**
4. Copy your config to `firebase-config.js`
5. Add your domain to Firebase authorized domains

## Default Habits

| # | Habit | Icon |
|---|-------|------|
| 1 | Wake up at 6:30 AM | ⏰ |
| 2 | Morning walk — 10K steps | 🚶‍♂️ |
| 3 | Drink 5 liters of water | 💧 |
| 4 | Sleep hygiene 6h | 🛏️ |
| 5 | Work/Planning the day 8h | 📝 |
| 6 | Gym workout | 🏋️‍♂️ |
| 7 | Skill development (2h) | 📚 |
| 8 | Healthy eating | 🥗 |
| 9 | Limit social media (≤30 min) | 📱 |
| 10 | No junk food | 🚫 |

Habits can be added, removed, or customized from the **Manage Habits** tab.

## Project Structure

```
DailyDrive-Habit-Tracker/
├── index.html          # Main app entry point
├── styles.css          # All styles (dark theme + responsive)
├── app.js              # Core logic, Firebase sync, notifications
├── firebase-config.js  # Firebase project configuration
├── sw.js               # Service worker (offline + caching)
├── manifest.json       # PWA manifest
├── logo.svg            # App logo (gradient lightning bolt)
├── favicon.png         # Browser tab icon
├── generate-icons.js   # Script to generate PWA icons
└── icons/              # PWA icons (72–512px)
```

## How the Streak Works

The streak counts **consecutive perfect days** going backwards from today:
- Complete all habits today → streak = 1
- Complete all habits today AND yesterday → streak = 2
- Miss any habit on any day → streak resets from the next perfect day

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with discipline and a little bit of anger.
