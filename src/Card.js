import React from "react";
import './Card.css';
import avatar from './avatar.webp';


function Card({title,imageurl,body}) {
    return (
      <div className="card-container">
      <div className="image-container">
      <img src={imageurl}  alt=""/>
      </div>
      <div className="card-content">
      <div className="card-title">{title}</div>
      <div className="card-body">
      <p>published 04 Jan 2024</p>
      <h1>HTML & CSS foundation</h1>
      <p>{body}</p>
      </div>
         <div className="avatar">
         <img src={avatar}  alt=""/>
         <h4>Greg hooper</h4>
        </div>
      </div>
      </div>

    );
}
  
  export default Card;