import mongoose from "mongoose";

// Defines a schema for the user
// a schema is like a blueprint/rules/things need to follow/ which tells mongooes what kind of data to expect and how it should be structured

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

//! Schema is important for data validation

const User = mongoose.model('User', userSchema); // creates a model named user based on the userSchema defined above

export default User;