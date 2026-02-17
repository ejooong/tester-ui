
import { PlusCircle, Map } from 'lucide-react';

export default function Hero() {
    return (
        <header className="relative pt-32 pb-48 lg:pb-64 min-h-[600px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdNTgGIW3moQnxrd_K5wqW7o6nlOd-qOSr5Ak5Lir0pITS9QgsVBKWzS-za-eKN8hc638_eS0cTr3mTQ22mgH_A9n6XCrvk-ByUcPP0Q5RoGxqaGJRcaXV9LfRHL9qE_m5R4YA_owZlJl7qXqtvTQU4ak6cheY9onnwEV3tAEGeFxVoTXUT6aZatsxKXelmw3zKvF5rWjRQUhozVVi1B2pX4A3oC_p1_WLMG5rMr_7dQbbtIlMqYLiWv5rKNZvArX398y2gxtI7HI"
                    alt="Sukabumi Landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent opacity-80"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Periode Pengajuan 2024 Telah Dibuka
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Wujudkan Pembangunan<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">Transparan & Partisipatif</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
                        Sistem Perencanaan Pembangunan Daerah Terintegrasi Kota Sukabumi. Ajukan usulan pembangunan di wilayah Anda dan pantau prosesnya secara real-time melalui peta interaktif.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                            <PlusCircle className="w-5 h-5" />
                            Ajukan Usulan
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg text-sm font-semibold backdrop-blur-md border border-white/10 transition-all flex items-center justify-center gap-2">
                            <Map className="w-5 h-5" />
                            Lihat Peta Sebaran
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
