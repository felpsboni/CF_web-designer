import { Palette, Terminal, Zap, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';

export function About() {
  const pillars = [
    {
      title: 'Design estratégico',
      description: 'Construção visual alinhada ao posicionamento e autoridade da sua marca.',
      icon: Palette,
      gradient: 'from-blue-500/20 to-sky-500/10'
    },
    {
      title: 'Desenvolvimento moderno',
      description: 'Código limpo, arquitetura escalável e componentes reutilizáveis de ponta.',
      icon: Terminal,
      gradient: 'from-indigo-500/20 to-blue-500/10'
    },
    {
      title: 'Performance',
      description: 'Carregamento instantâneo, otimização técnica e Core Web Vitals no topo.',
      icon: Zap,
      gradient: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      title: 'Experiência do usuário',
      description: 'Navegação fluida e intuitiva pensada para conduzir o visitante à ação.',
      icon: Users2,
      gradient: 'from-sky-500/20 to-blue-500/10'
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 relative bg-[#060c18] border-y border-slate-800/60">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Sobre a Empresa"
          title="Estratégia, design e tecnologia trabalhando juntos."
          subtitle="Conheça a visão que orienta cada projeto desenvolvido pela CF Web Studio."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main narrative block */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091322] border border-slate-800/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                  CF
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Carlos & Felipe</h3>
                  <p className="text-xs text-slate-400">Sócios Fundadores & Especialistas Digitais</p>
                </div>
              </div>

              <p className="text-slate-200">
                A <strong className="text-white font-semibold">CF Web Studio</strong> é uma agência especializada na criação de experiências digitais para empresas que querem construir uma presença online mais profissional, moderna e estratégica.
              </p>
              
              <p className="mt-4 text-slate-300">
                Fundada por <strong className="text-white font-semibold">Carlos e Felipe</strong>, combinamos desenvolvimento, design e visão de negócio para criar desde landing pages focadas em conversão até sites institucionais completos e soluções web personalizadas.
              </p>

              <p className="mt-4 text-slate-300">
                Cada projeto é desenvolvido de acordo com os objetivos, o posicionamento e as necessidades de cada empresa. Mais do que colocar negócios na internet, construímos experiências digitais capazes de transmitir credibilidade, fortalecer marcas e criar novas oportunidades.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Parceira Estratégica de Negócios
                </span>
                <span>Atendimento Nacional</span>
              </div>
            </div>
          </div>

          {/* 4 Visual Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-xl bg-[#091322] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
