const User = require('../models/user');

const createUser = async (args, req) => {
    try{
        const user = new User({
            email: args.data.email,
            deleted: false,
        });

        let createdUser = await user.save();

        if(!createdUser){
            console.log("Error creating user in createUser!");
            return false;
        }
        return createdUser;
    }catch (err) {
        console.log(err);
        throw(err);
    }
}

module.exports = {
    getUser: async (args, req) => {
        try {
            let foundUser = await User.findOne({email: args.data.email});

            if(!foundUser){
                let createdUser = await createUser({data: args.data});
                if(!createdUser){
                    console.log("Error creating user from getUser!");
                    return false;
                }
                return createdUser;
            }
            return foundUser;
        } catch (err) {
            console.log(err);
            throw (err);
        }
    },
    createUser: createUser
}