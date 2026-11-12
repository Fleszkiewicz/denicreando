export interface Client {
  name: string;
  role: string;
  quote: string;
  description?: string;
  gradient: string;
  image: string;
  logo: string;
  slug?: string; // 👈 Nuevo campo
  gallery?: string[];
}

// URL base de tu bucket público en Cloudflare R2
const R2_BASE_URL = "https://pub-d36f19332df947f4a9b9265a1be7b813.r2.dev/clients";

export const clients: Client[] = [
  {
    name: "Al Río",
    role: "Restó",
    slug: "3-alrio",
    quote: "Rio y Gastronomía juntos.",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr...",
    gradient: "from-orange-500 via-orange-400/5",

    // 👇 Llamas específicamente al archivo dentro de la carpeta del cliente en R2
    image: `${R2_BASE_URL}/3-alrio/2.jpg`,
    logo: `${R2_BASE_URL}/3-alrio/logo.jpg`,
  },
  {
    name: "Brutus",
    role: "Discoteca",
    quote: "15 años compartiendo la noche.",
    gradient: "from-blue-500/30 via-blue-400/5 to-transparent",
    image: "/images/brutus.jpg",
    logo: "/images/clientes/brutus/logo.jpg",
    gallery: [
      "/images/clientes/brutus/1.jpg",
      "/images/clientes/brutus/2.jpg",
      "/images/clientes/brutus/3.jpg",
      "/images/clientes/brutus/4.jpg",
      "/images/clientes/brutus/5.jpg",
      "/images/clientes/brutus/6.jpg",
      "/images/clientes/brutus/7.jpg",
      "/images/clientes/brutus/8.jpg",
      "/images/clientes/brutus/9.jpg",
      "/images/clientes/brutus/10.jpg"
    ]
  },
  {
    name: "The Black Sheep",
    role: "Viajes y Turismo",
    quote: "Conocemos tu destino.",
    gradient: "from-emerald-500/30 via-emerald-400/5 to-transparent",
    image: "/images/clients/nova-bg.jpg",
    logo: "/images/clientes/theblacksheep/logo.jpg"
  },
  {
    name: "Deparc",
    role: "Real State",
    quote: "Un Depto que se acomoda a vos.",
    gradient: "from-purple-500/30 via-purple-400/5 to-transparent",
    image: "/images/clients/pulse-bg.jpg",
    logo: "/images/clientes/deparc/logo.jpg"
  },
  {
    name: "Adrian Ortellado",
    role: "Estilista",
    quote: "Cortes que respetan tu textura natural.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/adrianortellado/logo.jpg"
  },
  {
    name: "The Ranch",
    role: "Restobar",
    quote: "¡Parada obligatoria en el puerto de Baradero!",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/theranch/logo.jpg"
  },
  {
    name: "La Picaza",
    role: "Parrilla",
    quote: "Parrilla familiar atendida por sus dueños.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/lapicaza/logo.jpg"
  },
  {
    name: "Fernanda Raspanti",
    role: "Constelaciones familiares",
    quote: "Facilitadora certificada de Constelaciones Familiares y Barras Access.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/fernandaraspanti/logo.jpg"
  },
  {
    name: "Aromeri",
    role: "Joyeria y relojeria",
    quote: "Detalles que marcan la diferencia.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/aromeri/logo.jpg"
  },
  {
    name: "La Gigantona",
    role: "Fast food",
    quote: "¡Las mejores burgers de Baradero!",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/lagigantona/logo.jpg"
  },
  {
    name: "Soul Studio",
    role: "Deportes aéreos",
    quote: "Potenciá tu bienestar físico y mental.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/soulstudio/logo.jpg"
  },
  {
    name: "Birra Bros",
    role: "Cerveza Artesanal",
    quote: "Cerveza artesanal, auténtica y hecha con pasión.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/birrabros/logo.jpg"
  },
  {
    name: "Gomez Restivo Arq",
    role: "Estudio de Arquitectura",
    quote: "Transformamos deseos en espacios reales.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/gomezrestivoarq/logo.jpg"
  },
  {
    name: "Desabollado Sin Pintar",
    role: "Sacabollos & Detailing",
    quote: "Sacabollos sin dañar la pintura, devolviendo tu auto a su estado original.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/dspdetailing/logo.jpg"
  },
  {
    name: "Corpo Fitness",
    role: "Gimnasio femenino",
    quote: "¡Entrená para sentirte mejor con vos misma!",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/corpofitness/logo.jpg"
  },
  {
    name: "Como En Casa",
    role: "Rotiseria",
    quote: "El sabor que te hace sentir como en casa.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/comoencasa/logo.jpg"
  },
  {
    name: "Color Cielo",
    role: "Cosmetología",
    quote: "Te enseño y ayudo a cuidar tu piel.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/colorcielo/logo.jpg"
  },
  {
    name: "Alkimiangelical",
    role: "Masajes y terapias holìsticas",
    quote: "El diseño invisible es el que mejores resultados genera.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/alkimiangelical/logo.jpg"
  },
  {
    name: "Tónico Surf Club",
    role: "Indumentaria",
    quote: "Since ‘2019. Venta Mayorista. Indumentaria Importada.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/tonicosurfclub/logo.jpg"
  },
  {
    name: "Tónico Surf Shop",
    role: "Indumentaria",
    quote: "Since ‘2017. Venta mayorista de calzado importado.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/tonicosurfshop/logo.jpg"
  },
  {
    name: "Cler",
    role: "Indumentaria femenina",
    quote: "Indumentaria femenina diseñada con amor.",
    gradient: "from-rose-500/30 via-rose-400/5 to-transparent",
    image: "/images/clients/vertex-bg.jpg",
    logo: "/images/clientes/cler/logo.jpg"
  }
];
