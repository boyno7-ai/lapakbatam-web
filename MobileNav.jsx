export default function MobileNav({ onOpenCart, cartCount }) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl bg-white shadow-lg rounded-full p-2 flex justify-between items-center z-40">
      <button className="flex-1 text-center py-2 text-sm">Beranda</button>
      <button className="flex-1 text-center py-2 text-sm">Produk</button>
      <button className="flex-1 text-center py-2 text-sm" onClick={onOpenCart}>Cart ({cartCount})</button>
      <button className="flex-1 text-center py-2 text-sm">Seller</button>
    </nav>
  );
}