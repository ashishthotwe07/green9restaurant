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
            className="bg-white py-16 lg:py-20 px-4 sm:px-6"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                {/* Image Side */}
                <div className="relative">

                    <img
                        src={img1}
                        alt="Green9 Restaurant & Bar"
                        className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-[24px] lg:rounded-[32px] shadow-2xl border border-zinc-200"
                    />

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white/90 backdrop-blur-xl border border-zinc-200 rounded-2xl px-5 py-3 shadow-xl">

                        <h3 className="text-2xl lg:text-3xl font-bold text-green-600">
                            5+
                        </h3>

                        <p className="text-xs lg:text-sm text-zinc-600">
                            Years Serving Customers
                        </p>

                    </div>

                </div>

                {/* Content Side */}
                <div>

                    <span className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs sm:text-sm tracking-[0.1em] mb-5">
                        ABOUT GREEN
                        <span className="text-black text-lg">9</span>
                        {" "}RESTAURANT & BAR
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-zinc-900">
                        Great Food, Great Drinks,
                        <span className="block text-green-600 mt-2">
                            Great Memories
                        </span>
                    </h2>

                    <p className="text-zinc-600 text-base lg:text-lg leading-relaxed mt-6">
                        Green9 Restaurant & Bar is more than just a place to eat.
                        We bring together delicious cuisine, refreshing beverages,
                        and a welcoming atmosphere where friends and families create
                        unforgettable memories. Whether it's a casual dinner,
                        celebration, or special gathering, every visit is designed
                        to be enjoyable and memorable.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-zinc-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
                            >
                                <div className="text-3xl mb-3">
                                    {feature.icon}
                                </div>

                                <p className="text-sm font-medium text-zinc-700">
                                    {feature.title}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-zinc-200 text-center">

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-green-600">
                                1000+
                            </h3>

                            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                                Happy Guests
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-green-600">
                                50+
                            </h3>

                            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                                Signature Dishes
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-green-600">
                                4★
                            </h3>

                            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
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