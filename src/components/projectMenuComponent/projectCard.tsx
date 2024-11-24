import React, { useState } from "react";
import { FaCheck, FaPencilAlt, FaTimes } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { deleteProjectAction, editProjectAction } from "../../redux/actions/projectAction/projectAction";
import { IProject, IprojectDelete, IProjectEdit } from "../../models/IProject";
import Header from "../homeComponent/home";

const styles = createUseStyles({
  taskContainer: {
    width: "98%",
    height: "24px",
    backgroundColor: "#FFFFFF",
    alignContent: "center",
    position: "relative",
    margin: "6px 2px 6px -12px",
    display: "flex",
  },
  taskContent: {
    alignContent: "center",
    position: "relative",
    margin: "1px 0px 0px -33px",
    padding: "2px 2px 2px 40px",
    textAlign: "left",
    width: "70%",
    fontSize: "15px",
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
    width: "120px",
    height: "inherent",
    borderColor: "white",
    "&:focus": {
      borderColor: "green",
    },
  },
  editDiv: {
    display: "flex",
  },
  projectBtn : {
    border: "none",
    background: "none",
    width: "inherent",
    height: "inherent",

  }
});

export interface IProjectCardProps {
  projectData : IProject;
  setprojectList: React.Dispatch<React.SetStateAction<Array<IProject>>>;
  projectList: Array<IProject>;
  userId : number
}

export function ProjectCard({ projectData, setprojectList, projectList, userId }: IProjectCardProps) {
  
    const classes = styles();
  
    const [edit, setEdit] = useState<boolean>(false);
    const [editProjectCard, setEditProjectCard] = useState<string>("");
  
    const dispatch = useDispatch()
    const history = useNavigate()
    const handleDelete = (id: number) => {
      let userIdArr : number[] = [userId]
      const deletePayload : IprojectDelete = {
        projectId : id,
        userId : userIdArr
      }
      dispatch(deleteProjectAction(deletePayload))
    };
  
    const checkClick = (id: number) => {
      let userIdArr : number[] = [userId]
      const editedProjectPayload:IProjectEdit = {
        projectId : id,
        pname : editProjectCard,
        userId : userIdArr
      }

      dispatch(editProjectAction(editedProjectPayload))
      setEdit(false);
    };
  

    const onProjectBtnClick = (id : number) => {

      history(`/projects/${id}`)
    }

    return (
      <div className={classes.taskContainer}>
        {edit ? (
          <div className={classes.editDiv}>
            <input
              value={editProjectCard}
              onChange={(e) => setEditProjectCard(e.target.value)}
              className={classes.inputTaskField}
            />
            <button
              className={classes.b1}
              onClick={() => checkClick(projectData.id)}
            >
              <FaCheck className={classes.checkIcon} />
            </button>{" "}
          </div>
        ) : (
          <div className={classes.taskContent}>
            <button className={classes.projectBtn} onClick={()=>onProjectBtnClick(projectData.id)}>
            {projectData.pname.toUpperCase()}
            </button>
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
                    setEditProjectCard(projectData.pname);
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
                  handleDelete(projectData.id);
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