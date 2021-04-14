const bcrypt = require('bcrypt');
const Session = require('../models/session');
const add = require('date-fns/add');

module.exports = {
    createSession: async (args, req) => {
        let newDate = new Date();
        let deleteAt = add(newDate, {minutes: args.expires});
        const session = new Session({
            user: args.user,
            deleteAt: deleteAt
        });

        let createdSession;
        let sessionHash;

        try {
            const result = await session.save();

            createdSession = result;
            const input = createdSession._id;
            bcrypt.genSalt(8, (err, salt) => {
                bcrypt.hash(input, salt, (err, hash) => {
                    sessionHash = hash;
                });
            });
            return {
                createdSession: createdSession,
                sessionHash: sessionHash
            };
        } catch (err) {
            console.log(err);
            throw (err);
        }
    },
}