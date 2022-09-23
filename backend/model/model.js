import mongoose from 'mongoose';

var Schema = mongoose.Schema

let UserModelSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        title: "first_name",
    },
    lastName: {
        type: String,
        required: true,
        title: "last_name",
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    ipAddress: {
        type: String,
        required: true,
        title: "ip_address",
    },
})

export default mongoose.model('TaskDUserModel', UserModelSchema)