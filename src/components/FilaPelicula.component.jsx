import { useEffect, useState } from "react"

const FilaPelicula=(props)=>{ 
    const [tipoVisualizacion,setTipoVisualizacion]=useState("Lectura")

    const cambiarTipoFila=()=>{
        if (tipoVisualizacion==="Lectura") {
            setTipoVisualizacion("escritura")
        }
        else{
            setTipoVisualizacion("Lectura")
        }
    }

    if (tipoVisualizacion=="Lectura") {
        return <tr>
            <td>{props.pelicula.id}</td>
            <td>{props.pelicula.title}</td>
            <td>{props.pelicula.release_dat}</td>
            <td>{props.pelicula.box_office}</td>
            <td>{props.pelicula.phase}</td>
            <td>{props.pelicula.post_credit_scenes}</td>
            <td>
            <a href="#" onClick={cambiarTipoFila}>Seleccionar</a>
            </td>
        </tr>
    }
    else{
        return <tr>
            <input type={"text"} defaultValue={props.pelicula.id} />
            <input type={"text"} defaultValue={props.pelicula.title} />
            <input type={"text"} defaultValue={props.pelicula.release_dat} />
            <input type={"text"} defaultValue={props.pelicula.box_office} />
            <input type={"text"} defaultValue={props.pelicula.phase} />
            <input type={"text"} defaultValue={props.pelicula.post_credit_scenes} />
            <td>
                <a href="#" onClick={cambiarTipoFila}>Seleccionar</a>
            </td>
        </tr>
    }


    
}

export default FilaPelicula