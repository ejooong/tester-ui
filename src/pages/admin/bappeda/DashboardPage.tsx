
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    TrendingDown,
    Minus,
    CheckCircle,
    XCircle,
    Clock,
    FileText,
    Map as MapIcon,
    MoreHorizontal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function DashboardPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Dashboard Eksekutif
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Overview Musrenbang Tahun Anggaran 2024</p>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl p-1.5 shadow-lg backdrop-blur-sm">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-white/5 rounded-lg">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 px-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-slate-200">Jan 2024 - Des 2024</span>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-white/5 rounded-lg">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Usulan */}
                <div className="glass-card rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Usulan</p>
                            <h3 className="text-3xl font-bold text-white mt-2 group-hover:scale-105 transition-transform origin-left">1,240</h3>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shadow-neon-blue group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-shadow">
                            <FileText className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs">
                        <span className="text-emerald-400 flex items-center font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                            <TrendingUp className="w-3 h-3 mr-1" /> +12%
                        </span>
                        <span className="text-slate-500 ml-2">vs bulan lalu</span>
                    </div>
                </div>

                {/* Diverifikasi */}
                <div className="glass-card rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Diverifikasi</p>
                            <h3 className="text-3xl font-bold text-white mt-2 group-hover:scale-105 transition-transform origin-left">850</h3>
                        </div>
                        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shadow-neon-green group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-shadow">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs">
                        <span className="text-emerald-400 flex items-center font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                            <TrendingUp className="w-3 h-3 mr-1" /> +5%
                        </span>
                        <span className="text-slate-500 ml-2">tingkat kelayakan</span>
                    </div>
                </div>

                {/* Dalam Proses */}
                <div className="glass-card rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dalam Proses</p>
                            <h3 className="text-3xl font-bold text-white mt-2 group-hover:scale-105 transition-transform origin-left">300</h3>
                        </div>
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 shadow-neon-amber group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-shadow">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs">
                        <span className="text-amber-400 flex items-center font-medium bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                            <Minus className="w-3 h-3 mr-1" /> 0%
                        </span>
                        <span className="text-slate-500 ml-2">antrian stabil</span>
                    </div>
                </div>

                {/* Ditolak */}
                <div className="glass-card rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ditolak</p>
                            <h3 className="text-3xl font-bold text-white mt-2 group-hover:scale-105 transition-transform origin-left">90</h3>
                        </div>
                        <div className="p-3 bg-red-500/10 rounded-xl text-red-400 shadow-neon-red group-hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-shadow">
                            <XCircle className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs">
                        <span className="text-red-400 flex items-center font-medium bg-red-400/10 px-2 py-0.5 rounded-full border border-red-400/20">
                            <TrendingDown className="w-3 h-3 mr-1" /> -2%
                        </span>
                        <span className="text-slate-500 ml-2">penurunan reject</span>
                    </div>
                </div>
            </div>

            {/* Map Preview Section */}
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl h-96 relative z-0">
                <div className="absolute top-4 left-4 z-[400] bg-slate-900/80 backdrop-blur p-3 rounded-xl border border-white/10 shadow-lg">
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapIcon className="w-4 h-4 text-primary" />
                        Peta Sebaran Usulan
                    </h2>
                    <p className="text-[10px] text-slate-400">Heatmap usulan masyarakat</p>
                </div>

                <Link to="/admin/bappeda/gis" className="absolute top-4 right-4 z-[400] bg-primary/90 hover:bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transition-all flex items-center gap-1">
                    Buka GIS Penuh <MapIcon className="w-3 h-3" />
                </Link>

                <MapContainer
                    center={[-6.914744, 106.912959]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[-6.914744, 106.912959]}>
                        <Popup className="custom-popup">
                            <div className="p-1 text-slate-900">
                                <h3 className="font-bold text-sm">Pusat Kota Sukabumi</h3>
                                <p className="text-xs">Titik Pantau Utama</p>
                            </div>
                        </Popup>
                    </Marker>
                    {/* Sample Data Markers */}
                    <Marker position={[-6.92, 106.93]}>
                        <Popup>
                            <div className="text-slate-900">
                                <span className="text-[10px] font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded">Infrastruktur</span>
                                <h3 className="font-bold text-sm mt-1">Perbaikan Drainase</h3>
                            </div>
                        </Popup>
                    </Marker>
                    <Marker position={[-6.91, 106.90]}>
                        <Popup>
                            <div className="text-slate-900">
                                <span className="text-[10px] font-bold text-white bg-emerald-600 px-1.5 py-0.5 rounded">Sosial</span>
                                <h3 className="font-bold text-sm mt-1">Renovasi Posyandu</h3>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Proposals Table */}
                <div className="lg:col-span-2 glass-card rounded-2xl shadow-xl border border-slate-700/50 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/20">
                        <h2 className="text-lg font-bold text-white">5 Usulan Terbaru</h2>
                        <Link to="/admin/bappeda/usulan" className="text-sm text-primary hover:text-primary-glow hover:underline transition-colors">Lihat Semua</Link>
                    </div>
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-800/40 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                                    <th className="p-4 border-b border-slate-700/50">No</th>
                                    <th className="p-4 border-b border-slate-700/50">Judul Usulan</th>
                                    <th className="p-4 border-b border-slate-700/50">Kecamatan</th>
                                    <th className="p-4 border-b border-slate-700/50">Status</th>
                                    <th className="p-4 border-b border-slate-700/50 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-slate-700/50">
                                {[
                                    { id: 1, title: "Perbaikan Drainase Jl. Ahmad Yani", ec: "Cikole", status: "Dalam Proses", color: "amber" },
                                    { id: 2, title: "Pengadaan Alat Kesehatan Posyandu", ec: "Warudoyong", status: "Diverifikasi", color: "emerald" },
                                    { id: 3, title: "Renovasi Gedung Serbaguna RW 05", ec: "Baros", status: "Ditolak", color: "red" },
                                    { id: 4, title: "Penyuluhan UMKM Digital", ec: "Citamiang", status: "Diverifikasi", color: "emerald" },
                                    { id: 5, title: "Pembangunan Lampu PJU", ec: "Gunungpuyuh", status: "Dalam Proses", color: "amber" },
                                ].map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                                        <td className="p-4 text-slate-500 group-hover:text-slate-300">0{item.id}</td>
                                        <td className="p-4 font-medium text-slate-200 group-hover:text-white">{item.title}</td>
                                        <td className="p-4 text-slate-400 group-hover:text-slate-300">{item.ec}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20 shadow-[0_0_10px_rgba(0,0,0,0.1)]`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-${item.color}-400 mr-1.5`}></span>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-slate-700/50 rounded-lg">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Categories Chart (Simplified as HTML/CSS for now) */}
                <div className="lg:col-span-1 glass-card rounded-2xl shadow-xl border border-slate-700/50 flex flex-col">
                    <div className="p-6 border-b border-slate-700/50 bg-slate-800/20">
                        <h2 className="text-lg font-bold text-white">Usulan per Kategori</h2>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center flex-1">
                        <div className="relative w-48 h-48 rounded-full mb-8 shadow-2xl shadow-blue-500/10"
                            style={{ background: 'conic-gradient(#3B82F6 0% 45%, #10B981 45% 75%, #F59E0B 75% 100%)' }}>
                            <div className="absolute inset-0 m-auto w-32 h-32 bg-[#1E293B] rounded-full flex items-center justify-center z-10">
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-white tracking-tight">1,240</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Total</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full space-y-4">
                            <div className="flex items-center justify-between text-sm p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                    <span className="text-slate-300">Infrastruktur</span>
                                </div>
                                <span className="font-bold text-white">45%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                    <span className="text-slate-300">Sosial</span>
                                </div>
                                <span className="font-bold text-white">30%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                                    <span className="text-slate-300">Ekonomi</span>
                                </div>
                                <span className="font-bold text-white">25%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
