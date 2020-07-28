import React, { Component } from "react";
// import Map from "../../Components/Map"
import Search from "../../Components/Search"
import Hero from "./images/austin-tx-map.PNG"
import "./Home.css"

class Home extends Component {
  state = {
    test: "Success!"
  };


  render() {
    return (
      <div id="homeContainer" className="container-fluid">
        <div id="hero-row" className="row">
            <img src={Hero} className="img-fluid w-100"/>
        </div>
        <Search/>
      </div>
    );
  }
}

export default Home;
