import React from "react";
import TopBar from "./Components/TopBar";
import Container from "./Components/Container";
import BottomBar from "./Components/BottomBar";
import ConfirmationPage from "./Components/ConfirmationPage";
import "./style.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";


export default function App ({markedCats}) {

    const [data, setData] = React.useState('');
    const childToParent = (childData) => {
        setData(childData);
    }
    console.log(data);

    return (
        <>
            <TopBar />
            <Container childToParent={childToParent} markedCats={markedCats}/>
            <BottomBar changeColor={data} />
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