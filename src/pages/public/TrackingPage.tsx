
import { useState } from 'react';
import {
    Search, Info, Calendar, History, Check, UserCheck,
    RefreshCw, Users, Map, HelpCircle, Construction, MapPin,
    DollarSign, Eye, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TrackingPage() {
    const [trackingId, setTrackingId] = useState('TRK-2024-01-00123');

    return (
        <div className="bg-background-dark min-h-screen font-sans text-slate-100 flex flex-col relative selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="flex-grow relative pt-32">
                {/* Background Glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2"></div>
                </div>

                {/* Hero Header */}
                <div className="relative z-10 pb-20 text-center px-4 sm:px-6 lg:px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                        Transparansi Publik
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
                        Lacak Status Usulan
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
                        Pantau perjalanan usulan pembangunan Anda secara transparan dan real-time. Masukkan nomor tiket untuk melihat detail progres.
                    </p>
                </div>

                {/* Search Box */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-16">
                    <div className="bg-card-dark/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <label className="block text-sm font-medium text-slate-300 mb-3" htmlFor="tracking-id">
                            Masukkan Nomor Tracking atau NIK
                        </label>

                        <div className="relative flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="tracking-id"
                                    className="bg-slate-900/60 block w-full rounded-xl pl-12 pr-4 py-4 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-inner border border-white/10"
                                    placeholder="Contoh: TRK-2024-01-00123"
                                    value={trackingId}
                                    onChange={(e) => setTrackingId(e.target.value)}
                                />
                            </div>
                            <button type="button" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all shadow-lg shadow-blue-900/30">
                                Cari Usulan
                            </button>
                        </div>

                        <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                            <Info className="w-4 h-4" />
                            Gunakan nomor tiket yang Anda dapatkan saat mengajukan usulan.
                        </p>
                    </div>
                </div>

                {/* Results */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Timeline Column */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-card-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                    {/* Large icon background */}
                                </div>

                                <div className="relative z-10">
                                    {/* Header Info */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                                        <div>
                                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">Nomor Tiket</span>
                                            <div className="text-xl font-mono font-bold text-white tracking-wide">{trackingId}</div>
                                        </div>
                                        <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                            <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                                            Dalam Proses Verifikasi
                                        </span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Perbaikan Jalan Lingkungan RW 05</h2>

                                    <div className="flex items-center text-slate-400 text-sm mb-8 bg-slate-800/50 w-fit px-3 py-1.5 rounded-md border border-slate-700/50">
                                        <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                                        Diajukan pada 12 Januari 2024
                                    </div>

                                    <div className="h-px bg-slate-700/50 w-full mb-8"></div>

                                    {/* Timeline */}
                                    <div className="relative pl-2">
                                        <h3 className="text-sm font-bold text-slate-300 mb-8 uppercase tracking-widest flex items-center gap-2">
                                            <History className="w-5 h-5" />
                                            Riwayat Status
                                        </h3>

                                        {/* Step 1: Completed */}
                                        <div className="relative flex items-start mb-10 group">
                                            <div className="absolute left-[1.25rem] top-10 bottom-[-1rem] w-0.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] z-0"></div>
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)] z-10 backdrop-blur-sm">
                                                <Check className="text-green-400 w-4 h-4" />
                                            </div>
                                            <div className="ml-6 flex-grow pt-1">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Usulan Diajukan</h4>
                                                    <span className="text-xs font-medium text-slate-500 mt-1 sm:mt-0 font-mono">12 Jan 2024, 09:30</span>
                                                </div>
                                                <p className="text-sm text-slate-400">Usulan berhasil dikirim oleh masyarakat.</p>
                                            </div>
                                        </div>

                                        {/* Step 2: Active */}
                                        <div className="relative flex items-start mb-10 group">
                                            <div className="absolute left-[1.25rem] top-10 bottom-[-1rem] w-0.5 bg-gradient-to-b from-blue-500 to-slate-700 shadow-[0_0_8px_rgba(59,130,246,0.4)] z-0"></div>
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)] z-10 backdrop-blur-sm">
                                                <UserCheck className="text-green-400 w-4 h-4" />
                                            </div>
                                            <div className="ml-6 flex-grow pt-1">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Verifikasi Kelurahan</h4>
                                                    <span className="text-xs font-medium text-slate-500 mt-1 sm:mt-0 font-mono">15 Jan 2024, 14:15</span>
                                                </div>
                                                <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 mt-2">
                                                    <p className="text-sm text-slate-300">Disetujui oleh Kepala Kelurahan Benteng.</p>
                                                    <p className="text-sm text-slate-500 italic mt-1">"Prioritas tinggi untuk akses warga."</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 3: Current */}
                                        <div className="relative flex items-start mb-10 group">
                                            <div className="absolute left-[1.25rem] top-10 bottom-[-1rem] w-0.5 bg-slate-700 z-0"></div>
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full border-4 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                                                <RefreshCw className="text-white w-4 h-4 animate-spin" />
                                            </div>
                                            <div className="ml-6 flex-grow bg-blue-500/10 p-5 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-900/10">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                                    <h4 className="text-lg font-bold text-blue-300">Verifikasi Bappeda</h4>
                                                    <span className="text-xs font-bold text-blue-200 mt-1 sm:mt-0 px-2 py-1 bg-blue-500/20 rounded border border-blue-500/30">Sedang Berlangsung</span>
                                                </div>
                                                <p className="text-sm text-slate-300 leading-relaxed">Sedang dalam tahap peninjauan kelayakan teknis dan anggaran oleh tim Bappeda Kota Sukabumi.</p>
                                            </div>
                                        </div>

                                        {/* Step 4: Future */}
                                        <div className="relative flex items-start group opacity-40">
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full border border-slate-700 z-10">
                                                <Users className="text-slate-500 w-4 h-4" />
                                            </div>
                                            <div className="ml-6 flex-grow pt-1">
                                                <h4 className="text-lg font-semibold text-slate-300">Pembahasan Forum OPD</h4>
                                                <p className="text-sm text-slate-500 mt-1">Menunggu jadwal forum perangkat daerah.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Details */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-card-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-b border-slate-700/50 pb-4 flex items-center justify-between">
                                    Detail Usulan
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2">Kategori</span>
                                        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                                <Construction className="text-orange-400 w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-white">Infrastruktur Fisik</span>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2">Lokasi</span>
                                        <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                            <MapPin className="text-slate-400 w-4 h-4 mt-0.5" />
                                            <span className="text-sm font-medium text-white leading-snug">Jl. Bhayangkara Gg. Kaswari No. 12, Kel. Gunungpuyuh</span>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2">Anggaran Diajukan</span>
                                        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                            <DollarSign className="text-slate-400 w-4 h-4" />
                                            <span className="text-sm font-mono font-medium text-white">Rp 150.000.000</span>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-3">Foto Lokasi</span>
                                        <div className="h-32 w-full rounded-xl bg-slate-800 overflow-hidden relative group cursor-pointer border border-slate-700/50 shadow-md">
                                            <img
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9nv0Vq6cwGFGwHlnvWK6m77FFy43X88U-rso2ZH04CS_hlH8XGBiDW025z8KpUazEszzXOMAKiPj2ZM3YKIXrgmXACwuuZbOwU68_wnW43I1Td4GznPazpfAHSvNisUKdauUpTdK0tQ1HPk51ndq8AP2scEx0uJvoYyTFx64bLBQjt-mrDo84fcOTPNTxGc5p0QSegmYA6oKr8QWdRraGX4FwrcVeX4cHWSl_sq5MbWDb1fsZzruHYNQZmvTWGWlFTXwwHzQM3I"
                                                alt="Location"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center backdrop-blur-[1px] group-hover:backdrop-blur-none">
                                                <Eye className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Card */}
                            <div className="bg-card-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-1 overflow-hidden shadow-lg group">
                                <div className="relative h-48 w-full bg-slate-800 rounded-xl overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8DK2A_RyU4_kLbu-m8OCZ7HYSLRWx2it0KWaGPjvJ7eEx9AC6pxaTZ0d70do4GOgZiflI_nTS393423jlQsnG4JcELW_j1yed1I9NEHN_ndSXqA1E6YGbTnzkZyzdMQJMlo30mAddubLgquIHqy8PXqIGLMh-BuR_BASl-vCx6NpqRMbgksjT_OlmKrxKy9XZRezFc7d2gj3Cz4TWu6GgamiUCjSwnKb716v275HFl-zZOUVtc0u926cruSutmRxyKI1GGIRZ23Y"
                                        alt="Map"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-slate-900/80 hover:bg-slate-800 text-blue-400 border border-blue-500/30 px-5 py-2.5 rounded-full text-xs font-bold shadow-lg transition-all flex items-center gap-2 backdrop-blur-sm">
                                            <Map className="w-3 h-3" />
                                            Lihat di Peta
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Help Card */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 rounded-2xl p-6 border border-blue-500/10 backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500/20 p-2 rounded-lg">
                                        <HelpCircle className="text-blue-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Butuh Bantuan?</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                                            Jika status usulan Anda tidak berubah selama lebih dari 30 hari kerja, silakan hubungi admin.
                                        </p>
                                        <a href="#" className="text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1 transition-colors">
                                            Hubungi Kami
                                            <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
