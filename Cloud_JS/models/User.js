import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
    },
    age: {
        type: Number,
        default: 1
    }
});


export default mongoose.model('User', userSchema);