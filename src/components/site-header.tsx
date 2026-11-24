'use client';

import { CodeXml, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';

import { navigation, portfolio } from '@/data/portfolio';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="page-container header-inner">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><CodeXml aria-hidden="true" size={19} /></span>
          {portfolio.shortName}
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={toggleRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>

        <nav aria-label="Main navigation" className="site-nav" data-open={menuOpen} id="primary-navigation">
          {navigation.map(({ id, label }) => (
            <a className={id === 'contact' ? 'nav-contact' : undefined} href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
