export const metadata = {
  title: 'Projects',
  description: 'List of Projects',
}

type Project = {
  title: string
  date: string
  stack: string
  bullets: string[]
}

const projects: Project[] = [
  {
    title: 'Wifi Location Tracking System',
    date: 'October 2025 - April 2026',
    stack: 'Python Flask',
    bullets: [
      'Built a Wi-Fi RSSI localisation system using only a laptop and existing network infrastructure.',
      'Designed a PostgreSQL backend to persist scan sessions, containerised alongside the Flask application using Docker Compose.',
      'Built a Flask web interface with live floor plan visualisation and algorithm switching between Standard KNN, Weighted KNN, and Random Forest classifiers, with evaluation across accuracy metrics.',
      'Resolved an undocumented Windows Wi-Fi scan caching quirk through iterative testing and engineered a cache-busting fix.',
      'Validated system behaviour with a 30-test automated test suite.',
    ],
  },
  {
    title: 'Journalling Web Application',
    date: 'January – March 2024',
    stack: 'Django',
    bullets: [
      'Collaborated with a team of eight developers to create a Full Stack journaling web application using TDD.',
      'Integrated multimedia file support in the Django backend with Ckeditor, following Agile methodology with regular meetings and progress checks.',
      'Designed a responsive HTML/CSS frontend, implementing features like a Redis-powered daily reminder for journal entries.',
      'Added habit-building features, including gym tracking, study logs, expense tracking, and customisable templates, facilitating hundreds of users.',
    ],
  },
  {
    title: 'Evil Wordle Game',
    date: 'November 2023',
    stack: 'Scala',
    bullets: [
      'Developed an alternative implementation of the popular Wordle game, but with the hardest possible words to guess.',
      'Implemented key features such as reading the frequency of letters from files to ensure the most obscure are chosen.',
      'Strengthened knowledge on functional programming concepts and ensured all functions ran under 30 seconds.',
    ],
  },
  {
    title: 'Task Manager Web App',
    date: 'November 2023',
    stack: 'Django',
    bullets: [
      'Collaborated with a group of five to create a Django task managing application to manage projects and tasks for hundreds of users, whilst implementing an Agile methodology.',
      'Incorporated version control tools such as GitHub to manage branches and merge correctly.',
      'Consistently scheduled and took notes during weekly meetings whilst practicing the four foundational behaviours.',
      'Maintained effective weekly accountability sessions, requirements gathering, automated and coverage testing.',
    ],
  },
  {
    title: 'Shogun Game Simulation',
    date: 'November 2023',
    stack: 'Scala',
    bullets: [
      "Predicted the movement of different pieces on a Shogun board, as well as returning all dangerous positions for a given piece.",
      "Assigned different 'energies' for Pawns (1-4) and Kings (1-2), limiting their scope of travel.",
      'Increased understanding of fundamental functional programming concepts, and further developed logical problem solving skills.',
    ],
  },
  {
    title: 'Compiler',
    date: 'November 2023',
    stack: 'Scala',
    bullets: [
      'Created functions to compute, run and generate programs in the BF language.',
      'Developed a working compiler to precompute and eliminate any dead code from program inputs.',
      'Optimised inputs to work most efficiently on modern CPUs through encoding and replacement techniques.',
    ],
  },
  {
    title: 'Handwritten AI Digit Recognition',
    date: 'October 2023',
    stack: 'Python',
    bullets: [
      'Created a real-time handwritten digit recognition application, using Convolutional Neural Networks (CNNs) and the MNIST dataset.',
      'Engineered an intuitive GUI, enabling users to draw digits for immediate recognition, integrating the Keras deep learning library and Tkinter for GUI development.',
    ],
  },
  {
    title: 'API',
    date: 'September 2023',
    stack: 'Django',
    bullets: [
      'Developed a low-latency RESTful API for a note-taking web application, using Django.',
      'Implemented CRUD functionality for notes, enhancing user experience.',
      'Expedited the process to creating a robust and user-friendly web application back-end.',
    ],
  },
  {
    title: 'Cell Simulation',
    date: 'March 2023',
    stack: 'Java',
    bullets: [
      'Conducted a simulation project in Java involving multiple groups of cells over hundreds of generations.',
      'Included features such as non-determinism and symbiosis by incorporating different classes and conditions with associated probabilistic weights.',
      'Performed continuous testing to ensure functionality and specifications were met.',
    ],
  },
  {
    title: 'London Covid Data Viewer — Group Project',
    date: 'March 2023',
    stack: 'JavaFX',
    bullets: [
      'Collaborated with a team of four with an Agile methodology, working on specific panels of a GUI application displaying Covid data using JavaFX.',
      'Developed condition-dependent buttons that would switch between panels, as well as selectable drop-down boxes to incorporate a date range.',
      'Maintained effective collaboration and weekly communication, requirements gathering, and automated testing.',
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/70 hover:-translate-y-0.5">
      <div className="flex flex-col gap-1 mb-3">
        <h2 className="font-medium text-lg text-neutral-100">
          {project.title}
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
            {project.stack}
          </span>
          <span className="text-xs text-neutral-500">{project.date}</span>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-300">
        {project.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}