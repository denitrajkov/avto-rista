"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Početna" },
  { href: "#services", label: "Usluge" },
  { href: "#why-us", label: "O nama" },
  { href: "#reviews", label: "Utisci" },
  { href: "#booking", label: "Akcije" },
  { href: "#contact", label: "Kontakt" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-menu">
      <button
        className={`mobile-menu-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Zatvori navigaciju" : "Otvori navigaciju"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen && (
        <nav
          className="mobile-menu-panel"
          id="mobile-navigation"
          aria-label="Mobilna navigacija"
        >
          <p className="mobile-menu-heading">Navigacija</p>
          {links.map(({ href, label }) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="mobile-menu-booking"
            href="#booking"
            onClick={closeMenu}
          >
            Zakažite servis
          </a>
        </nav>
      )}
    </div>
  );
}
