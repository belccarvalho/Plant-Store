import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { add, sumOrders } from "../redux/actions";
import { TiShoppingCart } from "react-icons/ti";
import soldOutImg from "../../assets/images/soldout.png";

export default function Product(props) {
  const orders = useSelector((state) => state.basket.order);
  const [qty, setQty] = useState(0);
  const [limit, setLimit] = useState(props.product.stock);
  const [soldOut, setSoldOut] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
          top
          width='100%'
          src={props.product.image}
          alt='Card image cap'
          onClick={toggle}
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
                setQty((prevQty) => prevQty - 1);
                if (qty <= limit) {
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
            {limit === 0 || soldOut ? (
              <img src={soldOutImg} alt='sold-out' id='sold-out'></img>
            ) : (
              <Button
                className='col-2 button'
                onClick={() => {
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
          <Button
            className='col-2 addCart'
            disabled={qty > 0 ? false : true}
            onClick={() => {
              dispatch(
                add(
                  props.product.id,
                  props.product.name,
                  props.product.price,
                  qty
                )
              );
              dispatch(sumOrders());
            }}
          >
            Add to Cart <TiShoppingCart />
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.product.name}</ModalHeader>
        <ModalBody>
          <img src={props.product.image} alt='plant' />
        </ModalBody>
      </Modal>
    </div>
  );
}
