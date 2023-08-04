import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState, useEffect } from "react";
import "./Attendance.css";
export default function AttendanceTable() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  function refreshClock() {
    setDate(new Date());
  }

  return (
    <>
      {/* <Navbar /> */}
      <div class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
            <div>
              <h1 class="title-font font-medium text-xl text-gray-900 container px-5 py-10 mx-auto flex flex-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>

              <div class="container px-5 py-5 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -mx-4 -mt-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                  <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-2xl text-gray-900">
                      4002
                    </h2>
                    <p class="leading-relaxed"> Attendance ID </p>
                  </div>
                  <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-2xl text-gray-900">
                      8/3/2023
                    </h2>
                    <p class="leading-relaxed">Date</p>
                  </div>
                </div>

                <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full ">
                  <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                    Chart
                  </h2>
                  {/* <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p> */}
                </div>
                <div class="flex flex-wrap -mx-4 py-5 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                  <div class="flex lg:flex-row md:flex-col">
                    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                      </svg>
                      <span class="ml-4 flex items-start flex-col leading-none">
                        <span class="text-xs text-gray-600 mb-1">
                          {date.toLocaleTimeString()}
                        </span>
                        <span class="title-font font-medium">Time In</span>
                      </span>
                    </button>
                    <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                      </svg>
                      <span class="ml-4 flex items-start flex-col leading-none">
                        <span class="text-xs text-gray-600 mb-1">
                          {date.toLocaleTimeString()}
                        </span>
                        <span class="title-font font-medium">Time Out</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                  <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                      Attendance Record
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quo dolorem quidem, eius nesciunt natus id harum
                      accusantium debitis error doloribus ex tempora
                    </p>
                  </div>
                  <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Muhammad Faiz e Raza
                    </a>
                    <table class="table-auto w-full text-left whitespace-no-wrap">
                      <thead>
                        <tr>
                          {/* <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                            Plan
                          </th> */}
                          <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                            Date
                          </th>
                          <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Day
                          </th>
                          <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Time In
                          </th>
                          <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Time Out
                          </th>
                          {/* <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-4 py-3">Start</td>
                          <td class="px-4 py-3">5 Mb/s</td>
                          <td class="px-4 py-3">15 GB</td>
                          <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                          {/* <td class="w-10 text-center">
                            <input name="plan" type="radio" />
                          </td> */}
                        </tr>
                        <tr>
                          <td class="border-t-2 border-gray-200 px-4 py-3">
                            Pro
                          </td>
                          <td class="border-t-2 border-gray-200 px-4 py-3">
                            25 Mb/s
                          </td>
                          <td class="border-t-2 border-gray-200 px-4 py-3">
                            25 GB
                          </td>
                          <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                            $24
                          </td>
                          {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                            <input name="plan" type="radio" />
                          </td> */}
                        </tr>
                        <tr>
                          <td class="border-t-2 border-gray-200 px-4 py-3">
                            Business
                          </td>
                          <td class="border-t-2 border-gray-200 px-4 py-3">
                            36 Mb/s
                          </td>
                          <td class="border-t-2 border-gray-200 px-4 py-3">
                            40 GB
                          </td>
                          <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                            $50
                          </td>
                          {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                            <input name="plan" type="radio" />
                          </td> */}
                        </tr>
                        <tr>
                          <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            Exclusive
                          </td>
                          <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            48 Mb/s
                          </td>
                          <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            120 GB
                          </td>
                          <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                            $72
                          </td>
                          {/* <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                            <input name="plan" type="radio" />
                          </td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Button
                    </button>
                  </div> */}
                </div>
              </section>
            </div>
          </div>
      {/* <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800 grid grid-cols-6 gap-4">
        <div
          class="main-content flex flex-col flex-grow p-4 px-4 col-span-5"
          id="ScreenColum"
        >
        <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>

        
        </div>
      </div> */}
    </>
  );
}
