import {Outlet} from 'react-router-dom';
import './App.css';
import React, {useEffect, useRef} from "react";
import {GrCertificate} from "react-icons/gr";
import {FaExternalLinkAlt, FaLink} from "react-icons/fa";

function App() {

    const dialofRef = useRef(null);

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", "dark");
    }, []);


    const onCloseCreditDialog = () => {
        dialofRef.current.close();
    }
    const onOpenCreditDialog = () => {
        dialofRef.current.showModal();
    }

    return (

        <div className="container">
            <div className={"stickyDiv"}>
                <nav className={"centerContainer header"}>
                    <img alt="CANARA" src="https://www.canaraengineering.in//assets/images/logo.png"/>
                    <hgroup>
                        <h2>University Result Data Analysis Tool</h2>
                        <h4 data-tooltip="Click to View Credits" onClick={onOpenCreditDialog} className={"creditText"}><FaExternalLinkAlt /> Designed & Developed by : P04-ISE Dept</h4>
                        <small style={{fontSize: "small"}}> &copy; All The Rights of This Project & Data are Reserved to P04 & Canara Engineering College</small>
                    </hgroup>

                </nav>
            </div>
            <br/>
            <Outlet/>

            <dialog ref={dialofRef}>
                <article>
                    <header>
                        <button onClick={onCloseCreditDialog} aria-label="Close" rel="prev"></button>
                        <p>
                            <strong>
                                <GrCertificate/> Credits</strong>
                        </p>
                    </header>
                    <p>
                        <strong>Project Group Name : P04</strong>
                    </p>
                    <p>
                        This Project is a part of the Academic Major Project of the Department of ISE affiliated to VTU.
                    </p>
                    <ul>
                        <li>Dept : Information Science & Engineering,CEC</li>
                    </ul>

                    <p>
                        <strong>Under the Guidance of :</strong>
                    </p>
                    <ul>
                        <li>Prof Mrs Geethalaxmi (Assistant Professor, ISE Dept)</li>
                    </ul>

                        <p>
                            <strong>Members :</strong>
                        </p>
                        <ul>
                            <li>Mr. Alwyn Jacob (4CB20IS005)</li>
                            <li>Ms. Jeevitha G S (4CB20IS024)</li>
                            <li>Mr. Mahesh Mohandas (4CB20IS028)</li>
                            <li>Ms. Mithali R Gatty (4CB20IS029)</li>

                        </ul>

                        <p>
                            <strong>Special Thanks To :</strong>
                        </p>
                        <ul>
                            <li>Prof Mr Ramesh Nayak (Assistant Professor, ISE Dept)</li>
                            <li>Prof Mrs Sadhana B (Assistant Professor, ISE Dept)</li>
                            <li>Dr. Jagadisha N (HOD, ISE Dept)</li>
                            <li>Mr. Rohan Nayak K (4CB19IS047, Alumni, ISE Dept 2023 Passout)</li>
                        </ul>
                </article>
            </dialog>

        </div>


);
}

export default App;