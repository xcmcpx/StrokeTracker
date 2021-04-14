var express = require('express');
var router = express.Router();
const { OAuth2Client } = require('google-auth-library');

const userController = require('../controllers/user');
const sessionController = require('../controllers/session')

//#region authentication routes
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
router.post('/login', async (req, res, next) => {
    try {
        const expires = Math.random() * (60 - 30) + 30;
        const ticket = await client.verifyIdToken({
            idToken: req.body.headers.Authorization.split(' ')[1],
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();

        console.log(`User ${payload.name} Verified with google`);

        const foundUser = await userController.getUser({data: payload});

        //need to rewrite this logic for all logins
        if (foundUser) {
            console.log(`User ${payload.name} logged in to Stroke Tracker with ${payload.email}\n ~~~Creating User Session~~~`);

            const createdSessionDetails = await sessionController.createSession({ user: payload.email, expires: expires });
            let sessionHash = '';
            if (createdSessionDetails) {
                console.log(`User ${payload.name} successfully created session at ${createdSessionDetails.createdSession.createdAt} and will logout at ${createdSessionDetails.createdSession.deleteAt}`);
                sessionHash = createdSessionDetails.sessionHash;
            } else {
                console.log('Error creating user session.');
                sessionHash = 'Error'
            }
            res.send({
                msg: 'User Authenticated',
                isLoggedIn: true,
                blueberry: expires,
                twerkForMeMommy: sessionHash
            });
        } else {
            console.log(`User ${payload.name} denied access to Stroke Tracker with ${email}`);
            res.send({
                msg: 'Your google profile is not authorized to view this information.',
                isLoggedIn: false
            });
        }
        //end changes
    }
    catch (err) {
        console.log(err);
    }
});
//#endregion

module.exports = router;