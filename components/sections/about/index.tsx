import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <div
      ref={aboutRef}
      className="w-full bg-[#2D2D38] p-5 sm:px-4 md:p-8 rounded-md"
    >
      <p className="text-muted text-sm leading-relaxed sm:text-base space-y-3">
        <span className="block">
          I&apos;m a versatile Full‑Stack & AI Engineer focused on building
          production‑grade web, mobile and intelligent agent systems. My core
          stack includes TypeScript, Python, Node.js, Next.js, React, Fast API,
          React Native and Flutter. deployed across AWS & Google Cloud with
          containerization (Docker) and modern CI/CD.
        </span>
        <span className="block">
          Recently, I&apos;ve specialized in autonomous & semi‑autonomous AI
          solutions: designing multi‑tool AI agents, implementing Model Context
          Protocol (MCP) servers for secure capability exposure, composing
          LangChain & LangGraph workflows, and building Retrieval‑Augmented
          Generation (RAG) and Deep Research Agents that orchestrate multi‑step
          reasoning over heterogeneous data sources.
        </span>
        <span className="block">
          I integrate vector databases, streaming interfaces, function calling,
          structured output parsing, evaluator loops, and guardrails to create
          reliable, extensible AI systems. From rapid prototypes to scalable
          platforms, I focus on performance, observability, and maintainability.
        </span>
        <span className="block">
          Let&apos;s build something intelligent together.
        </span>
      </p>
    </div>
  );
};

export default About;
