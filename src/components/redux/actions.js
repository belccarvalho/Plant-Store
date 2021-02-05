export function add(id, name, price) {
  return { type: "ADD_PRODUCT", payload: { id, name, price } };
}

export function remove(id) {
  return { type: "REM_PRODUCT", payload: { id } };
}

export function changeQty(value) {
  return {
    type: "CHANGE_QTY",
    payload: value,
  };
}

export function changeStock(value) {
  return {
    type: "CHANGE_STOCK",
    payload: value,
  };
}
export function sumOrders() {
  return {
    type: "SUM_ORDERS",
  };
}
