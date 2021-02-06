import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { TiShoppingCart } from "react-icons/ti";
import { RiPlantFill } from "react-icons/ri";
import Main from "./Main";
import Banner from "./Banner";
import ListOfProducts from "./products/ListOfProducts.jsx";
import Cart from "./Cart.jsx";
import Buy from "./Buy";
import { useSelector } from "react-redux";

export default function NavbarDisplay() {
  const basketCounter = useSelector((state) => state.basket.qtyItem);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar className='navbar' light expand='md'>
        <NavbarBrand className='col-3' href='/home'>
          <RiPlantFill
            style={{ color: "var(--pink)", width: "4rem", height: "4rem" }}
          />
          {"  "}
          <p>Online-Shop</p>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=' col-10' navbar>
            <NavItem tag='h4'>
              <Link className='nav-link' to='/home'>
                Home
              </Link>
            </NavItem>
            <NavItem tag='h4'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </NavItem>
          </Nav>
          <Link className='col-2 nav-link basket' to='/cart'>
            <span>
              <TiShoppingCart />
            </span>
            <p>{basketCounter}</p>
          </Link>
        </Collapse>
      </Navbar>
      <Main />
      <Switch>
        <Route path='/home'>
          <Banner text='Welcome, We are happy you are here =)'></Banner>
        </Route>
        <Route path='/shop'>
          <ListOfProducts />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/contact'></Route>
        <Route path='/buy'>
          <Buy />
        </Route>
      </Switch>
    </Router>
  );
}
