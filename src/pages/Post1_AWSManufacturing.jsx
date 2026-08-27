import React from 'react';
import { Article } from './blogUtils';

export const meta = {
  id: 'post1',
  title: 'Building a Manufacturing Data Warehouse on AWS',
  subtitle: 'How we pulled fragmented FAB data into one Redshift + Snowflake platform engineers could actually trust.',
  category: 'Data Engineering',
  date: 'Mar 2022',
  readTime: '6 min read',
  accent: '#58a6ff',
  tags: ['AWS Redshift', 'Snowflake', 'Athena', 'Data Warehousing', 'Manufacturing'],
};

export default function Post1({ onBack }) {
  return (
    <Article meta={meta} onBack={onBack}>
      <p>
        Semiconductor manufacturing generates an enormous amount of telemetry — tool sensor
        readings, lot genealogy, yield results, equipment logs — scattered across dozens of
        systems that were never designed to talk to each other. At GlobalFoundries, one of the
        first big problems I worked on was turning that sprawl into a warehouse that FAB
        engineers could query without needing to know where the data physically lived.
      </p>

      <h3>Why Redshift and Snowflake together</h3>
      <p>
        We landed on a hybrid approach: <strong>Amazon Redshift</strong> for the curated,
        heavily-queried manufacturing models that power daily operational dashboards, and{' '}
        <strong>Snowflake</strong> for workloads that needed more elastic compute and easier
        cross-team sharing. <strong>S3</strong> sat underneath both as the raw and staged data
        lake, with <strong>Athena</strong> giving engineers a fast way to run ad-hoc queries
        directly against S3 without waiting on a formal pipeline to catch up.
      </p>

      <h3>The unglamorous part: governance</h3>
      <p>
        The hard part was never the SQL. It was agreeing on what a "lot" or a "tool event"
        actually meant across teams that had been modelling it differently for years. We spent
        real time on data model ownership, documentation, and code review discipline with senior
        engineering staff, because a warehouse that's fast but wrong is worse than no warehouse
        at all.
      </p>

      <blockquote>
        A shared model is a negotiation, not a schema diagram.
      </blockquote>

      <h3>What I'd tell someone starting this today</h3>
      <ul>
        <li>Model for the questions people actually ask first, not the theoretically complete schema.</li>
        <li>Athena is a great pressure valve — it stops every new question from becoming a pipeline ticket.</li>
        <li>Put ownership on the model, not just the pipeline that fills it.</li>
      </ul>
    </Article>
  );
}
