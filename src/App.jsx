import Navbar from "./assets/component/Navbar";
import Maincomponent from "./assets/component/Maincomponent";
import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
function App() {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname === "/"){
      navigate("/Manage");
    }
  },[location.pathname])
  return (
    <div>
      <Navbar />
      <Maincomponent />
    </div>
  )
}

export default App
