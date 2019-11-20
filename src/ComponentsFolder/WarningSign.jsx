import React from 'react';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';


class WarningSign extends React.Component {
    state = {
        visible: true
    }

    toggleAlert = () => {
        this.setState({
            visible: !this.state.visible
        })
    }


    render() {
        return (
            <>
                <Button color="danger" onClick={this.toggleAlert} >Open To View warning</Button>
                <Alert color="danger" isOpen={this.state.visible} toggle={this.toggleAlert}>
                    This is a danger alert — check it out!
                </Alert>
            </>
        );
    }
}

export default WarningSign;