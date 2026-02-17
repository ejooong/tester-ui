
import { useState } from 'react';
import {
    Search, Grid, List, Calendar, Eye, Download,
    ChevronDown, ChevronLeft, ChevronRight, MapPin, Phone, Mail,
    Facebook, Monitor, AtSign, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function InfographicPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [activeCategory, setActiveCategory] = useState('Semua');

    const categories = ['Semua', 'Infrastruktur', 'Ekonomi & UMKM', 'Kesehatan (Stunting)', 'RTRW'];

    const infographics = [
        {
            id: 1,
            title: "Peta Sebaran Penurunan Stunting Q3",
            category: "Kesehatan",
            date: "12 Okt 2023",
            views: "1.2k",
            source: "Dinkes",
            desc: "Visualisasi data kecamatan dengan penurunan angka stunting tertinggi dan program intervensi gizi.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_UUt1DVkzJjhZatNLNfGZSLjN9uM2Z8rdBYxlSXQcrkm5Im0unTyjVulzNOioZmNXldVn-tBqCbMhFMNaClpNANeKF9-5QA-MTiX0XMZ8DBp5CeN3AhgC56wuwes5a6uc0ZanQms-xvUn8u_8PmlTk0o8ot53z43TNd-ZI7l1ECxeS68KZpOmHOTVwea8Ahz3bm-tBsvYhAh8jDz_Frnh3jM0aNRMcmVONls7OFpbNybyzIMVTSJQHcuYCDjlovVOQRGPcxRCW9Q",
            color: "bg-rose-500",
            aspect: "aspect-[3/4]"
        },
        {
            id: 2,
            title: "Progress Jalan Lingkar Selatan Sesi 2",
            category: "Infrastruktur",
            date: "10 Okt 2023",
            views: "854",
            source: "PUPR",
            desc: "Infografis timeline pengerjaan dan deviasi target fisik pembangunan jalan lingkar.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL-laXoAnZHBWGx6pQIymj6z0xXinhM0iaJsx6CRKVZgk44MVqNnuzHmlkZ0_javwbnx4vcqJe9CXNwF4N5TF3xj2Y6D09vieraWfT_OjevG1omuBjAbJ9TO0mBveHmzlx4DHOG_mg4UbBYbyBJDgRoxC-N7bZ56Sx9uecz-oLOobkMJjAD-6E4vaFW3u7QUsVV4XQ1ogFHmyTt7_Yk3j-nxjBNAons4yz3dANxBdyqtGrX87VZMb_d3GpOUbFZzHwYgXDqioYjtM",
            color: "bg-amber-500",
            aspect: "aspect-video"
        },
        {
            id: 3,
            title: "Pertumbuhan UMKM Digital 2023",
            category: "Ekonomi",
            date: "08 Okt 2023",
            views: "2.4k",
            source: "Diskoperindag",
            desc: "Statistik adopsi QRIS dan e-commerce pada pelaku usaha mikro di 7 kecamatan.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKjsqNiOoaywYuvMyklWGqyuJFx_cQDP0TgZFXNq6MtiMvpZs9ee7IhmbMQJudlC0ij_D6k6dHeWkY1tbR-ku2OKRdKYbwRP7MSUOqB_h4_lOfhYYsnJHJTKzBUBWK03dSNI-SduSnpb1XlWpW71WNwDPoMhhcp_a5sMTbcMW8OiRNirjC79F5l0xaGarLHR136rep2TIvw6ck9PCD9yuxBsd8JSAQqeLEagQ6yrKtbiYNDmR8L8DdBa6FRr3kJcvfpqGHH7Bk020",
            color: "bg-emerald-500",
            aspect: "aspect-square"
        },
        {
            id: 4,
            title: "Revisi RTRW Zona Industri 2024-2029",
            category: "Tata Ruang",
            date: "05 Okt 2023",
            views: "3.1k",
            source: "Bappeda",
            desc: "Peta zonasi baru untuk pengembangan kawasan industri ramah lingkungan di Sukabumi Selatan.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2HY3rTBMUhatazoUvKz7Qet2q07y-ErpbBroEv8uWxeb2EHzPAoPtJZrvhdPJxdYD97QNZ6HLEpfrbp2C6WApCFqrEb7zFADB1b3FJFvywcARC2kT9Gqs2Nyq0mB7ZBK2FEJXbR5rUOJAM2PT39oayoacBsUMMzeaNnQab6tb0oDHUMEla626v1uhQqI1PWLgD-DLdqBnSHrMyk8j43AboptyggT1OJuxG1Fv0sCtApQt3eThgFmZdrLQZGmvRWYpl8PRWBbiPXc",
            color: "bg-purple-500",
            aspect: "aspect-[3/5]"
        },
        {
            id: 5,
            title: "Angka Partisipasi Sekolah 2023",
            category: "Pendidikan",
            date: "01 Okt 2023",
            views: "920",
            source: "Disdik",
            desc: "Perbandingan APK dan APM jenjang SD, SMP, dan SMA di Kota Sukabumi tahun ajaran 2022/2023.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfqLn8V69Z_4UQgNQGb-XDhUefPE9X5BgjxvL-4UVefrlW97RxbvL8t-S0A7VYN5oM3ybyuCAPZxKPQVSGvAAWXz09k764TohOcK9vHxW4nJ9Wt9xj43f9qKMG2bTLvOnvlnItnvNtTzvuZn2qmnyFErOlW5huRmR0LT1q8UnfkCQVCq_pdQ58J9Dzx7XiWCTj6F1ua5BfCqxyuvFIvEcRZIQcgEYTINGLZWGziEoAQn-GV1CTsw0_tUEqp3n3GX_kro8xOL82A2w",
            color: "bg-blue-500",
            aspect: "aspect-video"
        },
        {
            id: 6,
            title: "Indeks Kualitas Udara Semester 1",
            category: "Lingkungan",
            date: "28 Sep 2023",
            views: "1.8k",
            source: "DLH",
            desc: "Laporan pemantauan ISPU di 5 titik stasiun pemantau kualitas udara kota.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7QI169yxDt-isD_BzMrdtUun7EvziI5DwIieHs3oY2Y-kn4YApkWfjp3ClV42-IckIcAh9iL0Iqlg_DmbVCJB2aiyzmGlI8HCIbqLhT2l0HUQwnO14izTrqfjpqgnR5AZeADyNNoImyVCE9xUaHZncpnmt45acTzlYMy-7YRT6TLOpSQSHXhxv9x0mYaMOqrl7jdTAwILrOvvKC6-QMU1kdkpWLIBLJeN-D4_EmwnHL4dsTWK8RG2392gA2o9lSJjS7OeQV285Fc",
            color: "bg-teal-500",
            aspect: "aspect-square"
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 antialiased min-h-screen flex flex-col">

            {/* Navigation Bar */}
            {/* Navigation Bar */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow p-4 md:p-8 lg:p-12 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px]"></div>
                    {/* Grid pattern overlay approximated */}
                    <div className="absolute inset-0 bg-[#0F172A] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto space-y-8">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/5 pb-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                Update Mingguan
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">Infografis Pembangunan Kota</h1>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Transparansi visual capaian kinerja dan rencana pembangunan daerah Kota Sukabumi untuk masyarakat yang lebih informatif.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg border transition-colors ${viewMode === 'grid' ? 'text-white bg-slate-800 border-primary/50' : 'text-slate-400 bg-slate-800/50 border-white/5 hover:text-white'}`}
                                title="Grid View"
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg border transition-colors ${viewMode === 'list' ? 'text-white bg-slate-800 border-primary/50' : 'text-slate-400 bg-slate-800/50 border-white/5 hover:text-white'}`}
                                title="List View"
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="bg-card-dark/70 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col lg:flex-row justify-between items-center gap-4 shadow-lg">
                        {/* Categories */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap border ${activeCategory === cat ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-white/5'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort & Search */}
                        <div className="flex items-center gap-3 w-full lg:w-auto border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
                            <div className="relative group">
                                <select className="appearance-none bg-slate-800 text-slate-300 pl-4 pr-10 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm cursor-pointer hover:bg-slate-700 transition-colors">
                                    <option>Terbaru</option>
                                    <option>Terpopuler</option>
                                    <option>Terlama</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-4 h-4" />
                            </div>
                            <div className="relative w-full lg:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <input type="text" className="w-full bg-slate-800/50 text-white pl-10 pr-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm placeholder-slate-500 transition-all" placeholder="Cari data visual..." />
                            </div>
                        </div>
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {infographics.map((item) => (
                            <div key={item.id} className="break-inside-avoid group relative bg-card-dark rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                <div className={`relative overflow-hidden ${item.aspect}`}>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                        <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/40 transform hover:scale-110 transition-transform">
                                            <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full ${item.color}/90 text-white text-xs font-bold shadow-lg backdrop-blur-sm`}>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-mono">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <span>{item.source}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-5 line-clamp-2">
                                        {item.desc}
                                    </p>

                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <Eye className="w-3.5 h-3.5" />
                                            <span>{item.views} views</span>
                                        </div>
                                        <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors border border-cyan-500/30 hover:bg-cyan-500/10 px-3 py-1.5 rounded-md">
                                            <Download className="w-3.5 h-3.5" /> Unduh
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-12 mb-8">
                        <nav className="flex items-center gap-2 bg-card-dark p-2 rounded-xl border border-white/5 shadow-lg">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors font-medium">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors font-medium">3</button>
                            <span className="text-slate-600 px-2">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors font-medium">12</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </nav>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-background-dark border-t border-white/10 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
                                    <Grid className="w-5 h-5" />
                                </div>
                                <span className="text-white font-bold text-lg">SukabumiSatuData</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Platform integrasi data pembangunan Kota Sukabumi untuk mewujudkan pemerintahan yang transparan, akuntabel, dan inovatif.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Monitor className="w-5 h-5" /></a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors"><AtSign className="w-5 h-5" /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-6">Kategori Data</h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Infrastruktur Daerah</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Ekonomi & Bisnis</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Kependudukan</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Kesehatan</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Pendidikan</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-6">Layanan Publik</h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Permohonan Informasi</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Pengaduan Masyarakat</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Cek Status Bantuan</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Peta Rawan Bencana</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-6">Kontak Kami</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                                    <span>Jl. R. Syamsudin, S.H. No. 25, Cikole, Kota Sukabumi, Jawa Barat 43111</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span>(0266) 221123</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span>diskominfo@sukabumikota.go.id</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">© 2023 Pemerintah Kota Sukabumi. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-slate-500">
                            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-300">Terms of Service</a>
                            <a href="#" className="hover:text-slate-300">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
