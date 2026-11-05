const services = [
  ['01', 'Product discovery', 'Requirements, user roles, flows and a clear scope before implementation.'],
  ['02', 'UX & UI design', 'Information architecture and interfaces that make complex tasks easier to use.'],
  ['03', 'Mobile applications', 'Connected mobile experiences with practical account and notification flows.'],
  ['04', 'Web platforms', 'Customer, partner and internal portals built around real operations.'],
  ['05', 'Bots & conversations', 'Service workflows and notifications connected to the systems behind them.'],
  ['06', 'Back-office systems', 'Tools for roles, operations, statuses, documents and reporting.'],
  ['07', 'API & integrations', 'Reliable connections between external providers and internal services.'],
  ['08', 'QA & support', 'Testing, observability and the work needed after the first release.']
];

const steps = [
  ['01', 'Discovery', 'Understand goals, constraints, users and the initial functional scope.'],
  ['02', 'UX & architecture', 'Map user journeys, system boundaries, integrations and release plans.'],
  ['03', 'Design & build', 'Create interfaces, application services and the integration layer.'],
  ['04', 'Test & launch', 'Verify workflows, prepare environments and document the release.'],
  ['05', 'Support & grow', 'Monitor, improve and extend the service as needs change.']
];

const useCases = [
  ['Customer services', 'Give people a clear way to view operations, documents and service requests.'],
  ['Partner portals', 'Connect partners to shared workflows, statuses and reports.'],
  ['Operational control', 'Bring approvals, exceptions and role-based actions into one interface.'],
  ['Onboarding journeys', 'Design identity, profile and consent flows around the actual process.'],
  ['Connected systems', 'Move data between providers and internal teams with visible states.'],
  ['Legacy modernization', 'Replace fragmented interfaces without losing essential workflows.']
];

const cases = [
  {
    type: 'Illustrative scenario 01', title: 'A clearer partner workspace',
    context: 'A digital service with several partner roles and disconnected status updates.',
    work: 'A shared workspace concept for requests, document states and role-based actions.',
    result: 'Proposed outcome: fewer manual status checks. No measured results are claimed.', visual: 'v1'
  },
  {
    type: 'Illustrative scenario 02', title: 'Operations in one view',
    context: 'A back-office team working across multiple operational tools.',
    work: 'A unified interface concept for queues, exceptions and audit-ready status history.',
    result: 'Proposed outcome: a more traceable workflow. No measured results are claimed.', visual: 'v2'
  },
  {
    type: 'Illustrative scenario 03', title: 'An integration layer',
    context: 'A service that depends on external providers and internal applications.',
    work: 'An API integration concept with explicit error handling and monitoring.',
    result: 'Proposed outcome: easier support and change management. No measured results are claimed.', visual: 'v3'
  }
];

const main = document.querySelector('#main');
const nav = document.querySelector('#primary-nav');
const menuToggle = document.querySelector('.menu-toggle');

