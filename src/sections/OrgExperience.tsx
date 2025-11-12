import SectionContainer from '../components/SectionContainer';
import { orgExperiences } from '../data/orgExperiences';

const OrgExperience = () => {
    return (
        <SectionContainer
            id="org-experience"
            title="Organizational Experience"
            subtitle="Leadership and community involvement"
            className="bg-gray-50"
        >
            <div className="max-w-5xl mx-auto">
                {/* Timeline container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400"></div>

                    {/* Experience items */}
                    <div className="space-y-12">
                        {orgExperiences.map((org, index) => (
                            <div
                                key={org.id}
                                className="relative pl-20 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-5 top-2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-white"></div>
                                </div>

                                {/* Content card */}
                                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 group">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {org.role}
                                            </h3>
                                            <p className="text-blue-600 font-semibold">
                                                {org.organization}
                                            </p>
                                        </div>
                                        <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                                            {org.period}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {org.description}
                                    </p>

                                    {/* Highlights */}
                                    {org.highlights && (
                                        <div className="space-y-2">
                                            {org.highlights.map(
                                                (highlight, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="text-gray-600 text-sm">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default OrgExperience;
