const btn1 = document.querySelector(".btn__yellow");
const btn2 = document.querySelector(".btn__green");
const title = document.querySelector(".block_1");
const titleHideSwitch = () => {
	title.classList.toggle("hidden");
};
const middle2ndRow = document.querySelector(".block_3");
const left2ndRow = document.querySelector(".block_2");
const pop_up = document.querySelector(".pop_up");
let toggled = false;
const reverseOrder = () => {
	toggled = !toggled;
	if (toggled === true) {
		middle2ndRow.style["grid-column"] = "1 / 3";
		left2ndRow.style["grid-column"] = "3 / 5";
	} else {
		middle2ndRow.style["grid-column"] = "3 / 5";
		left2ndRow.style["grid-column"] = "1 / 3";
	}
};
const popUpShow = () => {
	setTimeout(() => pop_up.classList.add("show"), 1000);
	setTimeout(() => pop_up.classList.remove("show"), 3000);
};

btn1.addEventListener("click", titleHideSwitch);
btn2.addEventListener("click", reverseOrder);
document.addEventListener("DOMContentLoaded", popUpShow);
