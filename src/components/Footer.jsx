
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {/* Logo */}
                    <div className="text-center lg:text-left">

                        <h2 className="text-2xl font-bold text-white">
                            Green<span className="text-green-500">9</span>
                        </h2>

                        <p className="text-zinc-500 text-sm mt-1">
                            Restaurant & Bar • Wagholi, Pune
                        </p>

                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">

                        <a href="#about" className="hover:text-green-500 transition">
                            About
                        </a>

                        <a href="#menu" className="hover:text-green-500 transition">
                            Menu
                        </a>

                        <a href="#gallery" className="hover:text-green-500 transition">
                            Gallery
                        </a>

                        <a href="#contact" className="hover:text-green-500 transition">
                            Contact
                        </a>

                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">

                        <a
                            href="https://www.instagram.com/greeen9restaurant_bar"
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-600 transition"
                        >
                            <FaInstagram />
                        </a>

         

                        <a
                            href="tel:7218700909"
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-600 transition"
                        >
                            <FaPhoneAlt />
                        </a>

                    </div>

                </div>

                <div className="border-t border-white/10 mt-6 pt-4 text-center text-xs text-zinc-500">
                    © {new Date().getFullYear()} Green9 Restaurant & Bar. All Rights Reserved.
                </div>

            </div>

        </footer>
    );
};

export default Footer;

