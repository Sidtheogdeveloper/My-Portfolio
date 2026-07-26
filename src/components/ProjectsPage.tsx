import { ArrowDownRight, ArrowLeft, Check, ExternalLink, Github, Layers3, Target, Trophy } from 'lucide-react';

const projects = [
  {
    id: 'roamiq', number: '00', title: 'RoamIQ', classification: 'WINNING MISSION · NXTGEN HACKATHON', accent: 'lime',
    overview: 'A travel intelligence concept designed to help people move from vague trip intent to a more informed, confident journey.',
    story: 'Built for the NXTGEN Hackathon at Texus ’26, RoamIQ explored how an assistant-like travel experience could make planning feel less fragmented. The work earned Track Winner recognition for its combination of product clarity, user-centric thinking, and technical ambition.',
    outcomes: ['Track Winner at NXTGEN Hackathon, Texus ’26', 'Defined a clearer path from travel discovery to decision', 'Framed a scalable product experience around useful trip intelligence'],
    modules: [
      ['Intent-aware discovery', 'Connects traveler needs with relevant options instead of a generic search flow.'],
      ['Journey workspace', 'Organizes the information needed to turn a promising idea into a practical itinerary.'],
      ['Decision signals', 'Surfaces useful context at the moment a traveler is weighing alternatives.']
    ],
    tech: ['Product Strategy', 'Web Development', 'UX Thinking', 'Rapid Prototyping'], github: 'https://github.com/Sidtheogdeveloper/RoamIQ'
  },
  {
    id: 'projectgenius', number: '01', title: 'ProjectGenius', classification: 'AI PRODUCT · LIVE', accent: 'violet',
    overview: 'An AI-powered workspace that converts raw ideas into validated project plans, focused roadmaps, and build-ready direction.',
    story: 'ProjectGenius was designed around the early, messy stage of product creation. It helps makers structure their thinking before they commit time and resources—combining technical recommendations, feasibility signals, and iterative AI guidance in one considered workspace.',
    outcomes: ['Transforms rough concepts into structured blueprints', 'Creates milestone-based implementation roadmaps', 'Offers validation and risk-aware guidance for early decisions'],
    modules: [['AI project generation', 'Turns a prompt into technology suggestions, scope, architecture and priority guidance.'], ['Validation & scoring', 'Brings feasibility and improvement signals into the earliest product conversations.'], ['Roadmap generator', 'Turns strategic direction into actionable milestones and development sequencing.']],
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'AI/ML'], github: 'https://github.com/Sidtheogdeveloper/project-genius', live: 'https://projectgeniuspro.netlify.app'
  },
  {
    id: 'stocktrader', number: '02', title: 'StockTrader Pro', classification: 'DATA INTELLIGENCE · LIVE', accent: 'gold',
    overview: 'A research-oriented investment platform that turns market patterns and historical data into clearer, responsible insights.',
    story: 'StockTrader Pro investigates how machine learning and accessible visual analysis can help users interrogate market history. Rather than treating a model as a crystal ball, the product focuses on surfacing patterns, tracking signals, and providing a more legible research process.',
    outcomes: ['Historical market data analysis', 'Pattern-oriented ML exploration', 'Investment research and portfolio context'],
    modules: [['Data analysis', 'Processes historical market information to reveal signals and trends.'], ['ML exploration', 'Tests data-driven approaches for discovering relationships in market movement.'], ['Insight workspace', 'Makes research findings easier to inspect and use in a personal workflow.']],
    tech: ['Machine Learning', 'React', 'Financial APIs', 'Data Analysis'], github: 'https://github.com/Sidtheogdeveloper/StockTradersPro', live: 'https://stocktraderspro.netlify.app'
  },
  {
    id: 'ezcabz', number: '03', title: 'EzCabz', classification: 'SYSTEM DESIGN', accent: 'cyan',
    overview: 'A Python-based ride-booking application with intelligent driver assignment and a complete data management backbone.',
    story: 'EzCabz was an exercise in thinking through a familiar service as a system. The project brings booking, driver matching, user data and ride data into one connected application, with an assignment approach that considers time and driver rating.',
    outcomes: ['Driver matching informed by availability and rating', 'API structure for users, drivers and rides', 'End-to-end ride booking flow'],
    modules: [['Smart assignment', 'Matches a rider with an appropriate driver through relevant service signals.'], ['Ride management', 'Captures booking and ride data in a cohesive application flow.'], ['Backend foundation', 'Uses an API-led architecture to keep core data operations organized.']],
    tech: ['Python', 'Django', 'Database Management', 'API Design'], github: 'https://github.com/Sidtheogdeveloper/EzCabz'
  },
  {
    id: 'budget-tracker', number: '04', title: 'Budget Tracker', classification: 'PERSONAL FINANCE TOOL', accent: 'gold',
    overview: 'A Python-based personal finance application for tracking budgets, organizing expenses, and making spending patterns easier to understand.',
    story: 'This project focused on the fundamentals of a reliable personal finance workflow: simple expense capture, practical budget planning, and efficient database-backed storage. It translates day-to-day transactions into a clearer view of financial habits and goals.',
    outcomes: ['Budget and expense tracking in one workflow', 'Database integration for reliable data storage and retrieval', 'Financial insights through categorization and reporting'],
    modules: [['Expense categorization', 'Keeps spending understandable through clear organization and custom categories.'], ['Budget planning', 'Supports monthly and yearly planning with up-to-date tracking.'], ['Goal setting', 'Makes it possible to define and monitor personal financial targets.']],
    tech: ['Python', 'MySQL', 'Tkinter', 'Data Analytics'], github: 'https://github.com/Sidtheogdeveloper/Budget-Tracker-App'
  },
  {
    id: 'vehicle-maintenance', number: '05', title: 'Vehicle Maintenance & Driver Assistance', classification: 'INTELLIGENT MOBILITY SYSTEM', accent: 'cyan',
    overview: 'An intelligent vehicle monitoring concept that combines maintenance intelligence, alerting, and driver-assistance ideas for safer operations.',
    story: 'The platform examines how connected vehicle signals and data-driven analysis can help surface maintenance needs early while supporting drivers with contextual safety alerts. It brings a future-facing mobility problem into a structured, technically grounded system design.',
    outcomes: ['Predictive maintenance concept for earlier intervention', 'Driver-assistance and safety alert modules', 'Fleet-oriented vehicle health and maintenance visibility'],
    modules: [['Maintenance intelligence', 'Uses data-oriented thinking to anticipate vehicle service needs before failure.'], ['Driver assistance', 'Frames safety support around timely alerts such as collision and traffic-sign awareness.'], ['Fleet management', 'Provides a model for organizing vehicles, health states and maintenance schedules.']],
    tech: ['Machine Learning', 'Python', 'Database Integration', 'Web Development', 'Data Analytics'], github: 'https://github.com/tri-tt-hik/Vehicle_maintenance_driver_assistance'
  }
];

