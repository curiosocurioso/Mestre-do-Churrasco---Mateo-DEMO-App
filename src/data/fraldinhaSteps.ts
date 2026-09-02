import { StepItem } from '../types';

export const FRALDINHA_STEPS: StepItem[] = [
  {
    id: 'intro',
    stepNumber: null,
    sectionTitle: 'Fraldinha na Churrasqueira',
    title: 'O Guia Completo do Churrasco Perfeito',
    subtitle: 'Planejado para 6 pessoas (1,5 a 1,8 kg)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A fraldinha é um dos cortes mais saborosos e suculentos do churrasco brasileiro.',
    paragraphs: [
      'Para 6 pessoas, compre aproximadamente 1,5 a 1,8 kg de fraldinha. Isso deixa uma margem confortável após o preparo e a perda natural de umidade na grelha, especialmente se você for servir acompanhamentos tradicionais.',
      'A fraldinha possui um sabor bovino marcante, fibras musculares longas e gordura entremeada. Quando preparada com a técnica correta de calor direto/indireto e fatiada contra a fibra, resulta em uma carne incrivelmente macia e suculenta.'
    ],
    bullets: [
      'Proporção: ~250g a 300g de carne crua por pessoa.',
      'Perfil: Fibras longas, alto teor de sabor, gordura intramuscular.',
      'Navegação: Deslize para a esquerda ou use as setas para avançar passo a passo.'
    ],
    keyRule: 'Dica do Mestre: O segredo da fraldinha está em 3 pilares: brasa sem chamas, ponto correto e corte contra as fibras.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'compra-carne',
    stepNumber: null,
    sectionTitle: '1. O que comprar',
    title: 'A Escolha da Carne Perfeita',
    subtitle: '1,5 – 1,8 kg de fraldinha inteira',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Peça inteira de fraldinha com veios finos de gordura intramuscular.',
    paragraphs: [
      'O marmoreio corresponde à gordura intramuscular. Veios finos e bem distribuídos são preferíveis a grandes depósitos de gordura concentrados em apenas algumas áreas.',
      'Dê sempre preferência a uma peça inteira em vez de bifes pré-cortados, garantindo maior controle de temperatura interna durante o churrasco.'
    ],
    bullets: [
      'Peça Inteira: 1,5–1,8 kg, formato alongado característico.',
      'Bom Marmoreio: Pequenos veios de gordura distribuídos dentro da carne.',
      'Espessura Uniforme: Garante cozimento homogêneo de ponta a ponta.',
      'Cor Vermelha Viva: Sem aparência acinzentada ou excessivamente escura.',
      'Capa de Gordura Saudável: Presença de gordura natural, sem excesso de sebo duro.',
      'Sem Amaciamento Químico: Carne fresca, sem pré-tempero de fábrica.'
    ],
    keyRule: 'Explore a galeria visual abaixo para inspecionar os 5 detalhes essenciais da carne antes de comprar.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'peca_inteira',
        title: 'Imagem 1 — Peça Inteira',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Procure o formato alongado e contínuo característico da fraldinha (vacio), em vez de uma peça já fatiada em bifes.',
        whatToLookFor: ['Peça inteira e uniforme', 'Formato alongado', 'Espessura consistente'],
        whatToAvoid: ['Peças recortadas ou retalhadas', 'Bifes finos pré-embalados']
      },
      {
        id: 'cor_viva',
        title: 'Imagem 2 — Cor',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'A parte magra deve apresentar uma coloração vermelha viva e brilhante. Evite peças com tonalidades acinzentadas, amarronzadas ou escuras.',
        whatToLookFor: ['Vermelho rubi brilhante', 'Superfície fresca', 'Umidade natural'],
        whatToAvoid: ['Manchas escuras ou arroxeadas', 'Aparência seca ou opaca']
      },
      {
        id: 'capa_gordura',
        title: 'Imagem 3 — Capa de Gordura',
        image: 'https://images.unsplash.com/photo-1588347818036-558601350947?q=80&w=1200&auto=format&fit=crop',
        description: 'Uma certa quantidade de gordura externa é desejável para proteger a carne do calor. Você não precisa de uma camada excessivamente espessa ou dura.',
        whatToLookFor: ['Camada fina a moderada de gordura clara', 'Gordura macia e flexível'],
        whatToAvoid: ['Sebo duro amarelado em excesso', 'Falta total de gordura (carne excessivamente magra resseca)']
      },
      {
        id: 'fibras',
        title: 'Imagem 4 — Fibras',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'A fraldinha possui fibras musculares longas e bastante visíveis. Isso será determinante para a hora de fatiar após o descanso.',
        whatToLookFor: ['Feixes musculares bem definidos', 'Linhas de fibra evidentes a olho nu'],
        whatToAvoid: ['Carne moída ou dilacerada mecanicamente']
      },
      {
        id: 'marmoreio',
        title: 'Imagem 5 — Marmoreio',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Procure pequenos veios brancos de gordura espalhados entre as fibras musculares. Essa gordura intramuscular derrete na grelha e garante o sabor máximo.',
        whatToLookFor: ['Veios finos e entrelaçados', 'Distribuição homogênea'],
        whatToAvoid: ['Apenas blocos externos duros sem gordura interna']
      }
    ]
  },
  {
    id: 'compra-tempero-fogo',
    stepNumber: null,
    sectionTitle: '1. O que comprar',
    title: 'Tempero & Equipamentos de Fogo',
    subtitle: 'A pureza da tradição do churrasco',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1514944298352-094b8e2195f2?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sal grosso de boa granulação: o único tempero essencial para a fraldinha.',
    paragraphs: [
      'Para um churrasco clássico, você realmente precisa de muito pouco: apenas sal grosso e fumaça de brasa limpa.',
      'Não use alho, cebola, azeite, molho inglês, molho barbecue ou marinadas ácidas. A fraldinha tem um sabor bovino nobre e profundo que brilha com a simplicidade.'
    ],
    bullets: [
      'Sal Grosso: ~15 a 20 g para 1,5–1,8 kg de carne (distribuído antes de ir à grelha).',
      'Opcional: Pimenta-do-reino moída na hora (embora dispensável na versão tradicional).',
      'Carvão Vegetal: Carvão de boa densidade (eucalipto ou nó de pinho), pedaços grandes.',
      'Acendedores: Iniciadores naturais de fogo (álcool sólido ou mechas ecológicas).',
      'Acessórios: Pegador longo de inox (nunca garfo de espetar!) e grelha limpa.'
    ],
    warning: 'Evite fluido químico líquido para acender carvão! Ele libera vapores tóxicos com cheiro de querosene que estragam o sabor da carne.',
    keyRule: 'Equação de ouro: Carne bovina + Sal grosso + Calor de brasas = Sabor autêntico.'
  },
  {
    id: 'passo-1-aparar',
    stepNumber: 1,
    sectionTitle: '2. Prepare a fraldinha',
    title: 'Passo 1 — Examine e Apare a Carne',
    subtitle: 'Limpeza cirúrgica sem perder a gordura protetora',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1588347818036-558601350947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Removendo aponeuroses e tecidos conjuntivos duros na tábua.',
    paragraphs: [
      'Retire a carne da embalagem e seque-a muito bem com papel-toalha dos dois lados. A carne seca cria uma crosta infinitamente mais crocante e dourada na grelha.',
      'Observe atentamente os dois lados da peça com uma faca de desossa bem afiada.'
    ],
    bullets: [
      'Remova: Pedaços muito grossos de tecido conjuntivo duro (aponeurose/nervuras brancas).',
      'Remova: Grandes blocos de gordura externa dura e excessiva que não derretem.',
      'Remova: Pontas finas soltas de carne que queimariam facilmente na grelha.',
      'PRESERVE: A gordura macia e todo o marmoreio interno. Essa gordura protege a carne do calor intenso e confere suculência.'
    ],
    keyRule: 'Regra de ouro: Apare agressivamente onde houver gordura dura ou nervo, mas preserve a gordura macia.'
  },
  {
    id: 'passo-2-fibras',
    stepNumber: 2,
    sectionTitle: '2. Prepare a fraldinha',
    title: 'Passo 2 — Identifique a Direção das Fibras',
    subtitle: 'O segredo da maciez antes mesmo de ligar o fogo',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Observe o sentido paralelo das longas fibras musculares da fraldinha.',
    paragraphs: [
      'Isso é fundamental com a fraldinha. Antes de cozinhar, observe cuidadosamente a peça e identifique o sentido exato em que as fibras musculares estão correndo.',
      'Você NÃO precisa cortar agora. Apenas memorize a direção visualmente.'
    ],
    bullets: [
      'Fibras da Fraldinha: São longas, grossas e paralelas ao longo da peça.',
      'Por que importa: Ao final do preparo, você cortará a 90° CONTRA as fibras.',
      'Efeito na mastigação: O corte transversal reduz o comprimento das fibras, tornando cada pedaço incrivelmente macio.'
    ],
    keyRule: 'Memorize agora o sentido das linhas da carne. Cortar a favor da fibra transformará uma fraldinha nobre em uma carne dura e borrachuda.',
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'passo-3-organizar-carvao',
    stepNumber: 3,
    sectionTitle: '3. Prepare o fogo',
    title: 'Passo 3 — Organize o Carvão (Duas Zonas)',
    subtitle: 'Criando a Zona Quente e a Zona Fria',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Distribuição em duas zonas: controle total de calor e segurança contra labaredas.',
    paragraphs: [
      'Coloque o carvão na churrasqueira e forme uma camada razoavelmente profunda. Você precisa de carvão suficiente para manter um calor forte durante todo o preparo.',
      'Não espalhe todo o carvão em uma camada fina imediatamente. Crie DUAS ZONAS bem definidas.'
    ],
    bullets: [
      'ZONA QUENTE: Diretamente sobre a maior concentração de carvão (calor direto intenso para selar e criar crosta).',
      'ZONA MAIS FRIA: Com menos carvão ou sem carvão embaixo (calor indireto para finalizar o ponto e proteger de labaredas).'
    ],
    keyRule: 'A zona fria é o seu botão de segurança: se a gordura pingar e levantar labaredas, você move a carne para lá instantaneamente.',
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'passo-4-acender-carvao',
    stepNumber: 4,
    sectionTitle: '3. Prepare o fogo',
    title: 'Passo 4 — Acenda o Carvão',
    subtitle: 'A paciência dos 20 a 30 minutos para formar o braseiro',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Carvão em transição: chamas diminuindo e cinza branca cobrindo o braseiro.',
    paragraphs: [
      'Use um acendedor natural ou álcool gel apropriado. Acenda o carvão em vários pontos estratégicos, em vez de tentar acender apenas uma ponta.',
      'Deixe o fogo trabalhar naturalmente. No começo você verá chamas altas, carvão escuro e bastante fumaça densa.'
    ],
    bullets: [
      'Fase Inicial: Chamas altas e fumaça escura — AINDA NÃO COLOQUE A CARNE.',
      'Tempo de espera: Aproximadamente 20 a 30 minutos.',
      'Ponto Ideal: Carvão predominantemente coberto por uma fina camada cinza/branca por fora, com brasas incandescentes brilhando por baixo.'
    ],
    warning: 'Nunca coloque carne na churrasqueira enquanto houver fumaça escura inicial ou labaredas altas: isso impregna fuligem amarga na gordura.'
  },
  {
    id: 'passo-5-saber-fogo-pronto',
    stepNumber: 5,
    sectionTitle: '3. Prepare o fogo',
    title: 'Passo 5 — Saiba Quando o Fogo Está Pronto',
    subtitle: 'Temperatura de grelha entre 230 °C e 280 °C',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Brasas vivas uniformes sem chamas ativas na altura da grelha.',
    paragraphs: [
      'Um erro muito comum no churrasco amador é colocar a carne na grelha enquanto ainda existem grandes chamas. Não faça isso! Você quer brasas quentes, não chamas.',
      'Para a fraldinha, procure uma temperatura forte na zona quente: aproximadamente 230 °C a 280 °C na altura da grelha.'
    ],
    bullets: [
      'Com termômetro infravermelho: 230 °C a 280 °C na grelha.',
      'O Teste da Mão: Posicione a palma da mão a cerca de 10–12 cm acima da grelha.',
      'Se você só consegue mantê-la ali por 3 a 4 segundos antes de sentir calor insuportável, a temperatura está perfeita!',
      'Cuidado: Não force a mão para além do limite de segurança.'
    ],
    keyRule: 'Brasas vermelhas cobertas por cinza branca = calor estável e uniforme.',
    interactiveType: 'heat_test'
  },
  {
    id: 'passo-6-salgar',
    stepNumber: 6,
    sectionTitle: '4. Tempere a carne',
    title: 'Passo 6 — Salgue Imediatamente Antes de Grelhar',
    subtitle: 'A regra cronológica: Fogo pronto → Sal na carne → Grelha',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1514944298352-094b8e2195f2?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Espalhando sal grosso uniformemente sobre a superfície seca da fraldinha.',
    paragraphs: [
      'Seque a fraldinha novamente com papel-toalha para retirar qualquer umidade residual que tenha aflorado.',
      'Tempere generosamente com sal grosso em ambos os lados. O objetivo é cobrir a superfície de maneira uniforme, sem formar uma crosta grossa e opaca de sal.'
    ],
    bullets: [
      'Não salgue com horas de antecedência: o sal puxa a água de dentro da carne para a superfície por osmose se ficar muito tempo.',
      'Sequência obrigatória: Fogo no ponto ideal → Aplicar sal grosso → Levar imediatamente à grelha.',
      'Quantidade recomendada: 15 a 20 g de sal grosso para 1,5 a 1,8 kg de carne.'
    ],
    keyRule: 'O sal grosso colocado na hora dissolve gradualmente com a gordura derretida da carne, criando o tempero perfeito sem desidratar o corte.'
  },
  {
    id: 'passo-7-lado-gordura',
    stepNumber: 7,
    sectionTitle: '5. Grelhe a fraldinha',
    title: 'Passo 7 — Comece com o Lado da Gordura para Cima',
    subtitle: 'Protegendo a gordura e iniciando o selamento da carne',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A fraldinha pousada na grelha quente com a capa de gordura voltada para cima.',
    paragraphs: [
      'Posicione a fraldinha na zona quente da grelha com a capa de gordura voltada para CIMA no primeiro momento.',
      'Isso permite desenvolver uma crosta dourada e caramelizada no lado da carne magra sem queimar de imediato a gordura externa.'
    ],
    bullets: [
      'Lado da carne para baixo: sela as fibras musculares e retém os sucos internos.',
      'Capa de gordura para cima: derrete sutilmente, irrigando a carne enquanto ela doura.',
      'Não fique mexendo: resista à tentação de ficar virando ou arrastando a peça. Deixe a grelha fazer o trabalho.'
    ],
    keyRule: 'Paciência de churrasqueiro: coloque a carne na grelha e não a toque até que a crosta esteja formada.'
  },
  {
    id: 'passo-8-selar-primeiro-lado',
    stepNumber: 8,
    sectionTitle: '5. Grelhe a fraldinha',
    title: 'Passo 8 — Sele o Primeiro Lado (4 a 6 min)',
    subtitle: 'Reação de Maillard e controle de labaredas',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Crosta dourada e profunda se desenvolvendo com o calor intenso.',
    paragraphs: [
      'Cozinhe por aproximadamente 4 a 6 minutos, dependendo da espessura da peça e da intensidade da sua brasa.',
      'O que você está procurando: um forte dourado/caramelização na superfície, formação de uma crosta rica, gordura começando a derreter e nenhuma chama descontrolada.'
    ],
    bullets: [
      'Tempo de referência: 4 a 6 minutos.',
      'Se surgirem labaredas: a gordura que pinga no carvão pode gerar fogo alto. Mova a carne temporariamente para a Zona Fria.',
      'NUNCA jogue água no carvão: isso levanta cinzas na carne, gera vapor d’água e causa variações bruscas de temperatura.'
    ],
    warning: 'Use o pegador longo para mover a carne. Jamais fure a fraldinha com garfo!',
    interactiveType: 'searing_timer'
  },
  {
    id: 'passo-9-virar',
    stepNumber: 9,
    sectionTitle: '5. Grelhe a fraldinha',
    title: 'Passo 9 — Vire e Sele o Segundo Lado',
    subtitle: 'Mais 4 a 6 minutos para dourar a capa de gordura',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Virando a peça delicadamente para caramelizar a capa de gordura.',
    paragraphs: [
      'Com o pegador longo, vire a fraldinha com cuidado. Agora o lado da gordura ficará em contato com a grelha quente.',
      'Cozinhe por mais aproximadamente 4 a 6 minutos para tostar a gordura e criar uma crosta crocante.'
    ],
    bullets: [
      'Atenção à gordura: este lado tende a pingar mais gordura na brasa.',
      'Manejo ágil: fique atento e utilize a zona fria caso o fogo levante chamas altas.',
      'Não fique obcecado pelo relógio: a espessura da peça e a intensidade da brasa mandam mais do que os minutos exatos.'
    ],
    keyRule: 'Gordura tostada e caramelizada, nunca queimada de preto.'
  },
  {
    id: 'passo-10-ponto-temperaturas',
    stepNumber: 10,
    sectionTitle: '6. Termine o cozimento',
    title: 'Passo 10 — Ponto Ideal & Calor Indireto',
    subtitle: 'Temperaturas internas e a técnica do calor indireto',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Atingindo o ponto malpassado a ao ponto (54–57 °C) com suculência total.',
    paragraphs: [
      'Após selar ambos os lados sobre calor alto, mova a carne para a Zona Fria (calor indireto) da churrasqueira. Feche a tampa se houver ou deixe o calor residual subir suavemente o centro da carne.',
      'Se você tiver um termômetro culinário de leitura instantânea, este é o momento de usá-lo no ponto mais espesso da peça.'
    ],
    bullets: [
      '48–52 °C → Malpassada (Rare).',
      '52–55 °C → Malpassada para ao ponto (Medium Rare).',
      '54–57 °C → RECOMENDAÇÃO DO CHURRASQUEIRO (Retirar da grelha aqui!).',
      '57–60 °C → Ao ponto (Medium).',
      '63 °C ou mais → Ao ponto para bem-passada / Bem-passada (perde suculência).'
    ],
    keyRule: 'Lembre-se: a temperatura interna continuará subindo de 2 a 3 °C enquanto a carne descansa fora do fogo.',
    interactiveType: 'doneness_picker'
  },
  {
    id: 'passo-11-descanso',
    stepNumber: 11,
    sectionTitle: '7. Deixe a carne descansar',
    title: 'Passo 11 — Não Corte Imediatamente! (8 a 10 min)',
    subtitle: 'O descanso sagrado para redistribuição dos sucos',
    category: 'descanso',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fraldinha descansando na tábua de madeira antes de ser fatiada.',
    paragraphs: [
      'Retire a fraldinha da churrasqueira e coloque-a sobre uma tábua de madeira ou bambu limpa.',
      'Deixe descansar obrigatoriamente por aproximadamente 8 a 10 minutos. NÃO CORTE AGORA!'
    ],
    bullets: [
      'O que acontece na grelha: o calor empurra toda a água e os sucos para o centro da peça.',
      'O que acontece no descanso: a pressão interna se equilibra e os sucos se redistribuem uniformemente por todas as fibras musculares.',
      'Se você cortar imediatamente: todos os sucos nobres escorrerão pela tábua em uma poça vermelha, e sua carne ficará seca e sem vida.'
    ],
    keyRule: 'Respeite os 8 a 10 minutos. É a diferença entre uma carne suculenta e uma tábua encharcada.',
    interactiveType: 'resting_timer'
  },
  {
    id: 'passo-12-fatiar',
    stepNumber: 12,
    sectionTitle: '8. Fatie corretamente',
    title: 'Passo 12 — Fatie a 90° Contra as Fibras',
    subtitle: 'A regra mecânica mais importante do churrasco de fraldinha',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Faca afiada a 90 graus cortando transversalmente as fibras longas.',
    paragraphs: [
      'Observe a carne já assada e descansada. Localize novamente a direção em que as fibras musculares correm ao longo da peça.',
      'Vire a faca exatamente 90 graus em relação à direção das fibras. Fatie CONTRA as fibras, nunca paralelamente a elas.'
    ],
    bullets: [
      'Espessura ideal para churrasco: Fatias de 0,5 a 1 cm de espessura.',
      'Ângulo de corte: 90 graus perpendicular aos feixes de fibra.',
      'Resultado: As fibras longas são encurtadas pelo corte da lâmina, exigindo mínimo esforço ao mastigar.',
      'Se cortar a favor da fibra: a carne parecerá incrivelmente dura e elástica, mesmo estando no ponto perfeito.'
    ],
    keyRule: 'Faca bem afiada, ângulo de 90° e fatias de 0,5 a 1 cm. Sucesso garantido.',
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'passo-13-servir',
    stepNumber: 13,
    sectionTitle: '9 & 10. Ajuste final do sal & Servir',
    title: 'Passo 13 — Ajuste de Sal & Sirva como em Churrascaria',
    subtitle: 'Acompanhamentos clássicos do autêntico churrasco brasileiro',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fraldinha fatiada servida com acompanhamentos tradicionais brasileiros.',
    paragraphs: [
      'Prove uma fatia antes de qualquer coisa. Se sentir necessidade de um toque a mais de sal, salpique uma leve pitada de sal de parrilla ou flor de sal por cima. Não adicione sal automaticamente!',
      'Sirva as fatias imediatamente, enquanto ainda estão quentes e exalando o aroma defumado.'
    ],
    bullets: [
      'Farofa Crocante de manteiga ou bacon.',
      'Vinagrete fresco (tomate, cebola, cheiro-verde, azeite e vinagre).',
      'Arroz branco soltinho.',
      'Pão de alho crocante com queijo derretido.',
      'Salada fresca de folhas verdes.',
      'Chimichurri artesanal (opcional, para quem gosta).',
      'Cerveja estupidamente gelada ou caipirinha de limão tradicional.'
    ],
    keyRule: 'Nunca cubra a fraldinha inteira com molhos pesados. Coloque a carne no centro do prato e deixe a crosta e a fumaça falarem por si mesmas!',
    interactiveType: 'serve_checklist'
  },
  {
    id: 'resumo-regras-ouro',
    stepNumber: null,
    sectionTitle: 'Resumo & As 3 Regras de Ouro',
    title: 'O Processo Completo & As 3 Leis Inegociáveis',
    subtitle: 'Tudo o que você precisa memorizar na beira da churrasqueira',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A mestria do churrasco brasileiro sintetizada em um guia direto.',
    paragraphs: [
      'Aqui está o fluxo completo sintetizado, junto com os 3 maiores erros que você NUNCA deve cometer como churrasqueiro.'
    ],
    bullets: [
      '1. Compre: 1,5–1,8 kg de fraldinha inteira com bom marmoreio.',
      '2. Apare: Remova tecidos conjuntivos duros e excesso de sebo.',
      '3. Seque: Seque muito bem com papel-toalha.',
      '4. Fogo: Brasas quentes (230–280 °C), sem chamas ativas.',
      '5. Tempere: Sal grosso imediatamente antes de grelhar.',
      '6. Sele: 4 a 6 min de cada lado (lado da gordura para cima primeiro).',
      '7. Finalize: Calor indireto até o centro atingir 54–57 °C.',
      '8. Descanse: 8 a 10 minutos sagrados na tábua.',
      '9. Fatie: A 90° contra as fibras em fatias de 0,5 a 1 cm.',
      '10. Sirva: Imediatamente com farofa e vinagrete.'
    ],
    keyRule: 'As 3 Coisas Mais Rigorosas:\n1. NÃO cozinhe sobre chamas ativas.\n2. NÃO passe demais a fraldinha do ponto.\n3. NÃO fatie acompanhando as fibras.',
    interactiveType: 'golden_rules'
  }
];
