// //handleUpdateNam,handleUpdateDueDate,CreateButtonClicked,handleUpdateDescription
// function ManageTasks(props) {
//   return (
//     <div className="manageTasks">
//       <input type="text" placeholder="Enter your task name" value = {props.taskDetail.name}
//       onChange={(e)=>{props.handleUpdateNam(e.target.value)}}/>
//       <div className="dueDateContainer">
//       <strong>Due Date</strong>
//       <input type="date" value={props.taskDetail.dueDate} onChange={(e)=>{props.handleUpdateDueDate(e.target.value)}}/></div>
//       <input type="text" placeholder="Enter task description" value={props.taskDetail.description} onChange={(e)=>{props.handleUpdateDescription(e.target.value)}}/>
//        <button onClick={props.CreateButtonClicked}>Create</button>
//     </div>
//   )
// }

// export default ManageTasks

function ManageTasks(props) {
  return (
    <div className='manageTasks'>
      <input
        type='text'
        placeholder='Enter your task name'
        value={props.taskDetail.name}
        onChange={(e) => {
          props.handleUpdateName(e.target.value);
        }}
      />

      <div className='dueDateContainer'>
        <strong>Due Date</strong>
        <input
          type='date'
          value={props.taskDetail.dueDate}
          onChange={(e) => {
            props.handleUpdateDueDate(e.target.value);
          }}
        />
      </div>

      <input
        type='text'
        placeholder='Enter task description'
        value={props.taskDetail.description}
        onChange={(e) => {
          props.handleUpdateDescription(e.target.value);
        }}
      />

      <button  onClick={props.CreateButtonClicked} >Create</button>
    </div>
  );
} 

export default ManageTasks;
