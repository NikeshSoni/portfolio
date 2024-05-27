

const Header = () => {
    return (
        // <header>
        //     <nav className=" row navigation justify-content-between">
        //         <div className="col-4 text-center">
        //             <h2 className="logo">
        //                 Nk
        //             </h2>
        //         </div>

        //         <ul className="d-flex gap-4 m-0 justify-content-end col-8">
        //             <li className="me-4 fs-6 list-unstyled">
        //                 <a className="text-dark page-links" href="#">About Me</a>
        //             </li>
        //             <li className="me-4 fs-6 list-unstyled">
        //                 <a className="text-dark page-links" href="#">skill</a>
        //             </li>
        //             <li className="me-4 fs-6 list-unstyled">
        //                 <a className="text-dark page-links" href="#">Projects</a>
        //             </li>
        //             <li className="me-4 fs-6 list-unstyled">
        //                 <a className="text-dark page-links" href="#">Education</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>

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