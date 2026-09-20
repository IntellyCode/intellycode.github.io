export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Much of the difficulty was in the robot rather than the code. Its SDK was poorly documented, and a fair amount of the machine's behavior had to be determined by running it and observing it rather than by reading what it was meant to do. He worked through that independently. Midway through, I saw the robot hit an obstacle and tip over, and asked what could be done. He suggested using the lidar already on the robot to stop it acting close to an obstacle, and implemented it within the week without the rest of the schedule slipping.",
    name: 'Edgar Lemaire',
    role: 'Founder & CEO, Durance AI',
  },
  {
    quote:
      'He began by reproducing the published model we were benchmarking against, matching its reported results to within about one percent, before building a new model that outperformed it. He worked largely independently. I gave him a broad problem, and he returned a scoped one, solved and well documented. The work he handed back was clear and checkable. I would be glad to work with him again.',
    name: 'Vitalii Kapranov',
    role: 'CTO, PowerIn Space UG',
  },
  {
    quote:
      'He is the kind of engineer who can take a loosely defined problem and turn it into a working system. The code he leaves behind is tested, documented, and structured so that others in the lab can build on it.',
    name: 'Antonis Savva, PhD',
    role: 'Research Associate, KIOS Research and Innovation Center of Excellence, University of Cyprus',
  },
]
