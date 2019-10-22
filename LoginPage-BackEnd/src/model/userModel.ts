import mongoose from 'mongoose';

let Userschema = new mongoose.Schema({
    email: String,
    password: String
})

export const userModel = mongoose.model('users', Userschema);