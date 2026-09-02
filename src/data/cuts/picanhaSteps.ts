import { StepItem } from '../../types';

export const PICANHA_STEPS: StepItem[] = [
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
