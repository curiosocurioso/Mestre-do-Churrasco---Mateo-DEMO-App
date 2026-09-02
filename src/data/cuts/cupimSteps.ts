import { StepItem } from '../../types';

export const CUPIM_STEPS: StepItem[] = [
  {
    id: 'cupim-intro',
    stepNumber: null,
    sectionTitle: 'Cupim na Churrasqueira',
    title: 'O Ícone Zebuíno do Churrasco Brasileiro',
    subtitle: 'Cozimento lento no celofane/alumínio (3 a 4h) + Casqueamento na brasa',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'O cupim é a giba (corcova) do gado zebuíno Nelore, composto por densas camadas de carne e gordura entremeada rica em colágeno.',
    paragraphs: [
      'O Cupim é uma joia exclusiva do churrasco brasileiro e do gado zebuíno (como a raça Nelore). Localizado na corcova superior dos animais, é uma carne com densas camadas de gordura e fibras musculares fortes que necessitam de longo cozimento para dissolver o colágeno.',
      'O método supremo do cupim é a combinação de 2 fases: primeiro um cozimento lento de 3 a 4 horas embrulhado em celofane culinário ou papel alumínio reforçado (onde a carne cozinha no próprio vapor e na própria gordura derretida); depois, a finalização com o clássico CASQUEAMENTO na brasa direta, fatiando casquinhas crocantes sucessivas.'
    ],
    bullets: [
      'Proporção: 300g a 350g de carne crua por pessoa.',
      'Fase 1 (Papel): 3 a 4 horas a 40 cm em calor brando-médio.',
      'Fase 2 (Casqueamento): Brasa direta a 15 cm para fatias crocantes contínuas.',
      'Ponto: Carne macia desmanchando (88°C a 92°C).'
    ],
    keyRule: 'Dica do Mestre: Nunca asse o cupim cru diretamente na grelha sem o embrulho inicial, senão a carne ficará dura e ressecada.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'cupim-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Inspeção da Giba de Cupim',
    subtitle: 'Formato oval bem desenhado, veios brancos e peso ideal',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Peça inteira de cupim com camadas intercaladas de carne vermelha e gordura branca consistente.',
    paragraphs: [
      'Escolha peças inteiras de cupim com peso entre 2,2 kg e 3,5 kg. Peças menores podem vir de animais muito jovens com pouca gordura; peças gigantescas podem conter partes duras do acém.',
      'Ao observar o corte transversal, você deve notar uma textura zebrada com veios brancos de gordura entrelaçados nas fibras vermelhas.'
    ],
    bullets: [
      'Peso Ideal: 2,2 kg a 3,5 kg por peça inteira.',
      'Formato: Arredondado/oval característico da giba do Nelore.',
      'Marmoreio Intenso: Camadas brancas entremeadas de gordura natural.',
      'Frescor: Cor vermelho viva, sem manchas escuras ou odor rançoso.'
    ],
    keyRule: 'Inspecione a galeria visual para identificar o cupim ideal no açougue.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'cupim-formato',
        title: 'Formato de Giba Inteira',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        description: 'Peça oval e compacta sem cortes profundos que deixem o vapor escapar no embrulho.',
        whatToLookFor: ['Peça inteira e compacta', 'Peso entre 2,2 kg e 3,5 kg'],
        whatToAvoid: ['Peça retalhada em fatias cruas', 'Formato irregular e desbeiçado']
      },
      {
        id: 'cupim-entremeado',
        title: 'Veios de Gordura Intramuscular',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
        description: 'Gordura branca bem distribuída por toda a carne, garantindo que o miolo fique macio.',
        whatToLookFor: ['Gordura branca abundante e firme', 'Textura zebrada evidente'],
        whatToAvoid: ['Peça excessivamente magra sem gordura entremeada']
      },
      {
        id: 'cupim-frescor',
        title: 'Coloração & Higiene',
        image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1200&auto=format&fit=crop',
        description: 'Carne com brilho úmido e aroma adocicado suave.',
        whatToLookFor: ['Vermelho brilhante e gordura leitosa'],
        whatToAvoid: ['Gordura amarela oxidada com cheiro de ranço']
      }
    ]
  },
  {
    id: 'cupim-preparo-tempero',
    stepNumber: 1,
    sectionTitle: '2. Tempero & Manteiga',
    title: 'Sal Grosso, Alho & Manteiga de Garrafa',
    subtitle: 'Massagem aromática para potencializar o caldo durante o cozimento',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Esfregue o sal grosso, dentes de alho amassados e manteiga em toda a superfície da peça.',
    paragraphs: [
      'Faça pequenas perfurações superficiais na peça para ajudar o tempero a penetrar.',
      'Esfregue sal grosso (cerca de 15g por kg), 4 dentes de alho triturados, pimenta-do-reino e besunte com 2 a 3 colheres de manteiga de garrafa ou manteiga comum. A manteiga vai se unir à gordura do cupim criando um caldo aromático fantástico.'
    ],
    bullets: [
      '15g de sal grosso por kg de cupim.',
      'Alho triturado, louro em pó e pimenta-do-reino preta.',
      'Manteiga de garrafa para banhar a carne dentro do invólucro.'
    ],
    proTip: 'Se desejar uma nota rústica, adicione 50 ml de cachaça branca de alambique antes de selar o papel.'
  },
  {
    id: 'cupim-embrulho',
    stepNumber: 2,
    sectionTitle: '3. A Técnica do Embrulho',
    title: '5 a 6 Voltas de Papel Celofane ou Alumínio Duplo',
    subtitle: 'Vedação hermética para criar a câmara de vapor e pressão',
    category: 'preparo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Embrulhe com várias voltas apertadas e amarre as extremidades com tiras do próprio papel.',
    paragraphs: [
      'Coloque o cupim temperado sobre papel celofane culinário próprio para churrasco (ou papel alumínio reforçado) e dê de 5 a 6 voltas completas e bem firmes.',
      'Amarre as duas pontas como um bombom gigante usando tiras do próprio celofane ou barbante culinário. A vedação não pode vazar caldo nem vapor durante o assado.'
    ],
    bullets: [
      '5 a 6 voltas completas de celofane culinário ou 4 camadas de alumínio grosso.',
      'Amarre as extremidades com firmeza para reter 100% dos vapores.',
      'O pacote deve ficar justo e sem furos.'
    ],
    keyRule: 'Nunca use plástico comum de cozinha: use apenas celofane culinário resistente a altas temperaturas.'
  },
  {
    id: 'cupim-fogo-lento',
    stepNumber: 3,
    sectionTitle: '4. A Cocção Lenta no Papel',
    title: '3 a 4 Horas a 40 cm da Brasa',
    subtitle: 'Calor brando constante com viradas a cada 1 hora',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Mantenha o pacote na grelha superior em calor brando sem contato direto com chamas.',
    paragraphs: [
      'Posicione o pacote na grelha intermediária/superior (40 cm do braseiro) em calor brando-médio (mão suporta 5 a 6 segundos).',
      'Deixe assar pacientemente por 3,5 a 4 horas, virando o pacote a cada 60 minutos. A gordura derreterá e cozinhará o cupim de dentro para fora, tornando a carne incrivelmente tenra.'
    ],
    bullets: [
      'Tempo de embrulho: 3,5 a 4 horas.',
      'Altura da grelha: 40 cm da brasa.',
      'Vire o pacote a cada 1 hora para cozimento homogêneo.',
      'Reponha o carvão nas laterais para manter temperatura constante.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'cupim-desembrulho',
    stepNumber: 4,
    sectionTitle: '5. O Desembrulho & Banho de Caldo',
    title: 'Abrir o Pacote com Cuidado e Reter o Caldo',
    subtitle: 'Carne desmanchando e banhada na sua própria gordura dourada',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Abra o pacote com cuidado: um caldo fumegante e perfumado estará concentrado no fundo.',
    paragraphs: [
      'Retire o pacote da churrasqueira e apoie em uma assadeira funda. Corte o celofane/alumínio com cuidado para não se queimar com o vapor quente.',
      'O cupim estará extremamente macio e mergulhado em um caldo dourado delicioso. Pincele esse caldo sobre a carne antes de levar à brasa direta.'
    ],
    bullets: [
      'Abra o pacote retendo todo o caldo na assadeira.',
      'Teste a maciez com a ponta de um garfo: deve penetrar sem resistência.',
      'Reserve o caldo para regar a carne durante o casqueamento.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'cupim-selagem-brasa',
    stepNumber: 5,
    sectionTitle: '6. A Primeira Selagem na Brasa',
    title: '5 Minutos em Calor Direto a 15 cm',
    subtitle: 'Criando a primeira "casquinha" dourada e crocante',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Coloque a peça macia diretamente sobre a brasa forte para caramelizar a superfície.',
    paragraphs: [
      'Leve o cupim sem papel para a grelha inferior a 15–20 cm do braseiro bem quente.',
      'Deixe dourar por 4 a 5 minutos girando a peça para formar uma crosta crocante, marrom-escura e pururucada em toda a volta.'
    ],
    bullets: [
      'Grelha a 15–20 cm em calor forte.',
      'Tempo: 4 a 5 minutos virando todos os lados.',
      'Cuidado com as labaredas provocadas pelo gotejamento de gordura.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'cupim-casqueamento',
    stepNumber: 6,
    sectionTitle: '7. A Arte do Casqueamento',
    title: 'Fatiar Casquinhas Finas & Devolver à Brasa',
    subtitle: 'O ritual clássico de servir petiscos crocantes continuamente',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie as bordas crocantes em tiras finas e devolva a peça à brasa para dourar a próxima camada.',
    paragraphs: [
      'Com a faca bem afiada, fatie tiras finas (de 2 a 3 mm) de toda a casca dourada externa da peça diretamente na tábua e sirva aos convidados.',
      'Pincele a carne exposta com o caldo reservado e leve a peça de volta para a brasa por mais 3 a 4 minutos. Repita esse processo de dourar e casquear sucessivamente até o fim da peça.'
    ],
    bullets: [
      'Fatie casquinhas finas da camada externa tostada.',
      'Regue a carne com o caldo da assadeira.',
      'Devolva a peça à brasa para criar a nova casquinha em 3 a 4 minutos.',
      'Garante petisco quente e crocante durante todo o churrasco.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'cupim-servir',
    stepNumber: 7,
    sectionTitle: '8. Mesa & Harmonizações',
    title: 'Mandioca Amanteigada, Vinagrete Picante & Farofa de Cebola',
    subtitle: 'As guarnições que consagraram o cupim no Brasil',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as casquinhas de cupim acompanhadas de mandioca macia na manteiga e vinagrete.',
    paragraphs: [
      'As casquinhas crocantes e untuosas de cupim pedem a suavidade da mandioca cozida e a acidez de um bom vinagrete.',
      'Sirva com mandioca amarela na manteiga de garrafa, vinagrete tradicional com cheiro-verde e uma farofa bem torrada de cebola.'
    ],
    bullets: [
      'Mandioca cozida amarela servida bem quente.',
      'Vinagrete picante com toque de pimenta dedo-de-moça.',
      'Farofa de cebola dourada na manteiga.',
      'Cerveja pilsen gelada ou chopp artesanal.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'cupim-manifesto',
    stepNumber: null,
    sectionTitle: '9. O Manifesto do Cupim Casqueado',
    title: 'As 3 Leis Inegociáveis do Cupim',
    subtitle: 'O segredo da maciez e da casquinha perfeita',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Vedação hermética, tempo paciente e casqueamento contínuo: a fórmula do cupim lendário.',
    paragraphs: [
      'O cupim é a celebração da rusticidade brasileira. Fazendo o cozimento no vapor do próprio colágeno e finalizando no casqueamento de brasa direta, seu churrasco será inesquecível.'
    ],
    bullets: [
      'Lei 1: Embrulho hermético de 5 voltas — nunca asse o cupim cru no fogo direto.',
      'Lei 2: No mínimo 3,5 horas de fogo brando para derreter o colágeno.',
      'Lei 3: Casqueie tiras finas e devolva à brasa para manter o fluxo de petiscos.'
    ],
    interactiveType: 'golden_rules'
  }
];
