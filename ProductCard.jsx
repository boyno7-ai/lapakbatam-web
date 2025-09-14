export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img src={product.img} alt={product.title} className="w-full h-28 object-cover" />
      <div className="p-3">
        <div className="font-semibold text-sm leading-tight">{product.title}</div>
        <div className="text-xs text-slate-500">{product.seller}</div>
        <div className="mt-2 flex items-center justify-between">
          <div className="font-bold text-sm">Rp{product.price.toLocaleString()}</div>
          <button onClick={onAdd} className="px-2 py-1 text-xs rounded-md border">Tambah</button>
        </div>
      </div>
    </div>
  );
}