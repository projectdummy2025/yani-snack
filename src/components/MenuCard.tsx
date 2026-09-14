import type { MenuItem } from '../types/menuType';

type Props = {
  item: MenuItem;
};

export default function MenuCard({ item }: Props) {
  return (
    <div
      className="relative h-[290px] sm:h-[310px] rounded-2xl border border-outline-variant/60 overflow-hidden bg-surface-container-lowest shadow-xs hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col justify-end"
      data-category={item.category}
    >
      {/* 1. Image Layer with Subtle Zoom & Soft Blur on Hover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-surface-container-low">
        <img
          className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-[2px] transition-all duration-700 ease-out"
          src={item.image}
          alt={item.name}
        />
        
        {/* Dynamic Gradient: 50% bottom in normal state -> rises smoothly to 80% on hover without washing out the top */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/90 to-transparent transition-all duration-500 group-hover:h-[85%] group-hover:from-surface-container-lowest group-hover:via-surface-container-lowest/95 group-hover:to-transparent" />
      </div>

      {/* Product Tag Badge */}
      {item.tag && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary-container text-on-primary shadow-xs transition-opacity duration-300 group-hover:opacity-90">
          {item.tag.label}
        </span>
      )}

      {/* 2. Text Container: Always grounded at the bottom, expanding upwards naturally on hover */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end transition-all duration-500 ease-in-out">
        <div className="flex flex-col gap-1 transition-all duration-500">
          <h3 className="font-sans text-sm sm:text-base font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1 group-hover:line-clamp-none">
            {item.name}
          </h3>
          <p className="font-sans text-xs sm:text-[13px] text-on-surface-variant line-clamp-2 group-hover:line-clamp-none transition-all duration-500 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
