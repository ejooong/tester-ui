
import {
    ArrowLeft,
    Info,
    MapPin,
    FileText,
    Image as ImageIcon,
    CheckCircle,
    XCircle,
    Shield,
    History
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ProposalDetailPage() {
    const { id } = useParams();

    return (
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-900/40 border border-cyan-500/30 text-cyan-300">Infrastruktur</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Terakhir diperbarui: 2 Jam lalu
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">Detail Usulan <span className="text-cyan-400 font-mono">#{id || '2024-001'}</span></h1>
                </div>
                <Link to="/admin/bappeda/usulan" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-slate-300 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 font-medium transition-all backdrop-blur-sm">
                    <ArrowLeft className="w-4 h-4" />
                    Kembali
                </Link>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Information Panel */}
                    <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Info className="text-cyan-400 w-5 h-5" />
                            Informasi Usulan
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-cyan-200/70 uppercase tracking-widest">Judul Usulan</label>
                                <p className="text-lg font-medium text-white border-b border-white/5 pb-2">Perbaikan Jalan Desa & Drainase</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-cyan-200/70 uppercase tracking-widest">Pengusul</label>
                                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                                    <p className="text-lg font-medium text-white">Budi Santoso</p>
                                    <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">NIK: 320123...</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-cyan-200/70 uppercase tracking-widest">Kategori</label>
                                <p className="text-base font-medium text-slate-200 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-cyan-500" />
                                    Pembangunan Fisik
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-cyan-200/70 uppercase tracking-widest">Lokasi</label>
                                <p className="text-base font-medium text-slate-200 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-cyan-500" />
                                    Kec. Sukamaju, Kel. Harapan, RW 05
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <label className="text-xs font-semibold text-cyan-200/70 uppercase tracking-widest">Deskripsi Lengkap</label>
                            <div className="w-full p-4 rounded-xl bg-black/20 border border-white/5 text-slate-300 text-sm leading-relaxed backdrop-blur-sm shadow-inner">
                                Kondisi jalan saat ini rusak parah berlubang sedalam 10-15cm di sepanjang 500 meter, menyebabkan genangan air saat hujan dan membahayakan pengendara motor. Saluran drainase di sisi kiri jalan juga tersumbat sedimen, perlu pengerukan dan perbaikan dinding penahan tanah agar tidak longsor ke badan jalan. Mohon segera ditindaklanjuti untuk akses ekonomi warga.
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-semibold text-cyan-200/70 uppercase tracking-widest">Foto Lampiran</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-800 border border-white/10 group cursor-pointer relative shadow-lg">
                                        <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500">
                                            <ImageIcon className="w-8 h-8 opacity-50" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                            <span className="text-xs text-white">View</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="aspect-square rounded-xl bg-white/5 border border-white/10 border-dashed flex flex-col gap-2 items-center justify-center text-slate-500 cursor-not-allowed">
                                    <ImageIcon className="w-6 h-6 opacity-30" />
                                    <span className="text-[10px] uppercase tracking-wide">No Image</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Preview */}
                    <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <MapPin className="text-cyan-400 w-5 h-5" />
                                Lokasi di Peta
                            </h2>
                            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.1)]">-6.2088, 106.8456</span>
                        </div>
                        <div className="relative w-full h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 flex items-center justify-center">
                            <span className="text-slate-500">Map Preview Placeholder</span>
                            {/* Map Pattern Overlay */}
                            <div className="absolute inset-0 map-pattern opacity-30 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Actions */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Status Card */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <History className="text-cyan-400 w-5 h-5" />
                            Status Saat Ini
                        </h2>

                        <div className="relative pl-4 border-l-2 border-white/10 space-y-8 my-2 ml-2">
                            <div className="relative group">
                                <div className="absolute -left-[23px] top-1 w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] border-2 border-slate-900 group-hover:scale-110 transition-transform"></div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-bold text-emerald-400">Diajukan Warga</h4>
                                    <p className="text-xs text-slate-400 mt-1">12 Jan 2024, 09:30 WIB</p>
                                    <p className="text-xs text-slate-500 mt-1">Diusulkan oleh Budi Santoso</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[23px] top-1 w-5 h-5 rounded-full bg-cyan-500 border-2 border-white shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-pulse"></div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-bold text-cyan-400 glow-text">Menunggu Verifikasi Bappeda</h4>
                                    <p className="text-xs text-slate-300 mt-1">Sedang Berlangsung</p>
                                    <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-[10px] font-bold uppercase tracking-wide rounded">Pending Review</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verification Panel */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] border-t border-t-cyan-500/50">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
                        <h2 className="text-xl font-bold text-white mb-1 relative z-10 flex items-center gap-2">
                            <Shield className="text-cyan-400 w-5 h-5" />
                            Panel Verifikasi
                        </h2>
                        <p className="text-xs text-slate-400 mb-6 relative z-10">Tinjau usulan ini dengan seksama sebelum mengambil keputusan.</p>

                        <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-cyan-200/70 uppercase tracking-widest mb-2" htmlFor="catatan">Catatan Verifikator</label>
                                <textarea
                                    className="w-full rounded-xl border border-white/10 bg-black/40 text-white shadow-inner focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm resize-none placeholder:text-slate-600 p-4 backdrop-blur-sm"
                                    id="catatan"
                                    placeholder="Tuliskan alasan setuju, penolakan, atau catatan perbaikan..."
                                    rows={4}
                                ></textarea>
                                <p className="text-xs text-slate-500 mt-2 text-right">Maksimal 500 karakter</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl active:scale-[0.98] transition-all border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                    <CheckCircle className="w-5 h-5" />
                                    Verifikasi & Lanjutkan
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 font-bold rounded-xl transition-all active:scale-[0.98] backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                    <XCircle className="w-5 h-5" />
                                    Tolak Usulan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
