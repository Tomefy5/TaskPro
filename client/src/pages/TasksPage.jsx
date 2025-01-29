import TaskToolBar from "../components/TaskToolBar";
import Task from "../components/Task";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TasksPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h2 className="font-bold text-2xl">My Tasks</h2>
      <TaskToolBar setOpen={setOpen} open={open} />
      <div className="flex flex-col gap-2">
        <Task />
      </div>

      {/* Modal */}
      {open && (
        <div className="bg-slate-200 p-4 fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="modal-box z-20">
            <h2 className="font-extrabold text-2xl mb-5">New Task</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Task title..."
              />
              <textarea
                className="textarea textarea-bordered"
                placeholder="description..."
              ></textarea>
              <div className="flex flex-row gap-3">
                <select className="select select-bordered flex-grow">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a deadline"
                  className="input input-bordered"
                />
              </div>
              <div className="flex flex-row gap-2 justify-end my-2">
                <button
                  className="btn btn-outline w-24"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-primary w-24">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
