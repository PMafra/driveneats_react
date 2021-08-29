import React from "react";
import TopBar from "./Components/TopBar";
import MainPage from "./Components/MainPage";
import BottomBar from "./Components/BottomBar";
import ConfirmationPage from "./Components/ConfirmationPage";
import "./css/style.css";
import "./css/reset.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";


export default function App ({markedCats, dishesChosen}) {

    const [buttonData, setButtonData] = React.useState('');
    const childToParent = (childData) => {
        setButtonData(childData);
    }
    console.log(buttonData);

    const [dishesData, setDishesData] = React.useState([]);
    const sonToParent = (childData) => {
        setDishesData(childData);
    }
    console.log(dishesData);

    if (dishesData[0] !== undefined) {
        localStorage.setItem(1, JSON.stringify(dishesData));
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <TopBar />
                        <MainPage childToParent={childToParent} sonToParent={sonToParent} markedCats={markedCats} dishesChosen={dishesChosen}/>
                        <BottomBar changeColor={buttonData} />
                    </Route>
                    
                    <Route exact path="/ConfirmationPage">
                        <ConfirmationPage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}