import SectionContainer from '../components/SectionContainer';
import { achievements } from '../data/achievements';
import { useState } from 'react';

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<
        string | null
    >(null);

    const getIcon = (type: string) => {
        switch (type) {
            case 'award':
                return (
                    <svg
                        className="w-8 h-8 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            case 'certification':
                return (
                    <svg
                        className="w-8 h-8 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            case 'competition':
                return (
                    <svg
                        className="w-8 h-8 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            default:
                return (
                    <svg
                        className="w-8 h-8 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
        }
    };

    return (
        <>
            <SectionContainer
                id="achievements"
                title="Achievements & Recognition"
                subtitle="Milestones and accomplishments"
                className="bg-white"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="flex items-start mb-4">
                                <div className="mr-4 flex-shrink-0">
                                    {getIcon(achievement.type)}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {achievement.title}
                                    </h3>
                                    {achievement.organization && (
                                        <p className="text-blue-600 font-semibold text-sm mb-1">
                                            {achievement.organization}
                                        </p>
                                    )}
                                    {achievement.date && (
                                        <p className="text-gray-500 text-sm">
                                            {achievement.date}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                                {achievement.description}
                            </p>

                            {/* Certificate Button */}
                            {achievement.certificateImage && (
                                <button
                                    onClick={() =>
                                        setSelectedCertificate(
                                            achievement.certificateImage!
                                        )
                                    }
                                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
                                >
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                    View Certificate
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="relative max-w-5xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute top-3 right-3 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors shadow-lg"
                            aria-label="Close"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="p-4 overflow-auto max-h-[90vh]">
                            <img
                                src={selectedCertificate}
                                alt="Certificate"
                                className="max-w-full max-h-[85vh] w-auto h-auto mx-auto rounded-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Achievements;
