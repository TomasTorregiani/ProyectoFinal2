import React, { useEffect, useState } from "react";
import "../styles/components/pages/NosotrosPage.css"
import { ProfesItem } from "../components/profes/profesItem";
import axios from 'axios'

const NosotrosPage = () => {

    const [loading, setLoading] = useState(false)
    const [staff, setStaff] = useState([])

    useEffect(() => {
        const cargarStaff = async () => {
            setLoading(true)

            const response = await axios.get('http://localhost:3000/api/profes')
            setStaff(response.data)
            console.log(`profes:`, response.data)
            setLoading(false)
        }
        cargarStaff()
    }, [])

    return (

        <main>
            <h1>Profes de Flowing</h1>
            <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around", gap:"25px"}}>
                {loading ? (
                                <p>Cargando...</p>
                            )
                        :
                        (
                            staff.map(item => <ProfesItem key={item.id} item={item}/>)
                        )
                }
            </div>
        </main>

    )
}

export default NosotrosPage;


