import ReactDOM from "react-dom";
import App from "./App";

const root = document.querySelector(".root");
const markedCats = [];
const dishesChosen = [];

ReactDOM.render(<App markedCats={markedCats} dishesChosen={dishesChosen}/>, root);