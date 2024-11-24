import * as React from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/authAction/authAction";
import Navbar from "./navbar";
import { Project } from "../projectBodyComponent/ProjectBodyComponent";

const styles = createUseStyles({
  header: {
    background: "#6673c4",
    color: "white",
    fontSize: "30px",
    padding: "16px",
    height: "80px",
    textAlign: "center",
    width: "1536px",
  },
  navbar: {
    fontSize: "16px",
    margin: "-3rem -2rem -2rem -1rem ",
  },
  background: {
    backgroundColor: "black",
    // height: "97vh",
    width: "100%",
  },
  secondaryButton: {
    borderRadius: "50px",
    backgroundColor: "#D3DBFF",
    color: "black",
    fontSize: "18px",
    paddingLeft: "8px",
    paddingRight: "8px",
    borderColor: "#D3DBFF",
    marginLeft: "1400px",
    marginTop: "-25px",
    display: "flex",
  },
});

interface IHeaderProps {
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  const classes = styles();
  const logout = () => {
    dispatch(logoutAction());
    history("/login");
  
  };
  return (
    <>
      <div className={classes.background}>
        <div className={classes.header}>
          Project manager
          <button onClick={logout} className={classes.secondaryButton}>
            Sign out
          </button>
        </div>
        <div className={classes.navbar}>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;
