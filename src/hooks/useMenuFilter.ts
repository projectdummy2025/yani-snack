import { useState } from 'react';
import { menuCategories } from '../data/menuData';

export function useMenuFilter() {
  const [activeFilter, setActiveFilter] = useState<string>(menuCategories[0].id);

  return {
    activeFilter,
    categories: menuCategories,
    setActiveFilter
  };
}
