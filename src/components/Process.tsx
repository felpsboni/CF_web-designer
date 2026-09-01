import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { PROCESS_STEPS } from '../data/mockData';

export function Process() {
  return (
    <section id="processo" className="py-20 md:py-32 relative bg-[#060c18] border-t border-slate-800/60">
      <Container>
        <SectionHeader
          badge="Metodologia Transparente"
          title="Do primeiro contato ao lançamento."
          subtitle="Um processo estruturado em etapas claras para garantir previsibilidade, alinhamento constante e excelência em cada entrega."
        />

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative p-7 rounded-2xl bg-[#091427] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              {/* Top Step Number Badge & Indicator */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-sm text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    0{step.stepNumber}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {step.duration}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors font-display">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <p className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider mb-2">
                  Principais Entregas:
                </p>
                <ul className="space-y-1.5">
                  {step.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
