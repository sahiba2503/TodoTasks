//update discription name
import TodoRouter from "./TodoRouter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Maincomponent() {
  let navigate = useNavigate();
  let [tasks, setTasks] = useState([]);
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
        status: "",
      });
      navigate("/View");
    } else {
      alert("please Enter Task detail");
    }
  }
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
    />
  );
}

export default Maincomponent;
