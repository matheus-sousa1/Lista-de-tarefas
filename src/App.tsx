import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";

import "./App.css";

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
    console.log(todoList);
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Tarefa"
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="DeadLine (in days)..."
            name="deadLine"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
