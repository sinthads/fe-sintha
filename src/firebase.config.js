import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAD6cSVWL52a43kB12IzZoBTPYKfzrTItI',

  authDomain: 'sera-miniblog.firebaseapp.com',

  projectId: 'sera-miniblog',

  storageBucket: 'sera-miniblog.appspot.com',

  messagingSenderId: '1027490750266',

  appId: '1:1027490750266:web:44be18bce7b5ddb152fa03',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
