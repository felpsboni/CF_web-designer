import {
  ServiceItem,
  DifferentialItem,
  PortfolioProject,
  ProcessStep,
  FAQItem
} from '../types';

export const BRAND = {
  name: 'CF WEB STUDIO',
  subtitle: 'Carlos & Felipe — Web Design e Desenvolvimento',
  phone: '5511917301110',
  phoneDisplay: '(11) 91730-1110',
  whatsappUrl: 'https://wa.me/5511917301110?text=Ol%C3%A1!%20Conheci%20a%20CF%20Web%20Studio%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20projeto.',
  whatsappFloatingUrl: 'https://wa.me/5511917301110?text=Ol%C3%A1!%20Conheci%20a%20CF%20Web%20Studio%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.',
  email: 'cfwebstudiocarlosfelipe@gmail.com',
  instagram: 'https://instagram.com/cfwebstudio',
  coverage: 'Atendimento online em todo o Brasil.'
};
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites-institucionais',
    number: '01',
    title: 'Sites Institucionais',
    description: 'Sites profissionais desenvolvidos para apresentar sua empresa, seus diferenciais e seus serviços com clareza, credibilidade e uma experiência digital de alto nível.',
    highlights: ['Arquitetura de Informação Clara', 'Design Corporativo Exclusivo', 'Totalmente Responsivo'],
    iconName: 'Globe'
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    description: 'Páginas estratégicas criadas para campanhas, produtos, serviços e geração de oportunidades, com estrutura focada em conduzir o visitante até a ação desejada.',
    highlights: ['Foco em Conversão e Vendas', 'Carregamento Ultrarrápido', 'Integração com WhatsApp e CRM'],
    iconName: 'Sparkles'
  },
  {
    id: 'desenvolvimento-personalizado',
    number: '03',
    title: 'Desenvolvimento Web Personalizado',
    description: 'Projetos desenvolvidos de acordo com necessidades específicas, criando experiências e funcionalidades que vão além de modelos prontos.',
    highlights: ['Arquitetura React / Next / Vite', 'Painéis e Portais sob Medida', 'Código Limpo e Escalável'],
    iconName: 'Code2'
  },
  {
    id: 'redesign-de-sites',
    number: '04',
    title: 'Redesign de Sites',
    description: 'Modernização completa de sites antigos ou pouco eficientes, melhorando identidade visual, experiência do usuário, responsividade, estrutura e performance.',
    highlights: ['Atualização Visual e Tecnológica', 'Melhoria de Usabilidade (UX)', 'Preservação de Autoridade'],
    iconName: 'RefreshCw'
  },
  {
    id: 'performance-seo',
    number: '05',
    title: 'Performance e SEO Técnico',
    description: 'Otimização de velocidade, estrutura técnica, responsividade e boas práticas para melhorar a experiência dos visitantes e a capacidade de indexação nos mecanismos de busca.',
    highlights: ['Core Web Vitals Verdes', 'Tags OpenGraph e Schema.org', 'Otimização de Assets e Cache'],
    iconName: 'Zap'
  },
  {
    id: 'integracoes-automacoes',
    number: '06',
    title: 'Integrações e Automações',
    description: 'Integração com WhatsApp, formulários, ferramentas externas e automações para tornar o site mais funcional e conectado à operação da empresa.',
    highlights: ['Disparo Direto para WhatsApp', 'Google Analytics e Meta Pixel', 'Conexão com Webhooks e APIs'],
    iconName: 'Layers'
  }
];

