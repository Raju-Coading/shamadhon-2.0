import React from "react";
import { motion } from "framer-motion";

/**
 * Styled Product Card List (Beginner Friendly)
 * - Tailwind CSS for styling
 * - Framer Motion for tiny fade/scale animations (optional)
 * - No external UI libs needed
 *
 * Usage:
 * import ProductCardList from "./ProductCardList";
 * 
 * function App(){
 *   return (
 *     <div className="min-h-screen bg-gray-100 p-6">
 *       <ProductCardList />
 *     </div>
 *   );
 * }
 */

const defaultProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1518446640950-1b640d87fbd0?q=80&w=800&auto=format&fit=crop",
    badge: "Best Seller"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 4999,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?q=80&w=800&auto=format&fit=crop",
    badge: "Trending"
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 1999,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=800&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 4,
    title: "Gaming Mouse",
    price: 1499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1585079542156-2755d9c8affe?q=80&w=800&auto=format&fit=crop"
  }
];

function formatINR(n){
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n);
}

function Stars({ value = 0 }){
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: total }).map((_, i) => {
        const isFull = i < full;
        const isHalf = !isFull && half && i === full;
        return (
          <span key={i} className="text-yellow-500">
            {isFull ? "★" : isHalf ? "☆" : "☆"}
          </span>
        );
      })}
      <span className="ml-1 text-xs text-gray-500">{value.toFixed(1)}</span>
    </div>
  );
}

function ProductCard({ product, onAddToCart = () => {}, onView = () => {} }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-2.5 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <Stars value={product.rating} />
          <div className="text-base font-semibold text-gray-900">{formatINR(product.price)}</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onView(product)}
            className="py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            View
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCardList({ products = defaultProducts }){
  const handleAdd = (p) => alert(`Added to cart: ${p.title}`);
  const handleView = (p) => alert(`Viewing: ${p.title}`);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex items-end justify-between mb-6 px-1">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">🛒 Products</h2>
          <p className="text-sm text-gray-500">Styled product card list (local data)</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAdd} onView={handleView} />
        ))}
      </div>
    </div>
  );
}
