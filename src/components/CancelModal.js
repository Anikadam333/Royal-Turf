import React from 'react'
import { Button,Modal } from 'react-bootstrap'

class cancelModal extends React.Component{
    
    render(){
        const that = this;
        return(
            <div>
                <Modal show={this.props.showHide}>
                    <Modal.Header closeButton onClick={() => that.props.handleModalShowHide()}>
                    <Modal.Title>{this.props.turfName + " " + this.props.timeSlot}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure, you want to cancel this booking ?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => that.props.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => that.props.handleModalShowHide(true)}>
                        Cancel Booking
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default cancelModal;