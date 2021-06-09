import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./RegisterStyle.css";

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname:"",
            email: "",
            password: "",
            
        };
       

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)

        const { firstname, lastname, email, password } = this.state;
        const data = { firstname: firstname, lastname:lastname, email: email, password: password }
        fetch('http://localhost:3001/reg', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }

        })
        

    }


    render() {

        const { firstname,lastname, email, password } = this.state;
        return (
            <header className="form">

                <form onSubmit={this.handleSubmit} method="POST">
                    <label>First Name:</label>
                    <br />
                    <input
                        name="firstname"
                        type="text"
                        value={firstname}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Lastname:</label>
                    <br />
                    <input
                        name="lastname"
                        type="text"
                        value={lastname}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>E-mail:</label>
                    <br />
                    <input
                        name="email"
                        type="email"
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
                    <input value="Register" type="submit"></input>
                </form>

                <br />Already got an account? Then log in<NavLink to='/Login'> here!</NavLink>
            </header>
        );
    }
}