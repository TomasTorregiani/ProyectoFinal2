import { useEffect, useState } from "react"
import { ProductosItem } from "../components/productos/productosItem"
import axios from 'axios'


export const ProductosPage = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const [mostrar, setMostrar] = useState(false)
    const [busqueda, setBusqueda] = useState("")
    const [productosFiltrados, setProductosFiltrados] = useState([])

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true)

            const response = await axios.get('http://localhost:3000/api/products')
            console.log("productos", response.data);
            setProductos(response.data)
            setLoading(false)
        }
        cargarProductos()
    }, [])

    const buscar = (e) => {
        e.preventDefault()
        const query = e.target.value || ""
        setMostrar(true)
        setBusqueda(query)
        setProductosFiltrados(productos.filter(prod => prod.producto && prod.producto.toLowerCase().includes(query.toLowerCase())  ))
    }

    return (
        <main style={{display:"flex"}}>
            <aside>
                <div style={{margin:"50px"}}>
                <form className="d-flex" role="search" >
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Buscar productos"
                        aria-label="Search"
                        onChange={buscar}
                    />
                    </form>
                </div>
            </aside>
            <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:"150px", padding:"50px"}}>
                {
                    loading ?   (
                                    <p>Cargando...</p>
                                )
                            : mostrar ? (
                                    productosFiltrados.map(item => <ProductosItem key={item.id_producto} item={item}/>)
                            ) : (
                                    productos.map(item => <ProductosItem key={item.id_producto} item={item}/>)
                            )
                                
                }
            </div>
        </main>
    )
};