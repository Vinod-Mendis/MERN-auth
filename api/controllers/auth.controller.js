import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
// req = data getting from the client side
// res = data which we send back to the client side

export const signup = async (req, res) => {
        const { username, email, password } = req.body; // destructure and get the name,email, and password from thr req body
        const hashPassword = bcryptjs.hashSync(password, 10); // hashing/ecncrypting password
        const newUser = new User({ username, email, password: hashPassword       }); // create a new user model
        try {
                await newUser.save();
                res.status(201).json({ message: "User created succesfully" }); // return a response
        } catch (error) {
                res.status(500).json(error.message);
        }
};
