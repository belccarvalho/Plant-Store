import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { remove, add } from "../redux/actions";
import "./products.css";
import soldOut from "../../images/sold-out.svg";
// import { useSelector } from "react-redux";
export default function Product(props) {
  const [qty, setQty] = useState(0);
  const [limit, setLimit] = useState(props.product.stock);
  const [soldOut, setSoldOut] = useState(false);

  const dispatch = useDispatch();

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
                dispatch(remove(props.product.name));
                setQty((prevQty) => prevQty - 1);
              }}
              disabled={qty < 1 ? true : false}
            >
              -
            </Button>
            <Input
              className='col-2 mx-2 text-center'
              disabled
              type='number'
              value={qty}
            />
            <Button
              className='col-2 button'
              onClick={() => {
                dispatch(add(props.product.name, props.product.price));
                setQty((prevQty) => prevQty + 1);
                console.log(limit);
              }}
              disabled={qty === limit ? true : false}
              // {if (qty === limit) => {setSoldOut(true)
              // }}
            >
              +
            </Button>
            <img src={soldOut} alt='sold out' id='soldout'></img>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
