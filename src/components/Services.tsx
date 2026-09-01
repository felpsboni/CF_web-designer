import {
  Globe,
  Sparkles,
  Code2,
  RefreshCw,
  Zap,
  Layers,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { SERVICES_DATA, SECONDARY_CAPABILITIES } from '../data/mockData';

const iconMap: Record<string, typeof Globe> = {
  Globe,
  Sparkles,
  Code2,
  RefreshCw,
  Zap,
  Layers
};

export function Services() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-32 relative bg-[#040813]">
      <Container>
        <SectionHeader
          badge="Serviços Especializados"
          title="Soluções digitais construídas para o seu negócio."
          subtitle="Do primeiro contato com sua marca à experiência completa do usuário, desenvolvemos soluções digitais pensando em design, tecnologia, desempenho e resultado."
        />

        {/* 6 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl bg-[#081224] border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0c1a33] border border-blue-500/20 group-hover:border-blue-400/60 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-blue-400/80 transition-colors">
                      SERVIÇO {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-slate-800/80">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA trigger */}
                <div className="mt-6 pt-4">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 hover:underline cursor-pointer"
                  >
                    <span>Solicitar proposta para este serviço</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Capabilities Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Capacidades Adicionais de Desenvolvimento
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Recursos e melhorias contínuas integradas aos projetos da CF Web Studio.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SECONDARY_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
