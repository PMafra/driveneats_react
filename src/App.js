import React from "react";
import TopBar from "./Components/TopBar";
import Container from "./Components/Container";
import BottomBar from "./Components/BottomBar";
import ConfirmationPage from "./Components/ConfirmationBox";
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
            <BottomBar changeColor={data}/>
            <Router>
                <Link to="/confirmation-page">Confirm</Link>
            </Router>
            <Switch>
                <Route path="/confirmation-page">
                    <ConfirmationPage />
                </Route>
            </Switch>
        </>
    );
}