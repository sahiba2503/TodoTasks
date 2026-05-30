

// function ViewProgressTask() {
//   return (
//     <div>
//       View progress task
//     </div>
//   )
// }

// export default ViewProgressTask . all line of code in one jsx file
// import { useState } from "react";
// function ViewProgressTask() {
//    const [number, setNumber] = useState(0);
//     function Increment() {
//     setNumber(number + 1)
//   }
//   return (
//      <div>
//       <div>{number}</div>
//       <button onClick={Increment} style={{width:"3rem"}}>+</button>
//     </div>
//   )
// }
// export default ViewProgressTask

//secon type of logic of this program .
// import IncrementButton from  "./IncrementButton";
// import { useState } from "react";

// function ViewProgressTask() {
//   const [number, setNumber] = useState(0);

//   function increment() {
//     setNumber(number + 1);
//   }

//   return (
//     <div>
//       <div>{number}</div>
//       <IncrementButton incrementFn={increment}  />
//     </div>
//   );
// }
// export default ViewProgressTask

import DisplayData from "./DisplayData";
import IncrementButton from "./IncrementButton";
import { useState } from "react";

function ViewProgressTask() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  return (
    <div>
      <DisplayData data={number} />
      <IncrementButton incrementFn={increment}  />
    </div>
  );
}
export default ViewProgressTask;









