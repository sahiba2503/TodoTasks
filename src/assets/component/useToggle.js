import { useState } from "react";
function useToggle() {
  let [value, setValue] = useState(false);
 
  const toggle = () => {
    setValue((prev) => !prev);
  };
  return [value, toggle];
}
export default useToggle;