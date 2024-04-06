import { Outlet } from 'react-router-dom';
import './App.css';
import React, {useEffect} from "react";
import './App.css';

function App() {

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", "dark");
    }, []);

  return (

      <div className="container">
          <div className={"stickyDiv"}>
        <nav className={"centerContainer header"}>
              <img alt="CANARA" src="https://www.canaraengineering.in//assets/images/logo.png" />
            <hgroup>
              <h2>University Result Data Analysis Tool</h2>
              <h4 className={"creditText"}>Designed & Developed by : P04</h4>
              <small style={{fontSize:"small"}}> &copy; All The Rights of This Project & Data are Reserved to P04 & Canara Engineering College</small>
            </hgroup>

        </nav>
      </div>
          <br/>
        <Outlet />


      </div>
  );
}

export default App;