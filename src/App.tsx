import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" placeholder="Tarefa" />
        <input type="number" placeholder="DeadLine (in days)..." />
        </div>
        <button>Adicionar Tarefa</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
