function Maincontaint(props) {
  return (
    <div className='viewMainContainer'>
      {props.task.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}

export default Maincontaint;
