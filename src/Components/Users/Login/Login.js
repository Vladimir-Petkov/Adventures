import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form action="/login" method="POST">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Login</h1>
            </div>

            <div class="form-label-group">
                <input type="text" id="inputUsername" name="username" class="form-control" placeholder="Username" required=""
                    autofocus="" />
                <label for="inputUsername">Username</label>
            </div>

            <div class="form-label-group">
                <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required="" />
                <label for="inputPassword">Password</label>
            </div>

            <button class="btn btn-lg btn-dark btn-block" type="submit">Login</button>

            <div class="text-center mb-4">
                <p class="alreadyUser"> Don't have account? Then just register
                    <Link to="/register"> Here</Link>!
                </p>
            </div>

            <p class="mt-5 mb-3 text-muted text-center">© TripAdventures - 2019.</p>
        </form>
    )
};

export default Login;