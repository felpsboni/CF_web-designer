import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../../data/mockData';

export function WhatsAppButton() {
  return (
    <aside
      aria-label="Atendimento WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={BRAND.whatsappFloatingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a CF Web Studio no WhatsApp"
        id="btn-floating-whatsapp"
        className="relative flex items-center gap-3 px-4 py-3 bg-[#0A2540] hover:bg-[#0f3357] text-white rounded-full border border-blue-500/30 hover:border-blue-400 shadow-2xl shadow-black/80 transition-all duration-300 hover:scale-105 active:scale-95 group focus-visible:outline-2 focus-visible:outline-blue-400"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>

        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
          <span className="text-xs font-semibold tracking-wide text-slate-100 hidden sm:inline-block">
            Conversar no WhatsApp
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
        </div>
      </a>
    </aside>
  );
}
