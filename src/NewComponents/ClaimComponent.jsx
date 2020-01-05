import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class ClaimComponent extends Component {
  state = {};

  render() {
    return (
      <>
        <MDBRow middle className="mr-0 ml-0 p-3 mt-5 mb-5 shadow-box-example z-depth-2  rounded-pill">
          <MDBCol middle sm="12" md="4"  className="d" style={{
                display: "table-cell",
                verticalAlign: "middle",
                border: "1px solid lightgray",
                borderRadius: "1.5em 0 0 1.5em"
                
              }}>


          
              <i
                className="fa fa-truck teal-text"
                style={{
                  fontSize: "1.5em",
                  display: "table-cell",
                  verticalAlign: "middle",
                  position: "relative"
                }}
              >
                
              </i>
              <div
                
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                <h5 className="font-weight-bolder text-capitalize deep-orange-text ">
                  We serve the best Truck
                </h5>
                <p className="black-text text-center">come anf grab yours</p>
              </div>
           
          </MDBCol>


{/*  */}
<MDBCol middle sm="12" md="4"  className="d" style={{
                display: "table-cell",
                verticalAlign: "middle",
                border: "1px solid lightgray"
              }}>


          
              <i
                className="fa fa-truck teal-text"
                style={{
                  fontSize: "1.5em",
                  display: "table-cell",
                  verticalAlign: "middle",
                  position: "relative"
                }}
              >
                
              </i>
              <div
                
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                <h5 className="font-weight-bolder text-capitalize deep-orange-text ">
                  We serve the best Truck
                </h5>
                <p className="black-text text-center">come anf grab yours</p>
              </div>
           
          </MDBCol>

          <MDBCol middle sm="12" md="4"  className="d" style={{
                display: "table-cell",
                verticalAlign: "middle",
                border: "1px solid lightgray",
                borderRadius: "0 1.5em 1.5em 0"
              }}>


          
              <i
                className="fa fa-truck teal-text"
                style={{
                  fontSize: "1.5em",
                  display: "table-cell",
                  verticalAlign: "middle",
                  position: "relative"
                }}
              >
                
              </i>
              <div
                
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                <h5 className="font-weight-bolder text-capitalize deep-orange-text ">
                  We serve the best Truck
                </h5>
                <p className="black-text text-center">come anf grab yours</p>
              </div>
           
          </MDBCol>






        </MDBRow>

    
      </>
    );
  }
}

export default ClaimComponent;
