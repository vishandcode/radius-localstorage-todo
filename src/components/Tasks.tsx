import { Button } from "@nextui-org/react";

export default function Tasks({
  TaskList,
  SetTaskList,
}: {
  TaskList: any;
  SetTaskList: any;
}) {
  return (
    <div className="flex flex-col gap-4">
      {TaskList.map((item: any) => (
        <div
          key={item?.id}
          className="border p-3 bg-blue-50 flex flex-row justify-between items-center"
        >
          <p>{item.task}</p>
          <Button
            size="sm"
            color="danger"
            onClick={() => {
              const NewTaskList = TaskList.filter(
                (task: any) => task.id !== item.id
              );
              SetTaskList(NewTaskList);
              localStorage.setItem("LOCTODO", JSON.stringify(NewTaskList));
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
