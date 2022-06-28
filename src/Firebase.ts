import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCtLOZ6XYRLyiQaB334-kquj84X3FYsUsM",
	authDomain: "fir-3d151.firebaseapp.com",
	projectId: "fir-3d151",
	storageBucket: "fir-3d151.appspot.com",
	messagingSenderId: "987482985000",
	appId: "1:987482985000:web:0a50fc4e06371fbc50db1d",
	measurementId: "G-3B2ZZX9M9K"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }