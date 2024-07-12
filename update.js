import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC-D-DNlSxvH7n1mhsg3EKo0yxxnW65dB8",
    authDomain: "login-3285b.firebaseapp.com",
    projectId: "login-3285b",
    storageBucket: "login-3285b.appspot.com",
    messagingSenderId: "738149773781",
    appId: "1:738149773781:web:132b12367b2fe943610d5c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = new getAuth(app)
 
  const user = result.user;

  function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail)

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").textContent = userProfilePicture;
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user)
        const uid = user.uid;
        return uid;
  }else{
    alert("create Account & Login")
    window.location.href = "/logged.html"
  }
})
