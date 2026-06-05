//this is the part of the increament program
function IncrementButton(props) {
  return (
    <div>
      <button onClick={props.incrementFn}>+</button>
    </div>
  );
}
export default IncrementButton;
