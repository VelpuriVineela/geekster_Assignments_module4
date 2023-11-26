class Product {
    constructor(name, price, stockQuantity) {
      this.name = name;
      this.price = price;
      this.stockQuantity = stockQuantity;
    }
    getPrice() {
      return this.price;
    }
  }
  
 
  
  class Customer {
    constructor(name, email, shoppingCart) {
      this.name = name;
      this.email = email;
      this.shoppingCart = shoppingCart;
    }
  }
  
  
  class ShoppingCart {
    constructor() {
      this.cartItems = [];
    }
  
    addProduct(product, quantity) {
      if (product.stockQuantity >= quantity) {
        this.cartItems.push({
          product,
          quantity,
        });
        
        product.stockQuantity -= quantity;
        console.log(`${quantity} ${product.name} added`);
      } else {
        console.log(`Sorry, ${product.name} is out of stock`);
      }
    }
    getCart() {
      return this.cartItems;
    }
    calculateTotalPrice() {
      
      return this.cartItems.reduce(
        (total, cartItem) =>
          (total += cartItem.quantity * cartItem.product.getPrice()),
        0
      );
    }
    checkout() {
      const totalPrice = this.calculateTotalPrice();
      console.log("Total Price", totalPrice);
      this.cartItems = [];
    }
  
    
  }
  
  
  
  const earpod = new Product("Earpod", 5000, 6);
  const mobileCover = new Product("Mobile Cover", 2000, 8);
  
  
  const customer1 = new Customer("Ramesh", "ramesh@gmail.com", new ShoppingCart());
  customer1.shoppingCart.addProduct(mobileCover, 2);
  customer1.shoppingCart.addProduct(earpod, 1);
  customer1.shoppingCart.checkout();