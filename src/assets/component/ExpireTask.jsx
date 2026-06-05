function ActiveTask(props) {
  return (
    <div>
      {props.tasks.map((value, index) => {
        if (value.status === "expire") {
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
                <span onClick={()=> props.handleMovePre(index,"active")}>⬅️</span>
                <span>⬆️</span> <span>X</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ActiveTask;
