

export const ProductosItem = ({item}) => {

    return (

            <div>
                <h2 style={{color:"black"}}>{item.id_producto}. {item.producto.toUpperCase()}</h2>
                <p style={{fontSize:"20px"}}>Precio: ${item.precio}</p>
                <img src={item.img} alt={item.producto}/>
                <p style={{fontSize:"20px"}}>Stock: {item.stock}</p>
            </div>

    )
}