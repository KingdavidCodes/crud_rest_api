import express from "express";
import { createUser, deleteUser, getAllUsers, singleUser, updateUser } from "../controllers/userController.js";
const router = express.Router();




router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', singleUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);





export default router;