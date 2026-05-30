import {Routes, Route} from "react-router-dom"
import ManageTasks from "./ManageTasks"
import ViewTasks from "./ViewTasks";
import DisplayAllTasksDetails from "./DisplayAllTasksDetails"
import ActiveTask from "./ActiveTask";
import ProgressTask from "./ProgressTask";

function ProjectRoute() {
  return (
   <Routes>
      <Route
        path='/Manage'
        element={
          <ManageTasks           
          />
        }
      ></Route>
      <Route path='/View' element={<ViewTasks  />}>

      {/* we can write this code instead of  <Route index element={<DisplayAllTasksDetails />} /> */}
        {/* <Route
          index
          element={
            <>
              <h1>View Tasks Page</h1>
              <p>Select a category from the sidebar.</p>
            </>
          }
        /> */}
        <Route index element={<DisplayAllTasksDetails />} />
        <Route path='Active' element={<ActiveTask />}></Route>
        <Route path='Progress' element={<ProgressTask />}></Route>
        <Route path='Done' element={<ActiveTask />}></Route>
        <Route path='Backlog' element={<ActiveTask />}></Route>
        <Route path='Expire' element={<ActiveTask />}></Route>
      </Route>
    </Routes>
  )
}

export default ProjectRoute
