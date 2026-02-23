/**
 * Mobilities (LTTAs and key meetings) data for the Activities roadmap and detail pages.
 * Add image and video paths to the arrays as media becomes available.
 */
export type Mobility = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  host: string;
  country: string;
  shortDescription: string;
  longDescription: string;
  /** Optional: list of image paths under /images/mobilities/ or similar */
  images: string[];
  /** Optional: list of video URLs or paths */
  videos: string[];
  /** Timeline dot style */
  variant: 'primary-dark' | 'primary' | 'accent';
};

export const MOBILITIES: Mobility[] = [
  {
    slug: 'online-kickoff',
    title: 'Online Kick-off Meeting',
    date: '2024-10',
    dateLabel: 'October 2024',
    host: 'All Partners',
    country: 'Online',
    shortDescription: 'Project launch and initial planning',
    longDescription:
      'The TSST project officially launched with an online kick-off meeting bringing together all partner organizations. This meeting established the project timeline, roles, and coordination mechanisms. Partners aligned on the Gantt chart, work package responsibilities, and communication channels for the 24-month collaboration.',
    images: [],
    videos: [],
    variant: 'primary-dark',
  },
  {
    slug: 'kickoff-curacao',
    title: 'Kick-off in Curaçao',
    date: '2025-01',
    dateLabel: 'January 2025',
    host: 'ASEAC',
    country: 'Curaçao',
    shortDescription: '3 days of activities facilitating active participation',
    longDescription:
      'ASEAC hosted the in-person kick-off meeting in Curaçao, with three days of activities designed to facilitate active participation of all project team members. The meeting strengthened cross-cultural collaboration and allowed partners to plan the upcoming Learning, Teaching and Training Activities (LTTAs) and work package delivery.',
    images: [],
    videos: [],
    variant: 'primary',
  },
  {
    slug: 'ltta1-north-macedonia',
    title: '1st LTTA in North Macedonia',
    date: '2025-06',
    dateLabel: 'June 2025',
    host: 'Xanadu Art',
    country: 'North Macedonia',
    shortDescription: 'MBAT workshops and mindfulness-based art therapy training',
    longDescription:
      'Xanadu Art hosted the first Learning, Teaching and Training Activity (LTTA) in North Macedonia. Youth workers participated in Mindfulness-Based Art Therapy (MBAT) workshops, combining art therapy and mindfulness techniques. The training supported participants in building self-care strategies and addressing self-stigma through creative and reflective practices.',
    images: [],
    videos: [],
    variant: 'primary',
  },
  {
    slug: 'ltta2-spain',
    title: '2nd LTTA in Spain',
    date: '2025-09',
    dateLabel: 'September 2025',
    host: 'Sonríe a Europa',
    country: 'Spain',
    shortDescription: 'ACT workshops with support from Giralda Psychotherapy Center',
    longDescription:
      'Sonríe a Europa hosted the second LTTA in Spain, with a focus on Acceptance and Commitment Therapy (ACT). Workshops were delivered with support from the Giralda Psychotherapy Center, offering youth workers practical tools for psychological flexibility and values-based action. The activity included drama and group work alongside formal ACT sessions.',
    images: [],
    videos: [],
    variant: 'primary',
  },
  {
    slug: 'final-report',
    title: 'Final Report & Project Completion',
    date: '2026-09',
    dateLabel: 'September 2026',
    host: 'All Partners',
    country: 'EU',
    shortDescription: 'Evaluation results and long-term dissemination planning',
    longDescription:
      'The project concludes with final reporting and evaluation. Results from SSDS pre/post tests, Kahoot activities, and semi-structured interviews are consolidated. Partners plan long-term dissemination and ensure the AI application and project outputs remain accessible for at least two years after the project end.',
    images: [],
    videos: [],
    variant: 'accent',
  },
];

export function getMobilityBySlug(slug: string): Mobility | undefined {
  return MOBILITIES.find((m) => m.slug === slug);
}

export function getAllMobilitySlugs(): string[] {
  return MOBILITIES.map((m) => m.slug);
}
