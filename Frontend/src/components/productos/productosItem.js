

export const ProductosItem = ({item}) => {

    return (

            <div style={{border: "2px solid transparent", backgroundColor: "#f5f5f5"}}>
                <h2 style={{color:"black", fontSize:"22px"}}>{item.id_producto}. {item.producto.toUpperCase()}</h2>
                <p style={{fontSize:"20px"}}>Precio: ${item.precio}</p>
                <img src={item.img} alt={item.producto} width="200px" height="180px"/>
                <p style={{fontSize:"14px"}}>Stock: {item.stock}</p>
            </div>
    )
}