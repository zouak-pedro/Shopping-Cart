const cart = [];

function printReceipt() {
  let total_Receipt = 0;
  console.log("Receipt");
  cart.forEach((item) => {
    console.log(
      `${item.name} X ${item.quantity} = ${item.quantity * item.price}`
    );
    total_Receipt = total_Receipt + item.quantity * item.price;
  });
  console.log("-------------------------");
  console.log(`Total: ${total_Receipt}`);
}
function addItem(item) {
  let existed = false;
  if (cart.length !== 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        existed = true;
        cart[i].quantity = cart[i].quantity + item.quantity;
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

function removeItem(name) {
  for (let i = 0; i < cart.length; i++) {
    console.log[i];
    if (cart[i].name == name) {
      cart[i].quantity = cart[i].quantity - 1;
      if (cart[i].quantity <= 0) {
        cart.pop(i);
      }
    }
  }
}
addItem({ name: "Milk", price: 5, quantity: 1 });
addItem({ name: "Milk", price: 5, quantity: 1 });

addItem({ name: "Yogurt", price: 10, quantity: 1 });
addItem({ name: "Yogurt", price: 10, quantity: 1 });
addItem({ name: "Yogurt", price: 10, quantity: 1 });

printReceipt();

removeItem("Milk");
removeItem("Yogurt");

printReceipt();
