import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove, add, sumOrders } from "../redux/actions";
import soldOutImg from "../../assets/images/soldout.png";
export default function Product(props) {
  const orders = useSelector((state) => state.basket.order);
  const [qty, setQty] = useState(0);
  const limit = props.product.stock;
  const [soldOut, setSoldOut] = useState(false);
  // const [indexOfItem, setIndexOfItem] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    orders.map((item, index) => {
      if (item.id === props.product.id) {
        setQty(orders[index].quantity);
      }
      return qty;
    });
  }, []);

  return (
    <div key={props.product.id}>
      <Card body width='100%' height='200px'>
        <CardImg
          style={{ objectFit: "contain" }}
          top
          width='100%'
          src={props.product.image}
          alt='Card image cap'
        />
        <CardBody className='text-center'>
          <CardTitle style={{ color: "var(--pink)" }} tag='h4'>
            {props.product.name}
          </CardTitle>

          <CardText className='m-2' tag='h5'>
            Price: {props.product.price}€
          </CardText>
          <div className='d-flex inline-flex justify-content-center'>
            <Button
              className='col-2 button'
              onClick={() => {
                dispatch(remove(props.product.id));
                dispatch(sumOrders());
                setQty((prevQty) => prevQty - 1);
                if (qty < limit) {
                  setSoldOut(false);
                }
              }}
              disabled={qty < 1 ? true : false}
            >
              -
            </Button>
            <Input
              className='col-2 mx-2 input'
              disabled
              type='number'
              value={qty}
            />
            {soldOut ? (
              <img src={soldOutImg} alt='sold-out' id='sold-out'></img>
            ) : (
              <Button
                className='col-2 button'
                onClick={() => {
                  dispatch(
                    add(
                      props.product.id,
                      props.product.name,
                      props.product.price
                    )
                  );
                  dispatch(sumOrders());
                  setQty((prevQty) => prevQty + 1);
                  if (qty === limit - 1) {
                    setSoldOut(true);
                  }
                }}
              >
                +
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
