import { useState } from "react";
import { toast } from 'react-toastify';
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

    const [formData, setFormData] = useState(initialForm)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(oldData => ({
            ...oldData, 
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            const response = await axios.post(
                'http://localhost:3000/api/contacto',
                formData
            );
            setSending(false);
            setFormData(initialForm);
            toast.success(response.data.message);
        } catch (error) {
            setSending(false);
            toast.error('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        }
    };

    return (
        <main>
            <div id="contactoDiv">
                <h2 style={{color:"black"}} >Contacto Rápido</h2>
                <form onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones">
                        <button type="submit" disabled={sending}>
                            {sending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default ContactoPage;