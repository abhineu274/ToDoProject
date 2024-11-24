import React, { useState } from "react";
import { FaCheck, FaPencilAlt, FaTimes } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { ITask, ITaskPatchPayload } from "../../models/models";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteTasksAction,
  patchTaskAction,
} from "../../redux/actions/taskAction";

const styles = createUseStyles({
  taskContainer: {
    width: "98%",
    height: "30px",
    backgroundColor: "#FFFFFF",
    border: "solid 1px #D4DBFF",
    alignContent: "center",
    position: "relative",
    borderRadius: "25px",
    margin: "6px 2px 6px 2px",
    display: "flex",
  },
  taskContent: {
    alignContent: "center",
    position: "relative",
    margin: "4px 4px 0px 1px",
    padding: "2px 2px 2px 10px",
    textAlign: "left",
    width: "70%",
    fontSize: "11px",
    fontWeight: "bold",
  },
  taskIcons: {
    alignContent: "right",
    position: "relative",
    width: "30%",
    margin: "1px 1px 5px 1px",
    display: "flex",
  },
  iconItem: {
    margin: "2px 5px 6px 4px",
    width: "20%",
  },
  b1: {
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: "0",
    padding: "0",
  },
  crossIcon: {
    color: "red",
  },
  pencilIcon: {
    width: "120%",
  },
  checkIcon: {
    width: "15px",
    color: "black",
    marginTop: "4px",
  },
  inputTaskField: {
    borderRadius: "5px",
    background: "white",
    width: "140px",
    height: "inherent",
    borderColor: "white",
    "&:focus": {
      borderColor: "green",
    },
  },
  editDiv: {
    display: "flex",
  },
});

export interface ITaskProps {
  taskData: ITask;
  setTaskArray: React.Dispatch<React.SetStateAction<Array<ITask>>>;
  taskArray: Array<ITask>;
}

export function Task({ taskData, setTaskArray, taskArray }: ITaskProps) {
  const { projectId } = useParams();

  const classes = styles();

  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>("");

  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteTasksAction(id));
    setTaskArray(taskArray.filter((task) => task.id !== id));
  };

  const checkClick = (id: number) => {
    const editedTaskPayload: ITaskPatchPayload = {
      id: id,
      taskName: editTask,
      projectId: Number(projectId),
    };
    dispatch(patchTaskAction(editedTaskPayload));
    setTaskArray(
      taskArray.map((task) =>
        task.id === id ? { ...task, taskName: editTask } : task
      )
    );
    setEdit(false);
  };

  return (
    <div className={classes.taskContainer}>
      {edit ? (
        <div className={classes.editDiv}>
          <input
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            className={classes.inputTaskField}
          />
          <button
            className={classes.b1}
            onClick={() => checkClick(taskData.id)}
          >
            <FaCheck className={classes.checkIcon} />
          </button>{" "}
        </div>
      ) : (
        <div className={classes.taskContent}>
          {taskData.taskName.toUpperCase()}
        </div>
      )}
      {!edit ? (
        <div className={classes.taskIcons}>
          <div className={classes.iconItem}>
            <button
              className={classes.b1}
              onClick={() => {
                if (!edit) {
                  setEdit(!edit);
                  setEditTask(taskData.taskName);
                }
              }}
            >
              <FaPencilAlt className={classes.pencilIcon} />
            </button>
          </div>
          <div className={classes.iconItem}>
            <button
              className={classes.b1}
              onClick={() => {
                handleDelete(taskData.id);
              }}
            >
              <FaTimes className={classes.crossIcon} />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
