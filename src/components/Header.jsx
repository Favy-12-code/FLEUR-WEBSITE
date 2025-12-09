import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import '../styles/style.css'

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);
const [mobileDropdown, setMobileDropdown] = useState(null);
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 650);
const [popupStyle, setPopupStyle] = useState({});

const headerRef = useRef(null);
const popupRef = useRef(null);

useEffect(() => {
const handleResize = () => {
const desktopMode = window.innerWidth >= 650;
setIsDesktop(desktopMode);
if (desktopMode) {
setMobileDropdown(null);
setMenuOpen(false);
} else {
setOpenDropdown(null);
}
};
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
const handleClickOutside = (e) => {
const clickedInsideHeader =
headerRef.current && headerRef.current.contains(e.target);
const clickedInsidePopup =
popupRef.current && popupRef.current.contains(e.target);
if (!clickedInsideHeader && !clickedInsidePopup) {
setOpenDropdown(null);
setMenuOpen(false);
setMobileDropdown(null);
}
};
document.addEventListener("mousedown", handleClickOutside);
document.addEventListener("touchstart", handleClickOutside);
return () => {
document.removeEventListener("mousedown", handleClickOutside);
document.removeEventListener("touchstart", handleClickOutside);
};
}, []);

function openDesktopDropdownAt(name, anchorElement) {
if (!anchorElement || !isDesktop) {
setOpenDropdown((prev) => (prev === name ? null : name));
return;
}
const rect = anchorElement.getBoundingClientRect();
const pageXCenter = rect.left + rect.width / 2;
setPopupStyle({
left: `${pageXCenter}px`,
transform: "translateX(-50%)",
});
setOpenDropdown((prev) => (prev === name ? null : name));
}

const toggleMobileDropdown = (name) => {
setMobileDropdown(mobileDropdown === name ? null : name);
};

const goToSection = (page, hash) => {
setMenuOpen(false);
setOpenDropdown(null);
setMobileDropdown(null);
window.location.href = page + hash;
};

const renderArrow = (name) => {
if (!isDesktop) {
return mobileDropdown === name ? "fa-angle-down" : "fa-angle-right";
}
return openDropdown === name ? "fa-angle-up" : "fa-angle-down";
};

