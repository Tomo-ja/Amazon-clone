import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import user from './interface/User';

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

const logInWithEmailAndPassword = async (email: string, password: string): Promise<user> => {
		const res = await signInWithEmailAndPassword(auth, email, password)
		return res.user as user
}


const registerWithEmailAndPassword = async (email: string, password: string): Promise<user> => {
		const res = await createUserWithEmailAndPassword(auth, email, password)
		return res.user as user
}


export { db, auth, registerWithEmailAndPassword, logInWithEmailAndPassword }