import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn, MDBMask, MDBView } from "mdbreact";
import "../index.css";




class CardsShow extends Component {


    render (){
        return (
        
            <MDBRow>
              <MDBCol lg="3" md="3" className="mb-lg-0 mb-4">
              <MDBView hover zoom className="shadow-box-example z-depth-1  " >
                <MDBCard cascade narrow ecommerce>
                  <MDBCardImage
                    cascade
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                    top
                    alt="sample photo"
                    overlay="white-slight"
                  />

<MDBMask className="flex-center d-flex flex-column-reverse  align-items-center" overlay="white-light" >

            
                   {/* <p className="white-text">Super light overlay</p> */}
                 {/* <button className=" peach-gradient btn text-center font-weight-bolder shadow-box-example" style={{borderRadius:"1.5em", marginBottom: "5.5em", fontSize: ".15%"}}>Buy Now</button> */}
                 <button className="bt1  btn-4 btn-4a icon-arrow-right shadow-box-example z-depth-2 mx-1 "  style={{fontSize: "12px", textAlign:"center"}}>
                     <span>Select Options</span></button>



                     <span className=" store-icon" >
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                  <i className="fas fa-shopping-cart  ml-3"></i>
                </a>
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                  <i className="fas fa-heart  ml-3"></i>
                </a>
              </span>




                 
               </MDBMask>



                  <MDBCardBody cascade className="text-center ">
                    <a href="#!" className="grey-text">
                      <h5>Denim</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Denim trousers</a>
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
                  
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                    </MDBCardText>
                    <div class="card-footer d-flex justify-content-between ">
                   
              <span class=" font-weight-bold">
                <strong>€119</strong>
              </span>

         
                   
                   </div>
                  </MDBCardBody>
                </MDBCard>
                </MDBView>
              </MDBCol>


            </MDBRow>
        
        );
      }
}

export default CardsShow;





