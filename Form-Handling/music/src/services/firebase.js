import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7rjYbSKvGDtT1IGg4PysvgBfpes_3-SA",
  authDomain: "musicapp-f14b7.firebaseapp.com",
  projectId: "musicapp-f14b7",
  storageBucket: "musicapp-f14b7.appspot.com",
  messagingSenderId: "250839659385",
  appId: "1:250839659385:web:30073d3a3fe949301675a8",
  measurementId: "G-YPXRCL9SSS",
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
// const analytics = getAnalytics(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Sign in Successfull", result);

      const name = result.user.displayName;
      const email = result.user.email;
      const photo = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photo", photo);
      window.location.reload();
    })
    .catch(console.log("Error Occur"));
};
