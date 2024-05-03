import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/LoginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({email, password}));
    navigate("/news")
    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex justify-center mt-12">
      <div className=" bg-red-200 w-full sm:w-1/3 py-16 rounded-2xl shadow-2xl">
        <div>
          <img
            className="w-28 m-auto"
            src="https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
            alt=""
          />
          <h1 className="text-3xl font-semibold text-center mt-5">SING IN</h1>
        </div>
        <form className="mx-12" onSubmit={handleSubmit}>
          <div className="flex flex-col mx-12">
            <label htmlFor="email" className="mx-3 text-xl font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter example@email.com"
              className="h-10 rounded-lg px-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mx-12 my-3">
            <label htmlFor="password" className="mx-3 text-xl font-semibold">
              password:
            </label>
            <input
              type="Password"
              id="password"
              value={password}
              placeholder="Enter password"
              className="h-10 rounded-lg px-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center my-5">
            <button
              type="submit"
              className="bg-blue-500 w-1/2 h-10 rounded-lg text-xl font-bold text-gray-200 px-2"
            >
              Sing in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
