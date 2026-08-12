"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, SITE, img } from "@/lib/site";

/**
 * Render the correct element for a nav href:
 *  - external (http…) → <a target="_blank">
 *  - internal route/anchor ("/…", "/#…") → next/link so basePath ("/msw") is applied
 */
function NavAnchor({ href, external, className, children, onClick, role }) {
  if (external) {
    return (
      <a
        href={href}
        className={className}
        role={role}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} role={role} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [openSub, setOpenSub] = useState(null); // which mobile sub-menu is expanded

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenSub(null);
  };

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link href="/" className="brand" aria-label={`${SITE.name} — home`} onClick={close}>
          <img src={img("1_logo.png")} alt={`${SITE.name} logo`} />
        </Link>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`} aria-label="Primary">
          {NAV.map((item) => {
            const hasChildren = !!item.children;
            const isSubOpen = openSub === item.label;
            return (
              <div key={item.label} className={`nav-item ${isSubOpen ? "open-sub" : ""}`}>
                <NavAnchor
                  className="nav-link"
                  href={item.href}
                  onClick={(e) => {
                    if (hasChildren && window.matchMedia("(max-width: 860px)").matches) {
                      // On mobile, first tap expands the sub-menu instead of navigating
                      e.preventDefault();
                      setOpenSub(isSubOpen ? null : item.label);
                    } else {
                      close();
                    }
                  }}
                >
                  {item.label}
                  {hasChildren && <span className="caret" aria-hidden="true" />}
                </NavAnchor>

                {hasChildren && (
                  <div className="dropdown" role="menu">
                    {item.label === "Health Workshops" && (
                      <span className="dropdown-label">Portfolios</span>
                    )}
                    {item.children.map((child) => (
                      <NavAnchor
                        key={child.label}
                        href={child.href}
                        external={child.external}
                        role="menuitem"
                        onClick={close}
                      >
                        {child.label}
                      </NavAnchor>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      <div className={`nav-scrim ${open ? "show" : ""}`} onClick={close} aria-hidden="true" />
    </header>
  );
}
