"use client"

import Image from "next/image"
import { UserRound } from "lucide-react"


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Instagram</title>
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
  </svg>
)

const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Gmail</title>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
)

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/denicreando/", label: "Instagram" },
  { icon: WhatsAppIcon, href: "https://wa.me/3329528141?text=Hola!%20Me%20interesan%20tus%20servicios.", label: "WhatsApp" },
  { icon: GmailIcon, href: "https://mail.google.com/mail/?view=cm&fs=1&to=denicreando@gmail.com&su=Consulta&body=Hola!%20Me%20gustaría%20recibir%20más%20información%20sobre%20tus%20servicios.", label: "Gmail" },
]

const skills = [
  "Estrategia Digital",
  "Planificación de Contenido",
  "Gestión de Redes",
  "Meta Ads",
  "Fotografía & Video",
  "Diseño Visual",
  "Creación de Comunidad",
  "Análisis de Métricas",
]

export function About() {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden bg-background">
      {/* Fondo asimétrico: Aura focalizada detrás del retrato y halo suave en texto */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-[5%] md:left-[12%] -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#6b73fe]/25 to-[#8a90fe]/15 rounded-full blur-[110px] opacity-70" />
        <div className="absolute bottom-6 right-[5%] w-[380px] h-[380px] bg-[#4a53e0]/15 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Columna Izquierda: Retrato minimalista + Dock de redes */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 glass-card shadow-2xl group">
              {/* Resplandor suave detrás de la imagen */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#6b73fe]/30 to-[#8a90fe]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

              <Image
                src="/images/profile.jpg"
                alt="Denise Degese - Social Media Manager"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />

              {/* Degradado inferior cinematográfico para suavizar la base */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Tag discreto en la esquina inferior */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-xs tracking-wider uppercase text-zinc-300 font-medium px-3 py-1 rounded-full glass border border-white/10 backdrop-blur-md">
                  San Pedro, Bs. As.
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
            </div>

            {/* Dock de redes sociales limpio y centrado */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#6b73fe]/60 hover:bg-[#6b73fe]/10 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Contenido editorial limpio y minimalista */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Badge estilo Hero */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-4 w-fit">
              <UserRound className="w-3.5 h-3.5 text-[#5960e6]" />
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                Sobre mí
              </span>
            </div>

            {/* Nombre y Título */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-2">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Denise Degese
              </span>
            </h2>

            <p className="text-xl sm:text-2xl font-light gradient-text mb-6">
              Social Media Manager & Estratega Digital
            </p>

            {/* Descripción editorial */}
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-light mb-8">
              <p>
                Acompaño a marcas y proyectos a construir una identidad digital sólida, atractiva y relevante. No se trata solo de publicar contenido, sino de encontrar la voz propia que conecte con la audiencia correcta.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                Combino creatividad visual, redacción estratégica y lectura de métricas para que cada acción en redes tenga un objetivo tangible: fidelizar seguidores, generar comunidad y transformarse en resultados.
              </p>
            </div>

            {/* Métricas clave estilo Hero */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10 mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-semibold gradient-text">+5</div>
                <div className="text-xs text-muted-foreground mt-1">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold gradient-text">+50</div>
                <div className="text-xs text-muted-foreground mt-1">Marcas impulsadas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold gradient-text">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Estrategia a medida</div>
              </div>
            </div>

            {/* Habilidades en píldoras refinadas */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                Áreas de especialidad
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-secondary/30 border border-white/10 text-zinc-300 hover:border-primary/50 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
