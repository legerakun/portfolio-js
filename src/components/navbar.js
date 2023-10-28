import { addElement } from "./utils.js";
import { Home } from "../home.js";
import { About } from "../about.js";
import { Projects } from "../projects.js";

function changeContainer(index) {
	const intervalContainer = setInterval(() => {
		const container = document.querySelector("container");

		const containerOpacity = Number(container.style.opacity);

		if (containerOpacity > 0.0) {
			container.style.opacity = containerOpacity - 0.03;
		} else {
			clearInterval(intervalContainer);
		}
	}, 10)

	setTimeout(() => {
		const pages = [
			Home,
			About,
			Projects
		]

		pages[index]();
	}, 300);
}

export function Navbar() {
	const navbar = addElement("navbar", document.body);
	const line = addElement("hr", document.body);

	const logo = addElement("img", navbar);
	logo.className = "logo";
	logo.src = "./src/assets/skills/skill-javascript.svg";
	logo.addEventListener("click", function() {
		if (history.state.page != 0) {
			history.pushState({page: 0}, "");
			changeContainer(0);
		}
	}, false);

	const navbarMargin = addElement("navbar-margin", navbar);

	const home = addElement("navbar-item", navbar);
	home.en = "Home";
	home.ru = "Главная";
	home.addEventListener("click", function() {
		if (history.state.page != 0) {
			history.pushState({page: 0}, "");
			changeContainer(0);
		}
	}, false);

	const about = addElement("navbar-item", navbar);
	about.en = "About";
	about.ru = "Автор";
	about.addEventListener("click", function() {
		if (history.state.page != 1) {
			history.pushState({page: 1}, "");
			changeContainer(1);
		}
	}, false);

	const projects = addElement("navbar-item", navbar);
	projects.en = "Projects";
	projects.ru = "Проекты";
	projects.addEventListener("click", function() {
		if (history.state.page != 2) {
			history.pushState({page: 2}, "");
			changeContainer(2);
		}
	}, false);
}

