import { CodeXml } from 'lucide-react';

import { portfolio } from '@/data/portfolio';
import { SectionLink } from './section-link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-credit"><CodeXml aria-hidden="true" size={18} /> {portfolio.shortName} <span>·</span> {portfolio.location}</div>
        <SectionLink href="#top">Back to top</SectionLink>
      </div>
    </footer>
  );
}
