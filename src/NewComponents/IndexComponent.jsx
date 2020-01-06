import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from  "react-router-dom"
import { MDBBox, Container, MDBContainer } from 'mdbreact';
import NavBar from "./NavBar"
import CarouselPage from "./Carousel"
import ClaimComponent from './ClaimComponent';
import Fade from 'react-reveal/Fade';
import SectionCarousel from './SectionCarousel';
import CardsShow from './CardsShow';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate'
import Footer from './Footer';




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

              
                <Slide top>
                <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Our bestsellers
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
              Here you can find all the books that are best sellers
            </p>
            </section>
            </Slide>
           
            <Fade left>
               <SectionCarousel />
               </Fade>

             

                <Rotate top right >
                <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent books
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
              Here you can find all the books that were added recently
            </p>
            </section>
            </Rotate>
            
            <Fade left>
               <SectionCarousel />
               </Fade>

                

             
<br/>



<CardsShow />


 

              </MDBContainer>
              <Footer/>
            </Router>
          </>
        );
    }

    
};

export default IndexComponent;