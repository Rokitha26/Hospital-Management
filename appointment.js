import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSy***************-************",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('appointmentForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('date').value;
  const department = document.getElementById('department').value;
  const time = document.getElementById('time').value;
  const notes = document.getElementById('notes').value.trim();

  try {
    await addDoc(collection(db, 'appointments'), {
      name,
      email,
      phone,
      date,
      department,
      time,
      notes,
      createdAt: serverTimestamp()
    });

    alert('Appointment booked successfully!');
    document.getElementById('appointmentForm').reset();
  } catch (error) {
    console.error('Error booking appointment:', error);
    alert('Error: ' + error.message);
  }
});
