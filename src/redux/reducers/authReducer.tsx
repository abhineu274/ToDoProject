import { Action } from "redux"
import { IUser } from "../../models/models"
import { authAction, authActionPayload, authActionTypes } from "../actions/authAction/authActionTypes"

export interface IAuthState {
    isAuthenticated : boolean,
    user : IUser
}

const initialState:IAuthState = {
    isAuthenticated : false,
    user : {} as IUser
}

export const authReducer = (state=initialState, action:authAction | authActionPayload) =>{

    switch(action.type){
        case authActionTypes.LOGIN:
            return {
                ...state,
                isAuthenticated : true,
                user : action.payload
            }
        case authActionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated : false,
                user : {} as IUser
            }
        default : 
            return state
    }
    
}