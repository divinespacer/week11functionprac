// function greet(input, time = "day") {
//   console.log(`Good ${time} ${input}`);
// }

// greet(prompt("elp"));

// let hello = function (input) {
//   console.log(`Hello ${input}`);
// };
// hello(prompt("oh hewwo"));

// let yo = input => console.log(`waddup ${input}`);
// yo(prompt("wassup cuh"));

// function area(radius) {
//   if (isNaN(radius)) {
//     elpPara.textContent += input;
//     mePara.textContent = "This aint a number";
//   } else {
//     let cArea = Math.PI * radius ** 2;
//     return cArea;
//   }
// }
// const elpPara = document.querySelector("#elp");
// console.log(elpPara);
// const mePara = document.querySelector("#me");
// console.log(mePara);

// let input = prompt("what is the radius of your circle?");
// let cArea = area(input);
// if (cArea !== undefined) {
//   elpPara.textContent += input;
//   mePara.textContent = cArea;
//   //   alert(`The area of a circle with radis ${input} is ${cArea.toFixed(2)}`);
// }

function populateList(shoppingList) {
  // 1. select and store a ref to the ul -> querySelector
  const shopList = document.querySelector(".shopping");
  console.log(shopList);
  //2. loop through the shopping list
  for (let item of shoppingList) {
    // 3. create an li element
    const thing = document.createElement("li");
    // 4. append the li to the ul
    shopList.appendChild(thing);
    //5. update the textContent of the li with array item
    thing.textContent = item;
  }
}
let myList = ["bread", "cheese", "green pepper"];
populateList(myList);

function square() {
  const shopList = document.querySelector(".shopping");
  shopList.classList.replace("circleList", "squareList");
}

square();

function img() {
  const shopCart = document.querySelector("#shoppingCart");
  //   shopCart.setAttribute(
  //     "src",
  //     "https://cdn-icons-png.flaticon.com/512/263/263142.png"
  //   );
  //   shopCart.setAttribute("alt", "shopping cart");
  //   shopCart.setAttribute("width", "50");
  //   shopCart.setAttribute("height", "50");
  shopCart.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
  shopCart.alt = "shopping cart";
  shopCart.width = "50";
  shopCart.height = "50";
}

img();
