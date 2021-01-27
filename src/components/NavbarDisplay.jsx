import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { TiShoppingCart } from "react-icons/ti";
import { RiPlantFill } from "react-icons/ri";
import ListOfProducts from "./products/ListOfProducts";
import Orders from "./orders/orders";
import Home from "./home";
import { useSelector } from "react-redux";

export default function NavbarDisplay() {
  const basketCounter = useSelector((state) => state.basket.qtyItem);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      {/* Define navbar */}
      <Navbar
        className='navbar p-3S'
        style={{
          backgroundImage:
            "https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          backgroundColor: "rgb(183,200,151)",
        }}
        light
        expand='md'
      >
        <NavbarBrand
          href='/'
          style={{
            color: "var(--pink)",
            fontSize: "2rem",
            marginBottom: "1em",
          }}
        >
          My Online Shop
          <RiPlantFill style={{ width: "4rem", height: "4rem" }} />{" "}
        </NavbarBrand>
        <NavbarToggler
          style={{ border: "2px solid var(--pink)" }}
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem tag='h3'>
              <Link className='nav-link' to='/home'>
                Home
              </Link>
            </NavItem>
            <NavItem tag='h3'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
            </NavItem>
            <NavItem tag='h3'>
              <Link className='nav-link' to='/orders'>
                Orders
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link
              style={{
                color: "rgba(0,0,0,.6)",
                fontSize: "2rem",
                marginBottom: "1em",
              }}
              className='nav-link'
              to='/orders'
            >
              {basketCounter}
              <TiShoppingCart
                style={{
                  width: "4rem",
                  height: "4rem",
                  color: "var(--pink)",
                }}
              />
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/shop'>
          <ListOfProducts />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}
