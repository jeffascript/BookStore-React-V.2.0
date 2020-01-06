
 
import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MDBMask, MDBView, MDBCardBody, MDBCard, MDBCloseIcon, MDBCardTitle, MDBCardText, MDBIcon, MDBRow, MDBBtn, MDBCol, MDBCardImage } from 'mdbreact';
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



class SectionCarousel extends Component {

state={

}



render = () => {
  return (
    <Carousel
      ssr
      partialVisbile
      itemClass="image-item"
      responsive={responsive}
      focusOnSelect={true}
      containerClass="carousel-container" 
      autoPlay
    autoPlaySpeed={5000}
    >
      {images.slice(0, 8).map(image => {
        return (


              <MDBView hover zoom className="shadow-box-example  " >
                <MDBCard cascade narrow ecommerce className="m-4 shadow-box-example z-depth-2">
                <MDBCardImage 
             draggable={false}
             style={{ width: "100%", height: "100%" }}
             src={image} alt="alt show"
           />

                  {/* <MDBCardImage
                    cascade
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                    top
                    alt="sample photo"
                    overlay="white-slight"
                  /> */}

<MDBMask className="flex-center d-flex flex-column-reverse  align-items-center" overlay="white-light" >

            
                   {/* <p className="white-text">Super light overlay</p> */}
                 {/* <button className=" peach-gradient btn text-center font-weight-bolder shadow-box-example" style={{borderRadius:"1.5em", marginBottom: "5.5em", fontSize: ".15%"}}>Buy Now</button> */}
                 <button className="bt1  btn-4 btn-4a icon-arrow-right shadow-box-example z-depth-2 mx-5 "  style={{fontSize: "12px", textAlign:"center"}}>
                     <span className="text-center"><strong>Select Options</strong></span></button>



                     <span className=" store-icon" >
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                  <i className="fas fa-shopping-cart  ml-3"></i>
                </a>
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Share Now">
                  <i className="fas fa-share-alt  ml-3"></i>
                </a>
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                  <i className="fas fa-heart  ml-3"></i>
                </a>
              </span>




                 
               </MDBMask>



                  <MDBCardBody cascade className="text-center ">
                    <a  className="grey-text">
                      <h5>1995</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a >Books of War</a>
                      </strong>
                    </MDBCardTitle>
                    
                    <li className="rating mb-1 pb-2 list-unstyled">
          
                <i className="fas fa-star fa-s"></i>
             
            
                <i className="fas fa-star fa-s"></i>
             
             
                <i className="fas fa-star fa-s"></i>
            
              
                <i className="fas fa-star fa-s"></i>
            
              
                <i className="far fa-star fa-s"></i>
              
            </li>



                    <MDBCardText>
                  
                      Neque porro quisquam est,
                    </MDBCardText>
                    <div class="card-footer d-flex  ">
                   
              <span class=" font-weight-bold">
                <strong>€119</strong>
              </span>

         
                   
                   </div>
                  </MDBCardBody>
                </MDBCard>
                </MDBView>
            //   </MDBCol>


            // </MDBRow>




//           <MDBView hover zoom className="shadow-box-example z-depth-5  p-4 mt-5" >
//          <MDBCard>
// <img 
//             draggable={false}
//             style={{ width: "100%", height: "100%" , padding: "0 2em"}}
//             src={image} alt="alt show"
//           />
//         <MDBCardBody>
        
//           <MDBCardText>
           
//             € 200.-

//             <small> 2 Reviews</small>
           
//           </MDBCardText>
        
          
//         </MDBCardBody>


//         <MDBMask className="flex-center " overlay="white-slight" >
             
//              <div className="container">
   
//                  <MDBRow>
//                    <MDBCol>
//                    <div className="text">hey</div>
//                    {/* <p className="white-text">Super light overlay</p> */}
//                  {/* <button className=" peach-gradient btn text-center font-weight-bolder shadow-box-example" style={{borderRadius:"1.5em", marginBottom: "5.5em", fontSize: ".15%"}}>Buy Now</button> */}
//                  <button className="bt1 btn-4 btn-4a icon-arrow-right font-weight-bolder "  style={{fontSize: "1.15%"}}>Buy Now</button>

                 

//                     </MDBCol>
                  
//                  </MDBRow>
//              </div>
           
//                </MDBMask>
//       </MDBCard>
         
//         </MDBView>







          
        );
      })}



    </Carousel>
  );
};
}


export default SectionCarousel;






