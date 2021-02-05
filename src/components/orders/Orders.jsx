import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

export default function Orders() {
  const [total, setTotal] = useState([]);
  const orders = useSelector((state) => state.basket.order);

  useEffect(() => {
    let partialSum;
    let sum = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    orders.map((item) => {
      partialSum = item.price * item.quantity;
      sum = [...sum, partialSum];
      return sum;
    });
    setTotal(sum.reduce(reducer));
    return total;
  }, []);

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
              <td>{total}€</td>
            </tr>
          </tfoot>
        </div>
      </Table>
    </div>
  );
}
