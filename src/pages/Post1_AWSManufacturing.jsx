import React from 'react';
import { PostHeader, BackButton, SectionLabel, Entry } from './blogUtils';

/* ─────────────────────────────────────────────
   POST METADATA
   Referenced by Blog.jsx for the listing card.
───────────────────────────────────────────── */
export const meta = {
  id: 1,
  slug: 'aws-manufacturing-data-platform',
  date: 'May 2026',
  readTime: '8 min read',
  category: 'AWS · Data Engineering',
  title: 'Building a Cloud-Native Manufacturing Data Platform',
  subtitle: '5 years of pipelines, migrations, and data warehousing inside a global semiconductor FAB.',
  tags: ['Redshift', 'Snowflake', 'S3', 'Athena', 'Lambda', 'Airflow', 'Java'],
  accent: '#58a6ff',
};

/* ─────────────────────────────────────────────
   ARCHITECTURE DIAGRAM
───────────────────────────────────────────── */
function ArchDiagram() {
  return (
    <div style={{
      margin: '2rem 0',
      background: 'rgba(22,27,34,0.9)',
      border: '1px solid rgba(48,54,61,0.8)',
      borderRadius: 14, padding: '20px 16px', overflowX: 'auto',
    }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem', color: '#7ee8a2',
        letterSpacing: '0.14em', textTransform: 'uppercase',
        margin: '0 0 18px 4px',
      }}>// architecture · aws manufacturing data platform</p>

      <svg viewBox="0 0 760 390" width="100%" style={{ minWidth: 540, display: 'block' }}>
        <defs>
          {[['arr','#58a6ff'],['arr-g','#7ee8a2'],['arr-o','#f0883e']].map(([id, col]) => (
            <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill={col} opacity="0.75" />
            </marker>
          ))}
        </defs>

        {/* lane dividers */}
        {[50,170,288].map(y => (
          <line key={y} x1="4" y1={y} x2="756" y2={y} stroke="#21262d" strokeWidth="1" strokeDasharray="4 4" />
        ))}
        {[['INGEST',26],['PROCESS',148],['STORE',266],['SERVE',350]].map(([l,y]) => (
          <text key={l} x="6" y={y} fontSize="8" fill="#30363d" fontFamily="JetBrains Mono,monospace" letterSpacing="1.5">{l}</text>
        ))}

        {/* INGEST */}
        <rect x="42"  y="56" width="118" height="50" rx="8" fill="#161b22" stroke="#30363d"    strokeWidth="1"/>
        <text x="101" y="76"  textAnchor="middle" fontSize="10"  fill="#7ee8a2" fontFamily="JetBrains Mono,monospace" fontWeight="600">On-Prem Server</text>
        <text x="101" y="89"  textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Linux · Java · Bash</text>
        <text x="101" y="101" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">24/7 ingestion</text>

        <rect x="192" y="56" width="118" height="50" rx="8" fill="#161b22" stroke="#f0883e44" strokeWidth="1"/>
        <text x="251" y="76"  textAnchor="middle" fontSize="10"  fill="#f0883e" fontFamily="JetBrains Mono,monospace" fontWeight="600">FAB Equipment</text>
        <text x="251" y="89"  textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">MEMS · FDC Sensors</text>
        <text x="251" y="101" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">fault event streams</text>

        <rect x="342" y="56" width="108" height="50" rx="8" fill="#161b22" stroke="#f0883e55" strokeWidth="1"/>
        <text x="396" y="76"  textAnchor="middle" fontSize="10"  fill="#f0883e" fontFamily="JetBrains Mono,monospace" fontWeight="600">Oracle DB</text>
        <text x="396" y="89"  textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Manufacturing DB</text>
        <text x="396" y="101" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">on-premise</text>

        <rect x="490" y="56" width="108" height="50" rx="8" fill="#161b22" stroke="#58a6ff44" strokeWidth="1"/>
        <text x="544" y="76"  textAnchor="middle" fontSize="10"  fill="#58a6ff" fontFamily="JetBrains Mono,monospace" fontWeight="600">Amazon S3</text>
        <text x="544" y="89"  textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Data Lake</text>
        <text x="544" y="101" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">parquet · csv · raw</text>

        <line x1="160" y1="81" x2="190" y2="81" stroke="#7ee8a2" strokeWidth="1.4" markerEnd="url(#arr-g)"/>
        <line x1="310" y1="81" x2="340" y2="81" stroke="#f0883e" strokeWidth="1.4" strokeDasharray="4 2" markerEnd="url(#arr-o)"/>
        <line x1="450" y1="81" x2="488" y2="81" stroke="#58a6ff" strokeWidth="1.4" markerEnd="url(#arr)"/>

        {/* PROCESS */}
        <rect x="42"  y="175" width="120" height="50" rx="8" fill="#0d2137" stroke="#58a6ff66" strokeWidth="1.5"/>
        <text x="102" y="195" textAnchor="middle" fontSize="10"  fill="#58a6ff" fontFamily="JetBrains Mono,monospace" fontWeight="600">AWS Lambda</text>
        <text x="102" y="208" textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Serverless ETL</text>
        <text x="102" y="220" textAnchor="middle" fontSize="7.5" fill="#7ee8a2" fontFamily="JetBrains Mono,monospace">↑ migrated from EMR</text>

        <rect x="195" y="175" width="115" height="50" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1"/>
        <text x="252" y="195" textAnchor="middle" fontSize="10"  fill="#e6edf3" fontFamily="JetBrains Mono,monospace" fontWeight="600">Apache Airflow</text>
        <text x="252" y="208" textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">FDC Orchestration</text>
        <text x="252" y="220" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">pipeline scheduling</text>

        <rect x="340" y="175" width="110" height="50" rx="8" fill="#161b22" stroke="#58a6ff44" strokeWidth="1"/>
        <text x="395" y="195" textAnchor="middle" fontSize="10"  fill="#58a6ff" fontFamily="JetBrains Mono,monospace" fontWeight="600">AWS Athena</text>
        <text x="395" y="208" textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Serverless Query</text>
        <text x="395" y="220" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">SQL on S3</text>

        <rect x="487" y="175" width="110" height="50" rx="8" fill="#161b22" stroke="#30363d" strokeWidth="1"/>
        <text x="542" y="195" textAnchor="middle" fontSize="10"  fill="#e6edf3" fontFamily="JetBrains Mono,monospace" fontWeight="600">Boomi iPaaS</text>
        <text x="542" y="208" textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Integration ELT</text>
        <text x="542" y="220" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">cross-system sync</text>

        <line x1="544" y1="106" x2="544" y2="173" stroke="#58a6ff" strokeWidth="1.4" markerEnd="url(#arr)"/>
        <line x1="544" y1="106" x2="395" y2="173" stroke="#58a6ff" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#arr)"/>
        <line x1="396" y1="106" x2="265" y2="173" stroke="#f0883e" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#arr-o)"/>
        <line x1="162" y1="200" x2="193" y2="200" stroke="#58a6ff" strokeWidth="1.4" markerEnd="url(#arr)"/>
        <line x1="310" y1="200" x2="338" y2="200" stroke="#58a6ff" strokeWidth="1.2" markerEnd="url(#arr)"/>

        {/* STORE */}
        <rect x="150" y="294" width="138" height="50" rx="8" fill="#0d2137" stroke="#58a6ff66" strokeWidth="1.5"/>
        <text x="219" y="314" textAnchor="middle" fontSize="10"  fill="#58a6ff" fontFamily="JetBrains Mono,monospace" fontWeight="600">Amazon Redshift</text>
        <text x="219" y="327" textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Manufacturing DW</text>
        <text x="219" y="339" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">columnar · petabyte-scale</text>

        <rect x="326" y="294" width="138" height="50" rx="8" fill="#0d1f2d" stroke="#58a6ff55" strokeWidth="1.5"/>
        <text x="395" y="314" textAnchor="middle" fontSize="10"  fill="#58a6ff" fontFamily="JetBrains Mono,monospace" fontWeight="600">Snowflake</text>
        <text x="395" y="327" textAnchor="middle" fontSize="8.5" fill="#8b949e" fontFamily="JetBrains Mono,monospace">Global Data Models</text>
        <text x="395" y="339" textAnchor="middle" fontSize="7.5" fill="#484f58" fontFamily="JetBrains Mono,monospace">governed · FAB-wide</text>

        <line x1="102" y1="225" x2="185" y2="292" stroke="#58a6ff" strokeWidth="1.4" markerEnd="url(#arr)"/>
        <line x1="252" y1="225" x2="240" y2="292" stroke="#58a6ff" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#arr)"/>
        <line x1="395" y1="225" x2="395" y2="292" stroke="#58a6ff" strokeWidth="1.4" markerEnd="url(#arr)"/>
        <line x1="542" y1="225" x2="430" y2="292" stroke="#58a6ff" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#arr)"/>

        {/* SERVE */}
        <rect x="196" y="360" width="224" height="22" rx="6" fill="#0f2a1a" stroke="#7ee8a260" strokeWidth="1"/>
        <text x="308" y="375" textAnchor="middle" fontSize="9" fill="#7ee8a2" fontFamily="JetBrains Mono,monospace">Manufacturing Engineers · BI · Dashboards</text>
        <line x1="219" y1="344" x2="270" y2="358" stroke="#7ee8a2" strokeWidth="1.2" markerEnd="url(#arr-g)"/>
        <line x1="395" y1="344" x2="345" y2="358" stroke="#7ee8a2" strokeWidth="1.2" markerEnd="url(#arr-g)"/>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   POST COMPONENT
───────────────────────────────────────────── */
export default function Post1({ onBack }) {
  return (
    <div style={{ animation: 'fadeUp 0.5s ease both' }}>
      <BackButton onBack={onBack} />
      <PostHeader post={meta} />

      <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#8b949e', marginBottom: '0.5rem' }}>
        Over five years embedded inside a global semiconductor FAB, I built and maintained the data
        infrastructure that manufacturing engineers depend on daily. This post covers the key systems
        I designed — from on-premise ingestion to cloud warehousing — and the decisions behind each one.
      </p>

      <SectionLabel>System Architecture</SectionLabel>
      <ArchDiagram />

      <SectionLabel>Engineering Highlights</SectionLabel>

      <Entry num={1} title="Manufacturing Data Warehouse" tags={['Redshift','Snowflake','S3','Athena']} accent="#58a6ff">
        Architected a cloud-native data warehouse spanning Amazon Redshift and Snowflake, with S3 as the
        central data lake and Athena for serverless SQL querying on raw files. The platform unified siloed
        datasets from multiple FAB departments into a single governed source of truth — enabling engineers
        to query billions of equipment records with sub-second response times.
      </Entry>

      <Entry num={2} title="Automated FDC Pipeline" tags={['Lambda','S3','Airflow','Python']} accent="#7ee8a2">
        Designed and implemented an end-to-end automated pipeline for Fault Detection and Classification (FDC).
        Equipment sensor data is ingested from FAB toolsets into S3, orchestrated through Apache Airflow, and
        processed via Lambda functions that apply classification logic before loading results into the warehouse.
        This cut manual fault-review cycles and gave engineers real-time visibility into yield anomalies.
      </Entry>

      <Entry num={3} title="Serverless Migration: EMR/EC2 → Lambda" tags={['Lambda','EMR','EC2','Cost Optimisation']} accent="#f0883e">
        Led the migration of MEMS workloads from long-running EMR clusters and EC2 instances to an event-driven
        serverless Lambda architecture. The result was a significant reduction in infrastructure cost — eliminating
        idle cluster time — alongside major performance improvements from parallelised, on-demand execution.
        This pattern became the team's standard for all new workloads.
      </Entry>

      <Entry num={4} title="Global FAB Data Model Governance" tags={['Snowflake','Data Modelling','Code Review']} accent="#a371f7">
        Contributed to the ownership and governance of global FAB manufacturing data models in Snowflake.
        Participated in code reviews with senior engineering staff, enforcing schema standards, naming conventions,
        and data quality rules across multiple manufacturing sites — ensuring downstream BI tools always reflected
        a consistent, trusted view of production data.
      </Entry>

      <Entry num={5} title="24/7 On-Premise Ingestion Service" tags={['Java','Bash','Oracle DB','Linux']} accent="#7ee8a2">
        Developed a Java-based data provider service backed by automated Bash scripts, running on an on-premise
        Linux server for continuous 24/7 ingestion into an Oracle manufacturing database. Designed for resilience —
        with retry logic, alerting, and scheduled jobs — so no data gap ever disrupted downstream analytics
        or production reporting.
      </Entry>

      {/* Closing callout */}
      <div style={{
        marginTop: '2.4rem', padding: '22px 26px',
        background: 'rgba(22,27,34,0.8)',
        border: '1px solid rgba(48,54,61,0.7)',
        borderRadius: 12, borderLeft: '3px solid #7ee8a2',
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.85, color: '#8b949e' }}>
          Across five years, the recurring theme was the same:{' '}
          <span style={{ color: '#e6edf3' }}>
            bridging the gap between physical manufacturing processes and cloud-scale data infrastructure.
          </span>{' '}
          Every pipeline, migration, and data model was ultimately in service of giving engineers faster,
          more reliable answers — so the factory floor could keep running at peak efficiency.
        </p>
      </div>
    </div>
  );
}
