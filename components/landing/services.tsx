"use client"

import Image from "next/image"
import { Handshake } from "lucide-react";


const services = [
  {
    number: "01",
    name: "Estrategia & Planificación",
    description: "Desarrollo de planes estratégicos a medida para alcanzar los objetivos de tu marca a corto y largo plazo.",
    icon: "/images/icon_servicios/estrategia_y_planificacion.png",
  },
  {
    number: "02",
    name: "Gestión de Redes",
    description: "Administración profesional de comunidades para construir audiencias leales y potenciar el engagement.",
    icon: "/images/icon_servicios/gestion_de_redes_sociales.png",
  },
  {
    number: "03",
    name: "Creación de Contenido",
    description: "Desarrollo de formatos atractivos (reels, posts, stories) que retengan la atención de tu público ideal.",
    icon: "/images/icon_servicios/creacion_de_contenido.png",
  },
  {
    number: "04",
    name: "Fotografía",
    description: "Producción fotográfica de alta calidad profesional para mostrar productos o servicios en su mejor versión.",
    icon: "/images/icon_servicios/fotografia.png",
  },
  {
    number: "05",
    name: "Diseño Gráfico",
    description: "Creación de una identidad visual consistente que posicione tu marca y la distinga de sus competidores.",
    icon: "/images/icon_servicios/diseño_grafico.png",
  },
  {
    number: "06",
    name: "Meta Ads",
    description: "Gestión y optimización de campañas publicitarias en Meta para multiplicar tu alcance y conversiones.",
    icon: "/images/icon_servicios/meta_ads.png",
  },
  {
    number: "07",
    name: "Vuelos de Drone",
    description: "Fotografía y videografía aérea espectacular para producciones inmersivas y perspectivas únicas.",
    icon: "/images/icon_servicios/vuelos_de_drone.png",
  },
  {
    number: "08",
    name: "Servicios Personalizados",
    description: "Consultorías y soluciones adaptadas a las necesidades específicas y exclusivas de tu propio negocio.",
    icon: "/images/icon_servicios/servicios_personalizados.png",
  },
]

export function Services() {
  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden bg-background">
      {/* Fondo cenital: Luz de estudio desde la parte superior sobre el catálogo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(107,115,254,0.22)_0%,rgba(74,83,224,0.08)_40%,transparent_75%)] blur-[20px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_60%)] blur-[40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Encabezado integrado estilo Hero / About */}
        <div className="w-full flex flex-col items-center justify-center mb-16 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-4">
            <Handshake className="w-3.5 h-3.5 text-[#5960e6]" />
            <span className="text-xs font-medium uppercase tracking-wider text-foreground/80">
              Servicios
            </span>
          </div>

          <h2 className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[75px] font-medium tracking-tight leading-[1.05] mb-4">
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Mis soluciones{" "}
            </span>
            <span className="gradient-text font-semibold">digitales</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Las herramientas estratégicas que necesitas para que tu marca destaque, conecte y crezca de forma sostenible.
          </p>
        </div>

        {/* Grid de servicios: 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative flex flex-col justify-between p-7 rounded-3xl glass-card border border-white/10 hover:border-[#6b73fe]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6b73fe]/15 overflow-hidden"
            >
              {/* Resplandor interno sutil en hover */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#6b73fe]/15 rounded-full blur-2xl group-hover:bg-[#6b73fe]/30 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Cabecera de la tarjeta: Icono 3D + Número indicador */}
                <div className="flex items-start justify-between mb-6">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={100}
                    height={100}
                    className="object-contain relative z-10 drop-shadow-lg"
                  />

                  <span className="text-xs font-mono font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors tracking-widest pt-1">
                    {service.number}
                  </span>
                </div>

                {/* Título del servicio */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2.5 leading-snug group-hover:text-[#c4c8ff] transition-colors">
                  {service.name}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
