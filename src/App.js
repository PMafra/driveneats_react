import React from "react";
import TopBar from "./Components/TopBar";
import Container from "./Components/Container";
import BottomBar from "./Components/BottomBar";
import ConfirmationPage from "./Components/ConfirmationPage";
import "./css/style.css";
import "./css/reset.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";


export default function App ({markedCats}) {

    const [buttonData, setButtonData] = React.useState('');
    const childToParent = (childData) => {
        setButtonData(childData);
    }
    console.log(buttonData);

    const [dishesData, setDishesData] = React.useState('');
    const sonToParent = (childData) => {
        setDishesData(childData);
    }
    console.log(dishesData);

    return (
        <>
            <TopBar />
            <Container childToParent={childToParent} sonToParent={sonToParent} markedCats={markedCats}/>
            <BottomBar changeColor={buttonData} />
            <Router>
                <Switch>
                    <Route exact path="/confirmation-page">
                        <ConfirmationPage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}