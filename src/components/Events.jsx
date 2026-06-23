const events = [
    {
        title: "Birthday Parties",
        icon: "🎂",
        desc: "Celebrate your special day with great food, drinks and unforgettable memories.",
    },
    {
        title: "Corporate Events",
        icon: "🏢",
        desc: "Perfect venue for team dinners, meetings and corporate gatherings.",
    },
    {
        title: "Family Gatherings",
        icon: "👨‍👩‍👧‍👦",
        desc: "Enjoy quality time with your loved ones in a warm atmosphere.",
    },
    {
        title: "Anniversary Celebrations",
        icon: "🥂",
        desc: "Make your milestone moments even more memorable at Green9.",
    },
];

const Events = () => {
    return (
        <section
            id="events"
            className="py-24 px-6 bg-[#070707] text-white"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-500 uppercase tracking-[0.3em] text-sm">
                        Events & Celebrations
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        Create Memories With Us
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                        From intimate gatherings to grand celebrations,
                        Green9 provides the perfect setting for every occasion.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-500 transition-all duration-300"
                        >
                            <div className="text-5xl mb-5">
                                {event.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {event.title}
                            </h3>

                            <p className="text-zinc-400">
                                {event.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Events;