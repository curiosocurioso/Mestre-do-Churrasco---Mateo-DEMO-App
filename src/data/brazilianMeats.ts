import { MeatCut } from '../types';
import { FRALDINHA_STEPS } from './fraldinhaSteps';

export const MEAT_CATEGORIES: { id: string; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos os Cortes', icon: '🔥' },
  { id: 'bovino_nobre', label: 'Bovinos Nobres', icon: '🥩' },
  { id: 'bovino_tradicional', label: 'Bovinos Tradicionais', icon: '🍖' },
  { id: 'suino', label: 'Cortes Suínos', icon: '🥓' },
  { id: 'ave', label: 'Aves na Brasa', icon: '🍗' },
  { id: 'ovino', label: 'Cordeiro & Especiais', icon: '🌿' }
];

export const PICANHA_STEPS = [
  {
    id: 'picanha-intro',
    stepNumber: null,
    sectionTitle: 'Picanha na Churrasqueira',
    title: 'A Rainha Absoluta do Churrasco Brasileiro',
    subtitle: 'Planejado para 6 pessoas (~1,2 a 1,5 kg)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A capa de gordura uniforme e a maciez do miolo da alcatra fazem da picanha o corte mais nobre do Brasil.',
    paragraphs: [
      'A picanha é o corte mais idolatrado do churrasco brasileiro. Fica localizada na parte traseira do boi, na ponta da alcatra. Seu segredo reside no equilíbrio perfeito entre uma capa de gordura espessa e uniforme e a maciez suculenta de suas fibras curtas.',
      'Para um churrasco inesquecível, escolha peças de até 1,2 kg a 1,4 kg (peças muito maiores contêm parte do coxão duro). Você pode prepará-la em bifes grossos (steaks de 2 dedos), no espeto dobrado em leque, ou na peça inteira selando a gordura.'
    ],
    bullets: [
      'Proporção: ~250g a 300g de carne crua por pessoa.',
      'Capa de Gordura: Grossa, contínua e branca/creme (nunca amarelada demais).',
      'Ponto Perfeito: Ponto para menos (52°C a 55°C) para manter os sucos nobres.'
    ],
    keyRule: 'Dica de Ouro: Nunca retire a capa de gordura antes de assar. É ela que hidrata e perfuma a carne ao derreter lentamente sobre a brasa.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'picanha-compra',
    stepNumber: null,
    sectionTitle: '1. Inspeção no Açougue',
    title: 'Como Escolher a Picanha Perfeita',
    subtitle: 'Identificação da 3ª veia e espessura da capa',
    category: 'comprar' as const,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Capa de gordura espessa e contínua, cor vermelho cereja brilhante.',
    paragraphs: [
      'A verdadeira picanha termina na 3ª veia colateral da peça. Peças que pesam mais de 1,4 kg em raças convencionais costumam incluir pedaços de coxão duro disfarçados.',
      'A capa de gordura deve cobrir toda a superfície superior com espessura uniforme de pelo menos 1 cm a 1,5 cm.'
    ],
    bullets: [
      'Peso Ideal: Entre 1,0 kg e 1,3 kg por peça inteira.',
      'Regra das 3 Veias: O corte termina exatamente após a terceira ramificação vascular.',
      'Marmoreio: Pontos de gordura intramuscular entre as fibras.',
      'Cor da Gordura: Branca a levemente amarelada (gordura fresca e saudável).'
    ],
    keyRule: 'Inspecione a galeria interativa para dominar a seleção visual da picanha.',
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'picanha-capa',
        title: 'Capa de Gordura',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Capa contínua sem falhas ou buracos de desossa, espessura homogênea de 1 a 2 cm.',
        whatToLookFor: ['Capa uniforme e branca', 'Superfície lisa', 'Sem cortes profundos na carne'],
        whatToAvoid: ['Capa falhada ou raspada', 'Gordura com cheiro rançoso ou excessivamente amarela']
      },
      {
        id: 'picanha-veias',
        title: 'Formato Triangular & 3ª Veia',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Formato triangular clássico. A ponta é a parte mais macia, alargando até a terceira veia.',
        whatToLookFor: ['Ponta triangular bem definida', 'Peso de até 1,3 kg'],
        whatToAvoid: ['Peças gigantescas de 2 kg (coxão duro embutido)']
      },
      {
        id: 'picanha-cor',
        title: 'Coloração da Carne',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Vermelho vivo brilhante e fresco.',
        whatToLookFor: ['Brilho natural', 'Fibras compactas e finas'],
        whatToAvoid: ['Carne opaca, amarronzada ou com líquido excessivo na embalagem']
      }
    ]
  },
  {
    id: 'picanha-corte-bifes',
    stepNumber: 1,
    sectionTitle: '2. Preparação dos Steaks',
    title: 'Corte em Bifes de 2 Dedos',
    subtitle: 'Espessura de 3 a 4 cm para manter a suculência',
    category: 'preparo' as const,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Corte em medalhões ou steaks grossos preserva o centro suculento e rosado.',
    paragraphs: [
      'Para a grelha tradicional brasileira, o melhor método é fatiar a peça crua em bifes grossos de 2 a 3 dedos de espessura (cerca de 3,5 cm a 4 cm).',
      'Faça cortes perpendiculares à fibra ou ligeiramente inclinados. Ao fatiar espesso, você garante uma selagem crocante por fora enquanto o miolo atinge a temperatura ideal sem ressecar.'
    ],
    bullets: [
      'Espessura mínima de 3 cm (2 dedos largos do assador).',
      'Leve incisão xadrez superficial na gordura para não envergar na brasa.',
      'Deixe a carne atingir a temperatura ambiente por 15 minutos antes de ir à grelha.'
    ],
    interactiveType: 'fiber_slicer' as const
  },
  {
    id: 'picanha-fogo',
    stepNumber: 2,
    sectionTitle: '3. O Braseiro Perfeito',
    title: 'Brasa Viva & Zona de Segurança',
    subtitle: 'Calor forte a 15–20 cm da grelha',
    category: 'fogo' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Brasa incandescente coberta por cinzas claras, sem chamas altas.',
    paragraphs: [
      'A picanha requer brasa bem quente para a selagem inicial. No teste da mão, você deve suportar entre 3 a 4 segundos na altura da grelha.',
      'Como a gordura da picanha derrete intensamente, é indispensável ter uma Zona Fria/Indireta para mover a carne caso surjam labaredas provocadas pelo gotejamento.'
    ],
    bullets: [
      'Grelha a 15–20 cm do braseiro para selagem.',
      'Grelha superior (35–40 cm) ou lateral para descanso e cozimento suave.',
      'Nunca jogue água na brasa: mova a carne para a zona fria.'
    ],
    keyRule: 'Chamas queimam a gordura e deixam gosto amargo de fuligem. Deixe o braseiro incandescente sem chamas vivas.',
    interactiveType: 'two_zone_fire' as const
  },
  {
    id: 'picanha-sal',
    stepNumber: 3,
    sectionTitle: '4. O Tempero',
    title: 'Sal de Parrilla ou Sal Grosso',
    subtitle: 'Salgar imediatamente antes de colocar na grelha',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sal grosso médio ou sal de parrilla distribuído uniformemente em ambos os lados.',
    paragraphs: [
      'O melhor tempero para a picanha é exclusivamente o sal de parrilla (moagem média) ou o sal grosso tradicional.',
      'Salgue a carne apenas 2 a 3 minutos antes de entrar no fogo. O sal fino retira água precocemente, enquanto o sal médio adere e forma uma crosta saborosa ao caramelizar com a mioglobina.'
    ],
    bullets: [
      'Dosagem: cerca de 10g a 12g de sal por quilo de carne.',
      'Aplique em todas as faces da carne e na borda da gordura.',
      'Bata o excesso antes de fatiar para não ficar salgado.'
    ],
    keyRule: 'Picanha de qualidade dispensa amaciantes ou marinadas ácidas.'
  },
  {
    id: 'picanha-grelha',
    stepNumber: 4,
    sectionTitle: '5. A Selagem & Cocção',
    title: 'A Selagem dos Steaks',
    subtitle: '3 a 4 minutos por lado para a Reação de Maillard',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A fumaça perfuma a carne e a reação de Maillard cria a crosta dourada irresistível.',
    paragraphs: [
      'Coloque os steaks de picanha na zona de calor direto forte. Sele por 3 a 4 minutos até criar uma crosta marrom-dourada profunda.',
      'Vire uma única vez e sele o outro lado por mais 3 a 4 minutos. Por fim, sele a capa de gordura apoiando-a em pé na grelha por 1 minuto para deixá-la crocante.'
    ],
    bullets: [
      'Lado 1: 3 a 4 minutos em calor direto forte.',
      'Lado 2: 3 a 4 minutos em calor direto forte.',
      'Borda de Gordura: 1 a 2 minutos em pé para tostar a gordura.',
      'Finalização: se desejar mais cozida, suba para a grelha superior por 3 a 5 minutos.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'picanha-ponto',
    stepNumber: 5,
    sectionTitle: '6. O Ponto Ideal',
    title: 'Temperatura Interna: 52°C a 56°C',
    subtitle: 'Ponto para menos é o padrão supremo da picanha',
    category: 'ponto' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Centro rosado uniforme, bordas tostadas e sucos abundantes.',
    paragraphs: [
      'A picanha perde grande parte de sua nobreza se passar do ponto. Em temperaturas acima de 60°C, as fibras musculares se contraem e expulsam a água, tornando a carne seca e rígida.',
      'Retire a picanha da churrasqueira quando o centro atingir 52°C a 54°C. No descanso, a temperatura subirá para 55°C a 56°C (ponto da casa perfeito).'
    ],
    bullets: [
      'Malpassada: 48°C a 52°C (centro vermelho escuro, textura macia).',
      'Ao Ponto para Menos (Ideal): 52°C a 56°C (centro rosa quente e brilhante).',
      'Ao Ponto: 57°C a 60°C (centro rosa claro).',
      'Bem Passada: > 64°C (perda drástica de suculência e textura).'
    ],
    interactiveType: 'doneness_picker' as const
  },
  {
    id: 'picanha-descanso',
    stepNumber: 6,
    sectionTitle: '7. O Descanso Sagrado',
    title: '5 Minutos na Tábua',
    subtitle: 'Redistribuição térmica dos sucos internos',
    category: 'descanso' as const,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Aguarde 5 minutos antes da primeira incisão para reter todos os sucos nobres.',
    paragraphs: [
      'Ao sair do fogo forte, as pressões hidrostáticas empurram os sucos para o centro da carne. Cortar imediatamente fará com que toda a umidade vaze na tábua, desidratando o steak.',
      'Deixe os bifes repousarem sobre a tábua por 4 a 5 minutos. A temperatura estabilizará e os sucos se redistribuirão igualmente em cada fibra.'
    ],
    bullets: [
      'Tempo de descanso: 4 a 5 minutos para bifes de 3 a 4 cm.',
      'Não tampe hermeticamente com papel alumínio para não amolecer a crosta crocante.',
      'A tábua de corte deve estar seca e limpa.'
    ],
    interactiveType: 'resting_timer' as const
  },
  {
    id: 'picanha-corte-final',
    stepNumber: 7,
    sectionTitle: '8. O Fatiamento',
    title: 'Corte Contra a Fibra em Tiras Finas',
    subtitle: 'Faca bem afiada em ângulo de 90°',
    category: 'corte' as const,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie tiras de 0,5 a 1 cm garantindo um pedaço de capa de gordura por fatia.',
    paragraphs: [
      'Na hora de servir aos convidados, fatie os bifes transversalmente em tiras finas de 0,5 cm a 1 cm.',
      'Certifique-se de que cada fatia receba um pequeno pedaço da capa de gordura dourada, proporcionando a clássica experiência de degustação do churrasco brasileiro.'
    ],
    bullets: [
      'Use faca de 8 ou 10 polegadas lisa (sem serra) e afiada.',
      'Corte de forma contínua sem "serrar" a carne.',
      'Finalize com uma pitada de flor de sal na tábua.'
    ],
    interactiveType: 'fiber_slicer' as const
  },
  {
    id: 'picanha-servir',
    stepNumber: 8,
    sectionTitle: '9. Mesa & Guarnições',
    title: 'Farofa na Manteiga, Vinagrete & Pão de Alho',
    subtitle: 'As harmonizações que consagram a picanha',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as fatias quentes com farofa crocante e chimichurri artesanal.',
    paragraphs: [
      'A picanha deve ser servida imediatamente após o fatiamento, de preferência em tábua aquecida.',
      'Acompanhamentos tradicionais como farofa de cebola caramelizada, vinagrete fresco com tomate em cubos e pão de alho bem tostado complementam o perfil gorduroso e nobre da carne.'
    ],
    bullets: [
      'Farofa crocante com bacon e manteiga de garrafa.',
      'Vinagrete ácido para limpar o paladar entre as fatias.',
      'Pão de alho com queijo crocante na brasa.'
    ],
    interactiveType: 'serve_checklist' as const
  },
  {
    id: 'picanha-manifesto',
    stepNumber: null,
    sectionTitle: '10. O Manifesto do Assador',
    title: 'As 3 Leis Inegociáveis da Picanha',
    subtitle: 'Consagre a sua reputação no comando da churrasqueira',
    category: 'resumo' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A tríade da perfeição: gordura preservada, ponto rosado e descanso prévio ao corte.',
    paragraphs: [
      'Assar a picanha com perfeição é o ritual supremo da hospitalidade brasileira. Dominando o controle da brasa, o ponto rosado e o descanso dos sucos, você garante uma carne inesquecível em qualquer churrasco.'
    ],
    bullets: [
      'Lei 1: Nunca arranque a gordura antes de assar.',
      'Lei 2: Jamais passe de 58°C de temperatura interna.',
      'Lei 3: Respeite os 5 minutos de descanso antes de fatiar.'
    ],
    interactiveType: 'golden_rules' as const
  }
];

