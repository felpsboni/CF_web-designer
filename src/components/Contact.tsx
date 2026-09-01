import { useState, FormEvent } from 'react';
import {
  Send,
  MessageSquare,
  Mail,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { Button } from './common/Button';
import { ContactFormData } from '../types';
import { BRAND } from '../data/mockData';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    projectType: 'Site institucional',
    budgetRange: 'A definir',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Site institucional',
    'Landing Page',
    'Redesign',
    'Projeto personalizado',
    'Ainda não tenho certeza'
  ];

  const budgetOptions = [
    'A definir',
    'Até R$ 3.000',
    'R$ 3.000 a R$ 6.000',
    'R$ 6.000 a R$ 10.000',
    'Acima de R$ 10.000'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, preencha os campos obrigatórios (Nome, E-mail e WhatsApp).');
      return;
    }

    setStatus('submitting');

    try {
      // Disparo automático e direto para o seu e-mail cfwebstudiocarlosfelipe@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/cfwebstudiocarlosfelipe@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚀 Novo Pedido de Orçamento: ${formData.projectType} - ${formData.name}`,
          _template: 'table',
          'Nome do Solicitante': formData.name,
          'Empresa / Marca': formData.company || 'Não informada',
          'E-mail de Contato': formData.email,
          'WhatsApp': formData.whatsapp,
          'Tipo de Projeto': formData.projectType,
          'Faixa de Investimento': formData.budgetRange,
          'Mensagem / Detalhes': formData.message || 'Sem observações adicionais.'
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Falha ao enviar mensagem.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar. Por favor, tente pelo WhatsApp ao lado.');
    }
  };

  const handleSendViaWhatsApp = () => {
    const formattedMsg = `Olá, Carlos & Felipe! Gostaria de um orçamento para o meu projeto:
*Nome:* ${formData.name || 'Não informado'}
*Empresa:* ${formData.company || 'Não informado'}
*E-mail:* ${formData.email || 'Não informado'}
*WhatsApp:* ${formData.whatsapp || 'Não informado'}
*Tipo de Projeto:* ${formData.projectType}
*Faixa de Investimento:* ${formData.budgetRange}
*Detalhes:* ${formData.message || 'Gostaria de agendar uma conversa sobre meu projeto.'}`;

    const url = `https://wa.me/${BRAND.phone}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative bg-[#040813] border-t border-slate-800/60">
      <Container>
        <SectionHeader
          badge="Inicie seu Projeto"
          title="Conte sobre o seu projeto."
          subtitle="Preencha as informações abaixo para receber uma análise estratégica e uma proposta alinhada ao seu momento."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#081224] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  E-mail enviado com sucesso!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Obrigado pelo contato, <strong className="text-white">{formData.name}</strong>. Sua solicitação foi entregue diretamente na nossa caixa de entrada (<span className="text-blue-400">{BRAND.email}</span>). Retornaremos em até 24 horas úteis!
                </p>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleSendViaWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-500 border-emerald-400/40 text-white"
                    icon={<MessageSquare className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Falar também no WhatsApp
                  </Button>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        whatsapp: '',
                        projectType: 'Site institucional',
                        budgetRange: 'A definir',
                        message: ''
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline p-2"
                  >
                    Enviar outro projeto
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Seu Nome <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nome da Empresa / Profissão
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Ex: Pizzaria Forno Nobre, Barber Club..."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      E-mail Corporativo <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="contato@suaempresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="contact-whatsapp" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp com DDD <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Tipo de projeto */}
                <div>
                  <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tipo de Projeto
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#081224] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Faixa de investimento (opcional) */}
                <div>
                  <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Faixa de Investimento Estimada (Opcional)
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#081224] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Detalhes do Projeto / Objetivos
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Conte um pouco sobre as páginas necessárias, referências visuais que gosta ou prazos que pretende atender..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#040813] border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {status === 'submitting' ? 'Enviando e-mail...' : 'Enviar projeto'}
                  </Button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full py-2.5 px-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-900/30 text-emerald-300 text-xs font-medium inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Prefere enviar direto pelo WhatsApp? Clique aqui</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Handover & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-7 rounded-2xl bg-[#091427] border border-blue-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base font-display">
                    Contato Direto por E-mail
                  </h3>
                  <p className="text-xs text-slate-400">{BRAND.email}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Envie briefings completos, arquivos em anexo ou propostas de parceria comercial direto para a nossa caixa de entrada.
              </p>

              <div className="mt-6">
                <a
                  href={`mailto:${BRAND.email}?subject=${encodeURIComponent('[Contato CF Web Studio] Solicitação de Projeto')}&body=${encodeURIComponent(`Olá, Carlos & Felipe!

Gostaria de entrar em contato para conversar sobre a criação de um site / landing page para o meu negócio.

Meu nome: 
Meu WhatsApp: 
Minha Empresa: 
Resumo do que preciso: 

Aguardando retorno, obrigado!`)}`}
                  className="block"
                >
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-600/20"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Escrever E-mail Manualmente
                  </Button>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-7 rounded-2xl bg-[#091427] border border-emerald-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base font-display">
                    Prefere conversar no WhatsApp?
                  </h3>
                  <p className="text-xs text-slate-400">Atendimento ágil em tempo real</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Tire dúvidas, envie referências visuais ou alinhe detalhes do seu projeto direto com os desenvolvedores.
              </p>

              <div className="mt-6">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 border-emerald-400/40"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Commitments */}
            <div className="p-6 rounded-2xl bg-[#081224] border border-slate-800 space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Retorno em até 24h</strong>
                  <span className="text-slate-400">Respondemos solicitações em até 24 horas úteis com diagnóstico prévio.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Sigilo Profissional</strong>
                  <span className="text-slate-400">Seus dados e ideias de projeto são tratados com confidencialidade total.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}