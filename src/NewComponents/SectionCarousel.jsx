
 
import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MDBMask, MDBView, MDBCardBody, MDBCard, MDBCloseIcon, MDBCardTitle, MDBCardText, MDBIcon, MDBRow, MDBBtn, MDBCol } from 'mdbreact';
import "../index.css";




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];


const SectionCarousel = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      focusOnSelect={true}
      containerClass="carousel-container" 
    >
      {images.slice(0, 8).map(image => {
        return (
          <MDBView hover zoom className="shadow-box-example z-depth-5  p-4 mt-5" >
         <MDBCard>
<img 
            draggable={false}
            style={{ width: "100%", height: "100%" , padding: "0 2em"}}
            src={image}
          />
        <MDBCardBody>
        
          <MDBCardText>
           
            € 200.-

            <small> 2 Reviews</small>
           
          </MDBCardText>
        
          
        </MDBCardBody>


        <MDBMask className="flex-center p-5" overlay="white-slight" >
             
             <div className="container">
   
                 <MDBRow>
                   <MDBCol>
                   <div className="text">hey</div>
                   {/* <p className="white-text">Super light overlay</p> */}
                 {/* <button className=" peach-gradient btn text-center font-weight-bolder shadow-box-example" style={{borderRadius:"1.5em", marginBottom: "5.5em", fontSize: ".15%"}}>Buy Now</button> */}
                 <button className="bt1 btn-4 btn-4a icon-arrow-right font-weight-bolder "  style={{fontSize: "1.15%"}}>Buy Now</button>

                 

                    </MDBCol>
                  
                 </MDBRow>
             </div>
           
               </MDBMask>
      </MDBCard>
         
        </MDBView>







          
        );
      })}



    </Carousel>
  );
};



export default SectionCarousel;






