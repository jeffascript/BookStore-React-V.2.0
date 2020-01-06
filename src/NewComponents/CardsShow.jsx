import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn, MDBMask, MDBView, MDBMedia } from "mdbreact";
import "../index.css";




class CardsShow extends Component {


    render (){
        return (
        <>
        <h3 class="font-weight-bold text-center mb-5">Product Reviews</h3>

            <MDBMedia list className="mt-3">
            <MDBMedia tag="li">
              <MDBMedia left href="#">
                <img object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" class="card-img-100 rounded-circle z-depth-1-half d-flex mr-3" />
              </MDBMedia>
              <MDBMedia body>
                <MDBMedia heading>
                  Anna Smith
                  </MDBMedia>
                
          <li className="mb-2 list-unstyled">
            <i className="fas fa-star blue-text"></i>
         
        
            <i className="fas fa-star blue-text"></i>
      
      
            <i className="fas fa-star blue-text"></i>
         
            <i className="fas fa-star blue-text"></i>
          
            <i className="far fa-star blue-text"></i>
          </li>
     
        <div className="card-data">
          <ul className="list-unstyled mb-1">
            <li className="comment-date font-small grey-text">
              <i className="far fa-clock"></i> 05/10/2015</li>
          </ul>
        </div>
        <p className="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </MDBMedia>
            </MDBMedia>
            <MDBMedia tag="li">
              <MDBMedia left href="#">
                <img object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" class="card-img-100 rounded-circle z-depth-1-half d-flex mr-3" />
              </MDBMedia>
              <MDBMedia body>
                <MDBMedia heading>
                  Anna Smith
                  </MDBMedia>
                
          <li className="mb-2 list-unstyled">
            <i className="fas fa-star blue-text"></i>
         
        
            <i className="fas fa-star blue-text"></i>
      
      
            <i className="fas fa-star blue-text"></i>
         
            <i className="far fa-star blue-text"></i>
          
            <i className="far fa-star blue-text"></i>
          </li>
     
        <div className="card-data">
          <ul className="list-unstyled mb-1">
            <li className="comment-date font-small grey-text">
              <i className="far fa-clock"></i> 05/10/2015</li>
          </ul>
        </div>
        <p className="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </MDBMedia>
            </MDBMedia>
            <MDBMedia tag="li">
              <MDBMedia left href="#">
                <img object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" class="card-img-100 rounded-circle z-depth-1-half d-flex mr-3" />
              </MDBMedia>
              <MDBMedia body>
                <MDBMedia heading>
                  Natalie Doe
                  </MDBMedia>
                  
          <li className="mb-2 list-unstyled">
            <i className="fas fa-star blue-text"></i>
         
        
            <i className="fas fa-star blue-text"></i>
      
      
            <i className="fas fa-star blue-text"></i>
         
            <i className="fas fa-star blue-text"></i>
          
            <i className="fas fa-star blue-text"></i>
          </li>
     
        <div className="card-data">
          <ul className="list-unstyled mb-1">
            <li className="comment-date font-small grey-text">
              <i className="far fa-clock"></i> 05/10/2015</li>
          </ul>
        </div>
        <p className="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </>
        );
      }
}

export default CardsShow;





