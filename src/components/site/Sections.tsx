import { useEffect, useRef, useState } from "react";
import {
  Fuel, Snowflake, Globe2, Truck, PackageCheck, ThermometerSnowflake, Route,
  ShieldCheck, Clock4, Award, Users, Building2, Factory, ShoppingCart, HardHat,
  ArrowRight, MapPin, Phone, Mail, ChevronDown, Send, Quote, CheckCircle2, MessageCircle,
  Warehouse, FileCheck2, Boxes, Container,
} from "lucide-react";
import t1 from "@/assets/truck-1.jpeg";
import t2 from "@/assets/truck-2.jpeg";
import t3 from "@/assets/truck-3.jpeg";
import t4 from "@/assets/truck-4.jpeg";
import t5 from "@/assets/truck-5.jpeg";
import t7 from "@/assets/truck-7.jpeg";
import logo from "@/assets/logo.jpeg";

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={t1} alt="ECR cross-border truck" className="col-span-2 h-72 w-full rounded-3xl object-cover shadow-elegant" />
            <img src={t2} alt="Fuel tanker" className="h-56 w-full rounded-3xl object-cover shadow-elegant" />
            <img src={t3} alt="Fleet" className="h-56 w-full rounded-3xl object-cover shadow-elegant" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl gradient-gold p-5 shadow-gold" style={{ color: "var(--gold-foreground)" }}>
            <p className="font-display text-3xl font-bold">15+</p>
            <p className="text-xs font-semibold uppercase tracking-widest">Years on the road</p>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">About ECR Translogix</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            African Logistics, <span className="gradient-text">Engineered for Excellence</span>
          </h2>
          <p className="mt-5 text-foreground/80">
            ECR Translogix and Petroleum SA (PTY) LTD is a premium cross-border transport company moving fuel,
            refrigerated cargo and commercial freight across Africa. From Johannesburg to Lusaka, Harare,
            Lubumbashi and beyond, we operate a modern fleet built for long-haul, high-value missions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { I: ShieldCheck, t: "Safety Certified", d: "Compliance with African transport, fuel and HSE standards." },
              { I: Globe2, t: "Pan-African Reach", d: "SADC, COMESA and East African corridor coverage." },
              { I: ThermometerSnowflake, t: "Cold-Chain Ready", d: "Validated reefer units for pharma & FMCG." },
              { I: Award, t: "Corporate Grade", d: "Trusted by mining, energy and FMCG leaders." },
            ].map(({ I, t, d }) => (
              <div key={t} className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white">
                  <I className="h-5 w-5" />
                </div>
                <p className="mt-3 font-semibold">{t}</p>
                <p className="text-sm text-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { I: Fuel, t: "Fuel Transportation", d: "Specialised tanker fleet for diesel, petrol and aviation fuel haulage." },
  { I: Globe2, t: "Cross-Border Logistics", d: "End-to-end corridor management across African borders." },
  { I: Snowflake, t: "Refrigerated Trucks", d: "Temperature-monitored cold chain for sensitive cargo." },
  { I: Truck, t: "Commercial Cargo Transport", d: "Curtain-side, flatbed and container transport at scale." },
  { I: FileCheck2, t: "Freight Forwarding", d: "Documentation, clearing and routing handled by experts." },
  { I: ThermometerSnowflake, t: "Temperature-Controlled Cargo", d: "Reefer units for pharma, dairy, fresh produce." },
  { I: Route, t: "Long-Distance Hauling", d: "Optimised long-haul routes across SADC and beyond." },
  { I: Container, t: "Import & Export Logistics", d: "Seamless multi-modal import/export coordination." },
  { I: HardHat, t: "Mining Logistics Support", d: "Heavy-duty support for mining operations and supply." },
  { I: ShoppingCart, t: "FMCG Distribution", d: "Reliable distribution for fast-moving consumer goods." },
  { I: Boxes, t: "Bulk Goods Transportation", d: "Bulk powder, granular and liquid cargo capability." },
  { I: Warehouse, t: "Warehouse Coordination", d: "Cross-dock and warehouse logistics integration." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32" style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--deep) 60%, transparent), transparent)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Services</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            End-to-End <span className="gradient-text">Cross-Border</span> Solutions
          </h2>
          <p className="mt-4 text-foreground/75">
            A complete suite of premium logistics services engineered for African enterprise.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ I, t, d }, idx) => (
            <div key={t}
              className="reveal group relative overflow-hidden rounded-3xl glass p-6 transition hover:-translate-y-1.5 hover:shadow-elegant"
              style={{ transitionDelay: `${idx * 40}ms` }}>
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition group-hover:opacity-100" style={{ background: "var(--gradient-brand)", filter: "blur(40px)" }} />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-gold shadow-gold" style={{ color: "var(--gold-foreground)" }}>
                  <I className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-foreground/75">{d}</p>
                <a href="#quote" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-3 transition-all">
                  Request service <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
export function WhyChoose() {
  const items = [
    { I: ShieldCheck, t: "Uncompromising Safety", d: "HSE-trained operators and certified petroleum handling." },
    { I: Clock4, t: "On-Time Performance", d: "Corridor planning that beats border bottlenecks." },
    { I: Award, t: "Premium Service", d: "Corporate-grade SLAs for mining, energy & FMCG." },
    { I: Globe2, t: "Pan-African Coverage", d: "SADC, COMESA & East African logistics network." },
  ];
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Built for <span className="gradient-text">African Enterprise</span></h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ I, t, d }, i) => (
            <div key={t} className="reveal glass rounded-3xl p-6 hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white shadow-elegant">
                <I className="h-6 w-6" />
              </div>
              <p className="mt-5 font-display text-lg font-semibold">{t}</p>
              <p className="mt-2 text-sm text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FLEET ---------------- */
const fleet = [
  { img: t2, t: "Petroleum Tankers", d: "Multi-compartment fuel tankers, ADR-compliant haulage." },
  { img: t3, t: "Tanker Fleet", d: "Synchronised tanker convoys for energy clients." },
  { img: t1, t: "Curtain-Side Trucks", d: "High-capacity cross-border freight with branded trailers." },
  { img: t5, t: "Heavy Cargo Units", d: "Long-distance bulk and palletised goods movement." },
  { img: t4, t: "Flatbed Carriers", d: "Steel, machinery, and oversized industrial loads." },
  { img: t7, t: "Premium Long-Haul", d: "Top-tier tractors built for endurance and efficiency." },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Fleet</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">A Modern <span className="gradient-text">African Fleet</span></h2>
          </div>
          <p className="max-w-md text-foreground/75">
            Our fleet is purpose-built for cross-border distance, fuel safety, cold-chain integrity and bulk cargo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map(({ img, t, d }, i) => (
            <div key={t} className="reveal group relative overflow-hidden rounded-3xl shadow-elegant" style={{ transitionDelay: `${i * 60}ms` }}>
              <img src={img} alt={t} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.11 0.025 255 / 0.95))" }} />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-semibold">{t}</p>
                <p className="text-sm text-foreground/80">{d}</p>
              </div>
              <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass">
                <Truck className="h-4 w-4 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COVERAGE ---------------- */
const countries = ["South Africa", "Zimbabwe", "Zambia", "Mozambique", "Botswana", "Namibia", "DRC", "Malawi", "Tanzania", "Kenya", "Angola", "Eswatini"];
export function Coverage() {
  return (
    <section id="coverage" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">African Coverage</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Cross-Border Routes <span className="gradient-text">Across Africa</span></h2>
          <p className="mt-5 text-foreground/75">
            We connect ports, mines, refineries, distribution hubs and major commercial centers across the continent through a network of professionally managed corridors.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {countries.map((c) => (
              <span key={c} className="glass rounded-full px-4 py-1.5 text-xs font-semibold">{c}</span>
            ))}
          </div>
          <a href="#quote" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold shadow-gold" style={{ color: "var(--gold-foreground)" }}>
            Plan a route <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="reveal relative aspect-square w-full overflow-hidden rounded-[2rem] glass p-6">
          <svg viewBox="0 0 500 600" className="h-full w-full">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.82 0.15 85)" />
                <stop offset="1" stopColor="oklch(0.62 0.18 175)" />
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>
            {/* Stylized Africa silhouette */}
            <path
              d="M250 40 C320 50 360 100 365 150 C375 200 400 230 410 280 C420 330 395 370 390 410 C385 460 350 510 300 540 C260 565 220 555 200 520 C175 480 160 450 140 410 C115 360 95 330 100 280 C105 230 120 190 150 150 C175 110 200 60 250 40 Z"
              fill="url(#g)" opacity="0.18" />
            <path
              d="M250 40 C320 50 360 100 365 150 C375 200 400 230 410 280 C420 330 395 370 390 410 C385 460 350 510 300 540 C260 565 220 555 200 520 C175 480 160 450 140 410 C115 360 95 330 100 280 C105 230 120 190 150 150 C175 110 200 60 250 40 Z"
              fill="none" stroke="url(#g)" strokeWidth="2" />
            {/* Routes */}
            {[
              ["M250 470 L240 380", "JHB → HRE"],
              ["M240 380 L210 300", "HRE → LSK"],
              ["M210 300 L260 230", "LSK → DAR"],
              ["M250 470 L320 430", "JHB → MPM"],
              ["M210 300 L150 280", "LSK → LBM"],
            ].map(([d], i) => (
              <g key={i}>
                <path d={d} stroke="url(#g)" strokeWidth="2.5" fill="none" strokeDasharray="8 8">
                  <animate attributeName="stroke-dashoffset" values="0;-160" dur={`${5 + i}s`} repeatCount="indefinite" />
                </path>
              </g>
            ))}
            {[
              { x: 250, y: 470, l: "JHB" }, { x: 240, y: 380, l: "HRE" },
              { x: 210, y: 300, l: "LSK" }, { x: 260, y: 230, l: "DAR" },
              { x: 320, y: 430, l: "MPM" }, { x: 150, y: 280, l: "LBM" },
            ].map(({ x, y, l }) => (
              <g key={l}>
                <circle cx={x} cy={y} r="6" fill="oklch(0.82 0.15 85)" filter="url(#glow)" />
                <circle cx={x} cy={y} r="3" fill="white" />
                <text x={x + 10} y={y + 4} fill="white" fontSize="11" fontWeight="700">{l}</text>
              </g>
            ))}
          </svg>
          <div className="absolute right-6 top-6 glass rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">Live Network</div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
export function Industries() {
  const inds = [
    { I: Factory, t: "Mining" }, { I: Fuel, t: "Energy & Petroleum" },
    { I: ShoppingCart, t: "FMCG & Retail" }, { I: Snowflake, t: "Cold Chain & Pharma" },
    { I: Building2, t: "Construction" }, { I: Container, t: "Import & Export" },
  ];
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Industries We Serve</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Trusted Across <span className="gradient-text">Sectors</span></h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {inds.map(({ I, t }, i) => (
            <div key={t} className="reveal glass rounded-2xl p-6 text-center hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white">
                <I className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const dur = 1600; const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { v: 12, s: "+", l: "Countries Covered" },
    { v: 8500, s: "+", l: "Deliveries Completed" },
    { v: 60, s: "+", l: "Trucks in Fleet" },
    { v: 15, s: "+", l: "Years Experience" },
    { v: 350, s: "+", l: "Satisfied Clients" },
  ];
  return (
    <section className="relative py-20" style={{ background: "linear-gradient(120deg, color-mix(in oklab, var(--primary) 30%, var(--deep)), var(--deep))" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map((s, i) => (
          <div key={s.l} className="reveal text-center" style={{ transitionDelay: `${i * 60}ms` }}>
            <p className="font-display text-4xl font-extrabold sm:text-5xl gradient-text">
              <Counter to={s.v} suffix={s.s} />
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/75">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  { n: "Tendai M.", r: "Operations Director, Energy Group", q: "ECR's tanker convoys have transformed our cross-border fuel delivery. Reliable and professional." },
  { n: "Kgomotso L.", r: "Procurement Lead, Mining Co.", q: "From Lubumbashi to Johannesburg, their team executes flawlessly under pressure." },
  { n: "Chipo S.", r: "Supply Chain Manager, FMCG", q: "Best refrigerated transport partner we've worked with across SADC." },
  { n: "Joseph N.", r: "CEO, Trading House", q: "Documentation, transit, delivery — every part feels engineered. Truly premium." },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Client Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Voices of <span className="gradient-text">Trust</span></h2>
        </div>

        <div className="mt-12 overflow-hidden mask-fade-r">
          <div className="flex w-max gap-5 animate-marquee">
            {[...testimonials, ...testimonials].map((tt, i) => (
              <div key={i} className="w-[340px] sm:w-[420px] glass rounded-3xl p-6">
                <Quote className="h-7 w-7 text-gold" />
                <p className="mt-4 text-sm text-foreground/85">"{tt.q}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-brand font-bold text-white">{tt.n[0]}</div>
                  <div>
                    <p className="text-sm font-semibold">{tt.n}</p>
                    <p className="text-xs text-foreground/60">{tt.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  const imgs = [t1, t2, t3, t4, t5, t7];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Truck Gallery</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Our Fleet, <span className="gradient-text">In Action</span></h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {imgs.map((src, i) => (
            <div key={i} className={`reveal group overflow-hidden rounded-2xl shadow-elegant ${i === 0 ? "col-span-2 row-span-2" : ""}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <img src={src} alt={`Truck ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" style={{ minHeight: i === 0 ? 400 : 200 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
export function Process() {
  const steps = [
    { I: Send, t: "Request Quote", d: "Tell us your cargo, route and timeline." },
    { I: FileCheck2, t: "Planning & Docs", d: "Routing, customs and compliance prepared." },
    { I: Truck, t: "Cargo Dispatch", d: "Premium fleet dispatched with safety briefings." },
    { I: PackageCheck, t: "Delivered Safely", d: "Real-time tracking until safe handover." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Process</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">From Quote to <span className="gradient-text">Delivery</span></h2>
        </div>
        <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px lg:block" style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.15 85 / 0.5), transparent)" }} />
          {steps.map(({ I, t, d }, i) => (
            <div key={t} className="reveal glass rounded-3xl p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl gradient-gold shadow-gold" style={{ color: "var(--gold-foreground)" }}>
                <I className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-deep text-xs font-bold text-gold ring-1 ring-white/20" style={{ background: "var(--deep)" }}>{i + 1}</span>
              </div>
              <p className="mt-5 font-display text-lg font-semibold">{t}</p>
              <p className="mt-2 text-sm text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUOTE FORM ---------------- */
export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", country: "", message: "" });
  const update = (k: string) => (e: any) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    const text = `New Quote Request%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ACompany: ${form.company}%0AService: ${form.service}%0ACountry: ${form.country}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/263771243538?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-5 lg:px-8">
        <div className="reveal lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Request a Quote</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Let's Move Your <span className="gradient-text">Cargo</span></h2>
          <p className="mt-4 text-foreground/75">Share your route, cargo type and timeline. Our logistics desk responds within hours.</p>
          <div className="mt-8 space-y-4">
            {[
              { I: Phone, t: "0692888385 · +263 780 952 724 · +27 766 589 138" },
              { I: Mail, t: "energyrice260@gmail.com" },
              { I: MapPin, t: "Cross-border operations · SADC & East Africa" },
            ].map(({ I, t }, i) => (
              <div key={i} className="flex items-start gap-3 glass rounded-2xl p-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white"><I className="h-5 w-5" /></div>
                <p className="text-sm text-foreground/85">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="reveal lg:col-span-3 glass rounded-3xl p-6 sm:p-8 shadow-elegant">
          {submitted ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full gradient-gold shadow-gold" style={{ color: "var(--gold-foreground)" }}>
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">Quote request sent!</h3>
              <p className="mt-2 text-sm text-foreground/75">We've opened WhatsApp so our team can confirm right away.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" value={form.name} onChange={update("name")} required />
                <Input label="Email Address" type="email" value={form.email} onChange={update("email")} required />
                <Input label="Phone Number" value={form.phone} onChange={update("phone")} required />
                <Input label="Company" value={form.company} onChange={update("company")} />
                <Select label="Service" value={form.service} onChange={update("service")} options={services.map((s) => s.t)} />
                <Input label="Country" value={form.country} onChange={update("country")} />
                <div className="sm:col-span-2">
                  <Textarea label="Message" value={form.message} onChange={update("message")} />
                </div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3.5 text-sm font-semibold shadow-gold hover:scale-[1.01] transition" style={{ color: "var(--gold-foreground)" }}>
                Send Request <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Input({ label, ...p }: any) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</span>
      <input {...p} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition" />
    </label>
  );
}
function Textarea({ label, ...p }: any) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</span>
      <textarea {...p} rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition" />
    </label>
  );
}
function Select({ label, options, ...p }: any) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</span>
      <select {...p} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition">
        <option value="" className="bg-deep">Select a service</option>
        {options.map((o: string) => <option key={o} value={o} className="bg-deep">{o}</option>)}
      </select>
    </label>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "Which countries do you cover?", a: "We move cargo across SADC and East African corridors including South Africa, Zimbabwe, Zambia, Mozambique, DRC, Botswana, Namibia, Malawi, Tanzania and Kenya." },
  { q: "How is fuel transportation handled?", a: "Our petroleum tankers are operated by certified drivers, ADR-style protocols, and dedicated safety briefings on every haul." },
  { q: "Do you provide refrigerated transport?", a: "Yes — our reefer units are temperature-monitored end-to-end for pharma, dairy, fresh produce and high-value perishables." },
  { q: "What about customs documentation?", a: "Our freight desk handles clearing, transit bonds and route documentation across multiple African borders." },
  { q: "How long are typical transit times?", a: "Transit depends on corridor and border efficiency. JHB → Harare typically 2–3 days; JHB → Lusaka 3–4 days; longer for Central/East Africa." },
  { q: "How do I request a quote?", a: "Use the quote form above or WhatsApp our operations desk on +263 77 124 3538 with your route and cargo details." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Common <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal glass rounded-2xl">
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-gold transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-foreground/75">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT + FOOTER ---------------- */
export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal grid gap-6 lg:grid-cols-3">
          {[
            { I: Phone, t: "Call us", v: ["0692888385", "+263 780 952 724", "+27 766 589 138"] },
            { I: Mail, t: "Email", v: ["energyrice260@gmail.com"] },
            { I: MessageCircle, t: "WhatsApp", v: ["+263 77 124 3538"] },
          ].map(({ I, t, v }) => (
            <div key={t} className="glass rounded-3xl p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-gold shadow-gold" style={{ color: "var(--gold-foreground)" }}>
                <I className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">{t}</p>
              {v.map((x) => <p key={x} className="mt-1 text-sm font-semibold">{x}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10" style={{ background: "var(--deep)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white">
              <img src={logo} alt="ECR Translogix" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="font-display font-bold">ECR TRANSLOGIX</p>
              <p className="text-xs uppercase tracking-widest text-gold">& Petroleum SA</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-foreground/70">Premium African cross-border transport — fuel, refrigerated and commercial cargo logistics across the continent.</p>
        </div>

        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            {["About", "Services", "Fleet", "Coverage", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            {["Fuel Transportation", "Cross-Border Logistics", "Refrigerated Trucks", "Commercial Cargo", "Mining Logistics"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Newsletter</p>
          <p className="mt-3 text-sm text-foreground/70">Logistics insights and corridor updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input type="email" required placeholder="Email address" className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-gold" />
            <button className="rounded-full gradient-gold px-4 py-2.5 text-sm font-semibold" style={{ color: "var(--gold-foreground)" }}>Join</button>
          </form>
          <div className="mt-5 flex gap-2">
            {["FB", "IG", "TT", "IN", "WA"].map((x) => (
              <a key={x} href="#" className="grid h-9 w-9 place-items-center rounded-full glass text-xs font-bold hover:text-gold">{x}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-foreground/60 lg:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} ECR Translogix and Petroleum SA (PTY) LTD. All rights reserved.</p>
          <p>Website designed by <a className="text-gold hover:underline" href="https://www.webdevpro.tech" target="_blank" rel="noreferrer">www.webdevpro.tech</a> · call / App +27 81 215 9792</p>
        </div>
      </div>
    </footer>
  );
}
