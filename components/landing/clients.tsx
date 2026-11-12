"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Sparkles, ChevronLeft, ChevronRight, ArrowUpRight, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { clients, Client } from "@/lib/data/clients"
import { FolderOpen } from "lucide-react"

interface R2File {
  key: string;
  url: string;
  type: "image" | "video";
}

const BeamLayer = ({ className, colorClass }: { className?: string; colorClass: string }) => (
  <svg
    viewBox="0 0 1000 400"
    preserveAspectRatio="none"
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[110%] ${className} ${colorClass}`}
  >
    <path d="M 0,0 C 400,253 600,253 1000,0 L 1000,400 C 600,146 400,146 0,400 Z" className="fill-current" />
  </svg>
)

export function Clients() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)

  // Estados para la galería dinámica desde Deno / R2
  const [gallery, setGallery] = useState<R2File[]>([])
  const [loadingGallery, setLoadingGallery] = useState(false)

  const trackRef = useRef<HTMLDivElement>(null)

  // Cargar la galería en vivo cuando se selecciona un cliente
  useEffect(() => {
    if (!selectedClient || !selectedClient.slug) {
      setGallery([])
      return
    }

    const fetchGallery = async () => {
      setLoadingGallery(true)
      try {
        const response = await fetch(
          `https://keen-butterfly-2658.leszkiewiczfranco.deno.net/?cliente=${selectedClient.slug}`
        )
        if (!response.ok) throw new Error("Error fetching gallery")

        const data: R2File[] = await response.json()

        // Filtrar logo.jpg por si viene en la carpeta
        const filtered = data.filter((item) => !item.key.endsWith("logo.jpg"))

        // Ordenamiento natural numérico (1.jpg, 2.jpg ... 10.jpg, 12.jpg)
        filtered.sort((a, b) =>
          a.key.localeCompare(b.key, undefined, { numeric: true, sensitivity: "base" })
        )

        setGallery(filtered)
      } catch (error) {
        console.error("Error al obtener la galería de R2:", error)
        setGallery([])
      } finally {
        setLoadingGallery(false)
      }
    }

    fetchGallery()
  }, [selectedClient])

  // Abrir el modal con la galería del cliente
  const handleOpenModal = (client: Client) => {
    setSelectedClient(client)
    setIsOpen(true)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1))
  }

  // Centrar suavemente en el riel la tarjeta que esté en foco
  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current
      const cards = track.children
      const activeCard = cards[activeIndex] as HTMLElement
      if (activeCard) {
        const targetScroll =
          activeCard.offsetLeft - track.offsetWidth / 2 + activeCard.offsetWidth / 2
        track.scrollTo({ left: targetScroll, behavior: "smooth" })
      }
    }
  }, [activeIndex])

  return (
    <section id="clients" className="relative py-28 px-4 overflow-hidden bg-background">
      {/* Luz ambiental idéntica al Hero, About y Servicios */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[550px] pointer-events-none z-0 opacity-40 dark:opacity-60">
        <BeamLayer colorClass="text-[#4a53e0]/40 dark:text-[#1c1e45]/70" className="h-[550px] blur-[90px] sm:blur-[110px]" />
        <BeamLayer colorClass="text-[#6b73fe]/45" className="h-[320px] blur-[30px] sm:blur-[40px]" />
        <BeamLayer colorClass="text-[#c1c4ff] dark:text-white/70" className="h-[90px] blur-[20px] sm:blur-[24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center justify-center mb-14 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-4">
            <FolderOpen className="w-3.5 h-3.5 text-[#5960e6] " />
            <span className="text-xs font-medium uppercase tracking-wider text-foreground/80">
              Portfolio
            </span>
          </div>

          <h2 className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[75px] font-medium tracking-tight leading-[1.05] mb-4">
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Algunos de{" "}
            </span>
            <span className="gradient-text font-semibold">mis trabajos</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Fotografías y proyectos enmarcados en riel, adaptados a la personalidad y estética de cada marca.
          </p>
        </div>

        {/* ─── Riel de Fotografías ─── */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-l from-background via-background/60 to-transparent pointer-events-none" />

          <div
            ref={trackRef}
            className="flex items-center gap-3 sm:gap-4 overflow-x-auto py-8 px-8 sm:px-16 no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {clients.map((client, index) => {
              const isActive = index === activeIndex

              return (
                <div
                  key={client.name}
                  onClick={() => {
                    if (isActive) {
                      handleOpenModal(client)
                    } else {
                      setActiveIndex(index)
                    }
                  }}
                  className={`relative flex-shrink-0 h-[440px] sm:h-[480px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border ${isActive
                    ? "w-[310px] sm:w-[460px] md:w-[540px] lg:w-[620px] border-[#6b73fe]/60 shadow-[0_20px_60px_-15px_rgba(107,115,254,0.35)] z-20"
                    : "w-[100px] sm:w-[130px] md:w-[160px] border-white/10 opacity-60 hover:opacity-90 hover:border-white/25 z-10"
                    }`}
                >
                  <Image
                    src={client.image || "/images/profile.jpg"}
                    fill
                    sizes={isActive ? "620px" : "160px"}
                    alt={client.name}
                    className="object-cover transition-all duration-700 select-none"
                    priority={isActive}
                  />

                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${isActive
                      ? "bg-gradient-to-t from-background via-background/30 to-black/20"
                      : "bg-black/50 hover:bg-black/30"
                      }`}
                  />

                  {!isActive && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-between items-center z-10 pointer-events-none">
                      <div className="w-8 h-8 rounded-full glass border border-white/15 flex items-center justify-center text-xs font-semibold text-white/80 overflow-hidden shadow">
                        {client.logo ? (
                          <Image src={client.logo} fill className="object-cover" alt="" />
                        ) : (
                          client.name.substring(0, 2).toUpperCase()
                        )}
                      </div>

                      <div className="writing-mode-vertical text-xs tracking-widest uppercase font-medium text-zinc-300 drop-shadow-md">
                        {client.name}
                      </div>
                    </div>
                  )}

                  {isActive && (
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 relative rounded-full glass border border-white/20 flex items-center justify-center font-bold text-sm text-white overflow-hidden shadow-md">
                            {client.logo ? (
                              <Image src={client.logo} fill className="object-cover" alt={client.name} />
                            ) : (
                              client.name.substring(0, 2).toUpperCase()
                            )}
                          </div>
                          <div>
                            <span className="block text-sm sm:text-base font-semibold tracking-wide text-white">
                              {client.name}
                            </span>
                            <span className="text-xs text-zinc-300 font-light uppercase tracking-wider">
                              {client.role}
                            </span>
                          </div>
                        </div>

                        <div className="w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <p className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-snug mb-3">
                          "{client.quote}"
                        </p>

                        <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
                          <span className="text-xs text-zinc-300 font-light hidden sm:inline">
                            Toca para explorar galería y detalles
                          </span>
                          <span className="text-xs font-medium text-[#c4c8ff] flex items-center gap-1.5 ml-auto">
                            Ver proyecto <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Proyecto anterior"
              className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#6b73fe]/60 hover:bg-[#6b73fe]/10 transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-mono font-medium text-zinc-300">
              <span className="text-white font-semibold">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-zinc-500 mx-1.5">/</span>
              <span>{String(clients.length).padStart(2, "0")}</span>
              <span className="hidden sm:inline text-zinc-400 ml-2 border-l border-white/10 pl-2">
                {clients[activeIndex]?.name}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente proyecto"
              className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#6b73fe]/60 hover:bg-[#6b73fe]/10 transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL DE DETALLES CON GALERÍA DINÁMICA R2 --- */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[900px] bg-background/20 backdrop-blur-2xl border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.7)] max-h-[85vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
          {selectedClient && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-2xl border border-white/15 overflow-hidden glass shrink-0">
                    {selectedClient.logo ? (
                      <Image
                        src={selectedClient.logo}
                        fill
                        className="object-cover"
                        alt={selectedClient.name}
                      />
                    ) : (
                      <span className="flex items-center justify-center w-full h-full text-xl font-bold text-white">
                        {selectedClient.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-3xl sm:text-4xl font-bold text-white">
                      {selectedClient.name}
                    </DialogTitle>
                    <p className="text-sm sm:text-base text-zinc-400 uppercase tracking-widest mt-1">
                      {selectedClient.role}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              <div className="text-lg sm:text-xl text-zinc-100 leading-relaxed font-medium mb-2">
                "{selectedClient.quote}"
              </div>
              {selectedClient.description && (
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-6">
                  {selectedClient.description}
                </p>
              )}

              {/* Render de Galería Dinámica */}
              <div className="mt-4 mb-2">
                <h4 className="text-xs font-semibold mb-3 text-zinc-400 uppercase tracking-widest">
                  Galería del Proyecto
                </h4>

                {loadingGallery ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-3 text-zinc-400">
                    <Loader2 className="w-6 h-6 animate-spin text-[#6b73fe]" />
                    <span className="text-xs font-light">Cargando contenido multimedia de R2...</span>
                  </div>
                ) : gallery.length > 0 ? (
                  <div className="columns-2 sm:columns-3 gap-3 space-y-3">
                    {gallery.map((file, i) => (
                      <div
                        key={file.key || i}
                        className="relative rounded-2xl overflow-hidden break-inside-avoid border border-white/10 glass shadow group"
                      >
                        {file.type === "video" ? (
                          <video
                            src={file.url}
                            className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <img
                            src={file.url}
                            className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                            alt={`Galería ${selectedClient.name} ${i + 1}`}
                            loading="lazy"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Fallback a gallery estática si existe y no vino nada de R2 */
                  selectedClient.gallery && selectedClient.gallery.length > 0 && (
                    <div className="columns-2 sm:columns-3 gap-3 space-y-3">
                      {selectedClient.gallery.map((mediaUrl, i) => {
                        const isVideo = mediaUrl.match(/\.(mp4|webm|mov)$/i)
                        return (
                          <div
                            key={i}
                            className="relative rounded-2xl overflow-hidden break-inside-avoid border border-white/10 glass shadow group"
                          >
                            {isVideo ? (
                              <video
                                src={mediaUrl}
                                className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                                autoPlay
                                muted
                                loop
                                playsInline
                              />
                            ) : (
                              <img
                                src={mediaUrl}
                                className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                                alt={`Galería ${selectedClient.name} ${i + 1}`}
                                loading="lazy"
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 115, 254, 0.25);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 115, 254, 0.5);
        }
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  )
}