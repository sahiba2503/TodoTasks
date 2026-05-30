

function ManageTasks() {
  return (
    <div className="manageTasks">
      <input type="text" placeholder="Enter your task name" />
      <div className="dueDateContainer">
      <strong>Due Date</strong>
      <input type="date"  /></div>
      <input type="text" placeholder="Enter task description" />
       <button >Create</button>
    </div>
  )
}

export default ManageTasks
