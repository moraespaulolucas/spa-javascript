// import Text from "./components/Container";

document.querySelector("#root").innerHTML = `
    <div>
        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <h3>Hello world</h3>
        <p style="background-color: red;">Hello world</p>
    </div>
`;

const a = document.createElement("a");

a.innerText = "a buttom";

const styledA = `
    color: white;
    background-color: blue;
`;

a.style.cssText = styledA;

document.body.append(a);
