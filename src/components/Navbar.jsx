
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { resolvedTheme, toggleTheme } = useTheme();

    const isDark = resolvedTheme === "dark";

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[var(--navbar)] backdrop-blur-lg border-b border-border shadow-lg transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="font-mono text-xl font-bold text-text-primary"
                    >
                        mohanad{" "}
                        <span className="text-blue-500">hasan</span>
                    </a>

                    <div className="flex items-center gap-6">

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {[
                                ["Home", "#home"],
                                ["About", "#about"],
                                ["Projects", "#projects"],
                                ["Contact", "#contact"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="text-text-secondary hover:text-primary transition-colors"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                isDark ? "Switch to light mode" : "Switch to dark mode"
                            }
                            title={
                                isDark ? "Switch to light mode" : "Switch to dark mode"
                            }
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface cursor-pointer hover:bg-surface-secondary text-text-primary transition-all duration-300 hover:scale-105"
                        >
                            {isDark ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v2" />
                                    <path d="M12 20v2" />
                                    <path d="m4.93 4.93 1.42 1.42" />
                                    <path d="m17.65 17.65 1.42 1.42" />
                                    <path d="M2 12h2" />
                                    <path d="M20 12h2" />
                                    <path d="m6.35 17.65-1.42 1.42" />
                                    <path d="m19.07 4.93-1.42 1.42" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397Z" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="md:hidden text-text-primary text-2xl"
                        >
                            &#9776;
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    );
};
