/**
 * Mobilities (LTTAs and key meetings) data for the Activities roadmap and detail pages.
 * Assets are copied to public/mobilities/{slug}/ by scripts/rename-mobility-media.mjs.
 */

export type MobilitySectionText = { type: 'text'; content: string };
export type MobilitySectionMedia = {
  type: 'media';
  imageIndices?: number[];
  pdfIndices?: number[];
  videoIndices?: number[];
  pptIndices?: number[];
};
export type MobilitySection = MobilitySectionText | MobilitySectionMedia;

export type Mobility = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  host: string;
  country: string;
  shortDescription: string;
  longDescription: string;
  /** Optional: list of image paths (legacy / when no manifest) */
  images: string[];
  /** Optional: list of video URLs or paths (legacy) */
  videos: string[];
  /** Timeline dot style */
  variant: 'primary-dark' | 'primary' | 'accent';
  /** Optional: interleaved text + media sections for detail page (only for mobilities with assets) */
  sections?: MobilitySection[];
};

export const MOBILITIES: Mobility[] = [
  {
    slug: 'first-meeting',
    title: 'First Meeting',
    date: '2024-10',
    dateLabel: 'October 2024',
    host: 'All Partners',
    country: 'Online',
    shortDescription: 'Project launch and initial planning',
    longDescription:
      'The TSST project officially launched with a first meeting bringing together all partner organizations. This meeting established the project timeline, roles, and coordination mechanisms. Partners aligned on the Gantt chart, work package responsibilities, and communication channels for the 24-month collaboration.',
    images: [],
    videos: [],
    variant: 'primary-dark',
  },
  {
    slug: 'kickoff-macedonia',
    title: 'Kick-off Meeting in North Macedonia',
    date: '2025-02',
    dateLabel: 'February 2025',
    host: 'Xanadu Art',
    country: 'North Macedonia',
    shortDescription: 'In-person kick-off with partner presentations and MBAT introduction',
    longDescription:
      'Xanadu Art hosted the kick-off meeting in North Macedonia, bringing together all project partners. The meeting featured presentations from each organisation—including the AI-powered chatbot app (BYC/Ilhan), Bright Youth Community and Tackling Self-Stigma Together (Dilek), dance as a tool against self-stigmatisation, and Xanadu Art’s work. Workshops by Aleksandar and detailed reports and surveys rounded off the event.',
    images: [],
    videos: [],
    variant: 'primary',
    sections: [
      { type: 'text', content: 'The kick-off in North Macedonia brought all TSST partners together for the first in-person meeting. Below are photos from the event and key documents.' },
      { type: 'media', imageIndices: [0, 1, 2], pdfIndices: [0] },
      { type: 'text', content: 'Partner presentations included the AI-powered chatbot app (Ilhan, BYC), Bright Youth Community and Tackling Self-Stigma Together (Dilek), dance as a tool against self-stigmatisation, and Xanadu Art. Logos and branding materials were shared in the Key Documents.' },
      { type: 'media', imageIndices: [3, 4, 5], pdfIndices: [1, 2] },
      { type: 'text', content: 'Aleksandar’s workshop materials (Daniel, Mia, Olivia) and reports from the meeting are available below. You can view or download all presentations and the detailed report.' },
      { type: 'media', imageIndices: [6, 7, 8], pdfIndices: [3, 4, 5] },
    ],
  },
  {
    slug: 'sevilla-ltta',
    title: 'Sevilla Training Activity (LTTA)',
    date: '2025-08',
    dateLabel: 'August 2025',
    host: 'Sonríe a Europa',
    country: 'Spain',
    shortDescription: 'Turkish team activities: BYC Programme, Faces of the Inner World, and paper-based design',
    longDescription:
      'The Sevilla LTTA featured the Turkish team’s activities: the BYC Programme (presentation and PDF), Faces of the Inner World, and paper-based new feature design and print-out materials. These resources support the integration of creative and participatory methods in youth work.',
    images: [],
    videos: [],
    variant: 'primary',
    sections: [
      { type: 'text', content: 'The Sevilla Training Activity (LTTA) included sessions led by the Turkish team. Below you can find the BYC Programme presentation and supporting PDFs.' },
      { type: 'media', pptIndices: [0], pdfIndices: [0, 1] },
      { type: 'text', content: 'Faces of the Inner World and paper-based design materials are available for download, along with the group workshop and print-out resources.' },
      { type: 'media', pdfIndices: [2, 3, 4, 5, 6, 7] },
    ],
  },
  {
    slug: 'kickoff-curacao',
    title: 'Curaçao LTTA',
    date: '2025-11',
    dateLabel: 'November 2025',
    host: 'ASEAC',
    country: 'Curaçao',
    shortDescription: '3 days of activities facilitating active participation',
    longDescription:
      'ASEAC hosted the LTTA in Curaçao, with three days of activities designed to facilitate active participation of all project team members. The meeting strengthened cross-cultural collaboration and allowed partners to plan and share outcomes from the project.',
    images: [],
    videos: [],
    variant: 'primary',
  },
  {
    slug: 'virtual-mobility',
    title: 'Virtual Mobility (Virtual LTTA)',
    date: '2026-01',
    dateLabel: 'January 2026',
    host: 'All Partners',
    country: 'Online',
    shortDescription: 'Understanding AI: from basics to breakthroughs, and EmpowerMe URL',
    longDescription:
      'The virtual mobility (Virtual LTTA) brought partners together online for a session on “Understanding AI: from basics to breakthroughs”. The recording and screenshots document the session; the EmpowerMe URL resource is available for download.',
    images: [],
    videos: [],
    variant: 'primary',
    sections: [
      { type: 'text', content: 'The Virtual Mobility (Virtual LTTA) focused on understanding AI and its role in the project. Watch the presentation video and browse screenshots from the session.' },
      { type: 'media', videoIndices: [0], imageIndices: [0, 1, 2, 3] },
      { type: 'text', content: 'The EmpowerMe URL resource and additional screenshots from the meeting are available below.' },
      { type: 'media', pdfIndices: [0], imageIndices: [4, 5, 6, 7, 8] },
    ],
  },
];

export function getMobilityBySlug(slug: string): Mobility | undefined {
  return MOBILITIES.find((m) => m.slug === slug);
}

export function getAllMobilitySlugs(): string[] {
  return MOBILITIES.map((m) => m.slug);
}
