import React from "react";
import "../styles/components/pages/contactoPage.css"

const ContactoPage = ( props ) => {
    return (
        <main>
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"></input>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text"></input>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text"></input>
                    </p>
                    <p>
                        <label for="nombre">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="enviar"></input>
                    </p>
                </form>
                <div className="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Telefono: 123456342</li>
                        <li>Email: transportes@gmail.com</li>
                        <li>Facebook:</li>
                        <li>Twitter:</li>
                        <li>Skype:</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default ContactoPage;