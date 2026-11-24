'use client';

import type { ComponentPropsWithoutRef } from 'react';

type SectionLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'onClick'> & {
  href: `#${string}`;
  onNavigate?: () => void;
};

export function SectionLink({ href, onNavigate, ...props }: SectionLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const section = document.getElementById(href.slice(1));
        if (!section) return;

        event.preventDefault();
        onNavigate?.();

        const { hash, pathname, search } = window.location;
        if (hash) window.history.replaceState(window.history.state, '', pathname + search);

        const focusTarget = section.id === 'top' ? document.getElementById('hero-name') : section;
        focusTarget?.focus({ preventScroll: true });
        section.scrollIntoView({ block: 'start' });
      }}
    />
  );
}
