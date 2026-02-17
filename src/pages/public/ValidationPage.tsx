
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, BadgeCheck, ArrowRight, User, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function ValidationPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nik: '',
        fullname: '',
        phone: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate validation
        navigate('/ajukan');
    };

    return (
        <div className="bg-background-dark min-h-screen font-sans text-slate-100 flex flex-col relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

            <Navbar />

            <main className="flex-grow py-12 px-4 sm:px-6 relative z-10 pt-32">
                <div className="max-w-3xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
                            Verifikasi Identitas
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
                            Langkah awal untuk berpartisipasi dalam pembangunan. Masukkan data diri Anda sesuai KTP untuk melanjutkan pengajuan usulan.
                        </p>
                    </div>

                    {/* Stepper */}
                    <div className="w-full px-4">
                        <div className="flex items-center justify-center w-full relative">
                            <div className="absolute top-5 left-0 w-full h-1 bg-slate-800 rounded-full -z-0"></div>

                            <div className="flex flex-col items-center relative z-10 w-1/3">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-background-dark shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                    1
                                </div>
                                <span className="mt-3 text-sm font-bold text-primary whitespace-nowrap drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Verifikasi Identitas</span>
                            </div>

                            <div className="flex flex-col items-center relative z-10 w-1/3">
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 font-bold border-4 border-background-dark">
                                    2
                                </div>
                                <span className="mt-3 text-xs font-medium text-slate-500 whitespace-nowrap">Detail Usulan</span>
                            </div>

                            <div className="flex flex-col items-center relative z-10 w-1/3">
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 font-bold border-4 border-background-dark">
                                    3
                                </div>
                                <span className="mt-3 text-xs font-medium text-slate-500 whitespace-nowrap">Selesai</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-card-dark/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex gap-3 items-start">
                                <ShieldCheck className="text-primary w-6 h-6 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-cyan-100/80">
                                    <strong className="text-primary block mb-1">Keamanan Data Terjamin</strong>
                                    Data NIK Anda akan diverifikasi secara otomatis dengan database Dukcapil untuk memastikan validitas pengusul.
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="nik" className="block text-sm font-medium text-slate-300 ml-1">
                                        Nomor Induk Kependudukan (NIK) <span className="text-primary">*</span>
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <BadgeCheck className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            id="nik"
                                            name="nik"
                                            required
                                            maxLength={16}
                                            pattern="[0-9]{16}"
                                            placeholder="16 digit nomor KTP"
                                            className="w-full bg-slate-900/60 text-white rounded-xl pl-10 pr-4 py-3 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder-slate-500 transition-all duration-300"
                                            value={formData.nik}
                                            onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 ml-1">Pastikan NIK sesuai dengan KTP elektronik Anda.</p>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="fullname" className="block text-sm font-medium text-slate-300 ml-1">
                                        Nama Lengkap <span className="text-primary">*</span>
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            required
                                            placeholder="Nama lengkap sesuai KTP"
                                            className="w-full bg-slate-900/60 text-white rounded-xl pl-10 pr-4 py-3 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder-slate-500 transition-all duration-300"
                                            value={formData.fullname}
                                            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 ml-1">
                                            Nomor WhatsApp <span className="text-primary">*</span>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                placeholder="08xxxxxxxxxx"
                                                className="w-full bg-slate-900/60 text-white rounded-xl pl-10 pr-4 py-3 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder-slate-500 transition-all duration-300"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 ml-1">
                                            Email (Opsional)
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="alamat@email.com"
                                                className="w-full bg-slate-900/60 text-white rounded-xl pl-10 pr-4 py-3 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder-slate-500 transition-all duration-300"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-2 flex justify-end items-center gap-4">
                                <button
                                    type="submit"
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-2 transform hover:-translate-y-0.5"
                                >
                                    Lanjut ke Detail Usulan
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="text-center pt-2 pb-8">
                        <p className="text-xs text-slate-500">
                            © 2023 Pemerintah Kota Sukabumi. Dilindungi oleh Undang-Undang.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
