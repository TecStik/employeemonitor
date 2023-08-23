import React, { useEffect, useState, useRef } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import Url from "../../Core/index";

export default function UseModal({
  isModalOpen,
  handleOk,
  handleCancel,
  Valuedata,
}) {
  let [getAllEmployee, setgetAllEmployee] = useState([]);
  // let a = Object.entries(Valuedata);
  console.log(Valuedata.taskAssignee, "=====>data");
  // let uri = Url + "/employeetable";
  // console.log(uri);
  useEffect(() => {
    axios({
      method: "get",
      url: Url + "/employeetable",
    })
      .then((res) => {
        // console.log(res.data, "response");
        setgetAllEmployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function HandlerAssign(v) {
    console.log(Valuedata.id, v.firstname, "Update");
    axios({
      method: "post",
      url: Url + "/updateAssignTask",
      data: {
        id: Valuedata.id,
        taskAssignee: v.firstname,
      },
    })
      .then((res) => {
        console.log(res.data, "response");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // width={1000}
      >
        <div class="overlay close-modal">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" class="p-4">
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
                </th> */}
                <th scope="col" class="px-6 py-3">
                  Employee name
                </th>
                <th scope="col" class="px-6 py-3">
                  Employee Position
                </th>
                {/* <th scope="col" class="px-6 py-3">
                  Task Assignee
                </th>
                <th scope="col" class="px-6 py-3">
                  Start Time
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th> */}

                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getAllEmployee.map((v, i) => {
                return (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      {/* <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-search-2"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-2" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td> */}
                      {/* <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {Valuedata.createOn}
                      </th> */}
                      <td class="px-6 py-4">{v.firstname}</td>
                      <td class="px-6 py-4">{v.position}</td>
                      {/* <td class="px-6 py-4">{Valuedata.taskAssignee}</td>
                      <td class="px-6 py-4">{Valuedata.startTime}</td>
                      <td class="px-6 py-4">{Valuedata.taskStatus}</td> */}
                      <td
                        class="flex items-center px-6 py-4 space-x-3"
                        onClick={() => HandlerAssign(v)}
                      >
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Assign
                        </a>
                        {/* <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a> */}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}
