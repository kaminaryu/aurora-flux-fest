const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-glass-border/20 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-lg font-bold tracking-[0.3em] text-neon-cyan mb-2">
              NEXUS
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              The future of festival culture.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Get in Touch
            </p>
            <a
              href="mailto:hello@nexusfestival.io"
              className="font-body text-sm text-neon-cyan/80 hover:text-neon-cyan transition-colors"
            >
              hello@nexusfestival.io
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {["X", "IG", "TG", "DC"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-heading text-xs tracking-[0.2em] text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-glass-border/10 text-center">
          <p className="font-body text-xs text-muted-foreground/50 tracking-wider">
            © 2026 NEXUS Festival. All rights reserved. A statement, not a template.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
