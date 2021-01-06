export function add(name, price) {
  return { type: "ADD_PRODUCT", payload: { name, price } };
}

export function remove(name, price) {
  return { type: "REM_PRODUCT", payload: { name, price } };
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
