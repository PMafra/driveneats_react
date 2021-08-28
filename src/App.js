import React from "react";
import TopBar from "./Components/TopBar";
import Container from "./Components/Container";
import BottomBar from "./Components/BottomBar";
import ConfirmationBox from "./Components/ConfirmationBox";
import "./style.css";

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
            <ConfirmationBox />
        </>
    );
}