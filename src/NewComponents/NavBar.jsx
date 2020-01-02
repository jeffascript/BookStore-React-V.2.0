import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer,Container, MDBMask, MDBView, MDBRow, MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "../index.css"




class NavBar extends Component{
  state = {
      collapse: false,
      isWideEnough: false,
    };
  

  onClick=()=>{
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <>
        <header>
          <Router>
            <MDBNavbar color="warning-color-dark" fixed="top" dark expand="md" scrolling transparent id="nav1">
              
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>

                <Container>
                <MDBRow className="order-12">
                    <MDBCol size="5">
                        <MDBNavbarNav >
                        
                              <MDBNavItem active>
                                <MDBNavLink to="#">Home</MDBNavLink>
                              </MDBNavItem>
                              <MDBNavItem>
                                <MDBNavLink to="#">Link</MDBNavLink>
                              </MDBNavItem>
                              <MDBNavItem>
                                <MDBNavLink to="#">Profile</MDBNavLink>
                              </MDBNavItem>
                              <MDBNavItem>
                                <MDBNavLink to="#">Profile</MDBNavLink>
                              </MDBNavItem>
                              <MDBNavItem>
                                <MDBNavLink to="#">Profile</MDBNavLink>
                              </MDBNavItem>
                              <MDBNavItem>
                                <MDBNavLink to="#">Profile</MDBNavLink>
                              </MDBNavItem>
                            </MDBNavbarNav>
                    </MDBCol>
                    <MDBCol size="2" className="order-1">
                            <MDBNavbarBrand href="/">
                        <strong>Navbar</strong>
                      </MDBNavbarBrand>
                      
                      </MDBCol>
                
                    </MDBRow>
                </Container>

              </MDBCollapse>
            </MDBNavbar>
          </Router>

          

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>This Navbar is fixed</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </>
    );
  }
}

export default NavBar;