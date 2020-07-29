import React, { Component } from "react";
// import API from "../../utils/API";
import "./Search.css"

class Search extends Component {
  state = {
    results: {}
  };

  // componentDidMount() {
  //   API.getTest()
  //     .then(res =>
  //       // this.setState({ results: res.data})
  //       console.log(res.data)
  //     )
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
  <form className="w-100">
   <div className="row">
      <div className="col-12 col-md-5 pb-3 pb-md-0">
        <input type="text" className="form-control" placeholder="What:"/>
      </div>
      <div className="col-12 col-md-5 pt-3 pb-3 pt-md-0 pb-md-0">
        <input type="text" className="form-control" placeholder="Where:"/>
      </div>
      <div className="col-2 pt-3 pt-md-0">
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </div> 
  </form>
    );
  }
}

export default Search;
