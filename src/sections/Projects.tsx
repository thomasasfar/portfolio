import SectionContainer from '../components/SectionContainer';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <SectionContainer
            id="projects"
            title="Featured Projects"
            subtitle="A selection of my recent work and contributions"
            className="bg-gray-50"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative"
                    >
                        {/* Featured Badge */}
                        {project.featured && (
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    ⭐ Featured
                                </span>
                            </div>
                        )}

                        {/* Project Thumbnail */}
                        {project.image && (
                            <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        )}

                        {/* Project Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            {/* Category Badge */}
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-3 w-fit">
                                {project.category}
                            </span>

                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mb-4">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Technologies
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* View Details Button */}
                            {/* {project.link && (
                                <a
                                    href={project.link}
                                    className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-sm group"
                                >
                                    View Details
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            )} */}
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
