import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, fetchTasks, updateTask } from "../redux/slices/taskSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.TASKS.tasks);
  const task = {
    title: "Add task",
    description: "...",
  };

  const update = {
    title: "Update task",
    description: "We have updated the task",
  };
  const taskId = "6795a543d7ef60179700704a";

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {console.log("Tasks: ",tasks)}
      <button
        onClick={() => {
          dispatch(createTask(task));
        }}
        className="btn btn-outline"
      >
        Create
      </button>
      <button
        onClick={() => {
          dispatch(updateTask({ taskId, update }));
        }}
        className="btn btn-outline"
      >
        Update
      </button>
    </div>
  );
}
