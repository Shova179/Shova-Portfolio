"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Project {
  title: string;
  image: string;
  link?: string;
  gradient?: string;
}

const projects: Project[] = [
  {
    title: "Mdabali Website",
    image: "/images/mdbaali.png",
    link: "https://www.mdabali.com.np/",
  },
  {
    title: "Ru-Pay",
    image: "/images/rupay.png",
    link: "/ru-pay",
  },
  {
    title: "Imperial Securities",
    image: "/images/imperial.png",
    link: "https://imperialsecurities.com.np/",
  },
  {
    title: "Mdabali Mobile App",
    image: "/images/mdabaliapp.png",
    link: "https://play.google.com/store/apps/details?id=com.infodev.mdabaliMainApp&hl=en",
  },
  {
    title: "NMB Capital",
    image: "/images/nmb.png",
    link: "https://www.nmbcl.com.np/",
  },
  {
    title: "Danfe Hotels",
    image: "/images/danfe.png",
    link: "https://www.danfehotels.com/",
  },
];

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    cardRefs.current.forEach((el, index) => {
      if (el) {
        el.style.transitionDelay = `${index * 100}ms`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Social Sidebar */}
      <aside className="social-sidebar" aria-label="Social media links">
        <span className="follow-label">Follow Me</span>
        <div className="line" />
        <a
          href="https://www.linkedin.com/in/shovakushmi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/shova_12/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/shova.kushmi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </aside>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Shova Kumari Chaudhary</h1>
            <div className="hero-designation">
              <span>UI/UX Designer</span>
              <span className="dot">•</span>
              <span>Project Manager</span>
            </div>
            <p>
              Working as a UI/UX Designer for five years, I&apos;m passionate
              about creating digital experiences that combine creativity and
              analytical thinking. Working on a variety of projects, including
              admin interfaces, websites, mobile apps, and design systems, is
              part of my varied background.
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <Image
                src="/images/profile.png"
                alt="Shova Kumari Chaudhary - UI/UX Designer"
                fill
                sizes="(max-width: 768px) 320px, 480px"
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta-section fade-in-section"
        id="cta"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <p>
          Explore my professional portfolio to gain a comprehensive insight into
          my background, skills, and accomplishments
        </p>
        <a
          href="/Shova Kumari Chaudhary CV.pdf"
          download="Shova Kumari Chaudhary CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Download CV
        </a>
      </section>

      {/* Projects Section */}
      <section
        className="projects-section fade-in-section"
        id="projects"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <div className="projects-header">
          <h2>Recent Projects Showcase</h2>
          <p>A Glimpse into My latest Creative Endeavors</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const href = project.link || "#";
            const isExternal = href.startsWith("http");
            return (
              <a
                key={project.title}
                href={href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="project-card"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <div className="project-card-image">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="project-card-overlay" />
                    </>
                  ) : (
                    <div className="gradient-placeholder">
                      {project.title}
                    </div>
                  )}
                </div>
                <div className="project-card-title">{project.title}</div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
