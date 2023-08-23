import React, { useState, useRef } from "react";
import loginImg from "../assets/login.jpg";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Url from "../../Core";

export default function SignUp() {
  let navigation = useNavigate();
  let Username = useRef();
  let UserEmailNumber = useRef();
  let UserPassword = useRef();

  const handler = (e) => {
    e.preventDefault();

    let body = {
      Username: Username.current.value,
      UserEmailNumber: UserEmailNumber.current.value,
      UserPassword: UserPassword.current.value,
    };

    console.log(body);
    axios({
      method: "",
      url: Url + "",
      data: body,
    })
      .then((res) => {
        console.log();
      })
      .catch((err) => {
        console.log();
      });
    navigation("/dashboard");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handler}
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
        >
          <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
          {/* <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div> */}
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              ref={Username}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email / Number</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              ref={UserEmailNumber}
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-700 focus:outline-none"
              type="password"
              ref={UserPassword}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            SIGN UP
          </button>
          <p className="text-white">
            Don't have an account ?
            <span
              className="underline cursor-pointer mx-2"
              onClick={() => navigation("/")}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
