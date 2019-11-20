import React from 'react';
import WarningSign from './WarningSign'
import MyBadge from './MyBadge'
import { Button, Container, Row, Col, Input } from "reactstrap"
import Singlebook from './Singlebook'
import BookList from './BookList'
import MyFantasy from '../jsonfiles/fantasy.json'

class IndexComponent extends React.Component {
    state = {
        searchString: ""
    }

    searchChange = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }


    render() {
        return (
            <Container>
                <WarningSign />
                <MyBadge />

                <Input type="text" placeholder="Search for a book" onChange={this.searchChange} value={this.state.searchString} />

                <Row >
                    <Singlebook oneBook={MyFantasy[0]} />
                </Row>
                

                <Row >
                    {/* {MyFantasy
                        .filter(oneBook =>
                            oneBook.name.toLowerCase().includes(this.state.searchString))
                        .map((oneEntry, index) =>
                            <Singlebook oneBook = {oneEntry} key = {index}/> 
                        )
                    } */}
                    <BookList search={this.state.searchString} />
                    {/*    {MyMenu
                            .filter(dish => 
                                dish.name.toLowerCase().includes(this.state.searchString)
                                    .map((menuEntry, index) => 
                            <SingleDish dish={menuEntry} key={index} onSelectedDish={this.selectDish} />
                    )}*/}
                </Row>
            </Container>
        )
    }
}

export default IndexComponent;