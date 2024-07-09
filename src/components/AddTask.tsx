import { Button, Input } from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function AddTask({
  TaskList,
  SetTaskList,
}: {
  TaskList: any;
  SetTaskList: any;
}) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="lg:w-8/12 w-11/12 mx-auto fixed bottom-0 left-0 right-0 p-3 bg-white border">
      <form
        onSubmit={handleSubmit((data: any) => {
          reset();

          const newTask = {
            task: data.task,
            id: uuidv4(),
          };

          SetTaskList([...TaskList, newTask]);
          localStorage.setItem(
            "LOCTODO",
            JSON.stringify([...TaskList, newTask])
          );
        })}
        className="flex gap-2"
      >
        <Input size="sm" placeholder="Enter a task" {...register("task")} />
        <Button size="sm" type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
