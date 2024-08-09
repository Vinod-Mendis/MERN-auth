import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from "dotenv"; // using dotenv package becuase we cannot use .env file in the backend
import { error, log } from 'console';

dotenv.config(); // initialize dotenv

mongoose.connect(process.env.MONGODB_URI).then(() => { // if mongodb is connected -
  console.log("MongoDB Connected Succesfully.");       // - then conole log the message
}).catch((error) => {                        // if there is an error, catch the error and -
  console.log("Failed to Connect MongoDB"); // - log the message and error
  console.log(error);
  
});

const app = express(); // creates a instance of Express; use to define routes and handle incoming requests

// app.listen -> starts the server
// 1st param -> listen to specific port (3000)
// 2nd param -> callback function to run when the server starts succesfully
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
})