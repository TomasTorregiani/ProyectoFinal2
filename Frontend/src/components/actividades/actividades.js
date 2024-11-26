

export const ActividadesItem = ( {item} ) => {

    return (
        <div className="actividad-item">
            <h4>{item.clase}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat hic odit voluptatibus debitis nulla iusto, ea atque impedit neque ut necessitatibus voluptatem quod quos cumque nostrum reiciendis commodi animi earum, fugit quas recusandae, explicabo aut sapiente. Reprehenderit iusto rem nulla quo ad cum quia! Aut porro laudantium delectus temporibus.</p>
            <p><spam style={{color:"black"}}>Sede:</spam> {item.sede}</p>
            <img src={item.img}/>
        </div>
    )
}