import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container section-padding">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
            <GraduationCap className="w-5 h-5" />
            <span>Tia Ceci</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Pedagoga Cecilya — Aulas particulares com acompanhamento personalizado para o desenvolvimento do seu filho.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Navegação</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Início</Link>
            <Link to="/servicos" className="hover:text-primary-foreground transition-colors">Serviços</Link>
            <Link to="/sobre" className="hover:text-primary-foreground transition-colors">Sobre</Link>
            <Link to="/contato" className="hover:text-primary-foreground transition-colors">Contato</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Contato</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (91) 98483-2468</span>
            <a href="https://instagram.com/pedagoga.cecilya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Instagram className="w-4 h-4" /> @pedagoga.cecilya
            </a>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Belém, PA</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Tia Ceci — Pedagoga Cecilya — Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;