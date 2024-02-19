import logo from '../assets/imagenes/logo.png'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="container-fluid"> 

              <a href="https://www.ejemplo.com" className="navbar-brand"><img src={logo} alt="Logo"/></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">

                  <span className="navbar-toggler-icon"></span>

               </button>
               
           </div>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> </ul>

                         <li className="nav-item"> </li>
                </div>
        </nav>
    );
}

export default Navbar;