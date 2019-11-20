import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';


class Singlebook extends React.Component {
    state = {}
    render() {
        return (
            <Col lg="3">
                <Card>
                    <CardImg top width="100%" src={this.props.oneBook.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.oneBook.title.toUpperCase()}</CardTitle>
                        <CardSubtitle className>{this.props.oneBook.category}</CardSubtitle>
                        <CardText>€{this.props.oneBook.price}</CardText>
                        <Button>Buy Now</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Singlebook;