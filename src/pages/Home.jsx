import { signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GetExcelSheetForm from "./GetExcelSheetForm";
import {FaUser} from "react-icons/fa";
import {RiLogoutCircleRFill, RiLogoutCircleRLine} from "react-icons/ri";

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
          <section >
          <nav className={"navBar"}>
              <span className={"username"}>
                  <FaUser />&nbsp;Welcome {user && user.email}</span>

              <button className={"logoutBtn"} onClick={handleLogout}>
                  <RiLogoutCircleRLine   />&nbsp;
                  Logout
              </button>
          </nav>
          </section>


      </header>

          <section>
              <article className={"formContainer"}>
                  <GetExcelSheetForm/>
              </article>

          </section>

    </>


  )
}

export default Home