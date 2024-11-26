import React from "react";
import '../../styles/components/layout/Header.css'

const Header = () => {
    return (
        <header>
            <div style={{display:"flex", alignItems:"center", gap: "50px"}}>
                <img src="/images/logo.png" width="200" alt="Transportes x"></img>
                <p>Flowing</p>
            </div>
        </header>
    )
}

export default Header;