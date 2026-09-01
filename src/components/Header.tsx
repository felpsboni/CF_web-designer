import { BrandLogo } from './common/BrandLogo';
import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './common/Button';
import { Container } from './common/Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Processo', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040813]/85 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} id="brand-logo-link" className="group focus-visible:outline-2 focus-visible:outline-cyan-400"><BrandLogo size="md" /></a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={scrollToContact}
              id="btn-header-quote"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Solicitar orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg focus-visible:outline-2 focus-visible:outline-blue-400"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#040813]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800/80">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={scrollToContact}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
