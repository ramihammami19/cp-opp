class Cart {
  constructor() {
    // Data model
    this.items = [
      {
        id: 1,
        name: "Nike 2019",
        price: 259,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        name: "Adidas 2019",
        price: 359,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      },
    ];
  }

  inc(id) {
    // Increment the quantity of a specific item
    this.items[id]["quantity"]++;
  }

  dec(id) {
    // Decrement the quantity of a specific item
    if (this.items[id]["quantity"] > 1) {
      this.items[id]["quantity"]--;
    } else {
      alert("الكمية يجب أن تكون قيمة موجبة.");
    }
  }

  total_price() {
    // Calculate the total price considering the quantity
    let result = 0;
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i]["price"] * this.items[i]["quantity"];
    }
    return result;
  }

  init() {
    // Load data to the DOM
    // Load products images
    document.getElementById("nike-img").src = this.items[0]["image"];
    document.getElementById("adidas-img").src = this.items[1]["image"];

    // Load products names
    document.getElementById("nike-name").innerHTML = this.items[0]["name"];
    document.getElementById("adidas-name").innerHTML = this.items[1]["name"];

    // Load products quantity
    document.getElementById("nike-quantity").value = this.items[0]["quantity"];
    document.getElementById("adidas-quantity").value = this.items[1]["quantity"];

    // Load products prices
    document.getElementById("nike-price").innerHTML = this.items[0]["price"];
    document.getElementById("adidas-price").innerHTML = this.items[1]["price"];

    // Event listeners
    document.getElementById("nike-plus").addEventListener("click", () => {
      this.inc(0);
      this.updateQuantityAndTotalPrice(0);
    });

    document.getElementById("nike-minus").addEventListener("click", () => {
      this.dec(0);
      this.updateQuantityAndTotalPrice(0);
    });

    document.getElementById("adidas-plus").addEventListener("click", () => {
      this.inc(1);
      this.updateQuantityAndTotalPrice(1);
    });

    document.getElementById("adidas-minus").addEventListener("click", () => {
      this.dec(1);
      this.updateQuantityAndTotalPrice(1);
    });

    document.getElementById("like-1").addEventListener("click", () => {
      document.getElementById("like-1").style.color = "red";
    });

    document.getElementById("like-2").addEventListener("click", () => {
      document.getElementById("like-2").style.color = "red";
    });

    document.getElementById("total-price").addEventListener("click", () => {
      document.getElementById("total-value").innerHTML = this.total_price();
    });

    document.getElementById("delete-nike").addEventListener("click", () => {
      this.deleteItem(0);
    });

    document.getElementById("delete-adidas").addEventListener("click", () => {
      this.deleteItem(1);
    });
  }

  updateQuantityAndTotalPrice(id) {
    document.getElementById(`nike-quantity`).value = this.items[0]["quantity"];
    document.getElementById("nike-total-price").innerHTML =
      this.items[0]["price"] * this.items[0]["quantity"];

    document.getElementById(`adidas-quantity`).value = this.items[1]["quantity"];
    document.getElementById("adidas-total-price").innerHTML =
      this.items[1]["price"] * this.items[1]["quantity"];
  }

  deleteItem(id) {
    document.getElementById(`${this.items[id]["name"].toLowerCase()}`).remove();
    document.getElementById(`${this.items[id]["name"].toLowerCase()}-total`).remove();
    this.items.splice(id, 1);
    console.log(this.items);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cart = new Cart();
  cart.init();
});
