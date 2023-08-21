import React, { useEffect, useState, useRef } from "react";
import { Button, Modal } from "antd";
export default function TaskTableModal({
  isModalOpen,
  handleOk,
  handleCancel,
  Valuedata,
}) {
//   console.log(Valuedata, "=====>data");
  return (
    <>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div class="overlay close-modal"></div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                Task View
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem, ipsum dolor sit amet consectetur
              </p>
            </div>
            <div class="w-full mx-auto overflow-auto">
              {/* <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Muhammad Faiz e Raza
              </a> */}
              <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Date
                    </th>
                    <th class="px-4 py-2 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/7">
                      Start Time
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/7">
                      End Time
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/7">
                      Target Time
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/7">
                      TaskAssignee
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/7">
                      Task Assignor
                    </th>
                    <th class="title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100  w-1/7">
                      Description
                    </th>
                    <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {Valuedata.createOn}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {Valuedata.startTime}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {Valuedata.endTime}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {Valuedata.targetTime}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {Valuedata.taskAssignee}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {Valuedata.taskAssignor}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3 w-1/2">
                      {Valuedata.taskDescription}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      {Valuedata.taskStatus}
                    </td>
                    {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                            <input name="plan" type="radio" />
                          </td> */}
                  </tr>

                  {/* <tr>
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
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}
