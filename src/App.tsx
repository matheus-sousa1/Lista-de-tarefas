import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";

import "./App.css";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);

  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadLine };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Tarefa"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Dias limites..."
            name="deadLine"
            value={deadLine}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
