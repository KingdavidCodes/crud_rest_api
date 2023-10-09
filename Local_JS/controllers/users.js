import { v4 as uuidv4} from "uuid";
let users = [];

export const getUsers = (req, res) => {
    res.status(200).json(users);
}

export const createUser = async(req, res) => {
    const user = req.body;

    await users.push({ id: uuidv4(), ...user});
    
    res.status(201).send(`User with the name: ${user.firstName} has being added to the database`)
}

export const getSingleUser = async(req, res) => {
    const {id: userId} = req.params;

    const getUser = users.find((user) => user.id ===  userId);

    res.status(200).json(getUser);
}

export const deleteSingleUser = (req, res) => {
    const {id: userId} = req.params;

    users = users.filter((user) => user.id !== userId);

    console.log(users);

    res.status(200).send(`User with the ${userId} has being deleted from the database`);
}

export const updateSingleUser = async(req, res) => {
    const {id: userId} = req.params;
    const { firstName, lastName, age} = req.body;

    const user = await users.find((user) => user.id === userId);
    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName   
    if(age) user.age = age


    res.status(200).send(`User with the id ${userId}, as being updated`)
}