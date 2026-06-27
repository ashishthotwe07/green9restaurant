import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-zinc-200">

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {/* Logo */}
                    <div className="text-center lg:text-left">

                        <h2 className="text-2xl font-bold text-black">
                            Green<span className="text-green-600">9</span>
                        </h2>

                        <p className="text-zinc-600 text-sm mt-1">
                            Restaurant & Bar • Wagholi, Pune
                        </p>

                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600">

                        <a
                            href="#about"
                            className="hover:text-green-600 transition"
                        >
                            About
                        </a>

                        <a
                            href="#menu"
                            className="hover:text-green-600 transition"
                        >
                            Menu
                        </a>

                        <a
                            href="#gallery"
                            className="hover:text-green-600 transition"
                        >
                            Gallery
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-green-600 transition"
                        >
                            Contact
                        </a>

                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">

                        <a
                            href="https://www.instagram.com/greeen9restaurant_bar"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-black hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="tel:7218700909"
                            className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-black hover:bg-green-600 hover:text-white hover:border-green-600 transition"
                        >
                            <FaPhoneAlt />
                        </a>

                    </div>

                </div>

                <div className="border-t border-zinc-200 mt-6 pt-4 text-center text-sm text-zinc-500">
                    © {new Date().getFullYear()} Green9 Restaurant & Bar. All Rights Reserved.
                </div>

            </div>

        </footer>
    );
};

export default Footer;