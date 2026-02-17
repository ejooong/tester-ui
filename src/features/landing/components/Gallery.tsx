
import { Calendar, ArrowRight, ArrowUpRight, FileText } from 'lucide-react';

export default function Gallery() {
    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Gallery Informasi</h2>
                        <p className="text-slate-400">Pembaruan terkini seputar pembangunan dan kebijakan kota.</p>
                    </div>
                    <div className="flex bg-white/5 backdrop-blur-md rounded-lg p-1 border border-white/10 overflow-x-auto max-w-full">
                        <button className="px-4 py-2 rounded-md bg-accent/20 text-accent font-medium text-sm border border-accent/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] whitespace-nowrap transition-all">
                            Berita
                        </button>
                        <button className="px-4 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 font-medium text-sm whitespace-nowrap transition-all">
                            Panduan
                        </button>
                        <button className="px-4 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 font-medium text-sm whitespace-nowrap transition-all">
                            Publikasi
                        </button>
                        <button className="px-4 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 font-medium text-sm whitespace-nowrap transition-all">
                            Infografis
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7">
                        <div className="group relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-card-dark">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5tdu9Q40ASEjqTk2K2n48wP8LdbTDPUURnlyRHjtgmyaZLEIvsCdjMrkUlwKDcxYmYWOBQiJNJALM6wL_aiPe8i6Ci4I_2S997vshxGY0_KxOP8-cZBcwSvrbUj1BVIWjenirEN5OeozDo2voMVKhYcqv7Ds9EICJdAaymiPlRaqj5qPTYaARZAOFQaw5UtZFNnpglrvgVid9tLHlH_PVSuYUuc4Jq660mIVQJvHqiEvtvX8YVHqvO0eCPD9TFWLGnqlLiHJAu4Y"
                                alt="Featured News"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                        Infrastruktur
                                    </span>
                                    <span className="text-slate-300 text-xs flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" /> 12 Oktober 2023
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors">
                                    Musrenbang Kelurahan Dimulai Serentak: Fokus pada Perbaikan Drainase & Jalan Lingkungan
                                </h3>
                                <p className="text-slate-300 text-sm md:text-base line-clamp-2 mb-6 max-w-2xl font-light">
                                    Pemerintah Kota Sukabumi mengumumkan prioritas pembangunan tahun ini yang berfokus pada penanggulangan banjir dan perbaikan akses jalan di wilayah padat penduduk.
                                </p>
                                <a href="#" className="inline-flex items-center text-white text-sm font-medium hover:gap-2 transition-all">
                                    Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1 text-accent" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group bg-card-dark/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:bg-card-dark/60 transition-all hover:border-white/10 hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col">
                            <div className="h-40 overflow-hidden relative">
                                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                                    Digitalisasi
                                </div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpGjDzorDjux0NZ-srGdiyn0XEgfzFiiPGYTZuDlAmeFkAAIz5vf2e75Ctdw0TzTsivUXXv4zr9JQ4Hz58zBwAA-Wtdrd2719iZdXgjEFz3gBul4hK8ls8ldvUcsNcQbd5m1YyYeNjKBgXaLuK7HRFU2D78bSmY-930jSr_doY2bsMWcNLXtCl120SbAuaMm6-niGILOzziBfBWxuX-6EqAC5jwxkXj1IzLMkzACEmFdmaKdTsOYJS-OPfsNw8OB27_-Quoi2lxFo"
                                    alt="News 1"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h4 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">
                                    Sosialisasi Aplikasi Musrenbang Digital Versi 2.0
                                </h4>
                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                                    <span className="text-slate-500 text-xs">10 Okt 2023</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>

                        <div className="group bg-card-dark/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:bg-card-dark/60 transition-all hover:border-white/10 hover:shadow-lg hover:shadow-purple-500/5 flex flex-col">
                            <div className="h-40 overflow-hidden relative">
                                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-purple-500/20 text-purple-400 border border-purple-500/30 backdrop-blur-md">
                                    Laporan
                                </div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeljr4TlygnIoynJc2HA5K8nP5oY-7KpOM8jlI4EgTGDgFzSm0DhML1zN9nh2fNhQdT2PkQTvXJQ8tdIUSBmtVcJJ1x9Wndoly6rVgZ-_omaYfGg-2Scd24dKowfuxXoHv9XI5wi87SBwcIDekh70-geIIteclKcu-5Xk7kaRIkqMJIF7v-bwm-U8lvikGHiflIcR2Xr2a9aHt4YueFmWsWUagYn33E8Q0qGweXz90LMRMAUJxrosQyppQuL2uaVyo8fKd0pe1oYg"
                                    alt="News 2"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h4 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-purple-400 transition-colors line-clamp-2">
                                    Realisasi Anggaran Triwulan III Capai 85%
                                </h4>
                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                                    <span className="text-slate-500 text-xs">05 Okt 2023</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>

                        <div className="group bg-card-dark/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:bg-card-dark/60 transition-all hover:border-white/10 hover:shadow-lg hover:shadow-emerald-500/5 flex flex-col">
                            <div className="h-40 overflow-hidden relative">
                                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                                    Lingkungan
                                </div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdNTgGIW3moQnxrd_K5wqW7o6nlOd-qOSr5Ak5Lir0pITS9QgsVBKWzS-za-eKN8hc638_eS0cTr3mTQ22mgH_A9n6XCrvk-ByUcPP0Q5RoGxqaGJRcaXV9LfRHL9qE_m5R4YA_owZlJl7qXqtvTQU4ak6cheY9onnwEV3tAEGeFxVoTXUT6aZatsxKXelmw3zKvF5rWjRQUhozVVi1B2pX4A3oC_p1_WLMG5rMr_7dQbbtIlMqYLiWv5rKNZvArX398y2gxtI7HI"
                                    alt="News 3"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h4 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
                                    Penghijauan Kota: 1000 Pohon Ditanam
                                </h4>
                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                                    <span className="text-slate-500 text-xs">02 Okt 2023</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>

                        <div className="group bg-card-dark/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:bg-card-dark/60 transition-all hover:border-white/10 hover:shadow-lg hover:shadow-orange-500/5 flex flex-col">
                            <div className="h-40 overflow-hidden relative">
                                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 backdrop-blur-md">
                                    Edukasi
                                </div>
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                    <FileText className="w-10 h-10 text-slate-600" />
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h4 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-orange-400 transition-colors line-clamp-2">
                                    Panduan Pengajuan Usulan Mandiri 2024
                                </h4>
                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                                    <span className="text-slate-500 text-xs">28 Sep 2023</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-sm">
                        Lihat Semua Informasi
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}
