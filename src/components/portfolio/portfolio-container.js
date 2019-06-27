import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import portfolioItem from "./portfolio-item";
//class 
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pagetitle: "welcome to my portfolio",
            data: [
                {title:"Quip"}, 
                {title:"Eventbrite"}, 
                {title:"Ministry Safe"}, 
                {title:"Swing Away"}
            ]
        };
        this.HandlePageTitleUpdate = this.HandlePageTitleUpdate.bind(this);
        //can also use arrow fuction: e=>this.x(e)
    }

    PortfolioItems() {
        //this functuion below is dynamic, saying for how may items in array, there will be that many portfolio items
        return this.state.data.map(item => { //title is a props, an object you can put into a different file
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }
    
    HandlePageTitleUpdate(){
        this.setState({
            pagetitle: "Soething Esle"
        })
    }
    //rednering
    render() {
        return (
            <div>
                <h2>{this.state.pagetitle}</h2>

                {this.PortfolioItems()}

                <hr></hr>

                <button onClick={this.HandlePageTitleUpdate}>Change Title</button>

            </div>
        )
    }
}