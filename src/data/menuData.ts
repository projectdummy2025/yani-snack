import type { MenuItem, MenuCategory, ReviewItem, HarnessPackage } from '../types/menuType';
import siteContent from './siteContent.json';

type SiteContent = typeof siteContent;

const content = siteContent as SiteContent;

export const menuCategories: MenuCategory[] = content.menu.filters;

export const menuItems: MenuItem[] = content.menu.items.map((item) => ({
  id: item.id,
  name: item.name,
  description: item.description,
  price: item.price,
  category: item.category,
  minOrder: item.minOrder,
  tag: item.tag,
  image: item.image
}));

export const harnessPackages: HarnessPackage[] = content.hampers.packages;

export const harnessConsultationBanner = content.hampers.consultationBanner;

export const reviewItems: ReviewItem[] = content.reviews.items.map((review) => ({
  id: review.id,
  rating: review.rating,
  context: review.context,
  text: review.text,
  author: review.author
}));
