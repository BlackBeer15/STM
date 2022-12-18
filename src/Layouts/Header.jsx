import React from 'react';
import "../Styles/Header.css";
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
function Header () {
    return (
        <header>
            <img src={logo} alt="Логотип"/>
            <Link to={"/"} className={"logout-btn"}>ВЫЙТИ ИЗ СИСТЕМЫ</Link>
        </header>
    );
}

export default Header;