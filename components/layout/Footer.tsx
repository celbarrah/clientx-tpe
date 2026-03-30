import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "clientx.uk", href: "https://clientx.uk" },
  { label: "Politique de confidentialité", href: "https://clientx.uk/privacy-policy/" },
  { label: "Conditions générales de vente", href: "https://clientx.uk/conditions-generales-de-vente/" },
  { label: "CGV", href: "https://clientx.uk/cgv/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-10 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="shrink-0 opacity-70 hover:opacity-100 transition-opacity">
          <Image
            src="https://clientx.uk/wp-content/uploads/2026/01/clientx-iso.png"
            alt="ClientX"
            width={120}
            height={48}
            className="h-20 w-auto object-contain brightness-0 invert"
            unoptimized
          />
        </Link>

        {/* Links */}
        <nav className="flex gap-5 flex-wrap justify-center">
          {LINKS.map(({ label, href }) => (
            <Link key={label} href={href}
              className="text-gray-600 text-[12px] hover:text-[#32DC32] transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <p className="text-gray-700 text-[11px] shrink-0">
          © {new Date().getFullYear()} ClientX. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
