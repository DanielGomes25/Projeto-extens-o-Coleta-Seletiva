import React from "react";

export default function Header() {
    return (
        <header className="bg-primary text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                        ♻
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Coleta Seletiva — Jardim São Pedro</h1>
                        <p className="text-sm opacity-90">Educação ambiental e práticas sustentáveis</p>
                    </div>
                </div>

                <nav className="hidden md:flex gap-6 text-white/90">
                    <a href="#pevs" className="hover:underline">PEVs</a>
                    <a href="#resources" className="hover:underline">Recursos</a>
                    <a href="#faq" className="hover:underline">FAQ</a>
                </nav>

                <div className="md:hidden">
                    <button className="bg-white text-primary px-3 py-1 rounded">Menu</button>
                </div>
            </div>
        </header>
    );
}
