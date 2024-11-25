import React from "react";

const Comida = ({nomeComida}) => {
    return (
        <>
        <p style={{ color: "black", fontSize: "16px", margin: "10px 0" }}>
            {nomeComida.string}
        </p>
        
        </>
    )

}

export default Comida;