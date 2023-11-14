import { signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GetExcelSheetForm from "./GetExcelSheetForm";

const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <>
      <header>
          <article >
          <nav className={"navBar"}>
              <span className={"username"}>Welcome {user && user.email}</span>

              <button className={"logoutBtn"} onClick={handleLogout}>
                  Logout
              </button>
          </nav>
          </article>




      </header>

          <main>
              <article className={"formContainer"}>
                  <h4>Fill & Submit the Form to Retrieve the Data :</h4>
                  <GetExcelSheetForm/>
              </article>

          </main>

    </>


  )
}

export default Home