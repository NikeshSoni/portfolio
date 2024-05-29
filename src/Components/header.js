

const Header = () => {
    return (
            <nav data-aos="fade-right" className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container-fluid container justify-content-between">
                    <a className="navbar-brand logo" href="#">Nk</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Education</a>
                            </li>
                        </ul>
                    </div>
                </div>
               
              
            </nav>
       

    )

}

export default Header;