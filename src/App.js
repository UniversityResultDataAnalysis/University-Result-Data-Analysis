import {Outlet} from 'react-router-dom';
import './App.css';
import React, {useEffect, useRef} from "react";
import {FaExternalLinkAlt} from "react-icons/fa";
import CreditsPopup from "./components/CreditsPopup";

function App() {

    const dialogRef = useRef(null);

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", "dark");
    }, []);


    const onCloseCreditDialog = () => {
        dialogRef.current.close();
    }
    const onOpenCreditDialog = () => {
        dialogRef.current.showModal();
    }

    return (
        <main className="container">
            <nav className={"header"}>
                <img id={"canara_logo"} alt="CANARA" src="https://www.canaraengineering.in//assets/images/logo.png"/>
                <hgroup className={"app-header-text"}>
                    <h2>University Result Data Analysis Tool</h2>

                    <small data-tooltip="Click to View Credits" onClick={onOpenCreditDialog} className={"creditText"}>
                        <FaExternalLinkAlt/> Designed & Developed by : P04-ISE Dept</small>
                </hgroup>
            </nav>
            <Outlet/>
            <CreditsPopup dialogRef={dialogRef} onClose={onCloseCreditDialog}/>
            <footer><small style={{fontSize: "small"}}> &copy; All The Rights of This Project & Data are Reserved to P04 & Canara Engineering College</small></footer>
        </main>
    )
}

export default App;