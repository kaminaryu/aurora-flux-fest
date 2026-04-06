const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-[-10%] left-[-5%] opacity-70" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[5%] right-[-8%] opacity-60" />
      <div className="orb orb-pink w-[300px] h-[300px] top-[15%] right-[10%] opacity-40" style={{ animationDelay: "-6s" }} />
      <div className="orb orb-purple w-[200px] h-[200px] bottom-[20%] left-[15%] opacity-30" style={{ animationDelay: "-10s" }} />

      {/* Refraction streaks */}
      <div
        className="refraction-line w-[300px] h-[1px] top-[25%] left-[10%] rotate-[25deg]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.4), transparent)" }}
      />
      <div
        className="refraction-line w-[200px] h-[1px] bottom-[30%] right-[15%] rotate-[-15deg]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232, 121, 249, 0.3), transparent)" }}
      />
      <div
        className="refraction-line w-[250px] h-[1px] top-[60%] left-[40%] rotate-[40deg]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <p
          className="font-body text-sm md:text-base tracking-[0.5em] uppercase text-neon-cyan/70 mb-6 hero-enter"
          style={{ animationDelay: "0.2s" }}
        >
          ✦ A New Dimension of Sound ✦
        </p>

        {/* Glow bloom behind title */}
        <div className="relative inline-block">
          <div
            className="absolute inset-0 -inset-x-20 -inset-y-10 rounded-full opacity-50"
            style={{
              background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.15) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Festival name */}
          <h1
            className="relative font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] uppercase leading-none mb-6 hero-enter"
            style={{
              animationDelay: "0.4s",
              background: "linear-gradient(135deg, #A855F7, #06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NEXUS
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-xl md:text-2xl font-light tracking-wider mb-4 max-w-xl mx-auto hero-enter"
          style={{ color: "rgba(241, 245, 249, 0.7)", animationDelay: "0.6s" }}
        >
          Where frequencies collide and realities merge
        </p>

        {/* Date + Location */}
        <p
          className="font-heading text-xs md:text-sm tracking-[0.4em] uppercase mb-10 hero-enter"
          style={{ color: "rgba(168, 85, 247, 0.6)", animationDelay: "0.8s" }}
        >
          Aug 15 – 17, 2026 &nbsp;·&nbsp; Neo Tokyo Arena, Berlin
        </p>

        {/* CTA */}
        <div className="hero-enter" style={{ animationDelay: "1s" }}>
          <a href="#events" className="btn-glow text-sm md:text-base">
            Enter the Nexus
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12 animate-pulse-glow"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.4), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
