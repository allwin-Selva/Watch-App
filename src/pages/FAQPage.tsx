import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I place an order?",
      answer: "Browse our collection, add items to your cart, and proceed to checkout. Fill in your shipping information and complete the payment to place your order. You'll receive a confirmation email with your order details and tracking information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. All transactions are processed securely through our encrypted payment gateway."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery. You'll receive tracking information once your order ships."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. International shipping times vary by location, typically 10-14 business days. Additional customs fees may apply depending on your country's regulations."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn watches in their original packaging with all tags attached. Items must be in new condition. Please contact our customer service team to initiate a return."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also visit the Orders page in your account or use the Order Tracking link in the footer to view your order status and tracking information."
    },
    {
      question: "Are your watches authentic?",
      answer: "Absolutely. Every watch in our collection is authentic, hand-selected, and authenticated by our expert team. We work directly with authorized dealers and trusted manufacturers to ensure authenticity."
    },
    {
      question: "Do you offer warranties?",
      answer: "Yes, all watches come with manufacturer warranties. Warranty periods vary by brand. We also offer extended warranty options for select timepieces. Warranty information is included with your purchase."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 24 hours of placement, provided they haven't been processed for shipping. Contact our customer service team immediately if you need to make changes."
    },
    {
      question: "What if my watch arrives damaged?",
      answer: "If your watch arrives damaged, please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund and cover all return shipping costs."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer premium gift wrapping services. You can select this option during checkout. Gift wrapping includes a luxury box and personalized message card."
    },
    {
      question: "How do I care for my watch?",
      answer: "Each watch comes with care instructions. Generally, avoid exposing watches to extreme temperatures, chemicals, or strong magnetic fields. Regular servicing is recommended every 3-5 years for mechanical watches."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        to="/"
        className="text-brand-accent hover:text-brand-accent/80 mb-6 inline-block text-sm font-medium"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-brand-accent">Frequently Asked Questions</h1>
        <p className="text-brand-light/70 mb-8">
          Find answers to common questions about our watches, ordering process, shipping, and more.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-brand-slate border border-brand-accent/10 rounded-lg overflow-hidden transition-all hover:border-brand-accent/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-inset"
              >
                <span className="font-semibold text-brand-light pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-brand-light/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-slate border border-brand-accent/10 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-brand-light mb-2">Still have questions?</h2>
          <p className="text-brand-light/70 mb-4">Our customer service team is here to help.</p>
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

export default FAQPage;

