import Effects from "./Effects";

export default function Home() {
  return (
    <>
      <div className="cursor-glow"></div>
      <header className="nav">
          <a className="brand" href="#home"><span>AU</span> Arpita Uplana</a>
          <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">What I Do</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Let's Connect <span>↗</span></a>
        </header>

        <main id="home">
          <section className="hero section">
            <div className="hero-copy">
              <div className="eyebrow"><i></i> Associate Project Manager · Journai.us</div>
              <h1>I turn <em>requirements</em><br />into <strong>delivery.</strong></h1>
              <p className="hero-text">I’m Arpita Uplana. I work at the intersection of business and technology — translating client requirements into plans teams can execute, coordinating people and priorities, and keeping delivery visible from kickoff to close.</p>
              <ul className="hero-points">
                <li><b>Now</b> Associate Project Manager at Journai.us. I own planning, timelines, resource coordination and stakeholder communication on live product work.</li>
                <li><b>Background</b> 4+ years across Business Development and Project Coordination — from client conversations, proposals and scope to ClickUp, Agile/Scrum and day-to-day follow-through.</li>
                <li><b>Delivery</b> Web and mobile products across aviation, matchmaking, workforce, mobility, dating and education platforms.</li>
              </ul>
              <div className="hero-focus" aria-label="Focus areas">
                <span>Requirements</span>
                <span>Planning</span>
                <span>Stakeholders</span>
                <span>Agile / Scrum</span>
                <span>ClickUp</span>
                <span>Client communication</span>
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#experience">Explore my journey <span>↓</span></a>
                <a className="button ghost" href="#contact">Let’s connect <span>↗</span></a>
              </div>
              <div className="hero-meta">
                <div><strong>4+</strong><span>Years in BDE & delivery</span></div>
                <div><strong>APM</strong><span>Current role, Journai.us</span></div>
                <div><strong>6</strong><span>Product domains shipped</span></div>
                <div><strong>M.Tech</strong><span>IIPS, DAVV Indore</span></div>
              </div>
            </div>

            <div className="hero-art" aria-label="Abstract project management visual">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="core">
                <div className="core-label">PROJECT<br /><span>FLOW</span></div>
              </div>
              <div className="float-card card-a"><small>01</small><b>Understand</b><span>Scope, goals, budget</span></div>
              <div className="float-card card-b"><small>02</small><b>Coordinate</b><span>Teams, ClickUp, Agile</span></div>
              <div className="float-card card-c"><small>03</small><b>Deliver</b><span>Milestones & outcomes</span></div>
            </div>
          </section>

          <section className="marquee"><div>BUSINESS × PROJECTS × CLIENTS × DELIVERY × AGILE × SCRUM ×</div></section>

          <section id="about" className="section split">
            <div className="section-tag">01 / ABOUT</div>
            <div className="section-content">
              <p className="kicker">A career built around understanding both sides.</p>
              <h2>Business conversations on one side. <span>Project delivery on the other.</span></h2>
              <p>With 4+ years of experience across Business Development and Project Coordination, I have worked in technology-focused environments where client expectations, business goals and delivery teams need to stay aligned.</p>
              <p>My experience spans client relationship management, requirements gathering, project planning, timelines, resource coordination, stakeholder communication and delivery monitoring. I now bring that business understanding into my role as an Associate Project Manager at Journai.us.</p>
              <div className="quote">“I enjoy turning a business requirement into clear, organised work that a team can actually deliver.”</div>
            </div>
          </section>

          <section id="experience" className="section experience">
            <div className="section-tag">02 / EXPERIENCE</div>
            <div className="section-content">
              <div className="section-heading">
                <div><p className="kicker">My professional path</p><h2>From <span>business</span> to delivery.</h2></div>
                <p className="side-note">A progression shaped by client communication, coordination and project ownership.</p>
              </div>

              <div className="timeline">
                <article className="timeline-item">
                  <div className="timeline-year">CURRENT</div>
                  <div className="timeline-line"><i></i></div>
                  <div className="timeline-body">
                    <span className="role-label">Associate Project Manager</span>
                    <h3>Project planning & delivery</h3>
                    <p>Coordinate end-to-end project execution, manage timelines, resources and priorities, align clients, leadership and internal teams, and identify risks or roadblocks early.</p>
                    <div className="chips"><span>Planning</span><span>Team Coordination</span><span>Stakeholders</span><span>Delivery</span></div>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-year">6+ MONTHS</div>
                  <div className="timeline-line"><i></i></div>
                  <div className="timeline-body">
                    <span className="role-label">Project Coordinator</span>
                    <h3>Turning requirements into organised work</h3>
                    <p>Supported planning, scheduling and milestone tracking while coordinating client communication, project documentation, resource allocation and team alignment.</p>
                    <div className="chips"><span>ClickUp</span><span>Requirements</span><span>Monitoring</span><span>Agile</span></div>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-year">3+ YEARS</div>
                  <div className="timeline-line"><i></i></div>
                  <div className="timeline-body">
                    <span className="role-label">Business Development</span>
                    <h3>Understanding the business behind the project</h3>
                    <p>Prospected and generated qualified leads, built client relationships, prepared proposals, supported contract negotiations, and helped define project scope, goals, budgets and deliverables.</p>
                    <div className="chips"><span>Client Meetings</span><span>Business Development</span><span>Budget Discussions</span><span>CRM</span></div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="work" className="section cards-section">
            <div className="section-tag">03 / WHAT I DO</div>
            <div className="section-content">
              <p className="kicker">Where I add value</p>
              <h2>More than task tracking. <span>It’s about keeping the whole picture clear.</span></h2>
              <div className="service-grid">
                <article className="service-card"><span>01</span><h3>Project Coordination</h3><p>Organising tasks, priorities, dependencies and follow-ups so teams know what needs to move next.</p></article>
                <article className="service-card"><span>02</span><h3>Client & Stakeholder Management</h3><p>Understanding expectations, communicating progress and keeping discussions focused on outcomes.</p></article>
                <article className="service-card"><span>03</span><h3>Planning & Monitoring</h3><p>Supporting project planning, tracking progress, identifying blockers and monitoring delivery against priorities.</p></article>
                <article className="service-card"><span>04</span><h3>Business Understanding</h3><p>Using my BDE background to understand requirements, scope, budgets and the business context behind a project.</p></article>
                <article className="service-card"><span>05</span><h3>Agile & Scrum</h3><p>Working with Agile and Scrum concepts including sprint planning, standups, backlog coordination and retrospectives.</p></article>
                <article className="service-card"><span>06</span><h3>ClickUp & Project Operations</h3><p>Using ClickUp to organise work, track progress, manage priorities and maintain project visibility.</p></article>
              </div>
            </div>
          </section>

          <section id="journey" className="section flow-section">
            <div className="section-tag">04 / HOW I WORK</div>
            <div className="section-content">
              <div className="section-heading">
                <div><p className="kicker">My working approach</p><h2>Clear steps. <span>Clear ownership.</span></h2></div>
              </div>
              <div className="flow">
                <div><div className="flow-no">01</div><h3>Understand</h3><p>Business goal, requirement, scope and expectations.</p></div>
                <div><div className="flow-no">02</div><h3>Plan</h3><p>Break work into priorities, tasks and timelines.</p></div>
                <div><div className="flow-no">03</div><h3>Coordinate</h3><p>Keep teams and stakeholders aligned.</p></div>
                <div><div className="flow-no">04</div><h3>Monitor</h3><p>Track progress, blockers and dependencies.</p></div>
                <div><div className="flow-no">05</div><h3>Deliver</h3><p>Close the loop against the agreed requirement.</p></div>
              </div>
            </div>
          </section>

          <section className="section skills-section">
            <div className="section-tag">05 / TOOLKIT</div>
            <div className="section-content">
              <div className="toolkit">
                <div><p className="kicker">Project Management</p><h3>Planning · Coordination · Monitoring · Stakeholder Management</h3></div>
                <div><p className="kicker">Methodologies</p><h3>Agile · Scrum · Sprint Planning · Standups · Retrospectives</h3></div>
                <div><p className="kicker">Business</p><h3>Client Communication · Requirement Understanding · BDE · Budget Discussions</h3></div>
                <div><p className="kicker">Tools</p><h3>ClickUp · CRM · Communication & Collaboration Tools</h3></div>
              </div>
            </div>
          </section>

          <section className="section case-section">
            <div className="section-tag">05 / PROJECTS</div>
            <div className="section-content">
              <p className="kicker">Selected project experience</p>
              <h2>Projects across <span>web, mobile & business platforms.</span></h2>
              <div className="project-grid">
                <article className="project-card">
                  <span>01 · Aviation</span>
                  <h3>TPAC — The Private Aviation Company</h3>
                  <p>Private jet charter and membership platform supporting Saudi Arabia and worldwide operations, with CRM and ticketing/booking modules for client management, charter requests and service coordination.</p>
                </article>
                <article className="project-card">
                  <span>02 · Matchmaking</span>
                  <h3>Marriage Ready</h3>
                  <p>Matchmaking and relationship-readiness platform. Coordinated feature development and delivery supporting user profiles and matching functionality.</p>
                </article>
                <article className="project-card">
                  <span>03 · Workforce</span>
                  <h3>On-Demand Labor Service — Oman</h3>
                  <p>Platform connecting companies and workers for short-term and temporary labor hiring.</p>
                </article>
                <article className="project-card">
                  <span>04 · Mobility</span>
                  <h3>Car Rental Application — Fiji</h3>
                  <p>Dual-login car rental platform for agents and users with location-based booking.</p>
                </article>
                <article className="project-card">
                  <span>05 · Dating</span>
                  <h3>Dream's Dating Application</h3>
                  <p>Questionnaire-based dating application with live streaming and blog features.</p>
                </article>
                <article className="project-card">
                  <span>06 · Education</span>
                  <h3>Kemetic Application</h3>
                  <p>Educational platform for Kemetic University delivering courses focused on ancient Egyptian knowledge.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section credentials">
            <div className="section-tag">06 / EDUCATION</div>
            <div className="section-content">
              <p className="kicker">Academic background</p>
              <h2>M.Tech in <span>Technology.</span></h2>
              <div className="credential-row">
                <div><strong>Master of Technology (M.Tech)</strong><span>International Institute of Professional Studies (IIPS), Devi Ahilya Vishwavidyalaya (DAVV), Indore · 2021</span></div>
              </div>
              <div className="achievement-box">
                <p className="kicker">Achievements</p>
                <p>Selected among the top 100 students of Madhya Pradesh for Vigyan Manthan Yatra (MP Mission Excellence), 2013–2014.</p>
                <p>Awarded academic merit at school level, 2012.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="section contact">
            <div className="contact-inner">
              <div>
                <p className="kicker">07 / CONTACT</p>
                <h2>Let's build something <span>well-managed.</span></h2>
                <p>Open to project management opportunities, professional conversations and meaningful collaborations.</p>
              </div>
              <div className="contact-links">
                <a href="mailto:arpitauplana786@gmail.com"><span>Email</span><strong>arpitauplana786@gmail.com</strong><em>↗</em></a>
                <a href="https://www.linkedin.com/in/arpita-uplana-3972941a2" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect with me</strong><em>↗</em></a>
                <a href="#contact"><span>Resume</span><strong>Download Resume</strong><em>↗</em></a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <span>© 2026 Arpita Uplana</span>
          <a className="footer-email" href="mailto:arpitauplana786@gmail.com">arpitauplana786@gmail.com</a>
          <span>Project Management · Business · Delivery</span>
        </footer>
      <Effects />
    </>
  );
}
