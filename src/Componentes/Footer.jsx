import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Enfoque integral", href: "/#porque-elegirnos" },
  { label: "Especialidades", href: "/#servicios" },
  { label: "Resultados", href: "/#casos-clinicos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/essenza.centrointegral?igsh=czR0NXFnMHl1bzR5",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/search/top?q=Essenza%20Pitrufquen",
    icon: Facebook,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/56987728500",
    icon: MessageCircle,
  },
];

export default function FooterPremiumMedico() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#100a08] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(252,205,212,0.18),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(226,185,121,0.16),transparent_36%),linear-gradient(180deg,rgba(16,10,8,0.88)_0%,rgba(12,8,7,0.95)_55%,rgba(10,7,6,1)_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <section className="rounded-[2rem] bg-[linear-gradient(150deg,rgba(55,33,28,0.62)_0%,rgba(20,13,11,0.92)_100%)] p-7 shadow-[0_30px_90px_-62px_rgba(236,194,129,0.6)] lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f6e7da]/92 p-1.5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.75)]">
                <img
                  src="/logo1.png"
                  alt="Logo Centro Integral ESSENZA"
                  width={84}
                  height={84}
                  className="h-[72px] w-[72px] object-contain sm:h-[84px] sm:w-[84px]"
                />
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 tracking-[0.02em] text-[#f7e1d7]/78">
              Un espacio creado para el bienestar completo, con atencion profesional, cercana y personalizada en medicina, psicologia, estetica y terapias complementarias.
            </p>

            <div className="mt-7 space-y-2.5 text-sm text-[#ffe9dd]/88">
              <a href="tel:+56987728500" className="inline-flex items-center gap-2 transition hover:text-[#fff6ef]">
                <Phone className="h-4 w-4" />
                +56 9 8772 8500
              </a>
              <a href="mailto:Centrointegral.essenza@gmail.com" className="flex items-center gap-2 transition hover:text-[#fff6ef]">
                <Mail className="h-4 w-4" />
                Centrointegral.essenza@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=12+de+Febrero+926,+Pitrufquen,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-[#fff6ef]"
              >
                <MapPin className="h-4 w-4" />
                12 de Febrero 926, Pitrufquen, Novena Region
              </a>
            </div>
          </section>

          <section className="rounded-[2rem] bg-[linear-gradient(160deg,rgba(44,27,23,0.64)_0%,rgba(18,12,10,0.94)_100%)] p-7 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#f1d9cd]/58">Navegacion</p>
            <nav aria-label="Links del pie de pagina" className="mt-5">
              <ul className="space-y-3">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex text-sm tracking-[0.05em] text-[#fde6da]/80 transition hover:text-[#fff1e8]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8dbc8]/12 text-[#ffe9dd]/85 transition hover:bg-[#f8dbc8]/24 hover:text-[#fff2e9]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="rounded-[2rem] bg-[linear-gradient(160deg,rgba(44,27,23,0.64)_0%,rgba(18,12,10,0.94)_100%)] p-5 sm:p-6 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#f2d9cc]/62">Ubicacion</p>
            <h4 className="mt-3 text-2xl leading-tight text-[#fff0e7]">
              Pitrufquen, Novena Region
            </h4>
            <p className="mt-2 text-sm leading-7 text-[#f7e0d5]/74">
              Atendemos a hombres, mujeres y ninos con enfoque integral de salud fisica, emocional y estetica.
            </p>

            <a
              href="https://maps.google.com/?q=12+de+Febrero+926,+Pitrufquen,+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f7decb_0%,#e8b47d_100%)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2f1a12] transition hover:brightness-105"
            >
              <MapPin className="h-4 w-4" />
              Abrir en Google Maps
            </a>

            <div className="mt-5 overflow-hidden rounded-2xl">
              <iframe
                title="Mapa ubicacion Centro Integral ESSENZA"
                src="https://www.google.com/maps?q=12%20de%20Febrero%20926%2C%20Pitrufquen%2C%20Chile&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[240px] w-full"
              />
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 py-4 text-[11px] text-[#f3dacd]/56 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Centro Integral ESSENZA. Todos los derechos reservados.</p>
          <p>Bienestar completo con acompanamiento profesional y cercano.</p>
        </div>
      </div>
    </footer>
  );
}
