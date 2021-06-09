import React, { Component } from 'react';
import './itemStyle.css'
import { Footer } from './Footer';
import img1 from '../img/nedladdning.jpg';
import img2 from '../img/tabletop-gaming-manual.jpg';
import img3 from '../img/81BEMzBq8oL.jpg';
import img4 from '../img/Warhammer-40-000-Space-Marine---Collection.jpg';
import img5 from '../img/sennheiserHD599.jpg';
import img6 from '../img/heroquest-board-game-reboot-contents.jpg';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = { title: [], price: [], Description:[]}
       // this.GetProducts = this.GetProducts.bind(this);
    }
    
    async componentDidMount() {
        const response = await fetch("https://localhost:44316/api/products");
        const json = await response.json();
        for (var i = 0; i < json.length; i++) {
            this.setState({ data: json.title });

        }
        
            
    };

    render() {
        const { data } = this.state;
        
        return (
            <header>
                
          <div className="homeContent">
                  <div className="itemContainer">
                        
                        <div className="item" style={{ backgroundImage: "url(" + img1  + ")" }} ></div>
                        <div className="item" style={{ backgroundImage: 'url(' +  img2  + ')' }} ></div>
                  
                        <div className="item" style={{ backgroundImage: 'url(' +  img3  + ')' }} ></div>
                        <div className="item" style={{ backgroundImage: 'url(' +  img4  + ')' }} ></div>
                        <div className="item" style={{ backgroundImage: 'url(' +  img5  + ')' }} ></div>
                        <div className="item" style={{ backgroundImage: 'url(' +  img6  + ')' }} ></div>
              </div>
              
                  

              
              </div>
          </header>
    );
  }
}
