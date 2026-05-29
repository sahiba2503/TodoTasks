
import ManageTasks from "./ManageTasks"
import {Routes,Route,Navigate} from "react-router-dom"
import ActiveTask from "./ActiveTask";
import ProgressTask from "./ProgressTask"
function Maincomponent() {
  return (
  <Routes>
    <Route path="/Manage" element={<ManageTasks/>}></Route>
    <Route path="/View" element={< Navigate to ="/View/Active"/>}/>
        <Route path="/View/Active" element={<ActiveTask/>}></Route>
        <Route path="/View/Progress" element={<ProgressTask/>}></Route>
        <Route path="/View/Done" element={<ActiveTask/>}></Route>
         <Route path="/View/Backlog" element={<ActiveTask/>}></Route>
        <Route path="/View/Expire" element={<ActiveTask/>}></Route>
  </Routes>

  )
}

export default Maincomponent
