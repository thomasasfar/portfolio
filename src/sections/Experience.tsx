import SectionContainer from '../components/SectionContainer';
import { experiences } from '../data/experiences';
import { useState } from 'react';

const Experience = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<
        string | null
    >(null);
    const [isPdf, setIsPdf] = useState(false);

    const handleViewCertificate = (certImage?: string, certPdf?: string) => {
        if (certPdf) {
            // Open PDF in new tab
            window.open(certPdf, '_blank');
        } else if (certImage) {
            // Show image in modal
            setSelectedCertificate(certImage);
            setIsPdf(false);
        }
    };

    return (
        <>
            <SectionContainer
                id="experience"
                title="Professional Experience"
                subtitle="My journey in the tech industry"
                className="bg-white"
            >
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative pl-8 pb-12 ${
                                index !== experiences.length - 1
                                    ? 'border-l-2 border-blue-200'
                                    : ''
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>

                            {/* Content Card */}
                            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {exp.role}
                                    </h3>
                                    <span className="text-blue-600 font-semibold mt-1 md:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-700 font-medium mb-3">
                                    {exp.company}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    {exp.description}
                                </p>

                                {exp.highlights && (
                                    <ul className="space-y-2 mb-4">
                                        {exp.highlights.map(
                                            (highlight, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-600">
                                                        {highlight}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}

                                {/* Certificate Button */}
                                {(exp.certificateImage ||
                                    exp.certificatePdf) && (
                                    <button
                                        onClick={() =>
                                            handleViewCertificate(
                                                exp.certificateImage,
                                                exp.certificatePdf
                                            )
                                        }
                                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors mt-2 cursor-pointer"
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
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        View Certificate{' '}
                                        {exp.certificatePdf && '(PDF)'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Certificate Modal - Only for Images */}
            {selectedCertificate && !isPdf && (
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

export default Experience;
