import { Plus } from "lucide-react";

export default function TaskToolBar({setOpen, open}) {
  return (
    <div className="p-2 m-1 flex flex-row justify-between">
      <div className="flex flex-row gap-2">
        <select className="select select-bordered w-full max-w-xs">
          <option value="data1">Creation date</option>
          <option value="data1">Due date</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        </select>
      </div>

      <button className="btn" onClick={() => {setOpen(!open)}}>
        <Plus size={12} />
        <span>Add new task</span>
      </button>
    </div>
  );
}
