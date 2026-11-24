import { CalendarDays, CodeXml, Database, Download, GraduationCap, Layers3, Server, Wrench } from 'lucide-react';
import Image from 'next/image';

import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { TagList } from '@/components/tag-list';
import { portfolio, projects, skills } from '@/data/portfolio';

const skillIcons = {
  languages: CodeXml,
  frontend: Layers3,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

export default function HomePage() {
  const { aboutPortrait, education, email, github, githubHandle, resume } = portfolio;
  const mailto = `mailto:${email}`;

  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />

      <section aria-labelledby="projects-title" className="section section-projects" id="projects">
        <div className="page-container">
          <SectionHeading id="projects-title">Featured Projects</SectionHeading>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-title" className="section section-divider" id="about">
        <div className="page-container about-layout">
          <div className="about-portrait">
            <Image
              alt={aboutPortrait.alt}
              height={aboutPortrait.height}
              sizes="(max-width: 376px) calc(100vw - 2.5rem), (min-width: 768px) and (max-width: 1200px) 29vw, 336px"
              src={aboutPortrait.src}
              width={aboutPortrait.width}
            />
          </div>
          <div>
            <SectionHeading id="about-title">About Me</SectionHeading>
            <div className="about-copy">
              {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <a className="button button-secondary mt-6" download={resume.filename} href={resume.href}>
              <Download aria-hidden="true" size={17} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="skills-title" className="section section-skills" id="skills">
        <div className="page-container">
          <SectionHeading id="skills-title">Technical Skills</SectionHeading>
          <div className="skills-grid">
            {skills.map(({ id, title, items }) => {
              const Icon = skillIcons[id];

              return (
                <article className="skill-card" key={id}>
                  <h3><span className="skill-icon"><Icon aria-hidden="true" size={19} /></span>{title}</h3>
                  <TagList items={items} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="education-title" className="section" id="education">
        <div className="page-container">
          <SectionHeading id="education-title">Education</SectionHeading>
          <div className="grid gap-4">
            {education.map(({ institution, program, graduation, highlights, logo }) => (
              <article className="education-card" key={institution}>
                <span className="education-icon">
                  {logo ? (
                    <Image alt="" height={42} src={logo} width={42} />
                  ) : (
                    <GraduationCap aria-hidden="true" size={28} />
                  )}
                </span>
                <div className="education-copy">
                  <h3>{institution}</h3>
                  <p>{program}</p>
                  <TagList items={highlights} />
                </div>
                <p className="education-date">
                  <CalendarDays aria-hidden="true" size={17} />
                  <time dateTime={graduation.dateTime}>{graduation.label}</time>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-title" className="section section-contact" id="contact">
        <div className="page-container">
          <div className="contact-panel">
            <div>
              <SectionHeading id="contact-title">Let’s connect</SectionHeading>
              <p className="contact-description">I’m looking for IT internship and OJT opportunities. If your team is hiring, I’d be glad to hear from you.</p>
              <a className="button button-primary" href={mailto}>
                <Image alt="" height={20} src="/images/contact/gmail.png" unoptimized width={20} />
                Email Me
              </a>
            </div>
            <address className="contact-links">
              <a href={mailto}>
                <span className="contact-icon">
                  <Image alt="" height={24} src="/images/contact/gmail.png" unoptimized width={24} />
                </span>
                <span><strong>Email</strong><span>{email}</span></span>
              </a>
              <a href={github}>
                <span className="contact-icon">
                  <Image alt="" height={21} src="/images/contact/github.svg" unoptimized width={21} />
                </span>
                <span><strong>GitHub</strong><span>@{githubHandle}</span></span>
              </a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
