"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { Mail, ExternalLink, Globe, GraduationCap, Briefcase, ChevronDown } from "lucide-react";

// --- Componente de Mariposas Lineales ---
// Modificado para mix-blend-multiply en fondos claros
function Butterflies() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  const butterflies = Array.from({ length: 8 }).map((_, i) => {
    const delay = Math.random() * 15;
    const duration = 15 + Math.random() * 20;
    const isLeftToRight = Math.random() > 0.5;
    const startY = `${10 + Math.random() * 80}vh`;
    const endY = `${10 + Math.random() * 80}vh`;

    return (
      <motion.div
        key={i}
        className="fixed z-20 pointer-events-none opacity-40 mix-blend-multiply text-coralUI"
        initial={{ 
          x: isLeftToRight ? "-10vw" : "110vw", 
          y: startY,
          rotate: isLeftToRight ? 15 : -195
        }}
        animate={{ 
          x: isLeftToRight ? "110vw" : "-10vw", 
          y: endY 
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
      >
        <motion.svg 
          width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          animate={{ scaleY: [1, 0.4, 1] }} 
          transition={{ duration: 0.2 + Math.random() * 0.2, repeat: Infinity }}
        >
          <path d="M4 12c-2.3 0-3.6-2.5-2.2-4.1l2.4-2.8a2 2 0 0 1 2.8-.2l3.4 2.8c.8.7 2.2.7 3 0l3.4-2.8a2 2 0 0 1 2.8.2l2.4 2.8c1.4 1.6.1 4.1-2.2 4.1h-4" />
          <path d="M20 12c2.3 0 3.6 2.5 2.2 4.1l-2.4 2.8a2 2 0 0 1-2.8.2L13.6 16.3a2.2 2.2 0 0 0-3.2 0L7 19.1a2 2 0 0 1-2.8-.2l-2.4-2.8c-1.4-1.6-.1-4.1 2.2-4.1h4" />
          <path d="M12 4v16" />
        </motion.svg>
      </motion.div>
    );
  });

  return <>{butterflies}</>;
}


// --- Diccionario de Traducciones ---
const dict = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", education: "Education", ai: "AI Workflow", projects: "Work", contact: "Contact" },
    hero: { greeting: "HELLO, I AM", role: "Fullstack Semi Senior Developer & Product Owner", desc: "Crafting immersive, high-performance web experiences while leading product strategy with Agile teams." },
    about: { title: "The Journey", p1: "I am a Fullstack Semi Senior Developer with 4+ years building solutions for banking, e-commerce, and tourism, and a Product Owner leading 3 projects with direct stakeholder coordination.", p2: "My architecture is built on clean code, SOLID principles, design patterns, and unit testing. I leverage generative AI (Claude, ChatGPT) to speed up technical analysis and decision-making. Native Spanish speaker with English B2, ready to collaborate in dynamic, global teams." },
    skills: {
      title: "Tech Stack",
      categories: [
        { name: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "HTML", "CSS / SCSS"] },
        { name: "Backend", items: ["Node.js", "REST APIs", "Strapi", ".NET (basic)"] },
        { name: "Databases", items: ["MongoDB", "Firebase"] },
        { name: "DevOps & Infra", items: ["Docker", "Git"] },
        { name: "Integrations", items: ["Mercado Pago", "PayPal", "OTP Email Login", "QR systems"] },
        { name: "Observability", items: ["Sentry"] },
        { name: "AI & Assistants", items: ["Claude", "ChatGPT", "Gemini", "Cursor", "Antigravity"] },
        { name: "Practices & Patterns", items: ["SOLID", "Unit Testing", "Factory Method", "Chain of Responsibility"] }
      ]
    },
    experience: {
      title: "Evolution",
      items: [
        {
          present: "2022 - Present",
          role: "Frontend Semi Senior Developer",
          company: "Banana Software",
          desc: "Engineered critical Angular features for homebanking, insurance, and e-commerce platforms.",
          bullets: [
            "Built complex ABM modules for user, inventory, and insurable asset management",
            "Integrated payment gateways (PayPal, Mercado Pago) and authentication systems",
            "Migrated components to React and Next.js, improving institutional landing performance by 35%",
            "Improved code maintainability through SOLID principles and unit testing"
          ]
        },
        {
          present: "2022 - Present",
          role: "Product Owner (3 Projects)",
          company: "Banana Software",
          desc: "Led product strategy with direct coordination between stakeholders and the development team.",
          bullets: [
            "Direct client contact and needs validation, building backlogs aligned with business goals",
            "Facilitated communication between clients, executives, and development teams",
            "Ran agile delivery cycles (Dailies, Plannings, Retros, Refinements) using Jira and Trello",
            "Prioritized by business impact and ROI, ensuring tangible value every sprint"
          ]
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      items: [
        { name: "Frontend Web Development", school: "CoderHouse", date: "2020 - 2021" },
        { name: "Angular Development", school: "CoderHouse", date: "2021 - 2022" },
        { name: "Full Stack Developer", school: "Codo a Codo", date: "2022 - 2023" },
        { name: "Advanced TypeScript", school: "Platzi", date: "2025" },
        { name: "Advanced Angular", school: "Platzi", date: "2025" },
        { name: "Intro to AI & Generative Agents", school: "Microsoft Learning", date: "2026" },
        { name: "Claude 101", school: "Anthropic", date: "2026" }
      ]
    },
    ai: {
      title: "AI-Driven Workflow",
      desc: "I use generative AI as a force multiplier across the product lifecycle, not just for code.",
      tools: [
        { name: "Claude", use: "Technical complexity analysis, requirement validation, acceptance criteria" },
        { name: "ChatGPT / Gemini", use: "Technical documentation, best-practice research, stakeholder communication" },
        { name: "Cursor", use: "Rapid feature prototyping and POC acceleration" }
      ],
      results: [
        "30% faster architecture analysis for new features",
        "Clearer technical documentation, agreed upon by team and clients",
        "Optimized refinement cycles with AI-assisted requirement validation"
      ]
    },
    projects: {
      title: "Selected Works", 
      items: [
        { title: "Commercial Management Backoffice", desc: "Internal administrative system for managing clients, employees, sales, and stock in a retail distribution company. Built to optimize daily operations with centralized metrics.", tech: ["Angular", "MongoDB", "Sentry"] },
        { title: "Corporate Benefits Platform", desc: "Web application where employees access a catalog of benefits, discounts, and redeemable prizes using a points system. Mapped dynamically to improve engagement.", tech: ["Angular", "Strapi", "REST APIs"] },
        { title: "Nautical Experiences Marketplace", desc: "Ecommerce for booking boat and sailboat trips. Includes distinct profiles for captains and tourists, real-time booking, chatting, QR generation, and B2B capabilities.", tech: ["Angular", "Node.js", "React", "Next.js", "MongoDB", "Firebase", "PayPal", "Mercado Pago", "Sentry"] },
        { title: "Bank Insurance Admin Platform", desc: "Web system for managing insurance associated with financial products. Integrates securely with bank infrastructure to centralize the insurance operations.", tech: ["Angular", "Node.js", "Docker", "Sentry", "REST APIs"] },
        { title: "Homebanking Migration", desc: "Migration of a major homebanking frontend from legacy technologies to Angular. Focused on extreme modernization, modular refactoring, and responsiveness.", tech: ["Angular", "TypeScript", "RxJS", "Modular Arch"] },
        { title: "Corporate Landing Pages", desc: "Design and creation of institutional sites built for optimal conversion, high performance generation of leads, and flawless SEO indexing.", tech: ["React", "Next.js", "SSR", "SEO optimization"] }
      ]
    },
    contact: { title: "Let's Connect", desc: "Ready to build something extraordinary? My inbox is always open.", btn: "Send Message" }
  },
  es: {
    nav: { about: "Sobre Mí", skills: "Skills", experience: "Experiencia", education: "Educación", ai: "Metodología IA", projects: "Proyectos", contact: "Contacto" },
    hero: { greeting: "HOLA, SOY", role: "Desarrolladora Fullstack Semi Senior & Product Owner", desc: "Creando experiencias web de alto rendimiento mientras lidero la estrategia de producto con equipos Ágiles." },
    about: { title: "El Recorrido", p1: "Soy Desarrolladora Fullstack Semi Senior con más de 4 años de experiencia creando soluciones para banca, e-commerce y turismo, y Product Owner liderando 3 proyectos con coordinación directa de stakeholders.", p2: "Mi arquitectura se basa en código limpio, principios SOLID, patrones de diseño y testing. Aprovecho IA generativa (Claude, ChatGPT) para acelerar el análisis técnico y la toma de decisiones. Español nativo e inglés B2, lista para colaborar en equipos dinámicos y globales." },
    skills: {
      title: "Stack Tecnológico",
      categories: [
        { name: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "HTML", "CSS / SCSS"] },
        { name: "Backend", items: ["Node.js", "REST APIs", "Strapi", ".NET (básico)"] },
        { name: "Bases de datos", items: ["MongoDB", "Firebase"] },
        { name: "DevOps / Infra", items: ["Docker", "Git"] },
        { name: "Integraciones", items: ["Mercado Pago", "PayPal", "OTP Email Login", "QR systems"] },
        { name: "Observabilidad", items: ["Sentry"] },
        { name: "IA & Asistentes", items: ["Claude", "ChatGPT", "Gemini", "Cursor", "Antigravity"] },
        { name: "Prácticas & Patrones", items: ["SOLID", "Testing unitario", "Factory Method", "Chain of Responsibility"] }
      ]
    },
    experience: {
      title: "Evolución",
      items: [
        {
          present: "2022 - Actualidad",
          role: "Desarrolladora Frontend Semi Senior",
          company: "Banana Software",
          desc: "Desarrollo de funcionalidades críticas en Angular para plataformas de homebanking, seguros y e-commerce.",
          bullets: [
            "Implementación de módulos ABM complejos para gestión de usuarios, inventario y activos asegurables",
            "Integración de pasarelas de pago (PayPal, Mercado Pago) y sistemas de autenticación",
            "Migración de componentes hacia React y Next.js, mejorando el rendimiento de landings institucionales en 35%",
            "Optimización de la mantenibilidad del código mediante principios SOLID y testing unitario"
          ]
        },
        {
          present: "2022 - Actualidad",
          role: "Product Owner (3 Proyectos)",
          company: "Banana Software",
          desc: "Liderazgo de la estrategia de producto con coordinación directa entre stakeholders y equipo de desarrollo.",
          bullets: [
            "Contacto directo con clientes y validación de necesidades, creación de backlogs alineados a objetivos comerciales",
            "Facilitación de la comunicación entre clientes, ejecutivos y equipos de desarrollo",
            "Conducción de ciclos de entrega ágiles (Dailies, Plannings, Retros, Refinamientos) usando Jira y Trello",
            "Priorización basada en impacto empresarial y ROI, asegurando valor tangible en cada sprint"
          ]
        }
      ]
    },
    education: {
      title: "Educación & Certificaciones",
      items: [
        { name: "Desarrollo Web Frontend", school: "CoderHouse", date: "2020 - 2021" },
        { name: "Desarrollo Angular", school: "CoderHouse", date: "2021 - 2022" },
        { name: "Full Stack Developer", school: "Codo a Codo", date: "2022 - 2023" },
        { name: "TypeScript Avanzado", school: "Platzi", date: "2025" },
        { name: "Angular Avanzado", school: "Platzi", date: "2025" },
        { name: "Introducción a IA y Agentes Generativos", school: "Microsoft Learning", date: "2026" },
        { name: "Claude 101", school: "Anthropic", date: "2026" }
      ]
    },
    ai: {
      title: "Metodología con IA",
      desc: "Uso la IA generativa como un multiplicador de fuerza en todo el ciclo de vida del producto, no solo para código.",
      tools: [
        { name: "Claude", use: "Análisis de complejidad técnica, validación de requisitos, criterios de aceptación" },
        { name: "ChatGPT / Gemini", use: "Documentación técnica, research de mejores prácticas, comunicación con stakeholders" },
        { name: "Cursor", use: "Prototipado rápido de features y aceleración de POCs" }
      ],
      results: [
        "30% más rápido en el análisis de arquitectura de nuevas features",
        "Documentación técnica más clara, consensuada entre equipo y clientes",
        "Ciclos de refinamiento optimizados con validación de requisitos asistida por IA"
      ]
    },
    projects: {
      title: "Obras Destacadas", 
      items: [
        { title: "Backoffice de Gestión Comercial", desc: "Sistema administrativo interno para la gestión integral de clientes, ventas y stock en distribuidora de retail. Motor flexible para listas de precios estáticas y dinámicas.", tech: ["Angular", "MongoDB", "Sentry"] },
        { title: "Plataforma de Beneficios Corporativos", desc: "Aplicación web donde empleados acceden a un catálogo de beneficios, descuentos y premios canjeables mediante un sistema de puntos. Customización por empresa.", tech: ["Angular", "Strapi", "REST APIs"] },
        { title: "Marketplace Náutico Multiprol", desc: "Ecommerce para reserva de travesías. Roles de capitán y turista. Autenticación, reservas, pagos integrados en múltiples pasarelas y módulo B2B para hoteles con generación de QR.", tech: ["Angular", "Node.js", "React", "Next.js", "MongoDB", "Firebase", "PayPal", "Mercado Pago", "Sentry"] },
        { title: "Administración de Seguros Bancarios", desc: "Sistema web para la gestión de pólizas integradas a productos financieros y flujos de contratación. Centralización en el ecosistema digital dentro del banco.", tech: ["Angular", "Node.js", "Docker", "Sentry", "REST APIs"] },
        { title: "Migración de Homebanking", desc: "Participación en la migración estructural del frontend de una plataforma de homebanking desde tecnología legacy hacia Angular. Refactorización a arquitectura modular.", tech: ["Angular", "TypeScript", "RxJS", "Arquitectura modular"] },
        { title: "Landing Pages Corporativas", desc: "Desarrollo de múltiples sitios institucionales orientados a conversión y captación de leads. Implementación orientada a SEO y rendering optimizado (SSR).", tech: ["React", "Next.js", "SSR", "SEO optimization"] }
      ]
    },
    contact: { title: "Conectemos", desc: "¿Lista/o para construir algo extraordinario? Mi bandeja de entrada siempre está abierta.", btn: "Enviar Mensaje" }
  }
};

