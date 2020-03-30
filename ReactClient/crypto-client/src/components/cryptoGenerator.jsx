import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class CryptoGeneraotr extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="badge badge-primary">
                Number of Crypto Seriel
              </span>
              <input className="form-control" type="text" />
              <button className="btn btn-primary">Generate</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoGeneraotr;
