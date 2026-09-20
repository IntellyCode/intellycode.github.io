export type Project = {
  name: string
  tags: string[]
  description: string
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Autonomous Semantic Navigation',
    tags: ['Robotics', 'NLP'],
    description:
      'Lets an operator inspect a hazardous industrial site remotely. The whole system is driven by plain language: the operator tells it what he is looking for, and the system handles the rest, built on semantic navigation and an adaptive memory of the places it has seen.',
  },
  {
    name: 'Loaden RS',
    tags: ['Rust'],
    description:
      "Improved robot responsiveness in high-stakes situations. A Rust port of the Loaden runtime targeting edge devices with hardware accelerators, trading Python's flexibility for predictable low-latency execution and compile-time safety.",
    links: [{ label: 'GitHub', href: 'https://github.com/IntellyCode/loaden_rs' }],
  },
  {
    name: 'Thermal Spallation Simulation',
    tags: ['FEniCSx', 'Gmsh', 'Python'],
    description:
      'Cut down time spent on physical experiments by identifying laser parameter limits in simulation before any rock is touched. A finite element model of laser-induced thermal stress in rock, built with FEniCSx and Gmsh and validated against analytical solutions.',
    links: [{ label: 'GitHub', href: 'https://github.com/IntellyCode/thermal_spallation_simulation' }],
  },
  {
    name: 'Aerial Object Detection & Tracking',
    tags: ['Computer Vision'],
    description:
      'A real-time system that detects drones, tells them apart from birds, planes, and helicopters, and forecasts where each is heading. It beats the published state of the art, with the biggest gains on the small, distant drones.',
  },
  {
    name: 'RoboDash',
    tags: ['Flask', 'Socket.IO', 'React'],
    description:
      'Gives operators a single screen to monitor a live robot without needing terminal access or raw log files. Built as a full-stack dashboard that streams telemetry, camera feeds, and system logs in real time via a Flask/Socket.IO backend and React frontend.',
    links: [
      { label: 'Server', href: 'https://github.com/IntellyCode/robodash-server' },
      { label: 'Frontend', href: 'https://github.com/IntellyCode/robodash-frontend' },
    ],
  },
  {
    name: 'Autonomous Outreach Pipeline',
    tags: ['Python', 'Cloud'],
    description:
      'Cut the human time required to run targeted outreach campaigns to zero. A cloud-based system that accepts a high-level category instruction and operates end-to-end without intervention.',
  },
  {
    name: 'Political Risk Regime Switching',
    tags: ['Python', 'XGBoost', 'PyG'],
    description:
      'Built a system that made it systematic to detect whether political risk ratings are in structurally distinct states rather than relying on visual inspection or domain intuition. The pipeline implements statistical jump models, graph auto-encoders, and tuned classifiers on political risk time series.',
    links: [{ label: 'GitHub', href: 'https://github.com/IntellyCode/reidfo' }],
  },
  {
    name: 'NLP Franchising Pipeline',
    tags: ['Python', 'LDA', 'BERT'],
    description:
      'Built a system that made it tractable to synthesise patterns across ~600 academic papers that no human team could read in full in a reasonable timeframe. The pipeline runs end-to-end NLP analysis using LDA and BERT topic modelling with semantic cross-validation and visualisations.',
    links: [{ label: 'GitHub (LDA phase)', href: 'https://github.com/IntellyCode/nlp_of_franchising_papers' }],
  },
  {
    name: 'Loaden',
    tags: ['Python', 'ROS'],
    description:
      'Frees tradespeople from carrying loads on construction sites by automating the logistics entirely. Built as the core automation stack for an autonomous load-carrying robot, covering coordination logic, motion planning, and system-level control in Python and ROS.',
    links: [{ label: 'GitHub', href: 'https://github.com/IntellyCode/loaden_py' }],
  },
]
