import img1 from "../assets/img (3).jpeg";

const features = [
    { icon: "🍽", title: "Family Dining" },
    { icon: "🍹", title: "Premium Bar" },
    { icon: "🎉", title: "Events" },
    { icon: "🚗", title: "Parking" },
    { icon: "🍲", title: "Multi-Cuisine" },
    { icon: "⭐", title: "Quality Service" },
];

const Experience = () => {
    return (
        <section
            id="about"
            className="bg-[#0A0A0A] text-white py-10 lg:py-10 px-4 sm:px-6"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                {/* Image Side */}
                <div className="relative">
                    <img
                        src={img1}
                        alt="Green9 Restaurant & Bar"
                        className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-[24px] lg:rounded-[32px]"
                    />

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
                        <h3 className="text-2xl lg:text-3xl font-bold text-green-500">
                            5+
                        </h3>
                        <p className="text-xs lg:text-sm text-zinc-300">
                            Years Serving Customers
                        </p>
                    </div>
                </div>

                {/* Content Side */}
                <div>
                    <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs sm:text-sm tracking-[0.1em] mb-5">
                        ABOUT GREEN<span className="text-white text-lg">9</span> RESTAURANT & BAR
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Great Food, Great Drinks,
                        <span className="block text-green-500 mt-2">
                            Great Memories
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mt-6">
                        Green9 Restaurant & Bar is more than just a place to eat.
                        We bring together delicious cuisine, refreshing beverages,
                        and a welcoming atmosphere where friends and families create
                        unforgettable memories. Whether it's a casual dinner,
                        celebration, or special gathering, every visit is designed
                        to be enjoyable and memorable.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-green-500/40 hover:bg-white/[0.07] transition-all duration-300"
                            >
                                <div className="text-2xl mb-2">
                                    {feature.icon}
                                </div>

                                <p className="text-xs sm:text-sm font-medium text-zinc-200">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-white/10 text-center">

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-green-500">
                                1000+
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                                Happy Guests
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-green-500">
                                50+
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                                Signature Dishes
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-green-500">
                                4★
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                                Guest Experience
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;