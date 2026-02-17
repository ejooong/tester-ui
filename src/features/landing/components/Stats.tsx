
import { TrendingUp, CheckCircle, Map } from 'lucide-react';

export default function Stats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-dark p-6 rounded-xl border border-slate-700/50 shadow-xl flex items-center justify-between group hover:border-blue-500/30 transition-all duration-300">
                <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Total Usulan Masuk</p>
                    <h3 className="text-3xl font-bold text-white mb-2">1,248</h3>
                    <p className="text-xs text-green-400 font-medium flex items-center">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" /> +12% dari tahun lalu
                    </p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <TrendingUp className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-card-dark p-6 rounded-xl border border-slate-700/50 shadow-xl flex items-center justify-between group hover:border-emerald-500/30 transition-all duration-300">
                <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Usulan Diterima</p>
                    <h3 className="text-3xl font-bold text-white mb-2">856</h3>
                    <p className="text-xs text-blue-400 font-medium flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 mr-1" /> 68% Tingkat Persetujuan
                    </p>
                </div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <CheckCircle className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-card-dark p-6 rounded-xl border border-slate-700/50 shadow-xl flex items-center justify-between group hover:border-purple-500/30 transition-all duration-300">
                <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Kecamatan Partisipasi</p>
                    <h3 className="text-3xl font-bold text-white mb-2">7</h3>
                    <p className="text-xs text-slate-500 font-medium flex items-center">
                        <Map className="w-3.5 h-3.5 mr-1" /> Seluruh wilayah aktif
                    </p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <Map className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}
