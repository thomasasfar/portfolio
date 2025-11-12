// Skills Data
// TO CUSTOMIZE: Add or remove skills in each category

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Backend & API Development",
    skills: [
      "Bun",
      "Hono",
      "Express.js",
      "Laravel",
      "FastAPI",
      "RESTful API",
      "API Design"
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Principles"
    ]
  },
  {
    category: "Database & Data Management",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "ERD Modeling",
      "SQL Optimization",
      "Data Modeling"
    ]
  },
  {
    category: "System Analysis & Design",
    skills: [
      "Requirements Analysis",
      "UML Diagrams",
      "Use Case Design",
      "Sequence Diagrams",
      "Business Process Modeling",
      "Functional Specifications",
      "System Architecture"
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Linux",
      "Jetpack Compose"
    ]
  },
  // TO ADD MORE SKILL CATEGORIES: Copy the structure above and add new entries below
];
