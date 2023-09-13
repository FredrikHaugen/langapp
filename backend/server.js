const express = require('express');
const admin = require('firebase-admin');

// Load the service account key JSON file
const serviceAccount = require('./lang-app-b5569-firebase-adminsdk-6g0hc-425c81d6e8.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();
const app = express();

// Middlewares
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Main routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
    res.json({ message: "Test route is working!" });
});

app.get('/add-to-firestore', async (req, res) => {
    try {
        const docRef = db.collection('testCollection').doc('testDoc');
        await docRef.set({ message: "Data saved in Firestore!" });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
