import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAL9tNSZYIpf1lhXYngnCj93STDp9Ww988",
    authDomain: "thebookshop-ps.firebaseapp.com",
    databaseURL: "https://thebookshop-ps.firebaseio.com",
    projectId: "thebookshop-ps",
    storageBucket: "thebookshop-ps.appspot.com",
    messagingSenderId: "119327278453",
    appId: "1:119327278453:web:9febcd84123a0e94ea7f3c",
    measurementId: "G-SBFQFXKRNG"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase; 