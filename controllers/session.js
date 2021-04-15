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

        try {
            const result = await session.save();

            createdSession = result;
            return {
                createdSession: createdSession
            };
        } catch (err) {
            console.log(err);
            throw (err);
        }
    },
}