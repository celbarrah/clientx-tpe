/* Real ClientX partner logos — edit LOGOS array to add/remove */
import Image from "next/image";

const LOGOS = [
  { src: "https://clientx.uk/wp-content/uploads/2025/06/inwi_2.png",           alt: "inwi" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/cnss.png",             alt: "CNSS" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/volvo.png",            alt: "Volvo" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/sofac_3.png",          alt: "SOFAC" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/tangez_med.png",       alt: "Tanger Med" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/autocaz.png",          alt: "Autocaz" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/fuso.png",             alt: "FUSO" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/kapset_group.png",     alt: "Kapset Group" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/CIMR.png",             alt: "CIMR" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/Allali.png",           alt: "Allali" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/panzani.png",          alt: "Panzani" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ostelea.png",          alt: "Ostelea" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/miami.png",            alt: "Mia Mia" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/american_academy.png", alt: "American Academy" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/wecasablanca.png",     alt: "We Casa" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/peugoet.png",          alt: "Peugeot" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/mafoder.png",          alt: "MAFODER" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ecdome.png",           alt: "Eqdom" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/khayatey.png",         alt: "KLK Khayatey" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/maserati.png",         alt: "Maserati" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/chery.png",            alt: "Chery" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/land_rover.png",       alt: "Land Rover" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/citroen.png",          alt: "Citroën" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/auto_holl.png",        alt: "Auto Hall" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/jaguar.png",           alt: "Jaguar" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ford_2.png",           alt: "Ford" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/aston_martin.png",     alt: "Aston Martin" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/opel_2.png",           alt: "Opel" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/renault.png",          alt: "Renault" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ocp_2-1.png",          alt: "OCP" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ayven.png",            alt: "Ayvens" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/menara.png",           alt: "Menara" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/GSK.png",              alt: "GSK" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/bayer.png",            alt: "Bayer" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/prestigia.png",        alt: "Prestigia" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ADDOHA.png",           alt: "Addoha" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/omoda.png",            alt: "Omoda" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/suzuki.png",           alt: "Suzuki" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/cfao.png",             alt: "CFAO" },
  { src: "https://clientx.uk/wp-content/uploads/2025/06/ford_trucks.png",      alt: "Ford Trucks" },
];

export default function LogosMarquee() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className="bg-white border-y border-gray-100 py-8 overflow-hidden">
      <p className="text-center text-[10px] font-semibold uppercase tracking-[.14em] text-gray-300 mb-6">
        Choisie par les marques les plus exigeantes
      </p>
      <div className="relative">
        {/* Left/right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-inner items-center gap-10">
          {doubled.map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className="shrink-0 px-4 flex items-center justify-center" style={{ minWidth: 100 }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="h-7 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
