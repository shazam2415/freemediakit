"use client";
import { useState } from "react";
import mockData from "../data/mockData.json"; // JSON bağlantısı burada

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtreleme mantığı
  const filteredAssets = selectedCategory === "all" 
    ? mockData 
    : mockData.filter(asset => asset.category === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
            <span className="font-bold tracking-wider text-xl">
              FREE<span className="text-emerald-500">MEDIA</span>KIT
            </span>
          </div>
          <a 
            href="https://tally.so" 
            target="_blank"
            className="px-4 py-2 text-sm font-medium border border-zinc-700 hover:border-red-500 rounded-lg transition-colors text-zinc-300 hover:text-white"
          >
            Submit Design
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Free, Print-Ready Assets <br />
          for <span className="text-emerald-500">Palestine</span> Activists.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Download high-quality posters, banners, and social media graphics created by global designers to amplify the voice of justice.
        </p>
        <button 
          onClick={() => document.getElementById("explore").scrollIntoView({ behavior: "smooth" })}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 font-semibold rounded-lg shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-0.5"
        >
          Browse Templates
        </button>
      </section>

      {/* 3. Filter Bar & Grid */}
      <main id="explore" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-16">
        
        {/* Seçenek A'ya göre güncellenmiş Filtre Butonları */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 border-b border-zinc-800 pb-6">
          {[
            { id: "all", label: "ALL" },
            { id: "posters", label: "POSTERS & BANNERS" },
            { id: "social", label: "SOCIAL MEDIA" },
            { id: "stickers", label: "STICKERS & PRINTS" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-white text-zinc-950 font-semibold shadow"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
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
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col hover:border-zinc-700 transition-all"
            >
              <div className="aspect-[4/5] bg-zinc-950 relative overflow-hidden">
                <img 
                  src={asset.previewUrl} 
                  alt={asset.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-zinc-800">
                  {asset.dimensions}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg leading-snug group-hover:text-emerald-400 transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    by <span className="text-zinc-400">{asset.designer}</span>
                  </p>
                </div>
                
                <a
                  href={asset.downloadUrl}
                  download
                  className="w-full py-2.5 bg-zinc-800 group-hover:bg-red-600 text-center text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
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
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Are you a visual storyteller?</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
            Contribute your art to help protestors worldwide. Every poster, translation, and graphic makes a difference.
          </p>
          <p className="text-xs text-zinc-600">
            FreeMediaKit 2026 — Open Source project built for global solidarity.
          </p>
        </div>
      </footer>

    </div>
  );
}