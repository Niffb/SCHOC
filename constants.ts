// Helper to get the correct asset path for both dev and production
const getAssetPath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

export const COLORS = {
  brown: '#4a2c2a',      // Rich Milk Chocolate
  darkBrown: '#2b1d1a',  // Dark Chocolate
  cream: '#f9f5e8',      // Vanilla Cream
  caramel: '#d98e46',    // Caramel/Gold accent
  lightBrown: '#6d4c41', // Lighter cocoa
  offWhite: '#fffdf5',   // Warm white
};

// These represent the main categories displayed on the home page
export const FLAVORS = [
  {
    id: 'bars-cups',
    name: 'Bars & Cups',
    description: 'Signature Oat Milk Chocolate Bars',
    color: '#f9f5e8',
    textColor: '#4a2c2a',
    image: getAssetPath('london_fog-removebg-preview.png'),
    bgImage: getAssetPath('mathca-removebg-preview.png'),
    accent: '#d98e46'
  },
  {
    id: 'coconut-butter',
    name: 'Coconut Butter',
    description: 'Silky Smooth, Plant-Based Delight',
    color: '#d98e46',
    textColor: '#2b1d1a',
    image: getAssetPath('coconut-butter.png'),
    bgImage: getAssetPath('coconut-butter.png'),
    accent: '#f9f5e8'
  },
  {
    id: 'gift-boxes',
    name: 'Gift Boxes',
    description: 'Curated Collections for Chocolate Lovers',
    color: '#2b1d1a',
    textColor: '#f9f5e8',
    image: getAssetPath('gift-box.webp'),
    bgImage: getAssetPath('gift-box.webp'),
    accent: '#d98e46'
  }
];

export const PRODUCTS_DATA: Record<string, { title: string; description: string; items: any[] }> = {
  'bars-cups': {
    title: 'Bars & Cups',
    description: 'Hand-poured perfection. Our signature bars and cups are made with 70% dark chocolate and ethically sourced ingredients.',
    items: [
      {
        id: 'bc1',
        name: 'London Fog Bar',
        price: '$8.50',
        image: getAssetPath('london_fog-removebg-preview.png'),
        desc: 'Blonde Oatmilk Chocolate Infused with Earl Grey Tea.'
      },
      {
        id: 'bc2',
        name: 'Matcha Bar',
        price: '$8.50',
        image: getAssetPath('mathca-removebg-preview.png'),
        desc: 'Blonde Oatmilk Chocolate Infused with Matcha Green Tea.'
      }
    ]
  },
  'coconut-butter': {
    title: 'Coconut Butter',
    description: 'Stone-ground for 48 hours to achieve an impossibly smooth texture. 100% Plant-based and addictive.',
    items: [
      {
        id: 'cb1',
        name: 'Artisan Coconut Butter',
        price: '$14.00',
        image: getAssetPath('coconut-butter.png'),
        desc: 'Creamy coconut butter with chocolate swirl.'
      }
    ]
  },
  'gift-boxes': {
    title: 'Gift Boxes',
    description: 'Beautifully packaged assortments for the chocolate lover in your life (or yourself).',
    items: [
      {
        id: 'gb1',
        name: 'ShawZ Assorted Box',
        price: '$45.00',
        image: getAssetPath('gift-box.webp'),
        desc: 'Curated selection of our finest chocolate bars.'
      }
    ]
  }
};

export const NUTRITION_STATS = [
  { label: 'Cocoa', value: '70%' },
  { label: 'Origin', value: 'Canada' },
  { label: 'Batch', value: 'Small' },
  { label: 'Texture', value: 'Silky' },
  { label: 'Love', value: '100%' },
];