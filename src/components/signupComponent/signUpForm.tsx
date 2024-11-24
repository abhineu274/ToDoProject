import React from "react";
import { createUseStyles } from "react-jss";
import { LeftSideComponent } from "./leftSidepage";
import { SignUpForm } from "./signUp";


const styles = createUseStyles({
  fullPage: {
    display: "flex",
    height: "100%",
  },
  leftSide: {
    backgroundColor: "black",
    width: "50%",
    height: "721px",
  },
  rightSide: {
    backgroundColor: "white",
    width: "50%",
    height: "100vh",
  },
  SignUpCard: {
    margin: "25% 25% 5% 25%",
    backgroundColor: "black",
    padding: "0px 0px 30px 0px",
    height: "400px",
    width: "350px",
    border: "solid 1px #D4DBFF",
    alignContent: "center",
    position: "relative",
    borderRadius: "12px",
  },
});
export interface ISignUpProps {}
export function SignUpFormPage(props: ISignUpProps) {
  const classes = styles();
  return (
    <div className={classes.fullPage}>
      <div className={classes.leftSide}><LeftSideComponent/></div>
      <div className={classes.rightSide}>
        <div className={classes.SignUpCard}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
export {};
