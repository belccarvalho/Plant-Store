import React from "react";
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
// import { useSelector } from "react-redux";
export default function Product(props) {
  // const ordersDone = useSelector((state) => {
  //   state.basket.order;
  // });
  // const products = useSelector((state) => {
  //   state.products;
  // });
  const dispatch = useDispatch();
  // defining quantity of product ordered to display it
  // let quantityOfThisProduct = ordersDone.map((item) => {
  //   if (item.title === products.name) {
  //     return item.quantity;
  //   }
  // });

  return (
    <div key={props.product.id}>
      <Card body width='100%' height='200px'>
        <CardImg
          style={{ objectFit: "contain" }}
          top
          width='100%'
          height='300px'
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
              }}
            >
              -
            </Button>
            <Input
              className='col-2 mx-2 text-center'
              disabled
              type='number'
              // value={}
            />
            <Button
              className='col-2 button'
              onClick={() => {
                dispatch(add(props.product.name, props.product.price));
              }}
            >
              +
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
