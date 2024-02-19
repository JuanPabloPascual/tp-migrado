

function Home() {
    return(

<div>
    <li>
        <a className="nav-link active" aria-current="page" href="https//www.ejemplo.com"> Quienes somos </a>

            <li className="nav-item dropdown">

                <a className="nav-link dropdown-toggle active" href="https//www.ejemplo.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      Productos
                 </a>

                <ul className="dropdown-menu">
                    
                    <li><a className="dropdown-item" href="https//www.ejemplo.com"> Tortas </a> </li>
                    
                    <li><a className="dropdown-item" href="https//www.ejemplo.com"> Postres </a> </li>

                    <li>  <hr className="dropdown-divider"> </hr>  </li>

                    <li> <a className="dropdown-item" href="https//www.ejemplo.com"> Combos </a> </li>
                </ul>

            </li>

            <li className="nav-item">

                  <a className="nav-link active" href="https//www.ejemplo.com"> 

                  Envíos 

                  </a>
            </li>

    </li>

            <li className="nav-item">

                <a className="nav-link active"> 
        
                 Contactanos 
        
                </a>

            </li>  

</div>
    
   )
}

export default Home

