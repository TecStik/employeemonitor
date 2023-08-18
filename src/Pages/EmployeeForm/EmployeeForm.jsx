import axios from "axios";
import React, { useRef, useState } from "react";
// import "./TimeTicket.css";

export default function EmployeeForm() {
  //
  let firstname = useRef();
  let lastname = useRef();
  let email = useRef();
  let phonenumber = useRef();
  let position = useRef();
  let department = useRef();

  const handler = (e) => {
    e.preventDefault();

    let body = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      phonenumber: phonenumber.current.value,
      position: position.current.value,
      department: department.current.value,
    };
    // console.log(body);
    axios({
      method: "post",
      url: "http://localhost:5000/employeetable",
      data: body,
    })
      .then((res) => {
        console.log(res, "================>response");
      })
      .catch((error) => {
        console.log(error, "==========>error");
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <h1 class="font-bold text-2xl text-gray-700">Employee Form</h1>
      <div class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
        <div>
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Add Employee form
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2> */}
              </div>
              <div class=" px-5 py-2 mx-auto d-flex">
                <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                  <form onSubmit={(e) => handler(e)}>
                    <div class="relative mb-4">
                      <label
                        for="firstname"
                        class="leading-7 text-sm text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        ref={firstname}
                        name="firstname"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative mb-4">
                      <label
                        for="lastname"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        ref={lastname}
                        name="lastname"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative mb-4">
                      <label
                        for="phonenumber"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        ref={phonenumber}
                        id="phonenumber"
                        name="phonenumber"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative mb-4">
                      <label
                        for="email"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        ref={email}
                        type="email"
                        id="email"
                        name="email"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative mb-4">
                      <label
                        for="position"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Position
                      </label>
                      <input
                        type="text"
                        ref={position}
                        id="position"
                        name="position"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div class="relative mb-4">
                      <label
                        for="department"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Department
                      </label>
                      <input
                        ref={department}
                        type="text"
                        id="department"
                        name="department"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2> */}
                    {/* <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
                    {/* <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div> */}
                    <button
                      type="submit"
                      class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Button
                    </button>
                  </form>
                  {/* <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                </div>
              </div>

              <div class="lg:w-1/2 md:w-2/3 mx-auto"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
