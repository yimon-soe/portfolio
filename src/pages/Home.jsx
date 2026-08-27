import React from 'react';
import headshot from './headshot.jpg';

const skills = {
  'Software & Backend': ['Java', 'Spring Boot', 'Python', 'REST APIs', 'Microservices'],
  'Data & Engineering': ['Python', 'PySpark', 'SQL', 'ETL / ELT', 'Data Pipelines', 'Data Lakes', 'Apache Airflow'],
  Cloud: ['AWS', 'Cloud-Based Solutions', 'Distributed Processing', 'Cloud Data Platforms'],
  Integration: ['REST APIs', 'Enterprise Integration', 'Boomi', 'FME', 'API Gateway'],
  'DevOps & Delivery': ['Docker', 'Jenkins', 'Git', 'Bitbucket', 'CI/CD', 'Infrastructure as Code'],
  Database: ['PostgreSQL', 'MySQL', 'Oracle', 'Redshift', 'Snowflake', 'RDS'],
  'Test & QA': ['Unit Testing', 'Integration Testing', 'API Testing', 'JUnit', 'Data Quality'],
  Monitoring: ['CloudWatch', 'Grafana', 'Observability', 'Production Support'],
  'AI & Data': ['Analytics', 'ML Data Pipelines', 'AI Data Foundations'],
};

const highlights = [
  { icon: '☁', label: '10+ Years', sub: 'Backend & Cloud', accent: '#4f9dff' },
  { icon: '✓', label: 'AWS Certified', sub: 'Developer Associate', accent: '#f5a623' },
  { icon: '⬡', label: 'Enterprise Scale', sub: 'Data Pipelines', accent: '#34d399' },
  { icon: '◎', label: 'Tech Lead', sub: 'System Design', accent: '#4f9dff' },
];

const experience = [
  {
    title: 'Senior Developer',
    place: 'Tiaki Wai · Water Infrastructure & Services, New Zealand',
    period: 'Feb 2026 – Present',
    current: true,
    bullets: [
      'Translate business requirements into scalable technical solutions, delivering prioritised implementation plans aligned with enterprise architecture.',
      'Design and implement enterprise integrated data solutions across multiple systems using FME, Boomi and Amazon Redshift.',
      'Ensure data quality, integrity and compliance through documentation (metadata, data dictionaries) and adherence to privacy standards.',
      'Integrate enterprise systems including CRM and Microsoft Mail (Outlook/Exchange) for seamless data flow.',
      'Provide technical leadership through best-practice guidance, mentoring and continuous improvement of tools and technologies.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    place: 'GlobalFoundries · Semiconductor Manufacturing, Singapore',
    period: 'Aug 2018 – May 2024',
    bullets: [
      'Built a manufacturing data warehouse using Amazon Redshift, Snowflake, S3 and Athena.',
      'Designed and implemented an automated data pipeline for Fault Detection and Classification (FDC) leveraging AWS cloud services.',
      'Migrated MEMS workloads from EMR/EC2 to a serverless AWS Lambda architecture, cutting costs and lifting performance significantly.',
      'Contributed to ownership and governance of global FAB manufacturing data models; took part in code reviews with senior engineering staff.',
      'Built a Java-based data provider service with automated Bash scripts on an on-prem Linux server for continuous 24/7 ingestion into the Oracle manufacturing database.',
    ],
  },
  {
    title: 'Software Developer',
    place: 'Expert Team · Cyber Security Solutions, Singapore',
    period: 'Mar 2018 – Jul 2018',
    bullets: [
      'Upgraded an anti-drone system based on technical research findings using Java, Grails and MySQL/PHP.',
      'Built a captive portal solution end-to-end — backend and frontend — for a new customer requirement, deployed to a remote Linux server via VPN.',
    ],
  },
  {
    title: 'Senior Software Developer / Technical Lead',
    place: 'Acroquest Myanmar Technology · Mission-Critical Systems, Myanmar',
    period: 'Oct 2014 – Jun 2017',
    bullets: [
      'Led requirement analysis and UAT with customers, and managed the ongoing maintenance process.',
      'Owned company homepage management, server deployment and customer website operations using AWS, Linux, WordPress, HTML5, CSS3 and Bootstrap.',
      'Managed project schedules and quality with Gantt charts, Jenkins and Trac; reported status weekly and estimated resourcing for delivery.',
      'Built scalable backend services in Java and Spring Boot, with RESTful APIs supporting Angular frontends.',
    ],
  },
];

function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      background: 'rgba(56, 139, 253, 0.1)',
      color: '#4f9dff',
      border: '1px solid rgba(56, 139, 253, 0.25)',
      borderRadius: '20px',
      fontSize: '0.72rem',
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: '0.02em',
      margin: '3px',
    }}>{children}</span>
  );
}

