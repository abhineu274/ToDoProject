import React from "react";
import "./App.css";
import { LoginPage } from "./components/loginComponent";
import { Route, Routes } from "react-router-dom";
import { Project } from "./components/projectBodyComponent/ProjectBodyComponent";
import Header from "./components/homeComponent/home";
import { SignUpFormPage } from "./components/signupComponent/signUpForm";
import { useSelector } from "react-redux";
import { State } from "./redux/reducers";
import { ProtectedRoute } from "./components/protectedRouteComponent/ProtectedRoute";

function App() {

  const isAuthenticated = useSelector((state:State)=>state.authReducer.isAuthenticated)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>} >
        <Route path="/projects/:projectId" element={<Header />} />
        <Route path="/projects" element={<Header />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
