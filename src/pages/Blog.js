import React, { useState } from 'react';
import { BlogStyles, Chip, SectionLabel } from './blogUtils';

// ── Import posts ──────────────────────────────────────────────────────
// To add a new post:
//   1. Create PostN_YourTitle.jsx (copy Post2_EnterpriseIntegration as a template — it uses the shared <Article> wrapper)
//   2. Import it + its meta below
//   3. Add { meta: metaN, Component: PostN } to the POSTS array
//
import Post1, { meta as meta1 } from './Post1_AWSManufacturing';
import Post2, { meta as meta2 } from './Post2_EnterpriseIntegration';
import Post3, { meta as meta3 } from './Post3_ServerlessMigration';
import Post4, { meta as meta4 } from './Post4_CaptivePortal';
import Post5, { meta as meta5 } from './Post5_SpringBootAPIs';

// Newest first
const POSTS = [
  { meta: meta2, Component: Post2 }, // Aug 2026 — Tiaki Wai
  { meta: meta1, Component: Post1 }, // Mar 2022 — GlobalFoundries
  { meta: meta3, Component: Post3 }, // Nov 2020 — GlobalFoundries
  { meta: meta4, Component: Post4 }, // Jun 2018 — Expert Team
  { meta: meta5, Component: Post5 }, // Mar 2016 — Acroquest Myanmar
];

/* ─────────────────────────────────────────────
   POST CARD (listing)
───────────────────────────────────────────── */
function PostCard({ post, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(22,27,34,0.95)' : 'rgba(22,27,34,0.7)',
        border: `1px solid ${hovered ? 'rgba(88,166,255,0.3)' : 'rgba(48,54,61,0.7)'}`,
        borderRadius: 14,
        padding: '28px 28px 24px',
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        marginBottom: '1.4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: hovered ? `linear-gradient(90deg, ${post.accent}, #7ee8a2)` : 'transparent',
        transition: 'background 0.3s',
        borderRadius: '14px 14px 0 0',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: post.accent, letterSpacing: '0.06em' }}>
          {post.category}
        </span>
        <div style={{ display: 'flex', gap: 12 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#484f58' }}>{post.date}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#484f58' }}>{post.readTime}</span>
        </div>
      </div>

      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#e6edf3', margin: '0 0 8px', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
        {post.title}
      </h2>
      <p style={{ fontSize: '0.87rem', color: '#8b949e', margin: '0 0 16px', lineHeight: 1.7 }}>{post.subtitle}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div>{post.tags.slice(0, 5).map(t => <Chip key={t} color={post.accent}>{t}</Chip>)}</div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: hovered ? post.accent : '#484f58', transition: 'color 0.2s' }}>
          read →
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BLOG ROOT
───────────────────────────────────────────── */
export default function Blog() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = POSTS.find(p => p.meta.id === selectedId);

  return (
    <>
      <BlogStyles />

      <div style={{ minHeight: '100vh', background: '#0d1117', fontFamily: "'DM Sans', sans-serif", color: '#c9d1d9', paddingTop: 80 }}>
        <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(88,166,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(88,166,255,0.022) 1px,transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 15% 30%,rgba(56,139,253,0.055) 0%,transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 32px 100px', position: 'relative', zIndex: 1 }}>

          {selected ? (
            <selected.Component onBack={() => setSelectedId(null)} />
          ) : (
            <div style={{ animation: 'fadeUp 0.6s ease both' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: '#e6edf3', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
                  Blog
                </h1>
                <p style={{ fontSize: '0.95rem', color: '#8b949e', margin: 0, lineHeight: 1.75, maxWidth: 500 }}>
                  Engineering write-ups on cloud architecture, backend systems, data platforms, and lessons from production — one post per chapter of my career so far.
                </p>
              </div>

              <SectionLabel>{POSTS.length} post{POSTS.length !== 1 ? 's' : ''} published</SectionLabel>

              {POSTS.map(({ meta }) => (
                <PostCard key={meta.id} post={meta} onClick={() => setSelectedId(meta.id)} />
              ))}

              <div style={{ marginTop: '1rem', padding: '22px 28px', border: '1px dashed rgba(48,54,61,0.6)', borderRadius: 14, textAlign: 'center' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#484f58', margin: 0, letterSpacing: '0.1em' }}>
                  // more posts coming soon
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
