const caseStudies = [
  {
    eyebrow: 'Flagship Case Study',
    title: 'Simplifying Infrastructure Validation for Deployment Engineers',
    subtitle:
      'A web-based validation tool that turned a manual, command-line-heavy workflow into a guided pass/fail experience for PMs and deployment engineers.',
    metrics: [
      ['85–90%', 'reduction in validation time'],
      ['15–20 min', 'manual validation before'],
      ['<2 min', 'validation after redesign'],
      ['400+', 'sites supported by the workflow'],
    ],
    role: 'UX Designer / UX Researcher / Technical Infrastructure Program Manager',
    duration: '1 month',
    users: 'Program Managers, deployment engineers, hardware engineers',
    problem:
      'Validating a newly deployed WAMS UWC site required users to remote into a compute device, run multiple terminal commands, reference documentation, interpret technical outputs, and check several internal systems. This made the process slow, inconsistent, and difficult for less technical team members.',
    insight:
      'The validation checks themselves were straightforward. The real UX problem was that performing them required command-line expertise, device lookup knowledge, and confidence interpreting technical results.',
    solution:
      'I revamped the existing script using an internal AI development tool and placed a clean UI in front of it. The interface guides users through partition and device selection, runs the validation checks automatically, and displays results in an easy-to-understand pass/fail format.',
  },
  {
    eyebrow: 'Case Study 2',
    title: 'Hardware Deployment & Technician Workflow Redesign',
    subtitle:
      'A workflow redesign focused on improving clarity, consistency, and troubleshooting support during hardware deployments.',
    metrics: [
      ['Field teams', 'primary users'],
      ['Workflow', 'standardization focus'],
      ['Docs + tooling', 'experience touchpoints'],
      ['Scalable', 'deployment support model'],
    ],
    role: 'Technical Infrastructure Program Manager / UX Designer',
    duration: 'In progress',
    users: 'Technicians, launch engineers, support teams',
    problem:
      'Hardware deployment teams often depend on fragmented documentation, tribal knowledge, and inconsistent troubleshooting paths, which creates confusion and slows down deployment readiness.',
    insight:
      'Deployment experiences are not only about hardware. The surrounding instructions, tools, checkpoints, and handoff moments shape whether a technician feels confident and successful.',
    solution:
      'This case study will document how I approach technician workflow mapping, documentation simplification, and deployment experience design for technical users.',
  },
];

const designDecisions = [
  ['Dropdowns instead of manual input', 'Reduced memory burden and helped prevent syntax errors.'],
  ['Pass/fail result cards', 'Made technical outputs easier to scan and understand quickly.'],
  ['Automated validation checks', 'Removed repetitive command execution and reduced human error.'],
  ['Centralized troubleshooting links', 'Reduced context switching across dashboards, terminals, and device interfaces.'],
  ['Real-time progress states', 'Gave users confidence that the tool was actively running checks.'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950">
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">Breanna Joseph</a>
          <div className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a href="#work" className="hover:text-neutral-950">Work</a>
            <a href="#about" className="hover:text-neutral-950">About</a>
            <a href="#contact" className="hover:text-neutral-950">Contact</a>
          </div>
        </div>
      </nav>

      <section id="top" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
            UX Designer · Technical Infrastructure Program Manager
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Designing clearer workflows for technical teams.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            I bring a background in infrastructure, hardware deployment, and field IT into UX design — focusing on internal tools, operational systems, and experiences that reduce friction for technical users.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded-2xl bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">View Work</a>
            <a href="#contact" className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium hover:border-neutral-950">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-neutral-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Selected Work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Operational UX case studies</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              My work focuses on turning complex technical processes into clearer, more consistent experiences for the people responsible for deploying and supporting infrastructure.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {caseStudies.map((study) => (
              <article key={study.title} className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 shadow-sm">
                <div className="grid gap-0 lg:grid-cols-[1.25fr_.75fr]">
                  <div className="p-8 md:p-12">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">{study.eyebrow}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{study.title}</h3>
                    <p className="mt-6 text-lg leading-8 text-neutral-700">{study.subtitle}</p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      {study.metrics.map(([value, label]) => (
                        <div key={value} className="rounded-3xl bg-white p-5 shadow-sm">
                          <p className="text-3xl font-semibold tracking-tight">{value}</p>
                          <p className="mt-2 text-sm text-neutral-500">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 bg-neutral-950 p-8 text-white lg:border-l lg:border-t-0 md:p-12">
                    <div className="space-y-8">
                      <Info label="Role" value={study.role} />
                      <Info label="Timeline" value={study.duration} />
                      <Info label="Users" value={study.users} />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 border-t border-neutral-200 bg-white p-8 md:grid-cols-3 md:p-12">
                  <TextBlock title="Problem" text={study.problem} />
                  <TextBlock title="Key Insight" text={study.insight} />
                  <TextBlock title="Solution" text={study.solution} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Flagship Project Detail</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Before vs. after</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              The biggest design shift was moving users away from scattered technical steps and into one guided validation experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Before</p>
              <ol className="mt-6 space-y-4 text-sm leading-6 text-neutral-700">
                <li>1. Open terminal</li>
                <li>2. Authenticate through internal tools</li>
                <li>3. Find device in AWS SSM</li>
                <li>4. SSH into the device</li>
                <li>5. Run checks manually</li>
                <li>6. Interpret technical output</li>
                <li>7. Repeat for each device</li>
              </ol>
            </div>
            <div className="rounded-[2rem] border border-neutral-900 bg-neutral-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">After</p>
              <ol className="mt-6 space-y-4 text-sm leading-6 text-neutral-200">
                <li>1. Select partition</li>
                <li>2. Enter device name</li>
                <li>3. Run validation</li>
                <li>4. Review pass/fail report</li>
                <li>5. Use embedded troubleshooting links</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Design Decisions</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Designing for clarity, confidence, and consistency</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {designDecisions.map(([feature, purpose]) => (
              <div key={feature} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-semibold">{feature}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">About</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">My background helps me design for technical users.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-neutral-700">
            <p>
              I have experience across field IT, hardware launch support, and technical infrastructure program management. That background gives me a practical understanding of how tools, documentation, and workflows affect operational teams.
            </p>
            <p>
              I’m interested in UX work that sits at the intersection of people, systems, and technical complexity — especially internal tools, enterprise workflows, and products that help teams work more confidently.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">Contact</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight">Let’s connect.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            I’m building a UX portfolio focused on operational systems, technical workflows, and enterprise experiences.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:bre.joseph97@gmail.com" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200">Email Me</a>
            <a href="https://github.com/breeeejoseph8" className="rounded-2xl border border-neutral-700 px-6 py-3 text-sm font-medium hover:border-white">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-wide text-neutral-400">{label}</p>
      <p className="mt-2 leading-7 text-neutral-100">{value}</p>
    </div>
  );
}

function TextBlock({ title, text }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{title}</h4>
      <p className="mt-3 leading-7 text-neutral-700">{text}</p>
    </div>
  );
}
