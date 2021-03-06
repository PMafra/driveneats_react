import React from "react";

export default function MainPage ({childToParent, sonToParent, markedCats, dishesChosen}) {

    const categories = [
        {categoryTitle: "Primeiro, seu prato", categoryType: "main-course"},
        {categoryTitle: "Agora, sua bebida", categoryType: "drinks"},
        {categoryTitle: "Por fim, sua sobremesa", categoryType: "deserts"},
        {categoryTitle: "Apenas um teste de adicionar categorias e pratos novos", categoryType: "teste"}
    ];

    const dishes = [
        {type: "main-course", srcId: "frangoBatata", name: "Frango com batata", description: "200g de frango acompanhado de batata", price: "22,70"},
        {type: "main-course", srcId: "peixe", name: "Truta com arroz", description: "Truta acompanhada de arroz integral e salada", price: "37,10"},
        {type: "main-course", srcId: "picanha", name: "Picanha e fritas", description: "300g de picanha com uma porção de fritas", price: "35,90"},
        {type: "main-course", srcId: "estrogonofe-de-carne", name: "Strogonoff de carne", description: "Strogonoff com arroz e batata palha", price: "26,95"},
        {type: "drinks", srcId: "suco", name: "Suco de laranja", description: "Suco natural feito com 7 laranjas maduras", price: "7,55"},
        {type: "drinks", srcId: "mate", name: "Mate da casa", description: "Mate feito na casa com limão opcional", price: "4,30"},
        {type: "drinks", srcId: "vitamina", name: "Vitamina de banana", description: "Batida com leite, banana e aveia opcional", price: "6,90"},
        {type: "drinks", srcId: "coca zero", name: "Coca cola zero", description: "Latinha de coca zero 350ml", price: "3,95"},
        {type: "deserts", srcId: "brownie", name: "Brownie sem açucar", description: "Brownie de chocolate feito sem açucar", price: "14,15"},
        {type: "deserts", srcId: "panqueca", name: "Panquecas de whey", description: "Panquecas feitas com whey, mel e morangos", price: "15,00"},
        {type: "deserts", srcId: "torta", name: "Torta de limão", description: "Fatia de deliciosa torta de limão", price: "12,80"},
        {type: "deserts", srcId: "pudim", name: "Pudim fit", description: "Pudim fit feito sem açucar", price: "10,00"},
        {type: "teste", srcId: "pudim", name: "Deu certo!", description: "Pudim fit feito sem açucar", price: "10,00"},
        {type: "teste", srcId: "pe-de-galinha", name: "Deu certo demais!", description: "Panquecas feitas com whey, mel e morangos", price: "15,00"}
    ]

    const objectOfIds = {};
    for (let i = 0; i < dishes.length; i++) {
        objectOfIds[i] = "";
    }
    
    const [checkList, setCheckList] = React.useState(objectOfIds);
    const [counterHiding, setCounterHiding] = React.useState(objectOfIds);
    const [quantity, SetQuantity] = React.useState(objectOfIds);
    let greenButton;

    localStorage.setItem("all-dishes-data", JSON.stringify(dishes));

    function testEnd () {
        let diffMarkedCatsLength = markedCats.filter(function(val, i, arr) { 
            return arr.indexOf(val) === i;
        }).length;

        if (diffMarkedCatsLength === categories.length) {
            greenButton = "green-button";
            childToParent(greenButton);
        } else {
            greenButton = "";
            childToParent(greenButton);
        }
    }

    function changeQuantity (upOrDown, id, name) {
        let newQuantity = {...quantity};

        if (upOrDown === "up") {
            if (newQuantity[id] === "") {
                newQuantity[id] = 1;
            }
            newQuantity[id] += 1;
            SetQuantity(newQuantity);

            dishesChosen.push(name);
        }
        if (upOrDown === "down") {
            changeQuantity.called = true;
            if (newQuantity[id] === "") {
                newQuantity[id] = 1;
            }
            if (quantity[id] > 1) {
                newQuantity[id] -= 1;
                SetQuantity(newQuantity);
            }

            dishesChosen.splice(dishesChosen.findIndex(a => a === name), 1);
        }

        sonToParent([...dishesChosen]);
    }
    
    function selection (id, catId, name) {
        let newCheckList = {...checkList};
        let newCounterHiding = {...counterHiding};

        if (checkList[id] === "") {
            newCheckList[id] = "green-border";
            setCheckList(newCheckList);
            newCounterHiding[id] = "re-vanish";
            setCounterHiding(newCounterHiding);
            
            quantity[id] = 1;

            markedCats.push(catId);
            dishesChosen.push(name);

        } else {
            if (quantity[id] === 1 && changeQuantity.called === true) {
                newCheckList[id] = "";
                setCheckList(newCheckList);
                newCounterHiding[id] = "";
                setCounterHiding(newCounterHiding);

                markedCats.splice(markedCats.findIndex(a => a === catId), 1);
            }
        }

        testEnd();
        sonToParent([...dishesChosen]);
    }

    return (
        <div class="container">
            {categories.map((category, catIndex) => 
                <div class="content" key={`c${catIndex}`}>
                    <div class="top-content-text">
                        <p class="font-weight-400 font-righteous">{category.categoryTitle}</p>
                    </div>
                    <div class="content-options">
                        {dishes.map((dish, dishIndex) => 
                            dish.type === category.categoryType ? (
                                <div class={`option-box ${dish.type} ${checkList[dishIndex]}`} key={`d${dishIndex}`} onClick={() => selection(dishIndex, catIndex, dish.name)}>
                                    <img src={`imagens/${dish.srcId}.jpg`} />
                                    <div class="menu">
                                        <p class="name">{dish.name}</p>
                                        <p class="description">{dish.description}</p>
                                        <p class="price">{dish.price}<span class={`vanish ${counterHiding[dishIndex]}`}><ion-icon name="add-circle" class="check green" onClick={() => changeQuantity("up", dishIndex, dish.name)}></ion-icon>{quantity[dishIndex]}<ion-icon name="remove-circle" class="check red" onClick={() => changeQuantity("down", dishIndex, dish.name)}></ion-icon></span></p>
                                    </div>
                                </div>
                            )
                            : (<></>)
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}