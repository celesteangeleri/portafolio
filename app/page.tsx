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
    nav: { about: "About", skills: "Skills", exp: "Experience", work: "Work", contact: "Contact" },
    hero: { greeting: "HELLO, I AM", role: "Frontend Developer", desc: "Crafting immersive, high-performance web experiences with modern architectures." },
    about: { title: "The Journey", p1: "I am a Frontend Developer with a robust full-stack foundation. I thrive at the intersection of design and engineering, utilizing Scrum methodologies to deliver scalable software.", p2: "My architecture is built on clean code, SOLID principles, and unit testing. Bilingual (ES/EN B2), I am equipped to collaborate in dynamic, global teams." },
    skills: { 
      title: "Tech Stack", 
      categories: [
        { name: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "HTML", "CSS / SCSS"] },
        { name: "Backend", items: ["Node.js", "REST APIs", "Strapi"] },
        { name: "Databases", items: ["MongoDB", "Firebase"] },
        { name: "DevOps & Infra", items: ["Docker"] },
        { name: "Integrations", items: ["Mercado Pago", "PayPal", "OTP Email Login", "QR systems"] },
        { name: "Observability", items: ["Sentry"] }
      ]
    },
    experience: { title: "Evolution", present: "2022 - Present", role: "Full Stack Developer", company: "Banana Software", desc: "Engineered high-complexity Angular dashboards for e-commerce and homebanking. Built custom React/Next.js components and orchestrated .NET microservices." },
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
    nav: { about: "Sobre Mí", skills: "Skills", exp: "Experiencia", work: "Proyectos", contact: "Contacto" },
    hero: { greeting: "HOLA, SOY", role: "Desarrolladora Frontend", desc: "Creando experiencias web inmersivas y de alto rendimiento con arquitecturas modernas." },
    about: { title: "El Recorrido", p1: "Soy una Desarrolladora Frontend con una sólida base full-stack. Prospero en la intersección del diseño y la ingeniería, utilizando arquitecturas escalables.", p2: "Mi arquitectura se basa en código limpio, principios SOLID y testing. Bilingüe (ES/EN B2), estoy lista para colaborar en equipos dinámicos." },
    skills: { 
      title: "Stack Tecnológico", 
      categories: [
        { name: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "HTML", "CSS / SCSS"] },
        { name: "Backend", items: ["Node.js", "REST APIs", "Strapi"] },
        { name: "Bases de datos", items: ["MongoDB", "Firebase"] },
        { name: "DevOps / Infra", items: ["Docker"] },
        { name: "Integraciones", items: ["Mercado Pago", "PayPal", "OTP Email Login", "QR systems"] },
        { name: "Observabilidad", items: ["Sentry"] }
      ]
    },
    experience: { title: "Evolución", present: "2022 - Actualidad", role: "Full Stack Developer", company: "Banana Software", desc: "Desarrollo de dashboards complejos en Angular para e-commerce y homebanking. Creación de componentes React/Next.js e integración de microservicios .NET." },
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
            {['about', 'skills', 'experience', 'projects'].map((item) => (
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

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative md:w-1/2 md:pr-12 md:text-right mb-16 group">
              <div className="absolute left-[-12px] md:left-auto md:right-[-4px] top-6 w-3 h-3 rounded-full bg-coralUI shadow-[0_0_15px_#ffa69e] border-2 border-white" />
              <div className="glass-panel bg-white/60 p-8 rounded-3xl group-hover:bg-white transition-all shadow-sm">
                <span className="font-sans text-xs tracking-widest text-slateUI/60 font-bold uppercase">{t.experience.present}</span>
                <h4 className="font-display text-2xl font-bold text-slateUI mt-2 mb-1">{t.experience.role}</h4>
                <p className="font-sans text-coralUI mb-4 font-semibold">{t.experience.company}</p>
                <p className="font-sans text-slateUI/80 text-sm leading-relaxed">{t.experience.desc}</p>
              </div>
            </motion.div>
          </div>
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