// Import Statements
import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import serviceAccount from "../key.json";
import { getAuth, Auth } from "firebase-admin/auth";

initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
});

const auth: Auth = getAuth();

const db: Firestore = getFirestore();

export { auth, db };