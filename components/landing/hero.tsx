"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6b73fe]/40 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4a53e0]/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6b73fe]/20 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.95 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0 0) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-[#5960e6]" />
          <span className="text-sm font-medium text-foreground/80">Social Media Manager</span>
        </div> */}

        {/* Logo / Name 
        <div className="mb-2">
          <span className="text-lg lg:text-1xl text-foreground/80">Denise Degese</span>
        </div>
        */}

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-2">
          <Sparkles className="w-4 h-4 text-[#5960e6]" />
          <span className="text-sm font-medium text-foreground/80">Social Media Manager</span>
        </div>


        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[110px] font-medium leading-tight text-balance">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">Si no te ven, </span>
          <span className="gradient-text font-semibold">no existís.</span>
        </h1>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-18 font-light leading-tight -mt-2 text-balance">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">Estás a una </span>
          <span className="gradient-text">estrategia</span>
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"> de cambiarlo todo.</span>
        </h1>

        {/* Subtitle 
        <p className="text-lg sm:text-sm mt-16 text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Estrategia digital, gestión de redes sociales y creación de contenido que transforma seguidores en una comunidad comprometida con tu marca.
        </p>
        */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="glow-primary px-8 py-6 text-base font-ligth rounded-full bg-[#5960e6] text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Contactar
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-ligth rounded-full border-border/50 bg-secondary/50 text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            Ver más
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 max-w-lg mx-auto">
          {[
            { value: "+25", label: "Clientes satisfechos" },
            { value: "+15", label: "Rubros trabajados" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
