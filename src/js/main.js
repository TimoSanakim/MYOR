// See if the browser supports Service Workers, if so try to register one
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(function (registering) {
      // Registration was successful
      console.log(
        "Browser: Service Worker registration is successful with the scope",
        registering.scope
      );
    })
    .catch(function (error) {
      // The registration of the service worker failed
      console.log(
        "Browser: Service Worker registration failed with the error",
        error
      );
    });
} else {
  // The registration of the service worker failed
  console.log("Browser: I don't support Service Workers :(");
}

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpmVBBDHScvhs26Gt_YifCxjBvcDDfroM",
  authDomain: "myor-login.firebaseapp.com",
  projectId: "myor-login",
  storageBucket: "myor-login.appspot.com",
  messagingSenderId: "10976629898",
  appId: "1:10976629898:web:ac4e90576680132f998973",
  measurementId: "G-LRLPPL2E6G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const btnRegister = document.getElementById("btnRegister");

function Register() {
  const emailInput = document.getElementById("emailInput").value;
  const passInput = document.getElementById("passInput").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(emailInput, passInput)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function Login() {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailInput, passInput)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// Burger menu
burgermenu = document.getElementById("burgermenu");
menu = document.getElementById("menu");
body = document.querySelector("body");

burgermenu.onclick = function () {
  burgermenu.classList.toggle("open");
  menu.classList.toggle("menu-open");
  body.classList.toggle("overflow-hidden");
};
