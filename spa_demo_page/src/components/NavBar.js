import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link className='navbar-brand' to="/">HoMe</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link className='nav-link' to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link className='nav-link' to="/about">About</Link>
                </li>
                <li class="nav-item">
                <Link className='nav-link' to="/contactus">Contact Us</Link>
                </li>
            </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}
