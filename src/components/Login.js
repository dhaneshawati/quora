import React, { useState } from "react";
import "../styles/Login.css";
import GoogleButton from "react-google-button";
import COVER_IMAGE from "../Assets/Water.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/actionCreator";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../firebase";

const Login = () => {
  const mailRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const currentUser = useAuth();

  const dispatch = useDispatch();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    mailRef.current.focus();
  }, []);

  useEffect(() => {
    if (currentUser) {
      dispatch(setUser(currentUser));
      navigate("/home");
    }
  }, [currentUser]);

  const handleSubmit = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="contain">
      <div className="w-[50rem] h-[34.375rem] m-auto">
        <div className="parent absolute w-[50rem] h-[34.375rem] flex  m-auto">
          <div className="leftDiv relative w-1/2 h-full flex flex-col mt-8 ml-32 shadow">
            <div className="left_content absolute top-[20%] left-[10%] flex flex-col ">
              <img
                className="h-[35%] w-[45%] ml-16"
                src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png"
                alt="Quora"
              />
              <h4 className="text-2xl text-white font-extrabold m-auto mr-10">
                A place to share knowledge and better understand the world
              </h4>
            </div>
            <img
              src={COVER_IMAGE}
              alt="poster"
              className="photo h-[550px] object-cover border-red rounded-md"
            />
          </div>

          <div className="w-1/2 h-full  bg-[#f5f5f5] flex flex-col p-10 justify-between mt-8 rounded-md mr-[10%]">
            <p className="mb-4 text-[#FF0000]">{error}</p>

            <div className="w-full flex flex-col  mx-auto">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-3xl font-serif font-semibold mb-2">
                  Login
                </h3>
                <p className="text-base mb-2">Please enter your details.</p>
              </div>

              <div className="w-full flex flex-col ">
                <input
                  type="email"
                  className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                  placeholder="Email"
                  ref={mailRef}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Remember Me</p>
                </div>
              </div>

              <div className="w-full flex flex-col my-4 items-center">
                <button
                  className="w-1/2 text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center hover:bg-slate-600"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
              </div>

              <div className="w-full flex items-center justify-center relative py-2">
                <div className="w-full h-[1px] bg-black"></div>
                <p className="absolute text-lg text-black/80 bg-[#f5f5f5]">
                  or
                </p>
              </div>

              <div className="w-full my-4 flex items-center justify-center">
                <GoogleButton onClick={handleGoogleSignIn} />
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <p className="text-sm font-normal text-[#060606]">
                Don't have a account?{" "}
                <span className=" text-[black] font-semibold underline underline-offset-2 cursor-pointer">
                  <Link to="/signup" className="signup">
                    {"Sign up"}
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
