import React, { Component } from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Form,FormGroup,Input,Label,Col, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom'


class Contact extends Component {

    constructor(props){
        super (props);
        this.state = {
                firstname:"",
                lastname:"",
                telnum:"",
                email:"",
                agree:"",
                contacttype:"Tel.",
                message:"",
                touched:{
                    firstname:false,
                    lastname:false,
                    telnum:false,
                    email:false
                }
        }      
    }
    
 HandleChange=(event) =>{
     const target=event.target;
     const value= target.type==="checked" ? target.checked:target.value;
     const name= target.name;
        this.setState({[name]:value });
  }
  HandleSubmit=(event)=>{
      console.log("current state is: "+ JSON.stringify(this.state));
      alert("current state is: "+ JSON.stringify(this.state));
      event.preventDefault();
      }
  HandleBlur=(field)=>(evt)=>{
      this.setState({
                touched:{...this.state.touched,[field]:true}
      });}
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
        const errors= this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
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
                    <Form onSubmit={this.HandleSubmit}>
                        <FormGroup row>
                            <Label for="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname"
                                 name="firstname" placeholder="first name"  
                                 value={this.state.firstname} 
                                 valid={errors.firstname===''}
                                 invalid={errors.firstname!==''}
                                 onBlur={this.HandleBlur('firstname')}
                                 onChange={this.HandleChange}/>
                                 <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname"
                                 name="lastname" placeholder="last name"  
                                 value={this.state.lastname} onBlur={this.HandleBlur('lastname')}
                                 valid={errors.lastname===''}
                                 invalid={errors.lastname!==''}
                                 onChange={this.HandleChange}/>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="telnum" md={2}>Telephone Number</Label>
                            <Col md={10}>
                                <Input type="text" id="telnum"
                                 name="telnum" placeholder="Telephone Number"  
                                 value={this.state.telnum} onBlur={this.HandleBlur('telnum')}
                                 valid={errors.telnum===''}
                                 invalid={errors.telnum!==''}
                                 onChange={this.HandleChange}/>
                                 <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email"
                                 name="email" placeholder="Email"  
                                 value={this.state.email}onBlur={this.HandleBlur('email')}
                                 valid={errors.email===''}
                                 invalid={errors.email!==''}
                                onChange={this.HandleChange}/>
                                 <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6,offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={this.state.agree}
                                         onChange={this.HandleChange}/> {"  "}
                                        <strong>May we contact you ?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3,offset:1}}>
                                <Input type="select" name="contacttype" value={this.state.contacttype}
                                 onChange={this.HandleChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="feedback" md={2}>Your feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message"
                                 name="message" rows="12"  
                                 value={this.state.message} onChange={this.HandleChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size : 10 , offset : 2 }}>
                                <Button type="submit" color="primary" >
                                    Send feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );}
}

export default Contact;