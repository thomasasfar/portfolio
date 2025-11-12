// Projects Data
// TO CUSTOMIZE: Update project details, tech stacks, and links

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    category: string;
    image?: string;
    link?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Apotek Iliran Farma',
        description:
            'Comprehensive pharmacy management system with integrated sales forecasting using Holt-Winters algorithm. Features include purchase and sales management, stock tracking, expiry date monitoring, and automatic demand forecasting for optimal inventory control.',
        techStack: [
            'Bun',
            'Hono',
            'React.js',
            'PostgreSQL',
            'FastAPI',
            'Holt-Winters',
        ],
        category: 'Full-Stack Web Application',
        featured: true,
        image: '/projects/siapo.png',
        link: '#',
    },
    {
        id: 2,
        title: 'LSO Sumatera Barat Website',
        description:
            'Professional company profile website featuring client portfolios, service listings, and a comprehensive admin panel for content management. Built with Laravel for robust backend functionality.',
        techStack: ['Laravel', 'PostgreSQL', 'PHP', 'Blade Templates'],
        category: 'Full-Stack Web Application',
        featured: false,
        image: '/projects/lso.png',
        link: '#',
    },
    // {
    //     id: 3,
    //     title: 'Kumpulin',
    //     description:
    //         'Collaborative task and assignment sharing platform designed for educational environments. Enables seamless submission management, file uploads, and assignment tracking with intuitive user experience.',
    //     techStack: ['Express.js', 'React.js', 'Node.js', 'MySQL'],
    //     category: 'Full-Stack Web Application',
    //     featured: true,
    //     link: '#',
    // },
    {
        id: 4,
        title: 'Boolea',
        description:
            'Laboratory service and inventory management system for LEA (Laboratory of Enterprise Application). Manages book lending, inventory tracking, and service requests with comprehensive admin controls.',
        techStack: ['Express.js', 'React.js', 'PostgreSQL', 'Node.js'],
        category: 'Full-Stack Web Application',
        featured: false,
        image: '/projects/boolea.png',
        link: '#',
    },
    {
        id: 5,
        title: 'GAFITO - Smart Parking System',
        description:
            'Innovative QR-based parking management application for campus environments. Consists of two apps: User app for parking reservations and Security app for entry/exit verification using QR scanning.',
        techStack: ['Jetpack Compose', 'Kotlin', 'MVVM', 'Android', 'Firebase'],
        category: 'Mobile Application',
        featured: true,
        image: '/projects/gafito1.png',
        link: '#',
    },
    {
        id: 6,
        title: 'ADMIS - Hotel Administration System',
        description:
            'Comprehensive administration information system for hotel management at PT Resong Cipta Mandiri. Supports Front Office operations, Kitchen management, Laundry services, and staff performance monitoring with integrated reporting.',
        techStack: [
            'System Analysis',
            'Database Design',
            'ERD',
            'Business Process',
            'UML',
        ],
        category: 'System Analysis & Design',
        featured: false,
        image: '/projects/admis.png',
        link: '#',
    },
    {
        id: 7,
        title: 'HRIS Functional Design',
        description:
            'Human Resource Information System functional requirements design. Focused on employee data management, monitoring features, and comprehensive HR workflow automation as part of system analyst role.',
        techStack: [
            'Requirements Analysis',
            'Functional Specifications',
            'UML',
            'System Design',
        ],
        category: 'System Analysis & Design',
        featured: false,
        image: '/projects/hris.png',
        link: '#',
    },
    {
        id: 8,
        title: 'Coffeenary Reservation System',
        description:
            'Detailed sequence diagram design for coffee shop reservation system. Focused on user interactions, booking workflows, and system integration patterns for seamless reservation experience.',
        techStack: [
            'Sequence Diagrams',
            'UML',
            'System Design',
            'Use Case Analysis',
        ],
        category: 'System Analysis & Design',
        featured: false,
        image: '/projects/coffeenary.png',
        link: '#',
    },
    // TO ADD MORE PROJECTS: Copy the structure above and add new entries below
];
