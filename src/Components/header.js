

const Header = () => {
    return (
                <header>
                    <nav className=" row navigation justify-content-between">
                        <div className="col-4 text-center">
                            <h2 className="logo">
                                Nk
                            </h2>
                        </div>
        
                        <ul className="d-flex gap-4 m-0 justify-content-end col-8">
                            <li className="me-4 fs-6 list-unstyled">
                                <a className="text-dark page-links" href="#">About</a>
                            </li>
                            <li className="me-4 fs-6 list-unstyled">
                                <a className="text-dark page-links" href="#">skill</a>
                            </li>
                            <li className="me-4 fs-6 list-unstyled">
                                <a className="text-dark page-links" href="#">Projects</a>
                            </li>
                            <li className="me-4 fs-6 list-unstyled">
                                <a className="text-dark page-links" href="#">Education</a>
                            </li>
                        </ul>
                    </nav>
                </header>
             )
    
}

export default Header;