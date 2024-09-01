import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // using dotenv package becuase we to use .env file in the backend
import userRoutes from "./routes/user.route.js"; // import user route
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config(); // initialize dotenv

// connect Database :
//------------------------------------------------------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // if mongodb is connected -
    console.log("MongoDB Connected Succesfully."); // - then conole log the message
  })
  .catch((error) => {
    // if there is an error, catch the error and -
    console.log("Failed to Connect MongoDB"); // - log the message and error
    console.log(error);
  });

const app = express(); // creates a instance of Express; use to define routes and handle incoming requests
app.use(express.json()); // allow to send JSON input to backend
app.use(cookieParser());
// app.listen -> starts the server
// 1st param -> listen to specific port (3000)
// 2nd param -> callback function to run when the server starts succesfully
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

//! test api route
// app.get('/',( req, res ) => {
//   res.json({
//     message: 'API is working!',
//   })
// })

app.use("/api/user", userRoutes); // using the userRoutes
app.use("/api/auth", authRoutes); // using thez authRoutes

// creation of middleware to error handles
//err = error happens
// next = go to next middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Sever Error.";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    errorMessage,
  });
});
