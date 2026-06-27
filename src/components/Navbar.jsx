import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo1.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        "About",
        "Menu",
        "Gallery",
        "Events",
        "Reviews",
        "Contact",
    ];

    return (
        <>
            <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
                <div className="bg-white border border-zinc-200 rounded-full h-20 px-6 lg:px-10 flex items-center justify-between shadow-lg">

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Green9"
                            className="
                                w-12 h-12
                                lg:w-14 lg:h-14
                                object-contain
                                rounded-full
                                border border-green-500/40
                                bg-white
                                p-1
                            "
                        />

                        <div>
                            <h1 className="flex items-center font-black leading-none">
                                <span className="text-[28px] text-black">
                                    Green
                                </span>

                                <span className="text-[34px] text-green-600 ml-[2px]">
                                    9
                                </span>
                            </h1>

                            <p
                                className="
                                    text-[12px]
                                    uppercase
                                    tracking-[2px]
                                    text-zinc-600
                                    font-medium
                                    mt-1
                                "
                            >
                                Restaurant & Bar
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="
                                    relative
                                    text-sm
                                    uppercase
                                    tracking-wider
                                    text-zinc-700
                                    hover:text-green-600
                                    transition-all
                                    duration-300
                                    after:absolute
                                    after:left-0
                                    after:-bottom-2
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-green-600
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full
                                "
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-black text-3xl"
                    >
                        {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 ${
                    open
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setOpen(false)}
                />

                {/* Mobile Menu */}
                <div
                    className={`absolute top-0 right-0 h-screen w-[80%] max-w-sm bg-white border-l border-zinc-200 transition-transform duration-500 ${
                        open
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col justify-center items-center h-full gap-8">
                        {links.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                className="
                                    text-zinc-800
                                    text-xl
                                    uppercase
                                    tracking-widest
                                    hover:text-green-600
                                    transition
                                "
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}