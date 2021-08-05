import { useState } from "react";

function App() {
  let [taskInput, setTaskInput] = useState("");
  let [taskList, setTaskList] = useState([]);

  function inputHandler(e) {
    setTaskInput(e.target.value);
  }

  function addTask() {
    if (taskInput.length > 0) {
      setTaskList([...taskList, taskInput]);
      setTaskInput("");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <div className="adiciona">
          <input
            type="text"
            placeholder="What do you need to do next?"
            onChange={(e) => inputHandler(e)}
            value={taskInput}
          />
          <button className="add" onClick={addTask}>
            ADD
          </button>
          {taskList.map((task) => {
            return (
              <div className="taskout">
                <span>{task}</span>
                <i class="far fa-trash-alt"></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
