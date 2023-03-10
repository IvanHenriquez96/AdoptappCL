import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Du0tUaYv7YrWJVzrSfHi2Fw7GaRUbY8",
  authDomain: "adoptapp-ihenriquez.firebaseapp.com",
  projectId: "adoptapp-ihenriquez",
  storageBucket: "adoptapp-ihenriquez.appspot.com",
  messagingSenderId: "1001315060805",
  appId: "1:1001315060805:web:300dae7fba778470f5672c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;
