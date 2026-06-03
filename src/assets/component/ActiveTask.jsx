

// function ActiveTask() {
//   return (
//     <div>
//       active task
//     </div>
//   )
// }

// export default ActiveTask



function ActiveTask(props) {
  return (
    <div>
     {props.tasks.map((value,index)=>(
        <div key={index}  className="singleTaskDetail">
            <div> <p><b>Task Name :</b>{value.name}</p></div>
           <div><p><b>Task DueDate :</b>{value.dueDate}</p></div>
           <div><p><b>Task Description :</b>{value.description}</p></div>
          <div><span>⬅️</span><span>⬆️</span><span>➡️</span> <span>X</span>
          </div>          
        </div>
      )) }
    </div>
  );
}

export default ActiveTask

