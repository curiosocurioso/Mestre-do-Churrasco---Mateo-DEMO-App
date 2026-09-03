import { StepItem } from '../../types';

export const COSTELA_STEPS: StepItem[] = [
  {
    id: 'costela-intro',
    stepNumber: null,
    sectionTitle: 'Costela Gaúcha na Churrasqueira',
    title: 'O Monumento do Cozimento Lento',
    subtitle: 'Costela Janela ou Ripa (3 a 5 horas em braseiro brando)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A costela bovina é rica em colágeno e gordura entremeada, que derretem lentamente transformando-se em pura suculência.',
    paragraphs: [
      'A Costela Bovina (seja a Janela central ou a Ripa) é o corte mais reverenciado da tradição campeira gaúcha. Ao contrário dos cortes rápidos de grelha, a costela é uma celebração da paciência e do domínio do fogo indireto.',
      'O calor suave durante 3 a 5 horas a 50–60 cm da brasa dissolve as fibras de colágeno duro, transformando-as em gelatina suculenta. A regra fundamental é assar 80% do tempo com os ossos virados para baixo, utilizando-os como condutor e escudo térmico natural.'
    ],
    bullets: [
      'Proporção: Calcule 450g a 500g de carne crua com osso por pessoa.',
      'Tempo de Fogo: 3,5 a 5 horas de cocção lenta e constante.',
      'Altura da Grelha: 50 cm a 60 cm da brasa (calor brando de 120°C a 140°C).',
      'Ponto de Sucesso: Quando a carne retrai 2 a 3 cm expondo as pontas dos ossos.'
    ],
    keyRule: 'Dica do Assador Gaúcho: O osso é o melhor amigo da costela. Ele protege a carne de queimar e distribui a temperatura de forma homogênea por toda a extensão da peça.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'costela-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Seleção da Janela vs Ripa',
    subtitle: 'Ossos achatados, animal jovem e entremeado de gordura branca',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Costela Janela (parte central) com ossos retos, largos e generosa camada de carne e gordura.',
    paragraphs: [
      'A Costela Janela (da 6ª à 10ª costela) é a preferida dos assadores por possuir ossos mais largos, chatos e paralelos, com camadas equilibradas de carne e gordura.',
      'A Costela Ripa (mais próxima do lombo) tem ossos mais arredondados e carne mais fibrosa, exigindo ainda mais tempo de fogo brando. Em qualquer caso, procure peças com carne vermelho-cereja e gordura clara.'
    ],
    bullets: [
      'Janela de Costela: Peça de 3,0 kg a 5,0 kg com ossos chatos e retos.',
      'Camadas Visíveis: Alternância clara entre faixas de carne e gordura branca.',
      'Espessura da Carne: Pelo menos 3 a 5 cm de carne sobre os ossos.',
      'Cor da Gordura: Branca a perolada (evite sebo escuro ou excessivamente amarelado).'
    ],
    keyRule: 'Explore a galeria visual abaixo para inspecionar os detalhes cruciais na hora de escolher a costela.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'costela-janela-ossos',
        title: 'Ossos Largos & Achatados (Janela)',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Ossos chatos e paralelos indicam o corte central nobre da costela janela com espessura uniforme.',
        whatToLookFor: ['Ossos planos e retos', 'Espaçamento regular', 'Animal jovem'],
        whatToAvoid: ['Ossos finos e redondos sem carne', 'Peças com ossos quebrados ou lascados']
      },
      {
        id: 'costela-entremeado',
        title: 'Entremeado de Gordura & Carne',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Faixas alternadas de gordura e carne que garantem umidade contínua durante 4 horas de brasa.',
        whatToLookFor: ['Gordura branca cremosa', 'Boa espessura de carne sobre o osso (3–5 cm)'],
        whatToAvoid: ['Capa de sebo duro ressecado', 'Carne excessivamente magra que secará no fogo']
      },
      {
        id: 'costela-frescor',
        title: 'Coloração & Textura',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Vermelho brilhante saudável, sem acúmulo de sangue coagulado escuro na embalagem.',
        whatToLookFor: ['Carne brilhante e firme', 'Aroma fresco e limpo'],
        whatToAvoid: ['Cheiro azedo', 'Bordas secas ou escuras']
      }
    ]
  },
  {
    id: 'costela-preparo-limpeza',
    stepNumber: 1,
    sectionTitle: '2. Limpeza & Membrana',
    title: 'Aparar o Sebo Duro e Perfurar a Pleura',
    subtitle: 'Permitir que o sal e a umidade penetrem na carne',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Remova pequenos excessos de sebo amarelado e faça cortes em xadrez na membrana dos ossos.',
    paragraphs: [
      'Na costela com osso, não retire toda a capa de gordura, apenas apare aparas soltas e sebo rígido não palatável.',
      'Na parte dos ossos, existe uma membrana fina chamada periósteo/pleura. Você pode fazer leves incisões diagonais com a ponta da faca sobre os ossos ou puxá-la com papel toalha para que o tempero atinja a carne mais profundamente.'
    ],
    bullets: [
      'Aparar apenas o excesso de sebo amarelo rígido.',
      'Incisões diagonais na membrana que recobre os ossos.',
      'Manter a carne em temperatura ambiente por 30 minutos antes do fogo.'
    ],
    proTip: 'Nunca remova a gordura interna entre as ripas: é ela que vai derreter e regar a carne de dentro para fora durante o assado.'
  },
  {
    id: 'costela-fogo',
    stepNumber: 2,
    sectionTitle: '3. O Fogo Indireto & Altura',
    title: '50 a 60 cm da Brasa (Calor Brando)',
    subtitle: 'Mão suporta 7 a 8 segundos na altura da grelha (120°C a 140°C)',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Braseiro estável e suave, sem chamas, posicionado sob a grelha superior.',
    paragraphs: [
      'O segredo do cozimento da costela é a estabilidade térmica. A grelha deve estar no andar mais alto da churrasqueira (entre 50 e 60 cm do leito de carvão).',
      'Mantenha uma Zona de Fogo Indireto ou calor brando onde sua mão aguente confortavelmente de 7 a 8 segundos. Adicione carvão já em brasa nas bordas para repor o calor sem produzir fumaça fuliginosa escura.'
    ],
    bullets: [
      'Altura: 50 a 60 cm acima da brasa.',
      'Teste da mão: 7 a 8 segundos suportáveis.',
      'Fumaça limpa: adicione pedaços de lenha frutífera seca (macieira ou laranjeira) para aroma defumado suave.',
      'Sem chamas: pingos de gordura não devem virar fogo direto.'
    ],
    keyRule: 'Chamas queimam o exterior antes do interior cozinhar. Se houver labareda, mova a peça para o lado imediatamente.',
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'costela-sal',
    stepNumber: 3,
    sectionTitle: '4. O Tempero Gaudério',
    title: 'Sal Grosso Abundante & Borrifada de Salmoura',
    subtitle: 'Salgar 30 minutos antes e borrifar cachaça ou água com sal',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Distribua o sal grosso uniformemente por toda a superfície de carne e osso.',
    paragraphs: [
      'O tempero tradicional gaúcho é minimalista e imbatível: sal grosso de granulação média/grossa aplicado em toda a peça cerca de 20 a 30 minutos antes do fogo.',
      'Durante as longas horas de brasa, você pode borrifar uma salmoura morna com louro e alho, ou até mesmo cachaça artesanal a cada 1 hora para manter a umidade externa e formar uma crosta crocante.'
    ],
    bullets: [
      'Dosagem: cerca de 15g a 18g de sal grosso por kg de carne.',
      'Aplicar em todas as faces, incluindo entre os ossos.',
      'Bater levemente o excesso de grãos antes de assar.'
    ],
    keyRule: 'Costela bovina de boa procedência não precisa de amaciantes químicos ou vinagres fortes.'
  },
  {
    id: 'costela-grelha-osso',
    stepNumber: 4,
    sectionTitle: '5. A Longa Jornada dos Ossos',
    title: 'Ossos Voltados para Baixo por 3,5 Horas',
    subtitle: 'O osso cozinha a carne de baixo para cima com vapor e calor suave',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A peça permanece com os ossos virados para o braseiro durante 80% do tempo total.',
    paragraphs: [
      'Coloque a costela com os OSSOS VIRADOS PARA BAIXO (em direção ao fogo) na grelha superior a 50–60 cm.',
      'Deixe assar por aproximadamente 3 a 3,5 horas sem virar. Conforme o colágeno derrete, você verá a carne encolher e se desprender das pontas dos ossos em cerca de 2 a 3 centímetros.'
    ],
    bullets: [
      'Tempo com osso para baixo: 3 a 3,5 horas.',
      'Não vire prematuramente: o osso precisa ficar bem tostado e quente.',
      'Reponha o carvão nas laterais a cada 45 minutos.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'costela-virada-douramento',
    stepNumber: 5,
    sectionTitle: '6. A Virada & Douramento',
    title: 'Virar a Carne para a Brasa (Últimos 45 min)',
    subtitle: 'Criando a crosta dourada e crocante na capa de gordura',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Vire a parte da carne e gordura para a brasa para finalizar com uma crosta caramelizada perfeita.',
    paragraphs: [
      'Quando o teste do osso for positivo (as pontas dos ossos estiverem bem expostas e um dos ossos girar facilmente ao toque), vire a peça.',
      'Mantenha a parte da carne voltada para o braseiro por 40 a 50 minutos para pururucar e dourar a gordura superficial.'
    ],
    bullets: [
      'Tempo com a carne para baixo: 40 a 50 minutos.',
      'Monitore para não queimar: a gordura vai gotejar e exigir atenção.',
      'A crosta deve ficar marrom-dourada brilhante e crocante.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'costela-ponto',
    stepNumber: 6,
    sectionTitle: '7. O Ponto & Teste do Osso',
    title: 'Temperatura Interna: 88°C a 93°C (Desmanchando)',
    subtitle: 'Colágeno totalmente liquefeito e ossos saindo limpos',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A costela perfeita desmancha com facilidade ao toque do garfo e o osso sai limpo.',
    paragraphs: [
      'Diferente dos cortes de grelha rápida como picanha e ancho, a costela é servida bem cozida e ultra macia.',
      'O termômetro culinário deve marcar entre 88°C e 93°C no centro da carne. Ao puxar um dos ossos pelas extremidades, ele deve girar e soltar da carne com esforço zero.'
    ],
    bullets: [
      'Ponto Desmanchando: 88°C a 93°C de temperatura interna.',
      'Teste do osso: o osso gira 360° ou sai completamente limpo.',
      'Textura: carne macia como manteiga, com sucos abundantes.'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'costela-descanso',
    stepNumber: 7,
    sectionTitle: '8. O Descanso Sagrado',
    title: '10 a 15 Minutos na Tábua',
    subtitle: 'Estabilização térmica e reabsorção da gelatina de colágeno',
    category: 'descanso',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Aguarde 10 minutos antes de retirar os ossos para garantir que os sucos fiquem na carne.',
    paragraphs: [
      'Após horas de fogo contínuo, as fibras da costela estão saturadas de calor. Cortar a carne imediatamente fará todo o vapor e os caldos preciosos escaparem na tábua.',
      'Deixe a costela descansar sobre a tábua de madeira por 10 a 15 minutos coberta frouxamente por papel manteiga ou alumínio.'
    ],
    bullets: [
      'Descanso: 10 a 15 minutos.',
      'Mantenha a peça inteira durante o descanso.',
      'A temperatura interna estabiliza e as fibras relaxam completamente.'
    ],
    interactiveType: 'resting_timer'
  },
  {
    id: 'costela-corte',
    stepNumber: 8,
    sectionTitle: '9. O Desossamento & Corte em Ripas',
    title: 'Puxar os Ossos & Fatiar em Tiras Suculentas',
    subtitle: 'Fatiamento transversal de 2 a 3 cm',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Puxe os ossos com a mão ou pegador e fatie a carne macia em ripas generosas.',
    paragraphs: [
      'Segure os ossos pelas pontas expostas e puxe-os para cima: eles sairão inteiros, deixando apenas o bloco de carne macia.',
      'Fatie a carne desossada em ripas de 2 a 3 cm de largura, garantindo que cada porção tenha carne suculenta e uma borda de crosta crocante.'
    ],
    bullets: [
      'Retire todos os ossos da base.',
      'Fatie em ripas transversais de 2 a 3 cm de espessura.',
      'Finalize com flor de sal ou sal grosso moído na hora.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'costela-servir',
    stepNumber: 9,
    sectionTitle: '10. A Mesa Campeira Gaúcha',
    title: 'Mandioca Amanteigada, Farofa de Ovos & Vinagrete',
    subtitle: 'Harmonizações consagradas para a costela de fogo lento',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva a costela fumegante acompanhada de mandioca amarela na manteiga de garrafa.',
    paragraphs: [
      'A costela é uma refeição rica e untuosa que pede acompanhamentos rústicos e contrastes de textura e acidez.',
      'Sirva com mandioca cozida bem macia regada com manteiga de garrafa, farofa de ovos caipiras com cebolinha e um vinagrete fresco com bastante tomate e cebola roxa.'
    ],
    bullets: [
      'Mandioca amarela cozida na manteiga.',
      'Farofa de ovos caipiras e bacon crocante.',
      'Vinagrete com acidez equilibrada para limpar o paladar.',
      'Chimichurri campeiro à base de ervas e azeite.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'costela-manifesto',
    stepNumber: null,
    sectionTitle: '11. O Manifesto da Costela Gaúcha',
    title: 'As 3 Leis Inegociáveis da Costela',
    subtitle: 'A sabedoria campeira para consagrar o seu assado',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Paciência, fogo brando e osso para baixo: a tríade sagrada do assador de costela.',
    paragraphs: [
      'Fazer uma costela perfeita não é questão de pressa, mas de respeito ao tempo da carne e à brasa. Seguindo as 3 leis fundamentais, sua costela desmanchará e renderá aplausos unânimes.'
    ],
    bullets: [
      'Lei 1: 80% do tempo com o osso para baixo — nunca tenha pressa de virar.',
      'Lei 2: Calor brando e constante a 50–60 cm — labaredas arruínam o colágeno.',
      'Lei 3: Respeite os 10 minutos de descanso antes de puxar os ossos e fatiar.'
    ],
    interactiveType: 'golden_rules'
  }
];
