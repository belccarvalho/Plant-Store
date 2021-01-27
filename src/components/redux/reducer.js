const initialState = {
  basket: { qtyItem: 0, order: [] },
  products: [
    {
      id: 0,
      name: "Chinese Money",
      price: 9,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/Pilea_2-600x840.jpg",
      stock: 9,
    },
    {
      id: 1,
      name: "Jesmonite Planter",
      price: 9,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/20201022-_DSC0635-1.jpg",
      stock: 7,
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      price: 15,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2018/09/20200729-DSC_2666.jpg",
      stock: 15,
    },
    {
      id: 3,
      name: "Ludisia Discolor",
      price: 16,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/Ludisia_1-600x840.jpg",
      stock: 8,
    },
    {
      id: 4,
      name: "Hoya Lanceolata",
      price: 25,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/04/20200409-DSC_4987.jpg",
      stock: 13,
    },
    {
      id: 5,
      name: "Calathea Vittata",
      price: 16,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/05/20200528-DSC_7917.jpg",
      stock: 12,
    },
    {
      id: 6,
      name: "Ph. Birkin",
      price: 17,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/10/20200423-DSC_5998.jpg",
      stock: 10,
    },
    {
      id: 7,
      name: "Korbmarante",
      price: 18,
      image:
        "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2018/09/Plant-Circle_28-02-20_Photo-by-Savannah-van-der-Niet-5.jpg",
      stock: 4,
    },
  ],
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
