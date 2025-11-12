import type { ContactInfo, Differentiator, Doctor, NavItem, Service, Testimonial } from '~/types'

export const getContactInfo = (): ContactInfo => {
  const config = useRuntimeConfig()
  return {
    phone: config.public.contactPhone as string,
    whatsapp: config.public.contactWhatsapp as string,
    location: 'Atendemos a região de Florianópolis, Palhoça e São José'
  }
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Início', href: '#hero' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'servicos', label: 'Serviços', href: '#servicos' },
  { id: 'diferenciais', label: 'Diferenciais', href: '#diferenciais' },
  { id: 'doutoras', label: 'Doutoras', href: '#doutoras' },
  { id: 'depoimentos', label: 'Depoimentos', href: '#depoimentos' },
  { id: 'contato', label: 'Contato', href: '#contato' }
]

export const SERVICES: Service[] = [
  {
    icon: 'mdi:stethoscope',
    title: 'Consultas',
    description: 'Atendimento veterinário completo no conforto da sua casa, com avaliação clínica detalhada e tempo dedicado ao seu gato'
  },
  {
    icon: 'mdi:needle',
    title: 'Vacinação',
    description: 'Protocolo completo de imunização aplicado em casa, sem estresse de deslocamento'
  },
  {
    icon: 'mdi:test-tube',
    title: 'Teste FIV e FeLV',
    description: 'Diagnóstico rápido e seguro das principais viroses felinas'
  },
  {
    icon: 'mdi:flask',
    title: 'Exames Completos',
    description: 'Coleta de exames laboratoriais no domicílio para diagnósticos precisos'
  },
  {
    icon: 'mdi:ultrasound',
    title: 'Ultrassom',
    description: 'Exames de imagem realizados em casa com equipamentos modernos'
  },
  {
    icon: 'mdi:heart-pulse',
    title: 'Cardiologia',
    description: 'Avaliação cardiológica especializada (serviço terceirizado oferecido pela Gatópolis)'
  },
  {
    icon: 'mdi:tooth',
    title: 'Odontologia',
    description: 'Tratamento odontológico especializado (serviço terceirizado oferecido pela Gatópolis)'
  },
  {
    icon: 'mdi:chip',
    title: 'Microchipagem',
    description: 'Identificação permanente e segura do seu felino'
  },
  {
    icon: 'mdi:certificate',
    title: 'Atestados Nacionais e Internacionais',
    description: 'Documentação completa para viagens com seu gato'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Sorologia para Raiva',
    description: 'Exame necessário para viagens internacionais'
  }
]

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: 'mdi:cat',
    title: 'Especialização em Felinos',
    description: 'Toda nossa equipe é especializada exclusivamente no cuidado com gatos, entendendo suas particularidades'
  },
  {
    icon: 'mdi:paw',
    title: 'Manejo Amigo do Gato',
    description: 'Consultas conduzidas com calma, respeito e técnicas que reduzem o estresse, garantindo uma experiência tranquila e segura para o gato'
  },
  {
    icon: 'mdi:account-heart',
    title: 'Atendimento Personalizado',
    description: 'Cada gato é único. Por isso, cada atendimento é adaptado à avaliação que ele precisa, oferecendo uma medicina individualizada de acordo com a idade'
  },
  {
    icon: 'mdi:clock-time-four',
    title: 'Horários Flexíveis',
    description: 'Segunda a sábado, somente com hora marcada'
  }
]

export const DOCTORS: Doctor[] = [
  {
    name: 'Dra. Carol',
    title: 'Médica Veterinária',
    image: '/images/dra-carol.jpg',
    bio: 'Formada pela Universidade UNIRP (SP) e pós-graduada em Medicina Felina pelo Instituto Qualitas. Com mais de três anos dedicados exclusivamente aos felinos, une atendimento individualizado e baseado em evidências científicas. Apaixonada por gatos desde a infância e mãe de seis felinos, incluindo gatinhos com necessidades especiais, oferece um cuidado que respeita as particularidades físicas e emocionais de cada gato.',
    specializations: [
      'CRMV-SC 12.228',
      'Pós-graduada em Medicina Felina',
      'Atendimento Individualizado'
    ]
  },
  {
    name: 'Dra. Luiza',
    title: 'Médica Veterinária',
    image: '/images/dra-luiza.jpg',
    bio: 'Formada pela Faculdade ATITUS de Passo Fundo/RS e pós-graduada em Clínica Médica de Felinos pelo Instituto Qualittas. Dedicada exclusivamente à medicina felina desde a graduação, atua com foco em atendimento calmo, empático e respeitoso. Com experiência em terapias integrativas, acredita que compreender as particularidades de cada gato é essencial para oferecer um cuidado completo e acolhedor.',
    specializations: [
      'CRMV-SC 13.510',
      'Pós-graduada em Clínica Médica de Felinos',
      'Terapias Integrativas'
    ]
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: 'Anne Luisa',
    catName: '',
    quote: 'Atendimento da Vet. Carol foi impecável, o cuidado, respeito e atenção a detalhes faz toda a diferença… sem contar que estar em seu próprio ambiente é muito menos estressante para os gatinhos. Amamos e recomendamos muito!'
  },
  {
    clientName: 'Jessica Mendes',
    catName: '',
    quote: 'Fazia muito tempo que eu não encontrava veterinário tão atencioso e que realiza de fato uma consulta no pet. Era nítido o profissionalismo e cuidado em atender bem, de ver se estava tudo bem com os nossos pets, que são muito importante pra nós. Fiquei admirada! Parabéns Dra. Luiza.'
  },
  {
    clientName: 'Sonia Brandalise',
    catName: '',
    quote: 'Nossa experiência foi excelente. Dra Carol super segura e nos deu tranquilidade para um momento tão delicado. Super recomendo!'
  },
  {
    clientName: 'Gildo Santos',
    catName: 'Jack',
    quote: 'Dra. Luiza super atenciosa, dedicada, Jack adorou. É nítido que faz por amor, a parte financeira é consequência, parabéns pela dedicação, recomendo demais, continue esse trabalho muito bacana!!'
  },
  {
    clientName: 'Giovanna Lemos Lopes',
    catName: '',
    quote: 'O atendimento da Dra.Carol foi muito completo, nos ouviu e examinou nosso pretinho com muito amor, inclusive explicando detalhadamente o tratamento que poderíamos seguir. Ficamos muito satisfeitos e recomendaremos o serviço'
  },
  {
    clientName: 'Su Souza',
    catName: 'Nina',
    quote: 'Dra. Muito atenciosa. Atendeu nossa Nina com bastante acolhimento. Nina esta melhorando conforme as orientações da dra.'
  }
]
