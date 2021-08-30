import React from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default function ConfirmationPage () {

    const allFoods = JSON.parse(localStorage.getItem("all-dishes-data"));
    const displayChoices = JSON.parse(localStorage.getItem("dishes-picked"));

    let userChoicesData = {};
    displayChoices.forEach(function(i) {userChoicesData[i] = (userChoicesData[i]||0) + 1;});
    let renderingChoices = Object.entries(userChoicesData);

    let total = 0;
    let whatsWebUrl;
    let finalData;
    let userName;
    let userAdress;

    const calculateTotal = () => {
        renderingChoices.forEach(choice => allFoods.forEach(food => food.name === choice[0] ? 
            total += (Number(food.price.replace(",",".")) * choice[1]) 
            : false));
        total = total.toFixed(2).replace(".",",");
    }

    calculateTotal();

    const createMessage = () => {
        switch (true) {
            case ((userName === "" && userAdress === "") || (userName === null && userAdress === null) || (userName === null && userAdress === "") || (userName === "" && userAdress === null)) :
                finalData = "";
                break;
            case (userName === "" || userName === null) :
                finalData = `\n\nEndereço: ${userAdress}`;
                break;
            case (userAdress === "" || userAdress === null) :
                finalData = `\n\nNome: ${userName}`;
                break;
            default :
                finalData = `\n\nNome: ${userName}\nEndereço: ${userAdress}`;
        }

        whatsWebUrl = "https://wa.me/5521972966098?text=" 
            + encodeURIComponent(
                `Olá, gostaria de fazer o pedido: ${renderingChoices.map(choice => `\n- ${choice[0]}: ${choice[1]}x`)}\nTotal: R$ ${total}${finalData}`
                );
    }

    const askingForUserInfo = () => {
        userName = prompt("Qual o seu nome?");
        userAdress = prompt("Qual o seu endereço?");
        createMessage();
        
        window.open(whatsWebUrl, "_blank") || window.location.replace(whatsWebUrl);    
    }

    return(
        <>
            <div class="confirmation-box">
                <div class="confirm font-weight-700">
                    <p>Confirme seu pedido</p>
                </div>
                <div class="choices font-weight-400">
                    {renderingChoices.map(choice => (
                        <div class="choice">
                            <p class="food">{choice[0]}</p><p class="foodPrice">{allFoods.map(value => value.name === choice[0] ? `(${choice[1]}x) ${value.price}` : "")}</p>
                        </div>))}
                    <div class="choice font-weight-700"><p>TOTAL</p><p class="totalPrice">{total}</p></div>
                </div>
                <div class="buttons">
                    <Router>
                        <button class="button-options alright">
                            <a onClick={askingForUserInfo} class="font-weight-700 link" href={whatsWebUrl} target="_blanck" onclick="message()">Tudo certo, pode pedir</a>
                        </button>
                        <Link to="/" class="button-options cancel" target="_top">
                            <p class="font-weight-700">Cancelar</p>
                        </Link>
                    </Router>
                </div>
            </div>
        </>
    );
}