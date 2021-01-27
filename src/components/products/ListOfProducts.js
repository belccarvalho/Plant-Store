import React from "react";
import { useSelector } from "react-redux";
import { CardGroup } from "reactstrap";
import Product from "./Product";
import "../products/products.css";

export default function ListOfProducts() {
  const products = useSelector((state) => state.products);
  return (
    <div className='display-products'>
      <CardGroup className='cardWrapper container'>
        {products.map((item) => {
          return <Product key={item.id} product={item} />;
        })}
      </CardGroup>
    </div>
  );
}
