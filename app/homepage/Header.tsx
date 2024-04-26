export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand link-light" href="#">DG PHOTOGRAPHY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link link-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-light" href="#">Gallary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-light" href="#">Testimonial</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}