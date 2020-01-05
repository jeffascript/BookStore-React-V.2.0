import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Fantasy  from "../jsonfiles/fantasy.json"
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import "./slider-animation.css"
import { Button } from 'reactstrap';

class CarouselTool extends Component {
  state = {
    carouselData: [
      // {
      //   image:
      //     "https://images.unsplash.com/photo-1566415609180-96eaa27bf3f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      //   description: "The best Novels yet to come this summer  1",
      //   title: "The movie of the year1",
      // },
      // {
      //   image:
      //     "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      //   description: "The best Novels yet to come this summer  2",
      //   title: "The movie of the year2",
      // },
      // {
      //   image:
      //     "https://images.unsplash.com/photo-1520014443023-9fb2b7860d1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      //   description: "The best Novels yet to come this summer 3",
      //   title: "The movie of the year3"
      // }

      

    ],

    isMouseInside: false,

    allbooks: Fantasy
  }

  
 
  render() {
  const{allbooks}=this.state;
  
  
    return (
    
      
        <MDBRow className="mr-0 ml-0">
          <MDBCol className="p-0 ">
          
            
              <Carousel autoPlay infiniteLoop showStatus={false}>
              
                {allbooks.slice(0, 20).map((book, index) => (
                  
                 <div key={index} className="container   jj" style={{paddingBottom: "5em", marginBottom: "20px"}}
                 
                //  onMouseOver={()=>
                //  this.setState({isMouseInside:true})} onMouseLeave={()=>this.setState({isMouseInside:false})}
                 
                 >
                    <br />
                  
                      <img
                        className="mt-5 mb-auto " 
                        src={book.img}
                        alt={`${book.title}`}
                        style={{
                          background: "no-repeat fixed 1.5em 0 0 0 / cover"
                        }}
                      />
                  
  
                    <div className="tt ">{book.title}</div>
                    {/* {this.state.isMouseInside ? <button className="btn bb peach-gradient">view more</button> : null } */}
                    <button className="btn peach-gradient bb " style={{borderRadius:"20px", marginBottom: "1em"}}>Click to View More</button>
                   
                  </div>
                  
                
                ))}
             
              </Carousel>
             
             
          </MDBCol>
          
        </MDBRow>


        
       
      
    );
  }
}

export default CarouselTool;