import { StepItem } from '../../types';

export const CORACAO_FRANGO_STEPS: StepItem[] = [
  {
    id: 'coracao-intro',
    stepNumber: null,
    sectionTitle: 'Coração de Frango no Espeto',
    title: 'O Petisco Mais Amado dos Churrascos Brasileiros',
    subtitle: 'Marinado no vinho branco, alho e ervas (12 a 15 min no espeto duplo)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Coraçõezinhos suculentos e dourados no espeto, crocantes por fora e macios por dentro.',
    paragraphs: [
      'O Coração de Frango é uma verdadeira paixão nacional brasileira, indispensável desde os churrascos de família no domingo até os mais requintados rodízios gaúchos. Por ser um músculo compacto, fibroso e de altíssima irrigação, possui um sabor marcante e textura inconfundível.',
      'Por ter pouca gordura intramuscular, o coração exige dois mandamentos essenciais: uma MARINADA aromática com vinho branco e alho para amaciar e perfumar, e um ESPETAMENTO COMPACTO onde os corações ficam prensados uns contra os outros para não ressecar durante a rotação rápida na brasa.'
    ],
    bullets: [
      'Proporção: 120g a 150g por pessoa (cerca de 8 a 10 unidades como aperitivo).',
      'Marinada: 2 a 3 horas no vinho branco seco com alho e louro.',
      'Espetamento: Compacto em espeto duplo ou de bambu reforçado.',
      'Tempo de Grelha: 12 a 15 minutos em fogo médio-forte a 25 cm com giros frequentes.'
    ],
    keyRule: 'Dica do Mestre: Pressione os corações bem juntinhos no espeto. Se ficarem espaçados, o calor desidrata as laterais e eles ficam borrachudos.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'coracao-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Seleção dos Corações de Frango',
    subtitle: 'Corações frescos, tamanho homogêneo e anel de gordura clara',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Corações frescos com cor vermelho-rubi uniforme e gordura perolada na base.',
    paragraphs: [
      'Dê preferência a corações frescos refrigerados. Se comprar congelados, descongele lentamente na geladeira para não romper as fibras celulares.',
      'Procure peças com tamanho uniforme (para que todos espetem e assem no mesmo tempo). O anel de gordura na base do coração deve ser claro e firme.'
    ],
    bullets: [
      'Frescor: Cor vermelho-escuro brilhante sem manchas esbranquiçadas ou cinzentas.',
      'Tamanho Padronizado: Garante cocção simétrica no mesmo espeto.',
      'Gordura da Base: Branca e limpa, sem vasos sanguíneos escuros estourados.',
      'Aroma: Suave e neutro, sem cheiro forte de vísceras.'
    ],
    keyRule: 'Veja a galeria visual para avaliar os corações antes do preparo.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'coracao-frescor',
        title: 'Coloração & Tamanho Homogêneo',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Corações com formato cônico perfeito e tonalidade vermelho vivo uniforme.',
        whatToLookFor: ['Tamanho uniforme', 'Cor vermelho cereja intensa'],
        whatToAvoid: ['Peças esverdeadas ou com manchas pálidas', 'Tamanhos discrepantes']
      },
      {
        id: 'coracao-gordura-anel',
        title: 'Anel de Gordura da Base',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Pequena coroa de gordura branca que derrete e traz sabor durante a brasa.',
        whatToLookFor: ['Gordura clara na parte superior'],
        whatToAvoid: ['Coágulos de sangue secos ou tubos arteriais excessivos']
      }
    ]
  },
  {
    id: 'coracao-limpeza',
    stepNumber: 1,
    sectionTitle: '2. Limpeza & Aparas',
    title: 'Aparar o Excesso de Vasos e Manter a Gordura',
    subtitle: 'Corte fino na ponta superior preservando o anel de sabor',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Corte as sobras de tubos sanguíneos superiores sem retirar a coroa de gordura.',
    paragraphs: [
      'Coloque os corações em uma tábua. Com a ponta de uma faca afiada, apare pequenos tubos arteriais que se projetam da base e coágulos visíveis.',
      'Não retire a gordura da coroa: é ela que vai derreter na grelha e manter o coração macio e brilhante.'
    ],
    bullets: [
      'Aparar os tubos e artérias da parte superior.',
      'Lavar rapidamente em água corrente e secar em papel toalha.',
      'Preservar a capa de gordura da base para proteger a carne do calor.'
    ],
    proTip: 'Seque bem os corações após a limpeza para que a marinada líquida seja absorvida com força total.'
  },
  {
    id: 'coracao-marinada',
    stepNumber: 2,
    sectionTitle: '3. A Marinada Mestra',
    title: 'Vinho Branco, Alho, Páprica, Louro & Ervas',
    subtitle: 'Descanso na geladeira por 2 a 3 horas para amaciar as fibras',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Mergulhe os corações na marinada de vinho branco seco, alho triturado, louro e azeite.',
    paragraphs: [
      'Em uma tigela funda, misture: 200 ml de vinho branco seco (ou suco de 1 limão com água), 5 dentes de alho bem triturados, 2 folhas de louro esfareladas, 1 colher de chá de páprica doce ou defumada, pimenta-do-reino moída e 1 colher de sopa rasa de sal fino (12g por kg).',
      'Mergulhe os corações e leve à geladeira por 2 a 3 horas. O vinho amacia o músculo e quebra notas fortes, criando um sabor suculento incomparável.'
    ],
    bullets: [
      'Vinho branco seco de boa qualidade.',
      'Alho farto triturado e louro.',
      'Páprica para cor dourada atraente.',
      'Tempo de marinada: 2 a 3 horas sob refrigeração.'
    ],
    keyRule: 'Nunca use vinagre comum forte: o ácido acético desnatura a proteína e endurece o coração.'
  },
  {
    id: 'coracao-espetamento',
    stepNumber: 3,
    sectionTitle: '4. A Técnica do Espetamento Compacto',
    title: 'Espeto Duplo com Corações Prensados',
    subtitle: 'Encaixar no sentido longitudinal sem deixar frestas de ar',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Espete os corações lado a lado bem prensados no espeto duplo para formar um bloco contínuo de carne.',
    paragraphs: [
      'Utilize espetos duplos de aço inox ou espetos de bambu grosso (umedecidos em água por 20 minutos para não queimar).',
      'Espete os corações na vertical, entrando pela base da gordura e saindo pela ponta. Empurre cada coração de modo que fique bem encostado e prensado no anterior, formando uma coluna sólida e uniforme.'
    ],
    bullets: [
      'Espeto duplo evita que os corações girem soltos na hora de virar.',
      'Corações bem prensados uns contra os outros.',
      'Ponta e base alinhadas na mesma direção.',
      'Deixe descansar 10 minutos fora da geladeira antes de ir para a brasa.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'coracao-fogo-tempo',
    stepNumber: 4,
    sectionTitle: '5. A Brasa a 25 cm & Giros Frequentes',
    title: '12 a 15 Minutos com Rotação a Cada 3 Minutos',
    subtitle: 'Calor médio-forte para dourar a superfície sem ressecar o miolo',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Gire o espeto em 4 tempos (3 minutos em cada lado) para obter douramento simétrico.',
    paragraphs: [
      'Posicione o espeto na altura média da churrasqueira (cerca de 25 cm da brasa incandescente em calor médio-forte).',
      'Gire o espeto 90° a cada 2 a 3 minutos. Conforme a gordura derrete, ela frita a casquinha externa, conferindo um tom dourado brilhante enquanto os corações internos cozinham no vapor mútuo.'
    ],
    bullets: [
      'Altura: 25 cm da brasa.',
      'Tempo total: 12 a 15 minutos.',
      'Gire 1/4 de volta a cada 2 a 3 minutos.',
      'Pincele o restante da marinada na primeira virada para dar brilho.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'coracao-ponto-maciez',
    stepNumber: 5,
    sectionTitle: '6. O Ponto Perfeito & Maciez',
    title: 'Dourado por Fora, Elástico e Macio por Dentro',
    subtitle: 'Temperatura de 74°C — centro rosado e saturado de sucos',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Ao morder, o coração deve ceder com facilidade e soltar caldos aromáticos na boca.',
    paragraphs: [
      'O maior erro no preparo de corações é deixá-los tempo demais na brasa. Se assar por mais de 18 minutos, o colágeno contrai ao extremo e o coração vira uma borracha intragável.',
      'Retire quando a superfície estiver dourada escura e brilhante. Ao cortar um coração de teste, o centro deve estar macio, suculento e levemente rosado (74°C a 75°C).'
    ],
    bullets: [
      'Ponto ideal: dourado brilhante por fora e tenro por dentro.',
      'Temperatura segura: 74°C no núcleo.',
      'Textura elástica que estoura caldo na mordida.'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'coracao-servir',
    stepNumber: 6,
    sectionTitle: '7. O Ritual do Espeto & Farofa',
    title: 'Deslizar do Espeto para a Tábua com Farofa',
    subtitle: 'Servido pelando de quente para os convidados',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Passe o espeto direto na tábua, deslisando os corações sobre uma cama de farofa crocante temperada.',
    paragraphs: [
      'Leve o espeto fumegante diretamente para a tábua de churrasco. Com as costas de uma faca ou pegador, deslize os corações sobre uma farta porção de farofa de mandioca temperada.',
      'Sirva imediatamente com gomos de limão e pão francês fatiado.'
    ],
    bullets: [
      'Servir imediatamente ao sair do fogo.',
      'Passar os corações quentes na farofa crocante.',
      'Gotas de limão fresco na hora.',
      'Cerveja bem gelada ou caipirinha.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'coracao-manifesto',
    stepNumber: null,
    sectionTitle: '8. O Manifesto do Coração de Frango',
    title: 'As 3 Leis do Coração Perfeito',
    subtitle: 'O segredo da maciez suculenta em cada espeto',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Marinada de vinho, espetamento compacto e tempo cronometrado na brasa.',
    paragraphs: [
      'O coração de frango bem feito é um dos maiores trunfos de um churrasqueiro habilidoso. Com a marinada certa e a rotação ágil, você conquista qualquer convidado.'
    ],
    bullets: [
      'Lei 1: Marinar no mínimo 2 horas no vinho branco com alho e louro.',
      'Lei 2: Espetar compacto sem frestas para reter a umidade interna.',
      'Lei 3: Máximo de 15 minutos na brasa a 25 cm — nunca deixe secar.'
    ],
    interactiveType: 'golden_rules'
  }
];
