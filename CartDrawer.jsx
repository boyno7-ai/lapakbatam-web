export default function CartDrawer({ open, onClose, cart = [], onRemove, onClear, total = 0 }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-full max-w-xs bg-white shadow-lg p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Keranjang ({cart.length})</div>
          <div className="flex gap-2">
            <button onClick={onClear} className="px-2 py-1 text-sm border rounded">Bersihkan</button>
            <button onClick={onClose} className="px-2 py-1 text-sm border rounded">Tutup</button>
          </div>
        </div>
        <div className="space-y-2">
          {cart.length === 0 && <div className="text-sm text-slate-500">Keranjang kosong</div>}
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border p-2 rounded">
              <div>
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs text-slate-500">Rp{item.price.toLocaleString()} x {item.qty}</div>
              </div>
              <button onClick={() => onRemove(item.id)} className="px-2 py-1 text-xs border rounded">Hapus</button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">Total</div>
            <div className="font-bold">Rp{total.toLocaleString()}</div>
          </div>
          <button className="mt-3 w-full btn-primary" onClick={() => alert("Checkout dummy")}>Checkout</button>
        </div>
      </div>
      <div className="flex-1" onClick={onClose} />
    </div>
  );
}