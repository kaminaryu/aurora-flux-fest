import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import orgPhoto from "@/assets/org-photo.jpg";

const stats = [
  { value: "5+", label: "Years Active" },
  { value: "200K+", label: "Fans Worldwide" },
  { value: "12", label: "Editions Held" },
];

const AboutOrg = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-cyan w-[400px] h-[400px] top-[20%] right-[-10%] opacity-10" style={{ animationDelay: "-5s" }} />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section heading */}
        <div className="animate-on-scroll mb-12 md:mb-16">
          <h2 className="section-heading text-center">
            The{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Organization
            </span>
          </h2>
        </div>

        {/* Glass container */}
        <div
          className="animate-on-scroll glass-panel rounded-2xl p-6 md:p-10 lg:p-12"
          style={{
            border: "1px solid rgba(168, 85, 247, 0.25)",
            boxShadow:
              "0 0 60px rgba(168, 85, 247, 0.1), inset 0 0 40px rgba(168, 85, 247, 0.03)",
          }}
        >
          {/* Cinematic photo frame */}
          <div
            className="relative rounded-xl overflow-hidden mb-8 md:mb-12"
            style={{
              border: "1px solid rgba(168, 85, 247, 0.2)",
              boxShadow:
                "0 0 30px rgba(168, 85, 247, 0.1), inset 0 0 40px rgba(168, 85, 247, 0.05)",
            }}
          >
            {/* Refraction line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--neon-purple)) 30%, hsl(var(--neon-cyan)) 70%, transparent)",
                opacity: 0.6,
              }}
            />

            {/* Photo placeholder */}
            <img
              src={orgPhoto}
              alt="Nova Collective festival crowd with dramatic laser show"
              className="w-full aspect-[3/1] object-cover"
              loading="lazy"
              width={1920}
              height={640}
            />
          </div>

          {/* Two-column: stats + description */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Stat cards */}
            <div className="flex flex-row md:flex-col gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="animate-on-scroll glass-panel shimmer-sweep flex-1 p-5 text-center md:text-left"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="animate-on-scroll flex flex-col justify-center" style={{ transitionDelay: "300ms" }}>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NOVA COLLECTIVE
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mb-6">
                Born from a shared obsession with sound, light, and the spaces between —
                Nova Collective has been pushing the boundaries of live experience design
                since 2019. We don't just throw events; we architect worlds that dissolve
                the line between audience and art.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-heading tracking-widest uppercase text-primary hover:text-accent transition-colors group w-fit"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrg;
