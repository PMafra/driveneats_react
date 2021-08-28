export default function BottomBar ({changeColor}) {

    let buttonMessage = "";
    if (changeColor === "green-button") {
        buttonMessage = "Fechar pedido";
    } else {
        buttonMessage = "Selecione pelo menos 1 item de cada categoria para fechar o pedido";
    }

    return (
        <div class="bottom-bar">
            <button class={`bottom-bar-button ${changeColor}`} onclick="confirm()">
                <p class="font-weight-400">{buttonMessage}</p>
            </button>
        </div>
    );
}