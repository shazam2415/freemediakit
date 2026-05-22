import mockData from "../data/mockData.json"; // Yolu projenize göre "../data/..." veya "@/data/..." yapabilirsiniz
import AssetGrid from "./components/AssetGrid"; // Bir önceki adımdaki import hatasına göre yolunu ayarlayın

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Header */}
      <header className="border-b border-zinc-200 backdrop-blur sticky top-0 z-50 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
            <span className="font-bold tracking-wider text-xl">
              FREE<span className="text-emerald-500">MEDIA</span>KIT
            </span>
          </div>
          <a 
            href="https://tally.so/r/RGV0yK" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-zinc-300 hover:border-zinc-400 rounded-lg transition-colors text-gray-700 hover:text-black bg-white"
          >
            Submit Design
          </a>
        </div>
      </header>

      {/* 2. Hero Section (Buton artık içeride değil, aşağıya taşındı) */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Printable and free designs for humanitarian and conscientious activists.
        </h1>
      </section>

      {/* 3. Filter Bar & Grid */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        <AssetGrid initialAssets={mockData} />
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3 text-zinc-900">Are you a visual storyteller?</h2>
          <p className="text-zinc-600 text-sm max-w-md mx-auto mb-6">
            Contribute your art to help protestors worldwide. Every poster, translation, and graphic makes a difference.
          </p>
          <p className="text-xs text-zinc-500">
            FreeMediaKit 2026 — Open Source project built for global solidarity.
          </p>
        </div>
      </footer>

    </div>
  );
}