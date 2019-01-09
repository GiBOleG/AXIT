'use strict';

function getElements(selector, target = document) {
	const elements = target.querySelectorAll(selector);
	return Array.from(elements);
}

const menu = getElements(".menu")[0];
const menuItemsArray = getElements("li", menu);

menuItemsArray.forEach(menuitem => {
	menuitem.addEventListener("click", clickOnMenu)
});

function clickOnMenu(event) {
	console.log(event.currentTarget.innerText)
}

const feature_buttons = getElements(".feature_button");

feature_buttons.forEach(button => {
	button.addEventListener("click", tabClick)
});

function tabClick(event) {
	const tabIndex = event.currentTarget.dataset.index;
	
	getElements(".feature_button.active")[0].classList.remove("active");
	getElements(".tab-content.active")[0].classList.remove("active");
	
	getElements(".tab-content.tab-" + tabIndex)[0].classList.add("active");
	event.currentTarget.classList.add("active");
}


const menuButton = document.querySelector(".burger-btn");

menuButton.addEventListener("click", function() {
	menuButton.parentElement.classList.toggle("active");
});