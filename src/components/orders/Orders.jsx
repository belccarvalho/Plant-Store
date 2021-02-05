import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

export default function Orders() {
  const orders = useSelector((state) => state.basket.order);
  const total = useSelector((state) => state.basket.total);
  // const [isEmpty, setIsEmpty] = useState(false);

  // useEffect(() => {
  //   if (total !== 0) {
  //     setIsEmpty(true);
  //   }
  // }, []);

  return total ? (
    <div>
      <Table className='d-flex justify-content-center mt-5'>
        <thead style={{ color: "rgb(214,131,141)" }}>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}€</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className='sum'>{total}€</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  ) : (
    <div>
      <h2 className='container cardEmpty'>Your Cart is empty</h2>
      <Link className='goShop' to='/shop'>
        See our product
      </Link>
    </div>
  );
}
