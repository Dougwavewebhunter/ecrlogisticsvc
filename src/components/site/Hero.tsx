import { useEffect, useState } from "react";
import { ArrowRight, PhoneCall, Truck, Fuel, Snowflake, Globe2 } from "lucide-react";
import t1 from "@/assets/truck-1.jpeg";
import t2 from "@/assets/truck-2.jpeg";
import t3 from "@/assets/truck-3.jpeg";
import t4 from "@/assets/truck-4.jpeg";
import t5 from "@/assets/truck-5.jpeg";
import t7 from "@/assets/truck-7.jpeg";

const slides = [
  { img: t1, eyebrow: "Pan-African Network", title: "Trusted African Transport Network", sub: "Moving cargo across borders with precision, safety and uncompromising service." },
  { img: t2, eyebrow: "Petroleum Logistics", title: "Fuel Transportation Across Africa", sub: "Specialised tanker fleet engineered for safe, efficient cross-border fuel haulage." },
  { img: t3, eyebrow: "Fleet & Distribution", title: "Cross-Border Freight Solutions", sub: "Reliable corridor coverage from South Africa to Central & East Africa." },
  { img: t5, eyebrow: "Cold Chain", title: "Refrigerated Cargo Transport", sub: "Temperature-controlled logistics for perishables, pharma and high-value goods." },
  { img: t7, eyebrow: "Heavy Cargo", title: "Commercial Goods Logistics", sub: "Long-haul, bulk and FMCG transport executed with corporate-grade reliability." },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <img src={s.img} alt={s.title} className={`absolute inset-0 h-full w-full object-cover ${i === idx ? "scale-105" : "scale-100"} transition-transform duration-[8000ms] ease-out`} />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, var(--deep) 100%)" }} />
        </div>
      ))}

      {/* floating logistics icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[Truck, Fuel, Snowflake, Globe2].map((Ic, k) => (
          <Ic key={k} className="absolute text-white/10 animate-float"
            style={{
              width: 80 + k * 24, height: 80 + k * 24,
              top: `${15 + k * 18}%`, left: `${(k * 27 + 8) % 90}%`,
              animationDelay: `${k * 1.2}s`,
            }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-24 pt-32 lg:px-8">
        <div className="max-w-3xl">
          <span key={`e-${i}`} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {slides[i].eyebrow}
          </span>
          <h1 key={`t-${i}`} className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up">
            {slides[i].title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text">{slides[i].title.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p key={`s-${i}`} className="mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg animate-fade-up">
            {slides[i].sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold shadow-gold hover:scale-[1.03] transition" style={{ color: "var(--gold-foreground)" }}>
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/15 transition">
              <PhoneCall className="h-4 w-4 text-gold" /> Contact Us
            </a>
          </div>

          {/* slide indicators */}
          <div className="mt-10 flex items-center gap-2">
            {slides.map((_, k) => (
              <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-gold" : "w-5 bg-white/30 hover:bg-white/60"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* moving cargo line */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-1/3 gradient-gold animate-marquee" />
      </div>
    </section>
  );
}
