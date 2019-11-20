import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import Singlebook from './Singlebook'
import MyFantasy from '../jsonfiles/fantasy.json'

class BookList extends React.Component {
    state = {}
    render() {
        return ( 
            <>
            {MyFantasy
                .filter(book => book.title.toLowerCase().includes(this.props.search))
                .map((oneEntry,index) => 
                    <Singlebook oneBook = {oneEntry} key = {index}/>  )}
            </>
        );
    }
}

export default BookList;