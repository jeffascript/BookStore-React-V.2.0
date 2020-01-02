import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from  "react-router-dom"
import { MDBBox, Container, MDBContainer } from 'mdbreact';
import NavBar from "./NavBar"

class IndexComponent extends Component {
    render() {



        return (
           <>
            <Router>
            <NavBar />
         
                 
                 <MDBContainer>




                     
                 </MDBContainer>
                
            


      
            </Router>
           </>
        );
    }

    
};

export default IndexComponent;