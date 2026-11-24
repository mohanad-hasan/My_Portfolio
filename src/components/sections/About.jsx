
import { RevealOnScroll } from "../RevealOnScroll";

import {
    Code2,
    BriefcaseBusiness,
    GraduationCap,
    Monitor,
    Brain,
    Plug,
    Wrench,
    MapPin,
    CalendarDays,
    Building2,
    BookOpen,
    ChevronRight,
} from "lucide-react";

export const About = () => {
    const skillGroups = [
        {
            title: "Frontend Development",
            icon: Monitor,
            skills: [
                "HTML5", "CSS3", "JavaScript", "TypeScript",
                "React.js", "Next.js", "Tailwind CSS",
                "Bootstrap", "Material UI", "Sass",
            ],
        },
        {
            title: "Programming & Computer Science",
            icon: Brain,
            skills: [
                "C++", "Java", "Python", "OOP",
                "Data Structures", "Algorithms",
                "Problem Solving", "SOLID Principles",
                "Design Patterns",
            ],
        },
        {
            title: "API & AI Integration",
            icon: Plug,
            skills: [
                "RESTful APIs", "Axios",
                "API Integration", "AI Model Integration",
            ],
        },
        {
            title: "Tools & Workflow",
            icon: Wrench,
            skills: [
                "Git", "GitHub", "Vercel",
                "Responsive Design", "Reusable Components",
                "Version Control",
            ],
        },
    ];

    const experiences = [
        {
            role: "Frontend Developer",
            company: "Freelance / Self-Employed",
            location: "Latakia, Syria",
            period: "April 2025 – Present",
            description: [
                "Developing modern, responsive, and user-friendly web applications using React.js and Next.js.",
                "Building reusable and maintainable UI components.",
                "Implementing interactive interfaces using JavaScript and TypeScript.",
                "Working with Tailwind CSS, Bootstrap, Material UI, and Sass.",
                "Integrating RESTful APIs using Axios.",
                "Managing projects with Git and GitHub and deploying applications using Vercel.",
            ],
        },
        {
            role: "Private Programming Tutor",
            company: "Self-Employed",
            location: "Latakia, Syria",
            period: "January 2023 – Present",
            description: [
                "Teaching programming fundamentals using C++, Java, and Python.",
                "Explaining Object-Oriented Programming (OOP) concepts and principles.",
                "Teaching data structures, algorithms, and problem-solving techniques.",
                "Guiding students through practical programming exercises and projects.",
            ],
        },
    ];

    const education = [
        {
            degree: "Bachelor's Degree in Informatics Engineering",
            university: "Latakia University",
            specialization: "Software Engineering and Information Systems",
            period: "October 2021 – August 2026",
            location: "Latakia, Syria",
            description:
                "Completed a degree in Informatics Engineering with a focus on software engineering and information systems, building a strong foundation in programming, algorithms, data structures, and software development.",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 w-full">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    {/* Main Container */}
                    <div className="rounded-xl p-6 md:p-8 border border-border bg-surface shadow-[var(--shadow)] hover:-translate-y-1 transition-all duration-300">

                        {/* Introduction */}
                        <div className="mb-12">
                            <p className="text-text-secondary leading-relaxed">
                                I'm a Frontend Developer with a Bachelor's degree
                                in Informatics Engineering and a strong interest
                                in building modern, responsive, and user-friendly
                                web applications. I specialize in React.js and
                                Next.js, with experience in JavaScript, TypeScript,
                                and modern frontend technologies.

                                I enjoy turning ideas into practical digital
                                experiences, writing clean and maintainable code,
                                and building reusable components. Alongside my
                                development journey, I have experience teaching
                                programming fundamentals, which has strengthened
                                my problem-solving and communication skills.

                                I'm always eager to learn new technologies,
                                improve my skills, and contribute to meaningful
                                projects.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="mb-14">
                            <div className="flex items-center gap-3 mb-7">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <Code2 className="text-blue-500" size={24} />
                                </div>

                                <h3 className="text-2xl font-semibold text-text-primary">
                                    Skills
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {skillGroups.map((group) => {
                                    const Icon = group.icon;

                                    return (
                                        <div
                                            key={group.title}
                                            className="rounded-xl p-5 border border-border bg-surface-secondary hover:border-blue-500/40 hover:bg-blue-500/5 hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <Icon size={20} className="text-cyan-500" />

                                                <h4 className="font-semibold text-text-primary">
                                                    {group.title}
                                                </h4>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-text-secondary border border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-500 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="mb-14">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <BriefcaseBusiness className="text-blue-500" size={24} />
                                </div>

                                <h3 className="text-2xl font-semibold text-text-primary">
                                    Experience
                                </h3>
                            </div>

                            <div className="relative ml-3 border-l-2 border-blue-500/30 space-y-10">
                                {experiences.map((experience) => (
                                    <div
                                        key={experience.role}
                                        className="relative pl-7 md:pl-9"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-background shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

                                        <div className="rounded-xl p-5 md:p-6 border border-border bg-surface-secondary hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300">

                                            <div className="flex flex-col gap-3 mb-5">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

                                                    <div>
                                                        <h4 className="text-lg font-semibold text-blue-500">
                                                            {experience.role}
                                                        </h4>

                                                        <p className="text-text-primary mt-1">
                                                            {experience.company}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 rounded-lg px-3 py-2 w-fit">
                                                        <CalendarDays size={15} />
                                                        {experience.period}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                                    <MapPin size={15} />
                                                    {experience.location}
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {experience.description.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                                                    >
                                                        <ChevronRight
                                                            size={16}
                                                            className="text-cyan-500 shrink-0 mt-0.5"
                                                        />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <GraduationCap className="text-blue-500" size={24} />
                                </div>

                                <h3 className="text-2xl font-semibold text-text-primary">
                                    Education
                                </h3>
                            </div>

                            <div className="relative ml-3 border-l-2 border-blue-500/30">
                                {education.map((item) => (
                                    <div
                                        key={item.degree}
                                        className="relative pl-7 md:pl-9"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-background shadow-[0_0_12px_rgba(34,211,238,0.5)]" />

                                        <div className="rounded-xl p-5 md:p-6 border border-border bg-surface-secondary hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300">

                                            <div className="flex flex-col gap-3 mb-5">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

                                                    <div>
                                                        <h4 className="text-lg font-semibold text-blue-500">
                                                            {item.degree}
                                                        </h4>

                                                        <p className="text-text-primary mt-2 flex items-center gap-2">
                                                            <Building2 size={16} className="text-cyan-500" />
                                                            {item.university}
                                                        </p>

                                                        <p className="text-sm text-text-secondary mt-2 flex items-center gap-2">
                                                            <BookOpen size={15} />
                                                            {item.specialization}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 rounded-lg px-3 py-2 w-fit">
                                                        <CalendarDays size={15} />
                                                        {item.period}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                                    <MapPin size={15} />
                                                    {item.location}
                                                </div>
                                            </div>

                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
