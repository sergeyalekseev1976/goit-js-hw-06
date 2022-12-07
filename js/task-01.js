// const categoryEl = document.querySelector("#categories");
// console.log("Number of categories:", categoryEl.children.length);

// const itemEl = document.querySelectorAll(".item");

// const firstTitleEl = itemEl[0].firstElementChild.textContent;
// console.log("Category:", firstTitleEl);
// const firstEl = itemEl[0].lastElementChild.children.length;
// console.log("Elements:", firstEl);

// const secondTitleEl = itemEl[1].firstElementChild.textContent;
// console.log("Category:", secondTitleEl);
// const secondEl = itemEl[1].lastElementChild.children.length;
// console.log("Elements:", secondEl);

// const lastTitleEl = itemEl[2].firstElementChild.textContent;
// console.log("Category:", lastTitleEl);
// const lastEl = itemEl[2].lastElementChild.children.length;
// console.log("Elements:", lastEl);

const listEl = document.querySelectorAll(".item");
console.log("Number of categories:", listEl.length);

listEl.forEach((element) => {
  const itemTitleEl = element.querySelector("h2");
  const itemListEl = element.querySelectorAll("li");
  console.log("Category:", itemTitleEl.textContent);
  console.log("Elements:", itemListEl.length);
});
