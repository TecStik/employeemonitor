import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendanceTable } from "./Pages/pages";
import TaskTable from "./Pages/TaskTable/TaskTable";
import Navbar from "./Navbar/Navbar";
import SignIn from "./Pages/Sign/SignIn";
import SignUp from "./Pages/Sign/SignUp";


function App() {
  return (
    <>
      {/* <AttendanceTable /> */}
      {/* <TaskTable /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Navbar />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
