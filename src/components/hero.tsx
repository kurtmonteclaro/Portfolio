import { FolderCode, GitBranch, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

import { portfolio } from '@/data/portfolio';
import { SectionLink } from './section-link';

export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="hero">
      <div className="page-container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-name" id="hero-name" tabIndex={-1}>
            {portfolio.nameLines[0]} <span>{portfolio.nameLines[1]}</span>
          </h1>
          <p className="hero-role">{portfolio.headline}</p>
          <p className="hero-intro">{portfolio.introduction}</p>

          <div className="hero-actions">
            <SectionLink className="button button-primary" href="#projects">
              <FolderCode aria-hidden="true" size={17} /> View Projects
            </SectionLink>
            <SectionLink className="button button-quiet" href="#contact">
              <Mail aria-hidden="true" size={17} /> Contact Me
            </SectionLink>
          </div>

          <div className="hero-meta">
            <span><MapPin aria-hidden="true" size={16} /> {portfolio.location}</span>
            <a href={portfolio.github}><GitBranch aria-hidden="true" size={16} /> GitHub</a>
          </div>
        </div>

        <div className="hero-visual">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet="/images/coding-cat-still.webp" type="image/webp" />
            <Image
              alt="Pixel-art cat at a computer in a purple room"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
              fill
              loading="eager"
              src="/images/coding-cat.gif"
              unoptimized
            />
          </picture>
          <span aria-hidden="true" className="visual-corner visual-corner-tl" />
          <span aria-hidden="true" className="visual-corner visual-corner-tr" />
          <span aria-hidden="true" className="visual-corner visual-corner-bl" />
          <span aria-hidden="true" className="visual-corner visual-corner-br" />
        </div>
      </div>
    </section>
  );
}
