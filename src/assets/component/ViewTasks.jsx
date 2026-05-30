
// import SideNavbar from "./SideNavbar.jsx";
// import Maincontaint from "./Maincontaint.jsx"
// function ViewTasks(props) {
//   return (
//     <div className="todoContainer">
//       <SideNavbar />
//       <Maincontaint props={props}/>
//     </div>
//   )
// }

//understand the outlet 
// import { Outlet } from "react-router-dom";
// export const ViewTasks = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <div className="taskStatus">
//         <li>Active</li>
//         <li>Progress</li>
//         <li>Done</li>
//         <li>Backlog</li>
//         <li>Expire</li>
//       </div>    
//       <div className="tasksDisplay">SideNav end</div>
//       <Outlet />   
//     </div>
//   );
// };
// export default ViewTasks



import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
export const ViewTasks = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNavbar />      
       <Outlet />         
    </div>
  );
};
export default ViewTasks