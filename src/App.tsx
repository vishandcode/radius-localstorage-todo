import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [TaskList, SetTaskList] = useState<any>([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("LOCTODO") || "[]");
    if (storedTasks) SetTaskList(storedTasks);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 lg:w-8/12 w-11/12 mx-auto lg:p-4 p-2">
        <Header />
        <Tasks TaskList={TaskList} SetTaskList={SetTaskList} />
        <AddTask TaskList={TaskList} SetTaskList={SetTaskList} />
      </div>
    </div>
  );
}
