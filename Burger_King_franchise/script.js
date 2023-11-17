const orderButton = document.getElementById("orderButton");
const heading = document.getElementById("heading");
const foodCards = document.getElementById("foodCards");
const result = document.getElementById("result");
const foodImage = document.getElementById("foodImage");
const orderIdNum = document.getElementById("orderId");
const orderIDValueElement = document.getElementById("orderIdValue");
const okey = document.getElementById("okey");
const loader = document.getElementById("loader");

const getRandomTime = () => {
  return Math.floor(Math.random() * 5000) + 2000;
}; 

const getRandomOrderId = () => {
  return Math.floor(Math.random() * 1000) + 100;
}; 
orderButton.addEventListener("click", async () => {
  const checkBoxes = document.getElementsByName("foodItem");
  const selectedItems = [];

  checkBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedItems.push(checkbox.value);
    }
  });
  

  if (selectedItems.length === 0) {
    alert("Please select atleast one item...");
    return;
  }

  orderButton.disabled = true;
  result.style.display = "none";

  
  foodCards.style.display = "none";
  orderButton.style.display = "none";
  loader.style.display = "flex";
  heading.textContent = "Processing...";

  
  try {
    const promise = await getPromiseForOrder(selectedItems);
    const orderId = getRandomOrderId();
    loader.style.display = "none";
    result.style.display = "block";
    orderIDValueElement.textContent = orderId;
    heading.textContent = "Your Food";

    
    const foodToshow =
      selectedItems[Math.floor(Math.random() * selectedItems.length)];

   

    switch (foodToshow) {
      case "Burger":
        foodImage.src = "./assets/burgersa.jpeg";
        break;
      case "slaw burger":
        foodImage.src = "./assets/slaw burger.jpg";
        break;
      case "steamed cheeseburger":
        foodImage.src = "./assets/steamed cheeseburger.jpg";
        break;
      case "chimichurri burger":
        foodImage.src = "./assets/chimichurri burger.jpg";
        break;
      default:
        foodImage.src = "./assets/pizza.avif";
    }

   
    orderButton.disabled = false;
  } catch (error) {
    console.log(error);
    heading.textContent = `Sorry, can't fulfil your order...`;
    loader.style.display = "none";
  }

 
});

const getPromiseForOrder = (selectedItems) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(selectedItems);
      
    }, getRandomTime());
  });
  return promise;
};

okey.addEventListener("click", () => {
  foodCards.style.display = "flex";
  result.style.display = "none";
  heading.textContent = "Select Your favorite Food";
  orderButton.style.display = "block";
});