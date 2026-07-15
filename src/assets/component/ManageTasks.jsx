import useToggle from "./useToggle";
function ManageTasks(props) {
  let [value,toggle] = useToggle();
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

      <button onClick={props.CreateButtonClicked}>Create</button>
      <button onClick={toggle}>{value?"I am filing fresh":"I can do every things"}</button>
    </div>
  );
}

export default ManageTasks;
