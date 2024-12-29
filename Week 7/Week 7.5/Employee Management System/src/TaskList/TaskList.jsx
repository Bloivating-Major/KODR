import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div>
      {/* Tasks Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.tasks.map((tasks, index) => {
          if (tasks.active) {
            return <AcceptTask key={index} data={tasks} />;
          }
          if (tasks.newTask) {
            return <NewTask key={index} data={tasks} />;
          }
          if (tasks.completed) {
            return <CompleteTask key={index} data={tasks} />;
          }
          if (tasks.failed) {
            return <FailedTask key={index} data={tasks} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