function Section({ title, children, delay = 0 }) {
  return (
    <div style={{
      marginBottom: '2.5rem',
      animation: `fadeUp 0.6s ease both`,
      animationDelay: `${delay}ms`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '1.2rem',
      }}>
        <span style={{
          width: '28px',
          height: '2px',
          background: 'linear-gradient(90deg, #4f9dff, #34d399)',
          display: 'inline-block',
          borderRadius: '2px',
        }} />
        <h3 style={{
          margin: 0,
          fontSize: '0.68rem',
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#8b949e',
          fontWeight: 500,
        }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function TimelineItem({ title, place, period }) {
  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      marginBottom: '1.1rem',
      alignItems: 'flex-start',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5px',
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4f9dff, #34d399)',
          flexShrink: 0,
        }} />
        <div style={{ width: '1px', flex: 1, background: 'rgba(88,166,255,0.15)', minHeight: '24px', marginTop: '4px' }} />
      </div>
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#e6edf3', lineHeight: 1.4 }}>{title}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#8b949e', marginTop: '2px' }}>{place}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#4f9dff', marginTop: '2px', opacity: 0.85 }}>{period}</div>
      </div>
    </div>
  );
}

function ExperienceItem({ title, place, period, current, bullets, isLast }) {
  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: isLast ? 0 : '2.2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5px' }}>
        <div style={{
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          background: '#0a0d12',
          border: `2px solid ${current ? '#34d399' : '#4f9dff'}`,
          boxShadow: current ? '0 0 0 4px rgba(52,211,153,0.12)' : 'none',
          flexShrink: 0,
        }} />
        {!isLast && (
          <div style={{ width: '1px', flex: 1, background: 'rgba(88,166,255,0.15)', minHeight: '20px', marginTop: '4px' }} />
        )}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.02rem', color: '#e6edf3' }}>{title}</span>
          {current && (
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#34d399', background: 'rgba(52,211,153,0.08)',
              border: '1px solid rgba(52,211,153,0.22)', padding: '2px 8px', borderRadius: '10px',
            }}>Current</span>
          )}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#8b949e', marginBottom: '12px' }}>
          {place} <span style={{ color: '#4f9dff', opacity: 0.85 }}>· {period}</span>
        </div>
        <ul style={{ margin: 0, paddingLeft: '18px', color: '#8b949e', fontSize: '0.87rem', lineHeight: 1.75 }}>
          {bullets.map((b, i) => <li key={i} style={{ marginBottom: '5px' }}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .home-root {
          min-height: 100vh;
          background: #0a0d12;
          font-family: 'Inter', sans-serif;
          color: #c9d1d9;
          padding: 0;
          margin: 0;
          position: relative;
          overflow: hidden;
        }

        .home-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 75% 55% at 8% 12%, rgba(79,157,255,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 55% 50% at 92% 30%, rgba(52,211,153,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 60% 45% at 50% 100%, rgba(245,166,35,0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .content-wrap {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
          padding: 60px 32px 80px;
        }
        
        .hero {
          margin-bottom: 3.5rem;
          animation: fadeUp 0.7s ease both;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.6fr 0.9fr;
          gap: 40px;
          align-items: start;
          margin-bottom: 3.5rem;
          animation: fadeUp 0.7s ease both;
        }
        @media (max-width: 700px) {
          .hero-grid { grid-template-columns: 1fr; }
          .headshot-frame { margin: 0 auto; }
        }

        /* Fixed-size, non-shrinking frame — guards against any global
           "img { max-width:100%; height:auto }" reset elsewhere in the
           app squashing the circle into an oval. */
        .headshot-frame {
          position: relative;
          width: 190px;
          height: 190px;
          min-width: 190px;
          min-height: 190px;
          flex-shrink: 0;
          justify-self: center;
          margin-top: 6px;
        }
        .headshot-frame::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: conic-gradient(from 180deg, #4f9dff, #34d399, #f5a623, #4f9dff);
          opacity: 0.55;
          filter: blur(1px);
          animation: spin 10s linear infinite;
        }
        .headshot-frame img {
          position: relative;
          display: block;
          width: 190px !important;
          height: 190px !important;
          max-width: none !important;
          border-radius: 50% !important;
          object-fit: cover !important;
          object-position: center;
          border: 4px solid #0a0d12;
        }

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.2);
          border-radius: 20px;
          color: #34d399;
          font-size: 0.72rem;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.06em;
          margin-bottom: 28px;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 3rem;
          animation: fadeUp 0.6s ease both;
          animation-delay: 200ms;
        }

        @media (max-width: 600px) {
          .highlight-grid { grid-template-columns: repeat(2, 1fr); }
          .content-wrap { padding: 40px 20px 60px; }
        }

        .highlight-card {
          background: rgba(22, 27, 34, 0.8);
          border: 1px solid rgba(48,54,61,0.8);
          border-radius: 12px;
          padding: 18px 12px;
          text-align: center;
          transition: border-color 0.2s, transform 0.2s;
        }
        .highlight-card:hover {
          border-color: rgba(88,166,255,0.35);
          transform: translateY(-2px);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr; }
        }

        .skill-row {
          padding: 10px 0;
          border-bottom: 1px solid rgba(48,54,61,0.5);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .skill-row:nth-child(odd)  { padding-right: 24px; }
        .skill-row:nth-child(even) { padding-left: 24px; border-left: 1px solid rgba(48,54,61,0.5); }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(88,166,255,0.2), transparent);
          margin: 2.5rem 0;
        }

        .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
        .btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.74rem;
          letter-spacing: 0.04em;
          padding: 11px 18px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-primary { background: #e6edf3; color: #0a0d12; font-weight: 700; }
        .btn-primary:hover { background: #4f9dff; color: #0a0d12; transform: translateY(-1px); }
        .btn-ghost { border: 1px solid rgba(48,54,61,0.8); color: #e6edf3; }
        .btn-ghost:hover { border-color: #4f9dff; color: #4f9dff; }
      `}</style>

      <div className="home-root">
        <div className="grid-bg" />

        <div className="content-wrap">
          {/* Hero */}
          <div className="hero">
              {/* NAME — Outfit 800, tall, open, airy */}
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(3rem, 7vw, 4.6rem)',
                fontWeight: 800,
                margin: '0 0 14px',
                color: '#e6edf3',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
              }}>
                Yimon Soe
              </h1>

              {/* ROLE — JetBrains Mono */}
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#4f9dff',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                margin: '0 0 22px',
                lineHeight: 1.7,
              }}>
                Sr. Software Engineer · Cloud & Backend · Data Engineering
              </p>

              {/* BIO — Inter */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 400,
                color: '#8b949e',
                maxWidth: '600px',
                lineHeight: 1.75,
                margin: 0,
              }}>
                Senior Software Engineer with 10+ years of experience delivering scalable software, cloud, data, and backend solutions. Experienced across the full delivery lifecycle, from requirements and technical design through development, deployment, and production support. Strong in enterprise integration, cloud platforms, data processing, APIs, and backend systems, with a practical approach to solving complex technical and business problems.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href="mailto:yimonsoe.yms@gmail.com">Get in touch →</a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/yimon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="btn btn-ghost" href="https://github.com/yimon-soe" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

          </div>

          {/* Stat cards */}
          <div className="highlight-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <div style={{ fontSize: '1.3rem', marginBottom: '8px', color: h.accent }}>{h.icon}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#e6edf3', marginBottom: '4px' }}>{h.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#8b949e', letterSpacing: '0.04em' }}>{h.sub}</div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Experience */}
          <Section title="Professional Experience" delay={250}>
            {experience.map((job, i) => (
              <ExperienceItem key={i} {...job} isLast={i === experience.length - 1} />
            ))}
          </Section>

          <div className="divider" />

          {/* Skills */}
          <Section title="Professional Skills" delay={300}>
            <div className="skills-grid">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="skill-row">
                  <span style={{
                    fontSize: '0.68rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#34d399',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>{cat}</span>
                  <div>{items.map(t => <Tag key={t}>{t}</Tag>)}</div>
                </div>
              ))}
            </div>
          </Section>

          <div className="divider" />

          {/* Education */}
          <Section title="Academic Qualifications" delay={400}>
            <TimelineItem
              title="Graduate Diploma in System Analysis"
              place="National University of Singapore"
              period="2017 – 2018"
            />
            <TimelineItem
              title="Bachelor of Computer Science (Honours)"
              place="University of Computer Studies, Yangon"
              period="2011 – 2014"
            />
          </Section>

          {/* Certifications */}
          <Section title="Professional Certifications" delay={500}>
            <TimelineItem
              title="AWS Certified Developer Associate"
              place="Amazon Web Services"
              period="Nov 2025"
            />
            <TimelineItem
              title="AWS Certified Cloud Practitioner"
              place="Amazon Web Services"
              period="Nov 2020"
            />
          </Section>

          {/* Training */}
          <Section title="Other Training" delay={600}>
            <TimelineItem
              title="Practical Java Training Course"
              place="Acroquest Technology"
              period="Oct 2014"
            />
            <TimelineItem
              title="CodeIgniter Rocks"
              place="Myanmar Computer Professionals Association"
              period="2013"
            />
            <TimelineItem
              title="Web Essentials"
              place="Infodia Computer Training Centre, Yangon"
              period="2012"
            />
          </Section>
        </div>
      </div>
    </>
  );
}

export default Home;
