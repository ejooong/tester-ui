
import { Building2, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-slate-800 pt-16 pb-8 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-lg">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-lg text-white">Musrenbang<span className="text-blue-500">Digital</span></span>
                        </div>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            Platform resmi perencanaan pembangunan daerah Kota Sukabumi. Wujudkan transparansi dan partisipasi publik untuk kota yang lebih baik.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-700">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-700">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-700">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Menu Utama</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Beranda</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Data Usulan</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Peta Sebaran</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Statistik</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Bantuan</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Panduan Penggunaan</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Hubungi Kami</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Lapor Masalah</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                                <span className="text-slate-500 text-sm">Bappeda Kota Sukabumi<br />JL. Sarasa No.12, Sukabumi</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span className="text-slate-500 text-sm">(0266) 123456</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span className="text-slate-500 text-sm">bappeda@sukabumikota.go.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © 2024 Pemerintah Kota Sukabumi. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-500 hover:text-white text-xs">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-xs">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
