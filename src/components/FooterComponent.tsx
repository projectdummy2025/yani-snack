import siteContent from '../data/siteContent.json';

const content = siteContent as {
  footer: {
    brand: { title: string; description: string; instagram: string };
    layanan: { title: string; links: { label: string; href: string }[] };
    informasi: { title: string; links: { label: string; href: string; primary?: boolean }[] };
    dapurProduksi: { title: string; items: { icon: string; text: string }[] };
    copyright: string;
  };
};

export default function FooterComponent() {
  const { brand, layanan, informasi, dapurProduksi, copyright } = content.footer;

  return (
    <footer className="bg-surface border-t border-outline-variant pt-space-xl pb-space-lg">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="flex flex-col gap-3">
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">{brand.title}</span>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{brand.description}</p>
            <div className="flex items-center gap-3 pt-2 text-on-surface">
              <a aria-label="Instagram" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm" data-icon="photo_camera">photo_camera</span>
              </a>
              <span className="text-label-sm font-label-sm text-on-surface-variant">{brand.instagram}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-title-md text-title-md text-on-surface mb-1">{layanan.title}</h4>
            {layanan.links.map((link) => (
              <a key={link.href} className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors underline" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-title-md text-title-md text-on-surface mb-1">{informasi.title}</h4>
            {informasi.links.map((link) => (
              <a
                key={link.href}
                className={`font-body-sm text-body-sm hover:text-primary transition-colors underline ${link.primary ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
            <h4 className="font-title-md text-title-md text-on-surface mb-1">{dapurProduksi.title}</h4>
            {dapurProduksi.items.map((item) => (
              <p key={item.text} className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-base text-primary mt-0.5" data-icon={item.icon}>
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="border-t border-outline-variant/60 py-space-md px-gutter text-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
