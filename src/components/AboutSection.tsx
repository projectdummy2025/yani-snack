import siteContent from '../data/siteContent.json';
import type { AboutCard } from '../types/menuType';

const content = siteContent as { about: { eyebrow: string; title: string; cards: AboutCard[] } };

export default function AboutSection() {
  const { eyebrow, title, cards } = content.about;

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-container-low/40 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow + Headline H2 + Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">
              {eyebrow}
            </span>
            
            <h2
              className="font-sans font-medium text-3xl sm:text-4xl lg:text-[38px] text-on-surface tracking-tight"
              style={{ lineHeight: 'calc(1em + 1rem)' }}
            >
              {title}
            </h2>

            <p className="mt-8 text-on-surface/85 font-sans text-base sm:text-[17px] font-medium leading-[1.85] max-w-md">
              Komitmen kami menjaga keaslian rasa dan kehormatan tradisi Jawa di setiap sajian yang hadir di meja Anda.
            </p>
          </div>

          {/* Right Column: 100% Seamless Editorial Stacked Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-outline-variant/35">
            {cards.map((card) => (
              <div
                key={card.number}
                className="py-7 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 group"
              >
                {/* Tag & Title (Clean, Minimalist, No Number) */}
                <div className="sm:w-[240px] shrink-0 flex flex-col items-start">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary mb-1.5">
                    {card.tag}
                  </span>
                  
                  <h3 className="font-sans text-base sm:text-[17px] font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Description (Right Side of Row) */}
                <div className="flex-1">
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant font-medium leading-[1.85]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
