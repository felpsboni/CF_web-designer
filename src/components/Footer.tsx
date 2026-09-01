import { useState, MouseEvent } from 'react';
import { MessageSquare, ShieldCheck, ArrowUp, X, FileText, Instagram, ExternalLink } from 'lucide-react';
import { Container } from './common/Container';
import { BRAND } from '../data/mockData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Projetos', href: '#portfolio' },
    { label: 'Processo', href: '#processo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#03060d] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold font-display shadow-md shadow-blue-500/20">
                CF
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  CF Web Studio
                </span>
                <span className="text-[11px] text-blue-400 font-medium -mt-1 tracking-wider uppercase">
                  Carlos & Felipe
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Desenvolvimento de sites institucionais, landing pages e soluções web personalizadas para empresas que buscam autoridade e resultados reais.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{BRAND.coverage}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-blue-400 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact Handover */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Conectar & Redes
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acompanhe a CF Web Studio no Instagram"
                className="group inline-flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#081224] border border-slate-800 hover:border-pink-500/50 hover:bg-slate-900/90 text-xs text-slate-200 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-white group-hover:text-pink-300 transition-colors">Instagram</span>
                    <span className="text-[10px] text-slate-400">{BRAND.instagramDisplay}</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-400 transition-colors" />
              </a>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atendimento via WhatsApp com a CF Web Studio"
                className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#081224] border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/90 text-xs text-slate-200 hover:text-white transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-white">WhatsApp</span>
                  <span className="text-[10px] text-slate-400">{BRAND.phoneDisplay}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <p>
              © {currentYear} {BRAND.name}. Todos os direitos reservados.
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline cursor-pointer"
              >
                Política de Privacidade
              </button>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline cursor-pointer"
              >
                Termos de Uso
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="btn-back-to-top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all text-xs"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>

      {/* Modal for Privacy Policy / Terms */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#091322] border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                {modalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h3>
            </div>

            <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    A <strong>CF Web Studio</strong> valoriza sua privacidade. Os dados enviados através dos nossos formulários de contato (nome, e-mail, telefone e detalhes de projeto) são utilizados estritamente para o atendimento comercial e elaboração de propostas.
                  </p>
                  <p>
                    Não compartilhamos, vendemos ou alugamos suas informações para terceiros. O armazenamento de dados segue boas práticas de segurança digital e conformidade com a LGPD (Lei Geral de Proteção de Dados).
                  </p>
                  <p>
                    Para dúvidas ou solicitação de exclusão de dados, entre em contato via e-mail: <strong className="text-white">{BRAND.email}</strong>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Todo o conteúdo, layout, marca e códigos desenvolvidos pela <strong>CF Web Studio</strong> neste site são de propriedade intelectual da empresa.
                  </p>
                  <p>
                    Os projetos entregues aos clientes seguem escopo e termos contratuais previamente acordados entre as partes, com total transparência quanto a prazos, revisões e propriedade do código.
                  </p>
                  <p>
                    As informações e estimativas apresentadas no site têm caráter informativo. Propostas oficiais e valores finais são formalizados via contrato individual de prestação de serviços.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Entendi e concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}