import { MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { Container } from './common/Container';
import { Button } from './common/Button';
import { BRAND } from '../data/mockData';

export function ConversionCTA() {
  return (
    <section className="py-16 md:py-24 relative bg-radial-gradient overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#09152b] to-[#060e1d] border border-blue-500/30 p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-black/80">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Atendimento Estratégico & Ágil</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight">
            Seu próximo site pode começar por uma conversa.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Conte um pouco sobre sua empresa e o que você pretende construir. Vamos entender seu projeto e indicar a melhor solução.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-4 bg-emerald-600 hover:bg-emerald-500 border-emerald-400/40 shadow-emerald-900/40"
                icon={<MessageSquare className="w-5 h-5 text-white" />}
                iconPosition="left"
              >
                Falar com a CF Web Studio
              </Button>
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Atendimento direto com Carlos & Felipe • Resposta rápida no WhatsApp
          </p>
        </div>
      </Container>
    </section>
  );
}
