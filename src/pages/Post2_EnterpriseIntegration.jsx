import React from 'react';
import { Article } from './blogUtils';

export const meta = {
  id: 'post2',
  title: 'Wiring Up Enterprise Integrations with FME and Boomi',
  subtitle: 'Notes from connecting CRM, mail, and water-infrastructure systems without breaking data quality along the way.',
  category: 'Cloud & Integration',
  date: 'Aug 2026',
  readTime: '5 min read',
  accent: '#7ee8a2',
  tags: ['FME', 'Boomi', 'Redshift', 'Data Quality', 'Enterprise Integration'],
};

export default function Post2({ onBack }) {
  return (
    <Article meta={meta} onBack={onBack}>
      <p>
        Since joining Tiaki Wai, most of my work has sat at the seams between systems — CRM,
        Microsoft Mail, and the operational platforms that keep water infrastructure running.
        None of these systems were built to share data with each other, which is exactly where
        integration tooling like <strong>FME</strong> and <strong>Boomi</strong> earns its keep.
      </p>

      <h3>Start from the requirement, not the connector</h3>
      <p>
        It's tempting to jump straight to "which connector do we use," but the more useful
        starting point is translating a business requirement into a prioritised implementation
        plan that actually fits the existing enterprise architecture. Half the integration work
        is technical; the other half is making sure the plan survives contact with how the
        business actually operates day to day.
      </p>

      <h3>Data quality is a documentation problem</h3>
      <p>
        Every integration eventually raises the same question: can we trust this field? We lean
        heavily on metadata and data dictionaries to keep that answer consistent, along with
        privacy standards that have to be respected by design, not bolted on afterwards. It's
        unglamorous work, but it's the difference between an integration that's trusted and one
        that quietly gets double-checked by hand.
      </p>

      <ul>
        <li>Document the "why" behind a mapping, not just the mapping itself.</li>
        <li>Treat CRM and mail integrations as data quality surfaces, not just plumbing.</li>
        <li>Mentoring pays off fastest on the parts of the pipeline that are hardest to explain later.</li>
      </ul>
    </Article>
  );
}
