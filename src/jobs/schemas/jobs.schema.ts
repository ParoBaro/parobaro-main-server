import * as mongoose from 'mongoose'

//Include type and required (all values are optional by default)
export const JobsSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    name: {type: String, required: true}, 
    description: {type: String, required: true}, 
    uid: {type: String, required: true},
    testing: {type: Number, required: true}
});