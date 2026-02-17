
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Map as MapIcon,
    Users,
    LogOut,
    Menu,
    X,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    const navItems = [
        { path: '/admin/bappeda', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/bappeda/usulan', icon: FileText, label: 'Manajemen Usulan' },
        { path: '/admin/bappeda/gis', icon: MapIcon, label: 'GIS CMS' },
        // { path: '/admin/bappeda/master', icon: Database, label: 'Master Data' },
    ];

    const settingItems = [
        // { path: '/admin/bappeda/laporan', icon: BarChart3, label: 'Laporan' },
        { path: '/admin/bappeda/users', icon: Users, label: 'Pengguna' },
    ];

    return (
        <div className="flex h-screen bg-background-dark overflow-hidden font-sans text-slate-300 selection:bg-primary selection:text-white">
            {/* Sidebar */}
            <aside
                className={twMerge(
                    "fixed inset-y-0 left-0 z-30 w-64 bg-slate-900/90 backdrop-blur-md border-r border-slate-800/50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:relative",
                    !sidebarOpen && "-translate-x-full"
                )}
            >
                <div className="h-20 flex items-center px-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-neon-blue">
                            <img
                                src="/assets/images/logo-pemkot.png"
                                alt="Logo Kota Sukabumi"
                                className="w-7 h-auto"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = 'B';
                                }}
                            />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm leading-tight text-white">Musrenbang</h1>
                            <p className="text-xs text-slate-400 font-medium tracking-wide">Kota Sukabumi</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                    <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Main Menu</p>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={twMerge(
                                "flex items-center gap-3 px-4 py-3 rounded-r-lg text-sm font-medium transition-all group border-l-4",
                                isActive(item.path)
                                    ? "bg-gradient-to-r from-primary/15 to-transparent border-primary text-primary-glow"
                                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={twMerge(
                                "w-5 h-5 transition-colors",
                                isActive(item.path) ? "text-primary" : "group-hover:text-white"
                            )} />
                            {item.label}
                        </Link>
                    ))}

                    <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 mt-8">Settings</p>
                    {settingItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={twMerge(
                                "flex items-center gap-3 px-4 py-3 rounded-r-lg text-sm font-medium transition-all group border-l-4",
                                isActive(item.path)
                                    ? "bg-gradient-to-r from-primary/15 to-transparent border-primary text-primary-glow"
                                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={twMerge(
                                "w-5 h-5 transition-colors",
                                isActive(item.path) ? "text-primary" : "group-hover:text-white"
                            )} />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="border-t border-slate-800/50 p-4 bg-slate-900/50">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-slate-800">
                            AD
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Admin Bappeda</p>
                            <p className="text-xs text-slate-500 truncate">admin@sukabumi.go.id</p>
                        </div>
                        <button className="text-slate-500 hover:text-white transition-colors">
                            <LogOut className="w-5 h-5" />
                        </button>
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
            <main className="flex-1 flex flex-col overflow-hidden bg-[#0F172A] relative">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between px-4 z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                            <img src="/assets/images/logo-pemkot.png" alt="Logo" className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-white">Musrenbang Digital</span>
                    </div>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-white">
                        {sidebarOpen ? <X /> : <Menu />}
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-background-dark to-background-dark relative">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
