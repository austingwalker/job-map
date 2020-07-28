import React from "react";
import "./Search.css"

const Search = (props) => (
    <div className="row pt-5">
        <div className="col-11 mx-auto">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <input type="text" className="form-control" placeholder="What:"/>
                    </div>
                    <div className="col-4">
                      <input type="text" className="form-control" placeholder="Where:"/>
                    </div>
                    <div className="col-3">
                      <button type="submit" className="btn btn-primary">View Jobs</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
);

export default Search;
