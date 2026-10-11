export const artForms = [
  {
    id: 'madhubani',
    slug: 'madhubani',
    name: 'Madhubani Painting',
    category: 'Painting',
    region: 'Bihar',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200&q=80',
    description: 'Vivid ritual art painted with natural pigments, symbol-rich motifs, and storytelling geometry.',
    difficulty: 'Beginner',
    time: '45-60 min',
    materials: ['Paper or handmade sheet', 'Natural pigments or acrylics', 'Fine brush', 'Pencil', 'Black outline pen'],
    history: 'Madhubani art originated in the Mithila region of Bihar and is deeply connected to rituals, ceremonies, and family storytelling. It traditionally features geometric patterns, floral forms, and symbolic imagery drawn to mark auspicious occasions.',
    significance: 'The work serves as a living record of community memory, devotion, and celebration, often painted during weddings, festivals, and household rituals.',
    instructions: [
      'Sketch the central motif lightly with a pencil, then build the surrounding borders.',
      'Use bold outlines to define the body, leaves, and repetitive patterns.',
      'Fill sections with saturated colors, keeping the balance between symmetry and storytelling.',
      'Add detail after the base colors dry, focusing on eyes, floral motifs, and linework.'
    ],
    related: ['mandala', 'rangoli', 'gond'],
    gallery: [
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Mithila, Bihar',
    traditionalMaterials: ['Rice paste', 'Natural pigments', 'Cotton cloth or paper'],
    faq: 'This style works well with bold, high-contrast colors and a repeated pattern rhythm.'
  },
  {
    id: 'warli',
    slug: 'warli',
    name: 'Warli Painting',
    category: 'Painting',
    region: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
    description: 'Minimal, geometric tribal murals that depict daily life, rituals, and the relationship with nature.',
    difficulty: 'Beginner',
    time: '30-45 min',
    materials: ['White pigment', 'Paper or canvas', 'Acrylic paint brush', 'Charcoal pencil'],
    history: 'Warli painting comes from the Adivasi communities of Maharashtra and is one of India’s most recognizable indigenous traditions. Historically painted on walls using rice paste and chalk-white pigment, it turns everyday scenes into composed visual narratives.',
    significance: 'These paintings communicate the social fabric of village life, seasonal cycles, and spiritual belief through simple, elegant shapes.',
    instructions: [
      'Begin with a single central human figure or village scene.',
      'Use circles and triangles to suggest bodies, houses, and movement.',
      'Balance empty space with repeated geometric patterns.',
      'Finish by layering the compositions to create rhythm and storytelling.'
    ],
    related: ['gond', 'rangoli', 'block-printing'],
    gallery: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Sahyadri region, Maharashtra',
    traditionalMaterials: ['Rice paste', 'White chalk', 'Mud walls'],
    faq: 'Warli paintings thrive on strong geometric abstraction and a calm, open background.'
  },
  {
    id: 'mandala',
    slug: 'mandala',
    name: 'Mandalas',
    category: 'Meditative Design',
    region: 'Pan-India',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    description: 'Symmetrical, meditative patterns that invite calm, focus, and creative repetition.',
    difficulty: 'Intermediate',
    time: '60-90 min',
    materials: ['Compass or circular guide', 'Markers or pens', 'Ruler', 'Colored pencils or gel pens'],
    history: 'Mandalas are geometric spiritual designs found across Asia, with strong symbolic meaning in Indian ritual and meditation practices. Their circular structure often represents wholeness, cosmic order, and focused attention.',
    significance: 'Artists use mandalas as a mindful process, transforming geometric rhythm into contemplative visual balance.',
    instructions: [
      'Start from the center and mark equal guide lines to establish symmetry.',
      'Add a repeating petal or wedge pattern between each division.',
      'Layer details outward while keeping the circles balanced.',
      'Use color to guide the eye inwards and outwards with rhythm.'
    ],
    related: ['madhubani', 'rangoli', 'lipan'],
    gallery: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Across India and South Asia',
    traditionalMaterials: ['Sand', 'Powder color', 'Fabric or paper'],
    faq: 'A simple circular guide and radial symmetry help beginners create balanced mandalas quickly.'
  },
  {
    id: 'lipan',
    slug: 'lipan',
    name: 'Lipan Art',
    category: 'Wall Art',
    region: 'Kutch, Gujarat',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    description: 'Intricate mirror-work and geometric line patterns traditionally made on mud walls and courtyards.',
    difficulty: 'Intermediate',
    time: '60-75 min',
    materials: ['Chalk or white lime paste', 'Mud plaster', 'Fine tool or stylus', 'Natural pigments'],
    history: 'Lipan art is practiced in the Kutch region of Gujarat, traditionally drawn on the walls of homes and community spaces. The tradition uses repetitive geometric forms and mirrored motifs to create protective and decorative surfaces.',
    significance: 'It marks cultural identity, seasonal celebration, and the careful craft of surface decoration in desert communities.',
    instructions: [
      'Prepare the wall or board with a smooth, even base.',
      'Map out radial or mirrored lines before adding detail.',
      'Use a stylus to place repeating motifs carefully and symmetrically.',
      'Finish with small accents and highlight points to add depth.'
    ],
    related: ['mandala', 'rangoli', 'kalamkari'],
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Kutch, Gujarat',
    traditionalMaterials: ['Mud plaster', 'Lime paste', 'Natural white powder'],
    faq: 'Start with a central star motif and repeat sets of mirrored lines for visually satisfying compositions.'
  },
  {
    id: 'gond',
    slug: 'gond',
    name: 'Gond Art',
    category: 'Tribal Art',
    region: 'Madhya Pradesh',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description: 'Narrative folk art filled with dots, lines, and vivid natural imagery that depict forests and memory.',
    difficulty: 'Intermediate',
    time: '45-60 min',
    materials: ['Canvas or paper', 'Acrylic or poster colors', 'Fine-tip brush', 'Black ink outline'],
    history: 'Gond art originates from the Gond communities of central India and has long expressed connections to land, lineage, and the forest. The art uses symbolic dot patterns and layered compositions to tell stories about ecology and community life.',
    significance: 'It preserves the visual language of lived relationships with landscape, memory, and myth.',
    instructions: [
      'Select a forest or community scene to anchor the artwork.',
      'Map the large shapes with simple outlines before filling textures.',
      'Add dotted patterns and rhythm to create movement and life.',
      'Emphasize contrast between dark outlines and bright forms.'
    ],
    related: ['warli', 'madhubani', 'patta-chitra'],
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Madhya Pradesh and surrounding regions',
    traditionalMaterials: ['Natural powders', 'Charcoal', 'Earth pigments'],
    faq: 'Dotted textures and layered shapes give Gond art its signature rhythm and movement.'
  },
  {
    id: 'patta-chitra',
    slug: 'patta-chitra',
    name: 'Pattachitra',
    category: 'Scroll Painting',
    region: 'Odisha',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=80',
    description: 'Temple-inspired storytelling paintings that use intricate lines and mythic iconography.',
    difficulty: 'Intermediate',
    time: '75-90 min',
    materials: ['Cotton cloth', 'Natural colors', 'Kalamegh or acrylic outline', 'Fine brush'],
    history: 'Pattachitra from Odisha is a traditional cloth-based art form associated with temple traditions and ritual storytelling. It often depicts epics, deities, and seasonal festivals with highly refined compositions.',
    significance: 'It preserves devotional narratives and regional craftsmanship through a powerful visual continuity.',
    instructions: [
      'Draft the central deity or scene with strong balance and symbolic geometry.',
      'Use precise outlines to create a narrative rhythm around the focal point.',
      'Fill details in clean sections, preserving cultural clarity and visual hierarchy.',
      'Add decorative border motifs to complete the composition.'
    ],
    related: ['kalamkari', 'mandala', 'madhubani'],
    gallery: [
      'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Puri and surrounding Odisha regions',
    traditionalMaterials: ['Cotton cloth', 'Natural oxides', 'Gum-based paints'],
    faq: 'Strong focal composition and careful lines are essential to preserve the clarity of storytelling.'
  },
  {
    id: 'kalamkari',
    slug: 'kalamkari',
    name: 'Kalamkari',
    category: 'Textile Art',
    region: 'Andhra Pradesh',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    description: 'Hand-painted and block-printed textile art made with intricate narrative motifs and natural dyes.',
    difficulty: 'Intermediate',
    time: '60-90 min',
    materials: ['Cotton fabric', 'Natural dye or fabric paint', 'Kalam pen or brush', 'Palette tray'],
    history: 'Kalamkari has roots in Andhra Pradesh and is historically connected to temple textiles, narrative crafts, and Persian-influenced dyeing traditions. The process combines hand-drawn line work with wash-based color application.',
    significance: 'It brings together technical precision, storytelling, and textile culture in a highly ceremonial form.',
    instructions: [
      'Create a detailed sketch on the fabric with a light pencil or chalk.',
      'Use a fine applicator to fill in outlines and motif details.',
      'Work in stages to layer colors without muddying the design.',
      'Finish with a final set of highlights and balanced border patterns.'
    ],
    related: ['patta-chitra', 'block-printing', 'rangoli'],
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Andhra Pradesh',
    traditionalMaterials: ['Cotton fabric', 'Natural dyes', 'Cotton-wood or bamboo pens'],
    faq: 'It is best approached as a layered, line-led process with patience for detail and color management.'
  },
  {
    id: 'rangoli',
    slug: 'rangoli',
    name: 'Rangoli',
    category: 'Floor Art',
    region: 'Pan-India',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    description: 'Festive floor patterns made with color, symmetry, and geometric rhythm to welcome light and celebration.',
    difficulty: 'Beginner',
    time: '20-40 min',
    materials: ['Colored powder', 'Rice flour or chalk', 'Stencils or string guide', 'Tray or container'],
    history: 'Rangoli traditions are widely practiced during festivals and rituals across India. The designs often mark thresholds, ceremonies, and auspicious occasions, reflecting both creativity and spiritual intention.',
    significance: 'Rangoli transforms a practical threshold into an invitation for joy, blessing, and renewal.',
    instructions: [
      'Begin with a simple circular or floral center to anchor the pattern.',
      'Use a string or chalk guide for equal division and symmetry.',
      'Build outward using repetition, petals, and lines.',
      'Finish with a border and highlight details for balance.'
    ],
    related: ['mandala', 'lipan', 'madhubani'],
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Across India',
    traditionalMaterials: ['Rice flour', 'Colored powder', 'Flower petals'],
    faq: 'A few simple motifs repeated in symmetry can create a beautiful rangoli even on a small scale.'
  },
  {
    id: 'pottery',
    slug: 'pottery',
    name: 'Indian Pottery',
    category: 'Craft',
    region: 'Across India',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    description: 'Earthy and practical craft traditions shaped by hands, wheel, and local clay culture.',
    difficulty: 'Intermediate',
    time: '90-120 min',
    materials: ['Clay', 'Rolling pin or slab tools', 'Water', 'Wooden shaping tools'],
    history: 'Pottery traditions are among the oldest artistic and domestic crafts in India, evolving through village practices and region-specific glazing methods. Clay vessels have functioned in ritual, storage, and daily life for centuries.',
    significance: 'Pottery embodies material knowledge, continuity, and the everyday beauty of handcrafted utility.',
    instructions: [
      'Prepare the clay and center it carefully before shaping.',
      'Build the vessel with even pressure and steady rotations.',
      'Refine the rim and body with slow, deliberate adjustments.',
      'Dry and finish the piece with a simple glaze or natural surface treatment.'
    ],
    related: ['block-printing', 'kalamkari', 'origami'],
    gallery: [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Across India',
    traditionalMaterials: ['Terracotta clay', 'Wooden tools', 'Natural slips'],
    faq: 'Even simple pinch pots can introduce the core feel of clay before moving to wheel work.'
  },
  {
    id: 'block-printing',
    slug: 'block-printing',
    name: 'Block Printing',
    category: 'Textile Craft',
    region: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    description: 'Fast, rhythmic textile craft using carved wooden blocks and repeat patterns.',
    difficulty: 'Beginner',
    time: '45-60 min',
    materials: ['Fabric', 'Wooden block stamps', 'Fabric paint', 'Brush or sponge'],
    history: 'Block printing has deep roots in India’s textile traditions, especially in regions associated with hand-dyed cloth and artisan patterns. The repeated print structure makes it both practical and richly decorative.',
    significance: 'It celebrates precision, repetition, and economic craft passed through families and workshops.',
    instructions: [
      'Plan a simple repeated motif and align the block carefully.',
      'Test the color on scrap fabric before printing the final surface.',
      'Apply firm pressure to maintain a clean, consistent print.',
      'Repeat and rotate the block to build decorative rhythm.'
    ],
    related: ['kalamkari', 'pottery', 'embroidery'],
    gallery: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Rajasthan and western India',
    traditionalMaterials: ['Wood blocks', 'Natural pigments', 'Cotton cloth'],
    faq: 'Block printing rewards careful registration and a simple repeat design for crisp pattern balance.'
  },
  {
    id: 'origami',
    slug: 'origami',
    name: 'Origami & Paper Crafts',
    category: 'Paper Art',
    region: 'Pan-India',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    description: 'Folded paper shapes that transform simple sheets into intricate cultural forms and playful geometry.',
    difficulty: 'Beginner',
    time: '20-35 min',
    materials: ['Square paper', 'Scissors optional', 'Glue optional', 'Marker'],
    history: 'Paper crafts in India often blend inherited folding traditions with modern creative practice, making paper an accessible medium for geometry, storytelling, and design exploration.',
    significance: 'Origami is a quick, tactile way to understand rhythm, proportion, and precision in a portable format.',
    instructions: [
      'Start with a square sheet and clearly mark the fold lines.',
      'Work slowly to preserve crisp edges and symmetry.',
      'Repeat foundational folds before adding decorative details.',
      'Use color or pattern to emphasize the final form.'
    ],
    related: ['mandala', 'rangoli', 'pottery'],
    gallery: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Across India and South Asia',
    traditionalMaterials: ['Paper', 'Cardstock', 'Decorative accents'],
    faq: 'Begin with folding basics and focus on clean creases; decorative details come later.'
  },
  {
    id: 'embroidery',
    slug: 'embroidery',
    name: 'Traditional Embroidery',
    category: 'Textile Craft',
    region: 'Across India',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    description: 'Threadwork traditions filled with motifs, stitched geometry, and expressive pattern-making.',
    difficulty: 'Intermediate',
    time: '60-90 min',
    materials: ['Fabric', 'Embroidery thread', 'Needle', 'Hoop or frame'],
    history: 'Traditional embroidery in India varies by region, from woven motifs to ceremonial clothing and household textiles. It combines utility, symbolism, and inherited craftsmanship in often highly precise designs.',
    significance: 'Embroidery turns fabric into a portable archive of regional identity and skilled handwork.',
    instructions: [
      'Place the fabric in a hoop and trace a simple motif.',
      'Use a small set of contrasting thread colors to define form.',
      'Build the pattern slowly from outline to filled stitches.',
      'Finish by tightening thread ends and refining the base texture.'
    ],
    related: ['block-printing', 'kalamkari', 'origami'],
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
    ],
    origin: 'Across India',
    traditionalMaterials: ['Cotton fabric', 'Silk or cotton threads', 'Embroidery needles'],
    faq: 'Choose a small repeated motif to make your stitches balanced and easy to manage.'
  }
];

export const categories = ['All', 'Painting', 'Craft', 'Wall Art', 'Textile Art', 'Floor Art', 'Paper Art', 'Meditative Design', 'Tribal Art', 'Scroll Painting'];

export const dailyChallenge = {
  title: 'Daily Inspired Practice',
  prompt: 'Create a 30-minute study inspired by geometry and nature using a warm earth palette.',
  level: 'Beginner',
  reward: 'A small challenge streak keeps your creative practice going.'
};

export const popularTutorials = [
  { title: 'Beginner Mandala Flow', key: 'mandala' },
  { title: 'Warli Storytelling Shapes', key: 'warli' },
  { title: 'Lipan Mirror Pattern', key: 'lipan' },
  { title: 'Madhubani Floral Balance', key: 'madhubani' }
];
