import { StepItem } from '../../types';

export const CORDEIRO_STEPS: StepItem[] = [
  {
    id: 'cordeiro-intro',
    stepNumber: null,
    sectionTitle: 'Carré & Paleta de Cordeiro',
    title: 'A Nobreza dos Ovinos no Churrasco',
    subtitle: 'Com alecrim fresco, alho e ponto rosado aromático (12 a 16 min a 25 cm)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O carré de cordeiro possui ossos longos elegantes e carne nobre com sabor delicado e aromático.',
    paragraphs: [
      'O Cordeiro (especialmente o Carré Francês e a Paleta) representa o ápice da sofisticação na brasa. Por ser proveniente de animais jovens (cordeiro precoce), possui uma carne extremamente tenra, suculenta e com sabor delicado que dispensa excessos.',
      'A harmonização perfeita do cordeiro se dá com ervas frescas (alecrim, hortelã e tomilho), alho amassado e vinho branco seco. O ponto supremo do cordeiro é rigorosamente o PONTO ROSADO (56°C a 59°C no centro), onde a carne preserva sua umidade nobre e maciez amanteigada.'
    ],
    bullets: [
      'Proporção: 350g a 400g por pessoa (com osso).',
      'Marinada: Alecrim fresco, hortelã, alho, azeite e vinho branco seco.',
      'Fogo: Calor médio-forte a 25 cm da brasa.',
      'Ponto Obrigatório: Ao Ponto Rosado (56°C a 59°C no centro).'
    ],
    keyRule: 'Dica do Mestre: Nunca sirva cordeiro bem passado. Acima de 65°C a carne perde sua suculência e o sabor fica forte e ressecado.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'cordeiro-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Escolha do Carré Francês (French Rack)',
    subtitle: 'Animal jovem (precoce), ossos limpos e carne rosa clara',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Carré de cordeiro com ossos limpos (corte francês) e carne rosada brilhante.',
    paragraphs: [
      'Dê preferência ao "Carré Francês" (French Rack de 8 costeletas), no qual a ponta dos ossos já vem limpa e raspada pelo açougueiro, garantindo uma apresentação impecável.',
      'A carne do cordeiro jovem deve ser rosa-clara ou vermelho-pálido, e a gordura deve ser branca e firme. Evite carnes escuras e gordura amarelada, que indicam carneiro velho de sabor excessivamente forte.'
    ],
    bullets: [
      'Carré Francês de 8 ossos (cerca de 700g a 900g a peça).',
      'Carne com tonalidade rosa clara fresca.',
      'Gordura branca e fina cobrindo o lombo.',
      'Ossos brancos e finos (animal jovem precoce).'
    ],
    keyRule: 'Inspecione a galeria para avaliar o corte de cordeiro no açougue.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'cordeiro-carre-ossos',
        title: 'Carré Francês Limpo',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Ossos longos limpos e miolo de carne compacto e rosado.',
        whatToLookFor: ['Ossos limpos e alinhados', 'Carne rosa clara firme'],
        whatToAvoid: ['Ossos amarelados', 'Carne escura de carneiro velho']
      },
      {
        id: 'cordeiro-frescor',
        title: 'Coloração & Gordura Branca',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Gordura branca e fina sem odor rançoso.',
        whatToLookFor: ['Capa de gordura branca uniforme', 'Aroma suave e fresco'],
        whatToAvoid: ['Gordura amarela e rançosa', 'Carne acinzentada']
      }
    ]
  },
  {
    id: 'cordeiro-marinada-ervas',
    stepNumber: 1,
    sectionTitle: '2. A Marinada Aromática de Ervas',
    title: 'Alecrim, Hortelã, Vinho Branco, Alho & Azeite',
    subtitle: 'Marinar por 1 a 2 horas para perfumar e amaciar a carne',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Mistura aromática de folhas de alecrim fresco, hortelã picada, alho triturado e vinho branco.',
    paragraphs: [
      'Em uma travessa, misture: 150 ml de vinho branco seco, 4 dentes de alho amassados, 2 ramos de alecrim fresco picado, folhas de hortelã picadas, 3 colheres de azeite extravirgem, pimenta-do-reino e sal fino (12g/kg).',
      'Passe a marinada por toda a peça e deixe descansar na geladeira por 1 a 2 horas. O vinho e as ervas criam uma camada de sabor que casa perfeitamente com a nobreza da gordura ovina.'
    ],
    bullets: [
      'Alecrim e hortelã frescos picados finos.',
      'Vinho branco seco de boa acidez.',
      'Alho triturado e azeite extravirgem.',
      'Descanso de 1 a 2 horas refrigerado.'
    ],
    proTip: 'Envolva as pontas dos ossos limpos em tiras de papel alumínio antes de ir para a brasa para mantê-los brancos sem queimar.'
  },
  {
    id: 'cordeiro-fogo',
    stepNumber: 2,
    sectionTitle: '3. O Braseiro Médio-Forte a 25 cm',
    title: 'Calor Médio-Forte Controlado (3 a 4 segundos)',
    subtitle: 'Selagem ágil com espaço para cozimento suave',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Grelha a 25 cm com calor vivo constante e fumaça limpa.',
    paragraphs: [
      'Posicione a grelha a 25 cm da brasa viva em calor médio-forte (suportando de 3 a 4 segundos no teste da mão).',
      'O cordeiro necessita de selagem rápida para formar crosta dourada enquanto o centro atinge a temperatura rosada suave.'
    ],
    bullets: [
      'Altura: 25 cm da brasa.',
      'Teste da mão: 3 a 4 segundos.',
      'Zona indireta reservada para descanso térmico.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'cordeiro-selagem',
    stepNumber: 3,
    sectionTitle: '4. A Selagem do Carré Inteiro',
    title: '3 a 4 Minutos por Lado na Brasa',
    subtitle: 'Dourando a capa de gordura e o lado da carne',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sele o carré inteiro por 3 a 4 minutos de cada lado até formar uma crosta dourada aromática.',
    paragraphs: [
      'Coloque a peça inteira do carré na grelha a 25 cm com a gordura voltada para a brasa por 3 a 4 minutos até dourar intensamente.',
      'Vire e sele o outro lado por mais 3 a 4 minutos. Apoie a peça em pé por 2 minutos para selar as laterais. Se desejar, pincele a marinada de ervas durante as viradas.'
    ],
    bullets: [
      'Lado 1 (Gordura): 3 a 4 minutos.',
      'Lado 2 (Carne): 3 a 4 minutos.',
      'Laterais: 2 minutos em pé.',
      'Tempo total de grelha: 10 a 12 minutos.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'cordeiro-ponto-rosado',
    stepNumber: 4,
    sectionTitle: '5. O Ponto Rosado Perfeito',
    title: 'Temperatura Interna: 56°C a 59°C',
    subtitle: 'Centro rosa aveludado e textura ultra amanteigada',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O miolo do carré deve estar rosado uniforme de ponta a ponta.',
    paragraphs: [
      'Insira a sonda do termômetro no centro do miolo do lombo do carré. Retire a carne da churrasqueira quando atingir entre 56°C e 58°C.',
      'O miolo estará rosado, brilhante e quente, oferecendo uma experiência gastronômica inigualável que derrete na boca.'
    ],
    bullets: [
      'Malpassado: 50°C a 54°C (centro vermelho escuro).',
      'Ao Ponto Rosado (Perfeito): 56°C a 59°C (centro rosa homogêneo).',
      'Ao Ponto: 60°C a 63°C.',
      'Bem Passado: Acima de 66°C (ressecamento das fibras).'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'cordeiro-descanso',
    stepNumber: 5,
    sectionTitle: '6. O Descanso Sagrado',
    title: '5 Minutos de Repouso na Tábua',
    subtitle: 'Redistribuição dos sucos nobres antes de fatiar',
    category: 'descanso',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Aguarde 5 minutos antes de separar as costeletas para não perder os sucos na tábua.',
    paragraphs: [
      'Ao sair do braseiro, aguarde 4 a 5 minutos na tábua de corte.',
      'O descanso permite que as fibras musculares relaxem e retenham o vapor e os caldos aromáticos dentro do corte.'
    ],
    bullets: [
      'Descanso de 4 a 5 minutos.',
      'Peça mantida inteira durante o repouso.',
      'Evite cobrir hermeticamente para não amolecer a crosta.'
    ],
    interactiveType: 'resting_timer'
  },
  {
    id: 'cordeiro-corte-costeletas',
    stepNumber: 6,
    sectionTitle: '7. Fatiamento em Costeletas Individuais',
    title: 'Cortar Entre Cada Osso com Lâmina Afiada',
    subtitle: 'Costeletas individuais perfeitas com o osso para segurar',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Passe a lâmina da faca entre cada osso, criando costeletas elegantes com centro rosado.',
    paragraphs: [
      'Com a faca bem afiada, passe a lâmina rente entre cada osso do carré, separando costeletas individuais com seu respectivo osso longo.',
      'Finalize com uma chuva leve de flor de sal sobre a carne rosada exposta.'
    ],
    bullets: [
      'Corte reto e preciso entre os ossos.',
      'Uma costeleta individual por osso.',
      'Flor de sal na finalização.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'cordeiro-servir',
    stepNumber: 7,
    sectionTitle: '8. Mesa Nobre & Harmonizações',
    title: 'Geleia de Hortelã, Chimichurri Fresco & Farofa de Castanhas',
    subtitle: 'A elegância da alta gastronomia na churrasqueira',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as costeletas de cordeiro acompanhadas de geleia de hortelã e chimichurri artesanal.',
    paragraphs: [
      'O cordeiro harmoniza magnificamente com notas frescas e herbáceas.',
      'Sirva as costeletas com geleia de hortelã levemente ácida, chimichurri de ervas frescas e uma farofa rica de castanhas de caju e manteiga.'
    ],
    bullets: [
      'Geleia de hortelã refrescante.',
      'Chimichurri com salsa, orégano e azeite.',
      'Farofa crocante de castanhas.',
      'Vinho tinto encorpado (Syrah, Pinot Noir ou Tannat).'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'cordeiro-manifesto',
    stepNumber: null,
    sectionTitle: '9. O Manifesto do Cordeiro',
    title: 'As 3 Leis Sagradas do Cordeiro',
    subtitle: 'Os segredos para transformar o ovino na estrela do churrasco',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Animal jovem, marinada de vinho com ervas e ponto rosado obrigatório.',
    paragraphs: [
      'O cordeiro na brasa é uma iguaria inesquecível. Seguindo as 3 leis fundamentais, você surpreenderá até os paladares mais exigentes.'
    ],
    bullets: [
      'Lei 1: Escolha sempre carne de cordeiro jovem precoce.',
      'Lei 2: Marinar com alecrim, hortelã e vinho branco.',
      'Lei 3: Ponto Rosado a 56°C–59°C — nunca deixe passar do ponto.'
    ],
    interactiveType: 'golden_rules'
  }
];

export const ASSADO_TIRA_STEPS: StepItem[] = [
  {
    id: 'tira-intro',
    stepNumber: null,
    sectionTitle: 'Assado de Tira na Grelha',
    title: 'A Costela Rápida de Parrilla',
    subtitle: 'Fatias transversais com ossinhos (6 a 8 min em calor muito forte)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O assado de tira é o corte transversal da costela com pequenos ossos redondos e marmoreio denso.',
    paragraphs: [
      'O Assado de Tira (tira de costela / short rib transversal) é um dos cortes mais populares da cultura parrillera sul-americana. Ao contrário da costela inteira que exige 4 horas de fogo lento, o assado de tira é cortado em fatias transversais finas (1,5 cm a 2,0 cm), permitindo um preparo super ágil em brasa forte.',
      'O contato imediato da carne com os ossos redondos e a gordura entremeada carameliza em alta temperatura, criando uma explosão de sabor amanteigado e textura suculenta.'
    ],
    bullets: [
      'Proporção: 350g a 400g por pessoa (com osso).',
      'Espessura da Tira: 1,5 cm a 2,0 cm.',
      'Fogo: Calor muito forte a 15 cm da brasa (2 a 3 segundos no teste da mão).',
      'Tempo de Grelha: 3 a 4 minutos no primeiro lado + 2 a 3 minutos no segundo.',
      'Ponto Ideal: Ao Ponto para Menos (54°C a 57°C).'
    ],
    keyRule: 'Dica do Parrillero: A carne em volta dos ossinhos é a parte mais saborosa de todo o churrasco. Roer o ossinho crocante é tradição!',
    interactiveType: 'portion_calc'
  },
  {
    id: 'tira-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Seleção do Assado de Tira',
    subtitle: 'Tiras de 1,5 a 2 cm com 3 a 4 ossinhos redondos e marmoreio denso',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Tiras de costela com espessura uniforme de 2 cm e pequenos ossos redondos rodeados de gordura marmorizada.',
    paragraphs: [
      'Procure tiras serradas transversalmente com espessura homogênea de 1,5 a 2,0 cm contendo entre 3 e 5 pequenos ossos circulares.',
      'A carne deve apresentar abundante marmoreio (gordura intramuscular branca) e cor vermelho-cereja viva. Evite tiras muito finas (menos de 1 cm) que secarão no fogo antes de criar crosta.'
    ],
    bullets: [
      'Espessura: 1,5 cm a 2,0 cm de largura.',
      '3 a 4 ossinhos redondos por tira.',
      'Marmoreio rico entre as fibras.',
      'Gordura branca limpa ao redor dos ossos.'
    ],
    keyRule: 'Consulte a galeria visual para escolher o melhor assado de tira.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'tira-espessura',
        title: 'Espessura de 2 cm & Ossinhos',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Tiras serradas com uniformidade contendo ossos circulares centrais.',
        whatToLookFor: ['Espessura padrão de 1,5 a 2 cm', 'Marmoreio distribuído'],
        whatToAvoid: ['Tiras finas como folhas (menos de 1 cm)', 'Ossos com farpa de serra']
      }
    ]
  },
  {
    id: 'tira-fogo-sal',
    stepNumber: 1,
    sectionTitle: '2. Braseiro Forte & Sal de Parrilla',
    title: 'Calor Muito Forte a 15 cm & Sal Entrefino',
    subtitle: 'Salgar 2 minutos antes e levar à grelha bem quente',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Grelha de parrilla a 15 cm da brasa viva incandescente.',
    paragraphs: [
      'Aqueça a grelha a 15 cm da brasa ardente (2 a 3 segundos no teste da mão).',
      'Salpique sal de parrilla (moagem média) e pimenta-do-reino moída na hora em ambos os lados das tiras 2 minutos antes de colocar no fogo.'
    ],
    bullets: [
      'Grelha a 15 cm da brasa incandescente.',
      'Calor muito forte (2 a 3 segundos).',
      'Sal de parrilla aplicado na hora.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'tira-selagem',
    stepNumber: 2,
    sectionTitle: '3. A Selagem Relâmpago',
    title: '3 a 4 Minutos no Lado 1 + 2 a 3 Minutos no Lado 2',
    subtitle: 'Chiado intenso e caramelização rápida ao redor dos ossos',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sele as tiras rapidamente até formar marcas de grelha tostadas e gordura borbulhante.',
    paragraphs: [
      'Coloque as tiras na grelha bem quente. Deixe selar por 3 a 4 minutos no primeiro lado sem mexer até formar uma crosta crocante e dourada.',
      'Vire com pegador e asse o segundo lado por mais 2 a 3 minutos. A gordura ao redor dos ossinhos derreterá e perfumará todo o ambiente.'
    ],
    bullets: [
      'Lado 1: 3 a 4 minutos.',
      'Lado 2: 2 a 3 minutos.',
      'Vire apenas uma vez com pegador.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'tira-ponto-descanso',
    stepNumber: 3,
    sectionTitle: '4. Ponto, Descanso & Corte entre os Ossos',
    title: '54°C a 57°C, Descanso de 3 min & Fatiamento',
    subtitle: 'Fatiar separando cada ossinho individual',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie as tiras separando cada ossinho redondo para comer com as mãos.',
    paragraphs: [
      'Retire as tiras no ponto da casa (54°C a 57°C no centro) e descanse por 2 a 3 minutos na tábua.',
      'Fatie entre cada ossinho redondo com faca afiada, gerando pedaços individuais que os convidados podem degustar segurando pelo osso.'
    ],
    bullets: [
      'Ponto ideal: Ao ponto para menos (54°C a 57°C).',
      'Descanso de 2 a 3 minutos.',
      'Corte transversal entre os ossinhos.',
      'Finalizar com flor de sal.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'tira-servir',
    stepNumber: 4,
    sectionTitle: '5. Mesa de Parrilla & Chimichurri',
    title: 'Chimichurri Fresco, Salsa Criolla & Farofa',
    subtitle: 'As harmonizações autênticas da cultura de brasa',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva o assado de tira fumegante com chimichurri artesanal e salsa criolla refrescante.',
    paragraphs: [
      'Sirva o assado de tira pelando de quente com molho chimichurri fresco e salsa criolla picada.',
      'O sabor intenso da costela com osso casa com farofa crocante e pão de alho tostado.'
    ],
    bullets: [
      'Chimichurri artesanal fresco.',
      'Salsa criolla com cebola e pimentões.',
      'Farofa crocante na manteiga.',
      'Cerveja artesanal ou vinho Malbec.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'tira-manifesto',
    stepNumber: null,
    sectionTitle: '6. O Manifesto do Assado de Tira',
    title: 'As 3 Leis do Assado de Tira',
    subtitle: 'O segredo da costela rápida mais saborosa da parrilla',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Espessura correta de 2 cm, brasa ardente e roer o ossinho.',
    paragraphs: [
      'O assado de tira é sabor concentrado em minutos. Respeitando a brasa forte e o tempo rápido de grelha, seu churrasco ganha um clássico imbatível.'
    ],
    bullets: [
      'Lei 1: Espessura de 1,5 a 2 cm — evite tiras muito finas.',
      'Lei 2: Brasa ardente a 15 cm com selagem de 3 minutos por lado.',
      'Lei 3: Servir pelando de quente para degustar a carne junto ao osso.'
    ],
    interactiveType: 'golden_rules'
  }
];

export const ALCATRA_STEPS: StepItem[] = [
  {
    id: 'alcatra-intro',
    stepNumber: null,
    sectionTitle: 'Alcatra Completa & Baby Beef',
    title: 'A Nobreza e Versatilidade dos Clássicos Lares',
    subtitle: 'Miolo de Alcatra (Baby Beef) e Top Sirloin em steaks de 3 cm',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A alcatra completa abriga o miolo de alcatra (baby beef), com fibras curtas e extrema maciez.',
    paragraphs: [
      'A Alcatra é um dos cortes mais tradicionais e queridos dos domingos brasileiros. A peça completa é composta por vários subcortes nobres: o Miolo da Alcatra (Baby Beef / Coração da Alcatra), a Maminha e a Picanha (que fica no topo).',
      'O Miolo da Alcatra (Baby Beef) possui fibras musculares muito curtas, teor moderado de gordura e um sabor puro e reconfortante de carne bovina. É ideal para ser preparado em bifes grossos (steaks de 3 cm) em braseiro médio-forte.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa.',
      'Espessura: Steaks de 3,0 cm a 3,5 cm.',
      'Fogo: Calor médio-forte a 20 cm da brasa.',
      'Ponto Ideal: Ao Ponto para Menos (52°C a 55°C).'
    ],
    keyRule: 'Dica do Mestre: Por ter fibras muito curtas e menor teor de gordura entremeada, a alcatra não tolera passar do ponto. Mantenha o centro rosado.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'alcatra-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Escolha do Miolo de Alcatra (Baby Beef)',
    subtitle: 'Peça limpa, fibras curtas e coloração vermelho-cereja',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Miolo de alcatra fresco com fibras curtas e textura aveludada.',
    paragraphs: [
      'Ao comprar, peça especificamente o "Miolo da Alcatra" ou "Coração da Alcatra" (Baby Beef).',
      'A carne deve ser de vermelho vivo intenso, brilhante e elástica ao toque, com fibras finas e delicadas.'
    ],
    bullets: [
      'Miolo da Alcatra (Baby Beef) limpo sem aponeuroses.',
      'Fibras curtas e compactas.',
      'Cor vermelho rubi brilhante.',
      'Sem excesso de sebo duro.'
    ],
    keyRule: 'Consulte a galeria para avaliar o miolo da alcatra.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'alcatra-miolo',
        title: 'Miolo de Alcatra (Baby Beef)',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Bloco de carne nobre limpo pronto para o corte em medalhões.',
        whatToLookFor: ['Fibras curtas e limpas', 'Superfície uniforme'],
        whatToAvoid: ['Peça fibrosa com nervos não retirados']
      }
    ]
  },
  {
    id: 'alcatra-corte-steaks',
    stepNumber: 1,
    sectionTitle: '2. Corte dos Steaks de Baby Beef',
    title: 'Fatiar em Medalhões de 3 cm (2 Dedos Largos)',
    subtitle: 'Cortes perpendiculares para manter o miolo rosado',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Corte medalhões espessos de 3 cm para selar rapidamente sem ressecar o centro.',
    paragraphs: [
      'Fatie o miolo da alcatra em steaks de 3,0 cm a 3,5 cm de espessura.',
      'Deixe descansar por 15 minutos em temperatura ambiente antes de colocar na grelha.'
    ],
    bullets: [
      'Espessura: 3,0 cm a 3,5 cm.',
      'Corte transversal reto e uniforme.',
      'Aclimatação fora da geladeira por 15 minutos.'
    ],
    proTip: 'Nunca corte a alcatra fina como bife de frigideira: na churrasqueira, medalhões espessos garantem maciez superior.'
  },
  {
    id: 'alcatra-fogo-sal',
    stepNumber: 2,
    sectionTitle: '3. Braseiro a 20 cm & Sal de Parrilla',
    title: 'Calor Médio-Forte (3 a 4 segundos) & Sal Médio',
    subtitle: 'Salgar 2 minutos antes de grelhar',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Grelha a 20 cm da brasa incandescente.',
    paragraphs: [
      'Posicione a grelha a 20 cm da brasa em calor médio-forte (3 a 4 segundos no teste da mão).',
      'Salpique sal de parrilla e uma pitada de pimenta-do-reino 2 minutos antes de entrar na brasa.'
    ],
    bullets: [
      'Grelha a 20 cm.',
      'Calor médio-forte (3 a 4 segundos).',
      'Sal de parrilla em ambas as faces.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'alcatra-selagem',
    stepNumber: 3,
    sectionTitle: '4. A Selagem dos Medalhões',
    title: '3 a 4 Minutos por Lado',
    subtitle: 'Crosta dourada com miolo rosado e úmido',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sele 3 a 4 minutos por lado até obter uma crosta caramelizada.',
    paragraphs: [
      'Coloque os steaks de alcatra na grelha a 20 cm e asse por 3 a 4 minutos sem mexer.',
      'Vire com pegador e asse o segundo lado por mais 3 minutos. Retire ao atingir 53°C a 55°C de temperatura interna.'
    ],
    bullets: [
      'Lado 1: 3 a 4 minutos.',
      'Lado 2: 3 minutos.',
      'Ponto da casa perfeito.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'alcatra-descanso-corte',
    stepNumber: 4,
    sectionTitle: '5. Descanso & Fatiamento Transversal',
    title: '4 Minutos de Repouso & Fatias Finas de 1 cm',
    subtitle: 'Fatiar transversalmente contra a fibra',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie em tiras transversais de 1 cm com faca bem afiada.',
    paragraphs: [
      'Deixe os steaks descansarem por 3 a 4 minutos na tábua para que os sucos assentem.',
      'Fatie transversalmente em tiras de 1 cm e finalize com flor de sal na tábua.'
    ],
    bullets: [
      'Descanso de 4 minutos.',
      'Fatias transversais de 1 cm.',
      'Finalizar com flor de sal.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'alcatra-servir',
    stepNumber: 5,
    sectionTitle: '6. Mesa Completa & Acompanhamentos',
    title: 'Arroz Carreteiro, Vinagrete & Farofa de Ovos',
    subtitle: 'O autêntico almoço de domingo com sabor de casa',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva os medalhões suculentos de alcatra com arroz carreteiro e farofa de ovos.',
    paragraphs: [
      'A alcatra é o coração do churrasco familiar.',
      'Sirva com arroz carreteiro bem temperado, farofa de ovos caipiras e vinagrete clássico com cheiro-verde.'
    ],
    bullets: [
      'Arroz carreteiro com carne de sol ou sobras de churrasco.',
      'Farofa úmida de ovos caipiras.',
      'Vinagrete fresco.',
      'Cerveja ou refrigerante gelado.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'alcatra-manifesto',
    stepNumber: null,
    sectionTitle: '7. O Manifesto da Alcatra',
    title: 'As 3 Leis da Alcatra Perfeita',
    subtitle: 'O segredo da maciez e do ponto certo',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Steaks grossos de 3 cm, brasa média-forte e ponto rosado para menos.',
    paragraphs: [
      'A alcatra bem preparada é suculência e conforto garantidos. Respeitando a espessura e o ponto rosado, seu churrasco será um sucesso.'
    ],
    bullets: [
      'Lei 1: Cortar medalhões espessos de 3 cm — nunca bifes finos.',
      'Lei 2: Brasa média-forte a 20 cm por 3 a 4 minutos por lado.',
      'Lei 3: Ponto rosado a 53°C–56°C para preservar a maciez das fibras curtas.'
    ],
    interactiveType: 'golden_rules'
  }
];
