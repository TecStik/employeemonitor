import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
// import "./TaskTable.css";

export default function TaskTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Navbar /> */}
      <h1 class="font-bold text-2xl text-gray-700">Task Table</h1>
      <div class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
        <div>
          <main class="bg-white-medium flex-1 p-3 overflow-hidden">
            <div class="flex flex-col">
              <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
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
              </div>

              <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                <div class="mb-2 mx-2 border-solid border-gray-300  rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
                  <div class="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
                    Task Three: Website
                  </div>
                  <div class="p-3">
                    <button
                      data-modal="centeredFormModal"
                      class="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={showModal}
                    >
                      Open modal
                    </button>
                  </div>
                </div>

                <div class="mb-2 mx-2 border-solid border-gray-300  rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
                  <div class="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
                    Task Four: Grafic Designing
                  </div>
                  <div class="p-3">
                    <button
                      data-modal="largeSizeModal"
                      class="modal-trigger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={showModal}
                    >
                      Open modal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div class="overlay close-modal"></div>
        <div class="">
          <div class=" p-5">
            {/* <!-- Modal content --> */}
            <form id="form_id" class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                    for="grid-first-name"
                  >
                    Task Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                    for="grid-last-name"
                  >
                    Duration
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                    for="grid-city"
                  >
                    Date
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-city"
                    type="date"
                    placeholder="Albuquerque"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                    for="grid-zip"
                  >
                    Start Time
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-zip"
                    type="text"
                    placeholder="90210"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                    for="grid-zip"
                  >
                    End Time
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-zip"
                    type="text"
                    placeholder="90210"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                    for="grid-password"
                  >
                    descriprion
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-password"
                    type="text"
                    placeholder="descriprion"
                  />
                  <p class="text-grey-dark text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>

              <div class="mt-5">
                <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>{" "}
                <button class="close-modal cursor-pointer bg-red-500 hover:bg-red-700 text-red-900 font-bold py-2 px-4 rounded">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
