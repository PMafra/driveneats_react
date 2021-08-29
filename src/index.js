import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const root = document.querySelector(".root");
const markedCats = [];
const dishesChosen = [];

ReactDOM.render(<App markedCats={markedCats} dishesChosen={dishesChosen}/>, root);