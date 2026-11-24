import { CodeXml } from 'lucide-react';

import { portfolio } from '@/data/portfolio';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-credit"><CodeXml aria-hidden="true" size={18} /> {portfolio.shortName} <span>·</span> {portfolio.location}</div>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
