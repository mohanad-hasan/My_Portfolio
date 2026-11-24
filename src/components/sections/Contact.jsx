
import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null);

    // Automatically hide success/error messages
    useEffect(() => {
        if (!status) return;

        const timer = setTimeout(() => {
            setStatus(null);
        }, 5000);

        return () => clearTimeout(timer);
    }, [status]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        const fieldName = {
            from_name: "name",
            from_email: "email",
            message: "message",
        };

        setFormData((prev) => ({
            ...prev,
            [fieldName[name]]: value,
        }));

        if (status) {
            setStatus(null);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setStatus(null);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.currentTarget,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            );

            setStatus({
                type: "success",
                title: "Message Sent Successfully!",
                message:
                    "Thank you for reaching out. I've received your message and will get back to you as soon as possible.",
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);

            setStatus({
                type: "error",
                title: "Something Went Wrong!",
                message:
                    "Your message couldn't be sent. Please check your connection and try again.",
            });
        } finally {
            setIsSending(false);
        }
    };

    const inputClasses = `
    w-full bg-surface-secondary border border-border
    rounded-lg px-4 py-4 text-text-primary
    placeholder:text-text-secondary
    transition-all duration-300
    focus:outline-none focus:border-blue-500
    focus:bg-blue-500/5
    focus:shadow-[0_0_12px_rgba(59,130,246,0.15)]
    disabled:opacity-50
  `;

    return (
        <section
            id="contact"
            className="min-h-screen flex justify-center items-center py-20 px-4"
        >
            <RevealOnScroll>
                <div className="w-full max-w-xl mx-auto">

                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <p className="text-text-secondary text-center mb-10 text-sm md:text-base">
                        Have a project in mind or just want to say hello?
                        Feel free to send me a message!
                    </p>

                    {/* Contact Form */}
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >

                        {/* Name Input */}
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                autoComplete="name"
                                minLength={2}
                                maxLength={100}
                                required
                                disabled={isSending}
                                className={inputClasses}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                autoComplete="email"
                                maxLength={254}
                                required
                                disabled={isSending}
                                className={inputClasses}
                            />
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={6}
                                minLength={10}
                                maxLength={3000}
                                required
                                disabled={isSending}
                                className={`${inputClasses} resize-y`}
                            />

                            <p className="text-text-secondary text-xs text-right mt-2">
                                {formData.message.length}/3000
                            </p>
                        </div>

                        {/* Success / Error Message */}
                        {status && (
                            <div
                                role={status.type === "error" ? "alert" : "status"}
                                aria-live="polite"
                                className={`
                                flex items-start gap-3 p-4 rounded-lg border
                                animate-[fadeIn_0.3s_ease-in-out]
                                ${status.type === "success"
                                    ? "bg-green-500/10 border-green-500/30"
                                    : "bg-red-500/10 border-red-500/30"
                                }
                                `}
                            >

                                {/* Status Icon */}
                                <div className="shrink-0 mt-0.5">
                                    {status.type === "success" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-green-500"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <path d="m9 11 3 3L22 4" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-red-500"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="m15 9-6 6" />
                                            <path d="m9 9 6 6" />
                                        </svg>
                                    )}
                                </div>

                                {/* Status Text */}
                                <div className="flex-1">
                                    <h3
                                        className={`font-semibold mb-1 ${status.type === "success"
                                                ? "text-green-600 dark:text-green-400"
                                                : "text-red-600 dark:text-red-400"
                                            }`}
                                    >
                                        {status.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {status.message}
                                    </p>
                                </div>

                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={() => setStatus(null)}
                                    aria-label="Close notification"
                                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className="
                w-full flex items-center justify-center gap-3
                bg-blue-500 text-white py-4 px-6 rounded-lg
                cursor-pointer font-semibold
                transition-all duration-300
                hover:bg-blue-600 hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                active:scale-[0.98]
                disabled:opacity-60 disabled:cursor-not-allowed
                disabled:hover:translate-y-0
                disabled:hover:shadow-none
                "
                        >
                            {isSending ? (
                                <>
                                    <svg
                                        className="animate-spin w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />

                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        />
                                    </svg>

                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 transition-transform duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                    </svg>
                                </>
                            )}
                        </button>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
