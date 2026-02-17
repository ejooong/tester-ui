
import {
    User,
    Shield,
    Search,
    Filter,
    MoreHorizontal,
    UserPlus,
    CheckCircle
} from 'lucide-react';

export default function UsersPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Manajemen Pengguna</h1>
                    <p className="mt-1 text-sm text-slate-400">Kelola akses dan peran pengguna sistem Musrenbang.</p>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-neon-blue transition-all flex items-center justify-center border border-primary/50">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Tambah Pengguna
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <User className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">1,240</h3>
                        <p className="text-sm text-slate-400">Total Pengguna</p>
                    </div>
                </div>
                <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">1,180</h3>
                        <p className="text-sm text-slate-400">Akun Aktif</p>
                    </div>
                </div>
                <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">45</h3>
                        <p className="text-sm text-slate-400">Administrator</p>
                    </div>
                </div>
            </div>

            {/* Filters & Table */}
            <div className="glass-card rounded-xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative group max-w-md w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            className="bg-slate-900/60 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 py-2.5 placeholder-slate-600 transition-all shadow-inner focus:outline-none focus:ring-1"
                            placeholder="Cari nama, email, atau NIK..."
                            type="text"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select className="bg-slate-900/60 border border-slate-700 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 cursor-pointer hover:border-slate-500 transition-colors focus:outline-none">
                            <option>Semua Role</option>
                            <option>Administrator</option>
                            <option>Verifikator</option>
                            <option>User Warga</option>
                        </select>
                        <button className="flex items-center justify-center px-4 py-2.5 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 transition-all">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-700">
                        <thead className="bg-slate-800/90 backdrop-blur">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-64">User</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-40">Role</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Terakhir Login</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider w-20">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700 bg-slate-900/40">
                            {[
                                { name: "Budi Santoso", email: "budi.santoso@example.com", role: "User Warga", status: "Aktif", lastLogin: "2 Jam lalu", avatar: "B" },
                                { name: "Admin Bappeda", email: "admin.bappeda@sukabumi.go.id", role: "Administrator", status: "Aktif", lastLogin: "Baru saja", avatar: "A" },
                                { name: "Verifikator Kec. Cikole", email: "verif.cikole@sukabumi.go.id", role: "Verifikator", status: "Aktif", lastLogin: "1 Hari lalu", avatar: "V" },
                                { name: "Siti Aminah", email: "siti.aminah@example.com", role: "User Warga", status: "Nonaktif", lastLogin: "1 Bulan lalu", avatar: "S" },
                                { name: "Rudi Hartono", email: "rudi.h@example.com", role: "User Warga", status: "Suspend", lastLogin: "3 Hari lalu", avatar: "R" },
                            ].map((user, idx) => (
                                <tr key={idx} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold border border-slate-600">
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${user.role === 'Administrator' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                            user.role === 'Verifikator' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                'bg-slate-700/50 text-slate-400 border-slate-600/50'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Aktif' ? 'text-emerald-400 bg-emerald-500/10' :
                                            user.status === 'Suspend' ? 'text-red-400 bg-red-500/10' :
                                                'text-slate-400 bg-slate-700/50'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Aktif' ? 'bg-emerald-400' :
                                                user.status === 'Suspend' ? 'bg-red-400' :
                                                    'bg-slate-400'
                                                }`}></span>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                                        {user.lastLogin}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
