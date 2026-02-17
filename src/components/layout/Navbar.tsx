
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={twMerge(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            scrolled || mobileMenuOpen ? "bg-background-dark/95 backdrop-blur-md border-white/5" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <img
                            src="/assets/images/logo-pemkot.png"
                            alt="Logo Kota Sukabumi"
                            className="w-7 h-auto"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerText = 'B';
                            }}
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-white leading-tight font-display">BAPPEDA<span className="text-primary">Digital</span></span>
                            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Kota Sukabumi</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className={twMerge(
                                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                isActive('/') ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                            )}
                        >
                            Beranda
                        </Link>

                        <Link
                            to="/peta"
                            className={twMerge(
                                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                isActive('/peta') ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                            )}
                        >
                            Peta Kota
                        </Link>

                        {/* Dropdown Informasi */}
                        <div className="relative group">
                            <button
                                className={twMerge(
                                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
                                    isActive('/infografis') || isActive('/berita') ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                Informasi <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                            <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-card-dark border border-white/10 rounded-xl shadow-xl overflow-hidden p-1">
                                    <Link to="/infografis" className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Infografis Data
                                    </Link>
                                    <Link to="/berita" className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Berita & Artikel
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Dropdown Layanan */}
                        <div className="relative group">
                            <button
                                className={twMerge(
                                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
                                    isActive('/lacak') || isActive('/validasi') ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                Layanan <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-card-dark border border-white/10 rounded-xl shadow-xl overflow-hidden p-1">
                                    <Link to="/validasi" className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Ajukan Usulan
                                    </Link>
                                    <Link to="/lacak" className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Lacak Status Usulan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="hidden sm:block text-slate-400 hover:text-white text-sm font-medium transition-colors px-3 py-2">
                            Masuk
                        </Link>
                        <Link to="/validasi" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5">
                            Ajukan Usulan
                        </Link>
                        <button
                            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background-dark/95 backdrop-blur-xl border-b border-white/5 absolute w-full px-4 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto shadow-2xl">
                    <Link
                        to="/"
                        className="p-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Beranda
                    </Link>
                    <Link
                        to="/peta"
                        className="p-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Peta Kota
                    </Link>

                    <div>
                        <button
                            onClick={() => toggleDropdown('info')}
                            className="w-full flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        >
                            Informasi <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'info' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'info' && (
                            <div className="pl-4 mt-1 space-y-1 border-l-2 border-white/5 ml-3">
                                <Link
                                    to="/infografis"
                                    className="block p-2 text-sm text-slate-400 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Infografis
                                </Link>
                                <Link
                                    to="/berita"
                                    className="block p-2 text-sm text-slate-400 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Berita
                                </Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => toggleDropdown('layanan')}
                            className="w-full flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                        >
                            Layanan <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'layanan' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'layanan' && (
                            <div className="pl-4 mt-1 space-y-1 border-l-2 border-white/5 ml-3">
                                <Link
                                    to="/validasi"
                                    className="block p-2 text-sm text-slate-400 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Ajukan Usulan
                                </Link>
                                <Link
                                    to="/lacak"
                                    className="block p-2 text-sm text-slate-400 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Lacak Usulan
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                        <Link
                            to="/login"
                            className="w-full py-3 rounded-lg border border-white/10 text-center text-slate-300 hover:text-white font-medium hover:bg-white/5 transition-colors"
                        >
                            Masuk Akun
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
