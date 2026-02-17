
import { UserCheck, FilePlus, FileCheck, HardHat, ArrowRight } from 'lucide-react';

export default function ProcessFlow() {
    return (
        <section className="py-20 bg-[#0F172A] border-t border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 map-pattern opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-xs uppercase mb-2 block">Alur Partisipasi</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bagaimana Cara Kerjanya?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Ikuti 4 langkah mudah untuk berpartisipasi dalam pembangunan Kota Sukabumi. Suara Anda menentukan masa depan kota.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-800 -z-10"></div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-card-dark rounded-full border border-slate-700 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-300">
                            <UserCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">1. Verifikasi</h3>
                        <p className="text-sm text-slate-400 leading-relaxed px-2">
                            Daftarkan akun menggunakan NIK Anda. Sistem akan memverifikasi data kependudukan secara otomatis.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-card-dark rounded-full border border-slate-700 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-300">
                            <FilePlus className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">2. Ajukan</h3>
                        <p className="text-sm text-slate-400 leading-relaxed px-2">
                            Buat usulan baru. Lengkapi dengan foto lokasi, deskripsi masalah, dan titik koordinat peta.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-card-dark rounded-full border border-slate-700 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-300">
                            <FileCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">3. Validasi</h3>
                        <p className="text-sm text-slate-400 leading-relaxed px-2">
                            Usulan akan diverifikasi oleh kelurahan, kecamatan, dan dinas terkait melalui musyawarah.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-card-dark rounded-full border border-slate-700 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-300">
                            <HardHat className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">4. Realisasi</h3>
                        <p className="text-sm text-slate-400 leading-relaxed px-2">
                            Pantau status usulan yang diterima hingga proses pengerjaan pembangunan selesai.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center text-primary hover:text-blue-400 font-semibold transition-colors">
                        Baca Panduan Lengkap <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
