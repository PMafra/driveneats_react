import React from "react";

export default function Container () {

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

    const [counter, setCounter] = React.useState([]);

    function remove(array, element) {
        const index = array.indexOf(element);
        array.splice(index, 1);
      }

    function selection (id, type, name, down) {
        let newCheckList = {...checkList};
        let newHiding = {...hiding};

        if (checkList[id] === "") {

            newCheckList[id] = "green-border";
            setCheckList(newCheckList);

            newHiding[id] = "re-vanish";
            setHiding(newHiding);
            
            quantity[id] = 1;

            if (!counter.includes(type)) {
                setCounter([...counter, type]);
                console.log(counter);
            }
            

        } else {
            if (quantity[id] === 1 && changeQuantity.called === true) {
                newCheckList[id] = "";
                setCheckList(newCheckList);
                newHiding[id] = "";
                setHiding(newHiding);
            }

            setCounter(remove(counter, type));
            console.log(counter);
        }

        console.log(type + " " + String(id) + " " + name);
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



    // let categoriesTypesSelected = {};
    // for (let i = 0; i < categories.length; i++) {
    //     categoriesTypesSelected[categories[i].categoryType] = "unmarked";
    // }
    // console.log(categoriesTypesSelected);

    // const [catSelected, setCatSelected] = React.useState(categoriesTypesSelected);
    // console.log(catSelected);

    // function confirmation (catIndex) {
    //     let newCatSelected = {...catSelected};

    //     if (catSelected[catIndex] === "unmarked") {
    //         newCatSelected[catIndex] = "marked";
    //         setCatSelected(newCatSelected);
    //     }
    // }

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
                                <div class={`option-box ${dish.type} ${checkList[dishIndex]}`} key={`d${dishIndex}`} onClick={() => selection(dishIndex, dish.type, dish.name)}>
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


    // const [quantity, SetQuantity] = React.useState(1);

    // function changeQuantity (upOrDown, id) {

    //     if (upOrDown === "up") {

    //         SetQuantity(quantity + 1);
    //     }
    //     if (upOrDown === "down") {

    //         SetQuantity(quantity - 1);
    //     }
    // }

    // const listOfQts = [];
    // for (let i = 0; i < dishes.length; i++) {
    //     listOfQts.push(0);
    //     console.log(listOfQts);
    // }

    // const [quantity, SetQuantity] = React.useState(listOfQts);

    // function changeQuantity (upOrDown, id) {
    //     let newQuantity = {...quantity};

    //     if (upOrDown === "up") {
    //         // if (newQuantity[id] === ) {
    //         //     newQuantity[id] = "0";
    //         // }
    //         newQuantity[id] += 1;
    //         SetQuantity(newQuantity);
    //     }
    //     if (upOrDown === "down") {
    //         // if (newQuantity[id] === "") {
    //         //     newQuantity[id] = "0";
    //         // }
    //         newQuantity[id] -= 1;
    //         SetQuantity(newQuantity);
    //     }
    // }


{/* <div class="content">

<div class="top-content-text">
    <p class="font-weight-400 font-righteous">Primeiro, seu prato</p>
</div>

<div class="content-options">

    <div class="option-box main-course" onclick="mainCourse(this)">
        <img src="imagens/frangoBatata.jpg" />
        <div class="menu">
            <p class="name">Frango com batata</p>
            <p class="description">200g de frango acompanhado de batata</p>
            <p class="price">R$ 22,70<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box main-course" onclick="mainCourse(this)">
        <img src="imagens/peixe.jpg" />
        <div class="menu">
            <p class="name">Truta com arroz</p>
            <p class="description">Truta acompanhada de arroz integral e salada</p>
            <p class="price">R$ 37,10<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box main-course" onclick="mainCourse(this)">
        <img src="imagens/picanha.jpg" />
        <div class="menu">
            <p class="name">Picanha e fritas</p>
            <p class="description">300g de picanha com uma porção de fritas</p>
            <p class="price">R$ 35,90<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box main-course" onclick="mainCourse(this)"> 
        <img src="imagens/estrogonofe-de-carne.jpg" />
        <div class="menu">
            <p class="name">Strogonoff de carne</p>
            <p class="description">Strogonoff com arroz e batata palha</p>
            <p class="price">R$ 26,95<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>

</div>
</div>

<div class="content">

<div class="top-content-text">
    <p class="font-weight-400 font-righteous">Agora, sua bebida</p>
</div>

<div class="content-options">

    <div class="option-box drinks" onclick="drink(this)">                 
        <img src="imagens/suco.jpg" />
        <div class="menu">
            <p class="name">Suco de laranja</p>
            <p class="description">Suco natural feito com 7 laranjas maduras</p>
            <p class="price">R$ 7,55<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box drinks" onclick="drink(this)">
        <img src="imagens/mate.jpg" />
        <div class="menu">                       
            <p class="name">Mate da casa</p>
            <p class="description">Mate feito na casa com limão opcional</p>
            <p class="price">R$ 4,30<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box drinks" onclick="drink(this)">
        <img src="imagens/vitamina.jpg" />
        <div class="menu">                       
            <p class="name">Vitamina de banana</p>
            <p class="description">Batida com leite, banana e aveia opcional</p>
            <p class="price">R$ 6,90<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box drinks" onclick="drink(this)">
        <img src="imagens/coca zero.jpg" />
        <div class="menu">                        
            <p class="name">Coca cola zero</p>
            <p class="description">Latinha de coca zero 350ml</p>
            <p class="price">R$ 3,95<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>

</div>
</div>

<div class="content">

<div class="top-content-text">
    <p class="font-weight-400 font-righteous">Por fim, sua sobremesa</p>
</div>

<div class="content-options">
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/brownie.jpg" />
        <div class="menu">                       
            <p class="name">Brownie sem açucar</p>
            <p class="description">Brownie de chocolate feito sem açucar</p>
            <p class="price">R$ 14,15<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/panqueca.jpg" />
        <div class="menu">                      
            <p class="name">Panquecas de whey</p>
            <p class="description">Panquecas feitas com whey, mel e morangos</p>
            <p class="price">R$ 15,00<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/torta.jpg" />
        <div class="menu">                        
            <p class="name">Torta de limão</p>
            <p class="description">Fatia de deliciosa torta de limão</p>
            <p class="price">R$ 12,80<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/pudim.jpg" />
        <div class="menu">                       
            <p class="name">Pudim fit</p>
            <p class="description">Pudim fit feito sem açucar</p>
            <p class="price">R$ 10,00<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>

</div>
</div> */}