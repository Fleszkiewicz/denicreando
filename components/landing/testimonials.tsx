"use client"

import Image from "next/image"
import { MessagesSquare } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO, TechFlow",
    content: "Denise transformó completamente nuestra presencia en redes. En 3 meses duplicamos seguidores y triplicamos el engagement.",
    initials: "CM",
  },
  {
    name: "Ana Rodríguez",
    role: "Fundadora, Bloom Studio",
    content: "Profesional, creativa y siempre con ideas frescas. Su estrategia nos ayudó a conectar genuinamente con nuestra audiencia.",
    initials: "AR",
  },
  {
    name: "Diego Torres",
    role: "Marketing Director",
    content: "Los resultados hablan por sí solos. El mejor retorno en redes sociales que hemos tenido en años de trabajo continuo.",
    initials: "DT",
  },
  {
    name: "Fernanda Raspanti",
    role: "Terapeuta",
    content: "Desde que trabajo con Denise, mi marca ha crecido exponencialmente. Su dedicación y sensibilidad son impresionantes.",
    initials: "FR",
  },
  {
    name: "Miguel Ángel",
    role: "CEO, Pulse Media",
    content: "La mejor inversión que hicimos. Nuestra comunidad creció de manera orgánica y las consultas se multiplicaron.",
    initials: "MA",
  },
  {
    name: "Valeria Gómez",
    role: "Directora Creativa",
    content: "Resultados reales desde el primer mes. Nuestra audiencia creció y el engagement se disparó por completo.",
    initials: "VG",
  },
]

export function Testimonials() {
  return (
    <>
      <style>{`
        /* ─── Section ─── */
        .t-section {
          position: relative;
          overflow: hidden;
          padding: 7rem 1rem 4rem;
          background: radial-gradient(
            ellipse 70% 55% at 50% 55%,
            rgba(107, 115, 254, 0.42) 0%,
            rgba(74, 83, 224, 0.22) 28%,
            rgba(24, 26, 60, 0.5) 55%,
            rgba(8, 9, 20, 0.95) 80%,
            #000000 100%
          );
        }

        /* Full width bottom shadow to fade out the image smoothly across the whole page */
        .t-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 500px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 45%,
            rgba(0, 0, 0, 0.85) 80%,
            #000000 100%
          );
          pointer-events: none;
          z-index: 20;
        }

        /* ─── Inner ─── */
        .t-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ─── Desktop scene ─── */
        .t-scene {
          display: none;
          position: relative;
          width: 100%;
          min-height: 800px;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .t-scene { display: flex; }
        }

        /* ─── Phone image ─── */
        .t-phone {
          position: relative;
          z-index: 5;
          flex-shrink: 0;
          width: 800px;
          align-self: flex-end;
          margin-bottom: -2rem;
        }
        .t-phone img {
          width: 100%;
          height: auto;
          display: block;
          mix-blend-mode: multiply;
        }

        /* ─── Floating cards ─── */
        .t-card {
          position: absolute;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(22, 24, 52, 0.75) 50%, rgba(10, 12, 26, 0.92) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1.25rem;
          padding: 1.15rem 1.25rem;
          backdrop-filter: blur(20px);
          box-shadow:
            0 16px 40px -10px rgba(0, 0, 0, 0.6),
            0 0 25px -5px rgba(107, 115, 254, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          width: 240px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          z-index: 10;
        }
        .t-card:hover {
          transform: translateY(-6px) scale(1.03) !important;
          border-color: rgba(107, 115, 254, 0.5);
          box-shadow:
            0 24px 60px -10px rgba(0, 0, 0, 0.8),
            0 0 35px 0 rgba(107, 115, 254, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }

        /* cards: efecto esparcido simétrico alrededor del celular */
        .t-card-0 { top: 8%;    left: 17%; animation: floatA 4.2s ease-in-out infinite 0s; }
        .t-card-1 { top: 32%;   left: 4%;  animation: floatB 5.1s ease-in-out infinite 0.6s; }
        .t-card-2 { top: 58%;   left: 12%; animation: floatA 4.8s ease-in-out infinite 1.2s; }
        .t-card-3 { top: 8%;    right: 11%; animation: floatB 4.6s ease-in-out infinite 0.3s; }
        .t-card-4 { top: 31%;   right: 2%;  animation: floatA 5.0s ease-in-out infinite 0.9s; }
        .t-card-5 { top: 54%;   right: 14%; animation: floatB 4.4s ease-in-out infinite 1.5s; }

        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-7px); }
        }

        .t-card-head {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.65rem;
        }
        .t-avatar {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #8a90fe, #5960e6);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(90, 96, 230, 0.35);
        }
        .t-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }
        .t-role {
          font-size: 0.68rem;
          color: rgba(161, 161, 170, 0.85);
          margin: 0;
          line-height: 1.3;
          font-weight: 400;
        }
        .t-content {
          font-size: 0.76rem;
          color: rgba(228, 228, 231, 0.9);
          line-height: 1.6;
          margin: 0 0 0.5rem;
          font-weight: 300;
        }
        .t-stars {
          font-size: 0.7rem;
          color: #9da5ff;
          letter-spacing: 0.08em;
        }

        /* ─── Mobile grid ─── */
        .t-mobile {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 560px) {
          .t-mobile { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .t-mobile { display: none; }
        }

        .t-mobile-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(22, 24, 52, 0.75) 50%, rgba(10, 12, 26, 0.92) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1.25rem;
          padding: 1.25rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }
      `}</style>

      <section id="testimonials" className="t-section">
        <div className="t-inner">

          {/* Encabezado unificado estilo Hero / About */}
          <div className="w-full flex flex-col items-center justify-center mb-16 px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-4">
              <MessagesSquare className="w-3.5 h-3.5 text-[#5960e6]" />
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                Testimonios
              </span>
            </div>

            <h2 className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[75px] font-medium tracking-tight leading-[1.05] mb-4">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Lo que dicen{" "}
              </span>
              <span className="gradient-text font-semibold">mis clientes</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto tracking-wide leading-relaxed">
              Historias reales de marcas y proyectos que transformaron su presencia digital y multiplicaron sus resultados.
            </p>
          </div>

          {/* ── Desktop: phone + floating cards ── */}
          <div className="t-scene -mt-10">
            {/* Floating cards */}
            {testimonials.map((t, i) => (
              <div key={t.name} className={`t-card t-card-${i}`}>
                <div className="t-card-head">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                  </div>
                </div>
                <p className="t-content">&ldquo;{t.content}&rdquo;</p>
                <div className="t-stars">★★★★★</div>
              </div>
            ))}

            {/* Phone image center */}
            <div className="t-phone">
              <Image
                src="/images/phone_testimonials.png"
                alt="Celular mostrando el perfil de denicreando en Instagram"
                width={900}
                height={1200}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>

          {/* ── Mobile: stacked cards ── */}
          <div className="t-mobile">
            {testimonials.map((t) => (
              <div key={t.name} className="t-mobile-card">
                <div className="t-card-head">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                  </div>
                </div>
                <p className="t-content">&ldquo;{t.content}&rdquo;</p>
                <div className="t-stars">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
