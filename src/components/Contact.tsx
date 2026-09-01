import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Instagram 
} from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeader } from './common/SectionHeader';
import { Button } from './common/Button';
import { BRAND } from '../data/mockData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  estimatedBudget: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Site Institucional',
    estimatedBudget: 'A definir',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Telefone).');
      return;
    }

    // Direct WhatsApp Handover with formatted message
    try {
      const formattedText = encodeURIComponent(
        `*Novo Contato via Formulário do Site — CF Web Studio*\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `🏢 *Empresa:* ${formData.company || 'Não informado'}\n` +
        `✉️ *E-mail:* ${formData.email}\n` +
        `📱 *WhatsApp:* ${formData.phone}\n` +
        `🎯 *Tipo de Projeto:* ${formData.projectType}\n` +
        `💰 *Expectativa de Investimento:* ${formData.estimatedBudget}\n` +
        `📝 *Detalhes:* ${formData.message || 'Gostaria de uma proposta personalizada.'}`
      );

      const directWhatsAppUrl = `https://wa.me/${BRAND.phoneRaw}?text=${formattedText}`;

      setTimeout(() => {
        setStatus('success');
        window.open(directWhatsAppUrl, '_blank', 'noopener,noreferrer');
      }, 600);
    } catch {
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao processar o formulário. Por favor, entre em contato direto pelo WhatsApp.');
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-28 relative overflow-hidden bg-[#040813]">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Inicie seu Projeto"
          title="Pronto para levar a presença digital da sua empresa para outro nível?"
          description="Preencha o formulário abaixo ou fale diretamente conosco pelo WhatsApp. Retornamos com uma estimativa de investimento e cronograma em poucas horas."
          centered
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-[#081224] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Mensagem Encaminhada com Sucesso!
                </h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                  Abrimos uma conversa no WhatsApp para você falar diretamente com o Carlos e o Felipe. Se a janela não abriu automaticamente, clique no botão abaixo.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="whatsapp" size="md" icon={<MessageSquare className="w-4 h-4" />}>
                      Abrir WhatsApp Direto
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        projectType: 'Site Institucional',
                        estimatedBudget: 'A definir',
                        message: ''
                      });
                    }}
                  >
                    Enviar Outra Mensagem
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-200">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-200">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: (11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-200">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: contato@suaempresa.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-200">
                      Nome da Sua Empresa / Ramo
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex: Silveira Advocacia"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs font-semibold text-slate-200">
                      Qual tipo de projeto você precisa?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                    >
                      <option value="Site Institucional">Site Institucional de Alto Padrão</option>
                      <option value="Landing Page de Conversão">Landing Page de Alta Conversão</option>
                      <option value="Redesign / Modernização">Redesign de Site Existente</option>
                      <option value="Aplicação / Sistema Web">Solução Web / Painel Sob Medida</option>
                      <option value="Outro / Consultoria">Outro tipo de projeto</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-slate-200">
                      Expectativa de Investimento
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                    >
                      <option value="A definir">Ainda estou avaliando</option>
                      <option value="R$ 1.500 a R$ 3.000">R$ 1.500 a R$ 3.000</option>
                      <option value="R$ 3.000 a R$ 6.000">R$ 3.000 a R$ 6.000</option>
                      <option value="Acima de R$ 6.000">Acima de R$ 6.000</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-200">
                    Conte um pouco sobre o projeto e seus objetivos
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ex: Queremos renovar nosso site para transmitir mais confiança e receber mais orçamentos qualificados pelo WhatsApp..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-rose-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full text-base font-semibold shadow-lg shadow-blue-600/25"
                  icon={<Send className="w-4 h-4" />}
                >
                  {status === 'submitting' ? 'Processando envio...' : 'Solicitar Orçamento sem Compromisso'}
                </Button>

                <p className="text-center text-[11px] text-slate-400">
                  🔒 Seus dados estão seguros e não compartilhamos com terceiros.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Instagram Card */}
            <div className="p-7 rounded-2xl bg-[#091427] border border-pink-500/30 shadow-xl relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-600/20 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base font-display">
                    Siga no Instagram
                  </h3>
                  <p className="text-xs text-pink-400 font-medium">{BRAND.instagramDisplay}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Acompanhe os bastidores de desenvolvimento, novidades, dicas de design e os projetos mais recentes que colocamos no ar.
              </p>

              <div className="mt-6">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full border-pink-500/40 text-pink-300 hover:text-white hover:bg-pink-600/20"
                    icon={<ArrowUpRight className="w-4 h-4 text-pink-400" />}
                  >
                    Ver Perfil no Instagram
                  </Button>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-7 rounded-2xl bg-[#091427] border border-emerald-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base font-display">
                    Conversa Rápida no WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">Resposta em poucos minutos</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Prefere falar imediatamente? Envie uma mensagem direta e receba atendimento sem intermediários com o Carlos e o Felipe.
              </p>

              <div className="mt-6">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="whatsapp"
                    size="md"
                    className="w-full"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Iniciar Conversa no WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Direct Email & Details Card */}
            <div className="p-7 rounded-2xl bg-[#091427] border border-slate-800 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    E-mail Oficial
                  </h4>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-sm font-medium text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Horário de Atendimento
                  </h4>
                  <p className="text-sm text-slate-300">
                    Segunda a Sexta, das 09h às 19h (Horário de Brasília)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Abrangência
                  </h4>
                  <p className="text-sm text-slate-300">
                    Atendimento e desenvolvimento 100% online para empresas em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}