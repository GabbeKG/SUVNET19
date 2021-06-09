import React, { Component } from 'react';
import './FooterStyle.css';
export class Footer extends Component {
    static displayName = Footer.name;
    

    render() {
        return (
            
            <footer>
                <div className="footerSection">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Terms of Service</li>
                    
                    </ul>
                </div>
            </footer>
        );
    }
}