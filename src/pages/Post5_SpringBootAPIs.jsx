import React from 'react';
import { Article } from './blogUtils';

export const meta = {
  id: 'post5',
  title: 'From Junior to Tech Lead: What Spring Boot Taught Me',
  subtitle: 'Early lessons from building REST APIs for Angular frontends, and from suddenly owning the project schedule too.',
  category: 'Backend Engineering',
  date: 'Mar 2016',
  readTime: '5 min read',
  accent: '#b18cff',
  tags: ['Java', 'Spring Boot', 'REST APIs', 'Angular', 'Early Career'],
};

export default function Post5({ onBack }) {
  return (
    <Article meta={meta} onBack={onBack}>
      <p>
        My years at Acroquest Myanmar were where I actually learned to be an engineer, not just
        write code. I started building RESTful APIs in Java and Spring Boot to support Angular
        frontends, and somewhere along the way picked up the project schedule as well as the
        codebase.
      </p>

      <h3>APIs are a promise, not just an endpoint</h3>
      <p>
        Designing REST APIs for a frontend team sitting right next to you is a fast way to learn
        that a contract matters more than clever implementation. Every shortcut I took on
        response shape or error handling came back to me within a day, usually from a teammate
        debugging the Angular side. That feedback loop taught me more about API design than any
        course could.
      </p>

      <h3>Becoming the person who tracks the Gantt chart</h3>
      <p>
        Somewhere in this role I went from writing tickets to owning them — running requirement
        analysis and UAT with customers, managing schedules with Gantt charts and Jenkins, and
        reporting status weekly. Quality didn't get to slide just because delivery pressure went
        up; unit and integration tests with JUnit stayed non-negotiable, because I was now the
        one who had to explain a regression to the customer.
      </p>

      <blockquote>
        Leading a project doesn't feel like a promotion at first — it feels like everyone's problems becoming your problems.
      </blockquote>

      <ul>
        <li>A clean API contract saves more time than any amount of clever backend code.</li>
        <li>Owning the schedule teaches you to say no earlier, not just work harder later.</li>
        <li>Testing discipline is what lets you move fast without dreading customer calls.</li>
      </ul>
    </Article>
  );
}