return ( <header className="header" ref={headerRef}> <div className="header-container">

<div className="hamburger" onClick={() => setMenuOpen(!menuOpen) }> <svg width="26" height="20"> <rect width="26" height="3" rx="1.5" fill="currentColor" /> <rect y="10" width="16" height="3" rx="1.5" fill="currentColor" /> </svg> </div>

    <div className="logo">
      <NavLink to="/">FLEUR</NavLink>
    </div>

    <ul className={`nav-links ${menuOpen && !isDesktop ? "open" : ""}`}>
      {!isDesktop && menuOpen && (
        <li className="close-btn" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </li>
      )}

      <li className="dropdown-header" onClick={() => goToSection('/home', '#hero')}>
        <NavLink to="/home" onClick={() => setMenuOpen(false) }>
          HOME AND AWAY
        </NavLink>
      </li>

      <li className="dropdown">
        <div className="dropdown-header">
          <NavLink to="/collections">COLLECTIONS</NavLink>
          <i
            className={`fas ${renderArrow("collections")} arrow`}
            onClick={(e) => {
              e.stopPropagation();
              if (isDesktop) {
                const headerEl = e.currentTarget.closest(".dropdown-header");
                const anchorEl = headerEl ? headerEl.querySelector("a") : null;
                openDesktopDropdownAt("collections", anchorEl);
              } else {
                toggleMobileDropdown("collections");
              }
            }}
          ></i>
        </div>

        {!isDesktop && mobileDropdown === "collections" && (
          <ul className={`dropdown-content ${mobileDropdown === "collections" ? "open" : ""}`}>
            <li onClick={() => goToSection("/collections", "#new")}>
              New Arrivals
            </li>
            <li onClick={() => goToSection("/collections", "#popular")}>
              Popular Items
            </li>
            <li onClick={() => goToSection("/collections", "#gift")}>
              Gift Ideas
            </li>
            <li onClick={() => goToSection("/collections", "#luxury")}>
              Luxury Bouquets
            </li>
            <li onClick={() => goToSection("/collections", "#seasonal")}>
              Seasonal Collections
            </li>
            <li onClick={() => goToSection("/collections", "#home-decor")}>
              Home Décor
            </li>
          </ul>
        )}
      </li>

      <li className="dropdown">
        <div className="dropdown-header">
          <NavLink to="/about">ABOUT</NavLink>
          <i
            className={`fas ${renderArrow("about")} arrow`}
            onClick={(e) => {
              e.stopPropagation();
              if (isDesktop) {
                const headerEl = e.currentTarget.closest(".dropdown-header");
                const anchorEl = headerEl ? headerEl.querySelector("a") : null;
                openDesktopDropdownAt("about", anchorEl);
              } else {
                toggleMobileDropdown("about");
              }
            }}
          ></i>
        </div>

        {!isDesktop && mobileDropdown === "about" && (
          <ul className={`dropdown-content ${mobileDropdown === "about" ? "open" : ""}`}>
            <li onClick={() => goToSection("/about", "#story")}>Our Story</li>
            <li onClick={() => goToSection("/about", "#mission")}>Mission</li>
            <li onClick={() => goToSection("/about", "#team")}>Team</li>
            <li onClick={() => goToSection("/about", "#ourServices")}>Services</li>
            <li onClick={() => goToSection("/about", "#testimonials")}>Testimonials</li>
            <li onClick={() => goToSection("/about", "#press")}>Press</li>
          </ul>
        )}
      </li>

      <li className="dropdown">
        <div className="dropdown-header">
          <NavLink to="/contact">CONTACT</NavLink>
          <i
            className={`fas ${renderArrow("contact")} arrow`}
            onClick={(e) => {
              e.stopPropagation();
              if (isDesktop) {
                const headerEl = e.currentTarget.closest(".dropdown-header");
                const anchorEl = headerEl ? headerEl.querySelector("a") : null;
                openDesktopDropdownAt("contact", anchorEl);
              } else {
                toggleMobileDropdown("contact");
              }
            }}
          ></i>
        </div>

        {!isDesktop && mobileDropdown === "contact" && (
          <ul className={`dropdown-content ${mobileDropdown === "contact" ? "open" : ""}`}>
            <li onClick={() => goToSection("/contact", "#contactUs")}>
              Get in Touch
            </li>
            <li onClick={() => goToSection("/contact", "#visitUs")}>
              Visit Us
            </li>
            <li onClick={() => goToSection("/contact", "#conditions")}>
              Customer Support
            </li>
            <li onClick={() => goToSection("/contact", "#privacy")}>
              Wholesale / Collab
            </li>
          </ul>
        )}
      </li>
    </ul>

    {isDesktop && openDropdown && (
      <div className="dropdown-popup" ref={popupRef} style={popupStyle}>
        <ul>
          {openDropdown === "collections" && (
            <>
              <li onClick={() => goToSection("/collections", "#new")}>
                New Arrivals
              </li>
              <li onClick={() => goToSection("/collections", "#popular")}>
                Popular Items
              </li>
              <li onClick={() => goToSection("/collections", "#gift")}>
                Gift Ideas
              </li>
              <li onClick={() => goToSection("/collections", "#luxury")}>
                Luxury Bouquets
              </li>
              <li onClick={() => goToSection("/collections", "#seasonal")}>
                Seasonal Collections
              </li>
              <li onClick={() => goToSection("/collections", "#home-decor")}>
                Home Décor
              </li>
            </>
          )}

          {openDropdown === "about" && (
            <>
              <li onClick={() => goToSection("/about", "#story")}>
                Our Story
              </li>
              <li onClick={() => goToSection("/about", "#mission")}>Mission</li>
              <li onClick={() => goToSection("/about", "#team")}>Team</li>
              <li onClick={() => goToSection("/about", "#ourServices")}>
                Services
              </li>
              <li onClick={() => goToSection("/about", "#testimonials")}>
                Testimonials
              </li>
              <li onClick={() => goToSection("/about", "#press")}>Press</li>
            </>
          )}

          {openDropdown === "contact" && (
            <>
              <li onClick={() => goToSection("/contact", "#contactUs")}>
                Get in Touch
              </li>
              <li onClick={() => goToSection("/contact", "#visitUs")}>
                Visit Us
              </li>
              <li onClick={() => goToSection("/contact", "#conditions")}>
                Customer Support
              </li>
              <li onClick={() => goToSection("/contact", "#privacy")}>
                Wholesale / Collab
              </li>
            </>
          )}
        </ul>
      </div>
    )}
  </div>
</header>

);
}
