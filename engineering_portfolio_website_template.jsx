export default function Portfolio() {
  const projects = [
    {
      title: "Pool Boiling Heat Transfer Research",
      subtitle: "Master's thesis project",
      problem:
        "Improve heat transfer performance for high-heat-flux cooling applications relevant to aerospace avionics and electronics.",
      approach: [
        "Designed and ran pool boiling experiments with dielectric fluids and surfactants",
        "Measured thermal response using instrumentation, data acquisition, and visualization tools",
        "Analyzed bubble dynamics, nucleation site behavior, and surface temperature distribution",
      ],
      results: [
        "Quantify heat transfer coefficient trends under different fluid and surface conditions",
        "Compare untreated and modified surfaces using experimental metrics",
        "Relate visualization observations to boiling performance changes",
      ],
      tools: ["LabVIEW", "MATLAB", "DAQ", "IR Camera", "High-Speed Imaging"],
    },
    {
      title: "DAQ and Heater Control System",
      subtitle: "Instrumentation and controls project",
      problem:
        "Build a reliable test platform for heater control, thermocouple measurement, and repeatable thermal experiments.",
      approach: [
        "Integrated NI DAQ hardware with thermocouple input and heater output control",
        "Implemented multi-channel SSR-based switching architecture",
        "Structured control logic for safe operation and repeatable data collection",
      ],
      results: [
        "Enabled stable test execution for thermal experiments",
        "Improved repeatability of heater input control and data logging",
        "Created a reusable experimental control framework",
      ],
      tools: ["NI DAQ", "LabVIEW", "SSR Control", "Thermocouples"],
    },
    {
      title: "LabVIEW Automation and Signal Generation",
      subtitle: "Data acquisition and software workflow",
      problem:
        "Automate data collection and control tasks for thermal experiments while reducing manual setup time.",
      approach: [
        "Developed VIs for custom ramp generation and measurement workflows",
        "Read CSV and single-row data sources for waveform plotting and validation",
        "Separated digital output control across multiple SSR channels",
      ],
      results: [
        "Reduced manual intervention during testing",
        "Improved clarity and modularity of the control workflow",
        "Supported scalable updates for future experiments",
      ],
      tools: ["LabVIEW", "DAQmx", "CSV Processing", "Waveform Plotting"],
    },
    {
      title: "CFD Automation and Aerodynamic Analysis",
      subtitle: "Simulation, automation, and surrogate modeling project",
      problem:
        "Reduce turnaround time for aerodynamic CFD studies while maintaining accuracy and enabling faster design exploration.",
      approach: [
        "Built an end-to-end Python automation pipeline connecting ANSA, OpenFOAM, and ParaView",
        "Automated meshing, case setup, solver execution, and post-processing for parametric studies",
        "Validated simulations against experimental pressure coefficient data for a NACA 2412 airfoil using SST k-omega modeling and y+ < 1 mesh resolution",
      ],
      results: [
        "Reduced parametric study turnaround time by 62%, from 4 hours to 1.5 hours, across 50+ simulation runs",
        "Achieved greater than 92% correlation with experimental Cp data",
        "Applied GBM and random forest regression models to predict lift and drag coefficients for faster surrogate-based design exploration",
      ],
      tools: ["Python", "ANSA", "OpenFOAM", "ParaView", "CFD Automation", "Machine Learning"],
    },
  ];

  const skills = {
    Thermal: [
      "Pool boiling heat transfer",
      "Two-phase heat transfer",
      "IR thermography",
      "Thermal analysis",
    ],
    Experimental: [
      "DAQ integration",
      "Thermocouple instrumentation",
      "High-speed visualization",
      "Test setup development",
    ],
    Software: ["LabVIEW", "MATLAB", "Python", "Data analysis"],
    Modeling: ["CFD fundamentals", "Heat transfer simulation", "Post-processing"],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Your Name</h1>
            <p className="mt-2 text-base md:text-lg text-slate-600 max-w-2xl">
              Aerospace Engineering Master's student focused on thermal-fluid sciences,
              boiling heat transfer, experimental methods, and CFD-informed analysis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#projects" className="rounded-2xl bg-slate-900 px-4 py-2 text-white shadow-sm">Projects</a>
            <a href="#skills" className="rounded-2xl border border-slate-300 px-4 py-2 bg-white">Skills</a>
            <a href="#contact" className="rounded-2xl border border-slate-300 px-4 py-2 bg-white">Contact</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Engineering work centered on heat transfer, experiments, and modeling</h2>
            <p className="mt-4 text-slate-600 leading-7">
              I work on thermal-fluid engineering problems with an emphasis on boiling heat transfer,
              experimental system development, instrumentation, and computational analysis. My current work
              explores ways to improve thermal performance for high-heat-flux cooling applications through
              a combination of experiments, visualization, and modeling.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-slate-100 px-3 py-1">Thermal Engineering</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">CFD</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">LabVIEW</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Boiling Heat Transfer</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Focus</p>
            <ul className="mt-4 space-y-3 text-slate-700 leading-7">
              <li>Experimental thermal systems</li>
              <li>Pool boiling research</li>
              <li>Instrumentation and controls</li>
              <li>Simulation-supported analysis</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Selected Projects</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-6">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-slate-500 mt-1">{project.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="font-semibold">Problem</h4>
                    <p className="mt-2 text-slate-600 leading-7">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Approach</h4>
                    <ul className="mt-2 space-y-2 text-slate-600 leading-7 list-disc pl-5">
                      {project.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Results</h4>
                    <ul className="mt-2 space-y-2 text-slate-600 leading-7 list-disc pl-5">
                      {project.results.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-12 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Skills</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Technical Strengths</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Contact</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Let’s connect</h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-7">
            Replace this section with your email, LinkedIn, GitHub, and resume link.
            Keep it easy for recruiters and hiring managers to contact you quickly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-2xl bg-white/10 px-4 py-2">Email</span>
            <span className="rounded-2xl bg-white/10 px-4 py-2">LinkedIn</span>
            <span className="rounded-2xl bg-white/10 px-4 py-2">GitHub</span>
            <span className="rounded-2xl bg-white/10 px-4 py-2">Resume</span>
          </div>
        </section>
      </main>
    </div>
  );
}
