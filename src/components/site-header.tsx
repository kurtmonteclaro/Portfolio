'use client';

import { CodeXml, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { navigation, portfolio } from '@/data/portfolio';
import { SectionLink } from './section-link';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    let frame = 0;

    function scheduleUpdate() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const offset = Number.parseFloat(getComputedStyle(sections[0]).scrollMarginTop);
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const focused = sections.find((section) => section.contains(document.activeElement));

        // Near the footer, two sections can share the same final scroll position.
        if (focused) {
          const target = scrollY + focused.getBoundingClientRect().top - offset;
          if (Math.abs(scrollY - Math.min(target, maxScroll)) <= 2) {
            setActiveSection(focused.id);
            return;
          }
        }

        const atBottom = maxScroll > 0 && scrollY >= maxScroll - 1;
        const current = atBottom
          ? sections.at(-1)
          : sections.findLast((section) => section.getBoundingClientRect().top <= offset + 1);
        setActiveSection(current?.id);
      });
    }

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    document.addEventListener('focusin', scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      document.removeEventListener('focusin', scheduleUpdate);
    };
  }, []);

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
        <SectionLink className="brand" href="#top" onNavigate={() => setMenuOpen(false)}>
          <span className="brand-mark"><CodeXml aria-hidden="true" size={19} /></span>
          {portfolio.shortName}
        </SectionLink>

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
            <SectionLink
              aria-current={id === activeSection ? 'location' : undefined}
              className={id === 'contact' ? 'nav-contact' : undefined}
              href={`#${id}`}
              key={id}
              onNavigate={() => setMenuOpen(false)}
            >
              {label}
            </SectionLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
