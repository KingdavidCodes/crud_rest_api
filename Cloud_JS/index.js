import express from "express";
import bodyParser from "body-parser";
import mongoose  from "mongoose";
import userRoutes from "./routes/userRoutes.js"
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/user', userRoutes);







const connection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cloud_js');
        console.log(`Connected to the LOCAL DB`)
        app.listen(PORT, () => console.log(`Server listing at port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
connection();


