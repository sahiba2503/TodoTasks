
import ManageTasks from "./ManageTasks"
import ViewTasks from "./ViewTasks"
import {Routes,Route} from "react-router-dom"
import ActiveTask from "./ActiveTask"
function Maincomponent() {
  return (
  <Routes>
    <Route path="Manage" element={<ManageTasks/>}></Route>
    <Route path="View" element={<ViewTasks/>}></Route>
        <Route path="View/Active" element={<ActiveTask/>}></Route>
        <Route path="View/Active" element={<ActiveTask/>}></Route>
        <Route path="View/Active" element={<ActiveTask/>}></Route>
        <Route path="View/Active" element={<ActiveTask/>}></Route>
  </Routes>

  )
}

export default Maincomponent
