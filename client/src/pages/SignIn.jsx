import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
// useDispatch is used to dispatch/send an action when something happens

export default function SignIn() {
  const [formData, setFormData] = useState();
  const { loading, error } = useSelector((state) => state.user); // allows to read data/extract from redux store
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }); // uses spread operator to keep the previous data intact and add other data to it after each change.
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the default behaviour; prevent reloading after submitting
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        // send a request to the server
        method: "POST", // tells to send the data (POST)
        headers: {
          // information of data being sent
          "Content-Type": "application/json", // type if data being sent
        },
        body: JSON.stringify(formData), // make data in the form of object that can be sent to the server
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.errorMessage));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(data.errorMessage));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg outline-none"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 py-3">
        <p>Don&apos;t have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className=" text-red-500">
        {error ? error || "Something went wrong!" : ""}
      </p>
    </div>
  );
}
