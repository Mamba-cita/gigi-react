import React from "react";
import ItemDescription from "./ItemDescription";

export default function Product({ name, description, price, rating, image }) {
  return (
    <div>
      <ItemDescription name={name} description={description} price={price} />
      <h1>{rating}</h1>
      <img src={image} alt={name} />
    </div>
  );
}
