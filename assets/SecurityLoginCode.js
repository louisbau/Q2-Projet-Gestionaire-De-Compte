import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";



export default function LoginSecurity() {
    return (
        <form method="post">
            <h1>Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email"  name="email" id="inputEmail" value={document.getElementById('last_username').value} placeholder="Email address" required autoFocus/>
            <label htmlFor="inputPassword">Password</label>
            <input type="password" name="password" id="inputPassword" placeholder="Password" required />
            <input type="hidden" id='token' name="_csrf_token"
                   value={document.getElementById('token').value}
            />
            <div>
                <label>

                    <input type="checkbox" name="_remember_me"/> Remember me
                </label>
            </div>
            <button type="submit">
                Sign in
            </button>
        </form>

    )
}
