import router from "./router.js";

// const indexPage = (props) => `
// 	<p style='color: ${props.color}'>${props.text}</p>
// `;

// document.querySelector("#root").innerHTML = indexPage({
// 	text: "it's working",
// 	color: "red",
// });

document.addEventListener("DOMContentLoaded", () => {
	router();
});
