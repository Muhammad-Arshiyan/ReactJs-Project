import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", ()=> {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
   <nav className={`navbar navbar-expand-lg fixed-top ${sticky? 'dark-nav' : 'bg-transparent '}`}>
      <div className="container">
        <img src={logo} className="logo" />
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <img src={menu_icon} alt="" className='menu-icon' />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link"><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='program' smooth={true} offset={-260} duration={100}>Program</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='about' smooth={true} offset={-150} duration={100}>About us</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='campus' smooth={true} offset={-260} duration={100}>Campus</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='testimonials' smooth={true} offset={-260} duration={100}>Testimonials</Link></a>
            </li>

            <li className="nav-item">
              <a><button className='btn-con'><Link to='contact' smooth={true} offset={-260} duration={100}>Contact us</Link></button></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
