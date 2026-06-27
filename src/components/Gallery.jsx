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
            className="bg-white text-zinc-900 py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-green-600 uppercase tracking-[0.3em] text-sm">
                        Gallery
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        Moments Worth Sharing
                    </h2>

                    <p className="text-zinc-600 max-w-2xl mx-auto mt-4">
                        Explore our ambience, signature dishes,
                        celebrations and unforgettable dining experiences.
                    </p>

                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-3 flex-wrap mb-12">

                    <button
                        onClick={() => setActiveTab("all")}
                        className={`px-6 py-3 rounded-full font-medium transition ${
                            activeTab === "all"
                                ? "bg-black text-white"
                                : "bg-gray-100 text-zinc-700 hover:bg-gray-200"
                        }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setActiveTab("ambience")}
                        className={`px-6 py-3 rounded-full font-medium transition ${
                            activeTab === "ambience"
                                ? "bg-black text-white"
                                : "bg-gray-100 text-zinc-700 hover:bg-gray-200"
                        }`}
                    >
                        Ambience
                    </button>

                    <button
                        onClick={() => setActiveTab("food")}
                        className={`px-6 py-3 rounded-full font-medium transition ${
                            activeTab === "food"
                                ? "bg-black text-white"
                                : "bg-gray-100 text-zinc-700 hover:bg-gray-200"
                        }`}
                    >
                        Food
                    </button>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            {/* Fullscreen Modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex items-center justify-center p-4"
                >
                    <div
                        className="relative max-w-7xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-black p-3 rounded-full shadow-lg z-10"
                        >
                            <X size={24} />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                        />

                    </div>
                </div>
            )}
        </section>
    );
}