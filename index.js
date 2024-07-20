// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Firebase configuration
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
const auth = getAuth(app);

// Set language code if needed
auth.languageCode = 'en';

// Providers for Google and Facebook authentication
const provider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();

// Function to update user profile
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    // You can use these variables to update your UI or perform other actions
}

// Event listener when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Google login button
    const googleLogin = document.getElementById("google-login-button");
    if (googleLogin) {
        googleLogin.addEventListener("click", function() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    updateUserProfile(user); // Update user profile information
                    window.location.href = "../logged.html"; // Redirect to logged-in page
                })
                .catch((error) => {
                    console.error(error);
                    alert(error.message); // Display error message to user
                });
        });
    }

    // Facebook login button
    const facebookLogin = document.getElementById("facebook-login-button");
    if (facebookLogin) {
        facebookLogin.addEventListener("click", function(event) {
            event.preventDefault();
            signInWithPopup(auth, fbprovider)
                .then((result) => {
                    const user = result.user;
                    updateUserProfile(user); // Update user profile information
                    window.location.href = "../logged.html"; // Redirect to logged-in page
                })
                .catch((error) => {
                    console.error(error);
                    alert(error.message); // Display error message to user
                });
        });
    }
});
