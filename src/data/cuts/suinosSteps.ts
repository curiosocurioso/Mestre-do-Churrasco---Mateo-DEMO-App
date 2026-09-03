import { StepItem } from '../../types';

export const COSTELINHA_SUINA_STEPS: StepItem[] = [
  {
    id: 'costelinha-intro',
    stepNumber: null,
    sectionTitle: 'Costelinha Suína na Brasa',
    title: 'Maciez Suculenta com Crosta Dourada e Limão',
    subtitle: 'Costelinha de ripa com tempero brasileiro (45 a 60 min a 35 cm)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A costelinha de porco combina carne macia e aromática que solta facilmente dos ossos finos.',
    paragraphs: [
      'A Costelinha Suína é um dos pratos mais queridos do churrasco brasileiro. Diferente do estilo americano (que leva molho barbecue adocicado e 6 horas de defumação pesada), o estilo clássico brasileiro valoriza a carne dourada na brasa, aromatizada com limão taiti, alho, cachaça e ervas.',
      'O segredo do preparo é assar com os ossos virados para o braseiro a 35 cm de altura por cerca de 35 minutos. O osso protege a carne delicada e conduz o calor suavemente; nos 15 minutos finais, vira-se a carne para baixo para criar uma casquinha dourada e crocante irresistível.'
    ],
    bullets: [
      'Proporção: 350g a 400g de carne crua com osso por pessoa.',
      'Altura da Grelha: 35 cm a 40 cm (calor médio-brando de 5 a 6 segundos).',
      'Tempo de Fogo: 45 a 60 minutos (35 min osso para baixo + 20 min carne para baixo).',
      'Ponto Seguro: 75°C de temperatura interna no centro da carne.'
    ],
    keyRule: 'Dica do Mestre: Retire a membrana fina dos ossos antes de temperar para que o alho e o limão penetrem profundamente na carne.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'costelinha-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Escolha da Costelinha Perfeita',
    subtitle: 'Ripa carnuda, ossos retos e gordura branca bem distribuída',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Peça inteira de costelinha com generosa camada de carne sobre os ossos.',
    paragraphs: [
      'Ao escolher a costelinha no açougue, prefira peças inteiras de 1,2 kg a 1,8 kg com boa espessura de carne por cima dos ossos (pelo menos 2 a 3 cm de carne).',
      'Evite peças "peladas" onde os ossos já estão aparentes e ressecados. A carne suína fresca deve ter coloração rosada clara e a gordura deve ser branca e firme.'
    ],
    bullets: [
      'Peso Ideal: 1,2 kg a 1,8 kg por peça inteira.',
      'Carne Abundante: Pelo menos 2 cm de carne cobrindo os ossos.',
      'Cor da Carne: Rosa claro brilhante e textura úmida.',
      'Gordura: Branca e limpa, sem manchas acinzentadas.'
    ],
    keyRule: 'Consulte a galeria visual para avaliar a qualidade da costelinha suína.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'costelinha-carnuda',
        title: 'Espessura de Carne & Ossos',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Costelinha carnuda com ossos retos e espaçamento regular.',
        whatToLookFor: ['Camada generosa de carne sobre os ossos', 'Ossos finos e paralelos'],
        whatToAvoid: ['Peça esquelética com ossos expostos', 'Ossos quebrados']
      },
      {
        id: 'costelinha-frescor',
        title: 'Coloração & Frescor',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Carne suína de procedência com tom rosa claro e aroma fresco.',
        whatToLookFor: ['Rosa perolado suave', 'Gordura branca'],
        whatToAvoid: ['Carne escura ou ressecada nas bordas', 'Cheiro forte desagradável']
      }
    ]
  },
  {
    id: 'costelinha-membrana-limpeza',
    stepNumber: 1,
    sectionTitle: '2. Retirada da Membrana',
    title: 'Puxar a Pele Prateada dos Ossos',
    subtitle: 'Usar papel toalha para retirar a película traseira com facilidade',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Segure a ponta da membrana com papel toalha e puxe em movimento contínuo.',
    paragraphs: [
      'Na parte de trás da costelinha, sobre os ossos, há uma membrana transparente e dura (a pleura). Com a ponta de uma faca de manteiga, levante a borda da membrana no primeiro osso.',
      'Segure a ponta solta com um pedaço de papel toalha (que evita escorregar) e puxe de ponta a ponta. Retirar essa membrana garante que a carne fique macia e solte facilmente dos ossos após o cozimento.'
    ],
    bullets: [
      'Levante a ponta da membrana no osso da extremidade.',
      'Use papel toalha para ter tração e puxar tudo de uma vez.',
      'Facilita a absorção do tempero e o descolamento da carne.'
    ],
    proTip: 'Se a membrana estiver muito presa, faça pequenos cortes em xadrez sobre cada osso para não prender a carne.'
  },
  {
    id: 'costelinha-tempero',
    stepNumber: 2,
    sectionTitle: '3. O Tempero Brasileiro',
    title: 'Limão Taiti, Alho, Páprica Defumada & Cachaça',
    subtitle: 'Marinar por 30 a 60 minutos antes do fogo',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Mistura aromática de alho triturado, suco de limão fresco, páprica e sal grosso.',
    paragraphs: [
      'Prepare o clássico tempero caipira: 4 dentes de alho triturados, suco de 2 limões taiti, 1 colher de sobremesa de páprica defumada, pimenta-do-reino moída, sal (12g/kg) e 1 dose de cachaça branca.',
      'Esfregue o tempero em toda a peça e deixe marinar por 30 a 60 minutos na geladeira. A acidez do limão e da cachaça quebra as fibras superficiais e perfuma a gordura suína.'
    ],
    bullets: [
      'Suco de 2 limões taiti + alho triturado.',
      'Páprica defumada para cor dourada apetitosa.',
      'Dose de cachaça artesanal para quebrar a gordura.',
      'Sal fino ou de parrilla (12g por kg).'
    ],
    keyRule: 'Não deixe passar de 2 horas na marinada cítrica para o limão não "cozinhar" a carne crua precocemente.'
  },
  {
    id: 'costelinha-fogo',
    stepNumber: 3,
    sectionTitle: '4. O Braseiro Médio a 35 cm',
    title: 'Calor Médio-Brando (5 a 6 segundos)',
    subtitle: 'Sem labaredas para cozinhar a carne suína com suavidade',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Grelha posicionada a 35 cm com calor suave e fumaça limpa.',
    paragraphs: [
      'A costelinha suína requer fogo médio-brando a 35–40 cm do braseiro. No teste da mão, você deve conseguir suportar o calor por 5 a 6 segundos.',
      'Como a gordura suína derrete intensamente, posicione a carne longe do foco direto de labaredas ou mantenha uma zona de escape na churrasqueira.'
    ],
    bullets: [
      'Altura da grelha: 35 cm a 40 cm.',
      'Teste da mão: 5 a 6 segundos confortáveis.',
      'Evite chamas diretas: gordura pingando gera fumaça fuliginosa.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'costelinha-grelha-osso',
    stepNumber: 4,
    sectionTitle: '5. A Cocção com Osso para Baixo',
    title: '30 a 35 Minutos com os Ossos para a Brasa',
    subtitle: 'O osso conduz o calor cozinhando a carne de baixo para cima',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Mantenha os ossos voltados para a brasa durante os primeiros 35 minutos de assado.',
    paragraphs: [
      'Posicione a costelinha com os ossos virados para o braseiro a 35 cm de altura.',
      'Deixe assar por 30 a 35 minutos sem virar. O calor subirá pelos ossos, cozinhando a carne suavemente enquanto preserva todos os sucos internos.'
    ],
    bullets: [
      'Tempo com o osso para baixo: 30 a 35 minutos.',
      'A carne começará a encolher e expor as pontinhas dos ossos.',
      'Regue levemente com a marinada reservada a cada 15 minutos.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'costelinha-virada-dourada',
    stepNumber: 5,
    sectionTitle: '6. A Virada & Douramento',
    title: 'Virar a Carne para Baixo por 15 a 20 Minutos',
    subtitle: 'Criando a crosta dourada e caramelizada com a páprica',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Vire a parte da carne para o braseiro para obter uma crosta dourada, brilhante e crocante.',
    paragraphs: [
      'Quando os ossos estiverem bem tostados e a carne firme, vire a costelinha com a carne voltada para a brasa.',
      'Asse por mais 15 a 20 minutos para que a gordura superficial toste e caramelize, formando uma crosta dourada e crocante com o perfume da páprica e do alho.'
    ],
    bullets: [
      'Tempo com a carne para baixo: 15 a 20 minutos.',
      'Monitore de perto para não queimar o alho da marinada.',
      'A crosta deve ficar dourada-avermelhada brilhante.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'costelinha-ponto-seguro',
    stepNumber: 6,
    sectionTitle: '7. O Ponto Seguro & Descolamento',
    title: 'Temperatura Interna: 75°C no Centro',
    subtitle: 'Carne suína macia, totalmente cozida e soltando do osso',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A carne deve soltar do osso com leve tração e estar suculenta e úmida.',
    paragraphs: [
      'O ponto correto da costelinha suína é atingido a 75°C de temperatura interna. A carne deve estar completamente cozida, sem traços avermelhados de carne crua.',
      'Ao fazer uma leve torção em um dos ossos centrais, a carne deve se desprender com extrema facilidade.'
    ],
    bullets: [
      'Temperatura segura: 74°C a 76°C.',
      'Os ossos retraem cerca de 1 cm em relação à carne.',
      'Carne macia que se desprende do osso na mordida.'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'costelinha-descanso-corte',
    stepNumber: 7,
    sectionTitle: '8. Descanso & Corte em Ripas',
    title: '5 Minutos de Repouso & Corte Osso a Osso',
    subtitle: 'Fatiar individualmente entre cada osso com faca afiada',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie a costelinha entre cada osso para servir porções individuais fáceis de segurar com a mão.',
    paragraphs: [
      'Deixe a costelinha descansar na tábua por 5 minutos antes de fatiar para que a suculência interna se estabilize.',
      'Vire a peça com os ossos para cima na tábua (facilitando a visualização) e passe a faca entre cada osso, criando ripas individuais perfeitas para comer com as mãos.'
    ],
    bullets: [
      'Descanso: 5 minutos na tábua.',
      'Corte de precisão entre cada ossinho.',
      'Sirva fumegante com gomos frescos de limão caipira.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'costelinha-servir',
    stepNumber: 8,
    sectionTitle: '9. Mesa Caipira & Acompanhamentos',
    title: 'Gomos de Limão, Farofa de Banana & Vinagrete',
    subtitle: 'As harmonizações perfeitas para a carne suína na brasa',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as ripas douradas acompanhadas de farofa crocante de banana da terra e limão.',
    paragraphs: [
      'A gordura rica e doce da costelinha suína pede acompanhamentos cítricos e farofas aromáticas.',
      'Sirva com fartos gomos de limão taiti ou cravo espremidos na hora, farofa de banana-da-terra com bacon e cebola dourada, e um vinagrete bem temperado.'
    ],
    bullets: [
      'Limão taiti ou caipira para espremer sobre a carne.',
      'Farofa agridoce de banana-da-terra e bacon.',
      'Mandioca cozida ou batata doce na brasa.',
      'Caipirinha tradicional de cachaça e limão.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'costelinha-manifesto',
    stepNumber: null,
    sectionTitle: '10. O Manifesto da Costelinha Suína',
    title: 'As 3 Leis da Costelinha Perfeita',
    subtitle: 'A regra de ouro dos mestres assadores de porco',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Membrana retirada, osso para baixo e crosta dourada no final: perfeição garantida.',
    paragraphs: [
      'A costelinha suína brasileira é a combinação de paciência no osso e crocância final. Seguindo as 3 leis fundamentais, seu churrasco terá uma das carnes mais elogiadas do dia.'
    ],
    bullets: [
      'Lei 1: Sempre retire a membrana dos ossos antes de temperar.',
      'Lei 2: Asse 35 minutos com o osso para baixo antes de virar a carne.',
      'Lei 3: Atinja 75°C de temperatura interna para maciez com segurança.'
    ],
    interactiveType: 'golden_rules'
  }
];

export const PANCETA_STEPS: StepItem[] = [
  {
    id: 'panceta-intro',
    stepNumber: null,
    sectionTitle: 'Panceta / Barriga Pururuca',
    title: 'A Crocância Estaladiça Suprema na Brasa',
    subtitle: 'Carne macia e úmida com couro estalando como vidro',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A panceta (barriga de porco fresca com couro) é famosa pela combinação de carne suculenta e pururuca ultra crocante.',
    paragraphs: [
      'A Panceta na brasa (barriga suína com pele) é um dos maiores espetáculos do churrasco brasileiro. O objetivo supremo é duplo: cozinhar lentamente as camadas de carne e toucinho até ficarem extremamente macias e transformar o couro duro e rígido em uma pururuca inflada, leve, estaladiça e crocante que quebra como vidro.',
      'A técnica infalível da pururuca na brasa envolve 2 etapas cruciais: primeiro a desidratação e cocção da carne a 40 cm com a pele virada para CIMA (cerca de 40 minutos); depois, o choque térmico final aproximando o couro a 15 cm da brasa ardente para formar as bolhas crocantes em minutos.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa.',
      'Fase 1: 40 minutos a 40 cm (carne para baixo / pele para cima).',
      'Fase 2 (Pururuca): 5 a 8 minutos a 15 cm (pele para baixo com brasa forte).',
      'Ponto Seguro: 75°C de temperatura interna.'
    ],
    keyRule: 'Dica de Ouro da Pururuca: O couro DEVE estar 100% seco antes de entrar no fogo. Qualquer umidade na pele impede o estouro das bolhas de pururuca.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'panceta-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Escolha da Barriga Suína com Couro',
    subtitle: 'Espessura de 3 a 4 cm, camadas equilibradas e pele limpa',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Panceta em manta ou tiras largas com camadas simétricas de carne e gordura sob o couro liso.',
    paragraphs: [
      'Escolha uma peça de panceta fresca com espessura entre 3 cm e 4 cm. Peças muito finas ressecam antes de pururucar o couro; peças muito grossas demoram a cozinhar o miolo.',
      'A pele deve estar lisa, uniforme e completamente limpa (sem pelos ou cortes profundos). A seção transversal deve mostrar camadas nítidas de carne magra intercaladas com gordura branca firme.'
    ],
    bullets: [
      'Manta ou Tiras: Peça de 1,5 kg a 2,5 kg com 3 a 4 cm de altura.',
      'Pele Íntegra: Couro liso e contínuo sem cortes que quebrem a pururuca.',
      'Camadas Simétricas: 50% carne magra e 50% gordura branca de toucinho.',
      'Frescor: Tom rosado brilhante sem odor forte.'
    ],
    keyRule: 'Inspecione a galeria para reconhecer a melhor panceta para pururucar.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'panceta-camadas',
        title: 'Camadas de Carne & Toucinho',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Faixas alternadas de carne magra rosada e gordura branca sob o couro.',
        whatToLookFor: ['Equilíbrio entre carne e toucinho', 'Espessura de 3 a 4 cm'],
        whatToAvoid: ['Peça puramente de gordura sem carne', 'Couro rasgado']
      },
      {
        id: 'panceta-couro',
        title: 'Couro Liso & Limpo',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Pele uniforme e livre de pelos para estourar a pururuca por igual.',
        whatToLookFor: ['Pele lisa e firme', 'Superfície sem perfurações profundas'],
        whatToAvoid: ['Couro com cerdas e pelos', 'Manchas escuras']
      }
    ]
  },
  {
    id: 'panceta-preparo-couro',
    stepNumber: 1,
    sectionTitle: '2. O Segredo do Couro Seco & Microfuros',
    title: 'Secagem Absoluta, Furinhos & Sal fino / Álcool',
    subtitle: 'Técnica profissional para garantir a pururuca em 100% da pele',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Faça dezenas de microfuros superficiais no couro e seque com papel toalha antes de temperar.',
    paragraphs: [
      'Seque muito bem a pele da panceta com várias folhas de papel toalha até não restar nenhuma gota de umidade.',
      'Com a ponta de um garfo de churrasco ou estilete, faça dezenas de pequenos furos superficiais na pele (sem atravessar para a carne). Pincele algumas gotas de cachaça ou vinagre na pele e esfregue uma camada fina de sal fino. Essa combinação resseca a queratina do couro, preparando-o para estourar na brasa.'
    ],
    bullets: [
      'Seque a pele exaustivamente com papel toalha.',
      'Faça dezenas de microfuros no couro para o vapor expandir.',
      'Pincele gotas de cachaça branca e sal fino apenas sobre o couro.',
      'Tempere a parte da carne com sal grosso, alho e pimenta-do-reino.'
    ],
    proTip: 'Nunca coloque limão sobre o couro: o ácido umedece a pele e impede a pururuca. Coloque limão apenas na hora de comer.'
  },
  {
    id: 'panceta-fogo-indireto',
    stepNumber: 2,
    sectionTitle: '3. A Cocção a 40 cm (Pele para Cima)',
    title: '35 a 45 Minutos com a Carne para a Brasa',
    subtitle: 'Cozinhar o miolo e desidratar o couro com o calor ascendente',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Posicione a peça com a carne para baixo e o couro para cima a 40 cm da brasa.',
    paragraphs: [
      'Coloque a panceta na grelha superior (40 cm do fogo) com a CARNE VIRADA PARA BAIXO e a PELE PARA CIMA em calor brando-médio.',
      'Deixe assar por 35 a 45 minutos. O calor suave cozinha a carne e a gordura enquanto o ar quente ascendente desidrata a pele, deixando-a esticada, translúcida e rija como uma casca de tambor.'
    ],
    bullets: [
      'Grelha a 40 cm em calor brando-médio.',
      'Pele sempre voltada para CIMA durante esta fase.',
      'Tempo: 35 a 45 minutos até o couro ficar rijo e seco.',
      'A carne atingirá cerca de 70°C internamente.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'panceta-choque-pururuca',
    stepNumber: 3,
    sectionTitle: '4. O Choque Térmico da Pururuca',
    title: 'Virar a Pele para Baixo a 15 cm em Brasa Viva',
    subtitle: '5 a 8 minutos de calor ardente com estalos sonoros de pururuca',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Aproxime o couro da brasa forte: o óleo ferve e a pele infla em milhares de microbolhas estaladiças.',
    paragraphs: [
      'Abaixe a grelha para 15 cm ou ative um braseiro bem quente com carvão incandescente. Vire a panceta com a PELE VIRADA PARA A BRASA.',
      'Em poucos segundos, você começará a ouvir estalos e pipocos: o couro inflará formando bolhas douradas e crocantes em toda a extensão. Mova a peça caso alguma labareda se levante para não queimar as bolhas.'
    ],
    bullets: [
      'Grelha a 15 cm em calor muito forte.',
      'Pele para BAIXO por 5 a 8 minutos.',
      'Ouça os estalos: a pele infla e clareia formando pururuca.',
      'Desloque a peça caso surja fogo direto da gordura pingando.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'panceta-ponto-crocancia',
    stepNumber: 4,
    sectionTitle: '5. O Ponto da Pururuca Perfeita',
    title: 'Couro Inflado, Quebradiço & Carne Suculenta',
    subtitle: 'Passe as costas da faca na pele para ouvir o som característico',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A pele deve estar 100% pururucada, dourada e crocante como uma casquinha de vidro.',
    paragraphs: [
      'Retire a peça da churrasqueira quando toda a extensão do couro estiver coberta de bolhas douradas. Passe as costas da faca sobre a pele: o som deve ser áspero e estaladiço ("tuc-tuc").',
      'A carne interna estará suculenta e úmida, a gordura amanteigada e o couro completamente crocante.'
    ],
    bullets: [
      'Pele 100% inflada em microbolhas.',
      'Som oco e crocante ao raspar com a faca.',
      'Temperatura interna segura de 75°C.'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'panceta-descanso-corte',
    stepNumber: 5,
    sectionTitle: '6. Descanso & Corte em Tiras e Cubos',
    title: '5 Minutos de Repouso & O Corte do "CROC"',
    subtitle: 'Cortar com a pele virada para baixo na tábua',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie a panceta em cubos ou tiras generosas de 2 cm com faca pesada de corte contínuo.',
    paragraphs: [
      'Aguarde 4 a 5 minutos antes de fatiar para que o couro esfrie ligeiramente e endureça em sua textura máxima de pururuca.',
      'Coloque a peça na tábua com o COURO VIRADO PARA BAIXO (ou corte com a ponta da faca pressionando firme de cima para baixo). Fatie em tiras de 2 cm ou cubos generosos. O som do corte é um croc estrondoso inconfundível.'
    ],
    bullets: [
      'Descanso de 4 a 5 minutos na tábua.',
      'Corte de pressão com faca de lâmina pesada.',
      'Porções em tiras de 2 cm ou cubos de boteco.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'panceta-servir',
    stepNumber: 6,
    sectionTitle: '7. Mesa de Boteco & Petisco Nobre',
    title: 'Gomos de Limão Caipira, Cachaça Artesanal & Farofa Crocante',
    subtitle: 'O maior clássico das rodas de amigos no churrasco brasileiro',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva os cubos de panceta pururuca fumegantes com fatias de limão caipira espremido.',
    paragraphs: [
      'Sirva a panceta pururuca imediatamente enquanto a pele mantém sua crocância estaladiça máxima.',
      'Acompanhe com muitos gomos de limão caipira/cravo para espremer sobre os cubos de carne, uma dose de cachaça de alambique e farofa de mandioca tostada na manteiga.'
    ],
    bullets: [
      'Limão caipira ou taiti espremido na hora.',
      'Farofa crocante com cebola tostada.',
      'Molho de pimenta caseiro com azeite.',
      'Cerveja gelada ou caipirinha de limão.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'panceta-manifesto',
    stepNumber: null,
    sectionTitle: '8. O Manifesto da Panceta Pururuca',
    title: 'As 3 Leis Sagradas da Pururuca',
    subtitle: 'O segredo da pele de vidro e da carne macia',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Pele seca, cozimento indireto inicial e choque térmico ardente no final.',
    paragraphs: [
      'Fazer a pururuca perfeita é pura física de churrasco. Respeitando a secagem inicial do couro e o choque de brasa viva, sua panceta será aclamada por todos.'
    ],
    bullets: [
      'Lei 1: A pele deve estar 100% seca e furada antes de entrar no fogo.',
      'Lei 2: Asse 40 minutos com a carne para baixo antes de tocar o couro na brasa.',
      'Lei 3: Choque térmico forte no final para estourar a pururuca por completo.'
    ],
    interactiveType: 'golden_rules'
  }
];
