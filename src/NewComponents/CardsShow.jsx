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
                    <div class="card-footer ">
                   
              <span class="float-left font-weight-bold">
                <strong>€119</strong>
              </span>
              <span className="float-right">
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                  <i className="fas fa-shopping-cart grey-text ml-3"></i>
                </a>
                <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                  <i className="fas fa-heart grey-text ml-3"></i>
                </a>
              </span>
         
                   
                   </div>
                  </MDBCardBody>
                </MDBCard>
                </MDBView>
              </MDBCol>











{/*               
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard cascade narrow ecommerce>
                  <MDBCardImage
                    cascade
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
                    top
                    alt="sample photo"
                    overlay="white-slight"
                  />
                  <MDBCardBody cascade className="text-center">
                    <a href="#!" className="grey-text">
                      <h5>Shoes</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">High heels</a>
                      </strong>
                    </MDBCardTitle>
                    <ul className="rating">
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                    </ul>
                    <MDBCardText>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                    </MDBCardText>
                    <MDBCardFooter className="px-1">
                      <span className="float-left font-weight-bold">
                        <strong>89$</strong>
                      </span>
                      <span className="float-right">
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-shopping-cart grey-text ml-3"
                          tooltipContent="Add to cart"
                        />
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-share-alt grey-text ml-3"
                          tooltipContent="Share"
                        />
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-heart grey-text ml-3"
                          tooltipContent="Add to watchlist"
                        />
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard cascade narrow ecommerce>
                  <MDBCardImage
                    cascade
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
                    top
                    alt="sample photo"
                    overlay="white-slight"
                  />
                  <MDBCardBody cascade className="text-center">
                    <a href="#!" className="grey-text">
                      <h5>Outwear</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Brown coat</a>
                      </strong>
                    </MDBCardTitle>
                    <ul className="rating">
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon far icon="star-half" />
                      </li>
                    </ul>
                    <MDBCardText>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                    </MDBCardText>
                    <MDBCardFooter className="px-1">
                      <span className="float-left font-weight-bold">
                        <strong>59$</strong>
                      </span>
                      <span className="float-right">
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-shopping-cart grey-text ml-3"
                          tooltipContent="Add to cart"
                        />
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-share-alt grey-text ml-3"
                          tooltipContent="Share"
                        />
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-heart grey-text ml-3"
                          tooltipContent="Add to watchlist"
                        />
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard cascade narrow ecommerce>
                  <MDBCardImage
                    cascade
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
                    top
                    alt="sample photo"
                    overlay="white-slight"
                  />
                  <MDBCardBody cascade className="text-center">
                    <a href="#!" className="grey-text">
                      <h5>Blouses</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Shirt</a>
                      </strong>
                    </MDBCardTitle>
                    <ul className="rating">
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon icon="star" />
                      </li>
                      <li>
                        <MDBIcon far icon="star" />
                      </li>
                    </ul>
                    <MDBCardText>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                    </MDBCardText>
                    <MDBCardFooter className="px-1">
                      <span className="float-left font-weight-bold">
                        <strong>119$</strong>
                      </span>
                      <span className="float-right">
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-shopping-cart grey-text ml-3"
                          tooltipContent="Add to cart"
                        />
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          componentClass="fa fa-share-alt grey-text ml-3"
                          tooltipContent="Share"
                        />
                        <MDBTooltip
                          placement="top"
                          tag="a"
                          component="i"
                          className="active"
                          componentClass="fa fa-heart ml-3"
                          tooltipContent="Added to watchlist"
                        />
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}
            </MDBRow>
        
        );
      }
}

export default CardsShow;





