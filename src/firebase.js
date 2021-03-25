import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBnB9qC1zbx0t2pRCnrehzdgNjF312uam4",
  authDomain: "mk-resume-43c89.firebaseapp.com",
  projectId: "mk-resume-43c89",
  storageBucket: "mk-resume-43c89.appspot.com",
  messagingSenderId: "958692350577",
  appId: "1:958692350577:web:caba8845bb4aa560b499d0"
})

export const auth = app.auth()
export default app

