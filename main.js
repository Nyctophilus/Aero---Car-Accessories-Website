// change landing bg randomly
arrOfBgs = [
  "http://demo.posthemes.com/pos_aero/layout3/modules/posslideshows/images/a383a26ff82c7e70743ff1868b4730717083a56e_1.jpg",
  "http://demo.posthemes.com/pos_aero/layout3/modules/posslideshows/images/429a8421abc32f420d024a690c7ca004340eade5_2.jpg",
  "http://demo.posthemes.com/pos_aero/layout3/modules/posslideshows/images/1bd5364ecde77c8a9f166c7d0420c216ef41df9f_3.jpg",
];
changeBg();
function changeBg() {
  setInterval(() => {
    document.querySelector(
      "main .landing-page"
    ).style.backgroundImage = `url(${
      arrOfBgs[Math.trunc(Math.random() * arrOfBgs.length)]
    })`;
  }, 10000);
}

// header icons clicks
let enDiv = document.querySelector(
  "header .container > div:nth-child(1) div:nth-child(1)"
);

let usdDiv = document.querySelector(
  "header .container > div:nth-child(1) > div:nth-child(2) "
);

enDiv.onclick = () => {
  document
    .querySelector(
      "header .container > div:nth-child(1) > div:nth-child(1) .pop"
    )
    .classList.toggle("active");
};

usdDiv.onclick = () => {
  document
    .querySelector(
      "header .container > div:nth-child(1) > div:nth-child(2) .pop"
    )
    .classList.toggle("active");
};

// Cart click

document.querySelector(
  "header > div > div:nth-child(3) > div:nth-child(1)"
).onclick = () => {
  document
    .querySelector(".pop-cart")
    .classList.toggle("active");
};

// menu click
document.querySelector(".hamburger").onclick = () => {
  document
    .querySelector(".hamburger .pop")
    .classList.toggle("active");
};

// filtering Catergory products
const lis = document.querySelectorAll(".category .taps li");
const products = document.querySelectorAll(
  ".category .products .product"
);

lis.forEach((tap) => {
  tap.onclick = () => {
    console.log(tap.dataset.filter);
    hideAllProducts();
    showSelectedProducts(tap.dataset.filter);
  };
});

function hideAllProducts() {
  products.forEach((p) => {
    p.style.display = `none`;
  });
}

function showSelectedProducts(tag) {
  products.forEach((p) => {
    if (p.dataset.cat.split(" ").includes(tag))
      p.style.display = `initial`;
  });
}
