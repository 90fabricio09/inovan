/* Fonte única do site: contatos, serviços, frota e FAQ.
   Conteúdo tirado do inovan.com.br (11/10/2026) e corrigido. Ficou de fora de propósito:
   - nota de avaliação ("4.8 (729 Reviews)" e "4.5 de 5" na mesma tela, sem fonte);
   - FAQ do site atual, que é de locadora SEM motorista (CNH, seguro, "filiais", quilometragem);
   - logos de "clientes" que não dá para confirmar.
   Itens marcados com CONFIRMAR precisam do aval da Inovan antes de ir ao ar. */

export const SITE = {
  nome: 'Inovan',
  url: 'https://inovan.com.br',
  desde: 2007,
}

export const ANOS = new Date().getFullYear() - SITE.desde

export const CONTATO = {
  whatsapp: '5511947815882',
  whatsappExibir: '(11) 94781-5882',
  telefone: '+551139032795',
  telefoneExibir: '(11) 3903-2795',
  email: 'inovan@inovan.com.br',
  endereco: 'Rua Manuel Soutelo, 200 – Pirituba',
  cidade: 'São Paulo – SP · CEP 05162-060',
  mapa: 'https://maps.app.goo.gl/5TFyminhNA75CosQA',
  // CONFIRMAR: o site atual diz "Domingo à Segunda das 8:00h às 22:00h".
  horario: 'Todos os dias, das 8h às 22h',
  horarioObs: 'Feriados com horário diferenciado',
  instagram: 'https://instagram.com/inovantransportes',
  facebook: 'https://facebook.com/inovantransportes',
}

/* O link precisa do 55 do Brasil. No site atual o do rodapé está sem ele
   (wa.me/11947815882) e não abre a conversa certa. */
