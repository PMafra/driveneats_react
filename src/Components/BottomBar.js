export default function BottomBar ({changeColor}) {
    return (
        <div class="bottom-bar">
            <button class={`bottom-bar-button ${changeColor}`} onclick="confirm()">
                <p class="font-weight-400">Selecione pelo menos 1 item de cada<br /> categoria para fechar o pedido</p>
            </button>
        </div>
    );
}