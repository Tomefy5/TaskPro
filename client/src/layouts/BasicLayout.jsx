import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TasksPage from "../pages/TasksPage";


export default function BasicLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="p-4">
        <Routes>
            <Route path="/"  element={<DashboardPage/>} />
            <Route path="/tasks"  element={<TasksPage/>} />
            <Route/>
        </Routes>
      </div>
    </div>
  );
}
