

export const ActividadesItem = ( {item} ) => {

    return (
        <div className="actividad-item">
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h4 style={{fontSize:"25px", borderBottom:"1px solid black"}}>{item.clase}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat hic odit voluptatibus debitis nulla iusto, ea atque impedit neque ut necessitatibus voluptatem quod quos cumque nostrum reiciendis commodi animi earum, fugit quas recusandae, explicabo aut sapiente. Reprehenderit iusto rem nulla quo ad cum quia! Aut porro laudantium delectus temporibus.</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img style={{width:"250px", height:"150px", margin:"15px", boxShadow:"2px 2px 2px 2px gray", borderRadius:"5px"}} src={item.img}/>
                <p><spam style={{color:"black"}}>Sede:</spam> {item.sede}</p>
            </div>
        </div>
    )
}