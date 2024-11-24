import axios from "axios";
import { userActionPayload } from "../redux/actions/signUpAction/signUpActionTypes";

export async function postUserCall(action: userActionPayload) {
    const response= await axios.post("http://localhost:8000/users", action.payload);
    return response;
  }