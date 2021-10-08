import { TranslationModel } from "./Models/TranslationModel";
import { DataSnapshot } from "firebase-admin/node_modules/@firebase/database-types";

import {} from 'firebase-admin';

/**
 * firebase-admin to change data from backend
 */
const admin = require('firebase-admin');
const account = require ('../private/FirebaseAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(account), 
});

const firebaseDB = admin.firestore();

export default firebaseDB;