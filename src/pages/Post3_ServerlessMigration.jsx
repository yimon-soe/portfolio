import React from 'react';
import { Article } from './blogUtils';

export const meta = {
  id: 'post3',
  title: 'Retiring EMR: Moving MEMS Workloads to Serverless Lambda',
  subtitle: 'Why we walked away from always-on EMR/EC2 clusters, and what actually changed once the workload went serverless.',
  category: 'Cloud Architecture',
  date: 'Nov 2020',
  readTime: '5 min read',
  accent: '#f2a65a',
  tags: ['AWS Lambda', 'Serverless', 'Cost Optimization', 'EMR Migration'],
};

export default function Post3({ onBack }) {
  return (
    <Article meta={meta} onBack={onBack}>
      <p>
        Our MEMS data processing workloads originally ran on EMR clusters sitting on EC2 —
        reliable, but always on, and paying for idle capacity most of the day. The workload
        itself was bursty: heavy during certain production windows, quiet otherwise. That
        mismatch made it a strong candidate for a serverless rethink.
      </p>

      <h3>Why Lambda made sense here</h3>
      <p>
        Moving to <strong>AWS Lambda</strong> meant we stopped paying for idle cluster time
        entirely and let compute scale with the actual arrival of data. The migration wasn't a
        lift-and-shift — job logic had to be decomposed into smaller, stateless units that fit
        Lambda's execution model, and we had to get comfortable with a different way of thinking
        about orchestration and retries.
      </p>

      <h3>The trade-offs nobody skips</h3>
      <p>
        Cold starts, execution time limits, and debugging a workload spread across many short
        invocations instead of one long-running cluster job were all real costs. We addressed
        most of it with careful batching and monitoring, but it's worth saying plainly: serverless
        isn't free simplicity, it's a different set of problems that happened to suit this workload
        better.
      </p>

      <blockquote>
        The win wasn't "serverless is better" — it was matching the compute model to how the data actually arrives.
      </blockquote>

      <ul>
        <li>Significant cost reduction from eliminating idle cluster time.</li>
        <li>Meaningful performance gains once jobs were properly decomposed.</li>
        <li>The real work was redesigning the jobs, not swapping infrastructure.</li>
      </ul>
    </Article>
  );
}
