
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Inbox,
    ClipboardList,
    Map as MapIcon,
    BarChart3,
    LogOut,
    Menu,
    X,
    Building2
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function AdminOpdLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    const navItems = [
        { path: '/admin/opd', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/opd/usulan-masuk', icon: Inbox, label: 'Usulan Masuk', badge: '12' },
        { path: '/admin/opd/perencanaan', icon: ClipboardList, label: 'Perencanaan RKPD' },
        { path: '/admin/opd/peta', icon: MapIcon, label: 'Peta Tematik' },
        { path: '/admin/opd/laporan', icon: BarChart3, label: 'Laporan' },
    ];

    return (
        <div className="flex h-screen bg-background-dark overflow-hidden font-display text-slate-200">
            {/* Sidebar */}
            <aside
                className={twMerge(
                    "fixed inset-y-0 left-0 z-30 w-64 bg-card-dark/90 backdrop-blur-md border-r border-slate-700/50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:relative",
                    !sidebarOpen && "-translate-x-full"
                )}
            >
                <div className="h-20 flex items-center px-6 border-b border-slate-700/50">
                    <div className="flex items-center gap-2 text-cyan-glow font-bold text-xl tracking-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                        <Building2 className="w-8 h-8" />
                        <span className="text-white">Musrenbang<span className="font-light text-slate-400">Digital</span></span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                    <div className="mb-8 px-4 flex items-center gap-3">
                        <div className="relative">
                            <div className="h-12 w-12 rounded-full bg-slate-700 border-2 border-slate-600 shadow-lg flex items-center justify-center text-white font-bold text-xl">
                                PU
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-glow rounded-full border-2 border-card-dark shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white tracking-wide">Admin PU</p>
                            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Dinas Pekerjaan Umum</p>
                        </div>
                    </div>

                    <nav className="px-3 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={twMerge(
                                    "group flex items-center px-4 py-3 text-sm font-medium rounded-r-lg transition-all duration-200",
                                    isActive(item.path)
                                        ? "active-nav-glow bg-cyan-glow/10 border-l-4 border-cyan-glow text-cyan-glow shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon className={twMerge(
                                    "mr-3 w-5 h-5 transition-colors",
                                    isActive(item.path) ? "text-cyan-glow" : "group-hover:text-cyan-glow"
                                )} />
                                {item.label}
                                {item.badge && (
                                    <span className="ml-auto bg-danger-glow/20 text-danger-glow py-0.5 px-2 rounded-md text-[10px] font-bold border border-danger-glow/30 shadow-[0_0_8px_rgba(248,113,113,0.3)]">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-slate-700/50">
                    <button className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-danger/10 hover:text-danger-glow transition-colors">
                        <LogOut className="mr-3 w-5 h-5" />
                        Keluar
                    </button>
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
                        <div className="flex items-center gap-2 text-cyan-glow font-bold text-lg">
                            <Building2 className="w-6 h-6" />
                            <span className="text-white">Admin PU</span>
                        </div>
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-white">
                        {sidebarOpen ? <X /> : <Menu />}
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto relative z-0 bg-background-dark">
                    <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
