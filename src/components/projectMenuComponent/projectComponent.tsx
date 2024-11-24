import React, {
  useEffect,
  useState,
} from "react";
import { createUseStyles } from "react-jss";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProjectCard } from "./projectCard";
import { getProjectAction, postProjectAction } from "../../redux/actions/projectAction/projectAction";
import { State } from "../../redux/reducers";
import { IProject, IProjectPostPayload } from "../../models/IProject";

const styles = createUseStyles({

  editDiv: {
    display: "flex",
  },
  containerHeader: {
    fontWeight: "bold",
    color: "black",
    margin: "30px 0px 0px 60px",
    textAlign: "left",
    fontSize: "15px",
    width: "200px",
  },
  classAddtask: {
    margin: "20px 20px 5px 60px",
    position: "relative",
    display: "flex",
  },
  classDelete: {
    marginTop: "10px",
  },
  iconItem: {
    margin: "0px 0px 0px 20px",
    width: "20%",
    display: "flex",
  },

  b1: {
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  projects: {
    display: "flex",
  },

  plusIcon: {
    width: "25px",
  },
  pencilIcon: {
    width: "100%",
    marginRight: "10px",
    marginLeft: "1px",
    display: "flex",
  },
  FaTimesIcon: {
    color: "red",
    marginRight: "0px",
    marginLeft: "12px",
    display: "flex",
  },
  inputTaskField: {
    outline: "0",
    borderWidth: "0px 0px 2px",
    borderColor: "#7581CC",
    width: "100px",
    placeholder: {
      font: "5px",
    },
  },
  checkIcon: {
    width: "15px",
    color: "black",
    marginTop: "4px",
  },
  helloUsername : {
    fontStyle : "italic",
    fontSize : "20px"
  }
});


interface IProjectAppProps{
  userId : number
}

export function ProjectApp({userId}:IProjectAppProps) {

  //  const {userId} = useParams()

  const classes = styles();
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectList, setProjectList] = useState<Array<IProject>>([]);
  const [projects, setProjects] = useState<Array<IProject>>([]);

  const dispatch = useDispatch();

  const history = useNavigate();
  const ProjectToPost = {
    projectTitle: projectTitle,
  };


  useEffect(() => {
    dispatch(getProjectAction(Number(userId)));
  }, [dispatch]);

  const project = useSelector(
    (state: State) => state.ProjectReducer.projectsList
  );

  useEffect(() => {
    setProjectList(project);
  }, [project]);

  const handleAddButton = () => {
    let userIdArr : number[] = [userId]
    const postProjectPayload: IProjectPostPayload = {
      pname: projectTitle,
      userId: userIdArr
    };
    dispatch(postProjectAction(postProjectPayload));
    setProjectTitle("");
  };

  const userN = useSelector((state:State)=>state.authReducer.user.username)

  return (
    <div >
      <div className={classes.helloUsername}>Hello {userN.toUpperCase()}!</div>
      <div className={classes.containerHeader}>
        {projectList.map((projectInd:IProject) => {
          return(
            <div key={projectInd.id} >
          <ProjectCard projectData={projectInd} projectList={projectList} setprojectList={setProjectList} userId={userId}/>
          </div>)
        })}
      </div>
      <div className={classes.classAddtask}>
        <input
          className={classes.inputTaskField}
          type="text"
          placeholder="Add Project"
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
          }}
        />
        <div className={classes.iconItem}>
          <button className={classes.b1} onClick={() => handleAddButton()}>
            <FaPlus className={classes.plusIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
