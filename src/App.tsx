import { useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Award, ChevronRight,
  Code2, ExternalLink, Github, GraduationCap, Layers3, Linkedin,
  Gamepad2, MapPin, Menu, Sparkles, Target, Trophy, Users, X
} from 'lucide-react';

const projects = [
  {
    number: '01', title: 'ProjectGenius', type: 'AI PRODUCT DESIGN',
    description: 'An AI-powered workspace that turns rough ideas into validated plans, practical roadmaps, and build-ready technical direction.',
    tags: ['React', 'TypeScript', 'Supabase', 'AI/ML'],
    github: 'https://github.com/Sidtheogdeveloper/project-genius',
    live: 'https://projectgeniuspro.netlify.app', color: 'violet'
  },
  {
    number: '02', title: 'StockTrader Pro', type: 'DATA + INTELLIGENCE',
    description: 'A research-oriented investment companion that surfaces market patterns and turns historical data into clear, responsible insights.',
    tags: ['Machine Learning', 'Financial APIs', 'Analytics'],
    github: 'https://github.com/Sidtheogdeveloper/StockTradersPro',
    live: 'https://stocktraderspro.netlify.app', color: 'gold'
  },
  {
    number: '03', title: 'RoamIQ', type: 'HACKATHON WINNER',
    description: 'A winning travel intelligence concept developed for NXTGEN Hackathon, blending thoughtful product experience with technical execution.',
    tags: ['Product Strategy', 'Web Development', 'Innovation'],
    github: 'https://github.com/Sidtheogdeveloper/RoamIQ', color: 'cyan'
  }
];

