import siteContent from '../data/siteContent.json';
import type { Navigation } from '../types/menuType';

const content = siteContent as { navigation: Navigation };

export default function TopNavBar() {
  const { brand, links, whatsapp } = content.navigation;

  return (
    <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-xs docked full-width top-0 sticky z-40">
      <div className="relative flex items-center justify-center w-full px-gutter max-w-[1200px] mx-auto h-14 sm:h-16">
        
        {/* Centered Navigation Links */}
        <nav className="flex items-center space-x-5 sm:space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-lg text-label-lg active:scale-95"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-aligned Action Icon Buttons */}
        <div className="absolute right-gutter flex items-center gap-2.5 sm:gap-3">
          <button
            aria-label="Keranjang Belanja"
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container active:scale-95 transition-all flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl" data-icon="shopping_bag">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary font-label-sm text-[10px] w-4 h-4 flex items-center justify-center rounded-full" id="cart-counter">
              2
            </span>
          </button>
          <a
            aria-label="Pesan via WhatsApp"
            title="Pesan via WhatsApp"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-container text-on-primary hover:bg-primary active:scale-95 transition-all shadow-xs flex items-center justify-center"
            href={whatsapp.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          </a>
        </div>

      </div>
    </header>
  );
}
