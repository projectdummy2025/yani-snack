// Import content JSON and type definitions
import siteContent from '../data/siteContent.json';
import type { Hero, MenuItem } from '../types/menuType';
import MenuCard from './MenuCard';

const content = siteContent as { hero: Hero; menu: { items: MenuItem[] } };

export default function HeroSection() {
  // Extract hero content and pick top 4 menu items for quick showcase
  const { headline, subtitle, ctas, image } = content.hero;
  const popularItems = content.menu.items.slice(0, 4);

  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-surface-container-lowest/50 via-transparent to-surface-container-lowest/30">
      <div className="max-w-[1200px] mx-auto px-gutter flex flex-col gap-14 md:gap-20 lg:gap-24">
        
        {/* Top Hero Layout: Text Left + Circular Dish Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Headline with Plus Jakarta Sans */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-on-surface"
              style={{ lineHeight: 'calc(1em + 1rem)' }}
            >
              Aroma Subuh Jogja,<br />
              <span className="text-primary font-bold">Cita Rasa Jajanan Pasar</span>
            </h1>

            {/* Subtitle Message (2rem / mt-8 from Title) */}
            <p className="font-sans text-base sm:text-[17px] font-medium text-on-surface/85 max-w-xl leading-[1.85] mt-8">
              {subtitle}
            </p>

            {/* Action CTA Row (3rem / mt-12 from Subtitle) */}
            <div className="flex flex-wrap items-center gap-4 mt-12 w-full sm:w-auto">
              {ctas.map((cta) => (
                <a
                  key={cta.href}
                  className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full font-sans text-sm font-semibold active:scale-95 transition-all ${
                    cta.variant === 'primary'
                      ? 'bg-primary-container text-on-primary hover:bg-primary shadow-xs hover:shadow-md'
                      : 'bg-surface-container-lowest border border-outline text-primary hover:bg-surface-container'
                  }`}
                  href={cta.href}
                >
                  <span>{cta.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Enlarged Circular Tampah Focal Point with Warm Backdrop Accent Circles */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-8 lg:mt-0">
            
            {/* Enlarged Soft Warm Backdrop Accent Circles */}
            <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-secondary-container/35 border border-secondary/20 pointer-events-none -z-10" />
            <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-5 w-52 h-52 sm:w-68 sm:h-68 rounded-full bg-primary-container/15 border border-primary/15 pointer-events-none -z-10" />

            {/* Outer Dashed Decorative Ring (Enlarged) */}
            <div className="w-72 h-72 sm:w-[24rem] sm:h-[24rem] lg:w-[28rem] lg:h-[28rem] rounded-full border-2 border-dashed border-primary/35 p-3.5 sm:p-5 flex items-center justify-center relative">
              
              {/* Inner Circular Dish Photography Container (Enlarged) */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-surface-container-lowest relative group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  data-alt={image.alt}
                  src={image.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/30 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: Quick "Pilihan Terfavorit Subuh" (4 Product Cards) */}
        <div className="pt-6 sm:pt-10 flex flex-col gap-6 sm:gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-sans font-bold text-[15px] sm:text-[16px] text-on-surface">Pilihan Terfavorit Subuh</h2>
              <p className="font-sans text-xs sm:text-[14px] text-on-surface-variant mt-1">Kudapan hangat paling cepat dipesan setiap pagi</p>
            </div>
            <a href="#menu" className="font-sans text-xs sm:text-sm text-primary font-semibold hover:underline">
              Lihat Semua Menu
            </a>
          </div>

          {/* 4 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {popularItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



