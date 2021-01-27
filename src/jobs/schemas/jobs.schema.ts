import * as mongoose from 'mongoose'

export const JobsSchema = new mongoose.Schema({
    id: String,
    name: String, 
    description: String, 
    uid: String
});