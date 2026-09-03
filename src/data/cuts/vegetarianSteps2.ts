import { StepItem } from '../../types';

// 8. PALMITO PUPUNHA ASSADO NA CASCA
export const PALMITO_PUPUNHA_STEPS: StepItem[] = [
  {
    id: 'pupunha-intro',
    stepNumber: null,
    sectionTitle: 'Palmito Pupunha in Natura na Brasa',
    title: 'O Ouro da Mata Atlântica na Churrasqueira',
    subtitle: 'Tolete assado na própria casca com manteiga de garrafa e flor de sal',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca protetora cozinha o miolo em vapor próprio, revelando lâminas doces e aveludadas.',
    paragraphs: [
      'O palmito pupunha assado na casca é uma das maiores iguarias do churrasco brasileiro de alta gastronomia. Ao contrário do palmito em conserva, o pupunha fresco assado na brasa tem textura aveludada, sabor naturalmente adocicado e aroma levemente amendoado.',
      'A casca grossa externa serve como uma "panela de pressão natural" na grelha, cozinhando o coração do palmito no seu próprio vapor sem perder suculência.'
    ],
    bullets: [
      'Proporção: 1 tolete (metade longitudinal) serve 2 pessoas (~250g).',
      'Altura da Grelha: 35 a 40 cm (Calor Médio-Brando).',
      'Tempo de Brasa: 35 a 45 minutos até amaciar.',
      'Finalização: Manteiga de garrafa ou azeite de trufas e ervas.'
    ],
    keyRule: 'Dica do Assador: Asse com a casca voltada para o fogo durante quase todo o tempo para proteger a carne delicada do palmito.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'pupunha-preparo',
    stepNumber: 1,
    sectionTitle: '1. Corte & Preparo do Tolete',
    title: 'Corte Longitudinal ao Meio',
    subtitle: 'Mantenha a casca e faça incisões no miolo',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Corte o tolete no sentido do comprimento e faça cortes quadriculados rasos no miolo.',
    paragraphs: [
      'Com uma faca pesada de churrasco, corte o tolete in natura de pupunha ao meio no sentido do comprimento.',
      'Faça cortes superficiais em formato de losango/xadrez na polpa branca, sem perfurar a casca. Pincele azeite de oliva e salpique sal grosso médio.'
    ],
    bullets: [
      'Tolete in natura fresco com casca inteira.',
      'Corte longitudinal ao meio.',
      'Cortes em xadrez na polpa para receber o tempero.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'pupunha-fresco',
        title: 'Pupunha Fresco in Natura',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
        description: 'Tolete cilíndrico firme com extremidades limpas e úmidas.',
        whatToLookFor: ['Casca firme e sem rachaduras secas', 'Miolo branco e fresco'],
        whatToAvoid: ['Palmitos com cheiro azedo ou extremidades escuras/oxidadas']
      }
    ]
  },
  {
    id: 'pupunha-brasa',
    stepNumber: 2,
    sectionTitle: '2. Cocção Lenta na Grelha',
    title: 'Casca para Baixo a 35 cm da Brasa',
    subtitle: '30 min com a casca para o fogo, 5 min para dourar o miolo',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca queima por fora enquanto o miolo cozinha e borbulha em sua própria seiva.',
    paragraphs: [
      'Coloque as metades de palmito com a casca virada para baixo sobre a grelha média a 35 cm do braseiro.',
      'Cubra frouxamente com uma folha de papel alumínio para concentrar o calor. Asse por 30 a 35 minutos até que a ponta da faca entre suavemente como manteiga.',
      'Retire o papel alumínio, vire a face do palmito para a brasa por 3 a 5 minutos apenas para criar marcas douradas.'
    ],
    bullets: [
      'Casca para baixo: 30 a 35 minutos em calor brando.',
      'Face para baixo: 3 a 5 minutos para dourar.',
      'Ponto: Macio e desfiando com o garfo.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'pupunha-servir',
    stepNumber: 3,
    sectionTitle: '3. Finalização & Serviço',
    title: 'Manteiga de Garrafa, Ervas & Flor de Sal',
    subtitle: 'Coma direto da casca com uma colher',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Regue manteiga derretida fervente sobre o palmito fumegante na própria casca rústica.',
    paragraphs: [
      'Retire da grelha e acomode os toletes na tábua. Regue generosamente com manteiga de garrafa aquecida com ervas frescas picadas.',
      'Finalize com flor de sal e pimenta rosa. Cada pessoa pode puxar os fios de palmito com um garfo ou colher diretamente da casca.'
    ],
    bullets: [
      'Manteiga de garrafa ou manteiga de ervas derretida.',
      'Flor de sal e raspas de limão siciliano.',
      'Apresentação rústica e sofisticada na própria casca.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 9. BERINJELA DEFUMADA NA BRASA
export const BERINJELA_STEPS: StepItem[] = [
  {
    id: 'berinjela-intro',
    stepNumber: null,
    sectionTitle: 'Berinjela Defumada na Brasa',
    title: 'Aroma Intenso de Defumação & Polpa Cremosa',
    subtitle: 'Assada inteira na brasa direta ou em fatias com azeite e alho',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca queima por completo na brasa, transferindo um sabor defumado espetacular à polpa.',
    paragraphs: [
      'A berinjela na brasa é uma das técnicas mais veneradas da cozinha de fogo. Quando colocada inteira diretamente sobre as brasas, a casca carboniza enquanto a polpa interna cozinha no vapor, desenvolvendo um aroma defumado inigualável.',
      'Também pode ser feita em fatias grossas marcadas na grelha com azeite, alho e queijo de cabra ou parmesão.'
    ],
    bullets: [
      'Proporção: 1 berinjela média para 2 pessoas (~200g).',
      'Método Inteira no Rescaldo: 20 a 25 minutos girando.',
      'Método em Fatias na Grelha: 6 a 8 minutos com azeite.',
      'Usos: Antepasto defumado com pão de alho ou fatias grelhadas.'
    ],
    keyRule: 'Dica de Ouro: Fure a casca da berinjela inteira com um garfo antes de colocar no fogo para o vapor não estourar a casca repentinamente.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'berinjela-preparo',
    stepNumber: 1,
    sectionTitle: '1. Furos & Preparo da Brasa',
    title: 'Furos com Garfo e Fogo Direto',
    subtitle: 'Segurança e penetração de fumaça',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Fure a casca da berinjela em 6 a 8 pontos com um garfo e coloque direto na brasa.',
    paragraphs: [
      'Lave e seque as berinjelas inteiras mantendo o cabinho verde.',
      'Faça de 6 a 8 furos na casca com um garfo para liberar a pressão interna durante a cocção. Pincele uma camada fina de azeite.'
    ],
    bullets: [
      'Furos com garfo em todos os lados.',
      'Casca íntegra com cabinho para manusear.',
      'Se for fatiar: corte discos ou lâminas de 1,5 cm de espessura.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'berinjela-fresca',
        title: 'Berinjela Roxo Escuro Brilhante',
        image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
        description: 'Casca lisa, roxo profundo e espelhada, sem rugas.',
        whatToLookFor: ['Firmeza ao apertar levemente', 'Cabinho verde fresco'],
        whatToAvoid: ['Berinjelas com casca opaca, manchas marrons ou moles demais']
      }
    ]
  },
  {
    id: 'berinjela-brasa',
    stepNumber: 2,
    sectionTitle: '2. Tostagem & Queima da Casca',
    title: 'Direto no Carvão ou Grelha Baixa',
    subtitle: 'Gire a cada 5 minutos até a casca ficar toda preta',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A berinjela murcha e a casca fica quebradiça como carvão, indicando que a polpa virou um creme.',
    paragraphs: [
      'Coloque a berinjela diretamente sobre as brasas incandescentes ou na grelha mais baixa a 15 cm.',
      'Gire a berinjela a cada 4 a 5 minutos até que todos os lados estejam completamente pretos e queimados e ela murche ao toque da pinça (cerca de 20 minutos no total).'
    ],
    bullets: [
      'Girar a cada 4 a 5 minutos.',
      'Tempo total de 18 a 22 minutos.',
      'A berinjela deve colapsar e ficar totalmente macia.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'berinjela-servir',
    stepNumber: 3,
    sectionTitle: '3. Abertura & Antepasto Defumado',
    title: 'Azeite Extravirgem, Alho, Tahine ou Limão',
    subtitle: 'O melhor antepasto do churrasco',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Abra ao meio, descarte a casca queimada e tempere a polpa fumegante na tábua.',
    paragraphs: [
      'Transfira para a tábua, corte ao meio no sentido do comprimento e retire a polpa cremosa com uma colher, descartando a casca carbonizada.',
      'Pique grosseiramente a polpa com a faca, adicione alho cru ralado, azeite de oliva extravirgem abundante, flor de sal, suco de limão e folhas de hortelã ou salsinha picadas.'
    ],
    bullets: [
      'Polpa sedosa com aroma de defumação autêntica.',
      'Azeite extravirgem generoso e alho fresco.',
      'Servir quente ou fria com torradas de pão de alho.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 10. PIMENTÃO RECHEADO COM QUEIJO NA GRELHA
export const PIMENTAO_RECHEADO_STEPS: StepItem[] = [
  {
    id: 'pimentao-intro',
    stepNumber: null,
    sectionTitle: 'Pimentões Recheados na Brasa',
    title: 'Pele Tostada & Queijo Borbulhante',
    subtitle: 'Pimentões vermelhos e amarelos recheados com queijos, ovo e ervas',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca do pimentão amolece e adoça na brasa enquanto o queijo do recheio derrete e gratina.',
    paragraphs: [
      'O pimentão recheado é uma das receitas mais coloridas e saborosas da parrilla. Pimentões vermelhos e amarelos (mais doces e digestivos que o verde) servem como "canoas" perfeitas na grelha.',
      'São recheados com uma mistura cremosa de queijo coalho, provolone ou muçarela, cebolinha fresca e, opcionalmente, um ovo cru no centro que cozinha lentamente no calor indireto da churrasqueira.'
    ],
    bullets: [
      'Proporção: 1 metade de pimentão recheado por pessoa.',
      'Tipos: Pimentão Vermelho ou Amarelo (doces e carnudos).',
      'Recheio: Queijo coalho ralado, muçarela, ovo caipira e orégano.',
      'Tempo de Brasa: 15 a 20 minutos em calor médio.'
    ],
    keyRule: 'Dica do Assador: Deixe o cabinho verde ao cortar o pimentão ao meio para evitar que o recheio de queijo escorra pelas bordas.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'pimentao-preparo',
    stepNumber: 1,
    sectionTitle: '1. O Corte em Canoa & Limpeza',
    title: 'Corte ao Meio Mantendo o Cabo',
    subtitle: 'Retirada das sementes e partes brancas',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Corte ao meio dividindo o cabo ao meio para selar a ponta da canoa.',
    paragraphs: [
      'Lave e seque os pimentões. Corte ao meio no sentido do comprimento, dividindo o cabinho verde em duas metades.',
      'Com uma colher pequena, retire as sementes e as membranas brancas internas com cuidado para não perfurar a casca externa.'
    ],
    bullets: [
      'Corte de ponta a ponta dividindo o cabinho.',
      'Remova todas as sementes sem furar a casca.',
      'Pincele azeite no fundo externo da casca.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'pimentao-selecao',
        title: 'Pimentões Grandes e Firmes',
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop',
        description: 'Casca lisa, brilhante, espessa e com boa cavidade para o recheio.',
        whatToLookFor: ['Paredes grossas e firmes', 'Cores vermelha e amarela uniformes'],
        whatToAvoid: ['Pimentões murchos, com furos ou paredes finas']
      }
    ]
  },
  {
    id: 'pimentao-recheio',
    stepNumber: 2,
    sectionTitle: '2. A Montagem do Recheio',
    title: 'Queijo Coalho, Gorgonzola & Ovo Caipira',
    subtitle: 'Camadas de queijos e temperos aromáticos',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Cubra o fundo com queijos ralados e quebre um ovo caipira no centro.',
    paragraphs: [
      'Coloque uma camada de queijo coalho ralado misturado com muçarela no fundo de cada canoa de pimentão.',
      'Abra um pequeno espaço no centro e quebre com cuidado 1 ovo inteiro cru (opcional, tradicional de parrilla). Salpique orégano, pimenta-do-reino e uma pitada de sal sobre a gema.'
    ],
    bullets: [
      'Base: Queijo coalho + muçarela ralada.',
      'Centro: 1 ovo caipira cru com gema inteira.',
      'Topo: Orégano, páprica defumada e fios de azeite.'
    ],
    keyRule: 'Não encha de queijo até a borda para não transbordar quando borbulhar.'
  },
  {
    id: 'pimentao-brasa',
    stepNumber: 3,
    sectionTitle: '3. Assamento na Grelha',
    title: 'Calor Médio a 30 cm da Brasa',
    subtitle: '15 a 20 minutos com a casca para baixo',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca do pimentão fica tostada enquanto o recheio cozinha por convecção térmica.',
    paragraphs: [
      'Posicione os pimentões recheados na grelha média a 30 cm do braseiro.',
      'Asse por 15 a 20 minutos sem virar. A casca do pimentão ficará tostada e murcha, o queijo derreterá borbulhando e a clara do ovo ficará firme com a gema cremosa e aveludada.'
    ],
    bullets: [
      'Nunca vire o pimentão recheado de ponta cabeça na grelha!',
      'Tempo total: 15 a 20 minutos.',
      'Ponto: Queijo completamente gratinado e pimentão macio.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'pimentao-servir',
    stepNumber: 4,
    sectionTitle: '4. Servir Fumegante',
    title: 'Cebolinha Verde & Flor de Sal',
    subtitle: 'Sirva diretamente no prato de cada convidado',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Ao cortar, a gema e o queijo derretido escorrem misturando-se com a polpa doce do pimentão.',
    paragraphs: [
      'Retire com uma espátula larga de churrasco para não entornar o recheio.',
      'Salpique cebolinha verde fresca picada e sirva acompanhado de torradas de pão de alho e saladas crocantes.'
    ],
    bullets: [
      'Servir imediatamente para aproveitar a cremosidade do queijo quente.',
      'Visual deslumbrante na mesa com as cores amarela e vermelha.',
      'Uma refeição vegetariana completa e rica em proteínas.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 11. ABACAXI COM CANELA NA GRELHA
export const ABACAXI_CANELA_STEPS: StepItem[] = [
  {
    id: 'abacaxi-intro',
    stepNumber: null,
    sectionTitle: 'Abacaxi Grelhado com Canela & Açúcar Mascavo',
    title: 'A Sobremesa Clássica dos Rodízios Brasileiros',
    subtitle: 'Caramelização perfeita na brasa com canela do ceilão',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'O calor da brasa concentra a frutose do abacaxi, quebrando a acidez e criando uma crosta caramelizada.',
    paragraphs: [
      'O abacaxi com canela na brasa é a sobremesa mais tradicional e consagrada das churrascarias brasileiras. O calor do carvão ativa as enzimas naturais (bromelina), reduz a acidez e carameliza os açúcares da fruta, tornando-a incrivelmente doce e aromática.',
      'Além de deliciosa, a bromelina do abacaxi facilita a digestão, sendo o fechamento perfeito para qualquer rodada de churrasco.'
    ],
    bullets: [
      'Proporção: 2 a 3 rodelas grossas por pessoa (ou 1 abacaxi para 4 a 6 pessoas).',
      'Variedade: Abacaxi Pérola (mais doce e com miolo macio) ou Havaí.',
      'Tempo de Grelha: 6 a 8 minutos virando até caramelizar a crosta de canela.'
    ],
    keyRule: 'Dica do Assador: Deixe o abacaxi assar até formar uma crosta crocante de açúcar mascavo e canela sem queimar.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'abacaxi-preparo',
    stepNumber: 1,
    sectionTitle: '1. Descasque & Corte',
    title: 'Rodelas Grossas ou Inteiro no Espeto',
    subtitle: 'Fatias de 2 cm mantendo a suculência',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Descasque retirando os olhos e fatie em rodelas de 2 dedos de espessura.',
    paragraphs: [
      'Descasque o abacaxi pérola maduro retirando todos os "olhos" escuros da casca.',
      'Método 1 (Rodelas): Corte em fatias transversais grossas de 2 cm a 2,5 cm (o miolo do abacaxi pérola é macio e pode ser mantido).',
      'Método 2 (Espeto Gaúcho): Mantenha o abacaxi inteiro cilíndrico, atravesse no espeto de espada e asse girando na churrasqueira.'
    ],
    bullets: [
      'Fatias grossas de 2 a 2,5 cm para não ressecar.',
      'Abacaxi bem maduro e aromático.',
      'Pode manter o miolo macio da variedade Pérola.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'abacaxi-maduro',
        title: 'Abacaxi Pérola Maduro',
        image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop',
        description: 'Casca amarelada, gomos espaçados e aroma doce na base.',
        whatToLookFor: ['Aroma doce ao cheirar o fundo', 'Folhas da coroa que soltam facilmente'],
        whatToAvoid: ['Abacaxis verdes e duros ou excessivamente fermentados']
      }
    ]
  },
  {
    id: 'abacaxi-tempero',
    stepNumber: 2,
    sectionTitle: '2. A Crosta de Açúcar & Canela',
    title: 'Açúcar Mascavo, Canela & Raspas de Limão',
    subtitle: 'Empanamento doce antes do fogo',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Passe as rodelas em uma mistura homogênea de açúcar mascavo e canela em pó.',
    paragraphs: [
      'Em um prato raso, misture 4 colheres de sopa de açúcar mascavo (ou cristal), 1 colher de sopa cheia de canela em pó e uma pitadinha de cravo em pó ou raspas de limão taiti.',
      'Passe ambos os lados de cada rodela de abacaxi na mistura, pressionando levemente para criar uma camada uniforme.'
    ],
    bullets: [
      'Proporção: 4 partes de açúcar para 1 de canela.',
      'Açúcar mascavo confere sabor caramelizado com notas de caramelo e toffee.',
      'Aplique logo antes de levar à brasa.'
    ],
    keyRule: 'O açúcar derreterá com o calor da brasa, formando uma calda borbulhante e dourada.'
  },
  {
    id: 'abacaxi-brasa',
    stepNumber: 3,
    sectionTitle: '3. A Caramelização na Brasa',
    title: 'Calor Médio a 25 cm da Brasa',
    subtitle: '3 a 4 minutos de cada lado até borbulhar',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Asse até formar listras de grelha caramelizadas e aroma doce tomar conta do ambiente.',
    paragraphs: [
      'Coloque as rodelas na grelha untada em calor médio (4 a 5 segundos de sustentação da mão).',
      'Deixe por cerca de 3 a 4 minutos até que o açúcar caramelize e crie marcas escuras. Vire com cuidado e asse o outro lado por mais 3 minutos.'
    ],
    bullets: [
      'Lado 1: 3 a 4 minutos.',
      'Lado 2: 3 minutos.',
      'Se fizer no espeto: vá casqueando as fatias douradas externas e repassando o açúcar e canela no miolo restante.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'abacaxi-servir',
    stepNumber: 4,
    sectionTitle: '4. Servir Quente com Sorvete',
    title: 'Sorvete de Creme, Folhas de Hortelã & Rum',
    subtitle: 'A combinação suprema de quente e frio',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Sirva a rodela fumegante com uma bola de sorvete de creme derretendo por cima.',
    paragraphs: [
      'Transfira o abacaxi caramelizado para os pratos individuais.',
      'Sirva imediatamente com uma bola de sorvete artesanal de creme ou baunilha, decorado com folhinhas de hortelã fresca e, para adultos, umas gotas de cachaça envelhecida ou rum flambado.'
    ],
    bullets: [
      'Contraste térmico perfeito da fruta quente com o sorvete gelado.',
      'Auxilia na digestão pós-churrasco graças à enzima bromelina.',
      'A sobremesa mais aclamada do Brasil.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 12. BANANA DA TERRA NA BRASA COM CANELA E QUEIJO
export const BANANA_BRASA_STEPS: StepItem[] = [
  {
    id: 'banana-intro',
    stepNumber: null,
    sectionTitle: 'Banana na Brasa com Canela & Queijo Minas',
    title: 'A Doçura Tradicional do Interior Brasileiro',
    subtitle: 'Assada na própria casca com açúcar mascavo, canela e queijo derretido',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca protege a banana enquanto a polpa vira um doce cremoso e perfumado.',
    paragraphs: [
      'A banana assada na brasa é uma das tradições mais afetivas das fazendas e churrascos do interior do Brasil. A casca da banana escurece completamente, cozinhando a fruta em seu próprio néctar até transformar a polpa em um doce aveludado.',
      'Pode ser feita com banana-da-terra madura ou banana prata/nanica, finalizada com cubos de queijo minas curado que derretem no calor da fruta.'
    ],
    bullets: [
      'Proporção: 1 a 2 bananas inteiras por pessoa.',
      'Tipos: Banana da Terra bem madura ou Banana Prata/Nanica.',
      'Tempo de Brasa: 15 a 20 minutos girando na casca.',
      'Toque Mineiro: Tiras de queijo minas curado ou canastra derretido por cima.'
    ],
    keyRule: 'Dica do Assador: Nunca retire a casca antes de assar! Ela é o invólucro térmico que retém a umidade e impede a fruta de queimar.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'banana-preparo',
    stepNumber: 1,
    sectionTitle: '1. Seleção & Corte na Casca',
    title: 'Incisão Longitudinal na Casca Superior',
    subtitle: 'Criando a abertura para o recheio',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Faça um corte reto na parte interna da curva da banana sem cortar a casca de baixo.',
    paragraphs: [
      'Escolha bananas maduras com a casca amarela pontilhada de preto (quanto mais madura, maior a concentração de açúcares naturais).',
      'Faça um corte longitudinal na parte de cima da casca, de ponta a ponta. Afaste suavemente as abas da casca para criar uma fenda na polpa onde entrarão o queijo e a canela.'
    ],
    bullets: [
      'Bananas maduras com manchas pretas na casca.',
      'Corte reto no sentido do comprimento sem perfurar o fundo.',
      'Encaixe fatias de queijo e salpique açúcar com canela na fenda.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'banana-madura',
        title: 'Banana no Ponto Perfeito',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop',
        description: 'Casca amarela intensa com pintinhas escuras de maturação.',
        whatToLookFor: ['Polpa macia e aromática', 'Casca íntegra sem cortes'],
        whatToAvoid: ['Bananas verdes e adstringentes ou bananas passadas com vazamentos']
      }
    ]
  },
  {
    id: 'banana-brasa',
    stepNumber: 2,
    sectionTitle: '2. Cocção na Grelha',
    title: 'Calor Médio a 25 cm da Brasa',
    subtitle: '12 a 15 minutos até a casca ficar totalmente preta',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca fica preta como carvão e o queijo borbulha derretendo sobre a polpa fumegante.',
    paragraphs: [
      'Acomode as bananas apoiadas sobre a grelha com a fenda recheada virada para cima.',
      'Asse por 12 a 15 minutos em calor brando a médio. A casca ficará inteiramente preta e o recheio de queijo e canela começará a borbulhar e soltar um perfume doce irresistível.'
    ],
    bullets: [
      'Abertura sempre virada para cima.',
      'Tempo de grelha: 12 a 15 minutos sem mexer.',
      'Sinal de ponto: Queijo totalmente derretido e polpa cremosa ao toque.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'banana-servir',
    stepNumber: 3,
    sectionTitle: '3. Servir na Própria Casca',
    title: 'Comer de Colher com Melado ou Sorvete',
    subtitle: 'Puro conforto e sabor brasileiro',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Coma de colher diretamente na casca rústica aproveitando a cremosidade do queijo com a banana quente.',
    paragraphs: [
      'Retire as bananas com uma pinça e acomode nos pratos.',
      'Sirva com uma colher de sobremesa para comer raspando a polpa quente direto da casca. Pode ser regada com um fio de mel de abelha ou melado de cana.'
    ],
    bullets: [
      'Apresentação rústica na própria casca.',
      'Harmoniza com café coado fresco ou licor.',
      'Favorito absoluto de crianças e adultos.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 13. ESPETO MISTO DE LEGUMES NA BRASA
export const ESPETO_LEGUMES_STEPS: StepItem[] = [
  {
    id: 'espeto-legumes-intro',
    stepNumber: null,
    sectionTitle: 'Espeto Misto de Legumes na Brasa',
    title: 'Arco-Íris de Sabores, Texturas & Cores',
    subtitle: 'Tomatinho cereja, abobrinha, cebola roxa, pimentão e cogumelos marinados',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A combinação de diferentes vegetais cria contrastes crocantes, doces e defumados a cada mordida.',
    paragraphs: [
      'O espeto misto de legumes é uma das formas mais atrativas e práticas de servir vegetais na churrasqueira. A alternância de vegetais com tempos de cocção equilibrados garante um petisco suculento e cheio de vida.',
      'A marinada de azeite extravirgem com alho, orégano, tomilho e mostarda dijon envolve os legumes, garantindo que não ressequem com a brasa.'
    ],
    bullets: [
      'Proporção: 1 a 2 espetos por pessoa (~150g a 200g).',
      'Vegetais: Tomate cereja, cebola roxa em pétalas, abobrinha, pimentão amarelo e cogumelo Paris.',
      'Tempo de Grelha: 8 a 10 minutos girando.'
    ],
    keyRule: 'Dica do Assador: Hidrate os espetos de madeira em água por 30 minutos antes da montagem para não queimarem no fogo.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'espeto-legumes-preparo',
    stepNumber: 1,
    sectionTitle: '1. Corte Uniforme & Montagem no Espeto',
    title: 'Cubos Uniformes de 3 cm & Marinada',
    subtitle: 'Intercalação harmoniosa de cores e texturas',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Corte os legumes no mesmo tamanho para que todos encostem na grelha por igual.',
    paragraphs: [
      'Corte a abobrinha em rodelas grossas de 1,5 cm, o pimentão em quadrados de 3 cm e a cebola roxa em pétalas largas.',
      'Espete os vegetais de forma intercalada: cebola roxa, abobrinha, pimentão, cogumelo e tomate cereja. Regue com uma marinada de azeite, alho picado, ervas finas e sal de parrilla.'
    ],
    bullets: [
      'Cubos do mesmo tamanho para cocção por igual.',
      'Pressionar levemente os vegetais no espeto sem esmagar.',
      'Marinada de 15 minutos em azeite e ervas.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'legumes-montagem',
        title: 'Espeto Colorido e Firme',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
        description: 'Vegetais frescos firmemente fixados no espeto.',
        whatToLookFor: ['Cores contrastantes vivas', 'Pedaços firmes que não girem no palito'],
        whatToAvoid: ['Legumes moles que caiam do espeto']
      }
    ]
  },
  {
    id: 'espeto-legumes-brasa',
    stepNumber: 2,
    sectionTitle: '2. Tostagem na Grelha',
    title: 'Calor Médio a 25 cm da Brasa',
    subtitle: 'Gire a cada 2 minutos até caramelizar todos os lados',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Pincele a marinada restante a cada virada para manter a umidade e o brilho.',
    paragraphs: [
      'Coloque os espetos sobre a grelha em calor médio.',
      'Gire os espetos 90 graus a cada 2 minutos, pincelando com o azeite da marinada. Em 8 a 10 minutos os legumes estarão com marcas tostadas, macios por fora e crocantes no centro.'
    ],
    bullets: [
      'Girar a cada 2 minutos nas 4 faces.',
      'Tempo total: 8 a 10 minutos.',
      'Ponto: Tomatinhos estourando de suculência e cebolas translúcidas e doces.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'espeto-legumes-servir',
    stepNumber: 3,
    sectionTitle: '3. Servir & Harmonizações',
    title: 'Molho Chimichurri, Vinagrete & Farofa',
    subtitle: 'Prático para comer direto no palito',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Sirva os espetinhos quentes acompanhados de molho chimichurri fresco e farofa crocante.',
    paragraphs: [
      'Transfira os espetinhos para uma travessa ou tábua.',
      'Finalize com flor de sal e colheradas de chimichurri artesanal ou molho pesto de manjericão fresco. Sirva direto no palito para uma experiência descontraída.'
    ],
    bullets: [
      'Excelente opção de entrada ou prato principal vegetariano.',
      'Combina com farofa de mandioca e arroz de carreteiro de legumes.',
      'Praticidade total no serviço.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 14. ABÓBORA CABOTIÁ NA GRELHA
export const ABOBORA_CABOTIA_STEPS: StepItem[] = [
  {
    id: 'cabotia-intro',
    stepNumber: null,
    sectionTitle: 'Abóbora Cabotiá Grelhada com Alecrim & Melado',
    title: 'Textura Aveludada & Notas Caramelizadas',
    subtitle: 'Fatias em meia-lua com casca, azeite, alecrim fresco e flor de sal',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca verde escura fica crocante enquanto a polpa laranja atinge uma cremosidade amanteigada.',
    paragraphs: [
      'A abóbora cabotiá (ou japonesa) é uma das escolhas mais elegantes para a churrasqueira. Com menor teor de água e alta concentração de amido e açúcares, ela doura rapidamente e atinge uma textura aveludada comparável a uma batata doce assada.',
      'A casca é 100% comestível e fica deliciosa e crocante após passar pela brasa com azeite e alecrim.'
    ],
    bullets: [
      'Proporção: 2 a 3 fatias por pessoa (~150g).',
      'Corte: Meia-lua com casca de 1,5 a 2 cm de espessura.',
      'Tempo de Grelha: 12 a 16 minutos em calor médio-brando.'
    ],
    keyRule: 'Dica do Assador: Deixe a casca! Ela mantém o formato da fatia na grelha e fica crocante e deliciosa.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'cabotia-preparo',
    stepNumber: 1,
    sectionTitle: '1. O Corte em Meia-Lua & Tempero',
    title: 'Lâminas de 1,5 cm com Alecrim & Azeite',
    subtitle: 'Retirada das sementes e corte com faca pesada',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Corte a cabotiá ao meio, retire as sementes com uma colher e fatie em meias-luas.',
    paragraphs: [
      'Lave bem a casca com uma escovinha. Corte a abóbora ao meio e retire as sementes e fibras com uma colher.',
      'Fatie em gomos ou meias-luas de 1,5 cm a 2 cm de espessura. Pincele ambos os lados com azeite de oliva extravirgem, salpique alecrim fresco picado, sal grosso e uma pitada de pimenta calabresa.'
    ],
    bullets: [
      'Fatias de 1,5 cm a 2 cm com casca.',
      'Azeite extravirgem abundante em ambas as faces.',
      'Alecrim fresco, alho picado e sal grosso.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'cabotia-selecao',
        title: 'Cabotiá Pesada e Casca Firme',
        image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1200&auto=format&fit=crop',
        description: 'Casca verde-escura rugosa e polpa alaranjada intensa.',
        whatToLookFor: ['Abóbora pesada para seu tamanho', 'Polpa laranja vivo'],
        whatToAvoid: ['Abóboras com manchas amolecidas ou casca pálida']
      }
    ]
  },
  {
    id: 'cabotia-brasa',
    stepNumber: 2,
    sectionTitle: '2. A Grelha & Ponto de Maciez',
    title: 'Calor Médio a 30 cm da Brasa',
    subtitle: '6 a 8 minutos por lado até a faca entrar suave',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Asse até formar marcas profundas de grelha e a polpa ficar macia como um purê denso.',
    paragraphs: [
      'Coloque as fatias sobre a grelha em calor médio a 30 cm do braseiro.',
      'Asse por cerca de 6 a 8 minutos de um lado até formar belas listras douradas. Vire e asse o outro lado por mais 5 a 6 minutos até que o garfo atravesse a polpa facilmente.'
    ],
    bullets: [
      'Lado 1: 6 a 8 minutos.',
      'Lado 2: 5 a 6 minutos.',
      'A casca ficará tostada e crocante, e o interior extremamente doce.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'cabotia-servir',
    stepNumber: 3,
    sectionTitle: '3. Finalização & Toque de Melado',
    title: 'Fios de Melado, Queijo de Cabra & Castanhas',
    subtitle: 'Sofisticação na mesa de churrasco',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Arrume as meias-luas na tábua, regue com melado de cana e queijo esfarelado.',
    paragraphs: [
      'Transfira as fatias douradas para a tábua.',
      'Regue com alguns fios de melado de cana ou mel silvestre, esfarele queijo de cabra ou gorgonzola por cima e salpique castanhas-de-caju tostadas picadas e folhas de alecrim.'
    ],
    bullets: [
      'Contraste divino entre o doce da abóbora e o salgado do queijo.',
      'Crocância das castanhas e da casca assada.',
      'Acompanhamento espetacular para carnes nobres ou prato principal veggie.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 15. ASPARGOS FRESCOS NA BRASA
export const ASPARGOS_STEPS: StepItem[] = [
  {
    id: 'aspargos-intro',
    stepNumber: null,
    sectionTitle: 'Aspargos Verdes Frescos na Brasa',
    title: 'Crocância Nobre & Rapidez Extrema',
    subtitle: 'Selagem de 4 minutos com azeite, limão siciliano e flor de sal',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A fumaça perfuma as hastes tenras, mantendo a textura verde vibrante e estaladiça.',
    paragraphs: [
      'Os aspargos verdes são um dos vegetais mais nobres e ágeis para a churrasqueira. Com uma selagem rápida de apenas 4 a 5 minutos sobre o calor direto, eles ganham notas tostadas aromáticas enquanto preservam seu frescor e crocância mineral intactos.',
      'O segredo está em quebrar a ponta fibrosa da base com as mãos antes de temperar com azeite extravirgem e flor de sal.'
    ],
    bullets: [
      'Proporção: 5 a 6 hastes por pessoa (~100g).',
      'Temperatura: Calor Forte a Médio-Forte (15 a 20 cm).',
      'Tempo de Grelha: Apenas 4 a 6 minutos no total.'
    ],
    keyRule: 'Dica do Chef: Quebre o talo na dobra natural com os dedos; o aspargo se parte exatamente onde termina a parte fibrosa.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'aspargos-preparo',
    stepNumber: 1,
    sectionTitle: '1. O Estalo do Talo & Limpeza',
    title: 'Quebra Natural da Base Fibrosa',
    subtitle: 'Apenas a parte nobre e macia vai para o fogo',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Segure a haste e curve suavemente até que ela quebre sozinha no ponto exato.',
    paragraphs: [
      'Lave e seque os aspargos frescos.',
      'Segure a base e o meio da haste e dobre suavemente. O aspargo estalará naturalmente no ponto em que o caule deixa de ser fibroso. Descarte as pontas duras ou guarde para caldos.'
    ],
    bullets: [
      'Quebra manual sem necessidade de faca.',
      'Secagem completa das hastes.',
      'Hastes de mesma espessura para grelhagem uniforme.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'aspargos-frescos',
        title: 'Aspargos Firmes e Pontas Fechadas',
        image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?q=80&w=1200&auto=format&fit=crop',
        description: 'Pontas compactas e caules verdes eretos sem murchar.',
        whatToLookFor: ['Pontas bem fechadas e arroxeadas', 'Hastes firmes e eretas'],
        whatToAvoid: ['Pontas amolecidas, amareladas ou caules enrugados']
      }
    ]
  },
  {
    id: 'aspargos-brasa',
    stepNumber: 2,
    sectionTitle: '2. A Selagem Relâmpago na Brasa',
    title: 'Calor Direto a 20 cm da Brasa',
    subtitle: '4 a 5 minutos rolando na grelha',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Role os aspargos na grelha perpendicularmente às barras para não caírem na brasa.',
    paragraphs: [
      'Pincele os aspargos com azeite de oliva extravirgem e sal de parrilla.',
      'Coloque na grelha em calor médio-forte, perpendicularmente às grades. Deixe por 2 minutos de um lado, role 180 graus e deixe por mais 2 a 3 minutos até formar marcas de tostagem com as pontas crocantes.'
    ],
    bullets: [
      'Posicione em sentido transversal às grades da grelha.',
      'Tempo de fogo: 4 a 5 minutos no total.',
      'Ponto ideal: Verde brilhante com marcas de grelha, macio mas estaladiço na mordida.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'aspargos-servir',
    stepNumber: 3,
    sectionTitle: '3. Finalização & Toque Cítrico',
    title: 'Raspas de Limão Siciliano, Flor de Sal & Parmesão',
    subtitle: 'A elegância suprema dos grelhados',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Sirva fumegante com raspas finas de limão siciliano e lâminas de parmesão.',
    paragraphs: [
      'Transfira imediatamente os aspargos para a tábua ou travessa de servir.',
      'Esprema algumas gotas de suco de limão siciliano fresco, salpique raspas da casca de limão, flor de sal e lascas finas de queijo parmesão maturado.'
    ],
    bullets: [
      'Gotas e raspas de limão siciliano.',
      'Flor de sal crocante e azeite extravirgem cru.',
      'Entrada refinada e sofisticada para impressionar.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];
