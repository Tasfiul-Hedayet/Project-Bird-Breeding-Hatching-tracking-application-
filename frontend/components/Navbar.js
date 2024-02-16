import React from "react";
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">Knudson Farm</div>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link href="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/bird">Bird</Link>
            </li>
            <li>
              <Link href="/hatch">Hatch</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
