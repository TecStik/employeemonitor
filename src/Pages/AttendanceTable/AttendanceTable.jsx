import React from "react";

export default function AttendanceTable() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Attendance Table
        </h2>
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="title-font font-medium">In</span>
                </span>
              </button>
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="title-font font-medium">Out</span>
                </span>
              </button>
            </div>

            <h1 class="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p class="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
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
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              All Attendance Days:
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr 
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                <h2 class="text-gray-900 title-font font-medium text-left">
                  Holden Caulfield
                </h2>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Date</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Day</h2>
                  <p class="text-gray-500">Monday</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Check In</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">
                    Check Out
                  </h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                <h2 class="text-gray-900 title-font font-medium text-left">
                  Holden Caulfield
                </h2>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Date</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Day</h2>
                  <p class="text-gray-500">Monday</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Check In</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">
                    Check Out
                  </h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                <h2 class="text-gray-900 title-font font-medium text-left">
                  Holden Caulfield
                </h2>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Date</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Day</h2>
                  <p class="text-gray-500">Monday</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Check In</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">
                    Check Out
                  </h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                <h2 class="text-gray-900 title-font font-medium text-left">
                  Holden Caulfield
                </h2>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Date</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Day</h2>
                  <p class="text-gray-500">Monday</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">Check In</h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
                <div class="flex justify-between">
                  <h2 class="text-gray-900 title-font font-medium">
                    Check Out
                  </h2>
                  <p class="text-gray-500">7/31/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
