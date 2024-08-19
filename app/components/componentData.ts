// app/components/ComponentData.ts

export interface Component {
    name: string;
    slug: string;
    image: string;
  }
  
  const components: Component[] = [
    { name: 'Hero Sections', slug: 'hero', image: '/images/hero.png' },
    { name: 'Navbars', slug: 'navbar', image: '/images/navbar.png' },
    { name: 'CTA Sections', slug: 'cta', image: '/images/cta.png' },
    { name: 'Footers', slug: 'footer', image: '/images/footer.png' },
  ];
  
  export default components;