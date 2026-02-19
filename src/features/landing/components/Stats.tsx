
import { TrendingUp, CheckCircle, Map, ClipboardList } from 'lucide-react';

export default function Stats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl flex items-center justify-between group hover:border-accent/30 transition-all duration-300 bg-gradient-to-br from-[#670D2F]/80 to-[#3A0519]/80">
                <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Total Usulan Masuk</p>
                    <h3 className="text-3xl font-bold text-white mb-2">1,248</h3>
                    <p className="text-xs text-accent font-medium flex items-center">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" /> +12% dari tahun lalu
                    </p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-accent border border-white/10 group-hover:bg-white/10 transition-colors shadow-inner">
                    <ClipboardList className="w-6 h-6" />
                </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center justify-between group hover:border-accent/30 transition-all duration-300 bg-gradient-to-br from-[#670D2F]/80 to-[#3A0519]/80">
                <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Usulan Diterima</p>
                    <h3 className="text-3xl font-bold text-white mb-2">856</h3>
                    <p className="text-xs text-white/80 font-medium flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 mr-1 text-accent" /> 68% Tingkat Persetujuan
                    </p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-accent border border-white/10 group-hover:bg-white/10 transition-colors shadow-inner">
                    <CheckCircle className="w-6 h-6" />
                </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center justify-between group hover:border-accent/30 transition-all duration-300 bg-gradient-to-br from-[#670D2F]/80 to-[#3A0519]/80">
                <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Kecamatan Partisipasi</p>
                    <h3 className="text-3xl font-bold text-white mb-2">7</h3>
                    <p className="text-xs text-white/50 font-medium flex items-center">
                        <Map className="w-3.5 h-3.5 mr-1" /> Seluruh wilayah aktif
                    </p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-accent border border-white/10 group-hover:bg-white/10 transition-colors shadow-inner">
                    <Map className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}
