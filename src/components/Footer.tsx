import { useState, MouseEvent } from 'react';
import { MessageSquare, Instagram, ShieldCheck, ArrowUp, X, FileText } from 'lucide-react';
import { Container } from './common/Container';
import { BRAND } from '../data/mockData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Processo', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050c] text-slate-400 text-sm border-t border-slate-800/80 pt-16 pb-12 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Signature */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-sm bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  CF WEB STUDIO
                </span>
              </div>
              <span className="text-xs tracking-wider text-slate-400 uppercase ml-5.5 mt-0.5">
                Carlos & Felipe — Web Design e Desenvolvimento
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Experiências digitais desenvolvidas para empresas que valorizam presença, tecnologia e crescimento.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{BRAND.coverage}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-300 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact Handover */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Conectar
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#081224] border border-slate-800 hover:border-emerald-500/50 text-xs text-slate-200 hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Atendimento via WhatsApp</span>
              </a>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#081224] border border-slate-800 hover:border-pink-500/50 text-xs text-slate-200 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram (@cfwebstudio)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} CF Web Studio. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-200 transition-colors underline cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-200 transition-colors underline cursor-pointer"
            >
              Termos de Uso
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Legal Information Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-2xl bg-[#081224] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg font-display">
                <FileText className="w-5 h-5 text-blue-400" />
                <span>
                  {legalModal === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
                </span>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    A <strong>CF Web Studio</strong> respeita a privacidade de seus visitantes e clientes. Esta política descreve como tratamos as informações fornecidas por meio de nossos formulários e canais de contato.
                  </p>
                  <h5 className="font-semibold text-white">1. Coleta de Dados</h5>
                  <p>
                    Coletamos apenas as informações voluntariamente submetidas através do formulário de orçamento (nome, empresa, e-mail, telefone e detalhes do projeto) exclusivamente com a finalidade de elaborar propostas comerciais e prestar atendimento.
                  </p>
                  <h5 className="font-semibold text-white">2. Uso das Informações</h5>
                  <p>
                    Os dados não são comercializados, compartilhados com terceiros para fins publicitários ou utilizados para qualquer finalidade fora do escopo de relacionamento entre a CF Web Studio e o cliente.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bem-vindo aos Termos de Uso da <strong>CF Web Studio</strong> (Carlos & Felipe — Web Design e Desenvolvimento).
                  </p>
                  <h5 className="font-semibold text-white">1. Escopo dos Serviços</h5>
                  <p>
                    A CF Web Studio presta serviços de desenvolvimento de sites institucionais, landing pages, redesign e desenvolvimento web sob medida, mediante proposta comercial e cronograma aprovados.
                  </p>
                  <h5 className="font-semibold text-white">2. Propriedade Intelectual</h5>
                  <p>
                    Após a conclusão do projeto e quitação integral do investimento, os direitos de utilização do site desenvolvido são transferidos ao cliente, resguardado o direito de veiculação do projeto no portfólio da agência como case de design.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
