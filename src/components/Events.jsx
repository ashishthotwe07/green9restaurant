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
            className="py-24 px-6 bg-white"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-green-600 uppercase tracking-[0.3em] text-sm">
                        Events & Celebrations
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mt-4">
                        Create Memories With Us
                    </h2>

                    <p className="text-zinc-600 max-w-2xl mx-auto mt-4">
                        From intimate gatherings to grand celebrations,
                        Green9 provides the perfect setting for every occasion.
                    </p>

                </div>

                {/* Event Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-4xl mb-6">
                                {event.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                                {event.title}
                            </h3>

                            <p className="text-zinc-600 leading-7">
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