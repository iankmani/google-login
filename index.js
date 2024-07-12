
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  auth.languageCode='en'
  const provider = new GoogleAuthProvider();

  const googleLogin =document.getElementById("google-login-button")
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
       
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        window.location.href="../logged.html";
        // ...


    
  }).catch((error)=>{
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
   
    });
  })

  function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
  }
  updateUserProfile()
