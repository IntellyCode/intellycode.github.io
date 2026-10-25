export type Engagement = {
  icon: string
  symptom: string
  name: string
  description: string
  terms: string
  price?: string
}

export const engagements: Engagement[] = [
  {
    icon: 'stopwatch',
    symptom: 'It sees but reacts too late.',
    name: 'Edge latency audit',
    description:
      'A written analysis of your full codebase: why the robot is too slow, and what to do about it, ranked by impact.',
    terms: 'Fixed scope · 1 week',
    price: 'EUR 2,000',
  },
  {
    icon: 'eye',
    symptom: "It can't find what matters.",
    name: 'Perception-failure diagnosis',
    description:
      'A written analysis of your perception pipeline: the technologies in use, a classification of what is failing, and recommended fixes with estimated improvements.',
    terms: 'Fixed scope · 1 week',
    price: 'EUR 2,000',
  },
  {
    icon: 'chat-text',
    symptom: 'Something else is failing.',
    name: 'Set up a 30-minute call',
    description: 'A conversation about what is failing, where the problem most likely sits, and which next step fits.',
    terms: 'Arranged by email',
  },
]
