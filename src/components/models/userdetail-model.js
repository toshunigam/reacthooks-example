import React from "react";
import { Modal, Image } from "react-bootstrap";
 
const UserDetailModel = props => {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header>
       <Image fluid src={`https://gventure.us/wp-content/uploads/2019/12/indra-patel.png`} alt={props.movie.name} />
     </Modal.Header>
     <Modal.Body>
       <Modal.Title id="contained-modal-title-vcenter">
         {props.movie.name} <span style={{fontSize: "1rem", fontStyle: "italic"}}>{props.movie.email}</span>
       </Modal.Title>
       <p>{props.movie.email}</p>
       <p> Popularity: {props.movie.name} </p>
       <p> Votes: {props.movie.age}</p>
     </Modal.Body>
   </Modal>
 );
};
 
export default UserDetailModel;