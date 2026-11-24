import type { ReactNode } from 'react';

export function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 className="section-heading" id={id}>{children}</h2>;
}
