import * as firebase from 'firebase/app';
import { useState } from 'react';

const config = {
    apiKey: "AIzaSyBZeQY2IS6ohN1FCcTn-_yTefCfTk1w1gs",
    authDomain: "bookcentre-21891.firebaseapp.com",
    databaseURL: "https://bookcentre-21891-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookcentre-21891",
    storageBucket: "bookcentre-21891.appspot.com",
    messagingSenderId: "573036855415",
    appId: "1:573036855415:web:cf1e7983aa8a621d7a8672"
};
firebase.initializeApp(config);

export default firebase;
