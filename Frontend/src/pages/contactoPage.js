import { useState } from "react";

import "../styles/components/pages/contactoPage.css"
import axios from 'axios'

const ContactoPage = ( props ) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState(initialForm)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(oldData => ({
            ...oldData, 
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMsg('')
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData)
        setSending(false)
        setMsg(response.data.message)
        if(response.data.error === false){
            setFormData(initialForm)
        }        
    }

    return (
        <main>
            <div id="contactoDiv">
                <h2>Contacto Rapido</h2>
                <form action='/contacto' method='post' onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label htmlFor="nombre">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="enviar"></input>
                    </p>
                </form>

                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

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