export const COSTELA_STEPS = [
  {
    id: 'costela-intro',
    stepNumber: null,
    sectionTitle: 'Costela Gaúcha na Churrasqueira',
    title: 'O Monumento do Cozimento Lento',
    subtitle: 'Costela Janela ou Ripa (3 a 5 horas de fogo brando)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Carne rica em colágeno que desmancha do osso após horas de fumaça e braseiro brando.',
    paragraphs: [
      'A Costela Bovina (seja a Janela ou a Ripa) é o corte mais tradicional dos pampas gaúchos. Ao contrário dos cortes de grelha rápida, a costela é pura transformação de colágeno e gordura em gelatina ultra suculenta.',
      'O preparo exige paciência: entre 3 a 5 horas a uma altura de 50 a 60 cm do fogo. A regra fundamental é manter o osso voltado para baixo na brasa durante 80% do tempo de cozimento.'
    ],
    bullets: [
      'Rendimento: Calcule 450g a 500g por pessoa (devido ao peso dos ossos).',
      'Altura da Grelha: 50 cm a 60 cm da brasa (calor brando constante).',
      'Ponto de Sucesso: Quando a carne retrai 2 a 3 cm expondo as pontas dos ossos.'
    ],
    keyRule: 'Regra de Ouro: O osso funciona como um escudo térmico natural. Ele conduz o calor suavemente para o interior da carne.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'costela-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'Janela vs Ripa & Marmoreio',
    subtitle: 'Costela de primeira com ossos largos e retos',
    category: 'comprar' as const,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Costela janela com ossos largos, retos e boa camada de carne intercalada com gordura.',
    paragraphs: [
      'Prefira a Costela Janela (parte central da costela bovina, com ossos mais largos e achatados). Ela possui mais carne macia entremeada e menos sebo duro.',
      'A carne deve ter cor vermelho brilhante e os ossos devem ser brancos e planos (indicativo de animal jovem e bem alimentado).'
    ],
    bullets: [
      'Ossos largos e achatados (Costela Janela).',
      'Camadas generosas de carne entremeadas de gordura.',
      'Evite peças com excesso de sebo amarelado rígido.',
      'Peso médio da peça: 2,5 kg a 4,0 kg.'
    ],
    interactiveType: 'inspection_gallery' as const,
    inspectionItems: [
      {
        id: 'costela-ossos',
        title: 'Ossos Largos & Retos',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Ossos achatados com boa separação indicam a melhor seção da janela da costela.',
        whatToLookFor: ['Ossos planos e paralelos', 'Animal jovem'],
        whatToAvoid: ['Ossos redondos muito finos com pouca carne']
      },
      {
        id: 'costela-camadas',
        title: 'Entremeado de Gordura',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Camadas alternadas de carne e gordura branca que derreterão durante as horas de brasa.',
        whatToLookFor: ['Gordura branca cremosa', 'Carne espessa sobre o osso'],
        whatToAvoid: ['Capa de sebo fibroso seco']
      }
    ]
  },
  {
    id: 'costela-tempero',
    stepNumber: 1,
    sectionTitle: '2. Tempero Tradicional',
    title: 'Sal Grosso e Cachaça (Opcional)',
    subtitle: 'Simplicidade rústica para valorizar o sabor do boi',
    category: 'tempero' as const,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Apenas sal grosso grosso distribuído em abundância sobre a carne.',
    paragraphs: [
      'No tradicional churrasco gaúcho, a costela é temperada exclusivamente com sal grosso cerca de 30 minutos antes de ir ao fogo.',
      'Alguns mestres borrifam uma leve dose de cachaça branca ou água com salmoura durante as horas de assado para manter a umidade da superfície e realçar o brilho da crosta.'
    ],
    bullets: [
      'Sal grosso médio ou grosso em toda a peça.',
      'Deixe descansar 20 a 30 minutos para absorção uniforme.',
      'Bata levemente o excesso antes de posicionar na grelha.'
    ],
    keyRule: 'Nunca use temperos com açúcar cedo demais, pois queimarão durante as 4 horas de assado.'
  },
  {
    id: 'costela-fogo-tempo',
    stepNumber: 2,
    sectionTitle: '3. O Fogo Indireto & Altura',
    title: '50 a 60 cm do Braseiro (Calor Brando)',
    subtitle: 'Mão suporta 6 a 8 segundos na altura da grelha',
    category: 'fogo' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Calor brando constante com fumaça limpa de lenha frutífera ou carvão de eucalipto.',
    paragraphs: [
      'Posicione a costela com os OSSOS VIRADOS PARA BAIXO (em direção ao fogo) a uma altura de 50 a 60 cm.',
      'O braseiro deve ser mantido de forma estável, adicionando pequenas porções de carvão já em brasa nas laterais para não gerar fumaça escura de fuligem.'
    ],
    bullets: [
      'Tempo com os ossos para baixo: 3 a 4 horas.',
      'Temperatura na grelha: 120°C a 140°C (fogo brando).',
      'Adicione nós de lenha seca para criar aroma defumado suave.'
    ],
    interactiveType: 'two_zone_fire' as const
  },
  {
    id: 'costela-virada',
    stepNumber: 3,
    sectionTitle: '4. A Virada & Douramento',
    title: 'Virar a Carne para Baixo (Últimos 40 min)',
    subtitle: 'Criando a crosta dourada e crocante',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Quando os ossos se soltarem facilmente, vire a carne para baixo para dourar a capa externa.',
    paragraphs: [
      'Quando você notar que a carne retraiu e as pontas dos ossos estão expostas e soltando da carne, é hora de virar a peça.',
      'Deixe a parte da carne voltada para a brasa por 40 a 50 minutos para dourar e pururucar levemente a capa de gordura externa.'
    ],
    bullets: [
      'Teste do osso: puxe levemente um dos ossos; se girar fácil, está no ponto.',
      'Douramento: 40 a 50 minutos com a carne para baixo.',
      'Monitore para não deixar queimar em pontos de gordura concentrada.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'costela-corte-servir',
    stepNumber: 4,
    sectionTitle: '5. O Fatiamento & Mesa',
    title: 'Puxar o Osso & Cortar em Ripas',
    subtitle: 'Carne desmanchando com farofa de ovos e mandioca cozida',
    category: 'servir' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva a costela soltando dos ossos acompanhada de mandioca amanteigada.',
    paragraphs: [
      'Retire a costela do fogo e descanse por 10 minutos. Puxe os ossos: eles devem sair limpos sem esforço.',
      'Fatie em ripas largas e sirva com mandioca cozida na manteiga de garrafa, vinagrete rústico e farofa de ovos.'
    ],
    bullets: [
      'Descanso de 10 minutos na tábua.',
      'Retire os ossos inteiros com facilidade.',
      'Harmonize com mandioca, vinagrete e farofa campeira.'
    ],
    interactiveType: 'serve_checklist' as const
  }
];

export const MAMINHA_STEPS = [
  {
    id: 'maminha-intro',
    stepNumber: null,
    sectionTitle: 'Maminha na Churrasqueira',
    title: 'A Maciez Suculenta da Alcatra',
    subtitle: 'Peça inteira de 1,0 a 1,4 kg com corte em leque',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A maminha é um corte extremamente úmido e amanteigado quando preparada ao ponto para menos.',
    paragraphs: [
      'A maminha é a ponta mais tenra e macia da alcatra. De formato triangular, possui excelente irrigação de sucos e uma capa de gordura suave.',
      'O maior diferencial da maminha está na disposição de suas fibras musculares: elas correm em formato de LEQUE. Por isso, ao fatiar, o assador precisa mudar gradualmente a angulação da faca.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa.',
      'Perfil: Fibras delicadas em leque, muita suculência.',
      'Ponto ideal: Malpassada ou Ao Ponto para Menos (52°C a 55°C).'
    ],
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'maminha-fogo-grelha',
    stepNumber: 1,
    sectionTitle: '1. Selagem & Cocção',
    title: 'Selar a 20 cm e Subir para 40 cm',
    subtitle: 'Peça inteira selada por fora e úmida no miolo',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sele todos os lados da peça e termine o cozimento suave na grelha superior.',
    paragraphs: [
      'Sele todos os lados da peça inteira a 20 cm da brasa por 4 minutos de cada lado até criar uma crosta dourada.',
      'Em seguida, suba a peça para o segundo andar da churrasqueira (35 a 40 cm) por mais 15 a 20 minutos para que o calor atinja o centro suavemente sem queimar a superfície.'
    ],
    bullets: [
      'Selagem direta: 4 min de cada lado a 20 cm.',
      'Cocção indireta: 15 a 20 min a 40 cm.',
      'Alvo interno: 54°C no termômetro culinário.'
    ],
    interactiveType: 'searing_timer' as const
  },
  {
    id: 'maminha-corte-leque',
    stepNumber: 2,
    sectionTitle: '2. O Corte em Leque',
    title: 'Ajuste de Ângulo da Lâmina a 90°',
    subtitle: 'Acompanhando a curvatura das fibras para maciez absoluta',
    category: 'corte' as const,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Mude a direção da faca conforme avança da ponta mais fina para a base larga da maminha.',
    paragraphs: [
      'Como as fibras se abrem da ponta para a base como um leque aberto, cortar sempre em linha reta fará metade da carne ficar fibrosa.',
      'Comece cortando em um ângulo na ponta e vá girando a faca suavemente conforme avança para a parte mais espessa.'
    ],
    bullets: [
      'Identifique a direção das fibras antes de fazer o primeiro corte.',
      'Mantenha a faca sempre perpendicular ao sentido de abertura do leque.',
      'Fatie fininho (0,5 cm) para derreter na boca.'
    ],
    interactiveType: 'fiber_slicer' as const
  }
];

export const CONTRAFILE_ANCHO_STEPS = [
  {
    id: 'ancho-intro',
    stepNumber: null,
    sectionTitle: 'Contrafilé, Ancho & Chorizo',
    title: 'O Clássico de Grelha Rápida e Marmoreio',
    subtitle: 'Steaks de 400g a 500g (3 cm de altura)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O Bife Ancho (Ribeye) e o Chorizo destacam-se pelo alto marmoreio intramuscular.',
    paragraphs: [
      'O Contrafilé é a espinha dorsal dos melhores churrascos de grelha. No corte dianteiro temos o Bife Ancho (com o olho de gordura central) e no traseiro temos o Bife de Chorizo (com a capa de gordura lateral).',
      'O preparo do contrafilé de qualidade é rápido e intenso: brasa forte a 15 cm da grelha, 3 minutos por lado e descanso rápido.'
    ],
    bullets: [
      'Espessura: 2 a 3 dedos (3 cm a 4 cm).',
      'Tempo de Fogo: 3 a 4 minutos por lado em calor direto forte.',
      'Ponto: Ao Ponto para Menos (52°C a 55°C).'
    ],
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'ancho-grelha-tempo',
    stepNumber: 1,
    sectionTitle: '1. A Selagem a 15 cm',
    title: 'Calor Forte para a Reação de Maillard',
    subtitle: 'Grelha bem quente com chiado instantâneo',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A alta temperatura carameliza os açúcares e proteínas da superfície formando uma crosta crocante.',
    paragraphs: [
      'Aqueça a grelha previamente por 10 minutos. Coloque os bifes espessos sobre o braseiro forte.',
      'Deixe 3 minutos sem mexer para formar a marcação de grelha e a crosta marrom escura. Vire e asse por mais 3 minutos.'
    ],
    bullets: [
      'Grelha a 15 cm da brasa incandescente.',
      '3 min no primeiro lado → Vire → 3 min no segundo lado.',
      'Descanso de 3 a 4 minutos antes do corte transversal.'
    ],
    interactiveType: 'searing_timer' as const
  }
];

export const CUPIM_STEPS = [
  {
    id: 'cupim-intro',
    stepNumber: null,
    sectionTitle: 'Cupim na Churrasqueira',
    title: 'O Ícone Zebuíno do Churrasco Brasileiro',
    subtitle: 'Cozimento lento no papel alumínio/celofane (3 a 4 horas)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O cupim é a corcova do gado Nelore, repleta de veios de gordura entremeada e colágeno.',
    paragraphs: [
      'O cupim é uma exclusividade do gado zebuíno (como o Nelore), muito comum no Brasil. É um corte rico em gordura e fibras que necessita de cozimento prolongado para dissolver o colágeno.',
      'O método clássico consiste em temperar a peça inteira, embrulhar em 5 a 6 voltas de papel celofane culinário ou alumínio com manteiga, e assar por 3 a 4 horas. No final, retira-se o invólucro para dourar e pururucar na brasa forte.'
    ],
    bullets: [
      'Peso médio: 2,0 kg a 3,5 kg.',
      'Embrulhado: 3 a 4 horas a 40 cm da brasa.',
      'Finalização: 15 minutos na brasa direta para criar crosta crocante ("casquinha").'
    ],
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'cupim-casquinha',
    stepNumber: 1,
    sectionTitle: '1. O Casqueamento do Cupim',
    title: 'Técnica de Fatiar e Voltar à Brasa',
    subtitle: 'Fatiar as casquinhas douradas sucessivamente',
    category: 'corte' as const,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Vá fatiando as casquinhas douradas externas e devolvendo a peça ao fogo para criar novas camadas.',
    paragraphs: [
      'No método de casqueamento, após amaciar a peça no papel, você a leva para dourar na brasa. Fatiam-se tiras finas das bordas tostadas ("casquinhas") para os convidados.',
      'A peça volta para a brasa para dourar a nova camada exposta. Esse processo garante petiscos quentes, crocantes e suculentos durante todo o evento.'
    ],
    bullets: [
      'Desembrulhe a peça com cuidado retendo o caldo.',
      'Dore por 5 minutos na brasa direta.',
      'Fatie casquinhas finas e retorne a peça para dourar novamente.'
    ],
    interactiveType: 'fiber_slicer' as const
  }
];

export const LINGUICA_STEPS = [
  {
    id: 'linguica-intro',
    stepNumber: null,
    sectionTitle: 'Linguiça Toscana & Artesanal',
    title: 'A Entrada Obrigatória do Churrasco',
    subtitle: 'Suculência interna e pele crocante (Sem furar a tripa)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A linguiça toscana, campeira ou cuiabana (recheada de queijo) abre todo churrasco brasileiro.',
    paragraphs: [
      'A linguiça é o petisco de boas-vindas do churrasco brasileiro. Feita de pernil, paleta suína e temperos naturais, ela atinge a perfeição quando assada em braseiro médio a 30 cm da grelha.',
      'A LEI SUPREMA da linguiça: NUNCA fure a tripa com garfos ou facas! Furar a linguiça faz toda a gordura e os sucos escorrerem para a brasa, deixando o interior seco e ressecado.'
    ],
    bullets: [
      'Proporção: 150g a 200g por pessoa como entrada.',
      'Altura da grelha: 30 cm (calor médio).',
      'Tempo de preparo: 25 a 35 minutos virando a cada 8 minutos.'
    ],
    keyRule: 'NUNCA fure a linguiça! A tripa retém o vapor e cozinha o recheio por dentro, garantindo maciez inigualável.',
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'linguica-grelha',
    stepNumber: 1,
    sectionTitle: '1. Cocção Lenta & Douramento',
    title: 'Grelha a 30 cm & Viradas Uniformes',
    subtitle: 'Interior cozido a 75°C e tripa estaladiça',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Asse com calma virando para dourar todos os lados por igual sem estourar a pele.',
    paragraphs: [
      'Coloque os gomos inteiros na grelha a 30 cm da brasa em calor médio.',
      'Vire a cada 7 a 8 minutos para que todos os lados fiquem dourados e a gordura interna derreta sem estourar a tripa.',
      'Sirva fatiada com pão de alho, farofa crocante e molho vinagrete.'
    ],
    bullets: [
      'Grelha a 30 cm em calor médio (mão aguenta 4 a 5s).',
      'Tempo total: ~30 minutos.',
      'Sirva fatiada em rodelas de 1,5 cm na tábua.'
    ],
    interactiveType: 'searing_timer' as const
  }
];

export const CORACAO_FRANGO_STEPS = [
  {
    id: 'coracao-intro',
    stepNumber: null,
    sectionTitle: 'Coração de Frango no Espeto',
    title: 'O Petisco Mais Adorado do Brasil',
    subtitle: 'Marinado em vinho branco, alho e ervas (15 minutos de brasa)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Coraçõezinhos dourados no espeto duplo com suculência interna e sabor marcante.',
    paragraphs: [
      'O coração de frango é uma paixão nacional brasileira presente em praticamente todos os churrascos familiares e rodízios.',
      'Por ser um músculo magro e ativo, seu ponto é preciso: precisa de fogo médio-forte a 25 cm para dourar rápido por fora mantendo o interior rosado e macio. Se passar do ponto, fica borrachudo.'
    ],
    bullets: [
      'Proporção: 100g a 150g por pessoa (cerca de 8 a 10 corações).',
      'Marinada: Alho triturado, louro, cebola, páprica, pimenta-do-reino e vinho branco.',
      'Espetado: Use espeto duplo ou de bambu compacto (um colado no outro).'
    ],
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'coracao-marinada-fogo',
    stepNumber: 1,
    sectionTitle: '1. Marinada & Grelha',
    title: 'Marinada de 2 Horas & Brasa a 25 cm',
    subtitle: 'Viradas rápidas até atingir tom dourado uniforme',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Gire o espeto a cada 3 minutos para dourar por igual sem ressecar o interior.',
    paragraphs: [
      'Deixe os corações limpos na marinada na geladeira por 1 a 2 horas antes do churrasco.',
      'Espete-os de forma compacta (um encostado no outro para reter a umidade). Asse na grelha a 25 cm por 12 a 15 minutos, girando a cada 3 minutos.',
      'Sirva direto do espeto aos convidados com farofa de mandioca temperada.'
    ],
    bullets: [
      '12 a 15 minutos no total em calor médio-forte.',
      'Gire os 4 lados do espeto.',
      'Ponto ideal: dourado brilhante por fora e tenro por dentro.'
    ],
    interactiveType: 'searing_timer' as const
  }
];

export const COSTELINHA_SUINA_STEPS = [
  {
    id: 'costelinha-intro',
    stepNumber: null,
    sectionTitle: 'Costelinha Suína na Brasa',
    title: 'Maciez com Crosta Temperada',
    subtitle: 'Com limão, alho e páprica (45 a 60 min a 35 cm)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Costelinha suína crocante por fora com carne desprendendo suavemente do osso.',
    paragraphs: [
      'A costelinha de porco é famosa pela combinação de carne saborosa, gordura suculenta e casquinha dourada.',
      'O tempero clássico brasileiro leva alho, suco de limão taiti, sal fino, pimenta-do-reino e uma pitada de páprica defumada ou alecrim.'
    ],
    bullets: [
      'Proporção: 350g a 400g por pessoa (com osso).',
      'Altura da grelha: 35 cm a 40 cm (fogo brando-médio).',
      'Tempo de preparo: 45 a 60 minutos virando a cada 15 minutos.'
    ],
    interactiveType: 'portion_calc' as const
  },
  {
    id: 'costelinha-grelha',
    stepNumber: 1,
    sectionTitle: '1. Grelha com Osso para Baixo',
    title: 'Comece com o Osso para a Brasa',
    subtitle: '30 min com osso para baixo → 20 min para dourar a carne',
    category: 'grelha' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Asse pacientemente para cozinhar o interior até 75°C e finalizar dourando a carne.',
    paragraphs: [
      'Coloque a peça na grelha a 35 cm com os ossos para baixo por 30 minutos. O calor subirá pelos ossos cozinhando a carne suavemente.',
      'Vire a parte da carne para baixo por mais 15 a 20 minutos até formar uma crosta caramelizada deliciosa. Fatie osso a osso e sirva com gomos de limão.'
    ],
    bullets: [
      '30 min com o osso para baixo a 35 cm.',
      '15 a 20 min com a carne para baixo para douramento final.',
      'Corte entre os ossos em ripas individuais.'
    ],
    interactiveType: 'searing_timer' as const
  }
];

export const PANCETA_STEPS = [
  {
    id: 'panceta-intro',
    stepNumber: null,
    sectionTitle: 'Panceta & Barriga Suína Pururuca',
    title: 'A Crocância Estaladiça Suprema',
    subtitle: 'Carne macia com couro pururucado e estalando',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Panceta fatiada com couro estaladiço e camadas intercaladas de carne e gordura.',
    paragraphs: [
      'A panceta (barriga de porco fresca com pele) é um dos maiores espetáculos do churrasco. O objetivo é cozinhar a carne até amaciar e transformar o couro duro em pururuca leve, crocante e aerada.',
      'O segredo da pururuca: pele completamente SECA antes de ir ao fogo. Asse primeiro a carne a 40 cm e finalize encostando o couro na brasa muito quente.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa.',
      'Preparo do couro: Faça microcortes superficiais e seque com papel toalha.',
      'Técnica: Cozimento indireto a 40 cm (40 min) + Pururuca direta rápida (5 min).'
    ],
    interactiveType: 'portion_calc' as const
  }
];

export const ASA_FRANGO_STEPS = [
  {
    id: 'asa-intro',
    stepNumber: null,
    sectionTitle: 'Tulipa & Asinha de Frango',
    title: 'Pele Ultra Crocante & Carne Suculenta',
    subtitle: 'Meio da asa temperado com lemon pepper e mostarda',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Tulipas e asinhas tostadas em braseiro médio até descolar do osso com facilidade.',
    paragraphs: [
      'As asinhas (especialmente a tulipa / meio da asa e a coxinha da asa) são petiscos clássicos que agradam a todos os convidados.',
      'Devem ser assadas a uma altura de 30 a 35 cm para que a pele desidrate e fique crocante enquanto o interior atinge a temperatura segura de 75°C.'
    ],
    bullets: [
      'Proporção: 200g a 250g por pessoa.',
      'Tempero: Lemon pepper, mostarda dijon/amarela, alho em pó e sal fino.',
      'Tempo de grelha: 30 a 35 minutos virando a cada 8 minutos.'
    ],
    interactiveType: 'portion_calc' as const
  }
];

export const CORDEIRO_STEPS = [
  {
    id: 'cordeiro-intro',
    stepNumber: null,
    sectionTitle: 'Carré & Paleta de Cordeiro',
    title: 'A Nobreza dos Ovinos no Churrasco',
    subtitle: 'Com alecrim fresco, alho e ponto rosado aromático',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O carré de cordeiro possui sabor elegante, complementado pelo perfume de ervas frescas.',
    paragraphs: [
      'O cordeiro é uma das carnes mais refinadas da culinária de brasa. Seus cortes mais consagrados são o Carré (costelinhas nobres francesas) e a Paleta.',
      'Harmoniza perfeitamente com marinadas de vinho branco seco, bastante alho amassado, folhas frescas de alecrim e hortelã. O ponto ideal é o rosado tenro (56°C a 60°C).'
    ],
    bullets: [
      'Proporção: 350g por pessoa (com osso).',
      'Ervas: Alecrim fresco picado, hortelã e azeite extravirgem.',
      'Ponto: Ao ponto rosado (58°C no centro).'
    ],
    interactiveType: 'portion_calc' as const
  }
];

export const ASSADO_TIRA_STEPS = [
  {
    id: 'tira-intro',
    stepNumber: null,
    sectionTitle: 'Assado de Tira / Bife de Tira',
    title: 'A Costela Rápida de Parrilla',
    subtitle: 'Fatias transversais com ossinhos (3 a 4 min por lado)',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Corte transversal da costela com pequenos ossos que concentra sabor intenso e preparo ágil.',
    paragraphs: [
      'O Assado de Tira é o corte transversal da costela do dianteiro ou traseiro. Ao contrário da costela inteira que leva horas, as tiras finas de 1,5 a 2 cm assam em minutos em brasa forte.',
      'O contato da carne com o osso e a gordura ao redor gera um dos sabores mais intensos de todo o churrasco.'
    ],
    bullets: [
      'Espessura: 1,5 cm a 2,0 cm de largura.',
      'Grelha a 15 cm em braseiro muito forte.',
      'Tempo: 3 a 4 minutos no primeiro lado, 2 a 3 minutos no segundo.'
    ],
    interactiveType: 'portion_calc' as const
  }
];

export const ALCATRA_STEPS = [
  {
    id: 'alcatra-intro',
    stepNumber: null,
    sectionTitle: 'Alcatra com Maminha & Baby Beef',
    title: 'A Versatilidade da Família da Alcatra',
    subtitle: 'Fibras curtas e macias para steaks ou peça inteira',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A alcatra completa inclui o miolo (baby beef), a maminha e o topo da alcatra.',
    paragraphs: [
      'A alcatra é um clássico absoluto dos domingos brasileiros. Possui fibras curtas, sabor suave e excelente maciez.',
      'Pode ser assada inteira no espeto corrido, ou fatiada em bifes grossos de miolo de alcatra (Baby Beef) na grelha a 20 cm da brasa.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa.',
      'Ponto ideal: Ao ponto para mal (52°C a 55°C).',
      'Tempero: Sal grosso ou sal de parrilla aplicado na hora.'
    ],
    interactiveType: 'portion_calc' as const
  }
];

export const SOBRECOXA_STEPS = [
  {
    id: 'sobrecoxa-intro',
    stepNumber: null,
    sectionTitle: 'Sobrecoxa Desossada na Brasa',
    title: 'A Maior Suculência de Frango na Grelha',
    subtitle: 'Pele bem tostada e carne incrivelmente macia',
    category: 'intro' as const,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A gordura natural da sobrecoxa mantém a carne úmida enquanto a pele ganha crocância.',
    paragraphs: [
      'A sobrecoxa desossada é a rainha das aves no churrasco. Por conter mais gordura intramuscular do que o peito, não resseca no fogo.',
      'Asse primeiro com a pele virada para CIMA a 30 cm por 15 minutos; depois vire a pele para BAIXO por 10 minutos para pururucar e dourar.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa.',
      'Temperatura interna segura: 75°C.',
      'Finalização com pele crocante voltada para a brasa.'
    ],
    interactiveType: 'portion_calc' as const
  }
];

// Master Catalog of Brazilian Churrasco Meats
export const BRAZILIAN_MEATS: MeatCut[] = [
  {
    id: 'picanha',
    name: 'Picanha',
    shortName: 'Picanha',
    category: 'bovino_nobre',
    categoryLabel: 'Bovino Nobre',
    tagline: 'A rainha absoluta do churrasco brasileiro',
    description: 'Capa de gordura uniforme, maciez de fibras curtas e sabor inconfundível. O corte mais pedido em todo churrasco.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 250,
    prepTimeText: '8–12 min (Steaks de 2 dedos)',
    grillHeight: '15–20 cm (Calor Forte)',
    heatLevelText: 'Calor Forte (3–4s na mão)',
    optimalPullTemp: '52°C – 55°C (Ao Ponto para Menos)',
    cuttingTechnique: 'Transversal a 90° contra a fibra',
    steps: PICANHA_STEPS
  },
  {
    id: 'fraldinha',
    name: 'Fraldinha (Vacio)',
    shortName: 'Fraldinha',
    category: 'bovino_nobre',
    categoryLabel: 'Bovino Nobre',
    tagline: 'Fibras longas, marmoreio e suculência máxima',
    description: 'Corte saboroso e úmido da lateral bovina. Requer brasa forte, descanso correto e corte estritamente contra as fibras.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 250,
    prepTimeText: '10–14 min (2 Zonas)',
    grillHeight: '15 cm (Direto) / 35 cm (Indireto)',
    heatLevelText: 'Calor Forte + Zona Fria',
    optimalPullTemp: '54°C – 57°C (Ponto da Casa)',
    cuttingTechnique: 'Rigorosamente a 90° contra a fibra',
    steps: FRALDINHA_STEPS
  },
  {
    id: 'costela',
    name: 'Costela Gaúcha (Janela / Ripa)',
    shortName: 'Costela',
    category: 'bovino_tradicional',
    categoryLabel: 'Bovino Tradicional',
    tagline: 'O monumento do cozimento lento de 4 horas',
    description: 'Rica em colágeno e marmoreio. Cozida pacientemente com o osso para baixo até a carne desmanchar.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 450,
    prepTimeText: '3 a 5 Horas (Fogo Brando)',
    grillHeight: '50–60 cm (Grelha Superior)',
    heatLevelText: 'Calor Brando (6–8s na mão)',
    optimalPullTemp: '88°C – 92°C (Desmanchando)',
    cuttingTechnique: 'Retirar os ossos e fatiar em ripas',
    steps: COSTELA_STEPS
  },
  {
    id: 'maminha',
    name: 'Maminha da Alcatra',
    shortName: 'Maminha',
    category: 'bovino_nobre',
    categoryLabel: 'Bovino Nobre',
    tagline: 'Maciez suave com fibras em leque',
    description: 'Ponta nobre da alcatra extremamente tenra e úmida. O fatiamento exige mudar a angulação da faca acompanhando o leque.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 250,
    prepTimeText: '15–20 min (Peça Inteira)',
    grillHeight: '20 cm (Selar) → 40 cm (Cocção)',
    heatLevelText: 'Calor Médio-Forte',
    optimalPullTemp: '52°C – 55°C (Ao Ponto para Menos)',
    cuttingTechnique: 'Corte em leque acompanhando as fibras',
    steps: MAMINHA_STEPS
  },
  {
    id: 'contrafile',
    name: 'Contrafilé / Bife Ancho / Chorizo',
    shortName: 'Contrafilé',
    category: 'bovino_nobre',
    categoryLabel: 'Bovino Nobre',
    tagline: 'O clássico nobre de alta marmorização',
    description: 'Steaks grossos com olho de gordura ou capa lateral. Selagem rápida em brasa ardente para crosta crocante.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 300,
    prepTimeText: '6–8 min (3 min cada lado)',
    grillHeight: '15 cm (Calor Direto)',
    heatLevelText: 'Calor Muito Forte (2–3s)',
    optimalPullTemp: '52°C – 55°C',
    cuttingTechnique: 'Bifes transversais de 1 cm',
    steps: CONTRAFILE_ANCHO_STEPS
  },
  {
    id: 'cupim',
    name: 'Cupim Casqueado',
    shortName: 'Cupim',
    category: 'bovino_tradicional',
    categoryLabel: 'Bovino Tradicional',
    tagline: 'O clássico zebuíno assado no papel',
    description: 'Corcova do gado Nelore com intensa gordura entremeada. Cozido no celofane/alumínio e casqueado na brasa.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 300,
    prepTimeText: '3 a 4 Horas no Papel + Brasa',
    grillHeight: '40 cm (Papel) → 15 cm (Casquinha)',
    heatLevelText: 'Calor Médio no Papel → Forte',
    optimalPullTemp: '85°C – 90°C',
    cuttingTechnique: 'Casqueamento em fatias finas externas',
    steps: CUPIM_STEPS
  },
  {
    id: 'assado_de_tira',
    name: 'Assado de Tira (Costela Tira)',
    shortName: 'Assado de Tira',
    category: 'bovino_nobre',
    categoryLabel: 'Bovino Nobre',
    tagline: 'Costela transversal rápida na brasa forte',
    description: 'Fatias finas da costela com pequenos ossos redondos. Preparo super ágil em parrilla com sabor marcante.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 350,
    prepTimeText: '6–8 min na Grelha',
    grillHeight: '15 cm (Calor Forte)',
    heatLevelText: 'Calor Forte (3s)',
    optimalPullTemp: '54°C – 57°C',
    cuttingTechnique: 'Fatiar entre os ossinhos',
    steps: ASSADO_TIRA_STEPS
  },
  {
    id: 'alcatra',
    name: 'Alcatra Completa (Baby Beef)',
    shortName: 'Alcatra',
    category: 'bovino_tradicional',
    categoryLabel: 'Bovino Tradicional',
    tagline: 'Versatilidade, fibras tenras e sabor suave',
    description: 'Corte tradicional de reuniões familiares no Brasil. Sabor puro de carne com fibras curtas e macias.',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 250,
    prepTimeText: '10–12 min (Steaks)',
    grillHeight: '20 cm (Calor Médio-Forte)',
    heatLevelText: 'Calor Médio-Forte (3–4s)',
    optimalPullTemp: '53°C – 56°C',
    cuttingTechnique: 'Transversal contra a fibra',
    steps: ALCATRA_STEPS
  },
  {
    id: 'linguica',
    name: 'Linguiça Toscana / Cuiabana',
    shortName: 'Linguiça',
    category: 'suino',
    categoryLabel: 'Cortes Suínos',
    tagline: 'A entrada clássica de todo churrasqueiro',
    description: 'Pernil suíno temperado com ervas em tripa natural. Regra sagrada: nunca fure a pele para não perder os sucos.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 150,
    prepTimeText: '25–35 min',
    grillHeight: '30 cm (Calor Médio)',
    heatLevelText: 'Calor Médio (4–5s)',
    optimalPullTemp: '75°C (Totalmente Cozida)',
    cuttingTechnique: 'Rodelas de 1,5 cm após descansar 3 min',
    steps: LINGUICA_STEPS
  },
  {
    id: 'costelinha_suina',
    name: 'Costelinha de Porco (Suína)',
    shortName: 'Costelinha',
    category: 'suino',
    categoryLabel: 'Cortes Suínos',
    tagline: 'Carne macia com crosta dourada e limão',
    description: 'Temperada com limão taiti, alho e páprica. Assada pacientemente com o osso para a brasa até dourar a carne.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 350,
    prepTimeText: '45–60 min',
    grillHeight: '35 cm (Calor Médio-Brando)',
    heatLevelText: 'Calor Médio-Brando (5–6s)',
    optimalPullTemp: '75°C',
    cuttingTechnique: 'Fatiar individualmente entre cada osso',
    steps: COSTELINHA_SUINA_STEPS
  },
  {
    id: 'panceta',
    name: 'Panceta / Barriga Suína Pururuca',
    shortName: 'Panceta',
    category: 'suino',
    categoryLabel: 'Cortes Suínos',
    tagline: 'Couro pururucado e estaladiço na brasa',
    description: 'Camadas de carne e toucinho suíno com pele estaladiça. Cozimento suave e choque na brasa para pururucar.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 250,
    prepTimeText: '40–50 min',
    grillHeight: '40 cm (Carne) → 15 cm (Pururuca)',
    heatLevelText: 'Calor Médio → Muito Forte no Couro',
    optimalPullTemp: '75°C',
    cuttingTechnique: 'Cubos ou tiras de 2 cm',
    steps: PANCETA_STEPS
  },
  {
    id: 'coracao_frango',
    name: 'Coração de Frango',
    shortName: 'Coração',
    category: 'ave',
    categoryLabel: 'Aves na Brasa',
    tagline: 'O petisco mais amado nos espetinhos do Brasil',
    description: 'Marinado no alho, louro e vinho branco. Espetado compacto e dourado em fogo vivo sem ressecar o interior.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 120,
    prepTimeText: '12–15 min no Espeto',
    grillHeight: '25 cm (Calor Médio-Forte)',
    heatLevelText: 'Calor Médio-Forte (3–4s)',
    optimalPullTemp: '74°C (Macio e Suculento)',
    cuttingTechnique: 'Servido direto no espetinho',
    steps: CORACAO_FRANGO_STEPS
  },
  {
    id: 'asa_frango',
    name: 'Tulipa & Asinha de Frango',
    shortName: 'Asa / Tulipa',
    category: 'ave',
    categoryLabel: 'Aves na Brasa',
    tagline: 'Pele crocante com tempero lemon pepper',
    description: 'Meio da asa e coxinhas tostadas até soltar do osso. O petisco perfeito com cerveja bem gelada.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 200,
    prepTimeText: '30–35 min',
    grillHeight: '30–35 cm (Calor Médio)',
    heatLevelText: 'Calor Médio (4–5s)',
    optimalPullTemp: '75°C',
    cuttingTechnique: 'Servida inteira em porções',
    steps: ASA_FRANGO_STEPS
  },
  {
    id: 'sobrecoxa',
    name: 'Sobrecoxa Desossada',
    shortName: 'Sobrecoxa',
    category: 'ave',
    categoryLabel: 'Aves na Brasa',
    tagline: 'A carne mais suculenta de frango para grelha',
    description: 'Desossada com pele crocante. Asse primeiro a carne e finalize dourando a pele diretamente na brasa.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 250,
    prepTimeText: '25–30 min',
    grillHeight: '30 cm (Calor Médio)',
    heatLevelText: 'Calor Médio (4–5s)',
    optimalPullTemp: '75°C',
    cuttingTechnique: 'Fatiar em tiras transversais',
    steps: SOBRECOXA_STEPS
  },
  {
    id: 'cordeiro',
    name: 'Carré / Paleta de Cordeiro',
    shortName: 'Cordeiro',
    category: 'ovino',
    categoryLabel: 'Cordeiro & Especiais',
    tagline: 'A nobreza dos ovinos com alecrim e vinho',
    description: 'Costelinhas de cordeiro com perfume de alecrim, hortelã fresca e vinho branco. Ponto rosado inigualável.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    defaultGramsPerPerson: 350,
    prepTimeText: '12–16 min (Carré) / 2h (Paleta)',
    grillHeight: '25 cm (Calor Médio-Forte)',
    heatLevelText: 'Calor Médio-Forte (3–4s)',
    optimalPullTemp: '56°C – 59°C (Ao Ponto Rosado)',
    cuttingTechnique: 'Cortar entre cada osso do carré',
    steps: CORDEIRO_STEPS
  }
];
