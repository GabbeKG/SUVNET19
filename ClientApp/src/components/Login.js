import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./LoginStyle.css";
import "./RegisterStyle.css";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",



        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = (e) => {

        e.preventDefault()
        console.log(this.state);
        const { username, password } = this.state;
        const data = { username: username, password: password }
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="form">

                <form onSubmit={this.handleSubmit} method="POST">
                    <label>E-mail:</label>
                    <br />
                    <input
                        name="username"
                        type="text"
                        value={email}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <br />
                    <input value="Log in" type="submit"></input>
                </form>
                <br />


        No Account?<NavLink to='/Register'> Register here!</NavLink>



            </div>

        )};

    }