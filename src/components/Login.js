import React from 'react';
import propTypes from 'prop-types';


const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>please sign in</p>
        <button
            className="facebook"
            onClick={() => props.authenticate('Facebook')}>
            Login with Facebook
        </button>
        <button
            className="github"
            onClick={() => props.authenticate('Google')}>
            Login with Google
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: propTypes.func.isRequired
}

export default Login;
