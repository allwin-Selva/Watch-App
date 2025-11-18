import React from 'react';
import { Link } from 'react-router-dom';

const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        to="/"
        className="text-brand-accent hover:text-brand-accent/80 mb-6 inline-block text-sm font-medium"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-8 text-brand-accent">Shipping & Returns</h1>

        {/* Shipping Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-light mb-6">Shipping Information</h2>
          
          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-brand-light mb-4">Shipping Options</h3>
            <div className="space-y-4 text-brand-light/80">
              <div>
                <h4 className="font-semibold text-brand-light mb-2">Standard Shipping</h4>
                <p>5-7 business days | Free on orders over ₹50,000</p>
                <p className="text-sm text-brand-light/70 mt-1">Standard shipping is available for all domestic orders.</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-light mb-2">Express Shipping</h4>
                <p>2-3 business days | ₹500</p>
                <p className="text-sm text-brand-light/70 mt-1">Get your order faster with our express shipping option.</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-light mb-2">International Shipping</h4>
                <p>10-14 business days | Rates vary by location</p>
                <p className="text-sm text-brand-light/70 mt-1">We ship worldwide. Additional customs fees may apply.</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-brand-light mb-4">Order Processing</h3>
            <ul className="space-y-2 text-brand-light/80">
              <li className="flex items-start">
                <span className="text-brand-accent mr-2">•</span>
                <span>Orders are processed within 1-2 business days</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2">•</span>
                <span>You'll receive a confirmation email once your order is placed</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2">•</span>
                <span>Tracking information will be sent via email when your order ships</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2">•</span>
                <span>All watches are carefully packaged in protective materials</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Returns Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-light mb-6">Returns & Exchanges</h2>
          
          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-brand-light mb-4">Return Policy</h3>
            <p className="text-brand-light/80 mb-4">
              We want you to be completely satisfied with your purchase. If you're not happy with your watch, 
              you can return it within 30 days of delivery for a full refund or exchange.
            </p>
            <div className="space-y-3 text-brand-light/80">
              <div>
                <h4 className="font-semibold text-brand-light mb-2">Eligibility Requirements</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <span>Item must be unworn and in original condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <span>Original packaging, tags, and documentation must be included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <span>Return must be initiated within 30 days of delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <span>Custom or personalized items are not eligible for return</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-brand-light mb-4">How to Return</h3>
            <ol className="space-y-3 text-brand-light/80 list-decimal list-inside">
              <li>Contact our customer service team to initiate a return request</li>
              <li>You'll receive a return authorization and shipping label</li>
              <li>Package the item securely in its original packaging</li>
              <li>Ship the item back using the provided label</li>
              <li>Once received and inspected, we'll process your refund within 5-7 business days</li>
            </ol>
          </div>

          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-brand-light mb-4">Refund Information</h3>
            <div className="space-y-2 text-brand-light/80">
              <p>• Refunds will be issued to the original payment method</p>
              <p>• Shipping costs are non-refundable unless the item is defective or incorrect</p>
              <p>• Refund processing typically takes 5-7 business days after we receive the returned item</p>
              <p>• You'll receive an email confirmation once your refund has been processed</p>
            </div>
          </div>
        </section>

        {/* Exchanges Section */}
        <section>
          <h2 className="text-2xl font-bold text-brand-light mb-6">Exchanges</h2>
          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
            <p className="text-brand-light/80 mb-4">
              We're happy to help you exchange your watch for a different size, style, or model. 
              Exchanges follow the same process as returns.
            </p>
            <p className="text-brand-light/80">
              Please note that exchanges are subject to availability. If the item you want is out of stock, 
              we'll process a refund and you can place a new order when the item becomes available.
            </p>
          </div>
        </section>

        <div className="mt-12 bg-brand-slate border border-brand-accent/10 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-brand-light mb-2">Need Help?</h2>
          <p className="text-brand-light/70 mb-4">Our customer service team is ready to assist you.</p>
          <a
            href="#"
            className="inline-block bg-brand-accent text-black font-bold py-2 px-6 rounded-md hover:opacity-90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;

