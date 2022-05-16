import React from "react";
import "./Contacts.css";

function Contacts({ img, name, phone, email }) {
  return (
    <div className="contacts">
      <div className="contact-card">

        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      
        <div className="info-group">
        <img src="./images/red-star.svg" alt="k"/>
        </div>
        <div className="info-group">
        <img src="./images/1547046949.svg" alt="k"/>
        </div>
        </div>
        </div>
  );
}

export default Contacts;
