import { StepItem } from '../../types';

export const MAMINHA_STEPS: StepItem[] = [
  {
    id: 'maminha-intro',
    stepNumber: null,
    sectionTitle: 'Maminha na Churrasqueira',
    title: 'A Maciez Suculenta da Ponta da Alcatra',
    subtitle: 'Peça inteira de 1,0 a 1,4 kg com fatiamento em leque',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A maminha é um dos cortes mais tenros e amantesigados do boi, famosa pelo formato triangular e farta suculência.',
    paragraphs: [
      'A Maminha é a ponta nobre e mais macia da peça de alcatra. De formato triangular marcante, ela possui fibras musculares delicadas e uma irrigação natural de sucos que a torna incrivelmente úmida.',
      'O maior segredo da maminha reside na anatomia de suas fibras: elas não correm em linha reta, mas se abrem em formato de LEQUE da ponta fina para a base larga. Dominar o fatiamento em leque a 90° é o que transforma esse corte em uma iguaria que derrete na boca.'
    ],
    bullets: [
      'Proporção: 250g a 300g de carne crua por pessoa.',
      'Perfil: Fibras em leque, capa de gordura suave, altíssima suculência.',
      'Ponto Obrigatório: Malpassada ou Ao Ponto para Menos (52°C a 55°C).',
      'Técnica: Selagem forte nos 4 lados + cocção indireta a 40 cm.'
    ],
    keyRule: 'Dica do Mestre: Jamais passe a maminha do ponto. Por ter fibras delicadas, se passar de 58°C ela perde os sucos nobres e resseca rapidamente.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'maminha-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Inspeção da Peça de Maminha',
    subtitle: 'Formato triangular definido, peso ideal e gordura clara',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Peça inteira com ponta fina e base larga, capa de gordura uniforme e cor vermelho vivo.',
    paragraphs: [
      'Escolha peças inteiras de maminha pesando entre 1,0 kg e 1,4 kg. Peças excessivamente grandes podem vir acompanhadas de partes do coxão duro ou da alcatra grossa.',
      'A capa de gordura não precisa ser tão grossa quanto a da picanha (cerca de 0,5 a 1 cm é o ideal), cobrindo a parte superior sem falhas profundas.'
    ],
    bullets: [
      'Peso Ideal: 1,0 kg a 1,4 kg por peça inteira.',
      'Formato Triangular: Ponta estreita que se alarga gradualmente até a base.',
      'Capa de Gordura: Fina a média, branca e uniforme.',
      'Cor da Carne: Vermelho-rubi brilhante com fibras visíveis em sentido radial.'
    ],
    keyRule: 'Confira a galeria visual abaixo para inspecionar os pontos críticos ao comprar sua maminha.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'maminha-formato',
        title: 'Formato Triangular & Espessura',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Triângulo perfeito com transição suave da ponta mais fina para a base mais alta.',
        whatToLookFor: ['Formato triangular bem nítido', 'Superfície limpa sem retalhos'],
        whatToAvoid: ['Peças cortadas ao meio ou com ponta decepada', 'Peças deformadas']
      },
      {
        id: 'maminha-gordura',
        title: 'Capa de Gordura & Marmoreio',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Capa suave e contínua que lubrifica a carne durante o tempo de grelha.',
        whatToLookFor: ['Gordura clara de 0,5 a 1 cm', 'Veios finos de marmoreio nas fibras'],
        whatToAvoid: ['Peças completamente desprovidas de gordura', 'Sebo rígido amarelado']
      },
      {
        id: 'maminha-frescor',
        title: 'Coloração & Firmeza',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Carne firme e elástica ao toque, com brilho fresco e cor viva.',
        whatToLookFor: ['Vermelho cereja vivo', 'Embalagem a vácuo com pouco líquido solto'],
        whatToAvoid: ['Carne acinzentada ou opaca', 'Excesso de líquido escuro']
      }
    ]
  },
  {
    id: 'maminha-preparo-limpeza',
    stepNumber: 1,
    sectionTitle: '2. Limpeza & Aponeurose',
    title: 'Remover a Pele Prateada do Verso',
    subtitle: 'Preservar a capa de gordura e limpar a membrana fibrosa inferior',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Passe a faca rente para remover a fina membrana prateada do lado oposto à gordura.',
    paragraphs: [
      'No lado oposto à capa de gordura, a maminha possui uma fina película fibrosa prateada (aponeurose). Com a ponta de uma faca bem afiada, passe a lâmina rente para retirar essa membrana.',
      'Retirar a membrana impede que a peça envergue na churrasqueira e permite que o calor e o sal penetrem diretamente na carne.'
    ],
    bullets: [
      'Remover apenas a membrana prateada do verso da carne.',
      'Manter 100% da capa de gordura superior intacta.',
      'Deixar a carne atingir a temperatura ambiente por 15 a 20 minutos antes do fogo.'
    ],
    proTip: 'Não corte a maminha em bifes antes de assar: a maminha atinge seu pico máximo de maciez e suculência quando assada inteira.'
  },
  {
    id: 'maminha-fogo',
    stepNumber: 2,
    sectionTitle: '3. A Estratégia das 2 Zonas',
    title: 'Selagem a 20 cm & Cocção Indireta a 40 cm',
    subtitle: 'Calor forte para criar a crosta e calor suave para o miolo',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Prepare uma zona de brasa forte para selagem rápida e uma zona branda/superior para cocção homogênea.',
    paragraphs: [
      'Como a maminha é uma peça de espessura variável (ponta fina e base espessa), assá-la apenas em fogo direto queima a ponta antes da base cozinhar.',
      'Monte sua churrasqueira com duas zonas: um lado com brasa forte (15 a 20 cm) e o outro lado com brasa suave ou use a grelha superior (35 a 40 cm).'
    ],
    bullets: [
      'Zona Direta (20 cm): Brasa forte (3 a 4 segundos no teste da mão).',
      'Zona Indireta / Superior (40 cm): Brasa suave (5 a 6 segundos).',
      'A ponta fina sempre deve ficar apontada para a área de menor calor.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'maminha-sal',
    stepNumber: 3,
    sectionTitle: '4. O Tempero',
    title: 'Sal de Parrilla & Toque de Manteiga',
    subtitle: 'Salgar 5 minutos antes de ir para a brasa',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sal de granulação média espalhado com uniformidade em todas as faces da peça.',
    paragraphs: [
      'Utilize sal de parrilla de moagem média. Aplique em todas as faces da maminha cerca de 3 a 5 minutos antes de colocar na grelha.',
      'Opcionalmente, passe uma fina camada de azeite extravirgem ou manteiga de garrafa na superfície para auxiliar na aderência do sal e turbinar a reação de Maillard.'
    ],
    bullets: [
      'Dosagem: cerca de 12g de sal por kg de carne.',
      'Cubra todas as 4 faces da peça (incluindo as laterais).',
      'Pimenta-do-reino moída na hora é bem-vinda para realçar o sabor amanteigado.'
    ],
    keyRule: 'Evite salgar com muita antecedência para não desidratar os sucos superficiais da carne.'
  },
  {
    id: 'maminha-selagem',
    stepNumber: 4,
    sectionTitle: '5. A Selagem dos 4 Lados',
    title: '4 Minutos por Face a 20 cm da Brasa',
    subtitle: 'Caramelização profunda para reter os sucos internos',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sele todos os lados da maminha criando uma crosta marrom-dourada profunda e perfumada.',
    paragraphs: [
      'Posicione a peça inteira na grelha a 20 cm da brasa forte. Sele por 3 a 4 minutos até dourar intensamente.',
      'Gire a peça e sele as outras três faces (incluindo a capa de gordura e as laterais) por 3 a 4 minutos cada. A peça deve ficar completamente envolvida por uma crosta dourada e crocante.'
    ],
    bullets: [
      'Lado 1 (Gordura): 3 a 4 minutos em calor direto.',
      'Lado 2 (Carne): 3 a 4 minutos em calor direto.',
      'Laterais: 2 a 3 minutos apoiando a peça em pé.',
      'Mantenha a ponta mais fina na parte menos quente da grelha.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'maminha-coccao-indireta',
    stepNumber: 5,
    sectionTitle: '6. Cocção Indireta Suave',
    title: 'Subir para a Grelha Superior (40 cm)',
    subtitle: '15 a 20 minutos de calor indireto para o miolo atingir o ponto',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Suba a peça para o segundo andar para que o calor alcance o centro sem queimar a crosta.',
    paragraphs: [
      'Após selar todos os lados, suba a maminha para o segundo nível da churrasqueira (35 a 40 cm da brasa) ou mova para a zona indireta.',
      'Deixe assar suavemente por 15 a 20 minutos virando a peça a cada 5 minutos. Isso garante que a temperatura interna suba de forma gradual e homogênea.'
    ],
    bullets: [
      'Grelha a 40 cm em calor brando-médio.',
      'Tempo de cocção indireta: 15 a 20 minutos.',
      'Vire a cada 5 minutos para cozimento simétrico.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'maminha-ponto',
    stepNumber: 6,
    sectionTitle: '7. O Ponto Ideal & Temperatura',
    title: 'Retirar com 52°C a 54°C no Centro',
    subtitle: 'Ponto para menos garante textura ultra macia e amanteigada',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Centro rosado uniforme, muito úmido e com textura que desmancha ao mastigar.',
    paragraphs: [
      'Espete o termômetro culinário na parte mais grossa da maminha. O ponto ideal é atingido quando o centro registrar entre 52°C e 54°C.',
      'Durante o descanso fora do fogo, a temperatura subirá naturalmente 2°C a 3°C, finalizando em 55°C a 56°C (ponto da casa perfeito).'
    ],
    bullets: [
      'Malpassada: 48°C a 51°C (centro vermelho escuro e muito macio).',
      'Ao Ponto para Menos (Supremo): 52°C a 55°C (centro rosa quente e brilhante).',
      'Ao Ponto: 56°C a 59°C (rosa claro, ainda macia).',
      'Bem Passada: Acima de 63°C (perda severa de maciez e suculência).'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'maminha-descanso',
    stepNumber: 7,
    sectionTitle: '8. O Descanso Sagrado',
    title: '5 Minutos de Repouso na Tábua',
    subtitle: 'Redistribuição hidrostática dos sucos para máxima maciez',
    category: 'descanso',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Deixe a maminha descansar por 5 minutos antes de passar a lâmina da faca.',
    paragraphs: [
      'Ao sair do fogo, a alta pressão interna concentra os líquidos no núcleo da carne. Se fatiar imediatamente, todo esse caldo precioso se perderá na tábua.',
      'Deixe a peça descansar por 5 minutos sobre a tábua seca. As fibras musculares relaxarão e reterão todo o líquido internamente.'
    ],
    bullets: [
      'Tempo de descanso: 5 minutos inteiros.',
      'Não embrulhe hermeticamente para não perder a crocância da crosta externa.',
      'A tábua deve estar limpa e levemente aquecida se possível.'
    ],
    interactiveType: 'resting_timer'
  },
  {
    id: 'maminha-corte-leque',
    stepNumber: 8,
    sectionTitle: '9. O Segredo do Corte em Leque',
    title: 'Ajuste Dinâmico do Ângulo da Faca a 90°',
    subtitle: 'Girar a lâmina acompanhando a curvatura das fibras',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A faca deve mudar de ângulo da ponta até a base para manter o corte estritamente contra as fibras.',
    paragraphs: [
      'Este é o passo mais importante da maminha: como as fibras correm em formato de leque aberto da ponta para a base, fazer cortes paralelos em linha reta fará metade da carne ficar dura.',
      'Posicione a faca em ângulo de 90° em relação às fibras na ponta. Conforme for fatiando em direção à base larga, gire a faca suavemente para manter sempre o corte perpendicular à direção das fibras.'
    ],
    bullets: [
      'Identifique a direção das fibras antes de começar a fatiar.',
      'Fatie tiras finas de 0,5 cm a 0,8 cm de espessura.',
      'Gire a lâmina da faca gradualmente conforme avança para a base da peça.',
      'Use faca de corte lisa bem afiada (sem serra).'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'maminha-servir',
    stepNumber: 9,
    sectionTitle: '10. Mesa & Harmonizações',
    title: 'Chimichurri Artesanal, Pão de Alho & Farofa Crocante',
    subtitle: 'Realçando a untuosidade natural da alcatra',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as fatias quentes acompanhadas de chimichurri fresco e farofa crocante na manteiga.',
    paragraphs: [
      'Sirva as fatias finas de maminha imediatamente após o corte, finalizando com uma leve chuva de flor de sal.',
      'O molho chimichurri argentino (com azeite, alho, orégano, salsa e vinagre de vinho tinto) traz acidez e frescor que equilibram perfeitamente o sabor amanteigado da carne.'
    ],
    bullets: [
      'Chimichurri artesanal com ervas frescas e pimenta calabresa suave.',
      'Farofa crocante de cebola caramelizada na manteiga.',
      'Pão de alho crocante com queijo derretido.',
      'Arroz branco soltinho com alho torrado.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'maminha-manifesto',
    stepNumber: null,
    sectionTitle: '11. O Manifesto da Maminha',
    title: 'As 3 Leis Sagradas da Maminha',
    subtitle: 'O padrão de excelência dos melhores assadores',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Peça inteira selada, ponto para menos e corte em leque: a receita definitiva do sucesso.',
    paragraphs: [
      'A maminha recompensa o assador técnico que respeita sua anatomia única. Com o domínio da brasa em 2 zonas e a precisão do corte em leque, você entrega a carne mais macia do churrasco.'
    ],
    bullets: [
      'Lei 1: Asse sempre a peça inteira — bifes finos perdem a mágica dos sucos.',
      'Lei 2: Jamais ultrapasse 56°C de temperatura interna.',
      'Lei 3: Gire a faca acompanhando as fibras no corte em leque.'
    ],
    interactiveType: 'golden_rules'
  }
];
