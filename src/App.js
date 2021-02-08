import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';

import { authState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  
    apiKey: "AIzaSyDU-ulc4NE9tXSPqyDGQLl46DWfT249fsE",
    authDomain: "react-chat-app-1b2ee.firebaseapp.com",
    projectId: "react-chat-app-1b2ee",
    storageBucket: "react-chat-app-1b2ee.appspot.com",
    messagingSenderId: "774718209762",
    appId: "1:774718209762:web:e4da0e50397281dc93e8bb",
    measurementId: "G-QE073NDDW9"
  
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
