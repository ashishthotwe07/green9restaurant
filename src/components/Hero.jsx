import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/img (2).jpeg";

const Hero = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 lg:pt-28 pb-8 bg-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[450px] h-[430px] bg-green-200 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[450px] h-[430px] bg-green-100 blur-[180px]" />

            <div className="relative z-20 w-[95%] max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* CONTENT */}
                    <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">

                        <p className="text-green-600 tracking-[0.15em] text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-5">
                            Green
                            <span className="text-black text-xl sm:text-2xl">
                                9
                            </span>{" "}
                            Restaurant & Bar
                            <span className="text-zinc-400 mx-3 hidden md:inline">
                                |
                            </span>
                            <br className="block md:hidden" />
                            <span className="text-zinc-600">
                                Wagholi, Pune
                            </span>
                        </p>

                        <h1 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
                            Where Great Food
                            <span className="block text-green-600 mt-2">
                                Brings People Together
                            </span>
                        </h1>

                        <p className="text-zinc-600 text-sm sm:text-base md:text-lg mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Enjoy Delicious Food, Refreshing Beverages, and a
                            Welcoming Atmosphere, Perfect for Family Dinners,
                            Casual Outings, Celebrations, Birthdays, and
                            Memorable Moments with Loved Ones.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">

                            <button
                                type="button"
                                onClick={() => scrollToSection("menu")}
                                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition-all duration-300 px-7 py-4 rounded-full text-white font-medium flex items-center justify-center gap-3 shadow-lg"
                            >
                                Explore Menu
                                <FaArrowRight />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollToSection("contact")}
                                className="w-full sm:w-auto border border-zinc-300 hover:border-green-600 hover:text-green-600 transition-all duration-300 px-7 py-4 rounded-full text-zinc-900 font-medium bg-white"
                            >
                                Reserve Table
                            </button>

                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">

                            <span className="bg-white border border-zinc-200 shadow-sm px-4 py-2 rounded-full text-zinc-700 text-sm">
                                🍽 Multi-Cuisine Dining
                            </span>

                            <span className="bg-white border border-zinc-200 shadow-sm px-4 py-2 rounded-full text-zinc-700 text-sm">
                                👨‍👩‍👧 Family Friendly
                            </span>

                            <span className="bg-white border border-zinc-200 shadow-sm px-4 py-2 rounded-full text-zinc-700 text-sm">
                                🎉 Birthdays & Events
                            </span>

                        </div>

                    </div>

                    {/* IMAGE */}
                    <div className="relative order-1 lg:order-2 max-w-xl mx-auto lg:max-w-none w-full">

                        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[40px] h-[300px] sm:h-[420px] lg:h-[70vh] max-h-[700px] border border-zinc-200 shadow-2xl">

                            <img
                                src={heroImage}
                                alt="Green9 Restaurant & Bar"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        </div>

                        {/* Rating Card */}
                        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 backdrop-blur-xl bg-white/90 border border-zinc-200 p-4 md:p-5 rounded-2xl shadow-xl">

                            <p className="text-green-600 text-xs md:text-sm font-semibold">
                                ★ 4.0 Customer Rating
                            </p>

                            <h3 className="text-zinc-900 text-sm md:text-base font-medium mt-1">
                                Loved by Families & Friends
                            </h3>

                        </div>

                        {/* Badge */}
                        <div className="absolute top-4 right-4 md:top-8 md:right-8 backdrop-blur-xl bg-white/90 border border-zinc-200 px-4 py-3 rounded-full shadow-lg">

                            <span className="text-green-600 text-xs md:text-sm font-semibold">
                                Family Dining • Events
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;