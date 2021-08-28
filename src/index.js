import ReactDOM from "react-dom";
import App from "./App";

const root = document.querySelector(".root");
const markedCats = [];

ReactDOM.render(<App markedCats={markedCats}/>, root);