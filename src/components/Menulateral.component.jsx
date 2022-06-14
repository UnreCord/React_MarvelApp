const Menulateral = (props) => {

    const cambiarModoTabla=()=>{
        props.cambiarModo(1)
    }

    const cambiarModoCard=()=>{
        props.cambiarModo(2)
    }

  return (
    <div
      className="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        id="v-pills-tabla-tab"
        data-toggle="pill"
        href="#v-pills-tabla"
        role="tab"
        aria-controls="v-pills-tabla"
        aria-selected="true"
        className={props.modo===1? "nav-link activate" : "nav-link"}
        onClick={cambiarModoTabla}>
        Tabla
      </a>
      <a
        id="v-pills-card-tab"
        data-toggle="pill"
        href="#v-pills-card"
        role="tab"
        aria-controls="v-pills-card"
        aria-selected="false"
        className={props.modo===2? "nav-link activate" : "nav-link"}
        onClick={cambiarModoCard}>
        Card
      </a>
    </div>
  )
}

export default Menulateral;
