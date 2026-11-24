
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "LapGenius",
        category: "Graduation Project",
        description:
            "An intelligent laptop marketplace that combines e-commerce with AI-powered laptop recommendations and price estimation. Includes customer, seller, and admin dashboards, messaging, notifications, and multiple payment methods.",
        image: "/images/projects/lapgenius.png",
        technologies: [
            "React",
            "JavaScript",
            "Laravel",
            "Tailwind CSS",
            "MySQL",
            "AI",
        ],
        liveDemo: "https://lap-genius.vercel.app/",
        github: "https://github.com/mohanad-hasan/LapGenius",
        featured: true,
    },
    {
        title: "Prayer Times",
        category: "Web Application",
        description:
            "A modern Islamic prayer times application displaying the five daily prayers, a live countdown to the next prayer, and city selection in an elegant responsive interface.",
        image: "/images/projects/prayer-times.png",
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "Material UI",
            "CSS3",
        ],
        liveDemo: "https://prayertimes-brown.vercel.app/",
        github: "https://github.com/mohanad-hasan/Prayer_Times",
    },
    {
        title: "Weather App",
        category: "Web Application",
        description:
            "A responsive weather application that fetches real-time weather data using OpenWeatherMap API. Displays temperature, weather conditions, minimum and maximum temperatures, and live date and time.",
        image: "/images/projects/weather-app.png",
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "Material UI",
            "Axios",
            "Moment.js",
            "REST API",
        ],
        liveDemo: "https://weatherapp-drab-five.vercel.app/",
        github: "https://github.com/mohanad-hasan/Weather_App",
    },
    {
        title: "Todo List",
        category: "React Practice Project",
        description:
            "A simple and intuitive task management application that allows users to add tasks, mark them as completed, and delete them. Built to practice React components, state management, and event handling.",
        image: "/images/projects/todo-list.png",
        technologies: [
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
        ],
        liveDemo: "https://todolist-team-genius.vercel.app/",
        github: "https://github.com/mohanad-hasan/Todo_List",
    },
];

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4 w-full">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>

                        <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            A selection of projects I've built to explore
                            modern web technologies, solve problems, and
                            continuously improve my development skills.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow)] hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(59,130,246,0.12)] transition-all duration-300"
                            >

                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden bg-surface-secondary">

                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4">
                                            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/90 text-white shadow-lg">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="flex flex-col flex-grow p-6">

                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-cyan-500 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm leading-7 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-7">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10 py-1.5 px-3 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border">

                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
                                        >
                                            Live Demo
                                            <span aria-hidden="true">↗</span>
                                        </a>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm font-semibold hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
                                        >
                                            GitHub
                                            <span aria-hidden="true">↗</span>
                                        </a>

                                    </div>
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
