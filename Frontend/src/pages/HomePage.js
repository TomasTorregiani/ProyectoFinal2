import React from "react";
import "../styles/components/pages/HomePage.css"

const HomePage = ( props ) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion"></img>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam explicabo, aliquam in, optio dolorem, repellat vel itaque rem quisquam esse voluptatum. Debitis voluptate eligendi sed corrupti ab accusamus ipsam nostrum similique ad inventore deserunt atque, consectetur eos minima eius beatae? Veniam iusto fuga voluptas reprehenderit placeat aperiam. Tenetur, eligendi?</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Perez</span>
                </div>
            </div>
        </main>
    )
}

export default HomePage;