import React, { Component } from "react";
import Map from "../../Components/Map"
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
        <div id="container-row" className="row">
            <div className="col-8">
              <div className="row p-5">
                <Search/>
              </div>
              <div className="row">
                <Map/>
              </div>
            </div>
            <div className="col-4">
              <h1>Lorem Ipsum</h1>
              <hr/>
              <h2>Perspiciatis Unde Omnis</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
              <ul>
                <li>Et harum quidem rerum facilis est et expedita distinctio</li>
                <li>Itaque earum rerum hic tenetur a sapiente delectus</li>
                <li>Nam libero tempore</li>
              </ul>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

            </div>
        </div>
      </div>
    );
  }
}

export default Home;
