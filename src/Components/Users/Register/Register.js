import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from "react-router";
import userService from '../../Helpers/userService';
import UserContext from '../../../Context';
import { toast } from 'react-toastify';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const [usernameError, setusernameError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [rePasswordError, setrePasswordError] = useState(false);
    const context = useContext(UserContext);
    const history = useHistory();

    const handleUsernameBlur = () => {
        if (username.length < 4 || username.length > 8) {
            setusernameError(true);
        } else {
            setusernameError(false);
        };
    };

    const handlePasswordBlur = () => {
        if (password.length < 5 || password.length > 16) {
            setpasswordError(true);
        } else {
            setpasswordError(false);
        };
    };

    const handleRepasswordBlur = () => {
        if (password !== rePassword) {
            setrePasswordError(true);
        } else {
            setrePasswordError(false);
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (usernameError || passwordError || rePasswordError) {
            return
        }

        await userService('http://localhost:9999/api/user/register', {
            username,
            password
        }, (user) => {
            context.logIn(user);
            toast.success('Successfully Registered');
            history.push('/');
        }, (e) => {
            toast.error('Username is already registered');
            setUsername('');
            setPassword('');
            setrePassword('');
        }
        )
    };

    const mystyle = {
        textAlign: 'center',
        color: "red"
    };

    return <form onSubmit={handleSubmit} method="POST">
        <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <p>Join our family and make a wish!</p>
        </div>

        <div className="form-label-group">
            {usernameError ? <div style={mystyle} >Username must be between 4 and 8 characters long</div> : null}
            <label htmlFor="inputUsername">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                onBlur={handleUsernameBlur} className="form-control" required />
        </div>

        <div className="form-label-group">
            {passwordError ? <div style={mystyle} >Password must be between 5 and 16 characters long</div> : null}
            <label htmlFor="inputPassword">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={handlePasswordBlur} className="form-control" required />
        </div>

        <div className="form-label-group">
            {rePasswordError ? <div style={mystyle} >Repeat Password does not match password!</div> : null}
            <label htmlFor="inputRePassword">Re-Password</label>
            <input type="password" value={rePassword} onChange={(e) => setrePassword(e.target.value)} onBlur={handleRepasswordBlur} className="form-control" required />
        </div>

        <br />
        <button className="btn btn-lg btn-dark btn-block" type="submit">Register</button>

        <div className="text-center mb-4">
            <p className="alreadyUser"> Already have account? Then just login
            <Link to="/login"> Here</Link>!
        </p>
        </div>

        <p className="mt-5 mb-3 text-muted text-center">© TripAdventures - 2020.</p>
    </form>
};

export default withRouter(Register);