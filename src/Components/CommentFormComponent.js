import React, { Component } from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Row, Col, Label,Modal,ModalHeader,ModalBody } from 'reactstrap';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
export default class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state={
            isModalOpen:false,
        }
        this.toggleModal=this.toggleModal.bind(this);
    }
    
        toggleModal() {
            this.setState({ 
                isModalOpen:!this.state.isModalOpen
            })
        }
    render() {
        return (

            <div>
                <Button onClick={this.toggleModal}>subbmit comment</Button>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader>Subbmit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values)=>this.HandleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating " md={2}>Rating </Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder=""
                                        className="form-control"
                                       >
                                            <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                     </Control.select>
                                  
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Author"
                                        className="form-control"
                                        validators={{
                                             minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be at least 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="" row={6}
                                        className="form-control"
                                       
                                         />
                                 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                            
                    </LocalForm>
                    </ModalBody>
                    </Modal>
            </div>
        )
    }
}
