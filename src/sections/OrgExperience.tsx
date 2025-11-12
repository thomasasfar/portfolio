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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {orgExperiences.map((org) => (
          <div
            key={org.id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{org.role}</h3>
              <p className="text-primary-600 font-semibold text-lg mb-1">{org.organization}</p>
              <p className="text-gray-500 font-medium">{org.period}</p>
            </div>
            
            <p className="text-gray-600 mb-4">{org.description}</p>

            {org.highlights && (
              <ul className="space-y-2">
                {org.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OrgExperience;
