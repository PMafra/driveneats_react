export default function ConfirmationPage () {
    return(
        <>
            <div class="confirmation-box">

                <div class="confirm font-weight-700">
                    <p>Confirme seu pedido</p>
                </div>

                <div class="choices font-weight-400">
                    <div class="choice"><p class="food">Minha comida</p><p class="foodPrice">PRECO</p></div>
                    <div class="choice"><p class="soda">Minha bebida</p><p class="sodaPrice">PRECO</p></div>
                    <div class="choice"><p class="candy">Minha sobremesa</p><p class="candyPrice">PRECO</p></div>
                    <div class="choice font-weight-700"><p>TOTAL</p><p class="totalPrice">TOTAL</p></div>
                </div>

                <div class="buttons">
                    <button class="button-options alright">
                        <a class="font-weight-700 link" href="" target="_blanck" onclick="message()">Tudo certo, pode pedir</a>
                    </button>
                    
                    <button class="button-options cancel" onclick="canceling()">
                        <p class="font-weight-700">Cancelar</p>
                    </button>
                </div>

            </div>

            <div class="transparent-background appearback"></div>
        </>
    );
}