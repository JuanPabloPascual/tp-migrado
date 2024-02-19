import Spiderman from './imagenes/Spiderman.jpeg'
import Wonderwoman from './imagenes/Wonderwoman.jpeg'
import Sherlock from './imagenes/Sherlock.jpeg'


function Cards(){
   return (


<div className="container">

    

      <div className="col-md-3 mb-3">
          <div className="card">
              <img src={Spiderman} className="card-img-top" alt="Spiderman"/>
              <div className="card-body">
                  <h5 className="card-title">Torta Wonderwoman</h5>
                  <p className="card-text">Deliciosa torta en vaso de vidrio con capas alternadas de chocolate,
                      vainilla y frutillas frescas
                      .</p>
                  <a href="https://www.ejemplo.com" className="btn btn-primary">Comprar</a>
              </div>
          </div>
      </div>

      <div className="col-md-3 mb-3">
          <div className="card">
              <img src={Wonderwoman} className="card-img-top" alt="WonderWoman"/>
              <div className="card-body">
                  <h5 className="card-title"> Torta Spiderman </h5>
                  <p className="card-text"> Deliciosa torta cubierta de pastillaje, sabores: Vainilla, chocolate
                    ,dulce de leche
                      .</p>
                  <a href="https://www.ejemplo.com" className="btn btn-primary">Comprar</a>
              </div>
          </div>
      </div>

      <div className="col-md-3 mb-3">
          <div className="card">
              <img src={Sherlock} className="card-img-top" alt="Sherlock"/>
              <div className="card-body">
                  <h5 className="card-title"> Vasos de Cheesecake </h5>
                  <p className="card-text"> Deliciosa torta cubierta de pastillaje, sabores: Vainilla, chocolate
                    ,dulce de leche
                      .</p>
                  <a href="https://www.ejemplo.com" className="btn btn-primary">Comprar</a>
              </div>
          </div>
      </div>
      
    
</div>

    );
}

export default Cards;