export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  minOrder: string;
  tag?: {
    label: string;
    variant: 'secondary' | 'tertiary' | 'outline';
  };
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface ReviewItem {
  id: string;
  rating: number;
  context: string;
  text: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
}

export interface HarnessFeature {
  text: string;
}

export interface HarnessPackage {
  id: string;
  category: string;
  style: string;
  name: string;
  description: string;
  features: HarnessFeature[];
  price: string;
  priceUnit: string;
  whatsappMessage: string;
  badge?: {
    label: string;
    position: 'top';
  };
}

export interface HarnessConsultationBanner {
  icon: string;
  title: string;
  description: string;
  cta: {
    label: string;
    icon: string;
    href: string;
  };
}

export interface Harnesses {
  eyebrow: string;
  title: string;
  subtitle: string;
  packages: HarnessPackage[];
  consultationBanner: HarnessConsultationBanner;
}

export interface AboutCard {
  number: string;
  tag: string;
  title: string;
  description: string;
}

export interface OrderFlowStep {
  number: string;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterContact {
  title: string;
  items: FooterContactItem[];
}

export interface FooterNavigation {
  title: string;
  links: FooterLink[];
}

export interface FooterBrand {
  title: string;
  description: string;
}

export interface Footer {
  brand: FooterBrand;
  navigation: FooterNavigation;
  contact: FooterContact;
  copyright: string;
}

export interface NavigationBrand {
  title: string;
  subtitle: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationWhatsapp {
  label: string;
  href: string;
}

export interface Navigation {
  brand: NavigationBrand;
  links: NavigationLink[];
  whatsapp: NavigationWhatsapp;
}

export interface Announcement {
  badge: string;
  message: string;
  cta: string;
  ctaHref: string;
}

export interface HeroCta {
  label: string;
  href: string;
  icon: string;
  variant: 'primary' | 'secondary';
}

export interface HeroStat {
  value: string;
  label: string;
  icon?: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface FloatingBadgeMadeAt {
  label: string;
  icon: string;
}

export interface FloatingBadgeRating {
  score: string;
  reviews: string;
  icon: string;
}

export interface FloatingBadges {
  madeAt: FloatingBadgeMadeAt;
  rating: FloatingBadgeRating;
}

export interface Hero {
  badge: {
    icon: string;
    text: string;
  };
  headline: string;
  subtitle: string;
  ctas: HeroCta[];
  stats: HeroStat[];
  image: HeroImage;
  floatingBadges: FloatingBadges;
}

export interface SiteContent {
  announcement: Announcement;
  navigation: Navigation;
  hero: Hero;
  about: {
    eyebrow: string;
    title: string;
    cards: AboutCard[];
  };
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: MenuCategory[];
    items: MenuItem[];
  };
  hampers: Harnesses;
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ReviewItem[];
  };
  orderFlow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: OrderFlowStep[];
  };
  footer: Footer;
}
