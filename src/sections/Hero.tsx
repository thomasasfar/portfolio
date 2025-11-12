import Button from '../components/Button';

// TO CUSTOMIZE: Update name, title, summary, and profile image

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="about"
            className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Animated greeting */}
                        <div className="mb-6 animate-fade-in-up">
                            <p className="text-blue-600 font-semibold text-lg mb-2">
                                Hello, I'm
                            </p>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-100">
                                Thomas Nobel Asfar
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6 animate-fade-in-up animation-delay-200">
                                Information Systems Graduate | Backend & System
                                Analyst | Web Developer
                            </h2>
                        </div>

                        {/* Animated description */}
                        <div className="mb-8 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-300">
                            <p className="mb-4">
                                Fresh graduate with a Bachelor's degree in
                                Information Systems from Andalas University.
                                Passionate about building robust backend
                                systems, designing scalable architectures, and
                                creating efficient web applications.
                            </p>
                            <p className="mb-4">
                                Experienced in modern backend technologies
                                including{' '}
                                <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    Bun, Hono, Express.js, and Laravel
                                </span>
                                , with strong skills in{' '}
                                <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    React.js
                                </span>{' '}
                                for frontend development. Proficient in database
                                design with{' '}
                                <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    PostgreSQL and MySQL
                                </span>
                                .
                            </p>
                            <p>
                                Proven track record delivering real-world
                                projects including an advanced pharmacy
                                management system with sales forecasting, HRIS
                                functional design, hotel administration systems,
                                and various web applications. Strong foundation
                                in system analysis, requirements gathering, and
                                UML modeling.
                            </p>
                        </div>

                        {/* CTA Buttons with animation */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                            <Button
                                onClick={() => scrollToSection('#projects')}
                                className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => scrollToSection('#contact')}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Profile Image with animation */}
                    <div className="flex-shrink-0 animate-fade-in-right animation-delay-200">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl transform hover:scale-105 transition-transform duration-500 relative group">
                            {/* Animated ring */}
                            <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-ping opacity-20"></div>

                            {/* Profile Image */}
                            <img
                                src="/pasphotobiru.jpeg"
                                alt="Thomas Nobel Asfar"
                                className="w-full h-full object-cover relative z-10"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