export const wa = (texto = 'Olá! Vim pelo site da Inovan e quero um orçamento.') =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`

/* Uma URL por serviço — os mesmos endereços do site atual, para não perder o que o Google
   já indexou e para cada anúncio cair na página do que foi pesquisado. */
export const SERVICOS = [
  {
    slug: 'transporte-corporativo',
    titulo: 'Transporte corporativo',
    curto: 'Vans executivas para equipes, reuniões em movimento e deslocamentos de executivos.',
    imagem: '/img/van-hotel-2.webp',
    icone: 'briefcase',
    seo: 'Locação de vans com motorista para transporte corporativo em São Paulo: equipes, executivos e reuniões em movimento, com Wi-Fi a bordo e ar-condicionado.',
    texto: [
      'Frota de vans modernas pensada para o mundo dos negócios: reuniões em movimento, transporte de funcionários e deslocamentos executivos.',
      'Sua equipe segue produtiva no trajeto, com Wi-Fi a bordo, ar-condicionado e espaço confortável. Os motoristas são experientes e discretos, para deslocamentos pontuais e sem preocupação.',
    ],
    destaques: ['Wi-Fi a bordo', 'Ar-condicionado', 'Motoristas discretos e pontuais', 'Vans de 15 a 20 lugares'],
  },
  {
    slug: 'transfer-aeroporto-sp',
    titulo: 'Transfer para aeroporto',
    curto: 'Receptivo e traslado aeroporto – hotel – aeroporto em Guarulhos e Congonhas.',
    imagem: '/img/van-hotel.webp',
    imagemCelular: '/img/van-hotel-720.webp',
    icone: 'airplane',
    seo: 'Transfer e receptivo nos aeroportos de Guarulhos e Congonhas com van ou micro-ônibus com motorista. Traslado aeroporto – hotel – aeroporto em São Paulo.',
    texto: [
      'Aluguel de van e micro-ônibus com motorista para receptivos nos aeroportos de São Paulo e traslados aeroporto – hotel – aeroporto, para pessoa física ou transporte executivo.',
      'Atendemos todos os hotéis de São Paulo e os aeroportos de Guarulhos e Congonhas, com motoristas treinados e opção de atendimento bilíngue. Na reserva, informe o horário do voo e a quantidade de bagagem: assim o horário de saída já considera o tempo até o embarque.',
    ],
    destaques: ['Guarulhos e Congonhas', 'Motorista bilíngue sob consulta', 'Atende todos os hotéis de SP', 'Horário calculado pelo voo'],
  },
  {
    slug: 'city-tour-sao-paulo',
    titulo: 'City tour em São Paulo',
    curto: 'Passeio pelos principais pontos da cidade com motoristas que conhecem São Paulo.',
    imagem: '/img/onibus-2.webp',
    icone: 'compass',
    seo: 'City tour em São Paulo para grupos, de van, micro-ônibus ou ônibus com motorista que conhece a cidade. Atendimento bilíngue sob consulta.',
    texto: [
      'Conhecer São Paulo com o seu grupo em vans, micro-ônibus ou ônibus é mais confortável — e pode sair mais em conta do que cada um ir por conta própria.',
      'Os veículos são revisados e equipados, e o passeio é conduzido por motoristas que conhecem a cidade e selecionam os principais pontos. Se o grupo precisar, há motoristas com atendimento bilíngue.',
    ],
    destaques: ['Vans, micro-ônibus e ônibus', 'Motoristas que conhecem a cidade', 'Atendimento bilíngue sob consulta', 'Roteiro do seu grupo'],
  },
  {
    slug: 'van-eventos-congressos-feiras',
    titulo: 'Eventos, congressos e feiras',
    curto: 'Vans executivas e micro-ônibus para feiras, congressos e eventos corporativos.',
    imagem: '/img/micro-entrada.webp',
    imagemCelular: '/img/micro-entrada-720.webp',
    icone: 'calendar-event',
    seo: 'Aluguel de vans e micro-ônibus com motorista para feiras, congressos e eventos corporativos em São Paulo. Vans executivas com vidros escurecidos e ar-condicionado.',
    texto: [
      'Transporte de alto padrão para os principais eventos de São Paulo, com vans executivas de vidros escurecidos e micro-ônibus, garantindo privacidade ao grupo.',
      'As vans têm ar-condicionado e bancos individuais reclináveis. Os motoristas são experientes e cordiais, treinados para tornar o dia do evento o mais cômodo possível.',
    ],
    destaques: ['Vans executivas', 'Vidros escurecidos', 'Bancos individuais reclináveis', 'Micro-ônibus para grupos maiores'],
  },
  {
    slug: 'transfer-porto-de-santos',
    titulo: 'Transfer Porto de Santos',
    curto: 'Embarque e desembarque no terminal marítimo, sem pedágio nem estacionamento para resolver.',
    imagem: '/img/van-estrada.webp',
    imagemCelular: '/img/van-estrada-720.webp',
    icone: 'water',
    seo: 'Transfer de São Paulo para o Porto de Santos com van, micro-ônibus ou ônibus com motorista. Embarque e desembarque dentro do terminal marítimo.',
    texto: [
      'Embarque e desembarque no Porto de Santos sem estresse: sem preocupação com pedágio, estacionamento ou logística.',
      'Você desembarca dentro do terminal marítimo, perto das salas de embarque. Vans, micro-ônibus e ônibus para grupos de todos os tamanhos.',
    ],
    destaques: ['Desembarque dentro do terminal', 'Sem pedágio nem estacionamento', 'Grupos de todos os tamanhos', 'Ida, volta ou as duas'],
  },
  {
    slug: 'viagens-excursoes-onibus-microonibus',
    titulo: 'Viagens e excursões',
    curto: 'Micro-ônibus e ônibus para viagens curtas ou de vários dias.',
    imagem: '/img/onibus-traseira.webp',
    imagemCelular: '/img/onibus-traseira-720.webp',
    icone: 'signpost-split',
    seo: 'Locação de micro-ônibus e ônibus com motorista para viagens e excursões saindo de São Paulo, curtas ou de vários dias.',
    texto: [
      'Locação de micro-ônibus e ônibus para viagens e excursões com amigos, família ou colegas, com conforto e segurança do começo ao fim.',
      'A frota tem opções para grupos pequenos ou grandes, para uma viagem curta ou uma excursão de vários dias.',
    ],
    destaques: ['Micro-ônibus até 30 lugares', 'Ônibus executivo de 46 lugares', 'Viagens curtas ou de vários dias', 'Motorista profissional'],
  },
]

/* Ficha técnica: só o que é coerente no site atual. Ficou de fora, por exemplo, o motor de
   "3.600 CVs" do micro-ônibus e a menção a "Sprinter" na página da Renault Master. */
export const FROTA = [
  {
    slug: 'van-de-15-lugares',
    nome: 'Van 15 lugares',
    lugares: 15,
    modelo: 'Renault Master Executiva',
    ano: '2024',
    imagens: ['/img/van15.webp', '/img/van15-interior.webp'],
    itens: ['Poltronas', 'Ar-condicionado', 'Espaço para bagagem', 'Motorista profissional'],
    texto: 'Espaçosa e versátil para grupos menores: poltronas confortáveis, bom espaço para bagagem e ar-condicionado. Boa para traslados, passeios e eventos corporativos.',
  },
  {
    slug: 'van-de-18-lugares',
    nome: 'Van 18 lugares',
    lugares: 18,
    modelo: 'Mercedes-Benz Sprinter 416 Longa',
    ano: '2024',
    imagens: ['/img/van18.webp', '/img/van18-lateral.webp'],
    itens: ['Poltronas', 'Ar-condicionado', 'Portas deslizantes', 'Motorista profissional'],
    texto: 'Robusta e confortável para grupos maiores, com portas deslizantes para embarque fácil e poltronas confortáveis em todo o salão.',
  },
  {
    slug: 'van-de-20-lugares',
    nome: 'Van 20 lugares',
    lugares: 20,
    modelo: 'Mercedes-Benz Sprinter 416 Longa',
    ano: '2024',
    imagens: ['/img/van-hotel-2.webp', '/img/van-estrada.webp'],
    itens: ['Poltronas reclináveis', 'Ar-condicionado', 'Espaço para bagagem', 'Motorista profissional'],
    texto: 'Para grupos médios em viagens corporativas, eventos e passeios: poltronas reclináveis, ar-condicionado e espaço para bagagem. O custo dividido entre os passageiros costuma compensar.',
  },
  {
    slug: 'micro-onibus',
    nome: 'Micro-ônibus',
    lugares: 30,
    modelo: 'Marcopolo Volare',
    ano: '2020',
    imagens: ['/img/micro-lateral.webp', '/img/micro-interior.webp'],
    itens: ['30 poltronas reclináveis', 'Ar-condicionado', 'Acessórios de fábrica', 'Motorista profissional'],
    texto: 'Versátil para grupos de até 30 pessoas em viagens curtas ou longas, com poltronas reclináveis e embarque simples.',
  },
  {
    slug: 'onibus',
    nome: 'Ônibus',
    lugares: 46,
    modelo: 'Marcopolo G7',
    ano: '2020',
    imagens: ['/img/onibus-2.webp', '/img/onibus-traseira.webp'],
    itens: ['46 poltronas executivas', 'Wi-Fi', 'TV', 'Ar-condicionado'],
    texto: 'Para grandes grupos: poltronas executivas, Wi-Fi, TV e ar-condicionado, com espaço para a bagagem de todos.',
  },
]

/* Calculadora: o menor veículo que comporta o grupo. */
export function veiculoPara(pessoas) {
  return FROTA.find((v) => v.lugares >= pessoas) || null
}

export const DIFERENCIAIS = [
  { icone: 'shield-check', titulo: 'Frota própria e revisada', texto: 'Veículos novos, revisados e seguros, de vans a ônibus executivos.' },
  { icone: 'person-badge', titulo: 'Motoristas uniformizados', texto: 'Profissionais capacitados, com pontualidade, cortesia e discrição.' },
  { icone: 'translate', titulo: 'Atendimento bilíngue', texto: 'Motoristas que se comunicam com fluência, sob consulta.' },
  { icone: 'credit-card', titulo: 'Cartão de crédito', texto: 'Aceitamos cartões de crédito no pagamento.' },
]

/* FAQ reescrita só com o que o próprio site afirma. A do site atual fala de CNH, seguro do
   cliente e "motorista mediante taxa" — o contrário do serviço. CONFIRMAR com a Inovan. */
export const FAQ = [
  { p: 'Os veículos vêm com motorista?', r: 'Sim. Toda locação da Inovan é com motorista profissional, uniformizado e capacitado — você não precisa dirigir nem ter habilitação.' },
  { p: 'Quantas pessoas cabem em cada veículo?', r: 'Vans de 15, 18 e 20 lugares, micro-ônibus de até 30 e ônibus executivo de 46. Para grupos maiores, combinamos mais de um veículo.' },
  { p: 'Vocês atendem os aeroportos?', r: 'Sim. Fazemos receptivo e transfer em Guarulhos e Congonhas e traslados aeroporto – hotel – aeroporto. Informe o horário do voo e a quantidade de bagagem na reserva.' },
  { p: 'Fazem transfer para o Porto de Santos?', r: 'Sim. O desembarque é dentro do terminal marítimo, perto das salas de embarque, sem preocupação com pedágio ou estacionamento.' },
  { p: 'Têm motorista que fala outro idioma?', r: 'Sim, há motoristas com atendimento bilíngue. Peça no momento do orçamento.' },
  { p: 'O que preciso informar para o orçamento?', r: 'Datas e horários de ida e volta, endereços de saída, paradas e destino, número de passageiros, se há malas, se precisa de nota fiscal e se o motorista aguarda ou leva e depois busca.' },
  { p: 'Quais formas de pagamento vocês aceitam?', r: 'Aceitamos cartões de crédito. Consulte as demais opções no orçamento.' },
  { p: 'Qual é o horário de atendimento?', r: 'Todos os dias, das 8h às 22h. Em feriados o horário é diferenciado.' },
]

export const REGIOES = ['Zona Norte', 'Zona Sul', 'Zona Leste', 'Zona Oeste', 'Centro', 'Aeroporto de Guarulhos', 'Aeroporto de Congonhas', 'Porto de Santos']
