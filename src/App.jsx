//chenge project router components name.
//implement update and done task.
// import Navbar from "./assets/component/Navbar";
// import Maincomponent from "./assets/component/Maincomponent";
// import { useEffect } from "react";
// import { useLocation,useNavigate } from "react-router-dom";
// function App() {
//   let location = useLocation();
//   let navigate = useNavigate();
//   useEffect(()=>{
//     if(location.pathname === "/"){
//       navigate("/Manage");
//     }
//   },[location.pathname])
//   return (
//     <div>
//       <Navbar />
//       <Maincomponent />
//     </div>
//   )
// }

// export default App




import  { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const saveToDoList = (event) => {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    if (editIndex !== null) {
      // Update existing task
      const updatedList = [...todolist];
      updatedList[editIndex] = task;
      setTodolist(updatedList);

      setEditIndex(null);
      setTask("");
    } else {
      // Add new task
      if (!todolist.includes(task)) {
        setTodolist([...todolist, task]);
        setTask("");
      } else {
        alert("Task already exists");
      }
    }
  };

  // Delete Task
  const DeleteList = (index) => {
    const finalList = todolist.filter((item, i) => i !== index);
    setTodolist(finalList);

    // Reset edit mode if deleted task was being edited
    if (editIndex === index) {
      setEditIndex(null);
      setTask("");
    }
  };

  // Fill input for editing
  const handleUpdateTask = (index) => {
    setTask(todolist[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <form onSubmit={saveToDoList}>
        <input
          type="text"
          name="toname"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />

        <button type="submit">
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </form>

      <div className="outerDiv">
        {todolist.map((value, index) => (
          <div key={index}>
            <li>
              {value} -- {index}
            </li>

            <button onClick={() => DeleteList(index)}>
              Delete
            </button>

            <button onClick={() => handleUpdateTask(index)}>
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



