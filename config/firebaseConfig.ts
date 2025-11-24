// Import Statements
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../key.json";

// Initialize Firebase App
const app = initializeApp({
  credential: cert(serviceAccount as any),
});

// Export Firestore Database
export const db = getFirestore(app);
