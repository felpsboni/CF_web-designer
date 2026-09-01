import { Palette, Terminal, Zap, Users2, ShieldCheck, Instagram } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { BRAND } from '../data/mockData';

export function About() {
  const pillars = [
    {
      icon: Palette,
      title: 'Design Sofisticado',
      description: 'Interfaces limpas e pensadas para transmitir valor imediato aos clientes mais exigentes.'
    },
    {
      icon: Terminal,
      title: 'Engenharia de Alta Performance',
      description: 'Código limpo, arquitetura moderna e velocidade máxima em qualquer conexão.'
    },
    {
      icon: Zap,
      title: 'Foco Total em Resultados',
      description: 'Estruturas desenhadas para transformar visitantes em contatos qualificados.'
    },
    {
      icon: Users2,
      title: 'Atendimento Próximo',
      description: 'Você dialoga diretamente com os desenvolvedores responsáveis pelo projeto.'
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 relative overflow-hidden bg-[#050b18]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Founders Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="Quem Somos"
              title="Dois especialistas. Uma visão: transformar sites em geradores de autoridade e receita."
              description="A CF Web Studio nasceu da união entre design estratégico e tecnologia de ponta. Criamos experiências digitais sob medida para empresas que se recusam a ter uma presença online amadora ou genérica."
            />

            {/* Founder box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091322] border border-slate-800/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                    CF
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Carlos & Felipe</h3>
                    <p className="text-xs text-slate-400">Sócios Fundadores & Especialistas Digitais</p>
                  </div>
                </div>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga Carlos & Felipe no Instagram"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border border-pink-500/30 text-xs font-medium transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{BRAND.instagramDisplay}</span>
                </a>
              </div>

              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                "Não somos uma agência tradicional inchada com dezenas de intermediários. Quando você contrata a CF Web Studio, conta com o nosso envolvimento pessoal em cada linha de código e detalhe de layout. Esse modelo garante agilidade incomparável, precisão estética e compromisso inegociável com os seus prazos."
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Atendimento em todo o Brasil</span>
                </div>
                <span className="text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Projetos 100% personalizados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-[#081224]/80 border border-slate-800/80 hover:border-blue-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1.5 font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}