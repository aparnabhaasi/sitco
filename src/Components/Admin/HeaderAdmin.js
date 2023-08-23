import React, { useState } from "react";
import "./Admin.css";
import GalleryAdmin from "./GalleryAdmin";
import ProjectsAdmin from "./ProjectsAdmin";
import ClientsAdmin from "./ClientsAdmin";
import CareerAdmin from "./CareerAdmin";
import OurteamAdmin from "./OurteamAdmin";
import PostedJobs from "./PostedJobs";
import Button from 'react-bootstrap/Button';



const HeaderAdmin = () => {
  const [activeSection, setActiveSection] = useState("gallery");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    
    <header className="header-admin">
      <div className="header-content">
        <div className="header-logo">
          Sitco
        </div>
        <div className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <button
              className={`nav-button ${activeSection === "gallery" ? "active-button" : ""}`}
              onClick={() => toggleSection("gallery")}
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${activeSection === "projects" ? "active-button" : ""}`}
              onClick={() => toggleSection("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${activeSection === "careers" ? "active-button" : ""}`}
              onClick={() => toggleSection("careers")}
            >
              Careers
            </button>
          </li>
        
            <li>
              <button
                className={`nav-button ${activeSection === "ourteam" ? "active-button" : ""}`}
                onClick={() => toggleSection("ourteam")}
              >
                Our Team
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeSection === "postedjobs" ? "active-button" : ""}`}
                onClick={() => toggleSection("postedjobs")}
              >
                Posted jobs
              </button>
            </li>
            </ul>
        <div className="navbar-logout">
          <Button variant="danger" className="mb-2">
            <a href="/admin">Log out</a>
            <i className="fa-solid fa-right-from-bracket"></i>
          </Button>
        </div>
      </div>

      {/* Conditional rendering of the components */}
      {activeSection === "gallery" && <GalleryAdmin />}
      {activeSection === "projects" && <ProjectsAdmin />}
      {activeSection === "clients" && <ClientsAdmin />}
      {activeSection === "careers" && <CareerAdmin />}
      {activeSection === "ourteam" && <OurteamAdmin />}
      {activeSection === "postedjobs" && <PostedJobs />}
 
      </header>
  );
};

export default HeaderAdmin;
