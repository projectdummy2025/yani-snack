import siteContent from '../data/siteContent.json';
import type { Announcement } from '../types/menuType';

const content = siteContent as { announcement: Announcement };

export default function TopAnnouncementBar() {
  const { message, cta, ctaHref } = content.announcement;

  return (
    <div className="bg-primary-container text-on-primary py-1.5 px-gutter text-center relative z-50 text-[11px] font-medium tracking-wide">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center">
        <span className="opacity-90">{message}</span>
        <a
          className="underline underline-offset-2 hover:text-on-primary-container font-semibold transition-colors ml-1"
          href={ctaHref}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
