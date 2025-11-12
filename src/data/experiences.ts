// Professional Experience Data
// TO CUSTOMIZE: Update company names, roles, dates, and descriptions

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    highlights?: string[];
    certificateImage?: string; // Add certificate image path
    certificatePdf?: string;
    certificateLink?: string; // Optional: link to verify certificate
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: 'Fullstack Developer Intern',
        company: 'Dinas Komunikasi dan Informatika Provinsi Sumatera Barat',
        period: '2024',
        description:
            'Developed a fullstack website for the Lembaga Sertifikasi Organik (LSO) Sumatera Barat under Kominfo Sumbar, featuring both a public information portal and an admin dashboard for content management.',
        highlights: [
            'Designed and developed responsive web pages for the LSO information portal',
            'Implemented authentication and content management features within a single Laravel framework',
            'Built an admin panel to manage clients, services, and announcements efficiently',
            'Utilized PostgreSQL as the main database for reliable data storage',
            'Collaborated with the Kominfo team to ensure functionality and maintain government web standards',
        ],
        certificatePdf: '/certificates/kominfo-intern.pdf',
    },
    {
        id: 2,
        role: 'System Analyst Intern',
        company: 'PT Metro Indonesian Software',
        period: '2024',
        description:
            'Contributed to the design and analysis of Administration Information System (ADMIS) for hotels, focusing on system requirements and database architecture.',
        highlights: [
            'Designed functional requirements for hotel management modules',
            'Created database structures for HRIS and ADMIS systems',
            'Supported Front Office, Kitchen, Laundry, and staff monitoring features',
        ],
        certificatePdf: '/certificates/metro-intern.pdf',
    },
    {
        id: 3,
        role: 'Tracer Study Secretariat & Web Administrator',
        company: 'Universitas Andalas',
        period: '2023–2025',
        description:
            'Served as Tracer Study Secretariat and Web Administrator at Universitas Andalas, responsible for managing the tracer study web system and supporting data coordination across faculties and study programs.',
        highlights: [
            'Administered the university’s tracer study web platform for alumni data management',
            'Managed faculty and program user accounts and access permissions',
            'Configured and maintained questionnaire instruments for data collection',
            'Organized and updated website menus and content structure',
            'Managed and published articles and news on the tracer study portal',
            'Collaborated with faculty tracer representatives to ensure data accuracy and system reliability',
        ],
        certificatePdf: '/certificates/thl-ts.pdf',
    },

    // TO ADD MORE EXPERIENCES: Copy the structure above and add new entries below
];
