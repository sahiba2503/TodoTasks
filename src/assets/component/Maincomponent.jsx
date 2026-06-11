//update discription name
import TodoRouter from "./TodoRouter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Maincomponent() {
  let navigate = useNavigate();
  let [tasks, setTasks] = useState([]);
  let [editIndex,setEditIndex] = useState(null);
  let [taskDetail, setTaskDetail] = useState({
    name: "",
    dueDate: "",
    currDate: "",
    description: "",
    status: "active",
  });

  // const handleUpdateStatus = (index, status) => {
  //   const updatedTasks = tasks.map((currentTask, idx) => {
  //     // currentTask.id === id
  //     if (index === idx) {
  //       return {
  //         ...currentTask,
  //         status,
  //       };
  //     } else {
  //       return currentTask;
  //     }
  //   });
  //   setTasks(updatedTasks);
  // };

  // const getNextStatus = (status) => {
  //   if(status === "Active") {
  //     return "Completed"
  //   }
  //   // ...
  // }

  // const getPrevStatus = (status) => {
  //   if (status === "Active") {
  //     return "Backlog";
  //   }
  //   // ...
  // };
  // const handleMoveNext = (index) => {
  //   const updatedTasks = tasks.map((currentTask, idx) => {
  //     // currentTask.id === id
  //     if(index === idx) {
  //       const newNextStatus = getNextStatus(currentTask.status)

  //       return {
  //         ...currentTask,
  //         status: newNextStatus,
  //       }
  //     } else {
  //       return currentTask
  //     }
  //   });
  //   setTasks(updatedTasks);

  // }
  // function handleUpdateTask(index){

  // }

  function handleMoveNext(index, status) {
    const updatedTasks = [...tasks];

    updatedTasks[index].status = status;

    setTasks(updatedTasks);
  }

  function handleMovePre(index, status) {
    const updatedTasks = [...tasks];

    updatedTasks[index].status = status;

    setTasks(updatedTasks);
  }
  function handleTaskDeleted(index, status) {
    const updatedTasks = [...tasks];

    updatedTasks[index].status = status;

    setTasks(updatedTasks);
  }

  const handleUpdateName = (name) => {
    setTaskDetail({
      ...taskDetail,
      name: name,
    });
  };

  const handleUpdateDueDate = (dueDate) => {
    setTaskDetail({
      ...taskDetail,
      dueDate: dueDate,
    });
  };

  const handleUpdateDescription = (description) => {
    setTaskDetail({
      ...taskDetail,
      description: description,
    });
  };

  function CreateButtonClicked() {
    if(editIndex === null){
    if (
      taskDetail.name.trim() &&
      taskDetail.dueDate.trim() &&
      taskDetail.description.trim()
    ) {
      setTasks([...tasks, taskDetail]);
      setTaskDetail({
        name: "",
        dueDate: "",
        currDate: "",
        description: "",
        status: "active",
      });
      navigate("/View");
    } else {
      alert("please Enter Task detail");
    }
  }
  else{
      const updatedlist = [...tasks];
      updatedlist[editIndex].name = taskDetail.name;
       updatedlist[editIndex].dueDate = taskDetail.dueDate;
        updatedlist[editIndex].currDate = taskDetail.currDate;
         updatedlist[editIndex].description = taskDetail.description;
      setTasks(updatedlist);
        setEditIndex(null);
        setTaskDetail({
  name: "",
  dueDate: "",
  currDate: "",
  description: "",
  status: "active",
});
        
  }
}
  const handleUpdateTask = (index)=>{
      setTaskDetail({
       name: tasks[index].name,
    dueDate: tasks[index].dueDate,
    currDate: "updated",
    description: tasks[index].description,
     status: tasks[index].status,
       }
    )
     setEditIndex(index);
      navigate("/Manage");
  };
  return (
    <TodoRouter
      handleUpdateName={handleUpdateName}
      handleUpdateDueDate={handleUpdateDueDate}
      handleUpdateDescription={handleUpdateDescription}
      CreateButtonClicked={CreateButtonClicked}
      taskDetail={taskDetail}
      tasks={tasks}
      handleMoveNext={handleMoveNext}
      handleMovePre={handleMovePre}
      handleTaskDeleted={handleTaskDeleted}
     handleUpdateTask={handleUpdateTask}
    />
  );
}

export default Maincomponent;
