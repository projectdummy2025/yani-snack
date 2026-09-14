import siteContent from '../data/siteContent.json';
import type { ReviewItem } from '../types/menuType';

const content = siteContent as { reviews: { eyebrow: string; title: string; subtitle: string; items: ReviewItem[] } };

export default function ReviewsSection() {
  const { eyebrow, title, subtitle, items } = content.reviews;

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-surface-container-low/30 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-14">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-3">
            {eyebrow}
          </span>
          <h2
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-[38px] text-on-surface tracking-tight"
            style={{ lineHeight: 'calc(1em + 1rem)' }}
          >
            {title}
          </h2>
          <p className="font-sans text-sm sm:text-base font-medium text-on-surface/85 mt-3 leading-[1.75]">
            {subtitle}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {items.map((review) => (
            <div
              key={review.id}
              className="bg-surface-container-lowest/80 border border-outline-variant/40 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-secondary mb-3">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <span
                      key={idx}
                      className="material-symbols-outlined text-base"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Event Context Pill */}
                <span className="inline-block bg-secondary-container/20 text-secondary px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide mb-3">
                  {review.context}
                </span>

                {/* Review Text Quote */}
                <p className="font-sans text-sm sm:text-[15px] font-medium text-on-surface/90 leading-[1.8] italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-container/10 text-primary font-sans font-bold text-xs flex items-center justify-center shrink-0">
                  {review.author.initials}
                </div>
                <div className="flex flex-col">
                  <p className="font-sans text-sm font-bold text-on-surface leading-tight">
                    {review.author.name}
                  </p>
                  <p className="font-sans text-xs text-on-surface-variant font-medium mt-0.5">
                    {review.author.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
