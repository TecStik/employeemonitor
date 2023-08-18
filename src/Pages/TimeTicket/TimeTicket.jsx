import axios from "axios";
import React, { useRef } from "react";
// import "./TimeTicket.css";

export default function TimeTicket() {
  let taskId = useRef();
  let endTime = useRef();
  let taskName = useRef();
  let startTime = useRef();
  let taskStatus = useRef();
  let targetTime = useRef();
  let taskAssignor = useRef();
  let taskAssignee = useRef();
  let taskDescription = useRef();

  const handler = (e) => {
    e.preventDefault();

    let body = {
      taskId: taskId.current.value,
      endTime: endTime.current.value,
      taskName: taskName.current.value,
      startTime: startTime.current.value,
      taskStatus: taskStatus.current.value,
      targetTime: targetTime.current.value,
      taskAssignor: taskAssignor.current.value,
      taskAssignee: taskAssignee.current.value,
      taskDescription: taskDescription.current.value,
    };
    axios({
      method: "post",
      url: "http://localhost:5000/tasktable",
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
      <h1 class="font-bold text-2xl text-gray-700">Time Ticket</h1>
      <div class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
        <div>
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              {/* <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div> */}
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  Daily Task
                </span>
                <form onSubmit={(e) => handler(e)}>
                  <div class="flex flex-wrap ">
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="Task"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Task Id
                        </label>
                        <input
                          type="text"
                          id="Task"
                          name="task"
                          ref={taskId}
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="Task"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Task Name
                        </label>
                        <input
                          type="text"
                          id="Task"
                          ref={taskName}
                          name="task"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap ">
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="Task"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Task Assignor
                        </label>
                        <input
                          type="text"
                          id="Task"
                          ref={taskAssignor}
                          name="task"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="Task"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Task Assignee
                        </label>
                        <input
                          type="text"
                          ref={taskAssignee}
                          id="Task"
                          name="task"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap ">
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="name"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Start Time
                        </label>
                        <input
                          type="time"
                          ref={startTime}
                          id="time"
                          name="time"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="Date"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Status
                        </label>
                        <input
                          type="text"
                          ref={taskStatus}
                          id="date"
                          name="dtae"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap ">
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="email"
                          class="leading-7 text-sm text-gray-600"
                        >
                          End Time
                        </label>
                        <input
                          type="time"
                          ref={endTime}
                          id="time"
                          name="time"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label
                          for="Date"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Target Time
                        </label>
                        <input
                          type="time"
                          id="date"
                          ref={targetTime}
                          name="dtae"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class="relative">
                        <label
                          for="Description"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          ref={taskDescription}
                          name="description"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>

                    {/* <div class="flex flex-col">
    <!-- Card Sextion Starts Here -->
    <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
        <!--Horizontal form--> */}
                  </div>
                  <div class="p-2 w-full">
                    <button
                      type="submit"
                      class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
              <div class="flex flex-col text-center w-full mb-10">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                  Ticket Record
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Lorem, ipsum dolor sit amet consectetur
                </p>
              </div>
              <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Muhammad Faiz e Raza
                </a>
                <table class="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Date
                      </th>
                      <th class="px-4 py-2 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/5">
                        Start Time
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/5">
                        End Time
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/5">
                        Time
                      </th>
                      <th class="title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  w-full">
                        Description
                      </th>
                      <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">Date</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Start Time
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        End Time
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">Time</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 w-1/2">
                        Description
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        Edit
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
                        48 Mb/s
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        48 Mb/s
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        A Long and Winding Tour of the History of UI Frameworks
                        and Tools and the Impact on Design
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $72
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
