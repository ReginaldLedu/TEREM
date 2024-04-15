const input1 = document.querySelector(".form__input1");
const input2 = document.querySelector(".form__input2");
const select1 = document.getElementById("first");
const select2 = document.getElementById("second");
const select3 = document.getElementById("third");
const select4 = document.getElementById("fourth");
const select5 = document.getElementById("fifth");

input1.addEventListener("change", e => {
	document.querySelector(".request__input1_value").textContent = e.target.value;
});
input2.addEventListener("change", e => {
	document.querySelector(".request__input2_value").textContent = e.target.value;
});
select1.addEventListener("change", e => {
	document.querySelector(".request__select1_value").textContent =
		e.target.value;
});
select2.addEventListener("change", e => {
	document.querySelector(".request__select2_value").textContent =
		e.target.value;
});
select3.addEventListener("change", e => {
	document.querySelector(".request__select3_value").textContent =
		e.target.value;
});
select4.addEventListener("change", e => {
	document.querySelector(".request__select4_value").textContent =
		e.target.value;
});

select5.addEventListener("change", e => {
	document.querySelector(".request__select5_value").textContent =
		e.target.value;
});

document.querySelector("form").onsubmit = async e => {
	e.preventDefault();
	let response = await fetch("http://localhost:3000/user-forms", {
		method: "POST",
		body: JSON.stringify({
			input1: input1.value,
			input2: input2.value,
			select1: select1.value,
			select2: select2.value,
			select3: select3.value,
			select4: select4.value,
			select5: select5.value,
		}),
	});
	let result = await response.text();
	alert(result);
};
