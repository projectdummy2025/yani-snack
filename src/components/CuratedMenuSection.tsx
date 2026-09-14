import { useState, useEffect } from 'react';
import siteContent from '../data/siteContent.json';
import type { MenuItem, MenuCategory } from '../types/menuType';
import MenuCard from './MenuCard';

const content = siteContent as {
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: MenuCategory[];
    items: MenuItem[];
  };
};

type Filter = MenuCategory['id'];

export default function CuratedMenuSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [visibleItems, setVisibleItems] = useState<MenuItem[]>(content.menu.items);

  useEffect(() => {
    const filtered =
      activeFilter === 'all'
        ? content.menu.items
        : content.menu.items.filter((item) =>
            item.category.toLowerCase().includes(activeFilter.toLowerCase())
          );
    setVisibleItems(filtered);
  }, [activeFilter]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="flex flex-col items-start max-w-xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3">
              {content.menu.eyebrow}
            </span>
            <h2
              className="font-sans font-medium text-3xl sm:text-4xl lg:text-[38px] text-on-surface tracking-tight"
              style={{ lineHeight: 'calc(1em + 1rem)' }}
            >
              {content.menu.title}
            </h2>
            <p className="font-sans text-sm sm:text-base font-medium text-on-surface/85 mt-3 leading-[1.75]">
              {content.menu.subtitle}
            </p>
          </div>

          {/* Clean Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 shrink-0" id="filter-container">
            {content.menu.filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`menu-filter px-4 sm:px-5 py-2 rounded-full font-sans text-xs sm:text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-container text-on-primary font-bold shadow-xs'
                    : 'bg-surface-container-low/70 text-on-surface font-medium border border-outline-variant/40 hover:bg-surface-container'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid: Consistent 2-row min-height stability so bottom section never jumps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 min-h-[650px] sm:min-h-[680px] content-start transition-all duration-300" id="menu-grid">
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <p className="font-sans text-sm font-medium text-on-surface-variant">
                Menu dalam kategori ini sedang dipersiapkan.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
