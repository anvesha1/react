import React from "react";
import { loginWithGoogle } from "../../utils/firebaseUtils";

export default function LoginPage(){


    return (
        <div className="loginCard">

        <input placeholder="username"></input>
        <input placeholder="password"></input>

        <button onClick={()=>{
            loginWithGoogle();
        }}>Sign with Google</button>

                

        </div>



    )
}