// Organizational Experience Data
// TO CUSTOMIZE: Update organizations, roles, dates, and descriptions

export interface OrgExperience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const orgExperiences: OrgExperience[] = [
  {
    id: 1,
    role: "Coordinator",
    organization: "Laboratory of Enterprise Application (LEA), Andalas University",
    period: "2024 - 2025",
    description: "Led and coordinated the laboratory assistant team, supporting academic programs and development initiatives.",
    highlights: [
      "Managed a team of laboratory assistants",
      "Coordinated practical sessions and student support",
      "Organized workshops and training programs",
      "Maintained laboratory resources and equipment"
    ]
  },
  {
    id: 2,
    role: "Co-Leader",
    organization: "Google Developer Student Clubs (GDSC) Andalas University",
    period: "2023 - 2024",
    description: "Organized technology events, workshops, and community programs to foster developer growth and collaboration.",
    highlights: [
      "Organized tech workshops and seminars",
      "Led community engagement initiatives",
      "Collaborated with Google Developer experts",
      "Mentored students in software development"
    ]
  },
  // TO ADD MORE ORGANIZATIONAL EXPERIENCES: Copy the structure above and add new entries below
];
