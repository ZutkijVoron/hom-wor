const toggleHidden = (el) => el.classList.toggle("hidden");

const munu = document.querySelector(".drop-menu");
const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", () => toggleHidden(munu));
