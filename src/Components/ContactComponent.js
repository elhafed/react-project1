import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

import {Link} from 'react-router-dom'


class Contact extends Component {

    
 
  HandleSubmit=(vlaues)=>{
      console.log("current state is: "+ JSON.stringify(vlaues));
      alert("current state is: "+ JSON.stringify(vlaues));
  // event.preventDefault();
      }
 
   validate(firstname,lastname,telnum,email){
const errors={ 
                firstname:"",
                lastname:"",
                telnum:"",
                email:""
            }
            if(this.state.touched.firstname&& firstname.length<3){ 
                errors.firstname="first name should be  >= 3 letters"
            }
            else if(this.state.touched.firstname && firstname.length>10){ 
                errors.firstname="first name should be =< 10 letters"
            }
            if(this.state.touched.lastname && lastname.length<3){ 
                errors.lastname="first name should be  >= 3 letters"
            }
            else if(this.state.touched.lastname && lastname.length>10){ 
                errors.lastname="first name should be =< 10 letters"
            }
            const reg=/^\d+$/
            if(this.state.touched.telnum&& reg.test(telnum))
            {
                errors.telnum="the phone number should contain only numbers";
            }
            if(this.state.touched.email&& email.split('').filter((x)=>x==='@').length!==1)
            {
                errors.email="email should contain one @";
            }
return errors;
   }
  
    render(){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="home">Home</Link></BreadcrumbItem>    
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>

                </Breadcrumb>
              
                <div className="col-12">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h1>send us your feedback</h1>
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values)=>this.HandleSubmit(values)}>
                        <Row className="form-group" >
                            <Label for="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname"  id="firstname"
                                 name="firstname" placeholder="first name"  
                                 className="form-control"
                                />
                            </Col>
                            </Row>
                        <Row className="form-group" >
                            <Label for="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text model=".lastname" className="form-control" id="lastname"
                                 name="lastname" placeholder="last name"  
                                 />
                            </Col>
                            </Row>
                        <Row className="form-group" >
                            <Label for="telnum" md={2}>Telephone Number</Label>
                            <Col md={10}>
                                <Control.text model=".telnum" className="form-control" id="telnum"
                                 name="telnum" placeholder="Telephone Number"  
                                 />
                            </Col>
                            </Row>
                        <Row className="form-group" >
                            <Label for="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" className="form-control" id="email"
                                 name="email" placeholder="Email"  
                                 />
                            </Col>
                            </Row>
                        <Row className="form-group" >
                            <Col md={{size: 6,offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree" className="form-check-input"/> {"  "}
                                        <strong>May we contact you ?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size: 3,offset:1}}>
                                <Control.select model=".contacttype" name="contacttype" className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                            </Row>
                        <Row className="form-group" >
                            <Label for="feedback" md={2}>Your feedback</Label>
                            <Col md={10}>
                                <Control.text  model=".message" id="message"
                                 name="message" rows="12"  
                                className="form-control"/>
                            </Col>
                            </Row>
                        <Row className="form-group" >
                            <Col md={{ size : 10 , offset : 2 }}>
                                <Button type="submit" color="primary" >
                                    Send feedback
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
    );}
}

export default Contact;