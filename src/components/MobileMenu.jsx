
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const links = [
        ["Home", "#home"],
        ["About", "#about"],
        ["Projects", "#projects"],
        ["Contact", "#contact"],
    ];

    return (
        <div
            aria-hidden={!menuOpen}
            className={`
        fixed inset-0 z-40
        flex flex-col items-center justify-center
        bg-background
        transition-all duration-300 ease-in-out
        ${menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
            `}
        >
            <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-text-primary text-3xl hover:text-primary transition-colors"
                aria-label="Close Menu"
                tabIndex={menuOpen ? 0 : -1}
            >
                &times;
            </button>

            {links.map(([label, href], index) => (
                <a
                    key={label}
                    href={href}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`
            text-2xl font-semibold text-text-primary
            my-4 transform transition-all duration-300
            hover:text-primary
            ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }
            `}
                    style={{ transitionDelay: `${index * 70}ms` }}
                    onClick={() => setMenuOpen(false)}
                >
                    {label}
                </a>
            ))}
        </div>
    );
};
