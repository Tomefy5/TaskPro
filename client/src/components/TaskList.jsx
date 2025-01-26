import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/slices/taskSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return <div>{console.log(tasks)}</div>;
}
