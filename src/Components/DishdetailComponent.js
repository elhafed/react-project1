import React, { Component } from 'react'
import {Card,CardImg,CardText,CardTitle,CardBody} from 'reactstrap'

 class DishDetail  extends Component {

    renderComments(dish){

        return (                
        <div  className="col-12 col-md-5 m-1">
          <Card >
            <CardBody>
                <CardTitle>Comments</CardTitle>
                <CardText>
                    {dish.comments.map((comment)=>{
                        return <div key={comment.id}> 
                                <div> {comment.comment}  </div><br/>
                                <div> --{comment.author},  {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format( new Date(Date.parse(comment.date)))}  </div><br/>
                        </div>
                    })}
                </CardText>
            </CardBody>
          </Card>
        </div>)
    }
    renderDish(dish){
        return(  <div  className="col-12 col-md-5 m-1">
        <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Card>
        </div>)
    }
    
    render() {
        if(this.props.dish!=null)
            {return(
                <div className="container">
                    <div className="row">
               {this.renderDish(this.props.dish)}
               {this.renderComments(this.props.dish)}
                </div></div>)
            }
            else return<div></div>
        
    }
}
export default DishDetail ;