const skills = [
  { label: 'Python & Data', value: 88 },
  { label: 'Web Engineering', value: 84 },
  { label: 'AI / ML', value: 79 },
  { label: 'Product Thinking', value: 86 },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to top">
          <span className="brand-mark">S</span>
          <span>SIDDHARTH<span className="brand-dot">.</span></span>
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <button onClick={() => scrollTo('about')}>Profile</button>
          <button onClick={() => scrollTo('work')}>Selected work</button>
          <button onClick={() => scrollTo('journey')}>Journey</button>
          <button onClick={() => scrollTo('activities')}>Activities</button>
          <button onClick={() => scrollTo('credentials')}>Credentials</button>
          <button onClick={() => scrollTo('contact')} className="nav-contact">Let&apos;s talk <ArrowUpRight size={14} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-pulse" /> AVAILABLE FOR IMPACTFUL BUILDS · 2026</div>
          <p className="hero-kicker">TECHNOLOGIST / BUILDER / PROBLEM SOLVER</p>
          <h1>Building the next <em>useful</em> thing.</h1>
          <p className="hero-summary">I&apos;m Siddharth Madhu Rao, a computer science student who enjoys shaping ambiguous ideas into intelligent, polished digital products.</p>
          <div className="hero-actions">
            <button onClick={() => scrollTo('work')} className="primary-action">Explore selected work <ArrowDownRight size={18} /></button>
            <a href="https://github.com/Sidtheogdeveloper" target="_blank" rel="noreferrer" className="text-action">GitHub <Github size={17} /></a>
          </div>
        </div>

        <div className="hero-console" aria-label="Career snapshot">
          <div className="console-head"><span>PLAYER PROFILE</span><span className="live-label">● ACTIVE</span></div>
          <div className="profile-block">
            <div className="portrait-frame"><img src="/assets/profile-photo.png" alt="Siddharth Madhu Rao" /></div>
            <div><p className="mini-label">CURRENT ROLE</p><h2>CS Engineer<br />in progress</h2><p className="location"><MapPin size={14} /> Chennai, India</p></div>
          </div>
          <div className="stat-row">
            <div><strong>05+</strong><span>SHIPPED<br />PROJECTS</span></div>
            <div><strong>02</strong><span>LIVE<br />PRODUCTS</span></div>
            <div><strong>01</strong><span>HACKATHON<br />WIN</span></div>
          </div>
          <div className="xp-panel">
            <div><span>LEVEL 07</span><span>TECH EXPLORER</span></div>
            <div className="xp-track"><span /></div>
            <small>Next level: expanding real-world impact</small>
          </div>
          <div className="corner-orbit orbit-a" /><div className="corner-orbit orbit-b" />
        </div>

        <div className="scroll-cue"><span>SCROLL TO DISCOVER</span><i /></div>
      </section>

      <section id="about" className="section-wrap profile-section">
        <div className="section-heading"><span>01 / PROFILE</span><h2>A builder who<br />likes the hard parts.</h2></div>
        <div className="profile-grid">
          <div className="statement-card">
            <Target size={22} />
            <p>I work at the intersection of <b>technology, curiosity, and clear user value</b>—learning fast, collaborating deeply, and making complex systems easier to use.</p>
            <a href="mailto:siddharthmadhu2005@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="skill-card">
            <div className="card-title"><span>CORE LOADOUT</span><Code2 size={17} /></div>
            {skills.map((skill) => <div className="skill-meter" key={skill.label}><div><span>{skill.label}</span><b>{skill.value}%</b></div><i><em style={{ width: `${skill.value}%` }} /></i></div>)}
          </div>
          <div className="education-card">
            <GraduationCap size={23} />
            <p className="mini-label">EDUCATION</p>
            <h3>SSN College<br />of Engineering</h3>
            <p>M.Tech Integrated Computer Science Engineering</p>
            <div className="grade-chip">CGPA <b>8.139</b></div>
          </div>
        </div>
      </section>

      <section id="work" className="section-wrap work-section">
        <div className="section-heading row-heading"><div><span>02 / FEATURED QUESTS</span><h2>Selected work,<br /><em>real outcomes.</em></h2></div><p>Each project is a different arena: a chance to move from a sharp question to a useful, considered answer.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <article className={`project-card ${project.color}`} key={project.title}>
            <div className="project-index">{project.number}</div>
            <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="project-actions"><button onClick={() => setSelectedProject(index)} aria-label={`View ${project.title} details`}><ChevronRight size={25} /></button><div><a href={project.github} target="_blank" rel="noreferrer">CODE <Github size={13} /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE <ExternalLink size={13} /></a>}</div></div>
          </article>)}
        </div>
        <a className="archive-link" href="/projects">View full project archive <ArrowRightIcon /></a>
      </section>

      <section id="journey" className="section-wrap journey-section">
        <div className="section-heading"><span>03 / JOURNEY LOG</span><h2>Experience earned<br />in the field.</h2></div>
        <div className="journey-grid">
          <div className="timeline">
            <article><span>2026</span><div><p className="timeline-type">DATA &amp; ML INTERN</p><h3>Tata Motors Digital.AI Labs</h3><p>Explored large-scale business data, built analysis pipelines, and evaluated ML approaches that support better decision-making.</p></div>
              <a href="https://drive.google.com/file/d/1MlawYtZ9YRHMnHeMPM_l9rYus_zeLgc3/view?usp=drive_link" target="_blank" rel="noreferrer">Open credential <ExternalLink size={11} /></a>
            </article>
            <article><span>2025</span><div><p className="timeline-type">R&amp;D DEVELOPER INTERN</p><h3>StudAI Edutech</h3><p>Researched AI lab implementation and open-source model opportunities for academic technology programs.</p></div>
              <a href="https://drive.google.com/file/d/1zzR3ruEC70n84T8ioVOHaqXglGcEmYv1/view?usp=drive_link" target="_blank" rel="noreferrer">Open credential <ExternalLink size={11} /></a>
            </article>
            <article><span>2022</span><div><p className="timeline-type">DIGITAL MARKETING INTERN</p><h3>Mindler Inc.</h3><p>Conducted market and competitive research to help identify new growth opportunities.</p></div>
              <a href="https://drive.google.com/file/d/1Kq3BwpDBTOQcH6sM_Lbr_Uz4lk2uOcDK/view?usp=drive_link" target="_blank" rel="noreferrer">Open credential <ExternalLink size={11} /></a>
            </article>
          </div>
          <aside className="achievement-card"><div className="trophy"><Trophy size={29} /></div><p className="mini-label">NOTABLE UNLOCK</p><h3>Track Winner</h3><p>NXTGEN Hackathon<br /><b>Texus ’26</b></p><a href="https://github.com/Sidtheogdeveloper/RoamIQ" target="_blank" rel="noreferrer">See RoamIQ <ArrowUpRight size={15} /></a></aside>
        </div>
      </section>


      <section id="credentials" className="section-wrap credentials-section">
        <div className="section-heading"><span>04 / CREDENTIALS</span><h2>Proof of practice,<br />not just potential.</h2></div>
        <div className="credentials-grid">
          <article className="credential-panel education-panel"><GraduationCap size={21} /><p className="mini-label">ACADEMIC PATH</p><h3>SSN College of Engineering</h3><p>M.Tech Integrated Computer Science Engineering · August 2023 – May 2028</p><b>CGPA 8.139</b><hr /><h4>Lalaji Memorial Omega International School</h4><p>Grade 12 · June 2022 – May 2023</p><b>95%</b></article>
          <article className="credential-panel"><Award size={21} /><p className="mini-label">CERTIFICATIONS</p><ul className="compact-list credential-list">
            {[
              ['Full-Stack Web Application Development using Spring Boot and Vue.js'],
              ['Machine Learning in Python — Udemy', 'https://drive.google.com/file/d/1ULvhBGshqS4Zwdk129z_m9v-sIPrG1sO/view?usp=sharing'],
              ['Cyber Security and Privacy — NPTEL', 'https://drive.google.com/file/d/1h9bGdLE_nitabxywE8mWfTPurtFEiIh9/view?usp=sharing'],
              ['Practical Cyber Security for Cyber Security Practitioners — NPTEL', 'https://drive.google.com/file/d/17V2F-XtEVLJ2rt4xe6cntgBXiUdfg8_m/view?usp=sharing'],
              ['Remote Sensing & GIS — ISRO', 'https://drive.google.com/file/d/13Q0v2sqN8hiBc182jeib8SghQqEZxj5i/view?usp=sharing'],
            ].map(([name, url]) => <li key={name}>{url ? <a href={url} target="_blank" rel="noreferrer"><span>{name}</span><small>Open credential <ExternalLink size={11} /></small></a> : <span>{name}</span>}</li>)}
          </ul></article>
          <article className="credential-panel"><Sparkles size={21} /><p className="mini-label">WORKSHOPS & TRAINING</p><ul className="compact-list credential-list"><li><a href="https://drive.google.com/file/d/1lAw5GBMzZQKbabNX44gDCzUW9gGXCuco/view?usp=sharing" target="_blank" rel="noreferrer"><span><b>Mobile App Development with Flutter</b><small>Professional Workshop · February 2024 · Two weeks</small></span><small>Open credential <ExternalLink size={11} /></small></a></li><li><b>Logics and Proofs Workshop</b><small>Institute of Mathematical Sciences, Chennai · July 2022 · One week</small></li><li><a href="https://drive.google.com/file/d/1XgcTFb996_Fk1Wo3pGAavGvuRR-dLzXS/view?usp=sharing" target="_blank" rel="noreferrer"><span><b>Stream Data Management & Analytics in Big Data</b><small>SSN College of Engineering · August 2024 · Three days</small></span><small>Open credential <ExternalLink size={11} /></small></a></li></ul></article>
          <article className="credential-panel recognition-panel"><Trophy size={21} /><p className="mini-label">RECOGNITION</p><h3>Student of the Class Award</h3><p>Recognized for academic performance and exemplary conduct throughout Grade 12.</p><span>Lalaji Memorial Omega International School</span></article>
        </div>
      </section>

      <section id="activities" className="section-wrap activities-section">
        <div className="section-heading"><span>05 / BEYOND THE BUILD</span><h2>Leadership, community,<br />and competitive spirit.</h2></div>
        <div className="activities-grid">
          <article className="activity-panel leadership-panel"><div className="activity-title"><Users size={20} /><div><p className="mini-label">UNIVERSITY ACTIVITIES</p><h3>Leadership &amp; community</h3></div></div><div className="role-list">
            <div><span>JUN 2026 — PRESENT</span><p><b>Event Coordinator</b><br />Association of Computer Engineers (ACE), SSN CE</p></div>
            <div><span>JUN 2026 — PRESENT</span><p><b>Senior Core Member</b><br />Computer Society of India, SSN Student Chapter</p></div>
            <div><span>JUL 2025 — JUN 2026</span><p><b>Outreach Team Deputy Head</b><br />Computer Society of India, SSN Student Chapter</p></div>
          </div></article>
          <article className="activity-panel gaming-panel"><div className="activity-title"><Gamepad2 size={20} /><div><p className="mini-label">SSN GAMING CLUB</p><h3>Community builder</h3></div></div><div className="role-list">
            <div><span>JUL 2026 — PRESENT</span><p><b>Head</b><br />Leading the club&apos;s direction, member community, and activities.</p></div>
            <div><span>JUL 2025 — JUN 2026</span><p><b>Senior Core Member</b><br />Supported programming and club operations.</p></div>
            <div><span>AUG 2024 — JUL 2025</span><p><b>Junior Core Member</b><br />Contributed to team initiatives and events.</p></div>
          </div></article>
          <article className="activity-panel cricket-panel"><div className="activity-title"><Trophy size={20} /><div><p className="mini-label">CRICKET</p><h3>Team sport &amp; competition</h3></div></div><div className="cricket-list"><div><b>Vice-Captain, School Cricket Team</b><p>Represented the school in inter-school tournaments and helped guide team strategy and performance.</p></div><div><b>Member, College Cricket Team</b><p>Participated in college-level tournaments through consistent teamwork and performance.</p></div><div><b>Representative, Kancheepuram District Cricket Team (U-16)</b><p>Played in district-level tournaments at a competitive level.</p></div><div><b>TNCA U-16 Round Robin Tournament · 2021–22</b><p>Gained state-level match experience against leading players.</p></div></div></article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner section-wrap"><span>06 / OPEN CHANNEL</span><h2>Have a worthwhile<br />challenge in mind?</h2><p>I&apos;m always interested in thoughtful teams, ambitious products, and opportunities to make something that matters.</p><a href="mailto:siddharthmadhu2005@gmail.com" className="contact-email">siddharthmadhu2005@gmail.com <ArrowUpRight size={23} /></a><div className="contact-links"><a href="tel:+919150914685">+91 91509 14685</a><a href="https://www.linkedin.com/in/siddharth-madhu17092005/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LINKEDIN</a><a href="https://github.com/Sidtheogdeveloper" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a></div></div>
      </section>

      <footer><span>© 2026 SIDDHARTH MADHU RAO</span><span>DESIGNED WITH INTENTION <Sparkles size={13} /></span></footer>

      {selectedProject !== null && <div className="project-modal" role="dialog" aria-modal="true"><button className="modal-backdrop" onClick={() => setSelectedProject(null)} aria-label="Close project details" /><div className="modal-content"><button className="modal-close" onClick={() => setSelectedProject(null)}><X size={20} /></button><p className="project-type">MISSION BRIEF / {projects[selectedProject].number}</p><h2>{projects[selectedProject].title}</h2><p>{projects[selectedProject].description}</p><div className="modal-info"><span><Layers3 size={17} /> Build focus</span><b>{projects[selectedProject].tags.join(' · ')}</b></div><a href={projects[selectedProject].github} target="_blank" rel="noreferrer" className="primary-action">View source <Github size={17} /></a></div></div>}
    </main>
  );
}

function ArrowRightIcon() { return <ArrowDownRight size={18} className="archive-arrow" />; }

export default App;
