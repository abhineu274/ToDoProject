import React from "react";
import { createUseStyles } from "react-jss";
import { LeftSideComponent } from "./LeftSideComponent";
import { Login } from "./Login";

const styles = createUseStyles({
  fullPage: {
    display: "flex",
    height: "753px",
  },
  leftSide: {
    backgroundColor: "black",
    width: "50%",
    height: "100%",
  },
  rightSide: {
    backgroundColor: "white",
    width: "50%",
  },
  loginCard: {
    margin: "25% 25% 25% 30%",
    backgroundColor: "black",
    padding: "0px 0px 5px 0px",
    height: "400px",
    width: "350px",
    border: "solid 1px #D4DBFF",
    alignContent: "center",
    position: "relative",
  },
});

export interface ILoginPageProps {}

export function LoginPage(props: ILoginPageProps) {
  const classes = styles();

  return (
    <div className={classes.fullPage}>
      <div className={classes.leftSide}>
        <LeftSideComponent />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.loginCard}>
          <Login />
        </div>
      </div>
    </div>
  );
}
