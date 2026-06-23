import { useState } from "react";
import { X } from "lucide-react";

import img1 from "../assets/img (1).jpeg";
import img2 from "../assets/img (2).jpeg";
import img3 from "../assets/img (3).jpeg";
import img4 from "../assets/img (4).jpeg";
import img5 from "../assets/img (5).jpeg";
import img6 from "../assets/img (6).jpeg";
import img7 from "../assets/img (7).jpeg";
import img8 from "../assets/img (8).jpeg";
import img9 from "../assets/img (9).jpeg";
import img10 from "../assets/img (10).jpeg";
import img11 from "../assets/img (11).jpeg";
import img12 from "../assets/img (12).jpeg";
import img13 from "../assets/img (13).jpeg";

const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
];

const ambienceImages = allImages.slice(0, 6);
const foodImages = allImages.slice(6);

export default function Gallery() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);

    const images =
        activeTab === "all"
            ? allImages
            : activeTab === "ambience"
                ? ambienceImages
                : foodImages;

    return (
        <section
            id="gallery"
            className="bg-[#0A0A0A] text-white py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-green-500 uppercase tracking-[0.3em] text-sm">
                        Gallery
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        Moments Worth Sharing
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                        Explore our ambience, signature dishes,
                        celebrations and unforgettable dining experiences.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-3 flex-wrap mb-12">

                    <button
                        onClick={() => setActiveTab("all")}
                        className={`px-6 py-3 rounded-full font-medium transition ${activeTab === "all"
                            ? "bg-green-500 text-black"
                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                            }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setActiveTab("ambience")}
                        className={`px-6 py-3 rounded-full font-medium transition ${activeTab === "ambience"
                            ? "bg-green-500 text-black"
                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                            }`}
                    >
                        Ambience
                    </button>

                    <button
                        onClick={() => setActiveTab("food")}
                        className={`px-6 py-3 rounded-full font-medium transition ${activeTab === "food"
                            ? "bg-green-500 text-black"
                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                            }`}
                    >
                        Food
                    </button>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 aspect-[4/3]"
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}

                </div>

            </div>

            {/* Fullscreen Modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                >
                    <div
                        className="relative max-w-7xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-3 rounded-full z-10"
                        >
                            <X size={24} />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="w-full max-h-[90vh] object-contain rounded-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}