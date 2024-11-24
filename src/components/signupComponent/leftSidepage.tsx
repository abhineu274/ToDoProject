import React from "react";
import { createUseStyles } from "react-jss";
import SignUpImage from "../../assets/image/SignUpImage.png";

const styles = createUseStyles({
  headerText: {
    color: "white",
    margin: "70px 10px 10px 10px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "22px",
  },
  blockText: {
    margin: "40px 20px 20px 20px",
    color: "white",
    textAlign: "center",
  },

  textBlock: {
    margin: "5px 20px 0px 20px",
    fontSize: "15px",
  },

  paraText: {
    color: "white",
    margin: "30px 10px 20px 20px",
    textAlign: "center",
    fontSize: "12px",
  },

  SignUpImage: {
    width: "400px",
    height: "300px",
    margin: "70px 30px 30px 130px",
  },
});

export interface ILeftSideComponentProps {}

export function LeftSideComponent(props: ILeftSideComponentProps) {
  const classes = styles();
  return (
    <div>
      <div className={classes.headerText}>Project Manager</div>
      <div className={classes.blockText}>
        <div className={classes.textBlock}>Simple</div>
        <div className={classes.textBlock}>Organised</div>
        <div className={classes.textBlock}>Accessible</div>
      </div>
      <div className={classes.paraText}>
        Task tracking for your everyday needs
      </div>
      <div>
        <img className={classes.SignUpImage} src={SignUpImage} />
      </div>
    </div>
  );
}