// --- Componente Custom Cursor (Adaptado a Modo Claro) ---
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!(target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')));
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-coralUI rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16, 
          scale: isHovering ? 2 : 1, 
          backgroundColor: isHovering ? "rgba(255, 166, 158, 0.15)" : "rgba(255, 166, 158, 0)" 
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-slateUI rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4, 
          opacity: isHovering ? 0 : 1 
        }}
        transition={{ duration: 0 }}
      />
    </>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const t = dict[lang];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative bg-baseBg text-slateUI selection:bg-coralUI/30 selection:text-slateUI cursor-auto overflow-hidden">
      <CustomCursor />
      <Butterflies />

      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-mintUI via-skyUI to-coralUI origin-left z-[100]" />

      {/* Fondos Abstractos Intensificados para Light Mode */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ y: yBg1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-mintUI/50 blur-[120px] mix-blend-multiply" />
        <motion.div style={{ y: yBg2 }} className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-skyUI/40 blur-[100px] mix-blend-multiply" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-coralUI/20 blur-[150px] mix-blend-multiply" />
      </div>

      <nav className="fixed top-0 w-full z-50 glass-panel py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold text-coralUI tracking-tighter hover:text-slateUI transition-colors">CA.</a>
          <div className="hidden md:flex gap-8 text-sm font-sans text-slateUI/80 font-medium items-center">
            {['about', 'skills', 'experience', 'education', 'ai', 'projects'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-coralUI transition-colors uppercase tracking-widest text-xs">{t.nav[item as keyof typeof t.nav]}</a>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/80 transition-all text-xs font-sans uppercase tracking-widest text-slateUI font-semibold shadow-sm">
            <Globe size={14} className="text-coralUI" /> {lang === 'en' ? 'ES' : 'EN'}
          </motion.button>
        </div>
      </nav>

      {/* Hero Rediseñado: Centrado y Minimalista */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 z-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <p className="font-sans text-coralUI tracking-[0.2em] text-sm md:text-base mb-6 font-semibold">{t.hero.greeting}</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter mb-6 text-slateUI pb-4 drop-shadow-sm">
              Celeste<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coralUI via-skyUI to-mintUI">Angeleri.</span>
            </h1>
            <h2 className="font-sans text-xl md:text-3xl text-slateUI/80 font-light mb-8">{t.hero.role}</h2>
            <p className="font-sans text-slateUI/70 text-lg max-w-xl mx-auto leading-relaxed">{t.hero.desc}</p>
          </motion.div>
        </div>
        
        <motion.div style={{ opacity: opacityFade }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slateUI/40">
    
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ChevronDown size={20} /></motion.div>
        </motion.div>
      </section>

      <section id="about" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-mintUI/40 rounded-full blur-[80px]" />
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-8 text-slateUI">{t.about.title}</h3>
            <div className="space-y-6 font-sans text-lg text-slateUI/80 leading-relaxed font-light">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6" id="skills">
            <h3 className="font-display text-2xl text-coralUI mb-2 px-2 font-bold">{t.skills.title}</h3>
            <div className="flex flex-col gap-4">
              {t.skills.categories.map((cat, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <h4 className="text-xs uppercase tracking-widest text-slateUI mb-2 pl-2 border-l-2 border-coralUI font-bold">{cat.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, j) => (
                      <div key={j} className="glass-panel bg-white/40 px-3 py-1.5 rounded-full text-xs font-sans tracking-wide text-slateUI cursor-default hover:bg-white transition-colors shadow-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-7xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-coralUI to-skyUI">
            {t.experience.title}.
          </motion.h3>

          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-coralUI via-skyUI to-transparent opacity-40" />

            {t.experience.items.map((exp, i) => {
              const onRight = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative md:w-1/2 mb-16 group ${onRight ? "md:ml-auto md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}
                >
                  <div className={`absolute left-[-12px] top-6 w-3 h-3 rounded-full bg-coralUI shadow-[0_0_15px_#ffa69e] border-2 border-white ${onRight ? "md:left-[-4px]" : "md:left-auto md:right-[-4px]"}`} />
                  <div className="glass-panel bg-white/60 p-8 rounded-3xl group-hover:bg-white transition-all shadow-sm">
                    <span className="font-sans text-xs tracking-widest text-slateUI/60 font-bold uppercase">{exp.present}</span>
                    <h4 className="font-display text-2xl font-bold text-slateUI mt-2 mb-1">{exp.role}</h4>
                    <p className="font-sans text-coralUI mb-4 font-semibold">{exp.company}</p>
                    <p className="font-sans text-slateUI/80 text-sm leading-relaxed mb-4">{exp.desc}</p>
                    <ul className="space-y-2 text-left">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slateUI/70 leading-relaxed">
                          <span className="text-coralUI font-bold">·</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-32 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-7xl font-bold mb-16 text-slateUI">
            {t.education.title}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.education.items.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass-panel bg-white/40 p-6 rounded-2xl flex items-center justify-between gap-4 hover:bg-white/70 transition-colors shadow-sm"
              >
                <div>
                  <h4 className="font-display text-lg font-bold text-slateUI">{edu.name}</h4>
                  <p className="font-sans text-coralUI text-sm font-semibold">{edu.school}</p>
                </div>
                <span className="font-sans text-xs tracking-widest text-slateUI/50 font-bold uppercase whitespace-nowrap">{edu.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-skyUI/40 rounded-full blur-[80px]" />
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slateUI relative z-10">{t.ai.title}</h3>
            <p className="font-sans text-slateUI/80 text-lg leading-relaxed font-light mb-12 max-w-3xl relative z-10">{t.ai.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
              {t.ai.tools.map((tool, i) => (
                <div key={i} className="bg-white/50 p-6 rounded-2xl">
                  <h4 className="font-display text-lg font-bold text-coralUI mb-2">{tool.name}</h4>
                  <p className="font-sans text-sm text-slateUI/70 leading-relaxed">{tool.use}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 relative z-10">
              {t.ai.results.map((result, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-mintUI shrink-0" />
                  <p className="font-sans text-slateUI/80 text-sm font-medium">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-5xl md:text-7xl font-bold mb-20 text-center md:text-right text-slateUI">{t.projects.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, i) => (
              <motion.div 
                 key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                 whileHover={{ y: -10 }}
                 className="glass-panel bg-white/40 rounded-3xl p-8 flex flex-col h-full group relative overflow-hidden hover:bg-white/70 transition-all shadow-sm"
               >                 
                 
                 <h4 className="font-display text-xl md:text-2xl font-bold text-slateUI mb-4 relative z-10">{project.title}</h4>
                 <p className="font-sans text-slateUI/70 text-sm flex-grow mb-8 relative z-10 leading-relaxed font-light">{project.desc}</p>
                 
                 <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                   {project.tech.map((tech, j) => (
                     <span key={j} className="text-[10px] font-sans uppercase tracking-wider font-semibold text-coralUI px-2 py-1 bg-coralUI/10 border border-coralUI/30 rounded-md">
                       {tech}
                     </span>
                   ))}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-40 px-6 z-10 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-radial from-mintUI/50 to-transparent blur-[100px] pointer-events-none" />

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10">
          <h3 className="font-display text-6xl md:text-8xl font-bold mb-6 text-slateUI tracking-tighter">{t.contact.title}</h3>
          <p className="font-sans text-slateUI/70 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">{t.contact.desc}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="mailto:angelericeleste08@gmail.com" 
              className="px-8 py-4 rounded-full bg-coralUI text-white font-sans font-semibold tracking-wide hover:bg-slateUI transition-colors flex items-center gap-2 shadow-lg"
            >
              <Mail size={18} /> {t.contact.btn}
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/celeste-angeleri-7887891b9/" target="_blank" rel="noopener noreferrer" 
              className="px-8 py-4 rounded-full glass-panel bg-white border border-slateUI/20 hover:border-coralUI text-slateUI font-sans font-semibold tracking-wide transition-all flex items-center gap-2 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>
      
      <footer className="relative z-10 py-8 text-center text-slateUI/50 font-sans text-xs tracking-widest uppercase border-t border-slateUI/10 bg-baseBg">
        <p>Built with Next.js, Framer Motion & Glassmorphism Aesthetics.</p>
      </footer>
    </main>
  );
}