import SectionContainer from '../components/SectionContainer';
import { skillsData } from '../data/skills';

const Skills = () => {
    const categoryColors: { [key: string]: string } = {
        'Backend & API Development': 'from-blue-50 to-blue-100 border-blue-200',
        'Frontend Development':
            'from-purple-50 to-purple-100 border-purple-200',
        'Database & Data Management':
            'from-green-50 to-green-100 border-green-200',
        'System Analysis & Design':
            'from-orange-50 to-orange-100 border-orange-200',
        'Tools & Technologies': 'from-gray-50 to-gray-100 border-gray-200',
    };

    const badgeColors: { [key: string]: string } = {
        'Backend & API Development':
            'bg-blue-100 text-blue-700 border-blue-300',
        'Frontend Development':
            'bg-purple-100 text-purple-700 border-purple-300',
        'Database & Data Management':
            'bg-green-100 text-green-700 border-green-300',
        'System Analysis & Design':
            'bg-orange-100 text-orange-700 border-orange-300',
        'Tools & Technologies': 'bg-gray-100 text-gray-700 border-gray-300',
    };

    return (
        <SectionContainer
            id="skills"
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with"
            className="bg-white"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((category, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-br ${
                            categoryColors[category.category]
                        } rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2`}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className={`px-3 py-1.5 ${
                                        badgeColors[category.category]
                                    } rounded-lg text-sm font-medium border hover:scale-105 transition-transform duration-200`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;
