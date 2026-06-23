import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-[#070707] text-white py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-500 uppercase tracking-[0.3em] text-sm">
                        Contact Us
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        Visit Green9 Today
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                        Reserve your table, plan your celebration,
                        or simply drop by for a memorable dining experience.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="space-y-6">

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                            <FaMapMarkerAlt className="text-green-500 text-2xl mb-4" />

                            <h3 className="text-xl font-semibold mb-2">
                                Address
                            </h3>

                            <p className="text-zinc-400">
                                Gat No. 668, Kesnand Road,
                                Wagholi, Pune
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                            <FaPhoneAlt className="text-green-500 text-2xl mb-4" />

                            <h3 className="text-xl font-semibold mb-2">
                                Call Us
                            </h3>

                            <p className="text-zinc-400">
                                7218700909
                            </p>

                            <p className="text-zinc-400">
                                8087337711
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                            <FaClock className="text-green-500 text-2xl mb-4" />

                            <h3 className="text-xl font-semibold mb-2">
                                Opening Hours
                            </h3>

                            <p className="text-zinc-400">
                                Daily: 11:00 AM - 11:30 PM
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">

                            <a
                                href="tel:7218700909"
                                className="bg-green-600 hover:bg-green-500 px-6 py-4 rounded-full font-medium transition"
                            >
                                Call Now
                            </a>

                            <a
                                href="https://wa.me/917218700909"
                                target="_blank"
                                rel="noreferrer"
                                className="border border-white/20 px-6 py-4 rounded-full hover:border-green-500 transition"
                            >
                                WhatsApp
                            </a>

                        </div>

                    </div>

                    {/* Right Side Map */}
                    <div className="overflow-hidden rounded-3xl border border-white/10">

                        <iframe
                            title="Green9 Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8914270749174!2d73.99025917496442!3d18.578932982525995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c37ae3f343b5%3A0xe4540451d3df3ebf!2sGreen9%20Restaurant!5e0!3m2!1sen!2sin!4v1780645175452!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            className="min-h-[500px]"
                            loading="lazy"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;