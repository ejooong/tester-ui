
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Check, Edit3, ArrowRight, Info, Plus, Minus, MapPin,
    CloudUpload, Image as ImageIcon, X
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function SubmissionPage() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        navigate('/sukses');
    };

    return (
        <div className="bg-background-dark min-h-screen font-sans text-slate-100 flex flex-col relative">
            <Navbar />

            <main className="flex-grow py-8 px-4 sm:px-6 pt-32">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-white">Ajukan Usulan Musrenbang</h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Sampaikan aspirasi pembangunan untuk Kota Sukabumi yang lebih baik. Pastikan data yang Anda masukkan valid dan akurat.
                        </p>
                    </div>

                    {/* Stepper */}
                    <div className="w-full">
                        <div className="flex items-center justify-center w-full">
                            <div className="flex flex-col items-center relative z-10">
                                <div className="w-10 h-10 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                    <Check className="w-5 h-5" />
                                </div>
                                <span className="absolute top-12 text-[10px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">Identitas</span>
                            </div>

                            <div className="flex-auto border-t-2 border-primary/30 mx-4 -mt-2 shadow-[0_0_10px_rgba(34,211,238,0.2)]"></div>

                            <div className="flex flex-col items-center relative z-10">
                                <div className="w-12 h-12 bg-primary border-2 border-cyan-300 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(34,211,238,0.6)] scale-110">
                                    2
                                </div>
                                <span className="absolute top-14 text-[10px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">Detail Usulan</span>
                            </div>

                            <div className="flex-auto border-t-2 border-slate-700 mx-4 -mt-2"></div>

                            <div className="flex flex-col items-center relative z-10">
                                <div className="w-10 h-10 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-500 font-bold">
                                    3
                                </div>
                                <span className="absolute top-12 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Selesai</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-10 mt-16">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Proposal Info */}
                            <div className="space-y-6">
                                <div className="border-b border-slate-700 pb-2">
                                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <Edit3 className="text-primary w-5 h-5" />
                                        Informasi Usulan
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="fullName">Nama Lengkap <span className="text-red-500">*</span></label>
                                        <input className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="fullName" name="fullName" placeholder="Masukkan nama lengkap sesuai KTP" type="text" />
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="title">Judul Usulan <span className="text-red-500">*</span></label>
                                        <input className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="title" name="title" placeholder="Contoh: Perbaikan Jalan Berlubang di Jl. Ahmad Yani" type="text" />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="category">Kategori <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <select className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none appearance-none cursor-pointer" id="category" name="category" defaultValue="">
                                                <option disabled value="">Pilih Kategori Usulan</option>
                                                <option value="infrastruktur">Infrastruktur & Kewilayahan</option>
                                                <option value="sosial">Sosial Budaya</option>
                                                <option value="ekonomi">Ekonomi</option>
                                                <option value="pemerintahan">Tata Pemerintahan</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="urgency">Tingkat Urgensi</label>
                                        <div className="relative">
                                            <select className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none appearance-none cursor-pointer" id="urgency" name="urgency">
                                                <option value="normal">Normal</option>
                                                <option value="tinggi">Tinggi (Segera)</option>
                                                <option value="kritis">Kritis (Darurat)</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="description">Deskripsi Lengkap <span className="text-red-500">*</span></label>
                                        <textarea className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="description" name="description" placeholder="Jelaskan detail permasalahan, kondisi saat ini, dan harapan perbaikan..." rows={4}></textarea>
                                        <p className="mt-1 text-xs text-slate-500 text-right">0/500 karakter</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="space-y-6">
                                <div className="border-b border-slate-700 pb-2">
                                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <MapPin className="text-primary w-5 h-5" />
                                        Lokasi Usulan
                                    </h2>
                                </div>

                                <div className="bg-slate-900/60 p-5 rounded-xl border border-white/5">
                                    <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                                        <Info className="w-4 h-4" />
                                        Klik pada peta untuk menentukan titik lokasi usulan.
                                    </p>

                                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-inner border border-slate-600 bg-slate-800 group">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHj1YB8lyBUV49QXhkuYNGqU6PKkVbyiLgt6zpXdec01NHCdLhibCoh2R-wa1-rvvn9nSQpp6sqgnm1Xn0gHGYBhfqyEMQK2o7R9CXP0Vl-13UtbHd3IrK9FufPa5kKQUWh9AW0QpcNIBlO3HJ9mryptpvH-vouRByeYH6yGhxECdiiTvn80BiNC0JCv-xnO-svlnmDbrB85sPV94oKZLPFoeq-5UCHwu4hWNGwKC8SCxbsEFGAtUYG8W7BMczhSd4TDEzwt3WYOs"
                                            alt="Map Placeholder"
                                            className="w-full h-full object-cover grayscale invert contrast-[0.9] brightness-[0.6] opacity-60 group-hover:opacity-80 transition-opacity cursor-crosshair"
                                        />

                                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                                            <button type="button" className="bg-slate-800 p-2 rounded shadow-md hover:bg-slate-700 text-slate-300">
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button type="button" className="bg-slate-800 p-2 rounded shadow-md hover:bg-slate-700 text-slate-300">
                                                <Minus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                                            <MapPin className="text-red-500 w-10 h-10 drop-shadow-md fill-red-500/20" />
                                        </div>

                                        <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded shadow text-xs font-mono text-slate-300 border border-slate-600">
                                            Lat: -6.9215, Long: 106.9246
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="address">Alamat Detail (Jalan)</label>
                                        <input className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="address" name="address" placeholder="Contoh: Jl. RE Martadinata No. 45" type="text" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                        <div className="col-span-1">
                                            <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="rtrw">RT / RW</label>
                                            <input className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="rtrw" name="rtrw" placeholder="001 / 002" type="text" />
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="village">Desa / Kelurahan</label>
                                            <input className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="village" name="village" placeholder="Nama Kelurahan" type="text" />
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="district">Kecamatan</label>
                                            <input className="w-full rounded-lg border-white/10 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/50 focus:border-cyan-400 placeholder-slate-500 shadow-inner transition-all duration-200 py-2.5 px-3 focus:outline-none" id="district" name="district" placeholder="Nama Kecamatan" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-6">
                                <div className="border-b border-slate-700 pb-2">
                                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <ImageIcon className="text-primary w-5 h-5" />
                                        Foto Lampiran / Kondisi Lapangan
                                    </h2>
                                </div>

                                <div className="relative border-2 border-dashed border-slate-600 rounded-xl p-8 hover:bg-slate-800/50 transition-colors cursor-pointer group text-center">
                                    <input type="file" multiple accept="image/png, image/jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    <div className="space-y-2">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <CloudUpload className="w-6 h-6" />
                                        </div>
                                        <div className="text-sm text-slate-300">
                                            <span className="font-semibold text-primary">Klik untuk upload</span> atau drag and drop
                                        </div>
                                        <p className="text-xs text-slate-400">
                                            PNG, JPG up to 5MB (Maksimal 3 foto)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <div className="relative group w-24 h-24 rounded-lg overflow-hidden border border-slate-600 shadow-sm">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSU0BhWAYWhx0cxlMz6EVSxiH5Ee1wTufuLJhCdFG4dh28-iK0a-i220wC-WBPGkgWpZOEr3VTB6PJ27GIzTZFz6UN-NZ-RVHsLld64AkZlM3cJymvXgh0zLSx4--wzcbaBmIv-zx3ae9EGhlROjqo7ROX-8lku3P2wrp96vF6X3pvcmb4kAtANQSmU31D_1ZvMFlRws5NUSsy9vTQz5ufGOnHdOtJUu7aBU6JscTQ_3HAnfFmC5WifEQtABO94eybgrwsEC2ZfVY" alt="Preview" className="w-full h-full object-cover" />
                                        <button type="button" className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-700 flex justify-between items-center">
                                <button type="button" onClick={() => navigate('/validasi')} className="px-8 py-3 rounded-xl border border-white/10 text-slate-400 font-semibold hover:bg-white/5 transition-all focus:outline-none">
                                    Kembali
                                </button>
                                <button type="submit" className="px-8 py-3 rounded-xl bg-primary hover:bg-cyan-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all flex items-center gap-2">
                                    Lanjut ke Ringkasan
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="text-center pb-8">
                        <p className="text-xs text-slate-400">
                            © 2023 Pemerintah Kota Sukabumi. Dilindungi oleh Undang-Undang.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
