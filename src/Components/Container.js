import React from "react";

export default function Container ({childToParent, markedCats}) {

    const categories = [
        {categoryTitle: "Primeiro, seu prato", categoryType: "main-course"},
        {categoryTitle: "Agora, sua bebida", categoryType: "drinks"},
        {categoryTitle: "Por fim, sua sobremesa", categoryType: "deserts"},
        {categoryTitle: "Apenas um teste de adicionar categorias e pratos novos", categoryType: "teste"}
    ];

    let categoriesTypes = {};
    for (let i = 0; i < categories.length; i++) {
        categoriesTypes[categories[i].categoryType.replace("-","")] = categories[i].categoryType;
    }

    const dishes = [
        {type: categoriesTypes.maincourse, srcId: "frangoBatata", name: "Frango com batata", description: "200g de frango acompanhado de batata", price: "22,70"},
        {type: categoriesTypes.maincourse, srcId: "peixe", name: "Truta com arroz", description: "Truta acompanhada de arroz integral e salada", price: "37,10"},
        {type: categoriesTypes.maincourse, srcId: "picanha", name: "Picanha e fritas", description: "300g de picanha com uma porção de fritas", price: "35,90"},
        {type: categoriesTypes.maincourse, srcId: "estrogonofe-de-carne", name: "Strogonoff de carne", description: "Strogonoff com arroz e batata palha", price: "26,95"},
        {type: categoriesTypes.drinks, srcId: "suco", name: "Suco de laranja", description: "Suco natural feito com 7 laranjas maduras", price: "7,55"},
        {type: categoriesTypes.drinks, srcId: "mate", name: "Mate da casa", description: "Mate feito na casa com limão opcional", price: "4,30"},
        {type: categoriesTypes.drinks, srcId: "vitamina", name: "Vitamina de banana", description: "Batida com leite, banana e aveia opcional", price: "6,90"},
        {type: categoriesTypes.drinks, srcId: "coca zero", name: "Coca cola zero", description: "Latinha de coca zero 350ml", price: "3,95"},
        {type: categoriesTypes.deserts, srcId: "brownie", name: "Brownie sem açucar", description: "Brownie de chocolate feito sem açucar", price: "14,15"},
        {type: categoriesTypes.deserts, srcId: "panqueca", name: "Panquecas de whey", description: "Panquecas feitas com whey, mel e morangos", price: "15,00"},
        {type: categoriesTypes.deserts, srcId: "torta", name: "Torta de limão", description: "Fatia de deliciosa torta de limão", price: "12,80"},
        {type: categoriesTypes.deserts, srcId: "pudim", name: "Pudim fit", description: "Pudim fit feito sem açucar", price: "10,00"},
        {type: categoriesTypes.teste, srcId: "pudim", name: "Deu certo!", description: "Pudim fit feito sem açucar", price: "100000,00"},
        {type: categoriesTypes.teste, srcId: "panqueca", name: "Deu certo demais!", description: "Panquecas feitas com whey, mel e morangos", price: "150000,00"}
    ]

    const objectOfIds = {};
    for (let i = 0; i < dishes.length; i++) {
        objectOfIds[i] = "";
    }

    const [checkList, setCheckList] = React.useState(objectOfIds);

    const [hiding, setHiding] = React.useState(objectOfIds);
    
    function selection (id, type, catId) {
        let newCheckList = {...checkList};
        let newHiding = {...hiding};

        if (checkList[id] === "") {
        
            newCheckList[id] = "green-border";
            setCheckList(newCheckList);

            newHiding[id] = "re-vanish";
            setHiding(newHiding);
            
            quantity[id] = 1;

            markedCats.push(catId);
            console.log(markedCats);


        } else {
            if (quantity[id] === 1 && changeQuantity.called === true) {
                newCheckList[id] = "";
                setCheckList(newCheckList);
                newHiding[id] = "";
                setHiding(newHiding);

                markedCats.splice(markedCats.findIndex(a => a === catId), 1);
                console.log(markedCats);
            }
        }

        testEnd();
    }

    const [quantity, SetQuantity] = React.useState(objectOfIds);

    function changeQuantity (upOrDown, id) {
        let newQuantity = {...quantity};

        if (upOrDown === "up") {
            if (newQuantity[id] === "") {
                newQuantity[id] = 1;
            }
            newQuantity[id] += 1;
            SetQuantity(newQuantity);
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
        }
    }

    //PASSING CHILD TO PARENT

    let greenButton;

    function testEnd () {
        let diffMarkedCatsLength = markedCats.filter(function(val, i, arr) { 
            return arr.indexOf(val) === i;
        }).length;
        console.log(diffMarkedCatsLength);

        if (diffMarkedCatsLength === categories.length) {
            console.log(markedCats);
            greenButton = "green-button";
            childToParent(greenButton);
        } else {
            greenButton = "";
            childToParent(greenButton);
        }
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
                                <div class={`option-box ${dish.type} ${checkList[dishIndex]}`} key={`d${dishIndex}`} onClick={() => selection(dishIndex, dish.type, catIndex)}>
                                    <img src={`imagens/${dish.srcId}.jpg`} />
                                    <div class="menu">
                                        <p class="name">{dish.name}</p>
                                        <p class="description">{dish.description}</p>
                                        <p class="price">{dish.price}<span class={`vanish ${hiding[dishIndex]}`}><ion-icon name="add-circle" class="check green" onClick={() => changeQuantity("up", dishIndex)}></ion-icon>{quantity[dishIndex]}<ion-icon name="remove-circle" class="check red" onClick={() => changeQuantity("down", dishIndex)}></ion-icon></span></p>
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