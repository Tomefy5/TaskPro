import { Pencil, Trash } from "lucide-react";

export default function Task() {
  return (
    <div className="border card rounded-md flex flex-row justify-between p-4 m-2">
      <div className="flex flex-row items-start gap-3">
        <input
          type="checkbox"
          className="checkbox checkbox-sm checkbox-primary rounded"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-medium">Task title</h3>
          <p className="text-sm">description</p>
          <p className="text-sm">deadline: 8 jan 2025</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="badge badge-warning badge-outline ">medium</span>
        <div>
          <button className="btn btn-ghost btn-md">
            <Pencil size={16} />
          </button>
          <button className="btn btn-ghost">
            <Trash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
