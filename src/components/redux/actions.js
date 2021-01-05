export function add(name, price) {
  return { type: "ADD_PRODUCT", payload: {name, price}};
}

export function remove(name, price) {
  return { type: "REM_PRODUCT", payload: {name, price} };
}
