import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
    phone: String,
    passwordHash: String,
    roles: Array

})