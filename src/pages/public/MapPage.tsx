import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
    Layers, Search, Menu, X, Plus, Map as MapIcon
} from 'lucide-react';
import type { LatLngExpression } from 'leaflet';
import Navbar from '@/components/layout/Navbar';

// Fix for default marker icon in React Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeBasemap, setActiveBasemap] = useState('dark');

    const position: LatLngExpression = [-6.914744, 106.912959]; // Sukabumi Coordinates

    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col relative bg-background-dark text-slate-300">
            <Navbar />

            {/* Sidebar Controls */}
            <div className={`absolute top-20 left-0 h-[calc(100vh-5rem)] z-[1000] p-4 transition-all duration-300 ${sidebarOpen ? 'w-80' : 'w-0 p-0 overflow-hidden'}`}>
                <div className="h-full bg-card-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="p-5 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                                <MapIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white text-base leading-tight">GIS Publik</h1>
                                <p className="text-[10px] text-primary font-medium tracking-wide">KOTA SUKABUMI</p>
                            </div>
                        </div>
                        <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
                        {/* Basemap Switcher */}
                        <section>
                            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Base Map
                            </h2>
                            <div className="grid grid-cols-3 gap-2">
                                {['dark', 'satellite', 'street'].map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setActiveBasemap(mode)}
                                        className={`relative h-14 rounded-lg overflow-hidden border-2 transition-all ${activeBasemap === mode ? 'border-primary shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                    >
                                        <div className={`absolute inset-0 ${mode === 'dark' ? 'bg-slate-900' : mode === 'satellite' ? 'bg-emerald-900' : 'bg-slate-200'}`}></div>
                                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium uppercase text-white/90 drop-shadow-md">
                                            {mode}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Layers */}
                        <section>
                            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Layer Tematik
                            </h2>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Layers className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm text-slate-300">Rencana Tata Ruang</span>
                                    </div>
                                    <input type="checkbox" className="rounded border-slate-600 text-primary focus:ring-primary bg-transparent" />
                                </div>
                                <div className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <MapIcon className="w-4 h-4 text-orange-400" />
                                        <span className="text-sm text-slate-300">Kawasan Kumuh</span>
                                    </div>
                                    <input type="checkbox" defaultChecked className="rounded border-slate-600 text-primary focus:ring-primary bg-transparent" />
                                </div>
                            </div>
                        </section>

                        {/* Filters */}
                        <section>
                            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Filter Usulan
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-[10px] text-slate-500 block mb-2 font-semibold">STATUS USULAN</label>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">Proses</button>
                                        <button className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500">Selesai</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer Action */}
                    <div className="p-4 border-t border-white/10 bg-white/5">
                        <button className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-sm">
                            <Plus className="w-4 h-4" /> Ajukan Usulan
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-4 left-0 right-0 z-[900] pointer-events-none px-4 md:px-0">
                <div className="max-w-md mx-auto pointer-events-auto relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="w-4 h-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-2.5 bg-card-dark/90 backdrop-blur-md border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary rounded-full text-sm shadow-xl"
                        placeholder="Cari lokasi atau ID usulan..."
                    />
                </div>
            </div>

            {/* Map Toggle Button (Mobile) */}
            {!sidebarOpen && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="absolute top-4 left-4 z-[900] bg-card-dark p-2 rounded-lg shadow-xl border border-white/10 text-white"
                >
                    <Menu className="w-6 h-6" />
                </button>
            )}

            {/* Map Component */}
            <div className="absolute inset-0 z-0">
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    zoomControl={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        key={activeBasemap}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={activeBasemap === 'dark'
                            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            : activeBasemap === 'satellite'
                                ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    />

                    <ZoomControl position="bottomright" />

                    <Marker position={position}>
                        <Popup className="custom-popup">
                            <div className="p-1">
                                <h3 className="font-bold text-sm mb-1">Pusat Kota Sukabumi</h3>
                                <p className="text-xs">Titik Nol Kilometer</p>
                            </div>
                        </Popup>
                    </Marker>

                    {/* Example Additional Marker */}
                    <Marker position={[-6.92, 106.93]}>
                        <Popup>
                            <div className="min-w-[200px]">
                                <div className="h-24 bg-slate-200 rounded-lg mb-2 overflow-hidden">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJoPpwz1AJS9xGsKr1FUM5kjtPanFN-yOPk3oD8qSs1nGndaqTJsKFuqxSCODrUAFZ0_z916yJVqBkAQe4BeHarBLR-qT7sV0P2LcwoWju666mqkmJxfuQYivrcpIm37XJlqERcvxLooB8v0x0Gv05Co6yyXeEERrD7Ew4USggTrlzmpw8OCnwLFf0knQb0um1ASqpkOErtsBKXSngadkWfRIAwYnY0Nn8Tu0I2EmClsk85HKPRCA_iHaWfSpNR8vwXG0-efZQL8" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-1.5 py-0.5 rounded">Infrastruktur</span>
                                <h3 className="font-bold text-sm mt-1 mb-1">Perbaikan Drainase</h3>
                                <p className="text-xs text-slate-500">Jl. A. Yani, Cikole</p>
                            </div>
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>

        </div>
    );
}
