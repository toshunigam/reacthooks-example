import React, { useState } from "react";
import { Table, NavLink } from "react-bootstrap";
import UserDetailModel from "../models/userdetail-model";
 
const UsersTable = () => {
  const [modalShow, setModalShow] = useState(false);
 let keys = ["Name", "Email", "Age", "Action"];
 const movies = [{id:1,name:'toshu',email:'tosu@gvenuter.ner',age:34},{id:2,name:'aparna',email:'aparna@gventie.net',age:4},{id:3,name:'vandana',email:'vandana@gventure.net',age:45}];
 
 return (
   <div style={{ width: "90%", margin: "0 auto" }}>
     <h2 style={{textAlign: "center", margin: "20px auto auto"}}> Users for { new Date(Date.now()).toLocaleDateString()}</h2>
 
     <Table
       variant="default"
       style={{ width: "100%", margin: "20px auto" }}
       striped
       bordered
       responsive
     >
 
       <thead>
         <tr>
           {keys.map(heading => {
             return <td key={heading}>{heading}</td>;
           })}
         </tr>
       </thead>
       <tbody>
         {movies.map(movie => {
           return (
             <tr key={movie.id}>
               <td>{movie.name}</td>
               <td>{movie.email}</td>
               <td>{movie.age}</td>
               <td>
                 <NavLink
                   value={movie.id}
                   onClick={() => {
                     setModalShow(movie.id);
                   }}
                 >Details
                 </NavLink>
                 <UserDetailModel
                   movie={movie}
                   show={modalShow === movie.id}
                   onHide={() => setModalShow(false)}
                 />
               </td>
             </tr>
           );
         })}
       </tbody>
     </Table>
   </div>
 );
};
 
export default UsersTable;