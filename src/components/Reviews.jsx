const reviews = [
    {
        name: "Dr. Vivek Kumar Jha",
        rating: 5,
        review:
            "Good experience overall with nice service and ambience. Food quality is good and has potential to be even better with more variety and authentic flavors.",
    },
    {
        name: "Kitty M.",
        rating: 5,
        review:
            "A wonderful surprise stop on our journey. Rustic atmosphere, excellent service, great food and drinks. Perfect place to relax with friends.",
    },
    {
        name: "Prateek R Dubey",
        rating: 5,
        review:
            "Good food, great service and a pleasant atmosphere. Green9 is an ideal place for spending quality time with friends and family.",
    },
    {
        name: "Sagar Zunjarrao",
        rating: 5,
        review:
            "Awesome ambience with a large open space and comfortable seating. Cheese Balls, Veg Lahori and Paneer Pasanda were especially delicious.",
    },
    {
        name: "Sahil Jadhav",
        rating: 5,
        review:
            "Very good ambience and service. Chatpata Kabab, Murgh Musallam and Mutton Rogan Josh were excellent and highly recommended.",
    },
    {
        name: "Sugandhraj Pathare",
        rating: 5,
        review:
            "Top-notch service, especially from Mr. Sanju. Food arrived quickly, the atmosphere was great and the overall experience was excellent.",
    },

];

const Reviews = () => {
    return (
        <section
            id="reviews"
            className="bg-[#0A0A0A] text-white py-16 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-500 uppercase tracking-[0.3em] text-sm">
                        Customer Reviews
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        What Our Guests Say
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                        Real experiences shared by our guests on Google Reviews.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Stars */}
                            <div className="flex text-yellow-400 text-xl mb-5">
                                {"★".repeat(review.rating)}
                            </div>

                            {/* Review Text */}
                            <div className="flex-1">
                                <p className="text-zinc-300 leading-relaxed">
                                    "{review.review}"
                                </p>
                            </div>

                            {/* Reviewer */}
                            <div className="border-t border-white/10 pt-5 mt-6">
                                <h4 className="font-semibold text-lg">
                                    {review.name}
                                </h4>

                                <p className="text-zinc-500 text-sm">
                                    Google Review
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">

                        <span className="text-yellow-400 text-xl">
                            ★★★★★
                        </span>

                        <span className="text-zinc-300">
                            Loved by hundreds of happy guests
                        </span>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;