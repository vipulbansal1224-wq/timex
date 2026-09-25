'use client';

import React, { useState } from 'react';
import { Search, Filter, Star, Eye, Send, FileSpreadsheet, Check } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import Image from 'next/image';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onOpenRFQ: (productName?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onOpenRFQ,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.standards.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-industrial-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Industrial Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mild Steel Bolts, Nuts & Wire Products
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Manufactured from high-grade raw material steel in Ludhiana. All products are tested for tensile strength, thread pitch accuracy, and corrosion resistance.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-industrial-900/90 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Hex Bolt, M10, HB Wire..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-industrial-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                All Products ({PRODUCTS.length})
              </button>
              <button
                onClick={() => setSelectedCategory('bolts')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === 'bolts'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-industrial-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                MS Bolts
              </button>
              <button
                onClick={() => setSelectedCategory('nuts')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === 'nuts'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-industrial-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                MS Nuts
              </button>
              <button
                onClick={() => setSelectedCategory('wires')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === 'wires'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-industrial-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                HB & GI Wires
              </button>
              <button
                onClick={() => setSelectedCategory('washers')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === 'washers'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-industrial-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                Washers & Rivets
              </button>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-industrial-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">No products match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800/80 group"
              >
                <div>
                  {/* Image Header Container */}
                  <div className="relative h-48 w-full bg-industrial-900 border-b border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-industrial-950/90 backdrop-blur-md text-amber-400 text-xs px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-blue-950/90 text-blue-300 text-xs px-2.5 py-1 rounded-md border border-blue-800 font-mono font-medium">
                      MOQ: {product.minOrderQuantity}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Specifications List Snippet */}
                    <div className="bg-industrial-950/70 p-3 rounded-xl border border-slate-800/80 space-y-1 text-xs">
                      {Object.entries(product.specifications).slice(0, 3).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-slate-400 font-medium">{key}:</span>
                          <span className="text-slate-200 font-semibold truncate max-w-[150px]">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Standards Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.standards.map((std) => (
                        <span
                          key={std}
                          className="bg-slate-800/80 text-slate-300 text-[11px] px-2 py-0.5 rounded border border-slate-700 font-mono"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Price & Action */}
                <div className="p-5 pt-0 mt-2 space-y-3 border-t border-slate-800/60">
                  <div className="flex items-baseline justify-between pt-3">
                    <div>
                      <span className="text-xs text-slate-400 font-medium block">Wholesale Price</span>
                      <div className="text-xl font-black text-amber-400">
                        {product.price} <span className="text-xs text-slate-300 font-normal">/ {product.unit}</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-medium">
                      Direct Factory Rate
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2 rounded-xl bg-industrial-800 hover:bg-industrial-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>Tech Specs</span>
                    </button>
                    
                    <button
                      onClick={() => onOpenRFQ(product.name)}
                      className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
