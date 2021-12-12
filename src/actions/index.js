import {auth,provider} from "../firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser=(payload)=>({
type:SET_USER,
user:payload,
})
export function signInAPI(){
    return(dispatch) =>{
        signInWithPopup(auth,provider)
        .then((payload)=>{
           dispatch(setUser(payload.user))
        })
        .catch((error)=>alert(error.message));
      
    };
}

export function getUserAuth(){
    return(dispatch)=>{
        onAuthStateChanged(aut)
    }
}