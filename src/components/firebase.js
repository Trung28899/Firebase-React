import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAA0NfHqKaVHuXOWuz5goMJEe705sFW06Y",
  authDomain: "fir-react-db398.firebaseapp.com",
  databaseURL: "https://fir-react-db398.firebaseio.com",
  projectId: "fir-react-db398",
  storageBucket: "fir-react-db398.appspot.com",
  messagingSenderId: "803870870286",
  appId: "1:803870870286:web:2d6d928012fb9113b2a55f",
  measurementId: "G-K1QP9ZRKXQ",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.dataB = app.database();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  addUser(email) {
    return this.dataB.ref("users/" + 6969).set({
      email: email,
    });
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }

    return this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .set({
        quote,
      });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    const quote = await this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .get();
    return quote.get("quote");
  }
}

export default new Firebase();
