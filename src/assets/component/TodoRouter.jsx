// import { Routes, Route } from "react-router-dom";
// import ManageTasks from "./ManageTasks";
// import ViewTasks from "./ViewTasks";
// import DisplayAllTasksDetails from "./DisplayAllTasksDetails";
// import ActiveTask from "./ActiveTask";
// import ProgressTask from "./ProgressTask";
// //handleUpdateNam,handleUpdateDueDate,CreateButtonClicked, handleUpdateDescription
// function ProjectRoute(props) {
//   return (
//     <Routes>
//       <Route
//         path='/Manage'
//         element={
//           <ManageTasks
//             handleUpdateName={props.handleUpdateName}
//             handleUpdateDueDate={props.handleUpdateDueDate}
//             handleUpdateDescription={props.handleUpdateDescription}
//             CreateButtonClicked={props.CreateButtonClicked}
//             taskDetail={props.taskDetail}
//           />
//         }
//       ></Route>
//       <Route path='/View' element={<ViewTasks />}>
//         {/* we can write this code instead of  <Route index element={<DisplayAllTasksDetails />} /> */}
//         {/* <Route
//           index
//           element={
//             <>
//               <h1>View Tasks Page</h1>
//               <p>Select a category from the sidebar.</p>
//             </>
//           }
//         /> */}
//         {/* <Route index element={<DisplayAllTasksDetails tasks={props.tasks} />} /> */}
//         <Route index element={<DisplayAllTasksDetails tasks={props.tasks} />} />

//         {/* index -> Navigate */}
//         <Route path='Active' element={<ActiveTask />}></Route>
//         <Route path='Progress' element={<ProgressTask />}></Route>
//         <Route path='Done' element={<ActiveTask />}></Route>
//         <Route path='Backlog' element={<ActiveTask />}></Route>
//         <Route path='Expire' element={<ActiveTask />}></Route>
//       </Route>
//     </Routes>
//   );
// }

// export default ProjectRoute;

import { Routes, Route, Navigate } from "react-router-dom";
import ManageTasks from "./ManageTasks";
import ViewTasks from "./ViewTasks";
import ActiveTask from "./ActiveTask";
import ProgressTask from "./ProgressTask";
import BacklogTask from "./BacklogTask";
import ExpireTask from "./ExpireTask";
import DoneTask from "./DoneTask";

function TodoRouter(props) {
  return (
    <Routes>
      <Route
        path='/Manage'
        element={
          <ManageTasks
            handleUpdateName={props.handleUpdateName}
            handleUpdateDueDate={props.handleUpdateDueDate}
            handleUpdateDescription={props.handleUpdateDescription}
            CreateButtonClicked={props.CreateButtonClicked}
            taskDetail={props.taskDetail}
          />
        }
      />

      <Route path='/View' element={<ViewTasks />}>
        {/* Default route */}
        <Route index element={<Navigate to='Active' replace />} />

        <Route
          path='Active'
          element={
            <ActiveTask
              tasks={props.tasks}
              handleMoveNext={props.handleMoveNext}
              handleMovePre={props.handleMovePre}
              handleTaskDeleted={props.handleTaskDeleted}
             handleUpdateTask={props.handleUpdateTask}
            />
          }
        />

        <Route
          path='Progress'
          element={
            <ProgressTask
              tasks={props.tasks}
              handleMoveNext={props.handleMoveNext}
              handleMovePre={props.handleMovePre}
              handleTaskDeleted={props.handleTaskDeleted}
            />
          }
        />

        <Route
          path='Done'
          element={
            <DoneTask
              tasks={props.tasks}
              handleMoveNext={props.handleMoveNext}
              handleMovePre={props.handleMovePre}
              handleTaskDeleted={props.handleTaskDeleted}
            />
          }
        />

        <Route
          path='Backlog'
          element={
            <BacklogTask
              tasks={props.tasks}
              handleMoveNext={props.handleMoveNext}
              handleTaskDeleted={props.handleTaskDeleted}
            />
          }
        />

        <Route
          path='Expire'
          element={
            <ExpireTask
              tasks={props.tasks}
              handleMovePre={props.handleMovePre}
              handleTaskDeleted={props.handleTaskDeleted}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default TodoRouter;
