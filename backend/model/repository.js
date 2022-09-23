import UserModel from './model.js';

//Set up mongoose connection
import mongoose from 'mongoose';

let mongoDB = "mongodb://172.20.0.1:27017/mydb";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export async function getUser(params) {
    return UserModel.find(params)
}