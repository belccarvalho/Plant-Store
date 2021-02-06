import React from "react";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <div className='container cardEmpty '>
      <h2>{props.text}</h2>
      <Link className='goShop' to='/shop'>
        Go Shopping →
      </Link>
    </div>
  );
}
