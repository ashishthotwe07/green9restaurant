import { useState } from "react";
import { menuData } from "../data/menuData";

export default function Menu() {
    const [search, setSearch] = useState("");
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        setOpenCategory(
            openCategory === category ? null : category
        );
    };

    const searchResults = menuData.flatMap((category) =>
        category.items
            .filter((item) => {
                if (!search.trim()) return false;

                const text = `
                    ${item.name}
                    ${item.description || ""}
                    ${category.category}
                `.toLowerCase();

                return search
                    .toLowerCase()
                    .split(" ")
                    .filter(Boolean)
                    .every((word) => text.includes(word));
            })
            .map((item) => ({
                ...item,
                category: category.category,
            }))
    );

    return (
        <section
            id="menu"
            className="min-h-screen bg-white text-zinc-900"
        >
            <div className="max-w-5xl mx-auto px-4 py-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Our Menu
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Explore our delicious food & beverages
                    </p>

                                                <p className="mt-2 text-sm md:text-base leading-7 text-amber-800">

                                All menu prices displayed below are subject to an
                                <span className="font-bold">
                                    {" "}additional 5% GST
                                </span>.
                                

                            </p>
                </div>

                {/* Search */}
                <div className="sticky top-0 z-30 bg-white pb-5 mb-6">
                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-5 py-3.5 pr-24 outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
                        />

                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-zinc-800 transition"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Search Results */}
                {search.trim() ? (
                    <>
                        <div className="mb-5">
                            <p className="text-gray-500">
                                {searchResults.length} item
                                {searchResults.length !== 1 ? "s" : ""} found
                            </p>
                        </div>

                        {searchResults.length === 0 ? (
                            <div className="text-center py-20">
                                <h2 className="text-2xl font-semibold">
                                    No dishes found
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    Try another keyword
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {searchResults.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition duration-300"
                                    >
                                        <div className="flex justify-between gap-4">

                                            <div className="flex-1">

                                                <div className="flex items-center gap-2 mb-2">

                                                    {item.veg === true && (
                                                        <span>🟢</span>
                                                    )}

                                                    {item.veg === false && (
                                                        <span>🔴</span>
                                                    )}

                                                    <span className="text-xs uppercase tracking-wide text-gray-500">
                                                        {item.category}
                                                    </span>

                                                </div>

                                                <h3 className="font-semibold text-lg">
                                                    {item.name}
                                                </h3>

                                                {item.description && (
                                                    <p className="text-gray-500 mt-2">
                                                        {item.description}
                                                    </p>
                                                )}

                                            </div>

                                            <div className="font-bold text-lg whitespace-nowrap">
                                                ₹{item.price}
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="space-y-4">

                        {menuData.map((category) => (
                            <div
                                key={category.category}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
                            >

                                <button
                                    onClick={() =>
                                        toggleCategory(category.category)
                                    }
                                    className="w-full flex justify-between items-center px-6 py-5 hover:bg-gray-50 transition"
                                >

                                    <div className="text-left">

                                        <h2 className="text-lg font-semibold">
                                            {category.category}
                                        </h2>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {category.items.length} Items
                                        </p>

                                    </div>

                                    <span
                                        className={`text-lg transition-transform duration-300 ${
                                            openCategory === category.category
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    >
                                        ▼
                                    </span>

                                </button>

                                {openCategory === category.category && (

                                    <div className="border-t border-gray-200">

                                        {category.items.map((item, index) => (

                                            <div
                                                key={index}
                                                className="px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
                                            >

                                                <div className="flex justify-between gap-4">

                                                    <div className="flex-1">

                                                        <div className="flex items-center gap-2">

                                                            {item.veg === true && (
                                                                <span>🟢</span>
                                                            )}

                                                            {item.veg === false && (
                                                                <span>🔴</span>
                                                            )}

                                                            <h3 className="font-medium">
                                                                {item.name}
                                                            </h3>

                                                        </div>

                                                        {item.description && (
                                                            <p className="text-sm text-gray-500 mt-1">
                                                                {item.description}
                                                            </p>
                                                        )}

                                                    </div>

                                                    <div className="font-semibold whitespace-nowrap">
                                                        ₹{item.price}
                                                    </div>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                )}

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}