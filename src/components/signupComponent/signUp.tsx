import axios from "axios";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import { postUserAction } from "../../redux/actions/signUpAction/signUpAction";
import { fetchUser, fetchUserByEmail } from "../../services/loginService";

const styles = createUseStyles({
  SignUpHeader: {
    height: "60px",
    backgroundColor: "#6673C4",
    marginTop: "-1px",
    marginBottom: "40px",
    textAlign: "center",
    paddingTop: "25px",
    fontWeight: "bold",
    borderRadius: "10px 10px 0px 0px",
  },
  secondaryButton: {
    borderRadius: "50px",
    backgroundColor: "#6673C4",
    color: "white",
    fontSize: "15px",
    margin: "1px 17px 1px 1px",
    padding: "5px 12px 5px 12px",
    borderColor: "#D3DBFF",
  },
  headerText: {
    marginTop: "-10px",
    fontSize: "25px",
    color: "white",
  },
  inputFields: {
    margin: "20px 10px 0px 20px",
  },
  passwordInput: {
    margin: "20px 10px 10px 20px",
  },

  SignUpSubmit: {
    marginTop: "25px",
  },

  fields: {
    borderRadius: "12px",
    background: "#EBEBEB",
    width: "250px",
    height: "35px",
  },
  textLink: {
    color: "white",
    textAlign: "center",
    fontSize: "12px",
  },
});

export interface ISignUpProps {}

export function SignUpForm(props: ISignUpProps) {
  const [username, setUsername] = useState("");

  const [Email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [signup, setSignUp] = useState("");
  const [signUp, setIsSignUp] = useState<boolean>();

  const userToPost = {
    username: username,
    Email: Email,
    password: password,
  };

  const history = useNavigate();
  const classes = styles();
  const dispatch = useDispatch();
  async function CheckUser() {
    const userByName = await fetchUser(username);

    const userByEmail = await fetchUserByEmail(Email);

    let flag = false;
    if (userByName != undefined || userByEmail != undefined) {
      setIsSignUp(false);
      alert("User is already exist,Please login");
      flag = true;
    }
    return flag;
  }
   async function handleSubmitButton() {
    const postUserPayload: IUser = {
      username: username,
      email: Email,
      password: password,
    };
    if (password !== confirmPassword) {
      alert("different alert");
      return;
    }
    const checkUserFlag = await CheckUser()
    if (!checkUserFlag)
      {
      dispatch(postUserAction(postUserPayload));
      history("/login");
    }
  }
  return (
    <div>
      <div className={classes.SignUpHeader}>
        <div className={classes.headerText}>Sign Up</div>
      </div>
      <div className={classes.inputFields}>
        <input
          className={classes.fields}
          type="text"
          placeholder="Username"
          required
          onChange={(e) => {
            setUsername(e.target.value.trim());
          }}
        />
      </div>
      <div className={classes.inputFields}>
        <input
          className={classes.fields}
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.passwordInput}>
        <input
          className={classes.fields}
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={classes.passwordInput}>
        <input
          className={classes.fields}
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <div className={classes.SignUpSubmit}>
          <button
            className={classes.secondaryButton}
            onClick={() => handleSubmitButton()}
          >
            SignUp
          </button>
        </div>
        <div>
          <Link className={classes.textLink} to={"/login"}>
            Already registered? login
          </Link>
        </div>
      </div>
    </div>
  );
}
