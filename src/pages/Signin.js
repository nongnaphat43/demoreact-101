import React from "react";
import { useNavigate } from "react-router-dom";

function Signin (props) {
    const navigate = useNavigate();
    console.log("props", props);

    return(
        <div>
            <h3> Sign in </h3>
        
            <div>
            <p>Username</p>
            <input
                className="form-control w-100"
                type="text"
                placeholder="demo@gmail.com"
                value={props.email}
                autoFocus
                required
                onChange={(e)=>props.handleEmail(e)}
            />  
            </div>

            <div>
            <p>Password</p>
            <input
                className="form-control"
                type="password"
                placeholder="demo1234"
                value={props.password}
                autoFocus
                required
                onChange={(e)=>props.handlePassword(e)}
            />  
        </div>

        <div>
            <button className="btn btn-primary mt-2"
            onClick={() => props.handleSignin()}
            > 
            Sign in
            
            </button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Have an account?</p>
                <button 
                
                className="btn btn-link px-0"
                onClick={() => props.setHasAccount(!props.hasAccount)}

                
                >
                    Sign up
                </button>
            </div>
        </div>
    </div>  
);
}
export default Signin;