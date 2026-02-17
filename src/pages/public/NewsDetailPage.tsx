import { Link } from 'react-router-dom';
import {
    ArrowLeft, Calendar, User, MessageCircle, Facebook, Link as LinkIcon
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NewsDetailPage() {
    // const { id } = useParams();

    // Mock data based on the HTML provided - in a real app this would be fetched based on ID
    const news = {
        title: "Pembangunan Infrastruktur Jalan Lingkar Sukabumi Dimulai",
        category: "Pembangunan",
        date: "20 Mei 2024",
        author: "Admin Bappeda",
        description: "Langkah strategis pemerintah kota dalam mengurai kemacetan dan meningkatkan konektivitas antar wilayah selatan.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBinuPkeVHcDoPn2foiR3E1g-gGYMqVYSeytIrBWoA4eXoB_Pm2J_x5pOm_IXlBFTRlhEhbTE4dPRr0hQ3skg3X9SJO7lCFHmjh52YW3103igcuzQ7zJ8gHkm0kBonfkug0nhA1R9RRrthwIEihvYUqFPWdFVkkupr0zGbliFCLg9HvDJSSwWHv_wuXxXm8ToNwAGS_Q5KbI06p5UPCm9wWHsALw-654nXxEyipD0dfTQisnu6z_2yBq3CXBpBplJz6L5uK6nZqNIg"
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
            <Navbar />

            <main className="relative">
                {/* Hero Header */}
                <div className="relative w-full h-[60vh] min-h-[500px] group overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                        />
                    </div>
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>

                    {/* Hero Content */}
                    <div className="absolute bottom-0 w-full pb-16 pt-32 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto relative">
                            {/* Back Button */}
                            <Link
                                to="/berita"
                                className="absolute -top-32 left-0 inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white text-sm font-medium transition-all group/back"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover/back:-translate-x-1 transition-transform" />
                                Kembali ke Berita
                            </Link>

                            <div className="max-w-4xl">
                                <div className="flex items-center gap-3 mb-6 flex-wrap">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white shadow-lg shadow-blue-500/25">
                                        {news.category}
                                    </span>
                                    <span className="flex items-center text-slate-300 text-sm font-medium">
                                        <Calendar className="w-4 h-4 mr-1.5 opacity-70" />
                                        {news.date}
                                    </span>
                                    <span className="flex items-center text-slate-300 text-sm font-medium border-l border-slate-500 pl-3 ml-1">
                                        <User className="w-4 h-4 mr-1.5 opacity-70" />
                                        Oleh: {news.author}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm mb-4">
                                    {news.title}
                                </h1>
                                <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                                    {news.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area: Centered Card */}
                <div className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-[900px] mx-auto">
                        {/* Main Glassmorphism Card */}
                        <article className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                            {/* Article Body */}
                            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                                <p className="lead text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8">
                                    <strong className="text-primary dark:text-blue-400 font-semibold">Sukabumi, {news.date}</strong> — Pemerintah Kota Sukabumi secara resmi memulai tahap pertama pembangunan Jalan Lingkar Selatan segmen 3. Proyek strategis ini diharapkan menjadi solusi jangka panjang bagi permasalahan lalu lintas di pusat kota yang semakin padat.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                    Dalam sambutannya, Walikota menekankan pentingnya infrastruktur yang memadai untuk mendukung pertumbuhan ekonomi daerah. Pembangunan ini tidak hanya sekadar mengaspal jalan, tetapi membuka akses ekonomi baru bagi warga yang berada di lintasan jalur tersebut. "Kita ingin Sukabumi bukan hanya menjadi kota lintasan, tapi kota tujuan dengan aksesibilitas yang prima," ujarnya.
                                </p>

                                {/* Quote Block */}
                                <blockquote className="relative pl-6 py-2 border-l-4 border-blue-500 bg-slate-100 dark:bg-slate-900/50 rounded-r-lg my-10 italic">
                                    <p className="text-lg font-medium text-slate-800 dark:text-slate-200 m-0">
                                        "Proyek ini adalah wujud nyata komitmen kami mendengarkan aspirasi masyarakat melalui Musrenbang tahun lalu. Ini adalah uang rakyat yang kembali ke rakyat dalam bentuk fasilitas publik."
                                    </p>
                                    <footer className="mt-2 text-sm text-slate-500 dark:text-slate-400 not-italic font-semibold">— Kepala Bappeda Kota Sukabumi</footer>
                                </blockquote>

                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                                    Tahap awal pengerjaan akan difokuskan pada pembebasan lahan tersisa di dua kecamatan dan penyiapan struktur dasar jembatan Cipelang. Dinas Pekerjaan Umum dan Tata Ruang (PUTR) menargetkan segmen ini dapat dilalui kendaraan pada pertengahan tahun 2025.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-10">Dokumentasi Lapangan</h3>

                                {/* In-text Gallery Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 not-prose">
                                    <figure className="relative group overflow-hidden rounded-lg shadow-lg">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqtTQ5OcK7Ci4nO5EDsx1pbtS8nQEQhMgCLYeoaruEKBNz3PoReMrNUSysl67_AVF_SrMj0fXbjx88tEehbfCdCsMWLxRKE3dRcg_2OSfessYQei-ImhbQfk47GpD5RFsPl_2eWvYQsnAHC9MaWScg6ySXVWf3yUrTRT2hEG6Wjhd1xSEQPngXkOLQEoz0f-jwQxdB8hn0HMf9vX3CEf_uEp97QDacYUp-CXpQBDnm4cZRTU7TpGOlh5YH01pG8QM2vItu0XG2kZA"
                                            alt="Excavator working on road construction site"
                                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <span className="text-white text-sm font-medium">Proses Land Clearing</span>
                                        </figcaption>
                                    </figure>
                                    <figure className="relative group overflow-hidden rounded-lg shadow-lg">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9S-G2FuFO1s6--0C8pAgPo_bQXPU03zcUhqXLMSpYVT7ReQhZ8w-Y_IIbLaDg55ooeyr8rFO1TXhwc3UIQulGmimEvy-u6L7GvgqeZMsJFPg0-m39mGNi-pwKuWHTtIcGN_N92O26YLwjyMUnaG5EZxPB0xhM3e4TYkse5ZWxJBq8YvirAIdxEOxVY9Cao3VBUpBUd7oa-g3xC1Fn74sawRFZeJVmWgGlhhWPbpoHT8_NE-IT717UgADkOizdo-HKKcN8saT7Io"
                                            alt="Engineers discussing blueprints on site"
                                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <span className="text-white text-sm font-medium">Peninjauan Lokasi</span>
                                        </figcaption>
                                    </figure>
                                </div>

                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    Masyarakat dihimbau untuk mendukung kelancaran proyek ini dan mematuhi rekayasa lalu lintas sementara di titik-titik persimpangan yang sedang dikerjakan. Informasi berkala mengenai progres pembangunan akan terus diperbarui melalui portal Musrenbang Digital ini.
                                </p>
                            </div>

                            {/* Divider */}
                            <hr className="my-10 border-slate-200 dark:border-slate-700" />

                            {/* Bottom Section: Share & Tags */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bagikan Berita</span>
                                    <div className="flex gap-3">
                                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300 group shadow-sm">
                                            <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-[#1877F2] hover:text-white dark:hover:bg-[#1877F2] flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300 group shadow-sm">
                                            <Facebook className="w-5 h-5" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-black hover:text-white dark:hover:bg-black flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300 group shadow-sm">
                                            <span className="font-bold text-lg font-sans">X</span>
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300 group shadow-sm">
                                            <LinkIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-600">#Infrastruktur</span>
                                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-600">#KotaSukabumi</span>
                                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-600">#Bappeda</span>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar/Related Content Below */}
                        <div className="mt-12">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
                                Berita Terkait
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Related Item 1 */}
                                <Link to="#" className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/30 rounded-lg p-4 transition-all duration-300 flex items-start space-x-4">
                                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-700">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXQx3HvtqCi6BM0zZpqWKkWm6YtvvtJXEqw5PXKulbYOAe7q949o1cn8xm13rtyCSB2vTK0DotSNvsgRWnqojG-o8gGufwWL5CgufQGcy8TwFX_ilIfPeWgxu3WHCBJcLjV7rMwWDuG6984uCQvc9PmGL37yAWs05wPhEV0Jf9Gen3szQ1Ifz5RdshBc2aLWM_c4Kc9-Tn2Ge3pRRz1Lx6UQ56EmJ4R3V5r7bWq58BZrWIFDHXtgAxiPI0jsjoRvweDqHF6dgXsI"
                                            alt="City park renovation thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-blue-500 font-medium mb-1">Tata Ruang</p>
                                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                                            Revitalisasi Taman Kota Lapang Merdeka Segera Rampung
                                        </h4>
                                        <p className="text-xs text-slate-400 mt-2">18 Mei 2024</p>
                                    </div>
                                </Link>

                                {/* Related Item 2 */}
                                <Link to="#" className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/30 rounded-lg p-4 transition-all duration-300 flex items-start space-x-4">
                                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-700">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJbbDh7Hv91Uxxx_czg2GVClqyEAcHRtdR1xkuEI5X45oKRNWfo1-2NuabCarEndJZICmY27nJUcxxzmICS8tJ-_E4BjPx9lG6R5RTAU1EdjF9ftNPRNB0Zy-M1C62mRdJOba0m4E3pGbVMtxMtsA-tMvnFT_GJ11Mi6V7uJFdWs9fFJD7qCQfy4T06-rfOVCRt0EkLgtOf_4Xk_DrHtCwl7ftNjuouKeIQKdIgJ7QIydacGvR9_gN34jLzGzo-COgFL5zDdHglus"
                                            alt="Data chart on digital tablet thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-blue-500 font-medium mb-1">Ekonomi</p>
                                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                                            Pertumbuhan Ekonomi Digital Kota Sukabumi Meningkat
                                        </h4>
                                        <p className="text-xs text-slate-400 mt-2">15 Mei 2024</p>
                                    </div>
                                </Link>

                                {/* Related Item 3 */}
                                <Link to="#" className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/30 rounded-lg p-4 transition-all duration-300 flex items-start space-x-4">
                                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-700">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0zzf8cz24AQEMQtl1ShMIEdBqBRDjvJRiYD9CWfZMSe78Z7gu3tJiQjc2VOxqdcuNUDmIoJBnSbBPCVm6NEDQd_XAtVFTLhuXZJ299QnNKJILABmyDSy-dySl5fNclYHvBh78GD4A7bZDcmjogXrb3fN6TM4bHORffDoII7OwxnRN4r54fDYDnowN_sjrt4E26MHr3lCTMXEHrVzhb99V0Y8g9-r8MGS8brzJXnEL4h49kY_PiZ8-ijCOtZy4WveBrtA1TCYDxw8"
                                            alt="Conference meeting room thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-blue-500 font-medium mb-1">Pemerintahan</p>
                                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                                            Hasil Evaluasi Musrenbang RKPD Tahun 2024
                                        </h4>
                                        <p className="text-xs text-slate-400 mt-2">12 Mei 2024</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
