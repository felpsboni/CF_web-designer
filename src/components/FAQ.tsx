import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { FAQ_DATA } from '../data/mockData';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative bg-[#060c18] border-t border-slate-800/60">
      <Container>
        <SectionHeader
          badge="Perguntas Frequentes"
          title="Tire suas dúvidas antes de começar."
          subtitle="Respostas claras para as principais dúvidas sobre custos, prazos, tecnologia e atendimento."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#091427] border-blue-500/40 shadow-lg shadow-blue-950/20'
                    : 'bg-[#081224] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-semibold text-base sm:text-lg text-white pr-4 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
