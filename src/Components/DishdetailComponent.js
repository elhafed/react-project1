import React, { Component } from 'react'
import {Card,CardImg,CardText,CardTitle,CardBody} from 'reactstrap'

 class DishDetail  extends Component {
    
    render() {
        const dish= this.props.dish;
            return(
                <React.Fragment>
                <div  className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                <Card >
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>
                            {dish.comments.map((comment)=>{
                                return <div key={comment.id}> 
                                        <div> {comment.comment}  </div><br/>
                                        <div> --{comment.author}  {comment.date}  </div><br/>
                                </div>
                            })}
                        </CardText>
                    </CardBody>
                </Card>
                </div>
                </React.Fragment>
                
        )
    }
}
export default DishDetail ;