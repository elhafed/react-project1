import React from 'react'
import {Card,CardImg,CardText,CardTitle,CardBody} from 'reactstrap'

function RenderComments({dish}){

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
function RenderDish({dish}){
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
 const DishDetail = (props)=> {
console.log("i did pass")
        if(props.dish!=null)
            {return(
                <div className="container">
                    <div className="row">
                         <RenderDish dish={props.dish}/>
                         <RenderComments dish={props.dish}/>
                    </div>
                </div>)
            }
            else return<div></div>
        
    }

export default DishDetail ;