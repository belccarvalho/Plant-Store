import products from "../../assets/data/products-details";
const initialState = {
  basket: { qtyItem: 0, order: [] },
  products: products,
};
const reducer = (state = initialState, action) => {
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

    /*
    case "REM_PRODUCT":
      //change just the quantity of the product in the basket order, if the product is already there, or delete it if the quantity is zero
      let isItemThere = true;
      let ItemDecreased = state.basket.order.map((item, index) => {
        if (item.title === action.payload.name) {
          item.quantity = item.quantity - 1;
        }
        if (item.quantity === 0) {
        let indexOfItem = index;
          }
        };
        return item;
      });

      //increase product from stock
      let productsStockAdded = state.products.map((product) => {
        if (product.name === action.payload.name) {
          product.stock = product.stock + 1;
        }
        return product;
      });
      return {
        ...state,
      };
      */
    default:
      return state;
  }
};

export default reducer;
