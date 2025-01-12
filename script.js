const cart = [];

function printReceipt() {}
function addItem(item) {
  let existed = false;
  if (cart.length !== 0) {
    for (let i = 0; i <= cart.length - 1; i++) {
      if (cart[i].name === item.name) {
        existed = true;
      }
    }
    if (!existed) {
      cart.push(item);
    }
  } else {
    cart.push(item);
    return;
  }
}

function removeItem() {}

const item = {
  name: "Water Bottle",
  price: 5,
  quentity: 1,
};

addItem({
  name: "Water Bottle",
  price: 5,
  quentity: 1,
});
addItem({
  name: "Water Bottle",
  price: 5,
  quentity: 1,
});
addItem({
  name: "Water Bottle",
  price: 15,
  quentity: 2,
});
addItem({
  name: "Milk",
  price: 8,
  quentity: 1,
});
addItem({
  name: "Milk",
  price: 8,
  quentity: 2,
});
console.log(cart);
