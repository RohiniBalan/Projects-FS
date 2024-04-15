import "./App.css";
import CustomButton from "./ProjectOne/CustomButton";
import CustomInput from "./ProjectOne/CustomInput";
import Header from "./ProjectOne/Header";
import Card from "./ProjectOne/Card";
import { useState } from "react";
function App() {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState("");
  const [singleDes, setSingleDes] = useState("");
  const UpdateTask = (id) => {
    setTasks(Tasks.map((t) => (t.id == id ? { ...t, complete: true } : t)));
  };
  const deleteTask = (id) => {
    setTasks(Tasks.filter((t) => (t.id == id ? false : true)));
  };
  const addToCard = () => {
    const id = Tasks.length == 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false,
    };
    setTasks([...Tasks, taskDetail]);
  };
  const ClearInput = () => {
    setSingleTask("");
    setSingleDes("");
  };
  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };
  const handleCustomDes = (event) => {
    setSingleDes(event.target.value);
  };
  const handleInput = () => {
    setAdd(!add);
  };
  return (
    <div className="main">
      <div className="inputSection">
        <Header handleInput={handleInput} />
        {add == true ? (
          <>
            <CustomInput
              value={singleTask}
              placeHolder="Enter Task"
              name="Task"
              change={handleCustomTask}
            />
            <CustomInput
              value={singleDes}
              placeHolder="Enter Description"
              name="Description"
              change={handleCustomDes}
            />
            <div className="btnWrapper">
              <CustomButton
                color="white"
                bg="green"
                name="Save Task"
                click={addToCard}
              />
              <CustomButton
                color="white"
                bg="Red"
                name="Cancel"
                click={ClearInput}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="cardSection">
        {Tasks.map((t) => (
          <Card
            title={t.task}
            des={t.des}
            key={t.id}
            delete={() => deleteTask(t.id)}
            update={() => UpdateTask(t.id)}
            complete={t.complete}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
