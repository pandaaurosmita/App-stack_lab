import React from 'react'

function Header() {
  return (
    <div>
      <header>
        <nav
            className="navbar navbar-expand-sm navbar-light bg-dark "
        >
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://www.way2news.com/images/logo.svg" alt="" />
                </a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navitem navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="#" aria-current="page"
                                >HOME
                                <span className="visually-hidden">(current)</span></a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">LANGUAGES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FEATURES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">APP TOUR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOAG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MEDIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EVENTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <button className='btn btn-light'>Get App Now</button>
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-facebook  "></i>
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-linkedin "></i>
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-twitter"></i>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
        
      </header>
    </div>
  )
}

export default Header
