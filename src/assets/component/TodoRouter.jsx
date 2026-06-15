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
              handleUpdateTask={props.handleUpdateTask}
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
              handleUpdateTask={props.handleUpdateTask}
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
