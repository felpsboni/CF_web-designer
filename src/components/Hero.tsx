import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Code2, Eye, Laptop, Smartphone } from 'lucide-react';
import { Container } from './common/Container';
import { Button } from './common/Button';

export function Hero() {
  const [previewTab, setPreviewTab] = useState<'preview' | 'code'>('preview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#projetos');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient"
    >
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#0A2540]/60 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>DESIGN • DESENVOLVIMENTO • ESTRATÉGIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white font-display leading-[1.12]">
              Sua empresa já entrega valor.{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                Seu site precisa demonstrar isso.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Criamos experiências digitais modernas, rápidas e estratégicas para transformar a presença online da sua empresa em um ativo de negócio.
            </p>

            {/* CTAs Group */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToContact}
                id="hero-primary-cta"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Solicitar orçamento
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPortfolio}
                id="hero-secondary-cta"
              >
                Conhecer projetos
              </Button>
            </div>

            {/* Microtext below CTAs */}
            <p className="mt-4 text-xs font-medium text-slate-400 flex items-center gap-2">
              <span className="text-blue-400">●</span>
              Sites Institucionais • Landing Pages • Desenvolvimento Personalizado
            </p>

            {/* Subtle Nationwide indicator */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800/80">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Atendimento para empresas em todo o Brasil.</span>
            </div>

          </div>

          {/* Right Column: Premium Interactive Browser / Tech Mockup Component */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-sky-500/20 rounded-2xl blur-xl opacity-75" />

              {/* Main Mockup Container */}
              <div className="relative rounded-2xl bg-[#081120] border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a1527] border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#040813] border border-slate-800 text-[11px] text-slate-400 font-mono">
                    <span className="text-emerald-400">https://</span>
                    <span>seunegocio.com.br</span>
                  </div>

                  {/* Device toggle */}
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800">
                    <button
                      onClick={() => setDeviceView('desktop')}
                      className={`p-1 rounded text-xs transition-colors ${
                        deviceView === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Visão Desktop"
                      aria-label="Alternar para visão desktop"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setDeviceView('mobile')}
                      className={`p-1 rounded text-xs transition-colors ${
                        deviceView === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Visão Mobile"
                      aria-label="Alternar para visão mobile"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Sub-bar tabs: Live Preview vs Clean Code */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#0c182d] border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewTab('preview')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                        previewTab === 'preview'
                          ? 'bg-blue-950 text-blue-300 border border-blue-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Interface
                    </button>
                    <button
                      onClick={() => setPreviewTab('code')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                        previewTab === 'code'
                          ? 'bg-blue-950 text-blue-300 border border-blue-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      Código Limpo
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <Zap className="w-3 h-3 fill-emerald-400" />
                    <span>100% Core Web Vitals</span>
                  </div>
                </div>

                {/* Mockup Screen Viewport */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#081222] to-[#040813] min-h-[300px]">
                  {previewTab === 'preview' ? (
                    <div className={`transition-all duration-300 mx-auto ${deviceView === 'mobile' ? 'max-w-[220px]' : 'w-full'}`}>
                      {/* Realistic Brand Interface Mockup */}
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
                              CF
                            </div>
                            <span className="text-xs font-semibold text-white">Sua Marca</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                            Online
                          </span>
                        </div>

                        <div className="mt-4 space-y-2.5">
                          <div className="h-4 bg-slate-700/60 rounded w-3/4 animate-pulse" />
                          <div className="h-3 bg-slate-800 rounded w-full" />
                          <div className="h-3 bg-slate-800 rounded w-5/6" />
                        </div>

                        {/* Interactive mini card inside interface */}
                        <div className="mt-4 p-3 rounded-lg bg-[#0A2540]/60 border border-blue-500/20 flex items-center justify-between">
                          <div>
                            <p className="text-[11px] text-slate-300 font-medium">Conversão & Vendas</p>
                            <p className="text-xs font-bold text-white">+140% no WhatsApp</p>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          </div>
                        </div>

                        <div className="mt-4 flex gap-2">
                          <div className="h-7 flex-1 bg-blue-600 rounded text-[11px] font-medium text-white flex items-center justify-center">
                            Falar com Consultor
                          </div>
                        </div>
                      </div>

                      {/* Floating Performance Indicator */}
                      <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px]">
                        <span className="text-slate-400">Tempo de Carregamento</span>
                        <span className="font-mono text-emerald-400 font-semibold">0.4s (Instantâneo)</span>
                      </div>
                    </div>
                  ) : (
                    /* Clean TSX / Tailwind Code snippet */
                    <div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-1 overflow-x-auto p-2">
                      <p className="text-slate-500">// Arquitetura CF Web Studio</p>
                      <p><span className="text-sky-400">export function</span> <span className="text-yellow-300">Experience</span>() &#123;</p>
                      <p className="pl-4"><span className="text-sky-400">return</span> (</p>
                      <p className="pl-8 text-blue-300">&lt;<span className="text-indigo-400">DigitalAsset</span></p>
                      <p className="pl-12 text-slate-400">strategy=<span className="text-emerald-300">"high-conversion"</span></p>
                      <p className="pl-12 text-slate-400">performance=<span className="text-emerald-300">"100/100"</span></p>
                      <p className="pl-12 text-slate-400">responsive=<span className="text-emerald-300">&#123;true&#125;</span></p>
                      <p className="pl-12 text-slate-400">credibility=<span className="text-emerald-300">"maximum"</span></p>
                      <p className="pl-8 text-blue-300">/&gt;</p>
                      <p className="pl-4">);</p>
                      <p>&#125;</p>
                    </div>
                  )}
                </div>

                {/* Footer Metric Strip */}
                <div className="grid grid-cols-3 divide-x divide-slate-800 bg-[#060c18] border-t border-slate-800/80 py-2.5 text-center text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">PageSpeed</span>
                    <span className="font-bold text-emerald-400 font-mono">100 / 100</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Design</span>
                    <span className="font-bold text-blue-400">Exclusivo</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Atendimento</span>
                    <span className="font-bold text-slate-200">Brasil</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
