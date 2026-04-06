import { useState, useEffect } from "react";

const navLinks = [
  { label: "Info", href: "#info" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel border-b py-3"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { borderColor: "rgba(168, 85, 247, 0.1)" } : {}}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-[0.3em] uppercase"
          style={{
            background: "linear-gradient(135deg, #A855F7, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          NEXUS
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-neon-purple transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#events"
          className="btn-glow text-xs py-2 px-5 hidden md:inline-block"
        >
          Get Tickets
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
