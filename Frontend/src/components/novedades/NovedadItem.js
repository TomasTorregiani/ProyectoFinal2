import React, { useState } from "react";

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body, id} = props;

    const [display, setDisplay] = useState(false)

    const handleDisplay = () => {
        if(display === false){
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }

    return(
        <>
            <tr>
                <td scope="row">{id}</td>
                <td>{title}</td>
                <td>{subtitle}</td>
                <td>
                    <img src={imagen} alt={title} style={{ width: "100px" }} />
                </td>
                <td><button onClick={handleDisplay}>Ver novedad</button></td>
            </tr>
            <div>
                {display === false ? '' : <p style={{color:"blue", fontSize:"20px"}}>{body}</p>}
            </div>
        </>
    )
}

export default NovedadItem;