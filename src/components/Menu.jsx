
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
            className="min-h-screen bg-zinc-950 text-white"
        >
            <div className="max-w-5xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Our Menu
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Explore our delicious food & beverages
                    </p>
                </div>

                {/* Search */}
                <div className="sticky top-0 z-30 bg-zinc-950 pb-4 mb-6">
                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3.5 pr-24 outline-none focus:border-green-500 transition"
                        />

                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-medium"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* SEARCH MODE */}
                {search.trim() ? (
                    <>
                        <div className="mb-5">
                            <p className="text-zinc-400">
                                {searchResults.length} item
                                {searchResults.length !== 1
                                    ? "s"
                                    : ""}{" "}
                                found
                            </p>
                        </div>

                        {searchResults.length === 0 ? (
                            <div className="text-center py-20">
                                <h2 className="text-2xl font-semibold">
                                    No dishes found
                                </h2>

                                <p className="text-zinc-500 mt-2">
                                    Try another keyword
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {searchResults.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition"
                                        >
                                            <div className="flex justify-between gap-3">

                                                <div className="flex-1">

                                                    <div className="flex items-center gap-2 mb-1">

                                                        {item.veg ===
                                                            true && (
                                                                <span>
                                                                    🟢
                                                                </span>
                                                            )}

                                                        {item.veg ===
                                                            false && (
                                                                <span>
                                                                    🔴
                                                                </span>
                                                            )}

                                                        <span className="text-xs uppercase text-green-500">
                                                            {
                                                                item.category
                                                            }
                                                        </span>
                                                    </div>

                                                    <h3 className="font-semibold">
                                                        {
                                                            item.name
                                                        }
                                                    </h3>

                                                    {item.description && (
                                                        <p className="text-sm text-zinc-500 mt-1">
                                                            {
                                                                item.description
                                                            }
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="font-bold text-green-400 whitespace-nowrap">
                                                    ₹
                                                    {
                                                        item.price
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="space-y-3">

                        {menuData.map((category) => (
                            <div
                                key={category.category}
                                className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
                            >
                                <button
                                    onClick={() =>
                                        toggleCategory(
                                            category.category
                                        )
                                    }
                                    className="w-full flex justify-between items-center px-5 py-4 hover:bg-zinc-800/30 transition"
                                >
                                    <div className="text-left">
                                        <h2 className="text-lg font-semibold">
                                            {
                                                category.category
                                            }
                                        </h2>

                                        <p className="text-xs text-zinc-500 mt-1">
                                            {
                                                category.items
                                                    .length
                                            }{" "}
                                            Items
                                        </p>
                                    </div>

                                    <span
                                        className={`text - lg transition - transform duration - 300 ${openCategory ===
                                                category.category
                                                ? "rotate-180"
                                                : ""
                                            } `}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {openCategory ===
                                    category.category && (
                                        <div className="border-t border-zinc-800">

                                            {category.items.map(
                                                (
                                                    item,
                                                    index
                                                ) => (
                                                    <div
                                                        key={
                                                            index
                                                        }
                                                        className="px-5 py-3 border-b border-zinc-800/70 last:border-b-0 hover:bg-zinc-800/20 transition"
                                                    >
                                                        <div className="flex justify-between gap-4">

                                                            <div className="flex-1 min-w-0">

                                                                <div className="flex items-center gap-2">

                                                                    {item.veg ===
                                                                        true && (
                                                                            <span className="text-xs">
                                                                                🟢
                                                                            </span>
                                                                        )}

                                                                    {item.veg ===
                                                                        false && (
                                                                            <span className="text-xs">
                                                                                🔴
                                                                            </span>
                                                                        )}

                                                                    <h3 className="font-medium text-sm md:text-base truncate">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </h3>
                                                                </div>

                                                                {item.description && (
                                                                    <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </p>
                                                                )}
                                                            </div>

                                                            <div className="font-semibold text-green-400 whitespace-nowrap text-sm md:text-base">
                                                                ₹
                                                                {
                                                                    item.price
                                                                }
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            )}

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
