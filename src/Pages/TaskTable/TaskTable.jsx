import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState, useEffect, useRef } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import TaskTableModal from "./TaskTableModal";
import UseModal from "../UseModal/Modal";

// import "./TaskTable.css";

export default function TaskTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setdata] = useState([]);
  const [Valuedata, setValuedata] = useState("");
  const [FilterData, setFilterData] = useState([]);
  let SearchValue = useRef();

  const showModal = (Valuedata) => {
    setValuedata(Valuedata);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // if (FilterData.length === 0) {
    axios({
      method: "get",
      url: "http://localhost:5000/tasktable",
    })
      .then((res) => {
        // console.log(res.data, "====>response");
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err, "=====>erorr");
      });
    // }else{

    // }
  }, []);

  function SraechHandler() {
    console.log(SearchValue.current.value, "raz");

    axios({
      method: "post",
      url: "http://localhost:5000/SpecificTakeTable",
      data: {
        id: SearchValue.current.value,
        taskId: SearchValue.current.value,
        taskName: SearchValue.current.value,
        taskStatus: SearchValue.current.value,
        taskAssignor: SearchValue.current.value,
        taskAssignee: SearchValue.current.value,
      },
    })
      .then((res) => {
        console.log(res.data, "====>response");
        setFilterData(res.data);
      })
      .catch((err) => {
        console.log(err, "=====>erorr");
      });
  }

  console.log(FilterData.length === 0, "kkkk");
  return (
    <>
      <UseModal
        Valuedata={Valuedata}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      {/* <TaskTableModal
        Valuedata={Valuedata}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      /> */}
      ;{/* <Navbar /> */}
      <h1 class="font-bold text-2xl text-gray-700">Task Table</h1>
      <div class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="pb-4 bg-white dark:bg-gray-900 px-3 flex">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                  ref={SearchValue}
                />
              </div>
              <button
                className="px-2 py-1 bg-red-200 rounded-lg m-2"
                onClick={SraechHandler}
              >
                Search
              </button>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />

                      <label for="checkbox-all-search" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Task name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Task Assignor
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Task Assignee
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Start Time
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {FilterData.length === 0 ? (
                  <>
                    {data.map((v, i) => {
                      return (
                        <>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-2"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-2"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {v.createOn}
                            </th>
                            <td class="px-6 py-4">{v.taskName}</td>
                            <td class="px-6 py-4">{v.taskAssignor}</td>
                            <td class="px-6 py-4">{v.taskAssignee}</td>
                            <td class="px-6 py-4">{v.startTime}</td>
                            <td class="px-6 py-4">{v.taskStatus}</td>
                            <td
                              class="flex items-center px-6 py-4 space-x-3"
                              onClick={() => showModal(v)}
                            >
                              <a
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                View
                              </a>
                              {/* <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a> */}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {FilterData.map((v, i) => {
                      return (
                        <>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-2"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-2"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {v.createOn}
                            </th>
                            <td class="px-6 py-4">{v.taskName}</td>
                            <td class="px-6 py-4">{v.taskAssignor}</td>
                            <td class="px-6 py-4">{v.taskAssignee}</td>
                            <td class="px-6 py-4">{v.startTime}</td>
                            <td class="px-6 py-4">{v.taskStatus}</td>
                            <td
                              class="flex items-center px-6 py-4 space-x-3"
                              onClick={() => showModal(v)}
                            >
                              <a
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                View
                              </a>
                              {/* <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a> */}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* <main class="bg-white-medium flex-1 p-3 overflow-hidden">
        
            {data.map((v, i) => {
              return (
                <>
                  <div class="flex flex-col">
                    <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                      <div class="mb-2 mx-2 border-solid border-gray-300  rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
                        <div class="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
                          Task Three: Website
                        </div>
                        <div class="p-3">
                          <button
                            data-modal="centeredFormModal"
                            class="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => showModal(v)}
                          >
                            Open modal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </main> */}
        </div>
      </div>
    </>
  );
}

{
  /* <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                <div class="mb-2 mx-2 border-solid border-gray-300 rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
                  <div class="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
                    Task One: React Native
                  </div>
                  <div class="p-3">
                    <button
                      data-modal="toppedModal"
                      class="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={showModal}
                    >
                      Open Modal
                    </button>
                  </div>
                </div>

                <div class="mb-2 mx-2 border-solid border-gray-300 rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
                  <div class="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
                    Task Two: Digital Marketing
                  </div>
                  <div class="p-3">
                    <button
                      data-modal="centeredModal"
                      class="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={showModal}
                    >
                      Open modal
                    </button>
                  </div>
                </div>
              </div> */
}

// {/* <div class="mb-2 mx-2 border-solid border-gray-300  rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
//       <div class="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
//         Task Four: Grafic Designing
//       </div>
//       <div class="p-3">
//         <button
//           data-modal="largeSizeModal"
//           class="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={showModal}
//         >
//           Open modal
//         </button>
//       </div>
//     </div> */}

// <Modal
//   title="Basic Modal"
//   open={isModalOpen}
//   onOk={handleOk}
//   onCancel={handleCancel}
// >
//   <div class="overlay close-modal"></div>
//   <div class="">
//     <div class=" p-5">
//       {/* <!-- Modal content --> */}
//       <form id="form_id" class="w-full">
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
//               for="grid-first-name"
//             >
//               Task Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
//               for="grid-last-name"
//             >
//               Duration
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//             />
//           </div>
//         </div>
//         <div class="flex flex-wrap -mx-3 mb-2">
//           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
//               for="grid-city"
//             >
//               Date
//             </label>
//             <input
//               class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
//               id="grid-city"
//               type="date"
//               placeholder="Albuquerque"
//             />
//           </div>
//           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
//               for="grid-zip"
//             >
//               Start Time
//             </label>
//             <input
//               class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
//               id="grid-zip"
//               type="text"
//               placeholder="90210"
//             />
//           </div>
//           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
//               for="grid-zip"
//             >
//               End Time
//             </label>
//             <input
//               class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
//               id="grid-zip"
//               type="text"
//               placeholder="90210"
//             />
//           </div>
//         </div>
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
//               for="grid-password"
//             >
//               descriprion
//             </label>
//             <input
//               class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
//               id="grid-password"
//               type="text"
//               placeholder="descriprion"
//             />
//             <p class="text-grey-dark text-xs italic">
//               Make it as long and as crazy as you'd like
//             </p>
//           </div>
//         </div>

//         <div class="mt-5">
//           <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//             Submit
//           </button>{" "}
//           <button class="close-modal cursor-pointer bg-red-500 hover:bg-red-700 text-red-900 font-bold py-2 px-4 rounded">
//             Close
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </Modal>
