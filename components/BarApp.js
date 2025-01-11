"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BarApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Jika scroll lebih dari 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "navbar-floating" : "navbar-top"
        }`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${
              scrolled ? "text-white" : "text-dark"
            }`}
            href="#"
          >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    scrolled ? "text-white" : "text-dark"
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    scrolled ? "text-white" : "text-dark"
                  }`}
                  href="/Project"
                >
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
