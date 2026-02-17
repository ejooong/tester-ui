
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search, ArrowRight, Calendar, User, Video,
    ChevronLeft, ChevronRight, Share2, Facebook, Mail,
    MapPin, Phone, Globe
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function NewsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const newsItems = [
        {
            id: 1,
            title: "Musrenbang Kelurahan 2024 Resmi Dimulai Secara Digital",
            date: "12 Oktober 2023",
            readTime: "5 min baca",
            desc: "Pemerintah Kota Sukabumi meluncurkan tahapan awal Musrenbang tingkat kelurahan dengan platform digital baru untuk meningkatkan partisipasi warga.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoxt5UV7Rd9PQeX1qhGiRxjIHHwSIKVPdih7ykpkk5etk1X2Lvfam8CPlJjoGMONUDyz2hLq88VZjOUZVLdhqWRL7VuaO4AZKEqcZXDnEJ3VtxZW0XcDyF_vwxEVRMUQaVzMkFfyTQKxMjjOuCqYQeo6MCfE5CjsviWm2UsQIwV-KHshYdreziYnPFszWrICRIdpepuvVc7Z0K7Bj3ARbfJ01sPH39vQNHPDBoeakNB96_ZfC2TJGhUpbuxf6gqwSt45U4HBI3k-U",
            category: "Berita",
            color: "bg-primary"
        },
        {
            id: 2,
            title: "Panduan Teknis Penggunaan Aplikasi SIPD RI",
            date: "10 Oktober 2023",
            type: "Dokumen PDF",
            desc: "Unduh panduan lengkap tata cara penginputan usulan masyarakat melalui Sistem Informasi Pemerintahan Daerah (SIPD) terbaru.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARG2eSkxbhoc5JsmO6Yo6slQM_zBw3uWK03au4w4atbv_AeQcvze8xfgoS6X46I7LuWoeXtbQ75RGHiH_o-2pKnv3NXbwxpWtqrmDEH5-zbAe54IidsL5gOUCf_BZjF9xE4LSK2kFeIYhDwKTa8XaauM5N4e6IE1fcnp6ithncPMvjvSjFCVIPePaI95HIdWfR2to79JxsP6NxvM0d8m6ZilfxliEWGQDbt7WeFyBzBVY4xZ1JXiqWYQ8DxfT3Zjkf2-xrMR9wSSU",
            category: "Panduan",
            color: "bg-green-500"
        },
        {
            id: 3,
            title: "Capaian Indikator Makro Pembangunan 2023",
            date: "05 Oktober 2023",
            type: "Infografis",
            desc: "Infografis ringkasan capaian kinerja pembangunan Kota Sukabumi semester pertama tahun anggaran 2023.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI0_YLyDGWbJtGtQzsdVuIt2f3dYvrpyluSjPeOSCTUeqFVYj2HzCzf8lVPcObx-LG9q4Bh3N7a8lK4gd7DLfuaAGcW3RODnp0DbReIC55K6UOLFxIdQd4UEDnX-Y0D2NlIR8-XIzlK4EJw3w0g7xK1UImxbDf3wEmfrAX_shbZiuPzvgaTwEu53HelepTz_F7IN25yDydGLMo1_E1RGWInXhvYk3-IFlMsY7IapWl92scJDPFjN0DTC18OMXE84lb-4dGnE1cY6c",
            category: "Infografis",
            color: "bg-purple-500"
        },
        {
            id: 4,
            title: "Sosialisasi Arah Kebijakan RKPD Tahun 2025",
            date: "01 Oktober 2023",
            readTime: "3 min baca",
            desc: "Bappeda menggelar sosialisasi awal terkait arah kebijakan pembangunan daerah untuk tahun 2025 kepada perangkat daerah.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM_Xm8fFwyYQj8LndkN4Ea5ov0eKMtKFcRZHXySkF5XPGRSLNx80nhjN48k0GZl9LzCIRATqgxCW2V4ad0BtS09hXK9nCcDQk4Ct-s_hI9eskKFK4sQHfEK24waTBen-Vw0r_tsPjH_Xiu4ETMGfM57u-k7sZwDXGUhksrOsoowcb848fPEkbHn4agHal1O7xWR_m-15pbE6xgOxyAFLM5tB3OMjhGDo8at5Pn4H0lOp4-oBPdVtZqsW6xUsVwVI343hfk8Hdhr_I",
            category: "Berita",
            color: "bg-primary"
        },
        {
            id: 5,
            title: "Laporan Kinerja Instansi Pemerintah (LKjIP) 2022",
            date: "28 September 2023",
            type: "Laporan",
            desc: "Publikasi resmi laporan akuntabilitas kinerja instansi pemerintah Kota Sukabumi tahun anggaran 2022.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWU1j3BeUjj5pME8MCHFrDNPSHju3F0ws67YEzVf9frS9eXk6JVS1aR3kZpDZ4JJvnm5BJIHEwDTn089WHRNMwRfvppcZYpSCk1FbS5D29CPjx8Yf2BamwhEehzqiU6WbNRvjUA5ZtpcAC-SOYL99RUTa87fUcPhqm6nLZBqpGwj6rxOdTAKhw-KwDCLlGSzCUJRx-yMgz-TaNxSwVMPECL9zgzMmVaP_CLQzEYNJ83lcxanD3slAnfHB7bUG7mzTdGqGjJPuFb6c",
            category: "Publikasi",
            color: "bg-orange-500"
        },
        {
            id: 6,
            title: "Tutorial Registrasi Akun Forum Musrenbang",
            date: "25 September 2023",
            type: "Video",
            desc: "Video tutorial dan panduan langkah demi langkah bagi masyarakat umum untuk mendaftar akun di portal Musrenbang.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR7OGyAJn9I0ql9uognZxYhNnT4DMaxyxMudFvilXVNvgJdvc6idNQzCtCd_q4vrUbIkyO-rx6aDXFwGafPoJU3C0qaVOTkzqTX-ACk76vN65Jx3HKcp0L-x2A_0SRUxC25l31ZAOus83WMwfwUAATbczynKg9t8YVgKVIaiamWO0qNG05HFugMNBUu5zYypGdLe8p3uPEA9p-LZctDFYDdbPxV2W_kaCXE3kB_wLhfYz55T-KBkxWf7OXvpiFECbZ49z--tockrw",
            category: "Panduan",
            color: "bg-green-500"
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Header */}
                    <div className="mb-10">
                        <nav aria-label="Breadcrumb" className="flex mb-4 text-sm font-medium text-slate-400">
                            <ol className="flex items-center space-x-2">
                                <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
                                <li><ChevronRight className="w-4 h-4" /></li>
                                <li aria-current="page" className="text-primary">Berita</li>
                            </ol>
                        </nav>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Arsip Berita & Informasi</h1>
                                <p className="text-slate-400 max-w-2xl text-lg font-light">
                                    Temukan pembaruan terkini, panduan teknis, dan publikasi resmi terkait perencanaan pembangunan di Kota Sukabumi.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <button className="text-sm text-slate-400 hover:text-primary flex items-center gap-1 transition-colors">
                                    <Share2 className="w-4 h-4" /> Langganan RSS
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Search & Filter */}
                    <div className="bg-card-dark/40 backdrop-blur-xl border border-white/5 p-4 rounded-xl mb-12 flex flex-col md:flex-row gap-4 items-center shadow-2xl shadow-black/20">
                        <div className="relative w-full md:flex-1 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-slate-900/80 transition-all sm:text-sm"
                                placeholder="Cari judul berita, topik, atau kata kunci..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="relative w-full md:w-48 group">
                            <select
                                className="block w-full pl-4 pr-10 py-3 border-none rounded-lg leading-5 bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-slate-900/80 transition-all sm:text-sm appearance-none cursor-pointer"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Semua Kategori</option>
                                <option value="Berita">Berita</option>
                                <option value="Panduan">Panduan</option>
                                <option value="Publikasi">Publikasi</option>
                                <option value="Infografis">Infografis</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                            </div>
                        </div>

                        <div className="relative w-full md:w-48 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input type="month" className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-slate-900/80 transition-all sm:text-sm cursor-pointer [color-scheme:dark]" />
                        </div>

                        <button className="w-full md:w-auto bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                            Terapkan
                        </button>
                    </div>

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {newsItems.filter(item => selectedCategory ? item.category === selectedCategory : true).map((item) => (
                            <article key={item.id} className="bg-card-dark/30 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden flex flex-col group h-full hover:-translate-y-1 hover:bg-card-dark/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${item.color.replace('bg-', 'text-')} bg-white/10 border border-white/10 backdrop-blur-md shadow-lg`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.color} mr-2 ${item.category === 'Berita' ? 'animate-pulse' : ''}`}></span>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-slate-400 mb-3 space-x-2">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{item.date}</span>
                                        {item.readTime && (
                                            <>
                                                <span>•</span>
                                                <span>{item.readTime}</span>
                                            </>
                                        )}
                                        {item.type && (
                                            <>
                                                <span>•</span>
                                                <span>{item.type}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {item.desc}
                                    </p>
                                    <Link to={`/berita/${item.id}`} className="inline-flex items-center text-primary font-medium text-sm group-hover:underline decoration-primary/50 underline-offset-4 transition-all">
                                        {item.category === 'Panduan' && item.type === 'Video' ? 'Tonton Video' : item.category === 'Publikasi' ? 'Unduh Dokumen' : 'Baca Selengkapnya'}
                                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-110">1</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">2</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">3</button>
                        <div className="w-10 h-10 flex items-center justify-center text-slate-600">...</div>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">8</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-card-dark/40 backdrop-blur-xl border-t border-white/5 mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                                    <User className="text-white w-5 h-5" />
                                </div>
                                <span className="text-lg font-bold text-white tracking-wide">MUSRENBANG DIGITAL</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                                Platform resmi Pemerintah Kota Sukabumi untuk transparansi dan partisipasi publik dalam perencanaan pembangunan daerah yang berkelanjutan.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Video className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Navigasi</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Beranda</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Tentang Musrenbang</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Arsip Berita</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Statistik & Data</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Kontak Kami</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-slate-400">
                                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                    <span>Jl. R. Syamsudin, S.H. No. 25<br />Kota Sukabumi, Jawa Barat</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span>bappeda@sukabumikota.go.id</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>(0266) 221369</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">© 2024 Pemerintah Kota Sukabumi. Hak Cipta Dilindungi.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Kebijakan Privasi</a>
                            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Syarat Penggunaan</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
