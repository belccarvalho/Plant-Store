import products from "../../assets/data/products-details";
const initialState = {
  basket: { qtyItem: 0, order: [] },
  products: products,
};
const reducer = (state = initialState, action) => {
  let indexOfItem = -1;
  // const stockOfProduct = action.payload.stock;
  switch (action.type) {
    case "ADD_PRODUCT":
      //create object with some data from product in order to add to the basket order
      let newItem = {
        title: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      };
      //change just the quantity of the product in the basket order, if the product is already there
      let itemExist = false;
      let itemIncreased = state.basket.order.map((item) => {
        if (item.title === action.payload.name) {
          itemExist = true;
          item.quantity++;
        }
        return item;
      });
      //decrease product from stock
      let productsStockUpdated = state.products.map((product) => {
        if (product.name === action.payload.name) {
          product.stock--;
        }
        return product;
      });
      //add the newItem to the order
      if (!itemExist) {
        return {
          ...state,
          basket: {
            qtyItem: state.basket.order.length + 1,
            order: [...state.basket.order, newItem],
          },
        };
      }
      return {
        ...state,
        basket: {
          qtyItem: state.basket.order.length,
          order: [...itemIncreased],
        },
        products: [...productsStockUpdated],
      };

    case "REM_PRODUCT":
      //change just the quantity of the product in the basket order, if the product is already there, or delete it if the quantity is zero
      state.basket.order.map((item, index) => {
        if (item.title === action.payload.name) {
          item.quantity--;

          if (item.quantity === 0) {
            let indexOfItem = index;
            if (indexOfItem !== -1) {
              state.basket.order.splice(indexOfItem, 1);
            }
          }
        }
        return item;
      });

      //increase product from stock
      state.products.map((product) => {
        if (product.name === action.payload.name) {
          product.stock = product.stock + 1;
        }
        return product;
      });
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
