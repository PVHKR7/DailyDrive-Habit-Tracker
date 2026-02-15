/* ============================================
   DailyDrive — Firebase Configuration
   ============================================
   
   HOW TO SET UP:
   
   1. Go to https://console.firebase.google.com/
   2. Click "Create a project" (or "Add project")
   3. Name it "DailyDrive" (or anything you like)
   4. Disable Google Analytics (optional, not needed)
   5. Once created, click the web icon </> to add a web app
   6. Register app name as "DailyDrive"
   7. Copy your config values below
   
   Then enable services:
   
   A) Authentication:
      - Go to Build → Authentication → Get Started
      - Click "Sign-in method" tab
      - Enable "Google" provider
      - Set your support email and save
   
   B) Firestore:
      - Go to Build → Firestore Database → Create Database
      - Choose "Start in test mode" (for now)
      - Pick a region close to you
      - Click Enable
   
   ============================================ */

const firebaseConfig = {
  apiKey: "AIzaSyBSaUFDvp18zyFxPo1tALMTc6qhI47V3MY",
  authDomain: "dailydrive-9.firebaseapp.com",
  projectId: "dailydrive-9",
  storageBucket: "dailydrive-9.firebasestorage.app",
  messagingSenderId: "587546132037",
  appId: "1:587546132037:web:a6f2ce86f1d5cdfab9ad2c",
  measurementId: "G-YYJZNCXMP1"
};

// ─── Initialize Firebase ───────────────────────────────
let firebaseApp = null;
let db = null;
let auth = null;

function isFirebaseConfigured() {
  return firebaseConfig.apiKey !== "YOUR_API_KEY" &&
         firebaseConfig.projectId !== "YOUR_PROJECT_ID";
}

if (isFirebaseConfigured()) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  
  // Enable offline persistence for Firestore
  db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Firestore persistence failed: multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.warn('Firestore persistence not supported in this browser');
    }
  });
  
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase not configured — running in offline/local mode only');
}
