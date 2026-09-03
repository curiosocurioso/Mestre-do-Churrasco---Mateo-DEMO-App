import { StepItem } from '../../types';

// 1. BRÓCOLIS NA BRASA
export const BROCOLIS_STEPS: StepItem[] = [
  {
    id: 'brocolis-intro',
    stepNumber: null,
    sectionTitle: 'Brócolis Chamuscado na Brasa',
    title: 'Crocância Tostada e Aroma Defumado',
    subtitle: 'Brócolis ninja ou ramoso com azeite de alho e limão siciliano',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'As pontas tostadas adquirem sabor amanteigado e nozes com o calor da brasa.',
    paragraphs: [
      'O brócolis na churrasqueira é uma das maiores surpresas do churrasco moderno. O contato direto com a fumaça do carvão e o calor forte carameliza os açúcares naturais do vegetal, transformando os floretes em petiscos incrivelmente crocantes e adocicados.',
      'Pode ser feito tanto com brócolis comum (cortado em fatias tipo "steaks" ou floretes grandes numa grelha fina/cesto) quanto com o brócolis ramoso/bimi em ramos inteiros.'
    ],
    bullets: [
      'Proporção: ~150g a 200g por pessoa.',
      'Tipo Ideal: Brócolis Ninja em fatias espessas ou Brócolis Ramoso inteiro.',
      'Segredo: Emulsão abundante de azeite de oliva extravirgem antes de ir ao fogo.'
    ],
    keyRule: 'Dica do Assador: Não cozinhe o brócolis em água antes! O vegetal cru direto na brasa retém textura firme, crocância e todos os nutrientes.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'brocolis-compra',
    stepNumber: 1,
    sectionTitle: '1. Seleção & Corte',
    title: 'Escolha e Fatiamento em "Steaks"',
    subtitle: 'Floretes firmes e verde-escuro vibrante',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Corte a cabeça inteira em fatias longitudinais planas de 2 cm para apoiar na grelha.',
    paragraphs: [
      'Procure cabeças de brócolis bem compactas, com caules firmes e floretes bem fechados e verdes. Evite partes amareladas.',
      'Corte o talo na base e fatie a cabeça de cima a baixo em "bifes" planos de 2 a 3 cm de espessura. As partes menores podem ser espetadas em espetos duplos.'
    ],
    bullets: [
      'Espessura das fatias: 2 a 3 cm para não desmanchar.',
      'Lave e seque 100% com papel toalha (a umidade impede a caramelização).',
      'Mantenha parte do talo, que fica extremamente doce e crocante.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'brocolis-fresco',
        title: 'Verde Escuro Compacto',
        image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1200&auto=format&fit=crop',
        description: 'Floretes densamente agrupados, sem flores abertas ou manchas.',
        whatToLookFor: ['Cor verde escura intensa', 'Talos crocantes e hidratados', 'Estrutura firme'],
        whatToAvoid: ['Floretes amarelados', 'Talos moles ou fibrosos demais']
      },
      {
        id: 'brocolis-corte',
        title: 'Fatiamento Plano',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
        description: 'Superfície de contato ampla para marcar as listras da grelha.',
        whatToLookFor: ['Fatias retas e uniformes', 'Floretes unidos ao talo central'],
        whatToAvoid: ['Pedaços muito miúdos que caiam entre as grades']
      }
    ]
  },
  {
    id: 'brocolis-marina',
    stepNumber: 2,
    sectionTitle: '2. A Emulsão de Tempero',
    title: 'Azeite Extravirgem, Alho & Raspas Cítricas',
    subtitle: 'Blindagem de sabor e proteção térmica',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Misture o azeite com alho ralado, raspas de limão e pimenta-do-reino moída na hora.',
    paragraphs: [
      'Em uma tigela, bata 4 colheres de azeite extravirgem com 2 dentes de alho ralados, raspas de 1 limão siciliano, uma pitada de flocos de pimenta calabresa e sal de parrilla fino.',
      'Pincele generosamente em todas as frestas do brócolis. O azeite conduz o calor e permite que as pontinhas fiquem douradas sem queimar por dentro.'
    ],
    bullets: [
      '30ml de azeite para cada 300g de brócolis.',
      'Alho ralado e raspas de limão siciliano para aroma fresco.',
      'Pitada de páprica doce ou defumada opcional.'
    ],
    keyRule: 'Pincele logo antes de ir para a grelha para absorver o azeite uniformemente.'
  },
  {
    id: 'brocolis-brasa',
    stepNumber: 3,
    sectionTitle: '3. Controle da Brasa',
    title: 'Calor Médio-Forte a 25 cm',
    subtitle: '5 a 7 minutos de cocção total',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Asse até criar marcas bem definidas de grelha com pontas escuras crocantes.',
    paragraphs: [
      'Posicione o brócolis na grelha média a cerca de 25 cm do braseiro (calor de 4 a 5 segundos na mão).',
      'Deixe dourar por 3 a 4 minutos no primeiro lado sem mexer. Vire com uma pinça delicadamente e asse por mais 2 a 3 minutos até que o talo fique macio ao toque de um garfo, mantendo o miolo al dente.'
    ],
    bullets: [
      'Lado 1: 3 a 4 minutos até marcar a grelha.',
      'Lado 2: 2 a 3 minutos.',
      'Ponto: Talo macio, floretes crocantes e levemente chamuscados.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'brocolis-finaliza',
    stepNumber: 4,
    sectionTitle: '4. Finalização & Serviço',
    title: 'Suco de Limão, Flor de Sal & Parmesão',
    subtitle: 'Sirva fumegante direto da grelha',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Finalize com lascas finas de queijo parmesão maturado ou castanhas tostadas.',
    paragraphs: [
      'Retire para a tábua e esprema algumas gotas de suco de limão siciliano fresco sobre os floretes quentes.',
      'Finalize com flor de sal e, se desejar, lascas finas de parmesão ou queijo da canastra ralado e amêndoas laminadas tostadas.'
    ],
    bullets: [
      'Gotas de limão siciliano para acidez equilibrada.',
      'Flor de sal para textura crocante.',
      'Queijo ralado opcional que derrete com o calor residual.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 2. ABOBRINHA GRELHADA
export const ABOBRINHA_STEPS: StepItem[] = [
  {
    id: 'abobrinha-intro',
    stepNumber: null,
    sectionTitle: 'Abobrinha Grelhada na Brasa',
    title: 'Fatias Suculentas com Marcas de Grelha',
    subtitle: 'Abobrinha italiana marinada com azeite, hortelã e orégano fresco',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698980?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A caramelização dos açúcares da abobrinha na brasa cria um contraste irresistível de texturas.',
    paragraphs: [
      'A abobrinha é um dos vegetais mais rápidos e versáteis da churrasqueira. Quando cortada em lâminas longitudinais e colocada sobre o calor direto, ela adquire um aroma defumado incrível enquanto retém toda a sua água natural.',
      'O segredo é salgar apenas na grelha e não deixar passar do ponto para não perder a textura firme e carnuda.'
    ],
    bullets: [
      'Proporção: 1 abobrinha média serve 2 a 3 pessoas (~150g).',
      'Corte: Fatias longitudinais de 1 cm de espessura ou rodelas diagonais.',
      'Tempo de Grelha: Apenas 2 a 3 minutos por lado em fogo médio-alto.'
    ],
    keyRule: 'Dica de Ouro: Nunca corte fatias muito finas (menos de 0,5 cm), pois a abobrinha desidrata e quebra ao virar.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'abobrinha-preparo',
    stepNumber: 1,
    sectionTitle: '1. Corte & Laminação',
    title: 'Fatias Longitudinais de 1 cm',
    subtitle: 'Corte reto com casca preservada',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698980?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Fatie a abobrinha no comprimento com uma faca de chefe bem afiada.',
    paragraphs: [
      'Escolha abobrinhas italianas médias, firmes e sem manchas na casca verde brilhante.',
      'Descarte as pontas e fatie no sentido do comprimento em lâminas de aproximadamente 1 cm de espessura. As cascas ajudam a manter a estrutura firme durante o manuseio na grelha.'
    ],
    bullets: [
      'Espessura ideal: 10 mm a 12 mm.',
      'Mantenha a casca para dar sustentação.',
      'Se preferir, faça cortes diagonais ovais para servir como petisco.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'abobrinha-fresca',
        title: 'Abobrinha Firme e Lisa',
        image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698980?q=80&w=1200&auto=format&fit=crop',
        description: 'Casca lisa e uniforme sem áreas amolecidas.',
        whatToLookFor: ['Firmeza ao apertar de leve', 'Casca verde vibrante'],
        whatToAvoid: ['Abobrinhas murchas ou com sementes grandes demais no miolo']
      }
    ]
  },
  {
    id: 'abobrinha-tempero',
    stepNumber: 2,
    sectionTitle: '2. Pincelada de Ervas & Azeite',
    title: 'Azeite, Pimenta do Reino & Hortelã',
    subtitle: 'Aplicação antes da grelha para não grudar',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Pincele ambos os lados com azeite generoso e orégano fresco picado.',
    paragraphs: [
      'Pincele ambos os lados das fatias com azeite de oliva extravirgem. Salpique pimenta-do-reino preta moída na hora e folhas de hortelã ou orégano.',
      'Não adicione sal com antecedência — o sal extrai o líquido da abobrinha crua antes do fogo, fazendo-a cozinhar no vapor em vez de grelhar com crosta.'
    ],
    bullets: [
      'Azeite extravirgem nos 2 lados.',
      'Sal de parrilla apenas quando entrar na churrasqueira.',
      'Ervas frescas: hortelã, tomilho ou orégano.'
    ],
    keyRule: 'Salgue na grelha para garantir crocância externa e interior suculento.'
  },
  {
    id: 'abobrinha-grelha',
    stepNumber: 3,
    sectionTitle: '3. A Grelhagem Perfeita',
    title: 'Calor Médio a 20 cm da Brasa',
    subtitle: '2 a 3 minutos por lado em ângulo cruzado',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Gire 45 graus no meio do tempo para fazer o xadrez clássico de parrilla.',
    paragraphs: [
      'Coloque as fatias sobre a grelha quente untada. Deixe por cerca de 2 minutos até marcar as linhas douradas.',
      'Vire com espátula ou pinça e asse o segundo lado por mais 2 minutos. A abobrinha deve ficar macia, mas ainda com uma leve mordida elástica no centro.'
    ],
    bullets: [
      'Lado 1: 2 a 3 minutos.',
      'Lado 2: 2 minutos.',
      'A textura ideal é tenra e suculenta, nunca desfeita em purê.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'abobrinha-servir',
    stepNumber: 4,
    sectionTitle: '4. Toque Gourmet na Tábua',
    title: 'Aceto Balsâmico, Queijo & Folhas de Hortelã',
    subtitle: 'Entrada leve e refrescante para a rodada',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698980?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Disponha as lâminas em leque na tábua regadas com azeite frutado.',
    paragraphs: [
      'Arrume as fatias grelhadas em uma travessa rasa ou tábua de madeira.',
      'Regue com alguns fios de redução de aceto balsâmico ou azeite trufado, salpique queijo parmesão ralado na hora e decore com folhas frescas de hortelã.'
    ],
    bullets: [
      'Redução de balsâmico agridoce.',
      'Parmesão, ricota defumada ou queijo feta esfarelado.',
      'Excelente harmonização com pão de alho e cerveja pilsen.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 3. CEBOLAS NA BRASA
export const CEBOLA_STEPS: StepItem[] = [
  {
    id: 'cebola-intro',
    stepNumber: null,
    sectionTitle: 'Cebolas Caramelizadas na Brasa',
    title: 'A Doçura Natural da Fogueira',
    subtitle: 'Assadas com casca direto na cinza ou grelhadas com manteiga de ervas',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'O calor lento transforma a pungência da cebola em doçura caramelizada de pura seda.',
    paragraphs: [
      'A cebola assada na brasa é uma das tradições mais rústicas e deliciosas do churrasco sul-americano. Quando assada inteira direto no carvão (no *rescaldo*) ou grelhada ao meio, a casca externa queima criando uma câmara de vapor que cozinha o interior lentamente.',
      'Os açúcares naturais concentram-se a ponto de a cebola derreter na boca como um doce amanteigado.'
    ],
    bullets: [
      'Proporção: 1 a 2 cebolas médias por pessoa.',
      'Métodos: Direto na cinza com casca (30 min) ou em pétalas na grelha (8 min).',
      'Variedades: Cebola Amarela tradicional (mais doce) ou Roxa (frutada).'
    ],
    keyRule: 'Regra de Ouro: Deixe a casca inteira no método de rescaldo; ela é o escudo natural que protege a polpa contra a fuligem.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'cebola-preparo',
    stepNumber: 1,
    sectionTitle: '1. Os 2 Métodos de Preparo',
    title: 'Inteira no Rescaldo vs. Metades na Grelha',
    subtitle: 'Escolha a técnica de acordo com seu tempo',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Cebola inteira com casca ou cortada ao meio com manteiga e sal.',
    paragraphs: [
      'Método 1 (Rústico no Rescaldo): Mantenha a cebola inteira com casca, unte com azeite e enterre parcialmente nas brasas mansas nas laterais da churrasqueira por 30 a 40 minutos.',
      'Método 2 (Rápido na Grelha): Descasque, corte as cebolas ao meio no sentido horizontal, pincele manteiga ou azeite e coloque a face cortada voltada para a grelha por 8 a 10 minutos.'
    ],
    bullets: [
      'Rescaldo (cinzas): 30 a 40 min — textura cremosa amanteigada.',
      'Grelha direta: 8 a 12 min — crocância caramelizada com marcas de brasa.',
      'Pétalas no espeto: 6 a 8 min intercaladas com queijo e legumes.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'cebola-selecao',
        title: 'Cebolas Firmes e Pesadas',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop',
        description: 'Bulbos pesados e compactos com casca seca e brilhante.',
        whatToLookFor: ['Cebola dura ao toque', 'Sem brotos verdes saindo do topo'],
        whatToAvoid: ['Cebolas moles no pescoço ou com mofo na casca']
      }
    ]
  },
  {
    id: 'cebola-tempero',
    stepNumber: 2,
    sectionTitle: '2. Manteiga de Ervas & Balsâmico',
    title: 'Aroma Intenso com Alecrim e Açúcar Mascavo',
    subtitle: 'Para cebolas cortadas na grelha',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Coloque um cubo de manteiga e ervas sobre cada metade enquanto doura na grelha.',
    paragraphs: [
      'Para as cebolas de grelha, faça pequenos cortes cruzados na superfície da polpa. Pincele manteiga com alecrim picado, sal grosso e uma pitada de açúcar mascavo ou molho shoyu.',
      'O tempero penetrará entre as camadas conforme a cebola aquece e abre suas pétalas.'
    ],
    bullets: [
      'Manteiga com alho e alecrim fresco.',
      'Gotas de vinagre balsâmico para equilibrar a doçura.',
      'Flor de sal na finalização.'
    ],
    keyRule: 'O corte em cruz superficial facilita a absorção da manteiga até o coração da cebola.'
  },
  {
    id: 'cebola-brasa',
    stepNumber: 3,
    sectionTitle: '3. Cocção e Caramelização',
    title: 'Tempo de Fogo & Teste de Maciez',
    subtitle: 'Quando a ponta da faca entra sem resistência',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A casca externa enegrece, mas o interior fica translúcido e suculento.',
    paragraphs: [
      'No rescaldo: gire a cebola a cada 10 minutos. Quando a casca estiver completamente preta e carbonizada e a cebola ceder facilmente ao apertar com a pinça, está pronta.',
      'Na grelha: asse com a face para baixo por 6 minutos até caramelizar em tom castanho brilhante; vire e asse o verso por mais 4 minutos.'
    ],
    bullets: [
      'Grelha média (30 cm): 10 minutos no total.',
      'Rescaldo no carvão: 30 a 35 minutos girando.',
      'Descasque a camada carbonizada externa para revelar o coração dourado.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'cebola-servir',
    stepNumber: 4,
    sectionTitle: '4. Como Servir',
    title: 'Azeite, Cheiro-Verde & Farofa Crocante',
    subtitle: 'O melhor acompanhamento para qualquer churrasco',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Abra as pétalas como uma flor e regue com azeite morno e cheiro-verde picadinho.',
    paragraphs: [
      'Se fez no rescaldo, retire a primeira camada queimada. Corte a cebola ao meio ou abra em pétalas.',
      'Regue com azeite extravirgem, adicione cheiro-verde fresco, flor de sal e sirva ao lado de farofa e carnes.'
    ],
    bullets: [
      'Pétalas adocicadas perfeitas para acompanhar qualquer prato.',
      'Pode ser picada para fazer uma vinagrete rústica defumada.',
      'Harmonização perfeita com queijo coalho e carnes nobres.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 4. COGUMELOS NA GRELHA
export const COGUMELOS_STEPS: StepItem[] = [
  {
    id: 'cogumelos-intro',
    stepNumber: null,
    sectionTitle: 'Cogumelos na Brasa',
    title: 'Umami Puro e Textura Carnuda',
    subtitle: 'Portobello recheado, Paris na grelha ou espetos de Shimeji',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'O chapéu do cogumelo absorve a fumaça e se enche de um caldo suculento e amanteigado.',
    paragraphs: [
      'Os cogumelos são as estrelas indiscutíveis do churrasco vegetariano. Com alto teor de ácido glutâmico natural (o sabor Umami), eles possuem densidade e suculência comparáveis às melhores carnes nobres.',
      'O Portobello grande pode ser grelhado inteiro como um steak ou recheado com queijos e ervas, enquanto o cogumelo Paris fica perfeito em espetos com azeite e alho.'
    ],
    bullets: [
      'Proporção: 150g a 200g por pessoa (ou 2 chapéus de Portobello grandes).',
      'Variedades recomendadas: Portobello, Paris fresco ou Shimeji no papelote.',
      'Tempo de Grelha: 6 a 8 minutos em fogo médio-forte.'
    ],
    keyRule: 'Regra Crucial: Nunca lave cogumelos com água corrente! Eles funcionam como esponjas. Limpe apenas com pano úmido ou papel toalha.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'cogumelos-preparo',
    stepNumber: 1,
    sectionTitle: '1. Limpeza & Preparo do Chapéu',
    title: 'Limpeza a Seco e Remoção do Talo',
    subtitle: 'Preserve a textura esponjosa intacta',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Remova suavemente o talo do Portobello para criar uma cavidade que receberá o recheio.',
    paragraphs: [
      'Passe um papel toalha levemente umedecido na superfície dos cogumelos para remover qualquer resíduo de terra.',
      'Destaque o talo com os dedos ou com a ponta da faca. A cavidade do chapéu funcionará como uma tigela natural para reter a manteiga derretida e os sucos aromáticos na grelha.'
    ],
    bullets: [
      'Limpeza estritamente a seco.',
      'Retire o talo para criar espaço para o recheio/manteiga.',
      'Faça incisões leves no topo do chapéu para o tempero penetrar.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'cogumelo-portobello',
        title: 'Portobello Firme e Carnudo',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
        description: 'Chapéu marrom acetinado, lamelas internas limpas e secas.',
        whatToLookFor: ['Estrutura firme e pesada', 'Aroma amendoado de terra fresca'],
        whatToAvoid: ['Cogumelos viscosos, escuros demais ou murchos']
      }
    ]
  },
  {
    id: 'cogumelos-tempero',
    stepNumber: 2,
    sectionTitle: '2. A Maravilhosa Emulsão de Shoyu & Manteiga',
    title: 'Manteiga de Alho, Molho Shoyu & Tomilho',
    subtitle: 'O segredo da explosão de sabor umami',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Pincele a parte externa com azeite e coloque a manteiga temperada no centro do chapéu.',
    paragraphs: [
      'Pincele a face externa do cogumelo com azeite de oliva para não grudar na grelha.',
      'Dentro da cavidade do chapéu, adicione 1 colher de manteiga sem sal, 1 colher de chá de molho shoyu de boa qualidade, 1 dente de alho picado e folhinhas de tomilho fresco.'
    ],
    bullets: [
      'Azeite no exterior para conduzir calor sem ressecar.',
      'Manteiga + Shoyu + Alho + Tomilho no interior do chapéu.',
      'Opcional: cubinhos de queijo gorgonzola ou requeijão cremoso.'
    ],
    keyRule: 'A manteiga derreterá com o calor e ferverá dentro do próprio cogumelo, cozinhando a polpa por dentro.'
  },
  {
    id: 'cogumelos-grelha',
    stepNumber: 3,
    sectionTitle: '3. A Grelha & Cocção',
    title: 'Calor Médio a 25 cm da Brasa',
    subtitle: '7 a 9 minutos sem virar o líquido',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Coloque primeiro com o chapéu para cima por 2 min, depois vire a cavidade para cima até ferver.',
    paragraphs: [
      'Coloque o cogumelo com o chapéu para baixo na grelha por 2 minutos para marcar e selar a casca.',
      'Vire com a cavidade voltada para cima, adicione o recheio de manteiga/shoyu/alho e deixe por mais 5 a 6 minutos em calor médio. O caldo começará a borbulhar e a polpa ficará macia e suculenta.'
    ],
    bullets: [
      'Chapéu para baixo: 2 minutos para marcar a grelha.',
      'Cavidade para cima: 5 a 6 minutos até a manteiga borbulhar.',
      'Nunca derrube o caldo acumulado no interior do cogumelo!'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'cogumelos-servir',
    stepNumber: 4,
    sectionTitle: '4. Servir na Tábua Quente',
    title: 'Cebolinha Picada, Flor de Sal & Pão Tostado',
    subtitle: 'Consuma direto da churrasqueira',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Sirva inteiro acompanhado de fatias de pão tostado para chuchar o molho.',
    paragraphs: [
      'Transfira os cogumelos cuidadosamente para a tábua para não derramar o caldo dourado.',
      'Salpique cebolinha fresca finamente picada e flor de sal. Sirva com pão tostado na brasa para aproveitar todo o molho de manteiga e shoyu.'
    ],
    bullets: [
      'Caldo rico em sabor que harmoniza perfeitamente com vinhos e cervejas encorpadas.',
      'Pode ser fatiado em tiras carnudas para rechear sanduíches.',
      'Sucesso garantido entre vegetarianos e carnívoros.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 5. QUEIJO COALHO NA BRASA
export const QUEIJO_COALHO_STEPS: StepItem[] = [
  {
    id: 'coalho-intro',
    stepNumber: null,
    sectionTitle: 'Queijo Coalho Grelhado',
    title: 'A Crosta Dourada Mais Amada do Brasil',
    subtitle: 'Espetos de queijo coalho tostados na brasa com orégano e melado',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Casca crocante e dourada por fora, miolo elástico e cremoso por dentro.',
    paragraphs: [
      'O queijo coalho é uma das maiores instituições do churrasco brasileiro e das praias do Nordeste ao Sul. Graças ao seu processo de coagulação enzimática e baixo teor de umidade, ele resiste ao calor alto sem escorrer na grelha, formando uma casquinha tostada incomparável.',
      'Pode ser feito no espeto de madeira tradicional ou em blocos grossos na grelha, finalizado com orégano e fios de melado de cana.'
    ],
    bullets: [
      'Proporção: 1 a 2 espetos por pessoa (~100g).',
      'Temperatura da brasa: Calor Médio-Forte (3 a 4 segundos).',
      'Tempo de preparo: 4 a 6 minutos virando constantemente.'
    ],
    keyRule: 'Dica do Mestre: Braseiro bem quente e atenção constante! O queijo passa de dourado perfeito a queimado em questão de segundos.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'coalho-preparo',
    stepNumber: 1,
    sectionTitle: '1. Escolha & Firmeza',
    title: 'Queijo Coalho Autêntico & Secagem',
    subtitle: 'Textura elástica com teor correto de umidade',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Seque a superfície do queijo com papel toalha antes de ir ao fogo para tostar mais rápido.',
    paragraphs: [
      'Verifique se o queijo é coalho de verdade (e não queijo minas frescal, que derrete e escorre no braseiro).',
      'Retire da embalagem e seque muito bem a superfície com papel toalha. A umidade superficial atrasa a caramelização da lactose.'
    ],
    bullets: [
      'Espetos firmes e sem rachaduras.',
      'Secagem completa da umidade externa com papel toalha.',
      'Mantenha refrigerado até 10 minutos antes de assar.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'coalho-inspecao',
        title: 'Queijo Coalho Tradicional',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Massa branca amarelada, compacta e elástica.',
        whatToLookFor: ['Firmeza consistente', 'Formato regular no espeto'],
        whatToAvoid: ['Queijos moles demais com excesso de soro líquido na embalagem']
      }
    ]
  },
  {
    id: 'coalho-brasa',
    stepNumber: 2,
    sectionTitle: '2. Tostagem na Brasa',
    title: 'Calor Direto a 20 cm da Brasa',
    subtitle: 'Vire os 4 lados a cada 1 minuto',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Gire os espetos com frequência para obter uma cor âmbar homogênea em todas as faces.',
    paragraphs: [
      'Posicione os espetos sobre a grelha em calor médio-forte. Fique de olho atento.',
      'Assim que a face de baixo criar uma casquinha dourada crocante (cerca de 1 a 1,5 minuto), gire 90 graus. Repita para os 4 lados do queijo.'
    ],
    bullets: [
      '1 a 1,5 minuto por lado.',
      'Tempo total de 4 a 5 minutos na churrasqueira.',
      'Se o queijo começar a amolecer rápido demais, suba a grelha para 30 cm.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'coalho-servir',
    stepNumber: 3,
    sectionTitle: '3. A Combinação Perfeita',
    title: 'Melado de Cana, Orégano & Pimenta Biquinho',
    subtitle: 'O clássico contraste agridoce',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Regue fios generosos de melado de cana sobre o queijo ainda estalando de quente.',
    paragraphs: [
      'Retire o espeto fumegante da brasa e coloque imediatamente em uma travessa.',
      'Salpique orégano seco esfregado entre as palmas das mãos para liberar os óleos essenciais e cubra com fios generosos de melado de cana de açúcar puro ou mel com pimenta.'
    ],
    bullets: [
      'Melado de cana artesanal.',
      'Orégano desidratado aromatizado.',
      'Consumir imediatamente enquanto a casca está crocante e o miolo elástico.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 6. PÃO DE ALHO ARTESANAL
export const PAO_DE_ALHO_STEPS: StepItem[] = [
  {
    id: 'pao-alho-intro',
    stepNumber: null,
    sectionTitle: 'Pão de Alho Artesanal na Brasa',
    title: 'Casca Ultra Crocante & Recheio Cremoso',
    subtitle: 'Baguete recheada com pasta de alho assado, requeijão, muçarela e ervas',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'O queijo derrete entre as fatias enquanto o pão ganha crocância dourada na brasa.',
    paragraphs: [
      'O pão de alho é o aperitivo mais obrigatório de qualquer churrasco no Brasil. Feito com baguete francesa fresca e uma pasta caseira de alho confitado, requeijão cremoso, muçarela ralada e cheiro-verde, supera infinitamente as opções industrializadas.',
      'O segredo está em assar em calor brando a médio para que o queijo derreta por dentro sem queimar a casca do pão.'
    ],
    bullets: [
      'Proporção: 1 a 2 unidades médias por pessoa.',
      'Altura da Grelha: 30 a 35 cm (Calor Médio-Brando).',
      'Tempo de Brasa: 8 a 12 minutos girando.'
    ],
    keyRule: 'Dica de Ouro: Nunca asse o pão de alho em calor direto muito forte, ou a casca queima antes do queijo do miolo amolecer.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'pao-alho-preparo',
    stepNumber: 1,
    sectionTitle: '1. A Pasta de Alho Suprema',
    title: 'Alho Confitado, Manteiga, Requeijão & Muçarela',
    subtitle: 'Sabor suave sem ardência excessiva',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Misture os queijos com o alho triturado e a manteiga em ponto de pomada.',
    paragraphs: [
      'Em uma tigela, misture 100g de manteiga amolecida, 100g de requeijão cremoso, 150g de queijo muçarela ralado fino, 4 dentes de alho picados bem finos (ou assados na brasa), salsinha picada e uma pitada de orégano e sal.',
      'Faça cortes transversais no pão a cada 2 cm, sem separar a base inferior. Recheie generosamente cada fenda com a pasta.'
    ],
    bullets: [
      'Cortes tipo sanfona de 2 cm sem cortar a base do pão.',
      'Recheio abundante no interior de cada fatia.',
      'Pincele o topo do pão com azeite e queijo ralado.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'pao-fatias',
        title: 'Corte em Sanfona',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
        description: 'Fendas uniformes mantendo o fundo do pão inteiro.',
        whatToLookFor: ['Base íntegra para o recheio não vazar', 'Fatias de 2 dedos de espessura'],
        whatToAvoid: ['Cortar o pão até o final separando os pedaços']
      }
    ]
  },
  {
    id: 'pao-alho-brasa',
    stepNumber: 2,
    sectionTitle: '2. O Ponto da Brasa',
    title: 'Calor Médio a 30 cm da Grelha',
    subtitle: 'Vire a cada 2 a 3 minutos para dourar por igual',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Asse nas 4 faces até a crosta ficar dourada e o queijo borbulhar nas bordas.',
    paragraphs: [
      'Posicione os pães na grelha superior ou média (30 cm a 35 cm da brasa).',
      'Asse por 3 minutos com o fundo para baixo. Gire para as laterais e finalize com a parte superior virada para a brasa por 1 a 2 minutos até dourar a crosta de queijo.'
    ],
    bullets: [
      'Fundo do pão: 3 minutos.',
      'Laterais: 2 minutos de cada lado.',
      'Topo: 1 a 2 minutos até gratinar o queijo.',
      'Tempo total: cerca de 8 a 10 minutos.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'pao-alho-servir',
    stepNumber: 3,
    sectionTitle: '3. Como Servir',
    title: 'Puxar e Saborear Fumegante',
    subtitle: 'O queijo deve esticar a cada puxada',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Sirva na tábua no início do churrasco enquanto as carnes descansam.',
    paragraphs: [
      'Sirva direto na tábua. Cada convidado pode puxar sua própria fatia com o queijo muçarela esticando de forma espetacular.',
      'Harmoniza perfeitamente com cervejas geladas, caipirinhas e como acompanhamento para qualquer prato do churrasco.'
    ],
    bullets: [
      'Sirva bem quente logo que sair da grelha.',
      'Crosta super estaladiça com miolo úmido.',
      'O abre-alas supremo do churrasco brasileiro.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

// 7. MILHO VERDE NA BRASA
export const MILHO_VERDE_STEPS: StepItem[] = [
  {
    id: 'milho-intro',
    stepNumber: null,
    sectionTitle: 'Milho Verde na Brasa & Palha',
    title: 'Grãos Caramelizados, Doces e Defumados',
    subtitle: 'Espigas assadas com manteiga temperada, páprica e queijo',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'A fumaça da brasa penetra nos grãos de milho, concentrando o dulçor e criando grãos tostados crocantes.',
    paragraphs: [
      'O milho verde na churrasqueira é uma experiência sensorial fantástica. Ao assar na brasa, o amido do milho carameliza, transformando a espiga comum em uma iguaria suculenta, doce e defumada.',
      'Pode ser preparado direto na brasa (mais tostado e rápido) ou envolvido na própria palha umedecida (cozimento no vapor com sabor defumado suave).'
    ],
    bullets: [
      'Proporção: 1 espiga inteira por pessoa.',
      'Método Direto: 10 a 15 minutos girando.',
      'Método na Palha: 20 a 25 minutos.',
      'Finalização: Manteiga de garrafa, páprica defumada e flor de sal.'
    ],
    keyRule: 'Dica do Assador: Se fizer direto na grelha, pincele manteiga com frequência para os grãos não ressecarem.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'milho-preparo',
    stepNumber: 1,
    sectionTitle: '1. Seleção & Hidratação da Palha',
    title: 'Milho Verde Fresco e Grãos Leitosos',
    subtitle: 'Como escolher a espiga perfeita',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Espigas frescas com palha verde e cabelos castanho-claros úmidos.',
    paragraphs: [
      'Escolha espigas com grãos cheios, amarelos e leitosos (ao furar com a unha sai um líquido claro).',
      'Se optar por assar na palha: puxe a palha para trás sem destacar, retire os cabelos, pincele manteiga nos grãos, puxe a palha de volta cobrindo a espiga e mergulhe em água fria por 10 minutos antes de levar à brasa.'
    ],
    bullets: [
      'Grãos leitosos e cheios de ponta a ponta.',
      'Deixar na água com palha evita que a palha queime antes de cozinhar o milho.',
      'Para método direto: descasque e limpe completamente.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'milho-fresco',
        title: 'Espiga Fresca e Suculenta',
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop',
        description: 'Palha verde viva e grãos macios e bem hidratados.',
        whatToLookFor: ['Grãos uniformes sem falhas', 'Palha verde não ressecada'],
        whatToAvoid: ['Milhos duros, velhos ou com grãos afundados/secos']
      }
    ]
  },
  {
    id: 'milho-brasa',
    stepNumber: 2,
    sectionTitle: '2. Tostagem na Grelha',
    title: 'Calor Médio a 25 cm da Brasa',
    subtitle: 'Gire um quarto de volta a cada 3 minutos',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Asse até que os grãos fiquem com pontos dourados e amarronzados sem queimar.',
    paragraphs: [
      'Coloque as espigas sobre a grelha em calor médio (4 a 5 segundos de sustentação da mão).',
      'Pincele manteiga derretida e gire a cada 3 minutos. Conforme o milho cozinha, sua cor mudará para um amarelo ouro profundo com grãos brilhantes e pontos chamuscados aromáticos.'
    ],
    bullets: [
      'Tempo de grelha direto: 12 a 15 minutos girando.',
      'Pincele manteiga 2 a 3 vezes durante a grelha.',
      'Sinais de ponto: grãos tenros, estourando de suculência ao toque.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'milho-servir',
    stepNumber: 3,
    sectionTitle: '3. A Manteiga Temperada & Queijo',
    title: 'Manteiga de Garrafa, Páprica Defumada & Parmesão',
    subtitle: 'Estilo Street Food brasileiro gourmet',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Pincele manteiga de garrafa fumegante e polvilhe páprica e queijo ralado.',
    paragraphs: [
      'Transfira as espigas quentes para a tábua. Pincele manteiga de garrafa ou manteiga com ervas.',
      'Polvilhe páprica defumada, uma pitada de flor de sal e queijo parmesão ou queijo da canastra ralado na hora. Finalize com raspas de limão taiti.'
    ],
    bullets: [
      'Manteiga de garrafa ou manteiga com alho.',
      'Páprica defumada e queijo curado ralado.',
      'Gotas de limão taiti fresco para cortar o amido.',
      'Espete palitos de churrasco na base para facilitar o consumo.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];
