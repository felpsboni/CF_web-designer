import { useState } from 'react';
import {
  Laptop,
  Smartphone,
  CheckCircle2,
  X,
  Sparkles,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { Button } from './common/Button';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [filterSegment, setFilterSegment] = useState<string>('Todos');

  const segments = [
    'Todos',
    'Pizzarias & Gastronomia',
    'Barbearias & Cabeleireiros',
    'Direito & Consultoria Jurídica',
    'Arquitetura & Urbanismo'
  ];

  const filteredProjects = filterSegment === 'Todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.segment === filterSegment);

  return (
    <section id="projetos" className="py-20 md:py-32 relative bg-[#040813]">
      <Container>
        <SectionHeader
          badge="Portfólio Selecionado"
          title="Projetos pensados nos detalhes."
          subtitle="Cada projeto combina identidade, experiência e tecnologia para resolver um objetivo específico."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {segments.map((seg) => (
            <button
              key={seg}
              onClick={() => setFilterSegment(seg)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                filterSegment === seg
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>

        {/* Projects Grid / Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#081224] border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Card Image Banner & Visual Mockup */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0a1529] border-b border-slate-800">
                <img
                  src={project.desktopImage}
                  alt={`Mockup do projeto ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081224] via-transparent to-black/30" />

                {/* Concept Demonstrative Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-sky-300 border border-sky-400/30">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    {project.conceptBadge}
                  </span>
                </div>

                {/* Project Segment Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#040813]/85 backdrop-blur-md text-slate-300 border border-slate-800">
                    {project.segment}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-blue-400 font-semibold mb-2">
                    <span>{project.projectType}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ver Demonstração Ao Vivo</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  ) : (
                    <div />
                  )}

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveDevice('desktop');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 hover:border-blue-500 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Ver detalhes do projeto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Interactive Project Modal with Desktop/Mobile Switcher */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#081224] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#091428] border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    {selectedProject.segment}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{selectedProject.conceptBadge}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-semibold transition-all"
                  >
                    <span>Abrir Site Ao Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors"
                  aria-label="Fechar detalhes do projeto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Device Toggle & Mockup Viewer */}
              <div className="rounded-xl bg-[#040813] border border-slate-800 p-4">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <span className="text-xs font-medium text-slate-400">
                    Pré-visualização do Layout Responsivo
                  </span>
                  
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveDevice('desktop')}
                      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors ${
                        activeDevice === 'desktop'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      Desktop
                    </button>
                    <button
                      onClick={() => setActiveDevice('mobile')}
                      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors ${
                        activeDevice === 'mobile'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Smartphone
                    </button>
                  </div>
                </div>

                {/* Device Frame */}
                <div className="flex justify-center items-center py-4 bg-[#060c18] rounded-lg">
                  {activeDevice === 'desktop' ? (
                    <div className="w-full max-w-2xl rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                      <div className="h-6 bg-slate-800 flex items-center px-3 gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <img
                        src={selectedProject.desktopImage}
                        alt={`Versão Desktop - ${selectedProject.title}`}
                        className="w-full h-80 object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-64 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl p-1 bg-slate-800">
                      <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto my-1" />
                      <img
                        src={selectedProject.mobileImage}
                        alt={`Versão Mobile - ${selectedProject.title}`}
                        className="w-full h-96 object-cover object-top rounded-xl"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Objetivo do Projeto
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Entregas e Recursos
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA within modal */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Gostou da proposta visual? Podemos criar um projeto sob medida para seu segmento.
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ver Demonstração Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setSelectedProject(null);
                      const contactSection = document.querySelector('#contato');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Solicitar orçamento semelhante
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
