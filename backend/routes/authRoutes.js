const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

const auth = admin.auth();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userRecord = await auth.createUser({
            email: email,
            password: password,
        });
        return res.status(201).send({ uid: userRecord.uid });
    } catch (error) {
        console.error(error);
        return res.status(400).send({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const idToken = req.body.idToken;
        
        // Verify the ID token
        const decodedToken = await auth.verifyIdToken(idToken);
        if (decodedToken) {
            return res.status(200).send({ uid: decodedToken.uid });
        } else {
            throw new Error("Token verification failed");
        }
    } catch (error) {
        console.error(error);
    
        let errorMessage;
        switch (error.code) {
            case 'auth/id-token-expired':
                errorMessage = "Token has expired. Please log in again.";
                break;
            case 'auth/invalid-id-token':
                errorMessage = "Invalid token. Please log in again.";
                break;
            default:
                errorMessage = "An unexpected error occurred. Please try again.";
        }
    
        return res.status(400).send({ error: errorMessage });
    }
});

module.exports = router;
