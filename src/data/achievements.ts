// Achievements Data
// TO CUSTOMIZE: Add your certifications, awards, and achievements

export interface Achievement {
    id: number;
    title: string;
    organization?: string;
    date?: string;
    description: string;
    type: 'award' | 'certification' | 'competition' | 'recognition';
    certificateImage?: string; // Add this for certificate/award images
    certificateLink?: string; // Optional: link to verify certificate
}

export const achievements: Achievement[] = [
    {
        id: 1,
        title: 'Information Systems Graduate',
        organization: 'Andalas University',
        date: '2025',
        description:
            "Successfully completed Bachelor's degree in Information Systems with strong focus on software development, system analysis, and database management.",
        type: 'recognition',
    },
    {
        id: 2,
        title: 'Hackathon Winner - 1st Place',
        organization:
            'Firetech x Google Developer Student Clubs Universitas Andalas',
        date: '2024',
        description:
            'Won 1st place in the Firetech x GDSC Andalas University Hackathon by developing an AI-powered travel planning web application that recommends destinations, schedules, and accommodations based on user preferences and weather forecasts.',
        type: 'competition',
        certificateImage: '/certificates/lea-legacy.jpg',
    },
    {
        id: 3,
        title: 'Silver Medal - MSU IREX Idea Regeneration Expo 2025',
        organization: 'Management and Science University (MSU)',
        date: '2025',
        description:
            'Awarded Silver Medal at the MSU IREX Idea Regeneration Expo 2025 organized by Management and Science University (MSU) for an innovative project in information system development.',
        type: 'award',
        certificateImage: '/certificates/irex.jpg',
    },
];
