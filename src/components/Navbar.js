export const Navbar = () => {
    return <header>
 <nav class="navbar navbar-expand-lg navbar-dark navStyle">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><span>Full
            Mates</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/about.html">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/productos.html">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/como.html">Como Llegar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
    </header>
}
export default Navbar