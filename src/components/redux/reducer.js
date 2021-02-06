import products from "../../assets/data/products-details";
import { sumOrders } from "./actions";
const initialState = {
  basket: { qtyItem: 0, order: [], total: 0 },
  products: products,
};
const reducer = (state = initialState, action) => {
  // const stockOfProduct = action.payload.stock;
  switch (action.type) {
    case "ADD_PRODUCT":
      //create object with some data from product in order to add to the basket order
      let newItem = {
        id: action.payload.id,
        title: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.qty,
      };

      //decrease product from stock
      let productsStockUpdated = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.stock = product.stock - action.payload.qty;
        }
        return product;
      });
      state.basket.order.push(newItem);
      return {
        ...state,
        basket: {
          order: state.basket.order,
          qtyItem: state.basket.order.length,
        },
        products: [...productsStockUpdated],
      };

    case "REM_PRODUCT":
      //change just the quantity of the product in the basket order, if the product is already there, or delete it if the quantity is zero
      state.basket.order.map((item, index) => {
        // let indexOfItem = -1;
        if (item.id === action.payload.id) {
          item.quantity--;

          if (item.quantity === 0) {
            let indexOfItem = index;
            if (indexOfItem !== -1) {
              state.basket.order.splice(indexOfItem, 1);
              state.basket.qtyItem = state.basket.order.length;
            }
          }
        }
        sumOrders();
        return item;
      });

      //increase product from stock
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.stock = product.stock + 1;
        }
        return product;
      });
      return state;

    case "SUM_ORDERS":
      let partialSum;
      let sum = [];
      state.basket.total = 0;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      state.basket.order.map((item) => {
        partialSum = item.price * item.quantity;
        sum = [...sum, partialSum];
        return sum;
      });
      if (state.basket.order.length > 0) {
        state.basket.total = sum.reduce(reducer);
      }
      return state;

    case "DEL_ITEM":
      state.basket.order.splice(action.payload, 1);
      sumOrders();
      //increase product in stock
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.stock = product.stock + action.payload.qty;
        }
        return product;
      });
      return {
        ...state,
        basket: {
          order: state.basket.order,
          qtyItem: state.basket.order.length,
          total: state.basket.total,
        },
      };

    default:
      return state;
  }
};

export default reducer;
