import * as mongoose from 'mongoose'

//Include type and required (all values are optional by default)
export const UsersSchema = new mongoose.Schema({
    displayName: {type: String, required: true}, 
    lastname: {type: String}, 
    email: {type: String, required: true}, 
    phoneNumber: {type: String}, 
    uid: {type: String, required: true},
    birthDate: {type: String}, 
    sex: {type: String}, 
    isVerified: {type: Boolean}, 
    lastSignIn: String,
    joinedApp: String,
    photoUrl: String,

    address: 
    {
        postCode: {type: String},
        state: {type: String},
        country: {type: String},
        municipality: {type: String},

    },

    payment: Object,
    documents: Object,
    calification: Object,
    jobs: Array
    // payment: 

});

