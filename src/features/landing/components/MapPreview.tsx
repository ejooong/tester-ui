
import { ArrowRight } from 'lucide-react';

export default function MapPreview() {
    return (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Peta Sebaran Usulan</h2>
                    <p className="text-slate-400 mt-2 max-w-2xl text-sm md:text-base">
                        Visualisasi geospasial real-time usulan pembangunan di seluruh kecamatan.
                    </p>
                </div>
                <div>
                    <a href="#" className="text-primary hover:text-blue-400 text-sm font-medium flex items-center gap-1 transition-colors">
                        Lihat Peta Fullscreen <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="bg-card-dark rounded-xl border border-slate-700/50 overflow-hidden relative h-[500px] w-full group shadow-2xl">
                <div className="absolute inset-0 bg-[#162032]"></div>
                <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEAmV4vDmKZQg8tnU62T2WmD8p6UQmTMLHrtP2n-5fUncUbpDqdhYflMc-X3fCFz5EOnauxJaITpj82tlLXCenPT9WR2UTveauMCTw3CgSG_9s_tIpCh3jm5wC3MUsT0Ktdw6MSBK0_O0onJLxiQ_Ms8HaJ1DYFsKM2yQXGVJYVaz42fVTPEIrlVt-WUutmbvPPUfxD9DlxKIvEcdSry0fOmADdJLcim9Fc5kkWCM-G0yQaGavgCUVh9yXxURpVlEmMkAAfbzxHtk')",
                        filter: "grayscale(100%) invert(100%) contrast(1.2)"
                    }}
                ></div>
                <div className="absolute inset-0 map-pattern opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent pointer-events-none"></div>

                <div className="absolute top-6 left-6 z-10">
                    <div className="bg-card-dark/90 backdrop-blur border border-slate-700 rounded-lg p-4 shadow-lg w-48">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Layer Peta</h4>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" defaultChecked className="form-checkbox bg-slate-800 border-slate-600 rounded text-blue-500 focus:ring-offset-slate-900 focus:ring-blue-500" />
                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Infrastruktur</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" defaultChecked className="form-checkbox bg-slate-800 border-slate-600 rounded text-blue-500 focus:ring-offset-slate-900 focus:ring-blue-500" />
                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Ekonomi</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="form-checkbox bg-slate-800 border-slate-600 rounded text-blue-500 focus:ring-offset-slate-900 focus:ring-blue-500" />
                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Sosial Budaya</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                    </div>
                </div>
                <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                    </div>
                </div>
                <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                    </div>
                </div>

                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white/20 shadow-lg shadow-blue-500/40 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                        42
                    </div>
                </div>
            </div>
        </section>
    );
}