export default function ProjectsPage() {
  return <main className="site-shell archive-shell">
    <div className="ambient ambient-one" /><div className="grid-overlay" />
    <header className="archive-nav"><a href="/" className="back-link"><ArrowLeft size={16} /> BACK TO PROFILE</a><span>PROJECT ARCHIVE <b>06</b></span></header>
    <section className="archive-hero section-wrap">
      <p className="eyebrow"><span className="status-pulse" /> SELECTED BUILDS / 2022—2026</p>
      <h1>From a sharp<br />question to a <em>useful</em> build.</h1>
      <p>A collection of products, prototypes, and systems shaped through a mix of experimentation, focused execution, and user-centered problem solving.</p>
      <div className="archive-rule"><span>EXPLORE THE CASE STUDIES</span><i /></div>
    </section>
    <section className="section-wrap case-list">
      {projects.map((project) => <article id={project.id} className={`case-study ${project.accent}`} key={project.id}>
        <div className="case-rail"><span>{project.number}</span><i /><span>{project.classification.includes('WINNING') ? <Trophy size={15} /> : <Layers3 size={15} />}</span></div>
        <div className="case-content">
          <header><p className="project-type">{project.classification}</p><h2>{project.title}</h2><p className="case-overview">{project.overview}</p></header>
          <div className="case-body"><div className="case-story"><span>THE BRIEF</span><p>{project.story}</p><div className="outcome-list">{project.outcomes.map(outcome => <div key={outcome}><Check size={14} /> {outcome}</div>)}</div></div>
            <div className="module-stack"><span>CORE MODULES</span>{project.modules.map(([title, description], i) => <div className="module" key={title}><b>0{i + 1}</b><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
          </div>
          <footer className="case-footer"><div className="case-tech">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="case-links"><a href={project.github} target="_blank" rel="noreferrer">VIEW CODE <Github size={15} /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE PRODUCT <ExternalLink size={15} /></a>}</div></footer>
        </div>
      </article>)}
    </section>
    <section className="archive-close"><div className="section-wrap"><p><Target size={17} /> MORE EXPERIENCES</p><h2>Good work starts<br />with genuine curiosity.</h2><a href="mailto:siddharthmadhu2005@gmail.com" className="primary-action">Start a conversation <ArrowDownRight size={18} /></a></div></section>
  </main>;
}
