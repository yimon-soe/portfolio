import React from 'react';

const skills = {
  Languages: ['Java', 'Python', 'PHP', 'Bash'],
  Frameworks: ['Spring Boot', 'Grails', 'Angular'],
  'AWS Cloud': ['Lambda', 'S3', 'Athena', 'EC2', 'EMR', 'RDS', 'ECS', 'ECR', 'IAM', 'API Gateway', 'SNS/SQS'],
  Warehouse: ['Redshift', 'Snowflake'],
  iPaaS: ['Boomi', 'FME'],
  'CI/CD': ['Docker', 'Jenkins', 'Git', 'Bitbucket', 'Apache Airflow'],
  Database: ['PostgreSQL', 'MySQL', 'Oracle'],
  Web: ['HTML5', 'CSS3', 'Bootstrap', 'WordPress'],
  'Test & QA': ['Unit Testing', 'Integration Testing', 'JUnit', 'API Testing'],
  Monitoring: ['CloudWatch', 'Grafana'],
  Other: ['Microservices', 'REST APIs', 'Captive Portals', 'Security Best Practices'],
};

const highlights = [
  { icon: '☁', label: '8+ Years', sub: 'Backend & Cloud' },
  { icon: '⚡', label: 'AWS Certified', sub: 'Developer Associate' },
  { icon: '⬡', label: 'Enterprise Scale', sub: 'Data Pipelines' },
  { icon: '◎', label: 'Tech Lead', sub: 'System Design' },
];

function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      background: 'rgba(56, 139, 253, 0.1)',
      color: '#58a6ff',
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
          background: 'linear-gradient(90deg, #58a6ff, #7ee8a2)',
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
          background: 'linear-gradient(135deg, #58a6ff, #7ee8a2)',
          flexShrink: 0,
        }} />
        <div style={{ width: '1px', flex: 1, background: 'rgba(88,166,255,0.15)', minHeight: '24px', marginTop: '4px' }} />
      </div>
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#e6edf3', lineHeight: 1.4 }}>{title}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#8b949e', marginTop: '2px' }}>{place}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#58a6ff', marginTop: '2px', opacity: 0.85 }}>{period}</div>
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

        .home-root {
          min-height: 100vh;
          background: #0d1117;
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
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(56,139,253,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(126,232,162,0.05) 0%, transparent 55%);
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

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          background: rgba(126,232,162,0.08);
          border: 1px solid rgba(126,232,162,0.2);
          border-radius: 20px;
          color: #7ee8a2;
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
      `}</style>

      <div className="home-root">
        <div className="grid-bg" />

        <div className="content-wrap">
          {/* Hero */}
          <div className="hero">
            {/* NAME — Outfit 800, tall, open, airy */}
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(3.6rem, 8vw, 5.5rem)',
              fontWeight: 800,
              margin: '0 0 14px',
              color: '#e6edf3',
              letterSpacing: '0.06em',
              lineHeight: 1.15,
            }}>
              Yimon Soe
            </h1>

            {/* ROLE — JetBrains Mono */}
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#58a6ff',
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
              Senior backend and cloud data engineer with 8+ years building scalable systems with
              Java & Spring Boot, architecting AWS infrastructure, and delivering enterprise data
              pipelines into Redshift and Snowflake. Experienced in technical leadership and cross-system integration.
            </p>
          </div>

          {/* Stat cards */}
          <div className="highlight-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <div style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{h.icon}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#e6edf3', marginBottom: '4px' }}>{h.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#8b949e', letterSpacing: '0.04em' }}>{h.sub}</div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Skills */}
          <Section title="Professional Skills" delay={300}>
            <div className="skills-grid">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="skill-row">
                  <span style={{
                    fontSize: '0.68rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#7ee8a2',
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