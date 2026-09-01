import {
  Compass,
  LayoutGrid,
  Gauge,
  Terminal,
  Users,
  TrendingUp
} from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { DIFFERENTIALS_DATA } from '../data/mockData';

const differentialIcons: Record<string, typeof Compass> = {
  Compass,
  LayoutGrid,
  Gauge,
  Terminal,
  Users,
  TrendingUp
};

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-32 relative bg-[#060d1b] border-t border-slate-800/60">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 blur-[140px] pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Nossos Diferenciais"
          title="Não desenvolvemos apenas páginas. Construímos experiências."
          subtitle="Entenda como nossa metodologia e rigor técnico diferenciam os projetos desenvolvidos pela CF Web Studio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIALS_DATA.map((item) => {
            const Icon = differentialIcons[item.iconName] || Compass;
            return (
              <div
                key={item.number}
                className="relative p-7 sm:p-8 rounded-2xl bg-[#091427] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                {/* Number Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0d1d38] border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900 text-blue-400 border border-slate-800">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors font-display">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
