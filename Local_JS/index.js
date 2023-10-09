// ? To use the new import statement you in the new node engine you have to type (type: "module") in package.json
import express from 'express';
import bodyParser from "body-parser";
// ? bodyParser allows us to take incoming post (req.body)
import userRoutes from './routes/users.js';


// !Running express app here
const app = express();
const PORT = 5000;

// * MIDDLEWARE
app.use(bodyParser.json());
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.send(`Hello from home page`)
});


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))



// * RES MEANS (Representational State Transfer)