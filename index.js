import React from "react";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";

const SAMPLE_PRODUCTS = [
  { id: 1, title: "Kerupuk Ikan Nongsa", price: 42000, seller: "Toko Ibu Sari", img: "/assets/p1.jpg" },
  { id: 2, title: "Batik Batam - Anak", price: 85000, seller: "BatamCraft", img: "/assets/p2.jpg" },
  { id: 3, title: "Oleh-oleh Kepri (Paket)", price: 150000, seller: "OlehOlehBatam", img: "/assets/p3.jpg" },
  { id: 4, title: "Sambal Asli Batam", price: 30000, seller: "DapurLokal", img: "/assets/p4.jpg" },
  { id: 5, title: "Kaos BATAM", price: 75000, seller: "SouvenirBatam", img: "/assets/p5.jpg" },
  { id: 6, title: "Earphone USB", price: 120000, seller: "GadgetBatam", img: "/assets/p6.jpg" },
];

export default function Home() {
  const [lang, setLang] = React.useState("id");
  const t = TRANSLATIONS[lang];
  const [cart, setCart] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
    setDrawerOpen(true);
  }

  function removeFromCart(id) { setCart(prev => prev.filter(p => p.id !== id)); }
  function clearCart() { setCart([]); }
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-800">
      <Header lang={lang} setLang={setLang} onOpenCart={() => setDrawerOpen(true)} cartCount={cart.length} />
      <main className="max-w-3xl mx-auto p-4 pb-24">
        <section className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h1 className="text-xl font-bold">{t.heroTitle}</h1>
              <p className="text-sm text-slate-600 mt-1">{t.heroSubtitle}</p>
              <div className="mt-3 flex gap-2">
                <button className="btn-primary">{t.ctaShop}</button>
                <button className="px-4 py-2 rounded-lg border" onClick={() => alert(t.ctaSellerHelp)}>{t.ctaSeller}</button>
              </div>
            </div>
            <div className="hidden md:block w-28">
              <img src="/assets/banner-hero.png" alt="hero" className="rounded-lg object-cover w-full h-full" />
            </div>
          </div>
        </section>
        <section className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">{t.categories}</h2>
            <button className="text-amber-600 text-sm">{t.viewAll}</button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Makanan","Fashion","Oleh-oleh","Elektronik"].map((c,i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-sm min-w-[120px] text-center text-sm">{c}</div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">{t.popularProducts}</h2>
            <div className="text-sm text-slate-500">{t.sortBy}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {SAMPLE_PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
            ))}
          </div>
        </section>
      </main>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} cart={cart} onRemove={removeFromCart} onClear={clearCart} total={total} />
      <MobileNav onOpenCart={() => setDrawerOpen(true)} cartCount={cart.length} />
      <Footer />
    </div>
  );
}

const TRANSLATIONS = {
  id: {
    heroTitle: "LapakBatam — Marketplace Lokal untuk Semua Olshop Batam",
    heroSubtitle: "Gabung sekarang, pilih kurirmu, atau pakai kurir Darrent untuk gratis iuran.",
    ctaShop: "Mulai Belanja",
    ctaSeller: "Saya Penjual",
    ctaSellerHelp: "Untuk jadi penjual, isi form pendaftaran di dashboard seller.",
    categories: "Kategori",
    viewAll: "Lihat Semua",
    popularProducts: "Produk Populer",
    sortBy: "Termurah • Terlaris",
  },
  en: {
    heroTitle: "LapakBatam — Local marketplace for Batam online shops",
    heroSubtitle: "Join now, choose your courier, or use Darrent courier for free fees.",
    ctaShop: "Start Shopping",
    ctaSeller: "I'm a Seller",
    ctaSellerHelp: "To become a seller, please fill the seller registration form.",
    categories: "Categories",
    viewAll: "View All",
    popularProducts: "Popular Products",
    sortBy: "Cheapest • Bestselling",
  }
};