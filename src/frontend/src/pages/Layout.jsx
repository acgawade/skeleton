import React, { useLayoutEffect, useState } from "react";
import logo from '../logo.svg';
import { Outlet } from "react-router-dom";

const Layout = () => {
    

    useLayoutEffect(() => {
        const getData = async() => {
            const result = await fetch('/api/v1/test')
            const data = await result.json()

            console.log(data)
        }

        getData()
    })

  return(
    <>
    <header 
      className="site-header" 
      style={{ backgroundColor: '#333', color: 'white', padding: '10px 0' }}
    >
      <div 
        className="container" 
        style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div className="logo">
          <a href="#">
            <img 
              src={logo} 
              alt="Website Logo" 
              style={{ width: '150px', height: '50px' }}  // Inline CSS for width and height
            />
          </a>
        </div>
        <nav 
          className="main-nav" 
          style={{ display: 'flex' }}  // Inline CSS for main-nav
        >
          <ul 
            style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}
          >
            <li style={{ marginLeft: '20px' }}>
              <a 
                href="#home" 
                style={{ color: 'white', textDecoration: 'none', padding: '5px 10px', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.target.style.backgroundColor = ''}
              >
                Home
              </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
              <a 
                href="about" 
                style={{ color: 'white', textDecoration: 'none', padding: '5px 10px', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.target.style.backgroundColor = ''}
              >
                About
              </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
              <a 
                href="#services" 
                style={{ color: 'white', textDecoration: 'none', padding: '5px 10px', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.target.style.backgroundColor = ''}
              >
                Services
              </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
              <a 
                href="#contact" 
                style={{ color: 'white', textDecoration: 'none', padding: '5px 10px', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.target.style.backgroundColor = ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div 
          className="search-bar" 
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <input 
            type="text" 
            placeholder="Search..." 
            style={{ padding: '5px', border: 'none' }}
          />
          <button 
            type="submit" 
            style={{ padding: '5px 10px', border: 'none', backgroundColor: '#555', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#777'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#555'}
          >
            Search
          </button>
        </div>
        <div 
          className="cta-button" 
          style={{ marginLeft: '20px' }}
        >
          <a 
            href="#signup" 
            style={{ color: 'white', backgroundColor: '#007bff', padding: '5px 10px', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>

    <div id={'main'}>
        <Outlet/>
    </div>

    <footer 
      className="site-footer" 
      style={{ backgroundColor: '#333', color: 'white', padding: '20px 0' }}
    >
      <div 
        className="container" 
        style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
      >
        <div 
          className="footer-section" 
          style={{ flex: '1', margin: '10px', minWidth: '200px' }}
        >
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div 
          className="footer-section" 
          style={{ flex: '1', margin: '10px', minWidth: '200px' }}
        >
          <h4>Quick Links</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQs</p>
        </div>
        <div 
          className="footer-section" 
          style={{ flex: '1', margin: '10px', minWidth: '200px' }}
        >
          <h4>Follow Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div 
          className="footer-section" 
          style={{ flex: '1', margin: '10px', minWidth: '200px' }}
        >
          <h4>Newsletter</h4>
          <input 
            type="email" 
            placeholder="Your email address" 
            style={{ padding: '5px', marginRight: '5px', border: 'none', borderRadius: '3px' }}
          />
          <button 
            type="submit" 
            style={{ padding: '5px 10px', border: 'none', backgroundColor: '#555', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s' }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
    </>
  )
};

export default Layout;