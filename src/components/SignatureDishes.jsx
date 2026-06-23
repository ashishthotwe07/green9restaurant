const dishes = [
    {
        name: "Chicken Tandoori",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    },
    {
        name: "Paneer Tikka",
        image:
            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    },
    {
        name: "Special Biryani",
        image:
            "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=800&q=80",
    },
    {
        name: "Chef's Special",
        image:
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    },
];

const SignatureDishes = () => {
    return (
        <section
            id="menu"
            className="bg-[#070707] text-white py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-500 uppercase tracking-[0.3em] text-sm">
                        Signature Dishes
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        Crafted For Every Taste
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                        Discover our most loved dishes prepared with passion,
                        quality ingredients, and unforgettable flavors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {dishes.map((dish, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl"
                        >
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-semibold">
                                    {dish.name}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SignatureDishes;