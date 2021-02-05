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
import soldOutImg from "../../assets/images/soldout.png";
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
                console.log("soldout", soldOut);
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
                  dispatch(add(props.product.name, props.product.price));
                  setQty((prevQty) => prevQty + 1);
                  console.log("soldout", soldOut);
                  if (qty === limit - 1) {
                    setSoldOut(true);
                  }
                }}
                // disabled={qty === limit ? true : false}
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
