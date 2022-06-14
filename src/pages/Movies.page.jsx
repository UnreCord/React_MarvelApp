
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const MoviesPage = () => {
  return (
    <div className="container">
      <h1>Marvel Cinematic Universe (MCU)</h1>
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a id="v-pills-tabla-tab" data-toggle="pill" href="#v-pills-tabla" role="tab" aria-controls="v-pills-tabla" aria-selected="true" className="nav-link active">
              Tabla
            </a>
            <a id="v-pills-card-tab" data-toggle="pill" href="#v-pills-card" role="tab" aria-controls="v-pills-card" aria-selected="false" className="nav-link">
              Card
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MoviesPage
