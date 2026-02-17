import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, LogIn, ArrowLeft, Hexagon } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="bg-[#0F172A] min-h-screen flex flex-col md:flex-row font-sans text-slate-100 selection:bg-cyan-500 selection:text-white">
            {/* Left Side - Hero/Branding */}
            <div className="hidden md:flex md:w-1/2 lg:w-7/12 relative bg-slate-900 overflow-hidden group">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnHflgfVqyISBq_XiSSmtviRvLdBwnvD91Et2VHyAF0x-4ZDtvAcVvtIjQ3tl2c8xdQQqxnidNwW8z7GSzQAaayyCTILMD4MieE2P3hOuoZH4HlDyKByrSKLTy3-sIf9dyqnIrQbaH2XHRu4C59G6NHwVi482_w85X1FWp2OXd1qkpnSq3rVBAZYjNR43hUG8a-HUKbk8QINUkkDLDPq4944DJQ9SRfCvt0kiScEBLNkVXkiPDc6ug0keM7zaUQItJt3XdGgC4AMo"
                    alt="Sukabumi lush nature at dusk"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[20s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-transparent to-transparent"></div>

                <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 lg:p-16">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/logo-pemkot.png" alt="Pemkot Sukabumi" className="h-10 w-auto object-contain" />
                            <img src="/assets/images/logo-bappeda.png" alt="Bappeda Sukabumi" className="h-10 w-auto object-contain" />
                        </div>
                        <div className="h-8 w-px bg-slate-600 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-cyan-500/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                <Hexagon className="text-cyan-400 w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold tracking-wide text-cyan-50">Musrenbang Digital</span>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                            Selamat Datang di <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                                Portal Masa Depan
                            </span>
                            <br /> Sukabumi
                        </h1>
                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
                            Mewujudkan perencanaan pembangunan Kota Sukabumi yang modern, transparan, dan berkelanjutan melalui teknologi terintegrasi.
                        </p>
                        <div className="mt-10 flex space-x-3">
                            <div className="h-1.5 w-16 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            <div className="h-1.5 w-3 bg-slate-600 rounded-full"></div>
                            <div className="h-1.5 w-3 bg-slate-600 rounded-full"></div>
                        </div>
                    </div>

                    <div className="text-sm text-slate-400 font-light flex items-center gap-2">
                        <span>© 2024 Badan Perencanaan Pembangunan Daerah</span>
                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                        <span>Kota Sukabumi</span>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 lg:w-5/12 flex items-center justify-center p-6 sm:p-12 bg-[#0F172A] relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="w-full max-w-md space-y-8 bg-slate-800/40 backdrop-blur-xl border border-cyan-400/20 p-8 rounded-2xl relative z-10 shadow-2xl">
                    {/* Mobile Header */}
                    <div className="md:hidden flex flex-col items-center mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/assets/images/logo-pemkot.png" alt="Pemkot Sukabumi" className="h-8 w-auto object-contain" />
                            <img src="/assets/images/logo-bappeda.png" alt="Bappeda Sukabumi" className="h-8 w-auto object-contain" />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                <Hexagon className="w-4 h-4" />
                            </div>
                            <h2 className="text-lg font-bold text-white text-center">Musrenbang Digital</h2>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white tracking-tight">Masuk ke Akun</h2>
                        <p className="mt-2 text-slate-400 text-sm">
                            Silakan masukkan kredensial Anda untuk melanjutkan.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-slate-400 mb-1.5">
                                    Email atau Username
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="text-slate-500 w-5 h-5 group-focus-within:text-cyan-400 transition-colors" />
                                    </div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-900/50 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-all duration-200 text-white shadow-inner"
                                        placeholder="NIP atau Email terdaftar"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-400 mb-1.5">
                                    Kata Sandi
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="text-slate-500 w-5 h-5 group-focus-within:text-cyan-400 transition-colors" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-900/50 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm transition-all duration-200 text-white shadow-inner"
                                        placeholder="••••••••"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-slate-500 hover:text-slate-300 focus:outline-none transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <Link to="#" className="text-xs font-medium text-cyan-500 hover:text-cyan-400 transition-colors">
                                        Lupa Password?
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LogIn className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                                </span>
                                {isLoading ? 'Memproses...' : 'Masuk'}
                            </button>
                        </div>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-700/50"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-[#0F172A]/80 backdrop-blur text-slate-500 rounded-full border border-slate-800">Pusat Bantuan</span>
                            </div>
                        </div>

                        <div className="text-center space-y-4">
                            <p className="text-sm text-slate-400">
                                Belum punya akun? <br className="sm:hidden" />
                                <Link to="#" className="font-medium text-cyan-500 hover:text-cyan-400 transition-colors ml-1">
                                    Hubungi Admin Bappeda
                                </Link>
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center px-4 py-2.5 border border-slate-700 shadow-sm text-sm font-medium rounded-xl text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 w-full transition-all duration-200 backdrop-blur-sm group"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2 text-slate-400 group-hover:text-white" />
                                Kembali ke Beranda
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="absolute bottom-6 text-xs text-slate-600 font-medium">
                    System v4.2.0 • Build 2024
                </div>
            </div>
        </div>
    );
}
