import React from 'react';

/* ─────────────────────────────────────────────
   GLOBAL BLOG STYLES
   Fonts + keyframes + shared "post-body" typography
   used by every post's <Article>. Drop once at the
   top of Blog.jsx.
───────────────────────────────────────────── */
export function BlogStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .post-body h3 {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 1.15rem;
        color: #e6edf3;
        margin: 2.2rem 0 0.9rem;
        letter-spacing: -0.01em;
      }
      .post-body p {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.95rem;
        line-height: 1.85;
        color: #a3adba;
        margin: 0 0 1.1rem;
      }
      .post-body ul {
        margin: 0 0 1.3rem;
        padding-left: 20px;
        color: #a3adba;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.93rem;
        line-height: 1.8;
      }
      .post-body li { margin-bottom: 6px; }
      .post-body li::marker { color: #58a6ff; }
      .post-body strong { color: #e6edf3; font-weight: 600; }
      .post-body blockquote {
        margin: 1.6rem 0;
        padding: 4px 0 4px 18px;
        border-left: 2px solid rgba(88,166,255,0.4);
        font-style: italic;
        color: #8b949e;
      }
      .post-body code {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.82em;
        background: rgba(88,166,255,0.1);
        color: #7ee8a2;
        padding: 2px 6px;
        border-radius: 4px;
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────
   CHIP — small tag pill, colored per post accent
───────────────────────────────────────────── */
export function Chip({ children, color = '#58a6ff' }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.66rem',
      letterSpacing: '0.02em',
      color,
      background: `${color}1a`,
      border: `1px solid ${color}40`,
      borderRadius: 20,
      padding: '3px 10px',
      margin: '0 6px 6px 0',
    }}>{children}</span>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL — small eyebrow row
───────────────────────────────────────────── */
export function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.6rem',
    }}>
      <span style={{ width: 22, height: 2, background: 'linear-gradient(90deg,#58a6ff,#7ee8a2)', borderRadius: 2 }} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem',
        letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b949e',
      }}>{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACK BUTTON — standalone export, in case a post
   file imports it directly instead of using <Article>.
   (<Article> also renders this same button internally.)
───────────────────────────────────────────── */
export function BackButton({ onClick, accent = '#58a6ff', children = '← back to blog' }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem',
        color: '#8b949e', background: 'none', border: 'none', cursor: 'pointer',
        padding: 0, marginBottom: '2.2rem', display: 'inline-flex', alignItems: 'center', gap: 6,
      }}
      onMouseEnter={e => e.currentTarget.style.color = accent}
      onMouseLeave={e => e.currentTarget.style.color = '#8b949e'}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   ARTICLE — shared template for every post.
   Usage inside a PostN component:

     export const meta = {
       id: 'post2', title: '...', subtitle: '...',
       category: 'Cloud & Integration', date: 'Aug 2026',
       readTime: '5 min read', accent: '#7ee8a2',
       tags: ['FME','Boomi','Redshift'],
     };

     export default function Post2({ onBack }) {
       return (
         <Article meta={meta} onBack={onBack}>
           <h3>A heading</h3>
           <p>Body copy…</p>
         </Article>
       );
     }
───────────────────────────────────────────── */
export function Article({ meta, onBack, children }) {
  return (
    <div style={{ animation: 'fadeUp 0.5s ease both' }}>
      <BackButton onClick={onBack} accent={meta.accent} />

      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem',
          color: meta.accent, letterSpacing: '0.06em',
        }}>{meta.category}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#484f58' }}>{meta.date}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#484f58' }}>{meta.readTime}</span>
      </div>

      <h1 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', color: '#e6edf3',
        margin: '0 0 14px', lineHeight: 1.2, letterSpacing: '-0.01em',
      }}>{meta.title}</h1>

      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#8b949e',
        lineHeight: 1.7, margin: '0 0 2.6rem', maxWidth: 600,
      }}>{meta.subtitle}</p>

      <div className="post-body">{children}</div>

      <div style={{ marginTop: '2.8rem', paddingTop: '1.6rem', borderTop: '1px solid rgba(48,54,61,0.6)' }}>
        {meta.tags.map(t => <Chip key={t} color={meta.accent}>{t}</Chip>)}
      </div>
    </div>
  );
}
