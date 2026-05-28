import React from 'react';

/* ─────────────────────────────────────────────
   GLOBAL STYLES (import once in Blog.jsx)
───────────────────────────────────────────── */
export function BlogStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');
      @keyframes fadeUp {
        from { opacity:0; transform:translateY(18px); }
        to   { opacity:1; transform:translateY(0); }
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────
   CHIP — tech tag pill
───────────────────────────────────────────── */
export function Chip({ children, color = '#58a6ff' }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      background: `${color}14`,
      color,
      border: `1px solid ${color}30`,
      borderRadius: 20,
      fontSize: '0.7rem',
      fontFamily: "'JetBrains Mono', monospace",
      margin: '3px 3px 3px 0',
    }}>{children}</span>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL — small uppercase rule heading
───────────────────────────────────────────── */
export function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '2.4rem 0 1.2rem' }}>
      <span style={{
        width: 22, height: 2,
        background: 'linear-gradient(90deg,#58a6ff,#7ee8a2)',
        borderRadius: 2, display: 'inline-block',
      }} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#484f58',
        fontWeight: 500,
      }}>{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ENTRY — numbered timeline item inside a post
───────────────────────────────────────────── */
export function Entry({ num, title, tags, children, accent = '#58a6ff' }) {
  return (
    <div style={{ display: 'flex', gap: 18, marginBottom: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
        <div style={{
          width: 9, height: 9, borderRadius: '50%',
          background: accent, boxShadow: `0 0 7px ${accent}66`, flexShrink: 0,
        }} />
        <div style={{ width: 1, flex: 1, background: 'rgba(88,166,255,0.1)', marginTop: 4 }} />
      </div>
      <div style={{ flex: 1, paddingBottom: 6 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem', color: accent, marginBottom: 4, letterSpacing: '0.08em',
        }}>
          {String(num).padStart(2, '0')}.
        </div>
        <h3 style={{
          margin: '0 0 8px',
          fontFamily: "'Syne', sans-serif",
          fontSize: '1.05rem', fontWeight: 700, color: '#e6edf3', lineHeight: 1.3,
        }}>{title}</h3>
        <div style={{ marginBottom: 10 }}>
          {tags.map(t => <Chip key={t}>{t}</Chip>)}
        </div>
        <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.85, color: '#8b949e' }}>{children}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   POST HEADER — reusable hero for any post
───────────────────────────────────────────── */
export function PostHeader({ post }) {
  return (
    <div style={{ marginBottom: '2.4rem' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(126,232,162,0.08)', border: '1px solid rgba(126,232,162,0.2)',
        borderRadius: 20, padding: '4px 14px', marginBottom: 16,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem', color: '#7ee8a2', letterSpacing: '0.06em',
        }}>✦ {post.category}</span>
      </div>

      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
        fontWeight: 800, color: '#e6edf3',
        margin: '0 0 14px', lineHeight: 1.1, letterSpacing: '-0.02em',
      }}>{post.title}</h1>

      <p style={{
        fontSize: '1rem', color: '#8b949e',
        lineHeight: 1.75, maxWidth: 600, margin: '0 0 18px',
      }}>{post.subtitle}</p>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#484f58' }}>{post.date}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#484f58' }}>·</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#484f58' }}>{post.readTime}</span>
      </div>

      <div style={{ marginTop: 14 }}>
        {post.tags.map(t => <Chip key={t}>{t}</Chip>)}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACK BUTTON
───────────────────────────────────────────── */
export function BackButton({ onBack }) {
  return (
    <button
      onClick={onBack}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'transparent', border: '1px solid rgba(48,54,61,0.8)',
        color: '#8b949e', borderRadius: 8, padding: '6px 14px',
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem',
        cursor: 'pointer', marginBottom: '2.4rem',
        transition: 'color 0.2s, border-color 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = '#e6edf3';
        e.currentTarget.style.borderColor = 'rgba(88,166,255,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = '#8b949e';
        e.currentTarget.style.borderColor = 'rgba(48,54,61,0.8)';
      }}
    >
      ← back to blog
    </button>
  );
}
