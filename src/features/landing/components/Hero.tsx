
import { PlusCircle, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <header className="relative pt-32 pb-48 lg:pb-64 min-h-[600px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdNTgGIW3moQnxrd_K5wqW7o6nlOd-qOSr5Ak5Lir0pITS9QgsVBKWzS-za-eKN8hc638_eS0cTr3mTQ22mgH_A9n6XCrvk-ByUcPP0Q5RoGxqaGJRcaXV9LfRHL9qE_m5R4YA_owZlJl7qXqtvTQU4ak6cheY9onnwEV3tAEGeFxVoTXUT6aZatsxKXelmw3zKvF5rWjRQUhozVVi1B2pX4A3oC_p1_WLMG5rMr_7dQbbtIlMqYLiWv5rKNZvArX398y2gxtI7HI"
                    alt="Sukabumi Landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/70 to-primary-dark"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-[#670D2F]/50 to-transparent opacity-90"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(226,182,207,0.5)]"></span>
                        Periode Pengajuan 2024 Telah Dibuka
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                        Wujudkan Pembangunan<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white text-glow">Transparan & Partisipatif</span>
                    </h1>

                    <p className="text-lg text-white/80 mb-10 max-w-xl font-light leading-relaxed">
                        Sistem Perencanaan Pembangunan Daerah Terintegrasi Kota Sukabumi. Ajukan usulan pembangunan di wilayah Anda dan pantau prosesnya secara real-time melalui peta interaktif.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/validasi"
                            className="bg-gradient-to-r from-[#851842] to-[#670D2F] hover:to-[#530F25] text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-lg shadow-black/30 border border-white/10 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ring-1 ring-white/20"
                        >
                            <PlusCircle className="w-5 h-5 text-accent" />
                            Ajukan Usulan
                        </Link>
                        <Link
                            to="/peta"
                            className="bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg text-sm font-semibold backdrop-blur-md border border-white/10 transition-all flex items-center justify-center gap-2"
                        >
                            <Map className="w-5 h-5 text-accent" />
                            Lihat Peta Sebaran
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
