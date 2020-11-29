import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
// import Badge from "./components/Badge";
// import BadgeNew from "./pages/BadgeNew";
// import Badges from "./pages/Badges";
import App from "./components/App";

const container = document.getElementById("app");

// ReactDOM.render(__que__, __donde__);
// ReactDOM.render(
//   <BadgeNew
//     // firstName="Lilly"
//     // lastName="Kaufman"
//     // avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//     // jobTitle="Frontend Engineer"
//     // twitter="sparragus"
//   />,
//   container
// );

ReactDOM.render(<App />, container);
