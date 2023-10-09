import express from 'express';
import { createUser, deleteSingleUser, getSingleUser, getUsers, updateSingleUser} from "../controllers/users.js"


const router = express.Router();


// all route in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSingleUser);


router.delete('/:id', deleteSingleUser);

router.patch('/:id', updateSingleUser);



export default router;