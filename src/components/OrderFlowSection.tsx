import siteContent from '../data/siteContent.json';
import type { OrderFlowStep } from '../types/menuType';

const content = siteContent as { orderFlow: { eyebrow: string; title: string; subtitle: string; steps: OrderFlowStep[] } };

export default function OrderFlowSection() {
  const { eyebrow, title, subtitle, steps } = content.orderFlow;

  return (
    <section id="order-flow" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 sm:mb-16">
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

        {/* 3-Step Seamless Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start relative group"
            >
              {/* Step Number Indicator */}
              <span className="w-8 h-8 rounded-full bg-primary-container/10 text-primary font-sans font-extrabold text-xs flex items-center justify-center mb-4">
                0{step.number}
              </span>

              {/* Step Title */}
              <h3 className="font-sans text-lg sm:text-[19px] font-bold text-on-surface mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant font-medium leading-[1.8] max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
