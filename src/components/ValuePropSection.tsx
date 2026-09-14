import siteContent from '../data/siteContent.json';

const content = siteContent as {
  valueProp: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: { title: string; description: string }[];
    badge: { label: string; quote: string };
  };
};

const { eyebrow, title } = content.valueProp;

// 4 High-resolution authentic traditional snack & kitchen gallery images
const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdEoR9vgmvIiRlsjnK8ErCBVvwrKSPjlxixkr4Jj4p7wIqHHVSog8n9QW8NNIuxQj4_8XEIIe41S6RePHGnfD0pc08okChuoqxjKq4NMOBgcBoH2tb8NFslxK62FmTVktdYE66qIeNnTyMdH0Okpdr9cwuatM_GmDf0lGPfELCrPEpRsuCoWNuQQ6NWkKh6jyU1t2BNQ0fuPIfEHaRGD3p7oIn_xKymfglUQ4X-sevHehVSKyoptss',
    alt: 'Klepon Pandan Suji Segar Yani Snack',
    className: 'col-start-2 col-end-3 row-start-1 row-end-3',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIV48VJ5RBFz0Ryh_P1ugjY9MFpBciJaHLVvXB-74YVFuF036pqwFkzg1Ukn5CSraAgHZEKESz-eqIgmSFcWcaKti8Tke1Fal2sXzvYPVHb_NnMDM6DM8wto-E8XjXYSy0QrQMPpFJC_ufKXbqxgA-PEyfvnSRKfaWyotMWblLhKHiNR6buij_DQmEiXF_ZwFmKV8bV_UggaBraZ8KSBjln9vq5bMXRMp2IjJDeS4vHEGcsL6KiA7U',
    alt: 'Lemper Bakar Daun Pisang Yani Snack',
    className: 'col-start-1 col-end-2 row-start-2 row-end-4',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUKfyUeKDJgjaL55wUg7Fk2qxENoJm2hzLPxFWuT-BNdZxddcbMe774WOmgERRvb2ZbkJDTyLFe_M_OqOeXZPFCjKaYqy2T4vlbAsgAEinXs7EBBz3DN8FMtWbCnMF9ipUi80kWXlKccR9qgwhuIOPsl_oFlRLgWDNJn0iSNJHmUF52WnQ11AXx1WLrSj_htjjCuhUtRbCYhEguHcTu6PgDwCnxTEooIDejVjKgKxsswHJFWQKSZhU',
    alt: 'Kue Semar Mendem Dapur Yani Snack',
    className: 'col-start-2 col-end-3 row-start-3 row-end-5',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAb6XtELET90SZot4tbV5uGoawgS5JDdDXMIPiCfxIK6ntnttqKezYMKsjJ1eX_iEGAOm2g3uwlos7N7JBR39ckLOR58AV7O1Rw2qHvNyv6HPXycT-EqyksfqGzC2Z2oelwDhtCYqxeQaUUUKrn6B9QC-Cf5_yqWXT3jv7PnATPFE32WNun1u7mGJe7WGOh_j-SBEF33LDNImjgIsZ2YA4Ltez1pPNJkbW-ukiFRDzo0pOo6_9Pb5I',
    alt: 'Lapis Legit Mini Rempah Tradisional',
    className: 'col-start-1 col-end-2 row-start-4 row-end-6',
  },
];

export default function ValuePropSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Narration & Value Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">
              {eyebrow}
            </span>
            
            <h2
              className="font-sans font-medium text-3xl sm:text-4xl lg:text-[38px] text-on-surface tracking-tight"
              style={{ lineHeight: 'calc(1em + 1rem)' }}
            >
              {title}
            </h2>

            {/* Concise Story Narration with 2rem (mt-8) top margin and relaxed line height */}
            <p className="mt-8 text-on-surface/85 font-sans text-base sm:text-[17px] font-medium leading-[1.85] max-w-xl">
              Setiap subuh, kami memarut kelapa segar, menumbuk daun suji alami, dan mengukus beralaskan daun pisang kluthuk. Bukan sekadar pengganjal lapar, melainkan kehangatan tradisi Jogja yang tulus memuliakan setiap meja jamuan Anda.
            </p>
          </div>

          {/* Right Column: Staggered 4-Image Grid Gallery */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            
            {/* Ambient Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none -z-10" />

            {/* Staggered Grid Container */}
            <div className="grid grid-cols-2 grid-rows-[45px_145px_45px_145px_45px] gap-3.5 sm:gap-4.5 w-full max-w-lg">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-2xl border border-outline-variant/50 shadow-md hover:shadow-xl bg-surface-container-low transition-all duration-500 group ${img.className}`}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
