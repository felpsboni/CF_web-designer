export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  idealFor: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Institucional' | 'Landing Page' | 'Web App' | 'E-commerce';
  description: string;
  results: string;
  tags: string[];
  image: string;
  demoUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export const BRAND = {
  name: 'CF Web Studio',
  founders: 'Carlos & Felipe',
  tagline: 'Soluções Web de Alto Padrão para Empresas',
  phoneDisplay: '(11) 91730-1110',
  phoneRaw: '5511917301110',
  whatsappUrl: 'https://wa.me/5511917301110?text=Ol%C3%A1!%20Conheci%20a%20CF%20Web%20Studio%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20projeto.',
  whatsappFloatingUrl: 'https://wa.me/5511917301110?text=Ol%C3%A1!%20Conheci%20a%20CF%20Web%20Studio%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.',
  email: 'cfwebstudiocarlosfelipe@gmail.com',
  instagram: 'https://www.instagram.com/cfwebstudio.br/?utm_source=ig_web_button_share_sheet',
  instagramDisplay: '@cfwebstudio.br',
  coverage: 'Atendimento online em todo o Brasil.'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites-institucionais',
    title: 'Sites Institucionais de Alto Padrão',
    category: 'Presença Digital & Autoridade',
    description: 'Desenvolvimento de sites corporativos modernos, pensados para transmitir credibilidade imediata, posicionar sua marca com sofisticação e converter visitantes em oportunidades reais de negócio.',
    features: [
      'Design exclusivo alinhado à identidade da marca',
      'Arquitetura focada em autoridade e conversão',
      'Painel intuitivo para gerenciamento de conteúdo',
      'SEO técnico integrado para rankeamento no Google',
      'Totalmente responsivo e otimizado para celulares'
    ],
    idealFor: 'Empresas consolidadas, escritórios de advocacia, consultorias, clínicas e indústrias que buscam se destacar no mercado.',
    popular: true
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages de Alta Conversão',
    category: 'Vendas & Captação de Leads',
    description: 'Páginas estratégicas desenhadas especificamente para campanhas de tráfego pago (Google Ads e Meta Ads), lançamentos de produtos e captação qualificada de leads.',
    features: [
      'Copywriting persuasivo e hierarquia visual voltada à ação',
      'Velocidade ultrarrápida para menor custo por clique (CPC)',
      'Integração direta com WhatsApp, CRM e ferramentas de e-mail',
      'Tags de rastreamento (Pixel Meta, Google Analytics 4, GTM)',
      'Testes A/B e otimização contínua de formulários'
    ],
    idealFor: 'Negócios que investem em anúncios, infoprodutores, eventos, lançamentos imobiliários e prestadores de serviços de alto ticket.'
  },
  {
    id: 'sistemas-web',
    title: 'Soluções Web e Aplicações Sob Medida',
    category: 'Automação & Plataformas',
    description: 'Criação de portais interativos, painéis de controle administrativos (dashboards), catálogos digitais dinâmicos e integrações de API para automatizar processos da sua empresa.',
    features: [
      'Desenvolvimento em tecnologias modernas (React, Node, TypeScript)',
      'Integração com gateways de pagamento, ERPs e APIs externas',
      'Áreas logadas seguras para clientes ou equipe interna',
      'Estrutura escalável em nuvem com alta disponibilidade',
      'Segurança de dados e conformidade com LGPD'
    ],
    idealFor: 'Empresas que precisam de ferramentas personalizadas que vão além de um site institucional tradicional.'
  },
  {
    id: 'redesign-performance',
    title: 'Redesign e Otimização de Performance',
    category: 'Modernização & Velocidade',
    description: 'Transformação visual e técnica de sites antigos ou lentos que estão perdendo clientes e não geram os resultados esperados para a empresa.',
    features: [
      'Auditoria completa de UX (Experiência do Usuário) e SEO',
      'Reestruturação visual moderna mantendo o histórico de autoridade',
      'Otimização extrema de carregamento (Google Core Web Vitals)',
      'Correção de gargalos que impedem a conversão em smartphones',
      'Migração segura sem perda de posicionamento orgânico'
    ],
    idealFor: 'Empresas com sites criados há mais de 3 anos ou que sofrem com lentidão e baixa taxa de conversão.'
  }
];

