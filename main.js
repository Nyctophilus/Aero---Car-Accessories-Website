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
