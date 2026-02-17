

import { Link } from 'react-router-dom';
import { Check, ClipboardCopy, FileCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function SuccessPage() {
    return (
        <div className="bg-background-dark min-h-screen font-sans text-slate-100 flex flex-col relative overflow-hidden">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden pt-32">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-lg w-full space-y-8 relative z-10">
                    {/* Stepper */}
                    <div className="w-full mb-12">
                        <div className="flex items-center justify-center w-full">
                            <div className="flex flex-col items-center relative z-10">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_10px_rgba(34,197,94,0.4)] ring-2 ring-background-dark">
                                    <Check className="w-5 h-5" />
                                </div>
                                <span className="absolute top-12 text-xs font-medium text-green-400 whitespace-nowrap">Verifikasi</span>
                            </div>

                            <div className="flex-auto border-t-2 border-green-500/50 mx-2 -mt-2"></div>

                            <div className="flex flex-col items-center relative z-10">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_10px_rgba(34,197,94,0.4)] ring-2 ring-background-dark">
                                    <Check className="w-5 h-5" />
                                </div>
                                <span className="absolute top-12 text-xs font-medium text-green-400 whitespace-nowrap">Detail</span>
                            </div>

                            <div className="flex-auto border-t-2 border-green-500/50 mx-2 -mt-2"></div>

                            <div className="flex flex-col items-center relative z-10">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(34,197,94,0.6)] ring-4 ring-background-dark">
                                    3
                                </div>
                                <span className="absolute top-12 text-xs font-bold text-green-400 whitespace-nowrap">Selesai</span>
                            </div>
                        </div>
                    </div>

                    {/* Success Card */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-10 text-center relative shadow-xl">
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_50px_-10px_rgba(34,197,94,0.5)] border-4 border-background-dark">
                                <FileCheck className="w-12 h-12" />
                            </div>
                        </div>

                        <div className="mt-12 space-y-4">
                            <h2 className="text-3xl font-bold text-white tracking-tight">Usulan Berhasil Dikirim!</h2>
                            <p className="text-slate-400 leading-relaxed">
                                Terima kasih telah berkontribusi untuk pembangunan Kota Sukabumi. Usulan Anda telah kami terima dan akan segera diproses.
                            </p>
                        </div>

                        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">ID Pelacakan Anda</p>
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-2xl sm:text-3xl font-mono font-bold text-primary tracking-wider">MSRB-2023-8921</span>
                                <button className="text-slate-400 hover:text-white transition-colors" title="Salin ID">
                                    <ClipboardCopy className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Simpan ID ini untuk memantau status usulan Anda</p>
                        </div>

                        <div className="mt-10 space-y-4">
                            <Link to="/" className="block w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                                Kembali ke Beranda
                            </Link>
                            <Link to="/lacak" className="block text-sm text-slate-400 hover:text-white transition-colors">
                                Lihat Status Usulan Saya
                            </Link>
                        </div>
                    </div>

                    <div className="text-center pt-4">
                        <p className="text-xs text-slate-600">
                            © 2023 Pemerintah Kota Sukabumi. Dilindungi oleh Undang-Undang.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
