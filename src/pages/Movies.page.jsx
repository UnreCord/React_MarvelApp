import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menulateral from "../components/Menulateral.component";
import ContenedorTbas from "../components/ContenedorTabs.components";
import data from "../resource/data"
import { useEffect, useState } from "react";

const MoviesPage = () => {
  

  //Variables de Estado
  const[modoVisualizacion,setModoVisualizacion]=useState(1)
  const[listaPeliculas,setListaPeliculas]=useState([])

  useEffect(()=>{ 
    const dataFech=async()=>{
      const resp=await fetch("https://mcuapi.herokuapp.com/api/v1/movies")
      const data=await resp.json()
      setListaPeliculas(data.data)
      return data
    }
    dataFech()
  },[])
  
  
  //Temporal
  //const listaPeliculas=data.data

  



  return (
    <div className="container">
      <h1>Marvel Cinema tic Universe (MCU)</h1>
      <div className="row">
        <div className="col-3">
          <Menulateral modo={modoVisualizacion} cambiarModo={setModoVisualizacion}/>
        </div>
        <div className="col-9">
          <ContenedorTbas modo={modoVisualizacion} peliculas={listaPeliculas}/>
        </div>
      </div>
    </div>
  )
}
export default MoviesPage;
