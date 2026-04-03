const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora background blobs */}
      <div className="aurora-blob w-[600px] h-[600px] bg-neon-cyan/20 top-[-10%] left-[-10%]" style={{ animationDelay: "0s" }} />
      <div className="aurora-blob w-[500px] h-[500px] bg-neon-purple/20 bottom-[-10%] right-[-10%]" style={{ animationDelay: "-7s" }} />
      <div className="aurora-blob w-[400px] h-[400px] bg-neon-blue/15 top-[30%] right-[20%]" style={{ animationDelay: "-14s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <p className="font-body text-sm md:text-base tracking-[0.5em] uppercase text-neon-cyan/70 mb-6 animate-float-slow">
          ✦ A New Dimension of Sound ✦
        </p>

        {/* Festival name */}
        <h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] uppercase leading-none mb-6 text-glow-cyan"
          style={{
            background: "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          NEXUS
        </h1>

        {/* Tagline */}
        <p className="font-body text-xl md:text-2xl text-muted-foreground font-light tracking-wider mb-4 max-w-xl mx-auto">
          Where frequencies collide and realities merge
        </p>

        {/* Date + Location */}
        <p className="font-heading text-xs md:text-sm tracking-[0.4em] uppercase text-neon-cyan/60 mb-10">
          Aug 15 – 17, 2026 &nbsp;·&nbsp; Neo Tokyo Arena, Berlin
        </p>

        {/* CTA */}
        <a href="#events" className="btn-glow text-sm md:text-base">
          Enter the Nexus
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-neon-cyan/40 to-transparent animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
