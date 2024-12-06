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
            <tr>
                <td colSpan={5}>
                    <div
                        style={{
                            height: display ? "auto" : "0",
                            overflow: "hidden",
                            transition: "height 0.3s ease, opacity 0.3s ease",
                            opacity: display ? 1 : 0,
                        }}
                    >
                        <p style={{color:"rgb(0, 0, 110)", fontSize: "15px", margin: 0 }}>{body}</p>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default NovedadItem;