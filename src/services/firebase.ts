import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { ContactFormData } from './emailService';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

/**
 * Saves a contact form submission to the Firestore database
 */
export async function saveContactSubmission(data: ContactFormData): Promise<boolean> {
  try {
    await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      company: data.company || '',
      projectType: data.projectType || '',
      budget: data.budget || '',
      message: data.message,
      createdAt: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error('Error saving to Firestore:', error);
    return false;
  }
}
