import React, { useEffect, useState } from "react";
import "../styles/components/pages/NovedadesPage.css"
import NovedadItem from "../components/novedades/NovedadItem";
import axios from 'axios'

const NovedadesPage = () => {

    const [loading, setloading] = useState(false)
    const [novedades, setNovedades] = useState([])

    useEffect(() => {
        const cargarNovedades = async () => {
            setloading(true)

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data)
            setloading(false)
        }
        cargarNovedades();
    }, [])

    return (
        <>
            <h2>Novedades</h2>
            { loading ? 
                (
                    <p>Cargando...</p>
                ) 
                    :
                ( 
                    novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo}/>)
                )
            }
        </>
    )
}


export default NovedadesPage;