function ActiveTask(props) {
  return (
    <div>
      {props.tasks.map((value, index) => {
        if (value.status === "progress") {
          return (
            <div key={index} className='singleTaskDetail'>
              <div>
                {" "}
                <p>
                  <b>Task Name :</b>
                  {value.name}
                </p>
              </div>
              <div>
                <p>
                  <b>Task DueDate :</b>
                  {value.dueDate}
                </p>
              </div>
              <div>
                <p>
                  <b>Task Description :</b>
                  {value.description}
                </p>
              </div>
              <div>
                <span onClick={() => props.handleMovePre(index, "active")}>
                  ⬅️
                </span>
                <span onClick={() => props.handleUpdateTask(index)}>⬆️</span>
                <span onClick={() => props.handleMoveNext(index, "done")}>
                  ➡️
                </span>{" "}
                <span onClick={() => props.handleTaskDeleted(index, "deleted")}>
                  X
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ActiveTask;
