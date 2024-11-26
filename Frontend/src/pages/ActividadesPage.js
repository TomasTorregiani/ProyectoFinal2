import { useEffect, useState } from "react"
import axios from 'axios'
import { ActividadesItem } from "../components/actividades/actividades"
import '../styles/components/pages/ActividadesPage.css'

export const ActividadesPage = () => {

    const [loading, setLoading] = useState(false)
    const [actividades, setActividades] = useState([])

    useEffect(() => {
        const cargarActividades = async () => {
            setLoading(true)
            const response = await axios.get('http://localhost:3000/api/actividades')
            console.log(`actividades:`, response.data)

            setActividades(response.data)
            setLoading(false)
        }
            cargarActividades()
    }, [])
    
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            {loading ? (
                            <p>Cargando...</p>
                        )
                    :
                        (
                            actividades.map(item => <ActividadesItem key={item.id} item={item}/>)
                        )
            }
        </div>
    )
}