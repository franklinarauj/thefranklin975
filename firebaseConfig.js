import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAU8S_WFPiTzxxMNWjD54O_bkXL5kCrD7g",
  authDomain: "franklinarauj-1d7c3.firebaseapp.com",
  projectId: "franklinarauj-1d7c3",
  storageBucket: "franklinarauj-1d7c3.firebasestorage.app",
  messagingSenderId: "228978980844",
  appId: "1:228978980844:web:d33f04573382bf08df72c9",
  measurementId: "G-0KWJZCFLXT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);