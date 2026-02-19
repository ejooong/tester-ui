
import { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

export default function MapPreview() {
    const [activeBasemap, setActiveBasemap] = useState('dark');
    const [layers, setLayers] = useState({
        infrastruktur: true,
        ekonomi: true,
        sosial: false
    });

    return (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none mix-blend-overlay"></div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 relative z-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Peta Sebaran Usulan</h2>
                    <p className="text-white/60 mt-2 max-w-2xl text-sm md:text-base">
                        Visualisasi geospasial real-time usulan pembangunan di seluruh kecamatan.
                    </p>
                </div>
                <div>
                    <Link to="/peta" className="text-accent hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                        Lihat Peta Fullscreen <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <div className="bg-card-dark rounded-xl border border-white/10 overflow-hidden relative h-[600px] w-full group shadow-2xl z-10">
                <MapContainer
                    center={[-6.914744, 106.912959]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-full w-full z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={activeBasemap === 'dark'
                            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            : activeBasemap === 'satellite'
                                ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    />

                    {/* Dummy Markers */}
                    {layers.infrastruktur && (
                        <Marker position={[-6.920, 106.920]}>
                            <Popup>
                                <div className="text-slate-900">
                                    <h4 className="font-bold">Perbaikan Jalan</h4>
                                    <p className="text-xs">Infrastruktur</p>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>

                {/* Overlays */}
                <div className="absolute inset-0 map-pattern opacity-20 pointer-events-none z-[400]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent pointer-events-none z-[400]"></div>

                {/* Layer Control */}
                <div className="absolute top-6 left-6 z-[500]">
                    <div className="bg-[#3A0519]/80 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg w-56">
                        <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4" /> Layer Data
                        </h4>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer group p-1.5 hover:bg-white/5 rounded-md transition-colors">
                                <input
                                    type="checkbox"
                                    checked={layers.infrastruktur}
                                    onChange={() => setLayers(prev => ({ ...prev, infrastruktur: !prev.infrastruktur }))}
                                    className="form-checkbox bg-[#530F25] border-white/20 rounded text-accent focus:ring-offset-[#3A0519] focus:ring-accent"
                                />
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors">Infrastruktur</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group p-1.5 hover:bg-white/5 rounded-md transition-colors">
                                <input
                                    type="checkbox"
                                    checked={layers.ekonomi}
                                    onChange={() => setLayers(prev => ({ ...prev, ekonomi: !prev.ekonomi }))}
                                    className="form-checkbox bg-[#530F25] border-white/20 rounded text-accent focus:ring-offset-[#3A0519] focus:ring-accent"
                                />
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors">Ekonomi</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group p-1.5 hover:bg-white/5 rounded-md transition-colors">
                                <input
                                    type="checkbox"
                                    checked={layers.sosial}
                                    onChange={() => setLayers(prev => ({ ...prev, sosial: !prev.sosial }))}
                                    className="form-checkbox bg-[#530F25] border-white/20 rounded text-accent focus:ring-offset-[#3A0519] focus:ring-accent"
                                />
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors">Sosial Budaya</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Basemap Switcher */}
                <div className="absolute top-6 right-6 z-[500]">
                    <div className="bg-[#3A0519]/80 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg flex flex-col gap-3 w-40">
                        <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1 px-1">Tipe Peta</h4>
                        <button
                            onClick={() => setActiveBasemap('dark')}
                            className={`flex items-center gap-3 p-2 rounded-md border text-sm text-left transition-colors ${activeBasemap === 'dark' ? 'bg-white/5 border-accent/30 text-white shadow-[0_0_15px_rgba(226,182,207,0.2)]' : 'border-transparent hover:bg-white/5 hover:border-white/10 text-white/70 hover:text-white'}`}
                        >
                            <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-white/20 flex-shrink-0"></div>
                            <span>Dark Mode</span>
                        </button>
                        <button
                            onClick={() => setActiveBasemap('satellite')}
                            className={`flex items-center gap-3 p-2 rounded-md border text-sm text-left transition-colors ${activeBasemap === 'satellite' ? 'bg-white/5 border-accent/30 text-white shadow-[0_0_15px_rgba(226,182,207,0.2)]' : 'border-transparent hover:bg-white/5 hover:border-white/10 text-white/70 hover:text-white'}`}
                        >
                            <div className="w-8 h-8 rounded bg-green-900 border border-white/20 flex-shrink-0"></div>
                            <span>Satelit</span>
                        </button>
                        <button
                            onClick={() => setActiveBasemap('street')}
                            className={`flex items-center gap-3 p-2 rounded-md border text-sm text-left transition-colors ${activeBasemap === 'street' ? 'bg-white/5 border-accent/30 text-white shadow-[0_0_15px_rgba(226,182,207,0.2)]' : 'border-transparent hover:bg-white/5 hover:border-white/10 text-white/70 hover:text-white'}`}
                        >
                            <div className="w-8 h-8 rounded bg-gray-200 border border-white/20 flex-shrink-0"></div>
                            <span>Jalan</span>
                        </button>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[500]">
                    <div className="w-10 h-10 bg-[#670D2F] rounded-full border-2 border-accent shadow-lg shadow-accent/20 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform group">
                        42
                        <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
