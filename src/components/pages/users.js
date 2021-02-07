import React, { useState } from "react";
import { Table, NavLink } from "react-bootstrap";
 
const UsersTable = () => {
 let keys = ["name", "email", "age", "action"];
 const movies = [{name:'toshu',email:'tosu@gvenuter.ner',age:34},{name:'aparna',email:'aparna@gventie.net',age:4},{name:'vandana',email:'vandana@gventure.net',age:45}];
 
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
             <tr key={movie.name}>
               <td>{movie.name}</td>
               <td>{movie.email}</td>
               <td>{movie.age}</td>
               <td>modal will go here…</td>
             </tr>
           );
         })}
       </tbody>
     </Table>
   </div>
 );
};
 
export default UsersTable;