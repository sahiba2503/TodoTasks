import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
export const ViewTasks = () => {
  return (
    <div className='todoTasksContainer'>
      <SideNavbar />
      <div className='taskContainer'>
        <Outlet />
      </div>
    </div>
  );
};
export default ViewTasks;
