import React from "react";
import ConfirmationPage from "./ConfirmationPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                <Link to="/confirmation-page" class={`bottom-bar-button ${changeColor}`} onclick="confirm()">
                    <p class="font-weight-400">{buttonMessage}</p>
                </Link>
                <Switch>
                    <Route path="/confirmation-page">
                        <ConfirmationPage />
                    </Route>
                </Switch>
            </Router>
        </div>
        
    );
}