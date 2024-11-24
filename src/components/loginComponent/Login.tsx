import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loginAction } from "../../redux/actions/authAction/authAction";
import { getProjectAction } from "../../redux/actions/projectAction/projectAction";
import { State } from "../../redux/reducers";
import { fetchUser } from "../../services/loginService";

const styles = createUseStyles({
  loginHeader: {
    height: "65px",
    backgroundColor: "#6673C4",
    marginTop: "-1px",
    marginLeft: "-1px",
    marginBottom: "40px",
    textAlign: "center",
    paddingTop: "15px",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: "25px",
    color: "white",
  },
  inputFields: {
    margin: "20px 10px 10px 15px",
  },
  passwordInput: {
    margin: "20px 10px 10px 15px",
  },

  loginSubmit: {
    marginTop: "28px",
  },

  fields: {
    borderRadius: "5px",
    background: "#EBEBEB",
    width: "250px",
    height: "32px",
  },
  textblock: {
    textAlign: "center",
    color: "white",
    margin: "20px 10px 0px 10px",
  },

  normalTextBlock: {
    margin: "15px 50px 12px 50px",
    textAlign: "center",
    fontSize: "11px",
    color: "white",
    letterSpacing: "0.7px",
    wordSpacing: "1px",
  },
  textLink: {
    color: "white",
    textAlign: "center",
    fontSize: "12px",
    margin: "-10px 10px 10px 10px",
  },
  primaryButton: {
    //login
    borderRadius: "11%",
    backgroundColor: "#6673C4",
    fontSize: "14px",
    color: "white",
    borderColor: "#6673C4",
    width: "80px",
    height: "32px",
  },
});

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  const [username, setUsername] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const history = useNavigate();
  const dispatch = useDispatch();
  const classes = styles();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let flag: boolean = false;
    const userdata = await fetchUser(username);
    if (userdata != undefined && userdata.password === password) {
      flag = true;
      dispatch(loginAction(userdata))
      dispatch(getProjectAction(userdata.id))
      history(`/projects`)   
    }
    if (!flag) {
      alert("Wrong username or password!");
    }
  };

  return (
    <div>
      <div className={classes.loginHeader}>
        <div className={classes.headerText}>Login To Your Account</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputFields}>
          <input
            className={classes.fields}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={classes.passwordInput}>
          <input
            className={classes.fields}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.loginSubmit}>
          <button placeholder="Login" className={classes.primaryButton}>
            Login
          </button>
        </div>
      </form>
      <div className={classes.textblock}>
        <h3>New Here?</h3>
      </div>
      <div className={classes.normalTextBlock}>
        Sign up and discover a great amount of opportunities!
      </div>
      <div>
        <Link className={classes.textLink} to={"/signup"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
