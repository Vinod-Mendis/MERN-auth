import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
// req = data getting from the client side
// res = data which we send back to the client side

//Sign up method
//--------------------------------------
export const signup = async (req, res, next) => {
        const { username, email, password } = req.body; // destructure and get the name,email, and password from thr req body
        const hashPassword = bcryptjs.hashSync(password, 10); // hashing/ecncrypting password
        const newUser = new User({ username, email, password: hashPassword }); // create a new user model
        try {
                await newUser.save();
                res.status(201).json({ message: "User created succesfully" }); // return a response
        } catch (error) {
                next(error);
        }
};

//Sign in method
//--------------------------------------
export const signin = async ( req, res, next ) => {
        const { email, password } = req.body;
        try {
                const validUser = await User.findOne({ email });
                if(!validUser){
                        return next(errorHandler(404, 'User not Found'))
                }
                const validPassword = bcryptjs.compareSync(password, validUser.password)
                if(!validPassword){
                        return next(errorHandler(401, 'Invalid Credentials'))
                }
                const token = jwt.sign({ id : validUser._id}, process.env.JWT_SECRET);
                const {password: hashPassword, ...rest } = validUser._doc; // seperating password from the object
                // only need the doc object; otherwise it will give all unneccassary data
                const expiryDate = new Date(Date.now() + 3600000 ); // 1 hour
                res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);
        } catch (error) {
                next(error)
        }
}