function eyebrow(text) { return `<span class="eyebrow">${text}</span>`; }
function pageHero(label, title, description) {
  return `<section class="page-hero"><div class="shell">${eyebrow(label)}<h1>${title}</h1><p>${description}</p></div></section>`;
}
function cta() {
  return `<section class="cta-band"><div class="shell split"><div>${eyebrow('START A CONVERSATION')}<h2>Tell us what needs to work better.</h2></div><div><p>Share the challenge and the systems involved. The next step is a focused discussion of scope and constraints.</p><a class="button button-dark" href="#/contact">Discuss a project <span aria-hidden="true">↗</span></a></div></div></section>`;
}
function diagram() {
  return `<div class="diagram" role="img" aria-label="Diagram showing a software platform connecting interfaces, APIs, operations and support"><div class="diagram-center"><div><small>CONNECTED SYSTEMS</small><span>Build for<br>the whole flow</span></div></div><div class="diagram-node node-1"><div class="node-icon">↗</div><strong>Interfaces</strong><span>Clear user journeys</span></div><div class="diagram-node node-2"><div class="node-icon">↔</div><strong>Integrations</strong><span>Connected services</span></div><div class="diagram-node node-3"><div class="node-icon">✓</div><strong>Operations</strong><span>Visible states</span></div><div class="diagram-node node-4"><div class="node-icon">◌</div><strong>Support</strong><span>Built to evolve</span></div></div>`;
}
function serviceCards(items = services.slice(0, 6)) {
  return `<div class="card-grid">${items.map(([n, title, text]) => `<article class="card"><span class="icon" aria-hidden="true">${n}</span><h3>${title}</h3><p>${text}</p><span class="card-arrow" aria-hidden="true">↗</span></article>`).join('')}</div>`;
}
function processGrid() {
  return `<div class="process-grid">${steps.map(([n, title, text]) => `<article class="process-step"><b>${n} / 05</b><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>`;
}
function caseCards() {
  return `<div class="case-grid">${cases.map(item => `<article class="case-card"><div class="case-visual ${item.visual}"><span>${item.type}</span></div><div class="case-body"><span class="case-tag">Concept, not a client claim</span><h3>${item.title}</h3><p>${item.work}</p></div></article>`).join('')}</div>`;
}

const pages = {
  home: () => `<section class="hero"><div class="shell hero-grid"><div class="hero-copy">${eyebrow('SOFTWARE DESIGN & ENGINEERING')}<h1>Software for <em>complex operations.</em></h1><p>We design and build digital platforms, applications and integrations for teams working with demanding processes. From the first workflow to the systems behind it.</p><div class="actions"><a class="button button-dark" href="#/contact">Discuss a project <span aria-hidden="true">↗</span></a><a class="button button-outline" href="#/expertise">Explore expertise</a></div></div><div class="hero-art">${diagram()}</div></div></section>
  <section class="section-tight"><div class="shell intro-grid"><div>${eyebrow('WHAT WE DO')}<h2>One team across the service.</h2></div><div><p>Complex digital work rarely ends at a single screen. A useful service connects people, decisions, data and operational tools. This concept shows how a technology partner can present that full picture without pretending to be a financial institution.</p></div></div></section>
  <div class="shell"><div class="number-grid"><article><b>01</b><p>Understand the process and its constraints</p></article><article><b>02</b><p>Design interfaces around real users</p></article><article><b>03</b><p>Connect applications and services</p></article><article><b>04</b><p>Support the system after launch</p></article></div></div>
  <section class="section"><div class="shell"><div class="section-head"><div>${eyebrow('EXPERTISE')}<h2>Capabilities that work together.</h2></div><a class="button button-link" href="#/expertise">All expertise <span aria-hidden="true">↗</span></a></div>${serviceCards()}</div></section>
  <section class="section dark-section"><div class="shell"><div class="section-head"><div>${eyebrow('HOW WE WORK')}<h2>Progress with a clear sequence.</h2></div><p>Each stage has a concrete output, so scope and decisions remain visible as the work moves forward.</p></div>${processGrid()}<div class="actions"><a class="button button-light" href="#/process">See the process <span aria-hidden="true">↗</span></a></div></div></section>
  <section class="section"><div class="shell"><div class="section-head"><div>${eyebrow('USE CASES')}<h2>Built around the work to be done.</h2></div><p>Common starting points include partner operations, customer journeys, internal tools and connected services.</p></div><div class="wide-grid">${useCases.slice(0,4).map(([title,text])=>`<article class="wide-card"><small>Scenario</small><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>
  <section class="section"><div class="shell"><div class="section-head"><div>${eyebrow('ILLUSTRATIVE SCENARIOS')}<h2>Ways to explain the work.</h2></div><a class="button button-link" href="#/cases">View scenarios <span aria-hidden="true">↗</span></a></div>${caseCards()}</div></section>${cta()}`,
  expertise: () => `${pageHero('EXPERTISE','Capabilities for connected services.','Combine research, design, engineering and support according to the needs of the project.')}
  <section class="page-section"><div class="shell">${serviceCards(services)}</div></section>
  <section class="page-section dark-section"><div class="shell split"><div>${eyebrow('INTEGRATION THINKING')}<h2>Interfaces are only part of the system.</h2></div><div><p>We would map the data flow, roles and external services before fixing an implementation plan. A reliable interface needs clear status handling, documentation and a practical route for support.</p><a class="button button-light" href="#/contact">Discuss a project <span aria-hidden="true">↗</span></a></div></div></section>`,
  'use-cases': () => `${pageHero('INDUSTRIES & USE CASES','Start with the problem, not a product.','Example scenarios for financial and other digital-first businesses. These are service patterns, not packaged products.')}
  <section class="page-section"><div class="shell"><div class="section-head"><div>${eyebrow('COMMON CHALLENGES')}<h2>Where the work begins.</h2></div></div><div class="wide-grid">${useCases.map(([title,text])=>`<article class="wide-card"><small>Use case</small><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>
  <section class="page-section"><div class="shell split"><div>${eyebrow('FOCUS AREAS')}<h2>Operational software with a human interface.</h2></div><div class="panel"><h3>Typical system boundaries</h3><ul><li>Customer and partner portals</li><li>Internal operations and approvals</li><li>External providers and APIs</li><li>Reporting, notifications and support</li></ul></div></div></section>${cta()}`,
  process: () => `${pageHero('HOW WE WORK','A process people can follow.','From initial discovery to the next release, each phase has a defined purpose and an output to review.')}
  <section class="page-section"><div class="shell timeline">${steps.map(([n,title,text])=>`<article><b>${n} / 05</b><div><h2>${title}</h2><p>${text}</p></div></article>`).join('')}</div></section>
  <section class="page-section dark-section"><div class="shell">${eyebrow('WORKING TOGETHER')}<h2 class="subsection-title">Choose the shape of the team.</h2><div class="pills"><span class="pill">Project delivery</span><span class="pill">Dedicated team</span><span class="pill">Team extension</span><span class="pill">Ongoing support</span></div><p style="margin-top:2rem;max-width:650px">The engagement model depends on your existing team, the system landscape and the decisions already made.</p></div></section>${cta()}`,
  cases: () => `${pageHero('CASE STUDIES','Show the challenge and the work.','These three examples are illustrative placeholders. They are not claims about completed client projects.')}
  <section class="page-section"><div class="shell">${cases.map(item=>`<article class="case-detail"><span class="case-tag">${item.type} · fictional example</span><h2>${item.title}</h2><div class="detail-grid"><div><h3>Context</h3><p>${item.context}</p></div><div><h3>Proposed work</h3><p>${item.work}</p></div><div><h3>Potential outcome</h3><p>${item.result}</p></div></div></article>`).join('')}<p class="form-note">Before a real launch, replace these examples with approved, anonymized project material and verified outcomes.</p></div></section>${cta()}`,
  about: () => `${pageHero('ABOUT','Engineering with the wider system in mind.','Northline Studio is a fictional identity created to demonstrate a calm, adaptable company presentation.')}
  <section class="page-section"><div class="shell intro-grid"><div>${eyebrow('OUR APPROACH')}<h2>Make complex processes clear and manageable.</h2></div><div><p>The proposed positioning is a software partner: one that can help define the problem, design usable workflows, connect systems and maintain the result. Company history, team size, geography and achievements are intentionally left unspecified until verified.</p></div></div></section>
  <section class="page-section"><div class="shell"><div class="section-head"><div>${eyebrow('PRINCIPLES')}<h2>What should guide the work.</h2></div></div><div class="wide-grid"><article class="wide-card"><small>01</small><h3>Security by design</h3><p>Consider access, data handling and operational controls from the beginning.</p></article><article class="wide-card"><small>02</small><h3>Transparent delivery</h3><p>Make scope, decisions and unresolved questions visible to the people responsible.</p></article><article class="wide-card"><small>03</small><h3>Maintainable architecture</h3><p>Document key choices so future changes remain possible.</p></article><article class="wide-card"><small>04</small><h3>Long-term thinking</h3><p>Plan for support, learning and the next release, not only a launch date.</p></article></div></div></section>${cta()}`,
  contact: () => `${pageHero('CONTACT','Discuss a project.','A short first conversation is enough to understand the challenge and identify what information is needed next.')}
  <section class="page-section"><div class="shell form-wrap"><div class="contact-side">${eyebrow('START HERE')}<h2>Tell us the essentials.</h2><p>This form demonstrates layout and validation only. It does not send or store data. Connect a secure backend and approved privacy policy before production use.</p></div><form id="contact-form" class="form-card" novalidate><div class="form-grid"><div class="field"><label for="name">Name *</label><input id="name" name="name" autocomplete="name" required maxlength="100"><span class="error" id="name-error"></span></div><div class="field"><label for="email">Work email *</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="160"><span class="error" id="email-error"></span></div><div class="field"><label for="company">Company *</label><input id="company" name="company" autocomplete="organization" required maxlength="120"><span class="error" id="company-error"></span></div><div class="field"><label for="request-type">Request type *</label><select id="request-type" name="requestType" required><option value="">Select one</option><option>New project</option><option>Integration</option><option>Support</option><option>Partnership</option><option>Other</option></select><span class="error" id="request-type-error"></span></div><div class="field full"><label for="brief">Brief project description *</label><textarea id="brief" name="brief" required minlength="10" maxlength="1500" placeholder="What are you building or improving?"></textarea><span class="error" id="brief-error"></span></div></div><p class="form-note">* Required fields. Demo only: no data is transmitted or saved.</p><button class="button button-dark" type="submit">Preview submission <span aria-hidden="true">↗</span></button><p class="form-status" id="form-status" role="status">Validation passed. This prototype does not send the message.</p></form></div></section>`
};

function getRoute() {
  const slug = location.hash.replace(/^#\/?/, '').split('?')[0].replace(/\/$/, '');
  return slug && pages[slug] ? slug : 'home';
}
function render() {
  const route = getRoute();
  main.innerHTML = pages[route]();
  document.title = `${route === 'home' ? 'Software for complex operations' : ({'use-cases':'Use cases',process:'How we work',cases:'Case studies'}[route] || route[0].toUpperCase()+route.slice(1))} — Northline Studio`;
  document.querySelectorAll('[data-route]').forEach(link => {
    if (link.dataset.route === route) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  window.scrollTo({top:0,behavior:'instant'});
  if(route === 'contact') attachForm();
}
function attachForm() {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  const fields = ['name','email','company','request-type','brief'];
  form.addEventListener('submit', event => {
    event.preventDefault();
    status.classList.remove('visible');
    let firstInvalid = null;
    fields.forEach(id => {
      const input = document.getElementById(id);
      const error = document.getElementById(`${id}-error`);
      let message = '';
      if (!input.value.trim()) message = 'This field is required.';
      else if (id === 'email' && !input.validity.valid) message = 'Enter a valid email address.';
      else if (id === 'brief' && input.value.trim().length < 10) message = 'Please add at least 10 characters.';
      input.setAttribute('aria-invalid', String(Boolean(message)));
      input.setAttribute('aria-describedby', `${id}-error`);
      error.textContent = message;
      if (message && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) firstInvalid.focus();
    else status.classList.add('visible');
  });
}
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
window.addEventListener('hashchange', render);
document.querySelector('#year').textContent = new Date().getFullYear();
render();
