"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { brand, navCta, navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ignoreHover = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    ignoreHover.current = false;
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;

      if (menuOpen || servicesOpen || y < 24) {
        setHidden(false);
        return;
      }

      if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen, servicesOpen]);

  const closeServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setServicesOpen(false);
  };

  const openServices = () => {
    if (ignoreHover.current) {
      return;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setServicesOpen(true);
  };

  const closeServicesSoon = () => {
    ignoreHover.current = false;
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const closeMenus = () => {
    ignoreHover.current = true;
    setMenuOpen(false);
    closeServices();
  };

  return (
    <header
      className={cn(
        "navbar",
        menuOpen && "is-open",
        hidden && "is-hidden",
        servicesOpen && "is-services-open",
      )}
    >
      <nav className="navbar__bar" aria-label="Primary">
        <Link href="/" className="navbar__logo" onClick={closeMenus}>
          <span className="navbar__mark">
            <img src={brand.navLogo} alt="" width={48} height={48} />
          </span>
          {brand.name}
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div
                  className="navbar__dropdown"
                  key={link.href}
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesSoon}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "navbar__link navbar__dropdown-btn",
                      pathname.startsWith("/services") && "is-active",
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onFocus={openServices}
                  >
                    {link.label}
                    <img
                      className="navbar__chevron"
                      src="/icons/chevron.svg"
                      alt=""
                      width={8}
                      height={5}
                    />
                  </Link>
                  <div
                    className={cn("navbar__menu", servicesOpen && "is-open")}
                    onMouseEnter={openServices}
                  >
                    <div className="navbar__menu-panel">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="navbar__menu-item"
                          onClick={closeMenus}
                        >
                          {service.navIcon ? (
                            <span className="navbar__menu-icon">
                              <img src={service.navIcon} alt="" width={22} height={22} loading="lazy" decoding="async" />
                            </span>
                          ) : null}
                          {service.menuLabel ?? service.navLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn("navbar__link", pathname === link.href && "is-active")}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="navbar__actions">
          <Button href={navCta.href} size="sm">
            {navCta.label}
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
