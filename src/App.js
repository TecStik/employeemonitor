import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendanceTable } from "./Pages/pages";
import TaskTable from "./Pages/TaskTable/TaskTable";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      {/* <AttendanceTable /> */}
      {/* <TaskTable /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
