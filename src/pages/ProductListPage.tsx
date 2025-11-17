import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductListPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    brand: '',
    strapType: '',
    priceRange: [0, 800000],
  });
  const [showFilters, setShowFilters] = useState(false);
  const searchTerm = searchParams.get('search') || '';

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)]}));
  };
  
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const searchMatch = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      const categoryMatch = filters.category ? product.category === filters.category : true;
      const brandMatch = filters.brand ? product.brand === filters.brand : true;
      const strapMatch = filters.strapType ? product.strapType === filters.strapType : true;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      return searchMatch && categoryMatch && brandMatch && strapMatch && priceMatch;
    });
  }, [filters, searchTerm]);

  const brands = [...new Set(mockProducts.map(p => p.brand))];
  const strapTypes = [...new Set(mockProducts.map(p => p.strapType))];
  const categories = ['Luxury', 'Budget', 'Smartwatch'];

  const FilterSidebar = () => (
    <aside className="w-full md:w-64 lg:w-72 space-y-6">
        <h3 className="text-xl font-bold text-brand-accent">Filters</h3>
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-brand-light/90">Category</label>
          <select name="category" value={filters.category} onChange={handleFilterChange} className="mt-1 block w-full bg-brand-slate border-brand-accent/50 rounded-md shadow-sm p-2 text-brand-light">
            <option value="">All</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-brand-light/90">Brand</label>
          <select name="brand" value={filters.brand} onChange={handleFilterChange} className="mt-1 block w-full bg-brand-slate border-brand-accent/50 rounded-md shadow-sm p-2 text-brand-light">
            <option value="">All</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        {/* Strap Type */}
        <div>
          <label className="block text-sm font-medium text-brand-light/90">Strap Type</label>
          <select name="strapType" value={filters.strapType} onChange={handleFilterChange} className="mt-1 block w-full bg-brand-slate border-brand-accent/50 rounded-md shadow-sm p-2 text-brand-light">
            <option value="">All</option>
            {strapTypes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        {/* Price Range */}
        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-brand-light/90">Price up to: ₹{filters.priceRange[1].toLocaleString('en-IN')}</label>
          <input id="priceRange" type="range" min="0" max="800000" step="5000" value={filters.priceRange[1]} onChange={handlePriceChange} className="w-full h-2 bg-brand-slate rounded-lg appearance-none cursor-pointer accent-brand-accent mt-2"/>
        </div>
      </aside>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-brand-accent">Our Collection</h1>
        {searchTerm && <p className="mt-2 text-brand-light/70">Showing results for: "{searchTerm}"</p>}
      </div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:hidden mb-4">
            <button onClick={() => setShowFilters(!showFilters)} className="w-full bg-brand-slate text-brand-light p-3 rounded-md flex justify-between items-center">
                <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
                <svg className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {showFilters && <div className="mt-4 bg-brand-slate p-4 rounded-lg"><FilterSidebar /></div>}
        </div>

        <div className="hidden md:block">
            <FilterSidebar />
        </div>

        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-brand-light">No Watches Found</h2>
              <p className="text-brand-light/50 mt-2">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;