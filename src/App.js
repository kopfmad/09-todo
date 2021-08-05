import { useState } from "react";

function App() {
  let [taskInput, setTaskInput] = useState("");
  let [taskList, setTaskList] = useState([]);

  function inputHandler(e) {
    setTaskInput(e.target.value);
  }

  function addTask() {
    if (taskInput.length > 0) {
      setTaskList([...taskList, taskInput]); //aqui eu retorno um ARRAY, que é composto do
      setTaskInput("");
    }
  }

  function deleteItem(indice) {
    //quando for trabalhar com remoção de itens de array, eu crio uma copia, depois eu removo, e entao eu atualizo o state
    let copia = [...taskList];
    copia.splice(indice, 1);
    setTaskList([...copia]);
  }

  //////////////////////////////////////

  //Quando eu uso o .map, além de passar uma função para cada item do array, eu também crio um index para cada item. Eu uso esse mesmo index na função delete. Assim a cada vez que o loop for criar um item por exemplo de index 2, ele também já passa 2 no delete.
  let tasklistmapped = taskList.map((task, index) => {
    return (
      <div className="taskout" key={Math.random()}>
        <span>{task}</span>
        <i className="far fa-trash-alt" onClick={() => deleteItem(index)}></i>
      </div>
    );
  });

  //////////////////////////////////////

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
          {tasklistmapped}
        </div>
      </div>
    </div>
  );
}

export default App;
