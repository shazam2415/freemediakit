"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface Asset {
  id: string | number;
  category: string;
  previewUrl: string;
  title: string;
  dimensions: string;
  designer: string;
  downloadUrl: string;
}

interface AssetGridProps {
  initialAssets: Asset[];
}

export default function AssetGrid({ initialAssets }: AssetGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const exploreRef = useRef<HTMLDivElement>(null);

  const filteredAssets = selectedCategory === "all" 
    ? initialAssets 
    : initialAssets.filter(asset => asset.category === selectedCategory);

  const handleScroll = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Butonu artık burada, güvenli alanda */}
      <div className="flex justify-center mb-16">
        <button 
          onClick={handleScroll}
          className="px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-500 font-semibold rounded-lg shadow-lg shadow-emerald-900/10 transition-all duration-200"
        >
          Browse Templates
        </button>
      </div>

      {/* Kaydırılacak hedef nokta (Ref ile bağlı) */}
      <div ref={exploreRef} className="scroll-mt-20">
        {/* Filtre Butonları */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 border-b border-zinc-200 pb-6">
          {[
            { id: "all", label: "ALL" },
            { id: "posters", label: "POSTERS & BANNERS" },
            { id: "social", label: "SOCIAL MEDIA" },
            { id: "stickers", label: "STICKERS & PRINTS" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-zinc-900 text-white font-semibold shadow-md"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.map((asset) => (
            <div 
              key={asset.id} 
              className="group bg-white border border-zinc-200 rounded-xl overflow-hidden flex flex-col hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
            >
              <div className="aspect-square bg-zinc-50 relative overflow-hidden">
                <Image 
                  src={asset.previewUrl} 
                  alt={asset.title}
                  fill
                  sizes="(max-w-7xl) 33vw, (max-w-md) 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-zinc-200 text-zinc-800 z-10">
                  {asset.dimensions}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg leading-snug text-zinc-900 group-hover:text-emerald-600 transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    by <span className="text-zinc-700 font-medium">{asset.designer}</span>
                  </p>
                </div>
                
                <a
                  href={asset.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-zinc-100 text-zinc-900 group-hover:bg-emerald-600 group-hover:text-white text-center text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Download Asset
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredAssets.length === 0 && (
          <p className="text-center text-zinc-500 my-12">No assets found in this category yet.</p>
        )}
      </div>
    </>
  );
}