import * as mongoose from 'mongoose'

//Include type and required (all values are optional by default)
export const JobsSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    description: {type: String, required: true}, 
    userPostedUid: {type: String, required: true},
    userPostedUidImage: {type: String},
    publishedDate: {type: String},
    startingDate: {type: String, required: true},
    appliants: Array,
    price: {type: Number, required: true},
    address: 
    {
        postCode: {type: String},
        state: {type: String},
        country: {type: String},
        municipality: {type: String},

    },

});