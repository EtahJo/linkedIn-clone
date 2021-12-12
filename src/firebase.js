import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCSikM5CnY3efQ1PyQFsueZgUHeWX6tsEI",
    authDomain: "linkedin-clone-c8494.firebaseapp.com",
    projectId: "linkedin-clone-c8494",
    storageBucket: "linkedin-clone-c8494.appspot.com",
    messagingSenderId: "966401590980",
    appId: "1:966401590980:web:88b6a4358fb9dd421feb91",
    measurementId: "G-EEL89E47N4",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;