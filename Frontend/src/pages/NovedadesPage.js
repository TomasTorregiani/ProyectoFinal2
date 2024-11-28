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
                    <div>
                    <table className="table" style={{width:"100%"}}>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Título</th>
                                <th scope="col">Subtítulo</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {novedades.map((item) => (
                                <NovedadItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.titulo}
                                    subtitle={item.subtitulo}
                                    imagen={item.imagen}
                                    body={item.cuerpo}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                )
            }
        </>
    )
}


export default NovedadesPage;