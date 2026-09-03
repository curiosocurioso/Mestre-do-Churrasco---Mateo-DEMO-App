import { StepItem } from '../../types';

export const ASA_FRANGO_STEPS: StepItem[] = [
  {
    id: 'asa-intro',
    stepNumber: null,
    sectionTitle: 'Tulipa & Asinha de Frango',
    title: 'Pele Ultra Crocante & Carne Suculenta',
    subtitle: 'Meio da asa temperado com lemon pepper e mostarda (30 a 35 min a 30 cm)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Tulipas douradas com pele crocante que soltam dos ossos com facilidade.',
    paragraphs: [
      'A Tulipa (o meio da asa com duas varetas de osso) e a Coxinha da Asa são petiscos clássicos e adorados em todo churrasco brasileiro. Por possuírem excelente proporção de pele, gordura subcutânea e carne macia, quando assadas pacientemente resultam em uma crosta crocante com interior suculento.',
      'O segredo do sucesso é o fogo médio a 30 cm da brasa. Calor excessivo queima a pele antes do frango cozinhar internamente; com o braseiro correto e viradas regulares a cada 6 minutos, a gordura sob a pele derrete por completo, tornando a casca extremamente crocante.'
    ],
    bullets: [
      'Proporção: 200g a 250g por pessoa (cerca de 5 a 6 tulipas como aperitivo).',
      'Tempero: Lemon pepper, mostarda amarela/dijon, alho em pó e azeite.',
      'Altura da Grelha: 30 cm a 35 cm da brasa (calor médio constante).',
      'Tempo de Grelha: 30 a 35 minutos com viradas regulares.',
      'Ponto Seguro: 75°C de temperatura interna.'
    ],
    keyRule: 'Dica do Mestre: A mostarda cria uma película que segura os temperos secos e carameliza lindamente na brasa sem deixar gosto forte de mostarda.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'asa-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar',
    title: 'A Seleção das Tulipas (Meio da Asa)',
    subtitle: 'Pele lisa e intacta, peças de tamanho padronizado',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Meio da asa (tulipas) fresco com pele uniforme e cor rosada clara.',
    paragraphs: [
      'Prefira comprar especificamente o corte "Meio da Asa" (Tulipa). Ele possui dois ossinhos finos e paralelos fáceis de descolar na mordida.',
      'A pele deve estar inteira, sem rasgos ou ressecamento, e com coloração rosa clara e cheiro suave.'
    ],
    bullets: [
      'Tulipas selecionadas com peso homogêneo.',
      'Pele íntegra sem penas residuais.',
      'Carne fresca sem excesso de água injetada.',
      'Cheiro neutro e textura firme.'
    ],
    keyRule: 'Inspecione a galeria para reconhecer as melhores asas de frango.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'asa-frescor',
        title: 'Tulipas & Pele Íntegra',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
        description: 'Pele cobrindo toda a carne sem rompimentos.',
        whatToLookFor: ['Pele lisa e uniforme', 'Tamanho médio padronizado'],
        whatToAvoid: ['Pele rasgada ou solta', 'Pedaços com hematomas escuros']
      }
    ]
  },
  {
    id: 'asa-tempero',
    stepNumber: 1,
    sectionTitle: '2. Tempero Lemon Pepper & Mostarda',
    title: 'Mostarda, Lemon Pepper, Páprica & Alho',
    subtitle: 'Esfregar em todas as peças 20 minutos antes do fogo',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Envolva as asinhas em mostarda, lemon pepper e alho em pó.',
    paragraphs: [
      'Em uma tigela, coloque as tulipas secas e adicione 2 colheres de sopa de mostarda, 1 colher de sopa de lemon pepper, 1 colher de chá de páprica defumada, alho triturado, azeite e sal fino (10g por kg).',
      'Misture bem com as mãos para que cada asinha receba uma camada uniforme da pasta de tempero.'
    ],
    bullets: [
      '2 colheres de mostarda para aderência da crosta.',
      'Lemon pepper para frescor cítrico e picância suave.',
      'Páprica defumada para cor bronzeada marcante.',
      'Descanso de 20 minutos antes de grelhar.'
    ],
    proTip: 'A secagem prévia da pele com papel toalha antes de aplicar a pasta de mostarda potencializa a crocância.'
  },
  {
    id: 'asa-fogo',
    stepNumber: 2,
    sectionTitle: '3. O Braseiro Médio a 30 cm',
    title: 'Calor Médio Controlado (4 a 5 segundos)',
    subtitle: 'Tempo suficiente para derreter a gordura sem queimar a pele',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Grelha posicionada a 30 cm da brasa incandescente sem chamas vivas.',
    paragraphs: [
      'Posicione a grelha a 30 cm da brasa viva. A temperatura deve permitir que você mantenha a mão por 4 a 5 segundos.',
      'As asinhas soltam bastante gordura durante o assado. Mantenha espaço entre as peças na grelha para evitar labaredas concentradas.'
    ],
    bullets: [
      'Altura: 30 cm a 35 cm acima da brasa.',
      'Teste da mão: 4 a 5 segundos.',
      'Distribua as tulipas sem amontoar na grelha.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'asa-grelha-tempo',
    stepNumber: 3,
    sectionTitle: '4. A Grelha & Viradas Regulares',
    title: '30 a 35 Minutos Virando a Cada 6 Minutos',
    subtitle: 'Dourando os 4 lados até a pele ficar estaladiça',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Gire as tulipas regularmente para tostar a pele por igual em todos os lados.',
    paragraphs: [
      'Disponha as tulipas na grelha e asse por 30 a 35 minutos no total.',
      'Vire as peças a cada 6 a 7 minutos com pegador de pinça. A pele começará a borbulhar, perderá a umidade e ficará dourada e crocante.'
    ],
    bullets: [
      'Tempo total: 30 a 35 minutos.',
      'Vire a cada 6 minutos para douramento simétrico.',
      'Evite garfos que furem a carne.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'asa-ponto',
    stepNumber: 4,
    sectionTitle: '5. O Ponto Seguro & Teste do Osso',
    title: 'Temperatura Interna: 75°C no Centro',
    subtitle: 'Carne macia soltando dos dois ossinhos com facilidade',
    category: 'ponto',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A carne de frango deve estar totalmente cozida, macia e soltando do osso.',
    paragraphs: [
      'O frango deve atingir 75°C de temperatura interna segura no centro da carne.',
      'Ao segurar uma das pontas do osso da tulipa e torcer levemente, o osso deve se desprender da carne com esforço mínimo, demonstrando cozimento perfeito.'
    ],
    bullets: [
      'Temperatura segura: 75°C no centro.',
      'Pele estaladiça e dourada.',
      'Ossos soltando da carne com facilidade.'
    ],
    interactiveType: 'doneness_picker'
  },
  {
    id: 'asa-servir',
    stepNumber: 5,
    sectionTitle: '6. Servir & Acompanhamentos',
    title: 'Servidas Pelando com Molho Tártaro & Limão',
    subtitle: 'O melhor petisco crocante para acompanhar cerveja gelada',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as tulipas douradas com gomos de limão e molhos artesanais.',
    paragraphs: [
      'Sirva as tulipas diretamente na tábua ou em travessa funda com gomos de limão caipira espremidos na hora.',
      'Harmonize com molho tártaro, molho de alho cremoso ou geleia de pimenta e farofa crocante.'
    ],
    bullets: [
      'Gomos de limão fresco.',
      'Molho tártaro ou creme de alho da casa.',
      'Farofa crocante com bacon.',
      'Cerveja bem gelada.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'asa-manifesto',
    stepNumber: null,
    sectionTitle: '7. O Manifesto da Asinha Perfeita',
    title: 'As 3 Leis da Tulipa Crocante',
    subtitle: 'O padrão de ouro do petisco de frango na brasa',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Pele seca, tempero de mostarda e fogo médio paciente.',
    paragraphs: [
      'A asinha perfeita é crocante por fora e macia por dentro. Respeitando a altura correta e as viradas periódicas, você terá o melhor petisco do evento.'
    ],
    bullets: [
      'Lei 1: Secar a pele antes de temperar com mostarda e lemon pepper.',
      'Lei 2: Asse a 30 cm em fogo médio — nunca use fogo alto que queima a pele.',
      'Lei 3: Atinja 75°C de temperatura interna para cozimento seguro.'
    ],
    interactiveType: 'golden_rules'
  }
];

export const SOBRECOXA_STEPS: StepItem[] = [
  {
    id: 'sobrecoxa-intro',
    stepNumber: null,
    sectionTitle: 'Sobrecoxa Desossada na Brasa',
    title: 'A Maior Suculência de Ave na Churrasqueira',
    subtitle: 'Pele ultra tostada e carne macia com ervas (25 a 30 min a 30 cm)',
    category: 'intro',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'A sobrecoxa desossada com pele é a carne de ave mais nobre e saborosa da grelha.',
    paragraphs: [
      'A Sobrecoxa Desossada com Pele é a campeã indiscutível de suculência entre as aves no churrasco. Por conter maior teor de gordura intramuscular e mioglobina do que o peito, ela não resseca na brasa, mantendo-se incrivelmente macia e amanteigada.',
      'O segredo do preparo é assar primeiro com a pele virada para CIMA (cerca de 15 minutos a 30 cm) para cozinhar a carne com os sucos e vapores; depois, virar a pele para BAIXO por 10 minutos para pururucar e criar uma casquinha dourada estaladiça.'
    ],
    bullets: [
      'Proporção: 250g a 300g por pessoa (cerca de 2 sobrecoxas por convidado).',
      'Desossa: Retirar o osso central mantendo 100% da pele intacta.',
      'Fase 1: 15 minutos com a pele para CIMA.',
      'Fase 2: 10 minutos com a pele para BAIXO (crocância total).',
      'Ponto Seguro: 75°C de temperatura interna.'
    ],
    keyRule: 'Dica do Mestre: Nunca retire a pele da sobrecoxa antes de assar. É a pele que protege a carne de desidratar e fornece a crocância do prato.',
    interactiveType: 'portion_calc'
  },
  {
    id: 'sobrecoxa-compra',
    stepNumber: null,
    sectionTitle: '1. O que Comprar & Desossa',
    title: 'A Escolha & Desossa da Sobrecoxa',
    subtitle: 'Comprar com pele e desossar em formato de bife plano',
    category: 'comprar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sobrecoxas frescas com pele ampla e desossa rente ao osso único.',
    paragraphs: [
      'Você pode comprar a sobrecoxa já desossada (certifique-se de que venha COM PELE) ou desossar em casa com facilidade.',
      'Para desossar, vire a carne com a pele para baixo na tábua, passe a faca rente ao longo do osso central e raspe a carne até soltar a articulação nas duas extremidades.'
    ],
    bullets: [
      'Sobrecoxas frescas COM PELE.',
      'Formato aberto em bife plano uniforme.',
      'Pele cobrindo toda a face superior.',
      'Carne com tom rosado e brilho fresco.'
    ],
    keyRule: 'Consulte a galeria visual para verificar a qualidade do corte de sobrecoxa.',
    interactiveType: 'inspection_gallery',
    inspectionItems: [
      {
        id: 'sobrecoxa-pele',
        title: 'Pele Ampla & Formato Aberto',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
        description: 'Bife aberto e uniforme com pele cobrindo toda a superfície.',
        whatToLookFor: ['Pele ampla e contínua', 'Espessura homogênea de 2 a 3 cm'],
        whatToAvoid: ['Pele rasgada ou ausente', 'Carne retalhada com fragmentos de osso']
      }
    ]
  },
  {
    id: 'sobrecoxa-tempero',
    stepNumber: 1,
    sectionTitle: '2. Tempero com Ervas & Alho',
    title: 'Alho, Chimichurri, Páprica & Azeite',
    subtitle: 'Temperar sob a pele e sobre a carne para penetração máxima',
    category: 'tempero',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Esfregue o alho, chimichurri seco, páprica e azeite por toda a carne e sob a pele.',
    paragraphs: [
      'Levante levemente a pele e esfregue o tempero diretamente na carne: 4 dentes de alho triturados, 1 colher de sopa de chimichurri seco, páprica doce, raspas de limão e sal fino (10g/kg).',
      'Passe uma fina camada de azeite e sal fino sobre o couro para auxiliar na crocância durante o assado.'
    ],
    bullets: [
      'Tempero aromático de alho, chimichurri e páprica.',
      'Aplicar o tempero diretamente sob a pele.',
      'Sal fino e azeite no couro externo.',
      'Descanso de 20 minutos antes de grelhar.'
    ],
    proTip: 'O alho sob a pele fica protegido do calor direto, cozinhando sem queimar e liberando sabor por toda a carne.'
  },
  {
    id: 'sobrecoxa-fogo',
    stepNumber: 2,
    sectionTitle: '3. O Braseiro Médio a 30 cm',
    title: 'Calor Médio Controlado (4 a 5 segundos)',
    subtitle: 'Grelha intermediária para cozimento homogêneo',
    category: 'fogo',
    image: 'https://images.unsplash.com/photo-1527477321055-436158a2b0a5?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Posicione a grelha a 30 cm da brasa em temperatura média constante.',
    paragraphs: [
      'Posicione a grelha a 30 cm da brasa incandescente em calor médio (mão suporta 4 a 5 segundos).',
      'A sobrecoxa precisa de calor contínuo sem labaredas diretas para que a gordura derreta e a carne cozinhe com maciez.'
    ],
    bullets: [
      'Altura da grelha: 30 cm.',
      'Teste da mão: 4 a 5 segundos.',
      'Área indireta livre para desviar em caso de pingos de gordura.'
    ],
    interactiveType: 'two_zone_fire'
  },
  {
    id: 'sobrecoxa-grelha-pele-cima',
    stepNumber: 3,
    sectionTitle: '4. Cocção com Pele para CIMA',
    title: '15 Minutos com a Carne para a Brasa',
    subtitle: 'Cozinhar a carne suavemente e deixar a gordura lubrificar o corte',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Asse primeiro com a carne voltada para a brasa e o couro para cima.',
    paragraphs: [
      'Coloque os bifes de sobrecoxa na grelha a 30 cm com a PELE VIRADA PARA CIMA e a carne para baixo.',
      'Deixe assar por 15 minutos. O calor subirá pela carne enquanto a gordura da pele derrete suavemente e escorre pelo corte, mantendo o interior úmido e suculento.'
    ],
    bullets: [
      'Pele para CIMA por 15 minutos.',
      'Carne cozinhando no calor médio.',
      'Não vire prematuramente.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'sobrecoxa-virada-pele-baixo',
    stepNumber: 4,
    sectionTitle: '5. A Virada para Tostar a Pele',
    title: 'Virar a Pele para Baixo por 8 a 10 Minutos',
    subtitle: 'Pururucar e dourar a pele até atingir crocância estaladiça',
    category: 'grelha',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Vire a pele para a brasa: a gordura tosta formando uma casca dourada e crocante.',
    paragraphs: [
      'Vire a sobrecoxa com a PELE VIRADA PARA A BRASA por 8 a 10 minutos.',
      'A pele fritará na própria gordura, formando uma crosta dourada e super crocante. Monitore de perto para que o fogo não queime a pele.'
    ],
    bullets: [
      'Pele para BAIXO por 8 a 10 minutos.',
      'Aqueça até formar bolhas douradas e crocantes.',
      'Abaixe para a zona indireta se o fogo subir.'
    ],
    interactiveType: 'searing_timer'
  },
  {
    id: 'sobrecoxa-ponto-corte',
    stepNumber: 5,
    sectionTitle: '6. Ponto Seguro, Descanso & Corte em Tiras',
    title: '75°C no Centro, Descanso de 3 min & Fatiamento',
    subtitle: 'Fatiar tiras transversais de 1,5 cm preservando a pele crocante',
    category: 'corte',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Fatie em tiras transversais com faca bem afiada para manter a pele crocante unida à carne.',
    paragraphs: [
      'Retire a sobrecoxa da grelha quando o centro atingir 75°C de temperatura interna.',
      'Deixe descansar por 3 minutos na tábua e fatie em tiras transversais de 1,5 cm de espessura. Cada fatia terá carne suculenta e uma borda de pele crocante dourada.'
    ],
    bullets: [
      'Temperatura segura: 74°C a 76°C.',
      'Descanso de 3 minutos para fixar os sucos.',
      'Fatiar em tiras transversais de 1,5 cm.',
      'Finalizar com flor de sal.'
    ],
    interactiveType: 'fiber_slicer'
  },
  {
    id: 'sobrecoxa-servir',
    stepNumber: 6,
    sectionTitle: '7. Mesa & Harmonizações',
    title: 'Arroz Biro-Biro, Vinagrete & Farofa Crocante',
    subtitle: 'A combinação clássica das melhores churrascarias brasileiras',
    category: 'servir',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Sirva as tiras de sobrecoxa suculentas acompanhadas de arroz biro-biro e farofa crocante.',
    paragraphs: [
      'A sobrecoxa desossada na brasa é extremamente versátil e acompanha maravilhosamente pratos tradicionais de churrascaria.',
      'Sirva com arroz biro-biro (arroz soltinho com batata palha, ovos e bacon), vinagrete fresco e farofa na manteiga.'
    ],
    bullets: [
      'Arroz biro-biro tradicional.',
      'Vinagrete fresco com tomate em cubos.',
      'Farofa crocante amanteigada.',
      'Gotas de limão caipira espremido.'
    ],
    interactiveType: 'serve_checklist'
  },
  {
    id: 'sobrecoxa-manifesto',
    stepNumber: null,
    sectionTitle: '8. O Manifesto da Sobrecoxa',
    title: 'As 3 Leis da Sobrecoxa Perfeita',
    subtitle: 'O segredo da ave mais macia e saborosa do churrasco',
    category: 'resumo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    imageCaption: 'Pele preservada, tempero sob o couro e 75°C de temperatura interna.',
    paragraphs: [
      'A sobrecoxa desossada na brasa redefine o conceito de frango no churrasco. Respeitando a preservação da pele e a cocção em duas fases, ela se tornará um destaque permanente do seu cardápio.'
    ],
    bullets: [
      'Lei 1: Nunca remova a pele — ela é o escudo e a crocância do corte.',
      'Lei 2: Asse 15 minutos com a pele para cima antes de tostar para baixo.',
      'Lei 3: Atinja 75°C de temperatura interna para suculência máxima com segurança.'
    ],
    interactiveType: 'golden_rules'
  }
];
