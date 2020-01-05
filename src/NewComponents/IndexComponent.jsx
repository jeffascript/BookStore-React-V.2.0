import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from  "react-router-dom"
import { MDBBox, Container, MDBContainer } from 'mdbreact';
import NavBar from "./NavBar"
import CarouselPage from "./Carousel"
import ClaimComponent from './ClaimComponent';
import Fade from 'react-reveal/Fade';
import SectionCarousel from './SectionCarousel';
import CardsShow from './CardsShow';






class IndexComponent extends Component {
    render() {



        return (
          <>
            <Router>
              <NavBar />
              <CarouselPage />

              <MDBContainer fluid>
                <Fade left>
                  <ClaimComponent />
                </Fade>

                <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Our bestsellers
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
              Here you can find all the books that we have for sale
            </p>




               <SectionCarousel />
               </section>


               
<br/>
<h2 className="mt-3 mb-3">Recent books</h2>
                 <section>
               <SectionCarousel />
               </section>   
<CardsShow/>
              </MDBContainer>
            </Router>
          </>
        );
    }

    
};

export default IndexComponent;