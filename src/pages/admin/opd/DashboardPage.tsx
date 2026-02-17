
import {
    Bell,
    FilePlus,
    TrendingUp,
    ClipboardCheck,
    Wallet,
    Map as MapIcon,
    Search,
    Download,
    Eye,
    Edit3,
    Filter
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react'; // Import useState

// Fix for default marker icon
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function AdminOpdDashboard() {
    const [activeBasemap, setActiveBasemap] = useState('dark'); // Default to dark for OPD admin

    return (
        <div className="flex flex-col h-full font-display">
            {/* Header */}
            <header className="bg-background-dark/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
                <div className="px-8 py-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">Dashboard Admin OPD</h1>
                        <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                            Dinas Pekerjaan Umum dan Penataan Ruang (DPUPR) Kota Sukabumi
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger-glow rounded-full shadow-[0_0_8px_rgba(248,113,113,1)]"></span>
                        </button>
                        <div className="h-10 w-px bg-slate-700 mx-1"></div>
                        <div className="hidden md:block text-right">
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Tahun Anggaran</div>
                            <div className="text-lg font-bold text-cyan-glow drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">2025</div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-8 space-y-8 max-w-7xl mx-auto flex-1 w-full overflow-y-auto custom-scrollbar">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-card-dark border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-neon-purple/50 transition-all duration-300 shadow-lg hover:shadow-neon-purple/20">
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-neon-purple/10 rounded-full blur-2xl group-hover:bg-neon-purple/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-lg border border-neon-purple/20 shadow-[0_0_10px_rgba(192,132,252,0.15)]">
                                    <FilePlus className="w-6 h-6" />
                                </div>
                                <span className="flex items-center text-xs font-semibold text-success-glow bg-success-glow/10 border border-success-glow/20 px-2.5 py-1 rounded-full shadow-[0_0_5px_rgba(52,211,153,0.2)]">
                                    <TrendingUp className="w-3 h-3 mr-1" /> +12%
                                </span>
                            </div>
                            <h3 className="text-slate-400 text-sm font-medium mb-1">Usulan Teknis Baru</h3>
                            <div className="text-4xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-neon-purple transition-colors duration-300">124</div>
                            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                Menunggu verifikasi teknis
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-card-dark border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-primary-glow/50 transition-all duration-300 shadow-lg hover:shadow-neon-blue">
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl group-hover:bg-primary-glow/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-primary-glow/10 text-primary-glow rounded-lg border border-primary-glow/20 shadow-[0_0_10px_rgba(96,165,250,0.15)]">
                                    <ClipboardCheck className="w-6 h-6" />
                                </div>
                                <span className="flex items-center text-xs font-semibold text-slate-400 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">
                                    Terkunci
                                </span>
                            </div>
                            <h3 className="text-slate-400 text-sm font-medium mb-1">Rencana Program RKPD</h3>
                            <div className="text-4xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-primary-glow transition-colors duration-300">45</div>
                            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                Program prioritas 2025
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-card-dark border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-success-glow/50 transition-all duration-300 shadow-lg hover:shadow-neon-green">
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-success-glow/10 rounded-full blur-2xl group-hover:bg-success-glow/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-success-glow/10 text-success-glow rounded-lg border border-success-glow/20 shadow-[0_0_10px_rgba(52,211,153,0.15)]">
                                    <Wallet className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-slate-400 text-sm font-medium mb-1">Pagu Indikatif</h3>
                            <div className="text-4xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-success-glow transition-colors duration-300">Rp 15.5 M</div>
                            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                Alokasi anggaran tahunan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Map Section */}
                    <div className="lg:col-span-2 bg-card-dark rounded-xl border border-white/5 shadow-lg flex flex-col overflow-hidden h-[500px]">
                        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-card-dark">
                            <h3 className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
                                <MapIcon className="text-cyan-glow w-5 h-5" />
                                Peta Tematik Usulan Dinas
                            </h3>
                            <div className="flex bg-slate-800/50 rounded-lg p-1 gap-1 mx-4">
                                {['street', 'satellite', 'dark'].map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setActiveBasemap(mode)}
                                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${activeBasemap === mode
                                            ? 'bg-cyan-glow text-black shadow-lg shadow-cyan-glow/20'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button className="text-xs font-medium bg-background-dark text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg hover:border-slate-500 hover:text-white transition-colors">
                                    Filter Wilayah
                                </button>
                                <button className="text-xs font-medium bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/20 px-3 py-1.5 rounded-lg hover:bg-cyan-glow/20 shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-all">
                                    Infrastruktur
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full bg-slate-900 overflow-hidden z-0">
                            <MapContainer
                                center={[-6.914744, 106.912959]}
                                zoom={14}
                                scrollWheelZoom={false}
                                className="h-full w-full"
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url={
                                        activeBasemap === 'dark'
                                            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                            : activeBasemap === 'satellite'
                                                ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    }
                                />
                                <Marker position={[-6.914744, 106.912959]}>
                                    <Popup>
                                        <div className="text-slate-900 font-bold p-1">Usulan Prioritas</div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                    {/* Progress Chart */}
                    <div className="lg:col-span-1 bg-card-dark rounded-xl border border-white/5 shadow-lg flex flex-col">
                        <div className="p-5 border-b border-white/5">
                            <h3 className="font-bold text-lg text-white tracking-tight">Progress Verifikasi</h3>
                        </div>
                        <div className="p-6 flex flex-col items-center justify-center flex-1 relative overflow-hidden">
                            <div className="absolute w-full h-full bg-gradient-radial from-primary-glow/5 to-transparent opacity-50 pointer-events-none"></div>
                            <div className="relative w-56 h-56 mb-4">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
                                    <path className="text-cyan-glow drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="2.5"></path>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="text-5xl font-bold text-white tracking-tighter drop-shadow-md">75<span className="text-2xl text-cyan-glow">%</span></span>
                                    <span className="text-xs uppercase tracking-widest text-slate-400 mt-1">Terverifikasi</span>
                                </div>
                            </div>
                            <div className="w-full space-y-4 px-2">
                                <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-background-dark/50 border border-white/10 hover:border-cyan-glow/30 transition-colors">
                                    <span className="flex items-center text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-cyan-glow mr-3 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span> Disetujui
                                    </span>
                                    <span className="font-bold text-white">93</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-background-dark/50 border border-white/10 hover:border-warning-glow/30 transition-colors">
                                    <span className="flex items-center text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-warning-glow mr-3 shadow-[0_0_5px_rgba(250,204,21,0.8)]"></span> Pending
                                    </span>
                                    <span className="font-bold text-white">24</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-background-dark/50 border border-white/10 hover:border-danger-glow/30 transition-colors">
                                    <span className="flex items-center text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-danger-glow mr-3 shadow-[0_0_5px_rgba(248,113,113,0.8)]"></span> Ditolak
                                    </span>
                                    <span className="font-bold text-white">7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-card-dark rounded-xl border border-white/5 shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h3 className="font-bold text-lg text-white tracking-tight">Daftar Usulan Prioritas</h3>
                        <div className="flex gap-3">
                            <div className="relative group">
                                <Search className="absolute left-3 top-2.5 text-slate-500 w-4 h-4 group-focus-within:text-cyan-glow transition-colors" />
                                <input className="pl-9 pr-4 py-2 text-sm bg-background-dark border border-white/10 rounded-lg focus:ring-1 focus:ring-cyan-glow focus:border-cyan-glow text-slate-200 placeholder-slate-600 w-full sm:w-64 transition-all shadow-inner" placeholder="Cari usulan..." type="text" />
                            </div>
                            <button className="flex items-center justify-center px-4 py-2 text-sm font-bold text-background-dark bg-cyan-glow rounded-lg hover:bg-cyan-400 transition shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                <Download className="w-4 h-4 mr-2" /> Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-background-dark/80 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-white/5">
                                    <th className="px-6 py-4 w-16 text-center">No</th>
                                    <th className="px-6 py-4">Judul Usulan</th>
                                    <th className="px-6 py-4">Lokasi</th>
                                    <th className="px-6 py-4 text-center">Skor Prioritas</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                    <th className="px-6 py-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { id: 1, title: 'Perbaikan Jalan Lingkungan RW 05', cat: 'Infrastruktur Jalan', loc: 'Kel. Cikole, Kec. Cikole', score: '92.5', status: 'Terverifikasi', statusColor: 'blue' },
                                    { id: 2, title: 'Pembangunan Drainase Utama', cat: 'Drainase', loc: 'Kel. Baros, Kec. Baros', score: '88.0', status: 'Menunggu', statusColor: 'yellow' },
                                    { id: 3, title: 'Renovasi Jembatan Penghubung', cat: 'Jembatan', loc: 'Kel. Citamiang, Kec. Citamiang', score: '76.4', status: 'Menunggu', statusColor: 'yellow' },
                                    { id: 4, title: 'Pemasangan PJU LED 10 Titik', cat: 'PJU', loc: 'Kel. Gunung Puyuh, Kec. Gunung Puyuh', score: '45.2', status: 'Ditolak', statusColor: 'red' }
                                ].map((row) => (
                                    <tr key={row.id} className="hover:bg-background-dark/40 transition-colors group">
                                        <td className="px-6 py-4 text-center text-sm text-slate-500 font-mono">{row.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-white group-hover:text-cyan-glow transition-colors">{row.title}</div>
                                            <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                                <Filter className="w-3 h-3" />
                                                {row.cat}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-400">{row.loc}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center justify-center w-12 h-6 rounded-full text-xs font-bold bg-success-glow/10 text-success-glow border border-success-glow/20 shadow-[0_0_5px_rgba(52,211,153,0.1)]">
                                                {row.score}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-${row.statusColor}-500/10 text-${row.statusColor}-400 border border-${row.statusColor}-500/20`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-${row.statusColor}-400 mr-1.5 ${row.statusColor === 'blue' ? 'animate-pulse' : ''}`}></span>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-500 hover:text-cyan-glow transition-colors p-1 rounded-md hover:bg-cyan-glow/10">
                                                {row.statusColor === 'blue' || row.statusColor === 'red' ? <Eye className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-white/5 flex items-center justify-between bg-background-dark/30">
                        <span className="text-xs text-slate-500">Menampilkan 4 dari 124 usulan</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-background-dark border border-white/10 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">Sebelumnya</button>
                            <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-background-dark border border-white/10 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">Selanjutnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
