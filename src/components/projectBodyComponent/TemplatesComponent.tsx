import React, {
  ReactElement,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { FaPlus } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { ITask, ITaskPostPayload, ITemplate } from "../../models/models";
import { Task } from "./TaskComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../redux/reducers";
import { createTaskAction } from "../../redux/actions/taskAction";
import { deleteTemplateAction } from "../../redux/actions/templateAction";

const styles = createUseStyles({
  container: {
    padding: "10px 3px 20px 3px",
    height: "auto",
    border: "solid 1px #D4DBFF",
    alignContent: "center",
    position: "relative",
    borderRadius: "15px",
    backgroundColor: "#D4DBFF",
  },
  containerHeader: {
    fontWeight: "bold",
    color: "black",
    margin: "0px 2px 5px 8px",
    textAlign: "left",
    fontSize: "15px",
  },
  classAddtask: {
    margin: "2px 2px 2px 8px",
    position: "relative",
    display: "flex",
  },
  classDelete: {
    marginTop: "10px",
  },
  iconItem: {
    margin: "2px 5px 2px 4px",
    width: "20%",
  },

  b1: {
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },

  plusIcon: {
    width: "60%",
  },

  inputTaskField: {
    outline: "0",
    borderWidth: "0px 0px 2px",
    borderColor: "#7581CC",
    width: "120px",
    backgroundColor: "#D4DBFF",
    placeholder: {
      font: "5px",
    },
  },
  alternateButton: {
    //delete
    backgroundColor: "#2D2F43",
    fontSize: "12px",
    borderRadius: "50px",
    color: "white",
    borderColor: "#2D2F43",
    padding: "3px 10px 3px 10px",
  },
});

interface TemplateProps {
  templateData: ITemplate;
  templates: Array<ITemplate>;
  setTemplates: React.Dispatch<React.SetStateAction<Array<ITemplate>>>;
  projectId : number
}

export function Template({
  templateData,
  templates,
  setTemplates,
  projectId
}: PropsWithChildren<TemplateProps>): ReactElement {
  // const { projectId } = useParams();

  const [taskArray, setTaskArray] = useState<Array<ITask>>([]);

  const [newTask, setNewTask] = useState<string>("");

  const allProjectTasks: ITask[] = useSelector(
    (state: State) => state.taskReducer.tasks
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const filteredTasks: ITask[] = allProjectTasks.filter(
      (t) => t.templateId == templateData.id
    );
    setTaskArray(filteredTasks);
  }, [allProjectTasks]);

  const handleAddTask = () => {
    const newTaskToAdd = {
      name: newTask,
    };
    const propTask: ITaskPostPayload = {
      taskName: newTask,
      templateId: templateData.id,
      projectId: Number(projectId),
    };

    dispatch(createTaskAction(propTask));
    setNewTask("");
  };

  const onTemplateDelete = (templateId: number) => {
    dispatch(deleteTemplateAction(templateId));
    setTemplates(templates.filter((template) => template.id !== templateId));
  };

  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.containerHeader}>
        {templateData.templateName.toUpperCase()}
      </div>

      {taskArray.map((task) => {
        return (
          <Task
            key={task.id}
            taskData={task}
            setTaskArray={setTaskArray}
            taskArray={taskArray}
          />
        );
      })}

      <div className={classes.classAddtask}>
        <input
          className={classes.inputTaskField}
          type="text"
          placeholder="Add Task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <div className={classes.iconItem}>
          <button className={classes.b1} onClick={handleAddTask}>
            <FaPlus className={classes.plusIcon} />
          </button>
        </div>
      </div>
      <div className={classes.classDelete}>
        <button
          className={classes.alternateButton}
          onClick={() => onTemplateDelete(templateData.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export {};
