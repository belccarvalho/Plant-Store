import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
let values;
export default function Orders() {
  const [total, setTotal] = useState(0);
  const orders = useSelector((state) => state.basket.order);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // useEffect =
  //   (() => {
  //     orders.map((item) => {
  //       let value = item.price * item.quantity;
  //       let values = [...value];
  //       return values;
  //     });
  //     values.reduce(reducer);
  //     setTotal(values);
  //     return total;
  //   },
  //   []);

  // total = orders.map((item) => {
  //   total = +item.price * item.quantity;
  //   return total;
  // });
  return (
    <div>
      <Table className='d-flex justify-content-center mt-5'>
        <div>
          <thead style={{ color: "rgb(214,131,141)" }}>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price * item.quantity}€</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>{total}</td>
            </tr>
          </tfoot>
        </div>
      </Table>
    </div>
  );
}
