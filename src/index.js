import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
import header from "./pages/header";
import "./styles/home.css";
import "./styles/header.css";


const homeButton = document.querySelector("#header-logo");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-web");

home();
header();

console.log("index.js is running!");