export const DIFFERENTIALS_DATA = [
  {
    title: 'Atendimento Direto com os Especialistas',
    description: 'Você conversa diretamente com os sócios Carlos e Felipe em todas as etapas — do briefing ao suporte final. Sem intermediários, sem ruídos na comunicação.',
    highlight: 'Sem repasses a estagiários'
  },
  {
    title: 'Design Estratégico, Não Genérico',
    description: 'Não usamos templates prontos e batidos. Cada interface é projetada de forma sob medida para destacar os diferenciais competitivos da sua empresa.',
    highlight: '100% Exclusivo'
  },
  {
    title: 'Performance e Velocidade Máxima',
    description: 'Sites que carregam em menos de 2 segundos. Desenvolvidos com código limpo e tecnologias de ponta para garantir a melhor experiência e melhor rankeamento no Google.',
    highlight: 'Google Core Web Vitals 90+'
  },
  {
    title: 'Foco Real em Conversão e Vendas',
    description: 'Mais do que uma página bonita, construímos uma ferramenta comercial funcional para gerar contatos, orçamentos e agendamentos no seu WhatsApp.',
    highlight: 'Orientado a Resultados'
  },
  {
    title: 'Transparência em Prazos e Entregas',
    description: 'Cronograma detalhado desde o primeiro dia de contrato. Entregas em etapas com validação contínua e sem surpresas no orçamento acordado.',
    highlight: 'Prazos rigorosamente cumpridos'
  },
  {
    title: 'Suporte Pós-Lançamento Garantido',
    description: 'Não encerramos o contato após o lançamento. Acompanhamos a publicação, oferecemos treinamento e suporte contínuo para sua total tranquilidade.',
    highlight: 'Garantia e acompanhamento'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: '1',
    title: 'Vanguard Capital',
    client: 'Gestora de Investimentos & Private Banking',
    category: 'Institucional',
    description: 'Site institucional sóbrio e sofisticado para gestora de patrimônio, transmitindo solidez e integridade através de tipografia editorial e carregamento instantâneo.',
    results: '+140% em solicitações de contato de clientes de alto patrimônio',
    tags: ['Next.js', 'Tailwind CSS', 'SEO Corporativo', 'Design Sóbrio'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#contato'
  },
  {
    id: '2',
    title: 'Dra. Helena Arcuri',
    client: 'Clínica de Dermatologia Avançada',
    category: 'Landing Page',
    description: 'Landing page focada na apresentação de tratamentos estéticos e conversão direta para agendamentos via WhatsApp da equipe de atendimento.',
    results: 'Taxa de conversão de 14.8% em campanhas de tráfego pago',
    tags: ['Mobile First', 'WhatsApp Integration', 'Meta Pixel', 'Design Elegante'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#contato'
  },
  {
    id: '3',
    title: 'Nexus Logtech',
    client: 'Plataforma de Logística Inteligente B2B',
    category: 'Web App',
    description: 'Redesign completo da presença digital da startup, com demonstrações interativas da plataforma e captação automatizada de reuniões de demonstração.',
    results: '+85% em agendamentos de demos comerciais no primeiro mês',
    tags: ['React', 'TypeScript', 'HubSpot CRM', 'Animações Fluidas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#contato'
  },
  {
    id: '4',
    title: 'Boutique & Atelier Maison',
    client: 'Marca de Decoração e Alta Moda',
    category: 'E-commerce',
    description: 'Catálogo digital refinado com experiência imersiva de compra, integração com gateways rápidos e visual luxuoso que valoriza cada detalhe dos produtos.',
    results: 'Tempo de permanência médio no site aumentou 3.2x',
    tags: ['E-commerce', 'UX Premium', 'Stripe Integration', 'Alta Definição'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '#contato'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Briefing e Alinhamento Estratégico',
    description: 'Compreendemos a fundo seu modelo de negócio, seus concorrentes, seu público-alvo e os objetivos concretos que o novo site deve alcançar.',
    duration: '2 a 3 dias úteis',
    deliverables: ['Diagnóstico de presença digital', 'Mapa de funcionalidades', 'Estrutura de páginas (Wireframe)']
  },
  {
    step: '02',
    title: 'Design Visual Exclusivo (UI/UX)',
    description: 'Criamos o layout de cada tela com base na identidade da sua marca, aplicando princípios de psicologia das cores, tipografia refinada e hierarquia de conversão.',
    duration: '5 a 8 dias úteis',
    deliverables: ['Protótipo navegável para desktop e mobile', 'Validação e ajustes com o cliente']
  },
  {
    step: '03',
    title: 'Desenvolvimento e Otimização Técnica',
    description: 'Transformamos o design aprovado em código limpo, ultrarrápido e seguro, implementando SEO técnico, integrações de formulários e pixels de anúncio.',
    duration: '7 a 12 dias úteis',
    deliverables: ['Código otimizado para Core Web Vitals', 'Integração WhatsApp/CRM/E-mail', 'Segurança SSL']
  },
  {
    step: '04',
    title: 'Revisão, Publicação e Suporte',
    description: 'Realizamos baterias de testes em múltiplos dispositivos e navegadores. Conectamos seu domínio oficial, configuramos e-mails e oferecemos suporte contínuo.',
    duration: '2 a 3 dias úteis',
    deliverables: ['Site 100% online no domínio', 'Treinamento de uso', 'Garantia técnica e monitoramento']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dr. Roberto Silveira',
    role: 'Sócio Fundador',
    company: 'Silveira & Associados Advocacia',
    content: 'O Carlos e o Felipe entenderam perfeitamente o tom de seriedade e sofisticação que nosso escritório precisava transmitir. O site novo elevou o padrão das consultas que recebemos e o atendimento direto com eles fez toda a diferença.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Mariana Duarte',
    role: 'Diretora de Marketing',
    company: 'Vitta Consultoria Empresarial',
    content: 'Nossa landing page antiga convertia menos de 3%. Após a reformulação feita pela CF Web Studio, nossa taxa de conversão saltou para quase 12%. O investimento se pagou logo nas primeiras duas semanas de campanha no Google.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Guilherme Rezende',
    role: 'CEO',
    company: 'Nexus Logtech',
    content: 'Profissionalismo impecável. O projeto foi entregue exatamente no dia prometido, sem nenhuma cobrança extra oculta. O site é extremamente rápido tanto no celular quanto no computador. Recomendo de olhos fechados!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    category: 'Geral',
    question: 'Quanto tempo leva para o meu site ficar pronto?',
    answer: 'O prazo varia conforme a complexidade do projeto. Em média, Landing Pages estratégicas são entregues em 7 a 10 dias úteis. Sites institucionais completos levam entre 15 e 25 dias úteis. Estabelecemos um cronograma claro antes do início para garantir cumprimento rigoroso do prazo.'
  },
  {
    id: '2',
    category: 'Comercial',
    question: 'Como funciona o processo de pagamento?',
    answer: 'Trabalhamos com condições facilitadas: entrada no fechamento do contrato (para início da produção) e o saldo restante na entrega e validação final do site. Aceitamos PIX, transferência e parcelamento no cartão de crédito em até 12x.'
  },
  {
    id: '3',
    category: 'Técnico',
    question: 'O site vai funcionar perfeitamente em celulares?',
    answer: 'Sim, 100%! Desenvolvemos com metodologia Mobile-First, o que significa que o site é planejado e testado primeiro para celulares e tablets (onde costuma vir mais de 80% dos acessos), garantindo leitura confortável e botões de contato sempre acessíveis.'
  },
  {
    id: '4',
    category: 'Conteúdo',
    question: 'Eu não tenho os textos ou fotos profissionais, vocês ajudam?',
    answer: 'Com certeza. Orientamos toda a estruturação de conteúdo, auxiliamos na redação persuasiva (copywriting) e utilizamos bancos de imagens profissionais de alta qualidade para complementar a identidade da sua empresa.'
  },
  {
    id: '5',
    category: 'Técnico',
    question: 'O site já vem otimizado para aparecer no Google (SEO)?',
    answer: 'Sim. Todos os nossos projetos já saem de fábrica com SEO Técnico configurado: meta tags, estrutura semântica HTML5, sitemap XML, indexação no Google Search Console, certificado de segurança SSL e otimização de velocidade de carregamento.'
  },
  {
    id: '6',
    category: 'Suporte',
    question: 'Terei suporte após o site ser publicado?',
    answer: 'Sim. Oferecemos garantia técnica completa e suporte após o lançamento para eventuais dúvidas, ajustes de estabilidade e auxílio com e-mails corporativos e hospedagem. Você nunca fica desamparado.'
  },
  {
    id: '7',
    category: 'Atendimento',
    question: 'A CF Web Studio atende empresas de qualquer lugar do Brasil?',
    answer: 'Sim! Nosso fluxo de atendimento é 100% estruturado digitalmente através de reuniões online no Google Meet, WhatsApp direto e protótipos em nuvem, atendendo com agilidade clientes em todo o território nacional.'
  }
];