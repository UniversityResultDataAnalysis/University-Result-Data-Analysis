import { Outlet } from 'react-router-dom';
import './App.css';
import React, {useEffect} from "react";

function App() {

    const themeSwitcher = {
        // Config
        _scheme: "auto",
        menuTarget: "details[role='list']",
        buttonsTarget: "a[data-theme-switcher]",
        buttonAttribute: "data-theme-switcher",
        rootAttribute: "data-theme",
        localStorageKey: "picoPreferredColorScheme",

        // Init
        init() {
            this.scheme = this.schemeFromLocalStorage;
            this.initSwitchers();
        },

        // Get color scheme from local storage
        get schemeFromLocalStorage() {
            if (typeof window.localStorage !== "undefined") {
                if (window.localStorage.getItem(this.localStorageKey) !== null) {
                    return window.localStorage.getItem(this.localStorageKey);
                }
            }
            return this._scheme;
        },

        // Preferred color scheme
        get preferredColorScheme() {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        },

        // Init switchers
        initSwitchers() {
            const buttons = document.querySelectorAll(this.buttonsTarget);
            buttons.forEach((button) => {
                button.addEventListener(
                    "click",
                    (event) => {
                        event.preventDefault();
                        // Set scheme
                        this.scheme = button.getAttribute(this.buttonAttribute);
                        // Close dropdown
                        document.querySelector(this.menuTarget).removeAttribute("open");
                    },
                    false
                );
            });
        },

        // Set scheme
        set scheme(scheme) {
            if (scheme == "auto") {
                this.preferredColorScheme == "dark" ? (this._scheme = "dark") : (this._scheme = "light");
            } else if (scheme == "dark" || scheme == "light") {
                this._scheme = scheme;
            }
            this.applyScheme();
            this.schemeToLocalStorage();
        },

        // Get scheme
        get scheme() {
            return this._scheme;
        },

        // Apply scheme
        applyScheme() {
            document.querySelector("html").setAttribute(this.rootAttribute, this.scheme);
        },

        // Store scheme to local storage
        schemeToLocalStorage() {
            if (typeof window.localStorage !== "undefined") {
                window.localStorage.setItem(this.localStorageKey, this.scheme);
            }
        },
    };


    useEffect(() => {
        themeSwitcher.init();
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
              <details role="list">
                  <summary aria-haspopup="listbox" role="button" className="secondary">Display Theme</summary>
                  <ul role="listbox">
                      <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                      <li><a href="#" data-theme-switcher="light">Light</a></li>
                      <li><a href="#" data-theme-switcher="dark">Dark</a></li>
                  </ul>
              </details>
        </nav>
      </div>
        <Outlet />


      </div>
  );
}

export default App;