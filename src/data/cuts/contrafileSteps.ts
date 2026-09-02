import { StepItem } from '../../types';

export const CONTRAFILE_ANCHO_STEPS: StepItem[] = [
  {
    id: 'contrafile-intro',
    stepNumber: null,
    sectionTitle: 'Contrafilé, Bife Ancho & Bife de Chorizo',
    title: 'Os Reis da Parrilla e do Marmoreio',
    subtitle: 'Steaks nobres de 3,5 cm (350g a 450g) em calor muito forte',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O contrafilé nobre se divide no Bife Ancho dianteiro (com seu clássico olho de gordura) e o Chorizo traseiro (com capa lateral).',
    paragraphs: [
      'O Contrafilé é a coluna vertebral dos grandes churrascos do mundo. No corte dianteiro temos o consagrado Bife Ancho (Ribeye / Entrecôte), famoso pelo seu olho de gordura central e a cobiçada "ceja" (Spinalis Dorsi); no corte traseiro temos o Bife de Chorizo (New York Strip), marcado por sua capa lateral de gordura espessa e sabor concentrado.',
      'O preparo perfeito do contrafilé exige bifes grossos (mínimo de 2 a 3 dedos) e brasa muito forte a 15 cm da grelha para criar uma crosta escura e caramelizada (Reação de Maillard) enquanto o centro permanece rosado e saturado de sucos.'
    ],
    bullets: [
      'Proporção: 300g a 350g por pessoa (steaks individuais de 350g a 450g).',
      'Espessura do Steak: Rigorosamente 3,0 cm a 4,0 cm (2 a 3 dedos largos).',
      'Fogo: Calor muito forte a 15 cm (2 a 3 segundos no teste da mão).',
      'Ponto Ideal: Ao Ponto para Menos (52°C a 55°C).'
    ],
    keyRule: 'Dica do Mestre Parrillero: Bife fino resseca na brasa. Para obter a crosta dourada e o centro rosado, a espessura de 3,5 cm é inegociável.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'contrafile-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Escolha: Ancho vs Chorizo & Marmoreio',
    subtitle: 'Identificando o olho de gordura, a ceja e veios intramusculares',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Bife Ancho com alta concentração de marmoreio e a ceja bem destacada no topo.',
    paragraphs: [
      'Ao comprar, decida entre o Bife Ancho (mais marmorizado, suculento e macio, com o miolo e a ceja separados pela gordura) ou o Bife de Chorizo (mais firme, com sabor bovino pronunciado e capa de gordura externa contínua).',
      'Procure por marmoreio fino (pontos e veios brancos entre as fibras vermelhas). O marmoreio derrete durante a selagem e irriga a carne de dentro para fora.'
    ],
    bullets: [
      'Bife Ancho (Dianteiro): Olho de gordura central e ceja macia no topo.',
      'Bife de Chorizo (Traseiro): Capa de gordura uniforme de 1 a 1,5 cm na lateral.',
      'Marmoreio Grau 3 a 5+: Veios finos de gordura intramuscular.',
      'Cor: Vermelho rubi vivo, sem áreas escuras ou desidratadas.'
    ],
    keyRule: 'Inspecione a galeria visual para identificar as características dos cortes nobres do contrafilé.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'ancho-marmoreio',
        title: 'Bife Ancho & Ceja (Spinalis)',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'O Ancho possui o miolo central e a ceja superior, unidos pelo olho de gordura marmorizado.',
        whatToLookFor: ['Ceja espessa e bem definida', 'Marmoreio distribuído', 'Espessura de 3 a 4 cm'],
        whatToAvoid: ['Ceja decepada ou retirada', 'Peça excessivamente magra sem gordura entremeada']
      },
      {
        id: 'chorizo-capa',
        title: 'Bife de Chorizo & Capa Lateral',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'O Chorizo apresenta capa contínua de gordura branca na lateral e carne homogênea.',
        whatToLookFor: ['Capa lateral de gordura branca de 1 cm', 'Fibras curtas e compactas'],
        whatToAvoid: ['Gordura amarela e dura', 'Bifes finos de 1 cm cortados em máquina']
      },
      {
        id: 'qualidade-carne',
        title: 'Frescor & Brilho Natural',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Superfície com umidade natural e brilho fresco, sem odor forte.',
        whatToLookFor: ['Superfície úmida brilhante', 'Toque elástico e firme'],
        whatToAvoid: ['Odor rançoso', 'Líquido leitoso na embalagem']
      }
    ]
  },
  {
    id: 'contrafile-corte-steaks',
    stepNumber: 1,
    sectionTitle: '2. Porcionamento dos Steaks',
    title: 'Corte em Steaks de 2 a 3 Dedos (3,5 cm)',
    subtitle: 'Medalhões generosos para garantir o miolo suculento',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie a peça inteira em steaks generosos de 3,5 cm com lâmina bem afiada.',
    paragraphs: [
      'Se você comprou a peça inteira, utilize uma faca de corte lisa e longa para porcionar steaks de 3,5 a 4,0 cm de espessura (cerca de 350g a 450g por bife).',
      'Faça cortes firmes e perpendiculares à peça. Retire os steaks da refrigeração 20 minutos antes de assar para que atinjam a temperatura ambiente e não esfriem a grelha.'
    ],
    bullets: [
      'Espessura padrão: 3,5 cm (2 a 3 dedos de largura).',
      'Corte reto e firme sem serrilhar a carne.',
      'Descanso de 20 minutos fora da geladeira antes de entrar na brasa.'
    ],
    proTip: 'Carne gelada ao entrar na grelha queima por fora e fica fria/crua no centro. Aclimatar a carne à temperatura ambiente é indispensável.'
  },
  {
    id: 'contrafile-fogo',
    stepNumber: 2,
    sectionTitle: '3. O Braseiro Ardente a 15 cm',
    title: 'Calor Muito Forte & Reação de Maillard',
    subtitle: 'Mão suporta no máximo 2 a 3 segundos na altura da grelha',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Brasa incandescente bem consolidada, grelha de ferro ou inox pré-aquecida por 10 minutos.',
    paragraphs: [
      'O contrafilé necessita de choque térmico intenso. Aqueça a grelha a 15 cm da brasa incandescente durante 10 minutos antes de colocar a carne.',
      'O contato da carne com o metal quente deve produzir um chiado estridente imediato, iniciando a caramelização dos aminoácidos e açúcares naturais da carne.'
    ],
    bullets: [
      'Altura da grelha: 15 cm da brasa viva.',
      'Teste da mão: 2 a 3 segundos no máximo.',
      'Pré-aquecimento da grelha: 10 minutos para selagem instantânea.',
      'Zona de escape: Mantenha um canto da churrasqueira com menos brasa.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'contrafile-sal',
    stepNumber: 3,
    sectionTitle: '4. O Tempero de Parrilla',
    title: 'Sal de Parrilla & Pimenta-do-Reino Moída',
    subtitle: 'Salgar 2 minutos antes da grelha para máxima crosta',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sal de moagem média salpicado generosamente nos dois lados e nas bordas de gordura.',
    paragraphs: [
      'O melhor tempero para o ancho e chorizo é o sal de parrilla (sal entrefino). Seus grãos médios aderem uniformemente à superfície sem ressecar o interior.',
      'Salpique o sal e uma pitada de pimenta-do-reino preta moída na hora cerca de 2 minutos antes do bife tocar na grelha. Salgue também a borda de gordura lateral.'
    ],
    bullets: [
      'Dosagem: cerca de 10g a 12g de sal por kg.',
      'Aplique em ambas as faces e nas laterais dos steaks.',
      'Pimenta-do-reino preta moída grossa realça as notas tostadas.'
    ],
    keyRule: 'Nunca use sal fino de cozinha em steaks de grelha rápida: ele desidrata a carne e queima precocemente.'
  },
  {
    id: 'contrafile-selagem',
    stepNumber: 4,
    sectionTitle: '5. A Selagem dos Steaks',
    title: '3 a 4 Minutos por Lado com Marcação de Grelha',
    subtitle: 'Não mexa na carne durante os primeiros 3 minutos',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A crosta dourada se forma nos primeiros 3 minutos de contato ininterrupto com o metal quente.',
    paragraphs: [
      'Coloque o steak na grelha e não mova a peça nos primeiros 3 minutos. Esse contato contínuo permite a formação da crosta crocante e evita que a carne grude.',
      'Vire o steak uma única vez com pegador (nunca espete com garfo) e asse o segundo lado por mais 3 minutos. Para finalizar o Chorizo, apoie a lateral da gordura na grelha por 1 minuto para tostar e pururucar a borda.'
    ],
    bullets: [
      'Lado 1: 3 a 4 minutos em calor direto forte.',
      'Lado 2: 3 a 4 minutos em calor direto forte.',
      'Borda de gordura: 1 minuto em pé para tostar a lateral.',
      'Use pegador de pinça (nunca garfo perfurante).'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'contrafile-ponto',
    stepNumber: 5,
    sectionTitle: '6. O Ponto Ideal & Doneness',
    title: 'Retirar com 52°C a 55°C (Ponto para Menos)',
    subtitle: 'O centro rosado e suculento é a assinatura do contrafilé',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Centro rosa intenso e brilhante, bordas tostadas crocantes e gordura derretida.',
    paragraphs: [
      'Insira a sonda do termômetro no centro geométrico do bife. Para o ancho e chorizo, o ponto supremo é o "Ao Ponto para Menos" (retirada a 52°C–54°C).',
      'Nessa temperatura, a gordura do marmoreio atinge o ponto de fusão perfeito (45°C a 50°C), derretendo na boca sem deixar sensação de gordura crua, e as fibras preservam 100% de sua maciez elástica.'
    ],
    bullets: [
      'Malpassada: 48°C a 51°C (centro vermelho escuro, textura sedosa).',
      'Ao Ponto para Menos (Ideal): 52°C a 55°C (centro rosa brilhante, super suculento).',
      'Ao Ponto: 56°C a 59°C (centro rosa claro).',
      'Bem Passada: Acima de 64°C (fibras enrijecidas e gordura expulsa).'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'contrafile-descanso',
    stepNumber: 6,
    sectionTitle: '7. O Descanso Sagrado',
    title: '4 Minutos na Tábua de Madeira',
    subtitle: 'Estabilização térmica e retenção completa dos sucos nobres',
    category: 'descanso',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Aguarde 4 minutos antes de fatiar para que a mioglobina e os caldos voltem a se fixar nas fibras.',
    paragraphs: [
      'O choque do calor ardente empurra a umidade para o centro do bife. Se você cortar o bife imediatamente ao sair do fogo, perderá até 30% do peso em caldo escorrendo na tábua.',
      'Deixe o steak repousar sobre a tábua por 3 a 4 minutos. A temperatura subirá 2°C no centro e os sucos se redistribuirão perfeitamente em cada fibra muscular.'
    ],
    bullets: [
      'Descanso: 3 a 4 minutos para steaks de 3,5 cm.',
      'Não cubra com alumínio fechado para manter a crosta crocante.',
      'Tábua de corte seca e limpa.'
    ],
    interactiveType: 'resting_timer'
  },
  {
    id: 'contrafile-corte-final',
    stepNumber: 7,
    sectionTitle: '8. O Fatiamento em Tiras',
    title: 'Corte Transversal em Tiras de 1,0 cm',
    subtitle: 'Lâmina a 90° contra a fibra com fatia contínua',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie os steaks em tiras transversais de 1 cm destacando a ceja e o miolo rosado.',
    paragraphs: [
      'Posicione o bife descansado e fatie transversalmente em tiras de 1,0 a 1,5 cm de largura.',
      'No Bife Ancho, você pode separar a ceja superior do miolo antes de fatiar, proporcionando aos convidados a oportunidade de degustar a parte mais nobre e amanteigada do boi.'
    ],
    bullets: [
      'Corte perpendicular ao comprimento das fibras musculares.',
      'Fatias de 1,0 a 1,5 cm de espessura.',
      'Finalize com uma pitada de flor de sal salpicada sobre as fatias.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'contrafile-servir',
    stepNumber: 8,
    sectionTitle: '9. Mesa de Parrilla & Acompanhamentos',
    title: 'Salsa Criolla, Batatas Rústicas & Farofa de Ovos',
    subtitle: 'As harmonizações consagradas da cultura parrillera',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva os cortes fumegantes com salsa criolla refrescante e batatas douradas ao alecrim.',
    paragraphs: [
      'O sabor marcante do contrafilé harmoniza perfeitamente com acompanhamentos frescos e crocantes que equilibram o teor de gordura.',
      'Sirva com Salsa Criolla (pimentões coloridos, cebola roxa, tomate e azeite), batatas rústicas douradas com alecrim e alho na brasa, e uma farofa clássica de ovos e bacon.'
    ],
    bullets: [
      'Salsa Criolla fresca para trazer acidez e crocância.',
      'Batatas rústicas com casca assadas na brasa com alecrim.',
      'Farofa úmida de ovos caipiras e manteiga.',
      'Vinho tinto encorpado (Malbec, Cabernet Sauvignon ou Tannat).'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'contrafile-manifesto',
    stepNumber: null,
    sectionTitle: '10. O Manifesto do Contrafilé',
    title: 'As 3 Leis Inegociáveis do Contrafilé',
    subtitle: 'Os princípios fundamentais da alta parrilla',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Steak espesso, brasa viva e ponto para menos: o trio de ouro dos mestres assadores.',
    paragraphs: [
      'O contrafilé é a prova definitiva de um assador de precisão. Respeitando a espessura generosa, o calor ardente e o descanso prévio ao corte, você entrega uma experiência gastronômica inigualável.'
    ],
    bullets: [
      'Lei 1: Espessura mínima de 3,5 cm — recuse bifes finos na grelha.',
      'Lei 2: Brasa ardente a 15 cm — selagem rápida sem cozinhar o miolo em excesso.',
      'Lei 3: Respeite rigorosamente os 4 minutos de descanso antes de fatiar.'
    ],
    interactiveType: 'golden_rules'
  }
];
