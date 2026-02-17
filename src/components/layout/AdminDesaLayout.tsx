
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Inbox,
    CheckCircle,
    XCircle,
    Map as MapIcon,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function AdminDesaLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    const navItems = [
        { path: '/admin/desa', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/desa/usulan-masuk', icon: Inbox, label: 'Usulan Masuk', badge: '3' },
        { path: '/admin/desa/usulan-verifikasi', icon: CheckCircle, label: 'Usulan Diverifikasi' },
        { path: '/admin/desa/usulan-ditolak', icon: XCircle, label: 'Usulan Ditolak' },
    ];

    const adminItems = [
        { path: '/admin/desa/peta', icon: MapIcon, label: 'Peta Desa' },
        { path: '/admin/desa/pengaturan', icon: Settings, label: 'Pengaturan' },
    ];

    return (
        <div className="flex h-screen bg-background-dark overflow-hidden font-display text-slate-200">
            {/* Sidebar */}
            <aside
                className={twMerge(
                    "fixed inset-y-0 left-0 z-30 w-72 bg-slate-900/85 backdrop-blur-md border-r border-white/5 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:relative",
                    !sidebarOpen && "-translate-x-full"
                )}
            >
                <div className="h-20 flex items-center px-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/20 p-2 rounded-lg shadow-neon-blue">
                            <img
                                src="/assets/images/logo-pemkot.png"
                                alt="Logo Kota Sukabumi"
                                className="w-8 h-8 object-contain drop-shadow-lg"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = 'B';
                                }}
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-white leading-tight tracking-wide">
                                Musrenbang<span className="text-primary-glow">Digital</span>
                            </h2>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Kota Sukabumi</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Menu Utama</p>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={twMerge(
                                "flex items-center gap-3 px-4 py-3 rounded-r-lg group transition-all duration-300 border-l-2",
                                isActive(item.path)
                                    ? "bg-primary/10 border-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-slate-600"
                            )}
                        >
                            <item.icon className={twMerge(
                                "w-5 h-5 transition-colors",
                                isActive(item.path) ? "text-primary-glow drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-slate-500 group-hover:text-primary-glow"
                            )} />
                            <span className="font-medium text-sm">{item.label}</span>
                            {item.badge && (
                                <span className="ml-auto bg-warning/20 text-warning border border-warning/20 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-neon-amber">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    ))}

                    <div className="pt-6 pb-2">
                        <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Administrasi</p>
                    </div>
                    {adminItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={twMerge(
                                "flex items-center gap-3 px-4 py-3 rounded-r-lg group transition-all duration-300 border-l-2",
                                isActive(item.path)
                                    ? "bg-primary/10 border-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-slate-600"
                            )}
                        >
                            <item.icon className={twMerge(
                                "w-5 h-5 transition-colors",
                                isActive(item.path) ? "text-primary-glow drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-slate-500 group-hover:text-primary-glow"
                            )} />
                            <span className="font-medium text-sm">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="border-t border-white/5 p-4 bg-black/20">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
                        <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-slate-700 border border-white/10 flex items-center justify-center overflow-hidden">
                                <span className="font-bold text-white">BS</span>
                            </div>
                            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-background-dark"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate group-hover:text-primary-glow transition-colors">Budi Santoso</p>
                            <p className="text-xs text-slate-400 truncate">Admin Desa</p>
                        </div>
                        <LogOut className="text-slate-500 hover:text-danger-glow w-5 h-5 transition-colors" />
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-background-dark relative">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between px-4 z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center shadow-neon-blue">
                            <img src="/assets/images/logo-pemkot.png" alt="Logo" className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-white">Admin Desa</span>
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-white">
                        {sidebarOpen ? <X /> : <Menu />}
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto relative h-full bg-background-dark">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
