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
    setActiveTap(tap);
    hideAllProducts();
    showSelectedProducts(tap.dataset.filter);
  };
});

function setActiveTap(activeTap) {
  lis.forEach((li) => {
    li.classList.remove("active");
    activeTap.classList.add("active");
  });
}

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

// Expandable Email input

const mailInput = document.querySelector(
  ".sub .subcribe input"
);
const mailBtn = document.querySelector(".sub .subcribe a");

mailBtn.onclick = () => {
  // mailInput.style.width = `5%`;
  // mailBtn.style.transform = `translateX(25px)`;

  mailBtn.classList.toggle("expand");
  mailInput.classList.toggle("expand");
};

// scrollTo top Sticky btn
const topBtn = document.getElementById("sticky-up");

window.addEventListener("scroll", () => {
  window.scrollY > 500
    ? (topBtn.style.opacity = `1`)
    : (topBtn.style.opacity = `0`);
});
topBtn.onclick = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};