export const SECONDARY_CAPABILITIES: string[] = [
  'Sites responsivos',
  'Integração com redes sociais',
  'Formulários personalizados',
  'Manutenção de sites',
  'Otimização para dispositivos móveis',
  'Melhorias de performance',
  'Implementação de analytics',
  'Desenvolvimento de páginas específicas'
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    number: '01',
    title: 'Projeto personalizado',
    description: 'Cada negócio possui objetivos, público e posicionamento diferentes. O projeto deve refletir essas particularidades.',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Design com propósito',
    description: 'A estética precisa trabalhar junto com clareza, usabilidade, hierarquia visual e conversão.',
    iconName: 'LayoutGrid'
  },
  {
    number: '03',
    title: 'Performance desde o início',
    description: 'Velocidade, responsividade e experiência mobile devem fazer parte da arquitetura do projeto, não ser correções posteriores.',
    iconName: 'Gauge'
  },
  {
    number: '04',
    title: 'Desenvolvimento profissional',
    description: 'Estrutura moderna, código organizado, componentes reutilizáveis e boas práticas de desenvolvimento.',
    iconName: 'Terminal'
  },
  {
    number: '05',
    title: 'Atendimento direto',
    description: 'Contato próximo com quem realmente está planejando, projetando e desenvolvendo o site.',
    iconName: 'Users'
  },
  {
    number: '06',
    title: 'Pensado para crescer',
    description: 'Construímos projetos preparados para receber novas páginas, integrações, funcionalidades e evoluções futuras.',
    iconName: 'TrendingUp'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    stepNumber: 1,
    title: 'Descoberta',
    description: 'Entendemos sua empresa, público, objetivos e necessidades.',
    duration: 'Fase 01',
    keyDeliverables: ['Mapeamento de objetivos', 'Análise de referências', 'Alinhamento de público']
  },
  {
    number: '02',
    stepNumber: 2,
    title: 'Estratégia',
    description: 'Definimos arquitetura, conteúdo, funcionalidades e direção visual.',
    duration: 'Fase 02',
    keyDeliverables: ['Sitemap estruturado', 'Hierarquia de conteúdo', 'Definição técnica']
  },
  {
    number: '03',
    stepNumber: 3,
    title: 'Design',
    description: 'Construímos a experiência e a identidade visual das principais páginas.',
    duration: 'Fase 03',
    keyDeliverables: ['UI/UX em alta fidelidade', 'Design system & tipografia', 'Protótipo navegável']
  },
  {
    number: '04',
    stepNumber: 4,
    title: 'Desenvolvimento',
    description: 'Transformamos o projeto em uma experiência funcional, rápida e responsiva.',
    duration: 'Fase 04',
    keyDeliverables: ['Código limpo e otimizado', 'Responsividade desktop e mobile', 'Integrações ativas']
  },
  {
    number: '05',
    stepNumber: 5,
    title: 'Revisão',
    description: 'Validamos detalhes, conteúdo, dispositivos, performance e experiência.',
    duration: 'Fase 05',
    keyDeliverables: ['Checklist de qualidade', 'Testes de velocidade', 'Ajustes finos']
  },
  {
    number: '06',
    stepNumber: 6,
    title: 'Publicação',
    description: 'Colocamos o projeto no ar e deixamos tudo preparado para sua utilização.',
    duration: 'Fase 06',
    keyDeliverables: ['Configuração de domínio & SSL', 'Indexação no Google', 'Treinamento de uso']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'don-forno-pizzaria',
    title: 'Don Forno & Explosion Digital Kitchen',
    client: 'Don Forno Gastronomia',
    segment: 'Pizzarias & Gastronomia',
    projectType: 'Cardápio Digital & Pedidos WhatsApp',
    description: 'Experiência visual moderna e apetitosa com cardápio digital interativo para delivery e mesas, seleção de itens/adicionais e envio formatado direto para o WhatsApp.',
    tags: ['Cardápio Digital', 'Pedidos WhatsApp', 'Fotografia Gastronômica', 'SEO Local', 'Mobile-First'],
    deliverables: ['Cardápio Interativo de Pizzas & Bebidas', 'Seleção de Sabores & Adicionais', 'Disparo Direto para WhatsApp', 'Integração Google Meu Negócio'],
    desktopImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    liveUrl: 'https://explosion-digital-kitchen.lovable.app',
    conceptBadge: 'Demonstração Online Disponível',
    palette: {
      primary: '#f97316',
      accent: '#fb923c',
      bg: '#1c1008'
    }
  },
  {
    id: 'vanguard-barbearia',
    title: 'Vanguard Barbearia & Studio Hair',
    client: 'Vanguard Barber Club',
    segment: 'Barbearias & Cabeleireiros',
    projectType: 'Site Institucional & Agendamento',
    description: 'Ambiente digital refinado para barbearias e salões masculinos/femininos, com catálogo de serviços, galeria de transformações e agendamento ágil de horários no WhatsApp.',
    tags: ['Agendamento Online', 'Catálogo de Serviços', 'Galeria de Cortes', 'SEO Local', 'WhatsApp Direct'],
    deliverables: ['Agendamento Direto de Horários', 'Tabela de Serviços & Valores', 'Galeria de Cortes & Transformações', 'Localização e Rota no Google Maps'],
    desktopImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    liveUrl: 'https://felpsboni.github.io/barbearia-vanguard/',
    conceptBadge: 'Demonstração Online Disponível',
    palette: {
      primary: '#eab308',
      accent: '#fde047',
      bg: '#15120a'
    }
  },
  {
    id: 'aurora-advocacia',
    title: 'Aurora Advocacia Empresarial',
    client: 'Aurora & Associados',
    segment: 'Direito & Consultoria Jurídica',
    projectType: 'Site Institucional',
    description: 'Ambiente digital refinado com foco em credibilidade, áreas de atuação estratégica e canais diretos de contato seguro para clientes corporativos.',
    tags: ['Design Editorial', 'Performance 99+', 'Tipografia Serifada', 'WhatsApp Direct'],
    deliverables: ['Estruturação de Áreas Jurídicas', 'Agendamento Integrado', 'Otimização Mobile'],
    desktopImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    liveUrl: 'https://felpsboni.github.io/aurora-advocacia/',
    conceptBadge: 'Demonstração Online Disponível',
    palette: {
      primary: '#6366f1',
      accent: '#818cf8',
      bg: '#0a0f1d'
    }
  },
  {
    id: 'apex-arquitetura',
    title: 'Apex Studio de Arquitetura & Interiores',
    client: 'Apex Architecture',
    segment: 'Arquitetura & Urbanismo',
    projectType: 'Portfólio Editorial & Institucional',
    description: 'Experiência imersiva focada na valorização estética de projetos residenciais e comerciais, com galerias em alta resolução e carregamento instantâneo.',
    tags: ['Galeria Otimizada', 'Framer Motion', 'Grid Minimalista', 'SEO Local'],
    deliverables: ['Apresentação de Projetos', 'Filtro por Categoria', 'Contato Ágil'],
    desktopImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    liveUrl: 'https://felpsboni.github.io/apex-estudio-arquitetura/',
    conceptBadge: 'Demonstração Online Disponível',
    palette: {
      primary: '#3b82f6',
      accent: '#60a5fa',
      bg: '#0e1726'
    }
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto custa desenvolver um site?',
    answer: 'O investimento depende do tamanho, das funcionalidades e do nível de personalização necessário. Após entendermos seu projeto, apresentamos uma proposta adequada ao objetivo da empresa.'
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo leva para desenvolver?',
    answer: 'O prazo varia de acordo com a complexidade do projeto, quantidade de páginas, conteúdo e funcionalidades. O cronograma é definido antes do início do desenvolvimento.'
  },
  {
    id: 'faq-3',
    question: 'O site funciona no celular?',
    answer: 'Sim. Todos os projetos são desenvolvidos com abordagem responsiva, garantindo uma experiência adequada em celulares, tablets e computadores.'
  },
  {
    id: 'faq-4',
    question: 'Vocês atendem empresas de outras cidades?',
    answer: 'Sim. Nosso atendimento é online e trabalhamos com empresas e profissionais de todo o Brasil.'
  },
  {
    id: 'faq-5',
    question: 'Posso atualizar o site futuramente?',
    answer: 'Sim. A estrutura pode ser planejada para permitir expansão, novas páginas, integrações e funcionalidades conforme a empresa evolui.'
  },
  {
    id: 'faq-6',
    question: 'Vocês também fazem manutenção?',
    answer: 'Sim. Podemos oferecer suporte, manutenção e melhorias após a publicação do projeto de acordo com a necessidade de cada cliente.'
  }
];