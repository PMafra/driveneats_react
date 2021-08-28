import React from "react";
import TopBar from "./Components/TopBar";
import Container from "./Components/Container";
import BottomBar from "./Components/BottomBar";
import ConfirmationBox from "./Components/ConfirmationBox";
import "./style.css";

export default function App () {

    const [data, setData] = React.useState('');
    const childToParent = (childData) => {
        setData(childData);
    }
    console.log(data);


    return (
        <>
            <TopBar />
            <Container childToParent={childToParent}/>
            <BottomBar changeColor={data}/>
            <ConfirmationBox />
        </>
    );
}