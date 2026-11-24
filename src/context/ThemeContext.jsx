
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");

        return ["light", "dark", "system"].includes(savedTheme)
            ? savedTheme
            : "system";
    });

    const [resolvedTheme, setResolvedTheme] = useState(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        const root = document.documentElement;

        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const applyTheme = () => {
            const actualTheme =
                theme === "system"
                    ? mediaQuery.matches
                        ? "dark"
                        : "light"
                    : theme;

            setResolvedTheme(actualTheme);

            root.classList.toggle("dark", actualTheme === "dark");
        };

        applyTheme();

        if (theme === "system") {
            mediaQuery.addEventListener("change", applyTheme);

            return () => {
                mediaQuery.removeEventListener("change", applyTheme);
            };
        }
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                resolvedTheme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
};
