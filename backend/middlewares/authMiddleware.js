
const admin = require('firebase-admin');

const verifyUserToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(403).send('Unauthorized');
    }
};

module.exports = { verifyUserToken };
