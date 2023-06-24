// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtKA8mbUs2cs__doVqBiP2AHgAJWhcotc",
  authDomain: "login-11f7f.firebaseapp.com",
  databaseURL: "https://login-11f7f-default-rtdb.firebaseio.com",
  projectId: "login-11f7f",
  storageBucket: "login-11f7f.appspot.com",
  messagingSenderId: "173027844587",
  appId: "1:173027844587:web:2809092db9fd680e12f9ae",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

var loginf = firebase.database().ref("login");
// Sign up function
const signUp = () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const bno = document.getElementById("bno").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;
  const eno = document.getElementById("eno").value;
  console.log(name, phone, bno, email, password, cpassword, eno);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      savemsg(name, phone, bno, email, password, eno);
      console.log(result);
      alert("Registered Successfully!!");
      window.location.replace("http://localhost:3000/");
      // ...
    })
    .catch((error) => {
      const code = console.log(error.code);
      const emsg = console.log(error.message);
      alert(emsg);
      // ..
    });
};
const savemsg = (name, phone, bno, email, password, eno) => {
  var newform = loginf.push();

  newform.set({
    name: name,
    phone: phone,
    boatno: bno,
    email: email,
    password_: password,
    emergencyno: eno,
  });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      console.log(result);
      alert("Welcome Back!!");
      window.location.replace("http://localhost:3000/");
    })
    .catch((error) => {
      const code = console.log(error.code);
      const emsg = console.log(error.message);
      alert(emsg);
    });
};
