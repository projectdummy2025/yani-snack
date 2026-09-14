import siteContent from '../data/siteContent.json';
import type { Harnesses } from '../types/menuType';

const content = siteContent as { hampers: Harnesses };

// Authentic packaging / presentation images for each package
const packageImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDdEoR9vgmvIiRlsjnK8ErCBVvwrKSPjlxixkr4Jj4p7wIqHHVSog8n9QW8NNIuxQj4_8XEIIe41S6RePHGnfD0pc08okChuoqxjKq4NMOBgcBoH2tb8NFslxK62FmTVktdYE66qIeNnTyMdH0Okpdr9cwuatM_GmDf0lGPfELCrPEpRsuCoWNuQQ6NWkKh6jyU1t2BNQ0fuPIfEHaRGD3p7oIn_xKymfglUQ4X-sevHehVSKyoptss',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAIV48VJ5RBFz0Ryh_P1ugjY9MFpBciJaHLVvXB-74YVFuF036pqwFkzg1Ukn5CSraAgHZEKESz-eqIgmSFcWcaKti8Tke1Fal2sXzvYPVHb_NnMDM6DM8wto-E8XjXYSy0QrQMPpFJC_ufKXbqxgA-PEyfvnSRKfaWyotMWblLhKHiNR6buij_DQmEiXF_ZwFmKV8bV_UggaBraZ8KSBjln9vq5bMXRMp2IjJDeS4vHEGcsL6KiA7U',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA4ROd1q-3526Z_j9fxmduMUSTlcAXAc_XCYt1W9sP6IhE2tnNldR5ZLRoXEFG6QGg1b5NfqF7ZdcNlys0w703v1IdSFDDNnvQxg8IuXq_GUOqmxeBRIWh58t4naxdxwroJVYtJrWKrXY-iJyVzSEx4lnNwcEcHQ0MeccxbUaZbewfNqINJnWrg4dWHvyM1RsR3szxxCNpN6jawoQmG86sQ825odPFkuZr7JsgiIfCZsTsXN2MKpraZ',
];

export default function HampersSection() {
  const { eyebrow, title, subtitle, packages, consultationBanner } = content.hampers;

  return (
    <section id="hampers" className="py-20 lg:py-28 bg-surface-container-low/30 relative overflow-hidden">
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

        {/* 3 Visual-First Packaging Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header (2/3 ratio aesthetic) */}
                <div className="relative h-[210px] w-full overflow-hidden bg-surface-container-low">
                  <img
                    src={packageImages[idx] || packageImages[0]}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category / Style Tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-surface-container-lowest/90 backdrop-blur-sm text-primary shadow-xs">
                    {pkg.category}
                  </span>

                  {/* Special Badge if any */}
                  {pkg.badge && (
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary-container text-on-primary shadow-xs">
                      {pkg.badge.label}
                    </span>
                  )}
                </div>

                {/* Package Info Content */}
                <div className="p-5 sm:p-6 flex flex-col gap-2">
                  <h3 className="font-sans text-lg sm:text-[19px] font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {pkg.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-on-surface-variant font-medium leading-[1.75]">
                    {pkg.description}
                  </p>

                  {/* Highlight Features (Pills instead of black bullet points) */}
                  <div className="flex flex-wrap gap-1.5 pt-3 mt-1">
                    {(pkg.features as unknown as string[]).map((feature: string, fIdx: number) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant font-sans text-[11px] font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Price & Order CTA Row */}
              <div className="p-5 sm:p-6 pt-3 border-t border-outline-variant/30 flex items-center justify-between mt-2">
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Mulai dari</span>
                  <span className="font-sans text-base sm:text-lg font-extrabold text-primary">
                    {pkg.price} <span className="text-xs font-normal text-on-surface-variant">{pkg.priceUnit}</span>
                  </span>
                </div>
                
                <a
                  className="px-4 py-2 rounded-full bg-primary-container text-on-primary font-sans text-xs font-bold hover:bg-primary active:scale-95 transition-all shadow-xs hover:shadow-md"
                  href={`https://wa.me/6281234567890?text=${pkg.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Paket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
