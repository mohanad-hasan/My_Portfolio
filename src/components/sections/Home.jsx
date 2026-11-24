
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 pb-16"
        >
            <RevealOnScroll>

                {/* Background Effects */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Main Container */}
                <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm text-blue-500 dark:text-blue-400 mb-7">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Frontend Developer
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                            Hi, I'm Mohanad Hasan
                        </h1>

                        {/* Introduction Title */}
                        <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-text-primary mb-5 leading-relaxed">
                            Building Modern & Responsive Web Experiences
                        </h2>

                        {/* Introduction */}
                        <p className="text-text-secondary text-sm sm:text-base lg:text-lg mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I'm a Frontend Developer specializing in React.js and Next.js,
                            with a background in Informatics Engineering. I enjoy transforming
                            ideas into clean, responsive, and user-friendly web applications
                            while continuously exploring new technologies and improving my skills.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-9">

                            <a
                                href="#projects"
                                className="group w-full sm:w-auto flex justify-center items-center gap-2 bg-blue-500 text-white py-3 px-7 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                            >
                                View My Projects

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:translate-x-1 transition-transform"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="w-full sm:w-auto flex justify-center items-center gap-2 border border-blue-500/50 text-blue-500 dark:text-blue-400 py-3 px-7 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start items-center gap-6">

                            {/* GitHub */}
                            <a
                                href="https://github.com/mohanad-hasan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                title="GitHub"
                                className="text-text-secondary hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mohanad-hasan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                                className="text-text-secondary hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-full max-w-[300px] sm:max-w-[390px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[540px]">

                            <div className="absolute inset-10 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />

                            <img
                                src="/images/profile.png"
                                alt="Mohanad Hasan - Frontend Developer"
                                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(0,140,255,0.15)] animate-[float_5s_ease-in-out_infinite]"
                                loading="eager"
                                fetchPriority="high"
                            />

                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};
