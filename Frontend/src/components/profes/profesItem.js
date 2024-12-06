

export const ProfesItem = ( {item} ) => {

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"35px", boxShadow: "2px 2px 2px 0.2px rgb(153, 96, 26)", backgroundColor:"beige"}}>
            <h1 style={{margin: "10px"}}>{item.Nombre}</h1>
            <h2 style={{margin: "10px", color:"black", borderBottom: "2px solid black", paddingBottom:"30px"}}>{item.Apellido}</h2>
            <img src={item.img} width='150px' height='150px' style={{borderRadius:"20%", margin:"30px"}}/>
            <p style={{color:"black", fontSize:"10px"}} >Mail: {item.Mail}</p>
            <p style={{fontSize:"15px", maxWidth:"300px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat hic odit voluptatibus debitis nulla iusto, ea atque impedit neque ut necessitatibus voluptatem quod quos cumque nostrum reiciendis commodi animi earum, fugit quas recusandae, explicabo aut sapiente. Reprehenderit iusto rem nulla quo ad cum quia! Aut porro laudantium delectus temporibus.</p>
        </div>
    )
}