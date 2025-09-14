import React from "react";
export default function Header({ lang, setLang, onOpenCart, cartCount=0 }) {
  const t = TRANSLATIONS[lang];
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo-main.png" alt="LapakBatam" className="w-10 h-10 rounded" />
          <div>
            <div className="text-lg font-semibold">LapakBatam</div>
            <div className="text-xs text-slate-500">{t.tagline}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="px-3 py-1 rounded-md border text-sm">{lang.toUpperCase()}</button>
          <button onClick={onOpenCart} className="relative px-3 py-1 rounded-md border text-sm">Cart{cartCount>0 && <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">{cartCount}</span>}</button>
        </div>
      </div>
    </header>
  );
}
const TRANSLATIONS = { id: { tagline: "Marketplace Lokal — All Batam" }, en: { tagline: "Local Marketplace — All Batam" } };