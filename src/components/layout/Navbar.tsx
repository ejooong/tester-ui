
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={twMerge(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            scrolled || mobileMenuOpen ? "bg-primary-dark/80 backdrop-blur-md border-white/10" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo & Branding */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-black/20 border border-white/10">
                            {/* Replaced Material Icon with Text/Icon equivalent since Material Icons aren't loaded */}
                            <BuildingIcon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-white leading-tight tracking-wide font-display">BAPPEDA<span className="text-accent">Digital</span></span>
                            <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Kota Sukabumi</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={twMerge(
                                "text-sm font-medium transition-colors hover:text-accent",
                                isActive('/') ? "text-accent" : "text-white"
                            )}
                        >
                            Beranda
                        </Link>

                        <div className="relative group">
                            <button
                                className={twMerge(
                                    "text-white/70 hover:text-white font-medium text-sm transition-colors flex items-center gap-1",
                                    isActive('/peta') ? "text-white" : ""
                                )}
                            >
                                Peta Kota <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                                <div className="glass-card rounded-xl p-1 shadow-xl bg-[#3A0519]/90 backdrop-blur-md border-white/10">
                                    <Link to="/peta" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Peta Sebaran
                                    </Link>
                                    <Link to="/admin" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Dashboard Admin
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="text-white/70 hover:text-white font-medium text-sm transition-colors flex items-center gap-1">
                                Informasi <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                                <div className="glass-card rounded-xl p-1 shadow-xl bg-[#3A0519]/90 backdrop-blur-md border-white/10">
                                    <Link to="/infografis" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Infografis Data
                                    </Link>
                                    <Link to="/berita" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Berita & Artikel
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="text-white/70 hover:text-white font-medium text-sm transition-colors flex items-center gap-1">
                                Unduh <ChevronDown className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                                <div className="glass-card rounded-xl p-1 shadow-xl bg-[#3A0519]/90 backdrop-blur-md border-white/10">
                                    <a href="#" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Dokumen RKPD
                                    </a>
                                    <a href="#" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Panduan Teknis
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-white/70 hover:text-white text-sm font-medium transition-colors mr-2 hidden sm:block">
                            Masuk
                        </Link>
                        <Link
                            to="/validasi"
                            className="bg-gradient-to-r from-primary to-[#851842] hover:from-[#851842] hover:to-primary text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-black/20 border border-white/10 transition-all mb-0.5"
                        >
                            Daftar Akun
                        </Link>
                        <button
                            className="md:hidden text-white/70 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#3A0519]/95 backdrop-blur-xl border-b border-white/5 absolute w-full px-4 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto shadow-2xl">
                    <Link
                        to="/"
                        className="p-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Beranda
                    </Link>

                    <div className="border-t border-white/5 my-1"></div>

                    <div className="px-3 py-2 text-xs font-bold text-white/40 uppercase tracking-widest">Peta</div>
                    <Link
                        to="/peta"
                        className="p-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Peta Sebaran
                    </Link>

                    <div className="border-t border-white/5 my-1"></div>

                    <div className="px-3 py-2 text-xs font-bold text-white/40 uppercase tracking-widest">Informasi</div>
                    <Link
                        to="/infografis"
                        className="p-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Infografis
                    </Link>
                    <Link
                        to="/berita"
                        className="p-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Berita
                    </Link>

                    <div className="pt-4 border-t border-white/5 mt-2 flex flex-col gap-3">
                        <Link
                            to="/login"
                            className="w-full py-3 rounded-lg border border-white/10 text-center text-white/80 hover:text-white font-medium hover:bg-white/5 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Masuk Akun
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

// Simple icon component to replace material icon since we use lucide
function BuildingIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M3 21h18v-8H3v8zm6-11h12v-8h-12v8zm-6 0h4v-8H3v8z" />
        </svg>
    );
}
