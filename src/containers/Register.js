import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../apis/firebase";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataEmail = email;
    const dataPassword = password;

    try {
      await createUserWithEmailAndPassword(
        auth,
        dataEmail,
        dataPassword
      );
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      setErrorMsg(errorMessage);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-2/3 h-screen hidden md:block">
          <img
            className="object-cover h-full"
            src="https://images5.alphacoders.com/115/thumb-1920-1157351.jpg"
            alt=""
          />
        </div>
        <div className=" w-1/3 h-screen bg-white flex flex-col items-center">
          <div className="p-8">
            <svg
              width="62"
              viewBox="0 0 48 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z"
                fill="black"
              />
              <path
                d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="p-8 mt-9">
            <h1 className="text-2xl font-semibold">Sign up</h1>
          </div>
          <div className=" w-2/3">
            <form className="text-center" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="bg-gray-100 font-semibold focus:outline-none focus:border-black  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="EMAIL"
                  onChange={emailInputHandler}
                  value={email}
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-gray-100 font-semibold focus:outline-none focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="PASSWORD"
                  onChange={passwordInputHandler}
                  value={password}
                />
              </div>
              <p className="text-red-500 text-xs italic text-left">
                {errorMsg ? errorMsg : ""}
              </p>
              <div className="mt-16">
                <button className="border-2 border-gray-200 rounded-md p-2 hover:border-black duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="30"
                  >
                    <path
                      d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"
                      fill="#808080"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-center mt-12 font-semibold text-gray-400">
                Already had account?{" "}
                <Link to="/login" className="hover:text-red-600">
                  Login Here!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
