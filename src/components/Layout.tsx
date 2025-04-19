import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    // Rola para o topo quando o usuário muda de aba (troca de página)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    // Não rola para o topo se for o botão "Get Started" (link com #contact)
    if (href === "#contact") {
      return;
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Assistente", path: "/product" },
    { name: "Soluções personalizadas", path: "/custom-bot" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 py-4",
          isScrolled
            ? "bg-black/50 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent"
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={handleNavLinkClick}
          >
            <img src="/images/logo.svg" alt="CCM" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavLinkClick}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 transition-colors text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Começar agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavLinkClick}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 transition-colors text-white px-4 py-2 rounded-md text-sm font-medium inline-block text-center"
              >
                Começar agora
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-black/50 border-t border-white/10 py-12">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link
                to="/"
                className="flex items-center space-x-2 mb-4"
                onClick={handleNavLinkClick}
              >
                <img src="/images/logo.svg" alt="CCM" className="h-8" />
              </Link>
              <p className="text-muted-foreground text-sm">
                Chatbot de agendamento de WhatsApp com IA para barbearias e
                clínicas.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Produto</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/product"
                    onClick={handleNavLinkClick}
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Recursos
                  </Link>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Perguntas frequentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Soluções</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Barbearias
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Clínicas
                  </a>
                </li>
                <li>
                  <Link
                    to="/custom-bot"
                    onClick={handleNavLinkClick}
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Soluções personalizadas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Comece agora
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@ccm.com"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Email-nos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CCM. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Política de privacidade
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
