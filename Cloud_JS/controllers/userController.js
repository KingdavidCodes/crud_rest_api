// import mongoose from "mongoose";
import mongoose from "mongoose";
import User from "../models/User.js";
import { v4 as uuidv4 } from 'uuid';

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json({user, nbHits: user.length})
    } catch (error) {
        res.status(500).json({
        msg: error.message
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

export const singleUser = async (req, res) => {
    try {
        const {id: userID} = req.params
        const user = await User.findOne({_id: userID});
        // ? My error message incase all char is okay but the last one is different in our DB
        if(!user){
            return res.status(500).json({
                msg: "Failed",
                error: `There is not ID in the database with ${userID}`
            })
        }
        res.status(200).json({user})
    } catch (error) {
        //! server error incase it can't find it with objectId() when 1 char is missing
        res.status(500).json({
            msg: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id: userID} = req.params
        const user = await User.findByIdAndDelete(userID);

        res.status(200).json({
            msg: "successful",
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id: userID} = req.params
        const user = await User.findOneAndUpdate({_id: userID}, req.body, {new: true, runValidators: true});

        if(!user){
            return res.status(500).json({
                msg: "Failed",
                error: `There is not ID in the database with ${userID}`
            })
        }

        res.status(200).json({user});

    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
}