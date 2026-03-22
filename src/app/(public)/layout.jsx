import Navbar from "@/Componentes/Navbar";
import FooterPremiumMedico from "@/Componentes/Footer";
import ToasterClient from "@/Componentes/ToasterClient";
import WhatsAppFloatButton from "@/Componentes/WhatsAppFloatButton";
import CarritoProvider from "@/ContextosGlobales/CarritoContext";
import ObjetoPagarProvider from "@/ContextosGlobales/ObjetoPagarContext";

export default function PublicLayout({ children }) {
  return (
    <CarritoProvider>
      <ObjetoPagarProvider>
        <div className="relative min-h-screen bg-[#1c120f] text-white">
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_10%_10%,rgba(244,184,196,0.17),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(227,183,111,0.16),transparent_32%),linear-gradient(180deg,#241713_0%,#160f0d_44%,#0e0908_100%)]" />
          <ToasterClient />
          <Navbar />
          <main className="relative z-10 pt-24 md:pt-20">{children}</main>
          <FooterPremiumMedico />
          <WhatsAppFloatButton />
        </div>
      </ObjetoPagarProvider>
    </CarritoProvider>
  );
}
