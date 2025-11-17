import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts, testimonials } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <FeaturedProducts />
      <CollectionsSection />
      <BrandStorySection />
      <TestimonialsSection />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <div className="relative h-[80vh] min-h-[500px] bg-black overflow-hidden">
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <img src="https://ucarecdn.com/46eebe54-22ef-4e59-8442-08cdea4ded5a/-/format/auto/-/preview/3000x3000/-/quality/lighter/Watch-Collection.jpg" alt="Luxury Watch" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center text-brand-light">
      <h1 className="text-4xl md:text-6xl font-black font-serif text-brand-accent uppercase tracking-wider">Timeless Elegance</h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-brand-light/90">Discover a curated collection of the world's finest timepieces. Craftsmanship that transcends generations.</p>
      <a href="#featured-products" className="mt-8 px-8 py-3 bg-brand-accent text-black font-bold uppercase rounded-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105">
        Explore The Collection
      </a>
    </div>
  </div>
);

const FeaturedProducts: React.FC = () => (
  <div id="featured-products" className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-serif font-bold text-center mb-4 text-brand-accent">Featured Timepieces</h2>
    <p className="text-center text-brand-light/70 mb-12 max-w-2xl mx-auto">Handpicked for their exceptional quality, design, and horological significance.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {mockProducts.slice(0, 4).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const CollectionsSection: React.FC = () => (
    <div id="collections" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-brand-accent">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollectionCard title="Luxury" description="The apex of watchmaking artistry." bgImage="https://cdn.swisswatchexpo.com/productphotos/11/9/rolex-cosmograph-daytona-rose-gold-everose-mens-watch-116515-box-30149_94bf2.jpg" />
            <CollectionCard title="Smartwatch" description="Innovation meets classic design." bgImage="https://mobilezon.in/wp-content/uploads/2023/07/apple-watch-ultra-49mm-smart-watch-first-copy-black.jpg" />
            <CollectionCard title="Budget" description="Accessible elegance, uncompromised quality." bgImage="https://hespokestyle.com/wp-content/uploads/2022/01/Untitled-design-31.jpg" />
        </div>
    </div>
);

const CollectionCard: React.FC<{ title: string; description: string; bgImage: string }> = ({ title, description, bgImage }) => (
    <Link to={`/products?category=${title}`} className="group relative block h-96 rounded-lg overflow-hidden">
        <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-8 text-brand-light">
            <h3 className="text-3xl font-serif font-bold text-brand-accent">{title}</h3>
            <p className="mt-2 text-brand-light/90">{description}</p>
        </div>
    </Link>
);


const BrandStorySection: React.FC = () => (
    <div id="brand-story" className="bg-brand-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-serif font-bold text-brand-accent mb-4">A Legacy of Precision</h2>
                <p className="text-brand-light/90 mb-4">
                    Founded on the principles of precision, passion, and perfection, Tickora has been the trusted purveyor of fine timepieces for over three decades. We believe a watch is more than an instrument; it's a piece of history, an heirloom, and a personal statement.
                </p>
                <p className="text-brand-light/90">
                    Our experts travel the world to source watches that meet our exacting standards, ensuring that every piece in our collection represents the pinnacle of its class.
                </p>
            </div>
            <div className="rounded-lg overflow-hidden">
                <img src="https://cdn.luxe.digital/media/2021/07/02102352/best-men-watches-IWC-portugieser-review-luxe-digital@2x.jpg" alt="Watch on a wrist" className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
);


const TestimonialsSection: React.FC = () => (
  <div id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-serif font-bold text-center mb-12 text-brand-accent">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="bg-brand-slate p-8 rounded-lg border border-brand-accent/10 text-center">
          <p className="text-brand-light/90 italic">"{testimonial.quote}"</p>
          <p className="mt-6 font-bold text-brand-accent">{testimonial.author}</p>
          <p className="text-sm text-brand-light/50">{testimonial.location}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;