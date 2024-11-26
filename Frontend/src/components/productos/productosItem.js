

export const ProductosItem = ({item}) => {

    return (

            <div>
                <h2>{item.id_producto}. {item.producto}</h2>
                <p>Precio: ${item.precio}</p>
                <img src={item.img} alt={item.producto}/>
                <p>Stock: {item.stock}</p>
            </div>

    )
}