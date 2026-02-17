
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
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

import {
    Layers,
    AlertTriangle,
    CheckCircle,
    Construction,
    Search,
    Settings,
    Map as MapIcon,
    Globe,
    Plus
} from 'lucide-react';

export default function GISPage() {
    const [activeBasemap, setActiveBasemap] = useState('dark');
    const [layers, setLayers] = useState({
        stunting: true,
        kumuh: false,
        administrasi: true
    });

    const toggleLayer = (key: keyof typeof layers) => {
        setLayers(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5 shrink-0">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">GIS Module v2.4</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Manajemen Layer</h1>
                    <p className="text-slate-400 mt-2 font-light">Kelola visualisasi data spasial & konfigurasi layer peta kota.</p>
                </div>
                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] font-medium border border-blue-400/20">
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    Tambah Layer Baru
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Layers className="w-12 h-12 text-blue-400" />
                    </div>
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">Total Layer Aktif</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-3xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">24</h3>
                        <span className="text-sm text-slate-400 mb-1">layers</span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[75%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                </div>

                <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertTriangle className="w-12 h-12 text-orange-400" />
                    </div>
                    <p className="text-xs text-orange-400 font-bold uppercase tracking-widest mb-2">Kawasan Kumuh</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-3xl font-bold text-white">12</h3>
                        <span className="text-sm text-slate-400 mb-1">Area teridentifikasi</span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full w-[40%] shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    </div>
                </div>

                <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <CheckCircle className="w-12 h-12 text-emerald-400" />
                    </div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">Status RTRW</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">Valid</h3>
                        <span className="text-sm text-slate-400 mb-1">Terverifikasi</span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                </div>

                <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Construction className="w-12 h-12 text-purple-400" />
                    </div>
                    <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-2">Infrastruktur</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-3xl font-bold text-white">156</h3>
                        <span className="text-sm text-slate-400 mb-1">Titik proyek</span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full w-[60%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* Sidebar Configuration */}
                <div className="lg:col-span-1 glass-card rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl shadow-black/40">
                    <div className="p-5 border-b border-white/5 bg-white/[0.02]">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Settings className="text-blue-400 w-5 h-5" />
                            Konfigurasi Layer
                        </h2>
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors w-4 h-4" />
                            <input
                                className="w-full pl-10 pr-4 py-2.5 bg-[#0f172a] border border-slate-700/50 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all placeholder:text-slate-600"
                                placeholder="Filter layer..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                        {/* Administrasi Group */}
                        <div>
                            <div className="px-2 mb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Administrasi
                            </div>
                            <div className="space-y-1">
                                {['Batas RW', 'Batas RT', 'Desa/Kelurahan'].map((layer) => (
                                    <div key={layer} className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/5 transition-all">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={layers.administrasi}
                                                onChange={() => toggleLayer('administrasi')}
                                                className="rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-600 focus:ring-offset-slate-900"
                                            />
                                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{layer}</span>
                                        </div>
                                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Settings className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tematik Group */}
                        <div>
                            <div className="px-2 mb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_currentColor]"></span> Tematik
                            </div>
                            <div className="space-y-1">
                                <div className={`group flex items-center justify-between p-3 rounded-xl border transition-all relative overflow-hidden ${layers.stunting ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/[0.02] border-transparent hover:border-white/5'}`}>
                                    {layers.stunting && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>}
                                    <div className="flex items-center gap-3 pl-2">
                                        <input
                                            type="checkbox"
                                            checked={layers.stunting}
                                            onChange={() => toggleLayer('stunting')}
                                            className="rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-600 focus:ring-offset-slate-900"
                                        />
                                        <span className={`text-sm font-medium text-shadow-sm ${layers.stunting ? 'text-white' : 'text-slate-300'}`}>Sebaran Stunting</span>
                                    </div>
                                    <button className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-200">
                                        <Settings className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className={`group flex items-center justify-between p-3 rounded-xl border transition-all relative overflow-hidden ${layers.kumuh ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/[0.02] border-transparent hover:border-white/5'}`}>
                                    {layers.kumuh && <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 shadow-[0_0_10px_#f97316]"></div>}
                                    <div className="flex items-center gap-3 pl-2">
                                        <input
                                            type="checkbox"
                                            checked={layers.kumuh}
                                            onChange={() => toggleLayer('kumuh')}
                                            className="rounded bg-slate-700 border-slate-600 text-orange-600 focus:ring-orange-600 focus:ring-offset-slate-900"
                                        />
                                        <span className={`text-sm font-medium text-shadow-sm ${layers.kumuh ? 'text-white' : 'text-slate-300'}`}>Kawasan Kumuh</span>
                                    </div>
                                    <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Settings className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Basemaps */}
                        <div>
                            <div className="px-2 mb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Basemaps
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <label className="cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="basemap"
                                        checked={activeBasemap === 'dark'}
                                        onChange={() => setActiveBasemap('dark')}
                                        className="peer sr-only"
                                    />
                                    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] peer-checked:bg-blue-500/10 peer-checked:border-blue-500/50 transition-all text-center">
                                        <MapIcon className="w-5 h-5 text-slate-400 peer-checked:text-blue-400 mb-1 mx-auto" />
                                        <span className="text-[10px] font-medium text-slate-400 peer-checked:text-white block">Dark</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="basemap"
                                        checked={activeBasemap === 'satellite'}
                                        onChange={() => setActiveBasemap('satellite')}
                                        className="peer sr-only"
                                    />
                                    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] peer-checked:bg-blue-500/10 peer-checked:border-blue-500/50 transition-all text-center">
                                        <Globe className="w-5 h-5 text-slate-400 peer-checked:text-blue-400 mb-1 mx-auto" />
                                        <span className="text-[10px] font-medium text-slate-400 peer-checked:text-white block">Satellite</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="basemap"
                                        checked={activeBasemap === 'street'}
                                        onChange={() => setActiveBasemap('street')}
                                        className="peer sr-only"
                                    />
                                    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] peer-checked:bg-blue-500/10 peer-checked:border-blue-500/50 transition-all text-center">
                                        <MapIcon className="w-5 h-5 text-slate-400 peer-checked:text-blue-400 mb-1 mx-auto" />
                                        <span className="text-[10px] font-medium text-slate-400 peer-checked:text-white block">Street</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Preview */}
                <div className="lg:col-span-2 glass-card rounded-2xl flex flex-col h-full overflow-hidden relative shadow-2xl shadow-black/40 border border-white/10">
                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02] z-10 backdrop-blur-sm">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Globe className="text-blue-400 w-5 h-5 animate-pulse" /> Live Map View
                        </h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 hover:text-white transition-all">
                                <MapIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#0b1121] relative w-full h-full overflow-hidden group">
                        <MapContainer
                            center={[-6.914744, 106.912959]}
                            zoom={13}
                            scrollWheelZoom={true}
                            className="h-full w-full"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={activeBasemap === 'dark'
                                    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    : activeBasemap === 'satellite'
                                        ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                        : activeBasemap === 'street'
                                            ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                }
                            />

                            <ZoomControl position="bottomright" />

                            <Marker position={[-6.914744, 106.912959]}>
                                <Popup className="custom-popup">
                                    <div className="p-1 text-slate-900">
                                        <h3 className="font-bold text-sm">Pusat Kota Sukabumi</h3>
                                    </div>
                                </Popup>
                            </Marker>

                            {/* Dummy Data for Layers */}
                            {layers.stunting && (
                                <>
                                    <Marker position={[-6.920, 106.915]}>
                                        <Popup className="custom-popup">
                                            <div className="p-1 text-slate-900">
                                                <h3 className="font-bold text-sm">Kasus Stunting #001</h3>
                                                <p className="text-xs text-red-600">Perlu Penanganan</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                    <Marker position={[-6.910, 106.920]}>
                                        <Popup className="custom-popup">
                                            <div className="p-1 text-slate-900">
                                                <h3 className="font-bold text-sm">Kasus Stunting #002</h3>
                                                <p className="text-xs text-orange-600">Dalam Pantauan</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </>
                            )}

                            {layers.kumuh && (
                                <>
                                    <Marker position={[-6.930, 106.910]}>
                                        <Popup className="custom-popup">
                                            <div className="p-1 text-slate-900">
                                                <h3 className="font-bold text-sm">Kawasan Kumuh A</h3>
                                                <p className="text-xs">Prioritas Renovasi</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </>
                            )}

                        </MapContainer>

                        {/* Active Layer Control Overlay */}
                        <div className="absolute top-6 right-6 w-72 glass-card p-4 rounded-xl shadow-lg border border-blue-500/20 z-[1000] backdrop-blur-xl">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Layer Control</span>
                                <span className="text-xs text-blue-400 font-bold drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                                    {layers.stunting && layers.kumuh ? 'Multiple Active' : layers.stunting ? 'Sebaran Stunting' : layers.kumuh ? 'Kawasan Kumuh' : 'No Active Layer'}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-500">Op</span>
                                <input type="range" min="0" max="100" defaultValue="70" className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                                <span className="text-xs font-mono text-blue-300 w-8 text-right">70%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
