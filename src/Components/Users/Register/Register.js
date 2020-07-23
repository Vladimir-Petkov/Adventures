import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form action="/register" method="POST">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                <p>Join our family and make a wish!</p>
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

            <div class="form-label-group">
                <input type="password" id="inputRePassword" name="rePassword" class="form-control" placeholder="Re-Password"
                    required="" />
                <label for="inputRePassword">Re-Password</label>
            </div>

            <button class="btn btn-lg btn-dark btn-block" type="submit">Register</button>

            <div class="text-center mb-4">
                <p class="alreadyUser"> Already have account? Then just login
                    <Link to="/login"> Here</Link>!
                </p>
            </div>

            <p class="mt-5 mb-3 text-muted text-center">© TripAdventures - 2020.</p>
        </form>
    )
};

export default Register;