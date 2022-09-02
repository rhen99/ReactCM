import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACTCM_API_KEY,
  authDomain: process.env.REACTCM_AUTH_DOMAIN,
  projectId: process.env.REACTCM_PROJECT_ID,
  storageBucket: process.env.REACTCM_STORAGE_BUCKET,
  messagingSenderId: process.env.REACTCM_MESSAGING_SENDER_ID,
  appId: process.env.REACTCM_APP_ID,
});

export const firestore = app.firestore();
export const auth = app.auth();
export default app;
