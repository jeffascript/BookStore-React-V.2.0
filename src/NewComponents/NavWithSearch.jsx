import React, { Component } from "react";
import { MDBNavbarNav } from "mdbreact";
import "../index.css";

class NavWithSearch extends Component {
  state = {
    openSearch: false,
    searchString: ""
  };

  render() {
    return (
      <MDBNavbarNav right className="col-3 ">
        <div className="for">
          {/*Onclick if e.target.value--> route to the main page with books and filter */}
          <input
            type="search"
            value={this.state.searchString}
            onChange={e => {
              this.setState({ searchString: e.target.value });
              console.log(e.target.value);
            }}
          />
          <i
            className="fa fa-search"
            style={{
              fontSize: "1.3em",
              color: "white"
            }}
          ></i>
        </div>
      </MDBNavbarNav>
    );
  }
}

export default NavWithSearch;
