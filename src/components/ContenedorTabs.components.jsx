import Tablapeliculas from "../components/TablaPeliculas.component";
import CardDeck from "../components/Carddeck.component";

const ContenedorTbas=(props)=>{

    console.log(props.peliculas)
    if (props.modo ===1) {
        //Modo Tabla
        return  <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
                <Tablapeliculas peliculas={props.peliculas}/>
        </div> 
    </div>
    }
    else{
        //Modo Deck 
        return <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
            <CardDeck peliculas={props.peliculas}/>
        </div>
    </div>
    }
}

export default ContenedorTbas