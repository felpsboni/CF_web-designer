import { ShieldCheck, MessageSquareQuote, Star } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';

/**
 * Testimonials Section
 * Note: Following agency guidelines, we do not fabricate fake reviews or clients.
 * This component is structured and ready to receive real verified client feedback.
 */
export function Testimonials() {
  // Placeholder structure ready for real verified reviews
  const testimonialSlots = [
    {
      id: 'slot-1',
      readyForReview: false,
      quote: 'Espaço reservado para avaliação verificada de cliente atendido pela CF Web Studio.',
      author: 'Área reservada para depoimento',
      role: 'Cliente Verificado',
      company: 'Empresa Parceira'
    },
    {
      id: 'slot-2',
      readyForReview: false,
      quote: 'Espaço reservado para avaliação verificada de cliente atendido pela CF Web Studio.',
      author: 'Área reservada para depoimento',
      role: 'Cliente Verificado',
      company: 'Empresa Parceira'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative bg-[#040813] border-t border-slate-800/60">
      <Container>
        <SectionHeader
          badge="Compromisso & Transparência"
          title="O que nossos clientes dizem."
          subtitle="Valorizamos a honestidade comercial: exibimos apenas avaliações 100% reais e validadas."
        />

        <div className="max-w-4xl mx-auto">
          {/* Transparency Card */}
          <div className="p-8 rounded-2xl bg-[#081224] border border-blue-500/20 text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white font-display">
              Compromisso de Autenticidade CF Web Studio
            </h3>

            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Não utilizamos depoimentos fictícios ou avaliações simuladas. Nosso portfólio demonstra a qualidade técnica e estética do nosso trabalho em cada detalhe.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Projetos conceituais desenvolvidos para demonstrar nosso padrão visual e técnico.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
