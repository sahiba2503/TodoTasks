function ActiveTask(props) {
  return (
    <div>
      {props.tasks.map((value, index) => {
        if (value.status === "backlog") {
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
                <span>⬆️</span>
                <span onClick={() => props.handleMoveNext(index, "active")}>
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
