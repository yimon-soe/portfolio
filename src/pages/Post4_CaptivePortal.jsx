import React from 'react';
import { Article } from './blogUtils';

export const meta = {
  id: 'post4',
  title: 'Inside a Captive Portal: Backend to Frontend in a Security-First Shop',
  subtitle: 'What building a customer-facing captive portal taught me about working in a cyber security company.',
  category: 'Security & Systems',
  date: 'Jun 2018',
  readTime: '4 min read',
  accent: '#ff8fa8',
  tags: ['Captive Portal', 'Java', 'Networking', 'Remote Deployment'],
};

export default function Post4({ onBack }) {
  return (
    <Article meta={meta} onBack={onBack}>
      <p>
        My time at Expert Team was short but dense. It was my first role inside a company whose
        whole product line was security-first, and it changed how carefully I thought about
        every assumption baked into a system.
      </p>

      <h3>A portal that has to work before anything else does</h3>
      <p>
        A captive portal sits in an unusual spot: it's the very first thing a user's device
        touches on a network, so it has to be reliable, fast, and unambiguous about what a user
        can and can't do next. I built it end to end — backend logic and the customer-facing
        frontend — to meet a new customer's specific requirements, then deployed it onto a
        remote Linux server over VPN, which meant getting comfortable debugging a system I
        couldn't casually poke at from a local machine.
      </p>

      <h3>Working in a research-driven team</h3>
      <p>
        Alongside the portal work, the team was also progressing research-driven upgrades to
        existing systems in the company's product line. I stayed focused on my own delivery —
        the portal — but being adjacent to that research culture set a tone: nothing shipped
        without someone asking "what happens if this assumption is wrong."
      </p>

      <ul>
        <li>Remote-only deployment forces better logging habits early.</li>
        <li>A user-facing security surface has almost no room for ambiguous states.</li>
        <li>Short stints in unfamiliar domains are some of the fastest ways to grow.</li>
      </ul>
    </Article>
  );
}
