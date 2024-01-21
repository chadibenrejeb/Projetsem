const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Whey Protein",
    price: 220,
    colors: [
      {
        code: "black",
        img: "./img/PREMIUM-WHEY-1.8KG-DOUBLE-CHOCO.jpg",
      },
      {
        code: "darkblue",
        img: "./img/71QDGZq3BJL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Mass Gainer",
    price: 189,
    colors: [
      {
        code: "lightgray",
        img: "./img/ANABOLIC-CHOCO-2-5KG.jpg",
      },
      {
        code: "green",
        img: "./img/ESSENTIAL-GAINER-VANILLA-PUDDING.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Creatine",
    price: 169,
    colors: [
      {
        code: "lightgray",
        img: "./img/creatine.jpg",
      },
      {
        code: "green",
        img: "./img/WhatsApp-Image-2023-06-07-at-15.29.44.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Vitamins",
    price: 70,
    colors: [
      {
        code: "black",
        img: "./img/evl-nutrition-vitamode-30servings-at-gymsupplementsus.com_800x.webp",
      },
      {
        code: "lightgray",
        img: "./img/Platin3.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "T-SHIRT",
    price: 60,
    colors: [
      {
        code: "gray",
        img: "./img/thumb---gym-t-shirts_304.jpg",
      },
      {
        code: "black",
        img: "./img/body_heat-back.webp",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent =   choosenProduct.price + "DT" ;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment"); 
const close = document.querySelector(".close");
const payButton = document.querySelector(".payButton");
function submitData() {
  document.querySelector(".payInput").value = '' ;
  document.querySelector(".cardInfo").value = '';
};


productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
let userInput=  document.querySelector(".payInput");
let cardInput=document.querySelector(".cardInfo"); 

document.querySelector(".payButton").onsubmit = (e) => {
    let userValid = false;
    let cardValid = false;
    if (cardInput.value !== "" && userInput.value !== "") {
        cardValid = true;
    }
    if (userValid === false || cardValid === false) {
        e.preventDefault();
    }
};  


close.addEventListener("click", () => {
  payment.style.display = "none";
});
