"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function RuPayCaseStudy() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rupay-cs-page">
      {/* Top Sticky Navigation */}
      <nav className="rupay-nav">
        <div className="rupay-nav-container">
          <Link href="/" className="rupay-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Portfolio</span>
          </Link>
          <div className="rupay-brand">
            <span className="rupay-logo-text">रु - Pay</span>
            <span className="rupay-badge-mini">Case Study</span>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="rupay-hero">
        <div className="rupay-hero-container">
          <div className="rupay-hero-left">
            <div className="rupay-logo-large">
              <span className="logo-symbol">रु</span>
              <span className="logo-dash">-</span>
              <span className="logo-text">Pay</span>
            </div>
            <div className="rupay-tagline">DIGITAL WALLET APPLICATION</div>
            
            <p className="rupay-hero-desc">
              Ru-Pay is a next-generation mobile financial ecosystem built to simplify peer-to-peer money transfers, merchant QR payments, and utility bill clearing with speed, security, and human-centered design.
            </p>

            {/* Meta Information Cards */}
            <div className="rupay-meta-box">
              <div className="meta-col">
                <span className="meta-title">Role</span>
                <span className="meta-detail">Product Designer, UI/UX Designer</span>
              </div>
              <div className="meta-col">
                <span className="meta-title">Duration</span>
                <span className="meta-detail">2 Months</span>
              </div>
              <div className="meta-col">
                <span className="meta-title">Tools</span>
                <span className="meta-detail">Figma, FigJam, Miro</span>
              </div>
            </div>
          </div>

          <div className="rupay-hero-right">
            <div className="rupay-mockup-frame">
              <Image
                src="/images/rupay.png"
                alt="Ru-Pay Mobile App Mockup Preview"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 600px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Case Study Content */}
      <main className="rupay-content">
        
        {/* Section 1: Project Context */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">01. Overview</span>
            <h2>Project Context</h2>
            <div className="purple-bar" />
          </div>
          <div className="rupay-text-card">
            <p>
              In today&apos;s rapidly evolving digital economy, access to fast, transparent, and frictionless payment tools is vital. <strong>Ru-Pay</strong> was conceptualized to bridge the gap between traditional banking infrastructure and everyday mobile users across urban and semi-urban communities. The platform consolidates mobile recharges, instant QR payments, government taxes, utility bills, and personal wallet management into a single intuitive mobile application.
            </p>
          </div>
        </section>

        {/* Section 2: Problem Statement */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">02. Problem</span>
            <h2>Problem Statement</h2>
            <div className="purple-bar" />
          </div>
          <div className="rupay-text-card problem-card">
            <p>
              Existing payment solutions in the market suffered from cluttered user interfaces, multi-step transaction drop-offs, hidden fee structures, and poor visual feedback during checkout. Users frequently struggled with slow QR scanner loading times, confusing error messages during failed transactions, and an absence of automated utility bill reminders.
            </p>
          </div>
        </section>

        {/* Section 3: Target Audience */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">03. Audience</span>
            <h2>Target Audience</h2>
            <div className="purple-bar" />
          </div>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">📱</div>
              <h3>Tech-Savvy Youth & Students</h3>
              <p>Requires instant P2P transfers, split-bill features, and fast QR payments at cafes and campus retail stores.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">💼</div>
              <h3>Working Professionals</h3>
              <p>Needs automated recurring utility bill payments, salary wallet deposits, and exportable monthly expense statements.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🏪</div>
              <h3>Local Merchants & Retailers</h3>
              <p>Demands instant audio/visual payment confirmation, zero merchant friction, and clear daily reconciliation dashboards.</p>
            </div>
          </div>
        </section>

        {/* Section 4: User Personas */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">04. Research</span>
            <h2>User Personas</h2>
            <div className="purple-bar" />
          </div>

          <div className="personas-container">
            {/* Persona 1 */}
            <div className="persona-card">
              <div className="persona-header">
                <div className="persona-avatar">
                  <span className="avatar-initials">SP</span>
                </div>
                <div className="persona-info">
                  <h3>Sujata Parajuli</h3>
                  <p className="persona-role">Corporate Marketing Executive (Age: 27)</p>
                  <p className="persona-location">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="persona-body">
                <div className="persona-col">
                  <h4>Frustrations & Pain Points</h4>
                  <ul>
                    <li>Complex multi-step processes to pay monthly internet and electricity bills.</li>
                    <li>Lacks visibility into where monthly spending goes across different payment channels.</li>
                    <li>Anxious about app crashes during high-volume merchant payments.</li>
                  </ul>
                </div>
                <div className="persona-col">
                  <h4>Goals & Needs</h4>
                  <ul>
                    <li>One-tap Scan & Pay with instant visual payment confirmation receipts.</li>
                    <li>Automated utility bill reminders with saved customer IDs.</li>
                    <li>Categorized expense summaries for personal budgeting.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="persona-card">
              <div className="persona-header">
                <div className="persona-avatar persona-avatar-2">
                  <span className="avatar-initials">RK</span>
                </div>
                <div className="persona-info">
                  <h3>Rohan Karki</h3>
                  <p className="persona-role">University Student & Freelancer (Age: 22)</p>
                  <p className="persona-location">Lalitpur, Nepal</p>
                </div>
              </div>
              <div className="persona-body">
                <div className="persona-col">
                  <h4>Frustrations & Pain Points</h4>
                  <ul>
                    <li>High friction when splitting meal expenses with friends.</li>
                    <li>Sluggish camera initialization when scanning merchant QR codes.</li>
                    <li>Unclear transaction status when money is deducted during network lag.</li>
                  </ul>
                </div>
                <div className="persona-col">
                  <h4>Goals & Needs</h4>
                  <ul>
                    <li>Lightning-fast QR camera launch directly from the home screen.</li>
                    <li>Instant push notifications with haptic feedback upon payment completion.</li>
                    <li>Biometric MPIN authorization for rapid security verification.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Design Process */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">05. Methodology</span>
            <h2>Design Process</h2>
            <div className="purple-bar" />
          </div>

          <div className="process-flow-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3>Empathize</h3>
              <p>User interviews, competitive analysis of top wallet apps, & qualitative surveys.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h3>Define</h3>
              <p>Problem mapping, user personas creation, & core user flow definition.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h3>Ideate</h3>
              <p>Information architecture, feature prioritization, & napkin sketching.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h3>Prototype</h3>
              <p>Low-fidelity wireframing, high-fidelity UI design, & interactive Figma prototyping.</p>
            </div>
            <div className="process-step">
              <div className="step-num">05</div>
              <h3>Test</h3>
              <p>Usability testing sessions, micro-interaction refinements, & accessibility validation.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Information Architecture */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">06. Structure</span>
            <h2>Information Architecture</h2>
            <div className="purple-bar" />
          </div>

          <div className="ia-card">
            <div className="ia-tree">
              <div className="ia-node node-root">Ru-Pay App</div>
              <div className="ia-branches">
                <div className="ia-branch">
                  <div className="ia-node node-parent">Onboarding & Auth</div>
                  <div className="ia-children">
                    <span className="ia-leaf">Welcome Screen</span>
                    <span className="ia-leaf">Phone Login / OTP</span>
                    <span className="ia-leaf">Set 4-Digit MPIN</span>
                  </div>
                </div>

                <div className="ia-branch">
                  <div className="ia-node node-parent">Home Dashboard</div>
                  <div className="ia-children">
                    <span className="ia-leaf">Balance Card (Mask/Unmask)</span>
                    <span className="ia-leaf">Quick Actions (Send, Load, QR)</span>
                    <span className="ia-leaf">Services & Utilities Grid</span>
                    <span className="ia-leaf">Recent Transactions List</span>
                  </div>
                </div>

                <div className="ia-branch">
                  <div className="ia-node node-parent">Scan & Pay</div>
                  <div className="ia-children">
                    <span className="ia-leaf">Camera Viewfinder & Torch</span>
                    <span className="ia-leaf">Gallery QR Upload</span>
                    <span className="ia-leaf">Amount & Note Input</span>
                    <span className="ia-leaf">MPIN Verification</span>
                    <span className="ia-leaf">Digital Receipt Screen</span>
                  </div>
                </div>

                <div className="ia-branch">
                  <div className="ia-node node-parent">Utility Payments</div>
                  <div className="ia-children">
                    <span className="ia-leaf">Mobile Recharge</span>
                    <span className="ia-leaf">Electricity & Water</span>
                    <span className="ia-leaf">Internet & TV Bills</span>
                    <span className="ia-leaf">Saved Favorites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Design System */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[6] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">07. Brand Identity</span>
            <h2>Design System</h2>
            <div className="purple-bar" />
          </div>

          <div className="ds-grid">
            {/* Color Palette */}
            <div className="ds-card">
              <h3>Color Palette</h3>
              <div className="swatches-grid">
                <div className="swatch-item">
                  <div className="swatch-color color-primary" />
                  <div className="swatch-info">
                    <span className="swatch-name">Primary Purple</span>
                    <span className="swatch-hex">#7E22CE</span>
                  </div>
                </div>
                <div className="swatch-item">
                  <div className="swatch-color color-purple-dark" />
                  <div className="swatch-info">
                    <span className="swatch-name">Deep Violet</span>
                    <span className="swatch-hex">#581C87</span>
                  </div>
                </div>
                <div className="swatch-item">
                  <div className="swatch-color color-purple-light" />
                  <div className="swatch-info">
                    <span className="swatch-name">Purple Tint</span>
                    <span className="swatch-hex">#F3E8FF</span>
                  </div>
                </div>
                <div className="swatch-item">
                  <div className="swatch-color color-dark-slate" />
                  <div className="swatch-info">
                    <span className="swatch-name">Dark Slate</span>
                    <span className="swatch-hex">#0F172A</span>
                  </div>
                </div>
                <div className="swatch-item">
                  <div className="swatch-color color-gray-bg" />
                  <div className="swatch-info">
                    <span className="swatch-name">Soft Background</span>
                    <span className="swatch-hex">#F8FAFC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="ds-card">
              <h3>Typography</h3>
              <div className="type-samples">
                <div className="type-row">
                  <span className="type-label">Heading 1</span>
                  <span className="type-spec">Inter Bold / 32px</span>
                </div>
                <div className="type-row">
                  <span className="type-label">Heading 2</span>
                  <span className="type-spec">Inter SemiBold / 22px</span>
                </div>
                <div className="type-row">
                  <span className="type-label">Body Regular</span>
                  <span className="type-spec">Inter Regular / 15px</span>
                </div>
                <div className="type-row">
                  <span className="type-label">Button & Caption</span>
                  <span className="type-spec">Inter Medium / 13px</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: High-Fidelity UI Showcase */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[7] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">08. Solution Showcase</span>
            <h2>High-Fidelity Mobile App UI</h2>
            <div className="purple-bar" />
          </div>

          <div className="hifi-showcase-box">
            <div className="hifi-image-wrapper">
              <Image
                src="/images/rupay.png"
                alt="Ru-Pay High Fidelity Mobile App Screens"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
          </div>
        </section>

        {/* Section 9: Key Outcomes */}
        <section
          className="rupay-section fade-in-section"
          ref={(el) => {
            sectionRefs.current[8] = el;
          }}
        >
          <div className="rupay-section-header">
            <span className="section-pill">09. Impact</span>
            <h2>Results & Key Takeaways</h2>
            <div className="purple-bar" />
          </div>

          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-num">⚡ 35%</div>
              <h4>Faster Payments</h4>
              <p>Reduced step count from 5 to 3 screens during QR payments, dramatically boosting checkout conversion.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-num">📊 40%</div>
              <h4>Utility Adoption</h4>
              <p>Categorized utility bill layout increased bill payment retention month-over-month.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-num">⭐ 4.8/5</div>
              <h4>Usability Score</h4>
              <p>Tested with 15 users across 3 iterations, receiving exceptional feedback for interface clarity and visual hierarchy.</p>
            </div>
          </div>
        </section>

        {/* Footer Banner */}
        <footer className="rupay-cs-footer">
          <h3>Thank You for Reading!</h3>
          <p>Interested in collaborating or discussing this case study?</p>
          <div className="footer-btns">
            <Link href="/" className="rupay-cta-btn">
              Back to Main Portfolio
            </Link>
            <a href="mailto:shovachaudhary5@gmail.com" className="rupay-cta-btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
