import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";

const auth = getAuth();

// reusable success/error actions
function logErrors(errorCode, errorMessage) {
  console.log("Error Code: ", errorCode);
  console.log("Error Message: ", errorMessage);
}
function logSuccess(message = "", userCred) {
  const displayMessage = (message = "" ? "Sign in successful " : message);
  const user = userCred ? userCred : "no user information";
  console.log(displayMessage, user);
  return user;
}

// CREATE USER
function fbCreateUserWithEmailAndPassword(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = logSuccess(
        "account created. sign in successful ",
        userCredential.user
      );
      return user;
    })
    .catch((error) => {
      logErrors(error.code, error.message);
    });
}

// SIGN IN
function fbSignInWithEmailAndPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = logSuccess(
        "account created. sign in successful ",
        userCredential.user
      );
      return user;
    })
    .catch((error) => {
      logErrors(error.code, error.message);
    });
}

// SIGN IN (ANON)
function fbSignInAnon() {
  signInAnonymously(auth)
    .then(() => {
      const user = logSuccess(
        "account created. sign in successful ",
        "anon user"
      );
      return user;
    })
    .catch((error) => {
      logErrors(error.code, error.message);
    });
}

// SIGN OUT
function fbSignOut() {
  signOut(auth)
    .then(() => {
      console.log("sign-out successful");
    })
    .catch((error) => {
      console.log(error);
    });
}
export {
  fbCreateUserWithEmailAndPassword,
  fbSignInAnon,
  fbSignInWithEmailAndPassword,
  fbSignOut,
};

// AUTH CHANGE HANDLER FOR USE IN APP (app.js)
export default function AuthProvider() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("signed out");
    }
  });
}
