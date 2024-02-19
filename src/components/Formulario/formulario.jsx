


function Formulario(){
    return(
<div className="formulario row">

     <div className="mb-3">

      <label for="exampleFormControlInput1" className="form-label">Correo electronico</label>

      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"> </input>
      </div>

  <div className="mb-3">

      <label for="exampleFormControlTextarea1" className="form-label">Comentarios</label>

      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
  </div>

  </div>
    );

}

export default Formulario