import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../redux/reducers";
import { ProjectApp } from "../projectMenuComponent/projectComponent";
import { Project } from "../projectBodyComponent/ProjectBodyComponent";
import "./index.css";

interface INavbarProps {}

const Navbar = () => {
  const { projectId } = useParams();

  const userId = useSelector((state: State) => state.authReducer.user.id);
  const projectList = useSelector(
    (state: State) => state.ProjectReducer.projectsList
  );

  let newProjectId = -1;
  if (projectList.length > 0) newProjectId = projectList[0].id;

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div>
        {projectId === undefined ? (
          <Project projectId={Number(newProjectId)} />
        ) : (
          <Project projectId={Number(projectId)} />
        )}
      </div>
      <div className={menu_class}>
        <ProjectApp userId={Number(userId)} />
      </div>
    </div>
  );
};

export default Navbar;


