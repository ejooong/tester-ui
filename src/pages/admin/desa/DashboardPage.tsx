
import {
    Bell,
    ArrowUp,
    AlertCircle,
    CheckCircle,
    BarChart2,
    Map as MapIcon,
    Maximize2,
    Search,
    Filter,
    Edit3
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

export default function AdminDesaDashboard() {
    const [activeBasemap, setActiveBasemap] = useState('street'); // Default to street for Desa admin

    return (
        <div className="flex flex-col h-full font-display">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md px-8 py-5 flex items-center justify-between border-b border-white/5">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">Dashboard Admin Desa</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="bg-primary/20 text-primary-glow text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 uppercase tracking-wider">Kelurahan Baros</span>
                        <p className="text-slate-400 text-sm">Overview data Musrenbang tahun anggaran 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10 group">
                        <Bell className="w-5 h-5 group-hover:animate-swing" />
                        <span className="absolute top-2 right-2.5 h-2 w-2 bg-danger rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"></span>
                    </button>
                </div>
            </header>

            <div className="p-8 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-sm font-medium text-slate-400">Usulan Baru</p>
                                <p className="text-4xl font-bold text-white mt-2 tracking-tight">12</p>
                                <p className="text-xs text-warning mt-2 font-medium flex items-center gap-1">
                                    <ArrowUp className="w-3 h-3" />
                                    <span className="drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">+4 minggu ini</span>
                                </p>
                            </div>
                            <div className="h-14 w-14 bg-warning/10 rounded-xl flex items-center justify-center border border-warning/20 shadow-neon-amber">
                                <AlertCircle className="text-warning w-8 h-8 drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-sm font-medium text-slate-400">Telah Diverifikasi</p>
                                <p className="text-4xl font-bold text-white mt-2 tracking-tight">86</p>
                                <p className="text-xs text-success mt-2 font-medium flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    <span className="drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">98% kelengkapan</span>
                                </p>
                            </div>
                            <div className="h-14 w-14 bg-success/10 rounded-xl flex items-center justify-center border border-success/20 shadow-neon-green">
                                <CheckCircle className="text-success w-8 h-8 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-sm font-medium text-slate-400">Total Usulan Desa</p>
                                <p className="text-4xl font-bold text-white mt-2 tracking-tight">143</p>
                                <p className="text-xs text-primary-glow mt-2 font-medium flex items-center gap-1">
                                    <span className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Target: 150 usulan</span>
                                </p>
                            </div>
                            <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shadow-neon-blue">
                                <BarChart2 className="text-primary-glow w-8 h-8 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Map Section */}
                    <div className="lg:col-span-2 glass-card rounded-2xl flex flex-col overflow-hidden h-[500px] shadow-glow border border-white/5">
                        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                            <h3 className="font-bold text-white flex items-center gap-2 text-lg">
                                <MapIcon className="text-primary-glow w-5 h-5 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                                Peta Sebaran Usulan
                            </h3>
                            <div className="flex bg-slate-800/50 rounded-lg p-1 gap-1">
                                {['street', 'satellite', 'dark'].map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setActiveBasemap(mode)}
                                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${activeBasemap === mode
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <button className="text-xs text-primary-glow font-medium hover:text-white transition-colors border border-primary/30 rounded px-2 py-1 bg-primary/10 flex items-center gap-1">
                                <Maximize2 className="w-3 h-3" /> Full Screen
                            </button>
                        </div>
                        <div className="relative flex-1 bg-[#0b1121] z-0">
                            <MapContainer
                                center={[-6.921, 106.920]}
                                zoom={15}
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
                                <Marker position={[-6.921, 106.920]}>
                                    <Popup>
                                        <div className="text-slate-900 font-bold p-1">Usulan Baru</div>
                                    </Popup>
                                </Marker>
                                <Marker position={[-6.924, 106.918]}>
                                    <Popup>
                                        <div className="text-slate-900 font-bold p-1">Terverifikasi</div>
                                    </Popup>
                                </Marker>
                                <Marker position={[-6.919, 106.923]}>
                                    <Popup>
                                        <div className="text-slate-900 font-bold p-1">Dalam Review</div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="lg:col-span-1 glass-card rounded-2xl flex flex-col h-[500px] border border-white/5">
                        <div className="p-5 border-b border-white/5 bg-white/[0.02]">
                            <h3 className="font-bold text-white text-lg">Aktivitas Terbaru</h3>
                        </div>
                        <div className="p-5 flex-1 overflow-y-auto space-y-7 custom-scrollbar">
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-warning shadow-[0_0_8px_rgba(245,158,11,0.6)] mt-2 group-hover:scale-125 transition-transform"></div>
                                    <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent mt-1 h-full"></div>
                                </div>
                                <div className="pb-2">
                                    <p className="text-[10px] text-primary-glow mb-1 font-mono tracking-wider">BARU SAJA</p>
                                    <p className="text-sm text-slate-300 leading-relaxed"><span className="font-bold text-white">Bapak RT 04</span> mengajukan usulan baru: <strong className="text-white">Perbaikan Posyandu</strong>.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.6)] mt-2 group-hover:scale-125 transition-transform"></div>
                                    <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent mt-1 h-full"></div>
                                </div>
                                <div className="pb-2">
                                    <p className="text-[10px] text-slate-500 mb-1 font-mono tracking-wider">2 JAM LALU</p>
                                    <p className="text-sm text-slate-300 leading-relaxed">Usulan <strong className="text-white">Pengaspalan Jalan Melati</strong> telah diverifikasi oleh Admin Kecamatan.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary-glow shadow-[0_0_8px_rgba(34,211,238,0.6)] mt-2 group-hover:scale-125 transition-transform"></div>
                                    <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent mt-1 h-full"></div>
                                </div>
                                <div className="pb-2">
                                    <p className="text-[10px] text-slate-500 mb-1 font-mono tracking-wider">KEMARIN, 14:30</p>
                                    <p className="text-sm text-slate-300 leading-relaxed">Pembaruan data peta wilayah RW 02 berhasil disimpan.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600 mt-2 group-hover:scale-125 transition-transform"></div>
                                </div>
                                <div className="pb-2">
                                    <p className="text-[10px] text-slate-500 mb-1 font-mono tracking-wider">KEMARIN, 09:15</p>
                                    <p className="text-sm text-slate-300 leading-relaxed"><span className="font-bold text-white">Ibu PKK</span> memberikan komentar pada usulan Pelatihan UMKM.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border-t border-white/5 text-center bg-white/[0.02]">
                            <button className="text-xs font-medium text-primary-glow hover:text-white transition-colors uppercase tracking-wide">Lihat Semua Aktivitas</button>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02]">
                        <div>
                            <h3 className="font-bold text-lg text-white">Daftar Usulan Perlu Review</h3>
                            <p className="text-sm text-slate-400 mt-1">Usulan yang masuk dalam 7 hari terakhir dan belum ditindaklanjuti.</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="relative">
                                <input className="pl-10 pr-4 py-2 bg-background-dark/50 border border-white/10 rounded-lg text-sm focus:ring-1 focus:ring-primary-glow focus:border-primary-glow text-white placeholder-slate-500 w-full md:w-64 transition-all" placeholder="Cari usulan..." type="text" />
                                <Search className="absolute left-3 top-2.5 text-slate-500 w-4 h-4" />
                            </div>
                            <button className="p-2 bg-background-dark/50 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-400 uppercase bg-white/5 border-b border-white/5">
                                <tr>
                                    <th className="px-6 py-4 font-semibold tracking-wider">No</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Judul Usulan</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Kategori</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Tanggal</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Pengusul</th>
                                    <th className="px-6 py-4 font-semibold text-right tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { id: 1, title: 'Perbaikan Saluran Irigasi Sawah Lebak', loc: 'Dusun II, RW 05', cat: 'Infrastruktur', date: '24 Okt 2023', user: 'Ahmad Zulkarnaen', init: 'A', color: 'blue' },
                                    { id: 2, title: 'Pengadaan Bibit Ikan Nila', loc: 'Kelompok Tani Jaya', cat: 'Ekonomi', date: '23 Okt 2023', user: 'Siti Aminah', init: 'S', color: 'green' },
                                    { id: 3, title: 'Penerangan Jalan Umum (PJU)', loc: 'Jl. Kencana Wungu, RW 01', cat: 'Infrastruktur', date: '22 Okt 2023', user: 'Dedi Mulyadi', init: 'D', color: 'orange' }
                                ].map((row) => (
                                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors group">
                                        <td className="px-6 py-4 text-slate-500 font-mono">0{row.id}</td>
                                        <td className="px-6 py-4">
                                            <span className="font-medium text-white block mb-0.5">{row.title}</span>
                                            <span className="text-xs text-slate-500">{row.loc}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-${row.color === 'orange' ? 'blue' : row.color}-500/10 text-${row.color === 'orange' ? 'blue' : row.color}-400 border border-${row.color === 'orange' ? 'blue' : row.color}-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]`}>
                                                {row.cat}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-400 font-mono text-xs">{row.date}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold">{row.init}</div>
                                                <span className="text-slate-300">{row.user}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary-glow border border-primary/30 hover:border-primary/50 text-xs font-medium rounded-lg transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                                <Edit3 className="w-3.5 h-3.5" />
                                                Review
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
