import React from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default function BottomBar ({changeColor}) {

    let buttonMessage = "";
    if (changeColor === "green-button") {
        buttonMessage = "Fechar pedido";
    } else {
        buttonMessage = "Selecione pelo menos 1 item de cada categoria para fechar o pedido";
    }

    return (
        <div class="bottom-bar">
            <Router>
                <Link to="/ConfirmationPage" class={`bottom-bar-button ${changeColor} ${changeColor === "" ? "disabled-link" : ""}`} target="_top" >
                    <p class="font-weight-400">{buttonMessage}</p>
                </Link>
            </Router>
        </div>
    );
}