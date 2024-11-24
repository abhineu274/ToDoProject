import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ITemplate, ITemplatePostPayload } from "../../models/models";
import { fetchTasksAction } from "../../redux/actions/taskAction";
import {
  fetchTemplatesAction,
  createTemplatesAction,
} from "../../redux/actions/templateAction";
import { State } from "../../redux/reducers";
import { Template } from "./TemplatesComponent";

const styles = createUseStyles({
  flexContainer: {
    display: "flex",
    justifyContent: "flex-start",
    height: "200px",
    margin: "0% 0% 10% 0%",
    padding: "3% 20% 20% 10%",
  },

  fitem: {
    marginRight: "10px",
    width: "180px",
    height: "auto",
  },

  interf: {
    height: "100%",
    width: "100%",
  },

  header: {
    height: "40px",
    backgroundColor: "#6673C4",
    display: "block",
  },
  heading: {
    marginTop: "0px",
    color: "white",
    fontSize: "20px",
  },
  roundButtonDiv: {
    marginLeft: "5px",
  },
  roundButton: {
    backgroundColor: "#6773C4",
    color: "white",
    borderRadius: "45%",
    width: "40px",
  },
  plusIcon: {
    marginTop: "4px",
    width: "70%",
  },
  inputTaskField: {
    alignContent: "center",
    borderRadius: "5px",
    background: "white",
    width: "140px",
    height: "inherent",
    borderColor: "white",
    "&:focus": {
      borderColor: "green",
    },
    marginLeft: "8px",
  },

  inputHeader: {
    fontWeight: "bold",
    color: "black",
    margin: "0px 2px 5px 8px",
    textAlign: "left",
    fontSize: "12px",
  },
  inputBlock: {
    padding: "10px 3px 20px 3px",
    height: "85px",
    border: "solid 1px #D4DBFF",
    alignContent: "center",
    position: "relative",
    borderRadius: "15px",
    backgroundColor: "#D4DBFF",
    display: "flex",
    flexDirection: "column",
  },
  checkIcon: {
    width: "15px",
    color: "black",
    marginTop: "4px",
  },
  b1: {
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: "0",
    padding: "0",
  },
  checkBtn: {
    alignContent: "right",
  },
  noprojectmsg: {
    color: "white",
    fontSize: "20px",
  },
});

export interface IProject {
  projectId: number;
}

export function Project({ projectId }: IProject) {
  // const { projectId } = useParams();

  const [addTemplate, setAddTemplate] = useState<boolean>(false);
  const [templateTitle, setTemplateTitle] = useState<string>("");
  const [templates, setTemplates] = useState<Array<ITemplate>>([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTemplatesAction(Number(projectId)));
    dispatch(fetchTasksAction(Number(projectId)));
  }, [projectId]);

  const filteredTemplates: ITemplate[] = useSelector(
    (state: State) => state.templatesReducer.templates
  );

  useEffect(() => {
    setTemplates(filteredTemplates);
  }, [filteredTemplates]);

  const addBtnClicked = () => {
    setAddTemplate(!addTemplate);
  };

  const addTemplateClicked = () => {
    const newTemplate: ITemplatePostPayload = {
      templateName: templateTitle,
      projectId: Number(projectId),
    };

    dispatch(createTemplatesAction(newTemplate));
    setTemplateTitle("");
    setAddTemplate(!addTemplate);
  };

  const addTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplateTitle(e.target.value);
  };

  const projectTitle = useSelector(
    (state: State) =>
      state.ProjectReducer.projectsList.find((p) => p.id === projectId)?.pname
  );

  const classes = styles();
  return (
    <>
      {projectId === -1 ? (
        <div className={classes.interf}>
          <div className={classes.noprojectmsg}>
            You Do Not Have Any Projects. Click on the Hamburger Menu to create
            a New Project.
          </div>
        </div>
      ) : (
        <div className={classes.interf}>
          <div className={classes.heading}>
            {projectTitle ? projectTitle.toUpperCase() : ""}
          </div>

          <div className={classes.flexContainer}>
            {templates.map((template) => {
              return (
                <div className={classes.fitem} key={template.id}>
                  <Template
                    templates={filteredTemplates}
                    setTemplates={setTemplates}
                    templateData={template}
                    projectId={projectId}
                  />
                </div>
              );
            })}

            <div className={classes.roundButtonDiv}>
              <button
                className={classes.roundButton}
                onClick={() => addBtnClicked()}
              >
                <FaPlus className={classes.plusIcon} />
              </button>
            </div>
            {addTemplate ? (
              <div>
                <div className={classes.inputBlock}>
                  <div className={classes.inputHeader}>Add New Template:</div>
                  <input
                    className={classes.inputTaskField}
                    onChange={(e) => {
                      addTaskInputChange(e);
                    }}
                    value={templateTitle}
                  />
                  <div className={classes.checkBtn}>
                    <button className={classes.b1} onClick={addTemplateClicked}>
                      <FaCheck className={classes.checkIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
}

