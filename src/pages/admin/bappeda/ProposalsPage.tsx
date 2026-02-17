
import {
    Search,
    Filter,
    Eye,
    Edit,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Download,
    Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProposalsPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 relative z-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <nav aria-label="Breadcrumb" className="flex mb-2">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm text-slate-400">
                            <li className="inline-flex items-center">
                                <Link to="/admin/bappeda" className="hover:text-primary transition-colors">Dashboard</Link>
                            </li>
                            <li className="flex items-center">
                                <ChevronRight className="w-4 h-4 mx-1 text-slate-600" />
                                <span className="text-primary font-medium">Manajemen Usulan</span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Manajemen Usulan</h1>
                    <p className="mt-1 text-sm text-slate-400">Kelola dan verifikasi usulan Musrenbang dari masyarakat.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="glass-card text-white hover:bg-white/5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center">
                        <Download className="w-5 h-5 mr-2 text-emerald-400" />
                        Export Excel
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-neon-blue transition-all flex items-center justify-center border border-primary/50">
                        <Plus className="w-5 h-5 mr-2" />
                        Tambah Usulan
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="glass-card rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
                    <div className="md:col-span-4">
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2" htmlFor="search">Pencarian</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="text-slate-500 group-focus-within:text-primary transition-colors w-5 h-5" />
                            </div>
                            <input
                                className="bg-slate-900/60 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 py-2.5 placeholder-slate-600 transition-all shadow-inner focus:outline-none focus:ring-1"
                                id="search"
                                name="search"
                                placeholder="Cari Judul Usulan..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2" htmlFor="kecamatan">Kecamatan</label>
                        <select className="bg-slate-900/60 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 cursor-pointer hover:border-slate-500 transition-colors focus:outline-none">
                            <option className="bg-slate-900">Semua</option>
                            <option className="bg-slate-900">Cikole</option>
                            <option className="bg-slate-900">Citamiang</option>
                            <option className="bg-slate-900">Warudoyong</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2" htmlFor="status">Status</label>
                        <select className="bg-slate-900/60 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 cursor-pointer hover:border-slate-500 transition-colors focus:outline-none">
                            <option className="bg-slate-900">Semua Status</option>
                            <option className="bg-slate-900">Diajukan</option>
                            <option className="bg-slate-900">Diverifikasi</option>
                            <option className="bg-slate-900">Ditolak</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <button className="w-full flex items-center justify-center px-4 py-2.5 border border-primary/30 rounded-lg text-sm font-medium text-white bg-primary/20 hover:bg-primary/40 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-slate-900">
                            <Filter className="w-5 h-5 mr-2" />
                            Terapkan
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-700">
                        <thead className="bg-slate-800/90 backdrop-blur">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-16">No</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-32">Tanggal</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Judul Usulan</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-48">Lokasi</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider w-40">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider w-36">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700 bg-slate-900/40">
                            {[
                                { id: 1, date: "2023-10-24", title: "Perbaikan Jalan Lingkungan RW 05", desc: "Aspal hotmix sepanjang 500m", loc: "Kec. Cikole", status: "Diverifikasi", color: "blue", proposer: "Budi S." },
                                { id: 2, date: "2023-10-25", title: "Pengadaan Alat Kesehatan Posyandu", desc: "Timbangan bayi digital", loc: "Kec. Warudoyong", status: "Disetujui Desa", color: "emerald", proposer: "Siti A." },
                                { id: 3, date: "2023-10-26", title: "Pelatihan UMKM Kerajinan", desc: "Pelatihan ibu-ibu PKK", loc: "Kec. Citamiang", status: "Diajukan", color: "amber", proposer: "Rina R." },
                                { id: 4, date: "2023-10-22", title: "Renovasi Gedung Sekolah SDN 1", desc: "Perbaikan atap bocor", loc: "Kec. Cikole", status: "Diproses OPD", color: "purple", proposer: "Dedi S." },
                                { id: 5, date: "2023-10-20", title: "Pembangunan Gapura RW", desc: "Gapura selamat datang", loc: "Kec. Warudoyong", status: "Ditolak", color: "red", proposer: "Asep H." },
                            ].map((item, idx) => (
                                <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400 group-hover:text-white">{idx + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{item.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-white">
                                        {item.title}
                                        <div className="text-xs text-slate-500 font-normal mt-1">{item.desc}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                                        {item.loc}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20 shadow-[0_0_10px_rgba(0,0,0,0.1)]`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-3">
                                            <Link to={`/admin/bappeda/usulan/${item.id}`} className="text-slate-500 hover:text-blue-400 transition-colors">
                                                <Eye className="w-5 h-5" />
                                            </Link>
                                            <button className="text-slate-500 hover:text-amber-400 transition-colors">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button className="text-slate-500 hover:text-red-400 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Menampilkan <span className="font-medium text-white">1</span> sampai <span className="font-medium text-white">5</span> dari <span className="font-medium text-white">42</span> hasil
                    </p>
                    <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md -space-x-px shadow-sm">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-700 bg-slate-800/50 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button aria-current="page" className="z-10 bg-primary/20 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            1
                        </button>
                        <button className="bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-white/5 hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors">
                            2
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-700 bg-slate-800/50 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                            <span className="sr-only">Next</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
