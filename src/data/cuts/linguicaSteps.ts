import { StepItem } from '../../types';

export const LINGUICA_STEPS: StepItem[] = [
  {
    id: 'linguica-intro',
    stepNumber: null,
    sectionTitle: 'Linguiça Toscana & Cuiabana',
    title: 'A Entrada Obrigatória de Todo Churrasco',
    subtitle: 'Suculência interna e pele estaladiça sem furar a tripa',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A linguiça artesanal abre o apetite dos convidados com suculência farta e pele crocante.',
    paragraphs: [
      'A Linguiça é a recepcionista oficial de qualquer churrasco brasileiro. Seja a tradicional Toscana de pernil suíno, a Campeira rústica ou a icônica Cuiabana (recheada com carne nobre, queijo coalho e cheiro-verde), seu papel é servir o primeiro petisco quente aos convidados.',
      'A LEI SUPREMA da linguiça de churrasco: NUNCA fure a tripa com garfos ou facas! A tripa natural funciona como uma câmara de pressão que cozinha a carne nos próprios vapores e sucos. Furar a linguiça drena a gordura para a brasa, gerando labaredas e deixando o interior seco e esfarelado.'
    ],
    bullets: [
      'Proporção: 150g a 200g por pessoa (cerca de 2 gomos médios como entrada).',
      'Altura da Grelha: 30 cm a 35 cm da brasa (calor médio constante).',
      'Tempo de Grelha: 25 a 35 minutos com viradas a cada 7 minutos.',
      'Ponto Seguro: 75°C de temperatura interna (cozimento completo).'
    ],
    keyRule: 'Dica do Mestre: Nunca fure a linguiça! O vapor retido dentro da tripa mantém a carne tenra, macia e incrivelmente suculenta.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'linguica-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Seleção: Toscana vs Cuiabana vs Campeira',
    subtitle: 'Tripa natural de porco, proporção de 20-30% de gordura e frescor',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Gomos uniformes em tripa natural com pedaços visíveis de carne de pernil e temperos frescos.',
    paragraphs: [
      'Dê sempre preferência a linguiças artesanais envoltas em tripa natural (suína ou de carneiro). Tripas artificiais de celulose ressecam e ficam borrachudas na brasa.',
      'A massa da linguiça deve ter pedaços nítidos de carne de pernil ou paleta moídos grossos, com cerca de 20% a 25% de toucinho para garantir umidade.'
    ],
    bullets: [
      'Tripa Natural: Pele fina, flexível e transparente.',
      'Moagem Grossa: Pedaços de carne nítidos (evite pastas homogeneizadas tipo salsicha).',
      'Linguiça Toscana: Feita exclusivamente de pernil suíno, alho, pimenta e especiarias.',
      'Linguiça Cuiabana: Carne bovina/suína com cubos de queijo coalho e leite.'
    ],
    keyRule: 'Confira a galeria visual para aprender a escolher as melhores linguiças para a brasa.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'linguica-tripa-natural',
        title: 'Tripa Natural & Textura',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
        description: 'Tripa natural amarrada artesanalmente com barbante ou torcida, sem rasgos.',
        whatToLookFor: ['Tripa natural fina e brilhante', 'Moagem grossa de carne nobre'],
        whatToAvoid: ['Tripa sintética de celulose rígida', 'Massa ultra-fina industrializada']
      },
      {
        id: 'linguica-cuiabana-queijo',
        title: 'Linguiça Cuiabana (Queijo Coalho)',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Corte tradicional do Centro-Oeste com queijo coalho que derrete suavemente.',
        whatToLookFor: ['Cubos visíveis de queijo coalho', 'Cheiro-verde fresco na massa'],
        whatToAvoid: ['Gomos rompidos com queijo vazando antes do fogo']
      },
      {
        id: 'linguica-frescor',
        title: 'Frescor & Coloração',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Cor rosada natural da carne suína fresca, sem aditivos químicos excessivos.',
        whatToLookFor: ['Tom rosado natural', 'Aroma fresco de ervas e especiarias'],
        whatToAvoid: ['Cor avermelhada artificial berrante (excesso de corante)', 'Odor azedo']
      }
    ]
  },
  {
    id: 'linguica-fogo',
    stepNumber: 1,
    sectionTitle: '2. O Braseiro Médio a 30 cm',
    title: 'Calor Médio Controlado (4 a 5 segundos)',
    subtitle: 'Evitar fogo forte para não queimar a pele antes de cozinhar o centro',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Grelha posicionada a 30 cm da brasa incandescente sem chamas vivas.',
    paragraphs: [
      'A linguiça necessita de calor médio constante. Se colocada em fogo muito forte (15 cm), a pele queima e rompe nos primeiros minutos enquanto o interior permanece cru.',
      'Posicione a grelha a 30 cm da brasa viva. No teste da mão, você deve suportar a temperatura por 4 a 5 segundos.'
    ],
    bullets: [
      'Altura da grelha: 30 cm a 35 cm acima da brasa.',
      'Teste da mão: 4 a 5 segundos confortáveis.',
      'Sem chamas: se a gordura pingar e levantar labareda, mova a linguiça para o lado.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'linguica-grelha-tempo',
    stepNumber: 2,
    sectionTitle: '3. A Cocção Paciente',
    title: '25 a 35 Minutos Virando a Cada 7 Minutos',
    subtitle: 'Douramento uniforme em todos os 4 lados do gomo',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Vire os gomos com pegador de pinça para dourar a pele sem perfurar a tripa.',
    paragraphs: [
      'Disponha os gomos inteiros na grelha a 30 cm. Asse com paciência, virando a cada 7 a 8 minutos para que todos os lados fiquem dourados por igual.',
      'Conforme o calor penetra, você verá a tripa estufar e ficar estaladiça. O tempo total varia entre 25 e 35 minutos dependendo da espessura do gomo.'
    ],
    bullets: [
      'Tempo total: 25 a 35 minutos.',
      'Viradas: gire 1/4 de volta a cada 7 a 8 minutos.',
      'Use pegador de pinça (nunca garfo de churrasco perfurante).'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'linguica-ponto',
    stepNumber: 3,
    sectionTitle: '4. O Ponto Seguro & Suculência',
    title: 'Temperatura Interna: 75°C no Centro',
    subtitle: 'Carne suína totalmente cozida com sucos transparentes',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A linguiça deve estar totalmente cozida por dentro, sem tonalidade rosada de carne crua.',
    paragraphs: [
      'Por conter carne suína e aves (em algumas versões), a linguiça deve atingir a temperatura interna segura de pelo menos 75°C.',
      'A tripa deve estar bem dourada, crocante e estalando ao toque leve do pegador. Ao partir um gomo de teste, os sucos internos devem ser abundantes e límpidos (não avermelhados).'
    ],
    bullets: [
      'Temperatura segura: 74°C a 76°C no centro.',
      'Aspecto da pele: esticada, dourada e crocante.',
      'Interior: cozido por completo, brilhante e saturado de umidade.'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'linguica-descanso',
    stepNumber: 4,
    sectionTitle: '5. O Descanso Rápido',
    title: '3 Minutos de Repouso na Tábua',
    subtitle: 'Evitar que o caldo fervente espirre no corte',
    category: 'descanso',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Aguarde 3 minutos para que a pressão interna baixe antes da primeira incisão da faca.',
    paragraphs: [
      'Dentro do gomo quente, o vapor e a gordura líquida estão sob alta pressão. Cortar a linguiça no exato instante em que sai do fogo fará o caldo espirrar e escorrer pela tábua.',
      'Aguarde 2 a 3 minutos sobre a tábua. A pressão interna diminui e a gordura se estabiliza dentro da massa da carne.'
    ],
    bullets: [
      'Tempo de descanso: 2 a 3 minutos.',
      'Mantém toda a suculência concentrada em cada fatia.',
      'Segurança contra respingos quentes.'
    ],
    interactiveType: 'resting_timer'
  },
  {
    id: 'linguica-corte',
    stepNumber: 5,
    sectionTitle: '6. O Fatiamento em Rodelas',
    title: 'Corte em Rodelas Diagonais de 1,5 cm',
    subtitle: 'Lâmina afiada sem esmagar o gomo',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie em rodelas diagonais de 1,5 cm para servir em porções individuais de petisco.',
    paragraphs: [
      'Utilize uma faca de corte bem afiada. Fatie os gomos em rodelas ligeiramente diagonais de 1,5 cm de espessura.',
      'O corte limpo mantém a integridade da tripa crocante em volta de cada rodela, preservando a apresentação dos pratos.'
    ],
    bullets: [
      'Espessura: rodelas de 1,5 cm.',
      'Corte diagonal elegante para aperitivo.',
      'Distribua na tábua ao lado do pão de alho.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'linguica-servir',
    stepNumber: 6,
    sectionTitle: '7. Mesa de Abertura & Guarnições',
    title: 'Pão de Alho, Vinagrete Clássico & Farofa Crocante',
    subtitle: 'O clássico trio de abertura do churrasco brasileiro',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva a linguiça fatiada ao lado de pão de alho bem dourado e vinagrete refrescante.',
    paragraphs: [
      'A linguiça deve ser servida bem quente como primeira rodada do churrasco enquanto os cortes nobres (picanha, costela, ancho) estão na brasa.',
      'Harmonize com pão de alho bem crocante, vinagrete tradicional de tomate e cebola com gotas de limão, e farofa de mandioca temperada.'
    ],
    bullets: [
      'Pão de alho tostado na brasa com queijo derretido.',
      'Vinagrete fresco ácido para equilibrar a gordura suína.',
      'Farofa crocante de mandioca.',
      'Cerveja pilsen bem gelada.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'linguica-manifesto',
    stepNumber: null,
    sectionTitle: '8. O Manifesto da Linguiça Perfeita',
    title: 'As 3 Leis Inegociáveis da Linguiça',
    subtitle: 'O padrão de ouro para abrir seu evento com maestria',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Tripa intacta, fogo médio a 30 cm e descanso prévio ao fatiamento.',
    paragraphs: [
      'A linguiça parece simples, mas exige técnica apurada de braseiro. Respeitando a integridade da pele e o tempo correto, seus convidados serão recebidos com a melhor entrada possível.'
    ],
    bullets: [
      'Lei 1: NUNCA fure a tripa — a pele é o escudo que retém todo o sabor.',
      'Lei 2: Asse a 30 cm em calor médio — fogo forte queima a pele e deixa o meio cru.',
      'Lei 3: Espere 3 minutos de descanso antes de fatiar para não espirrar o caldo.'
    ],
    interactiveType: 'golden_rules'
  }
];
