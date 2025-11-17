import type { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Aethelred Chrono",
    brand: "Valois",
    price: 360000,
    description: "A masterpiece of horological engineering, the Aethelred Chrono features a self-winding movement with a 72-hour power reserve, encased in polished stainless steel and sapphire crystal. Its midnight blue dial is a testament to timeless elegance.",
    images: [
        "https://media.tudorwatch.com/image/upload/q_auto/f_auto/c_limit,w_3840/v1/tudorwatch/watches/model-page/m79360n-0024/gallery/03-watch-worn-square"
    ],
    category: 'Luxury',
    strapType: 'Metal',
    dialSize: 42,
    rating: 4.8,
    reviews: [
      { id: 1, author: "Arthur P.", rating: 5, comment: "Exquisite craftsmanship. Feels weighty and premium.", date: "2023-10-15" },
      { id: 2, author: "Isabelle V.", rating: 4, comment: "Beautiful watch, though the strap took a while to break in.", date: "2023-09-22" }
    ]
  },
  {
    id: 2,
    name: "Odyssey Gold",
    brand: "Aurelian",
    price: 624000,
    description: "Forged from 18k solid gold, the Odyssey Gold is the pinnacle of luxury. Its intricate skeleton dial reveals the complex mechanism within, a true statement piece for the discerning collector.",
    images: [
        "https://images.squarespace-cdn.com/content/v1/5c78138211f784469d4817df/15f963be-d156-4260-a5f8-a4b9cb05d93c/IMG_7011.JPG"
       
    ],
    category: 'Luxury',
    strapType: 'Rubber',
    dialSize: 44,
    rating: 4.9,
    reviews: [
      { id: 1, author: "Baron H.", rating: 5, comment: "Absolutely breathtaking. The centerpiece of my collection.", date: "2023-11-01" }
    ]
  },
  {
    id: 3,
    name: "Tech-Liner V2",
    brand: "Cygnus",
    price: 71920,
    description: "The future on your wrist. The Tech-Liner V2 boasts a vibrant AMOLED display, comprehensive health tracking, and a week-long battery life. Seamlessly integrates with all your devices.",
    images: [
      "https://m.media-amazon.com/images/I/71mTOO-TKUL._AC_SL1500_.jpg"
    ],
    category: 'Smartwatch',
    strapType: 'Rubber',
    dialSize: 45,
    rating: 4.6,
    reviews: [
      { id: 1, author: "Jenna R.", rating: 5, comment: "Does everything I need and more. The screen is gorgeous!", date: "2023-10-28" },
      { id: 2, author: "Mike L.", rating: 4, comment: "Great smartwatch, but I wish there were more custom watch faces.", date: "2023-10-20" }
    ]
  },
  {
    id: 4,
    name: "Urban Dweller",
    brand: "Fjord",
    price: 36000,
    description: "Minimalist Scandinavian design meets everyday functionality. The Urban Dweller is a versatile timepiece that complements any outfit, with a reliable quartz movement and a comfortable fabric strap.",
    images: [
      "https://static.digit.in/default/360b4060f42ce548336489904a6da2c695a09cf8.jpeg"
    ],
    category: 'Budget',
    strapType: 'Leather',
    dialSize: 40,
    rating: 4.5,
    reviews: [
      { id: 1, author: "Chloe S.", rating: 5, comment: "My new favorite watch. It's so clean and simple.", date: "2023-09-05" }
    ]
  },
  {
    id: 5,
    name: "Navigator's Compass",
    brand: "Valois",
    price: 416000,
    description: "Built for adventure, the Navigator's Compass features a GMT complication and a rotating 24-hour bezel. Its robust construction is water-resistant up to 200 meters, ready for any journey.",
    images: [
        "https://cdna.lystit.com/520/650/n/photos/bloomingdales/496e7fdb/tissot-WhiteBrown-Heritage-Navigator-Watch-43Mm.jpeg"
    ],
    category: 'Luxury',
    strapType: 'Leather',
    dialSize: 43,
    rating: 4.7,
    reviews: [
       { id: 1, author: "Tom H.", rating: 5, comment: "Incredibly solid and functional. The GMT hand is a game changer for my travels.", date: "2023-08-12" }
    ]
  },
  {
    id: 6,
    name: "Apex Runner",
    brand: "Cygnus",
    price: 52000,
    description: "The ultimate fitness companion. With advanced GPS, heart rate monitoring, and performance analytics, the Apex Runner is engineered to help you beat your personal best.",
    images: [
       "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Smartwatch',
    strapType: 'Metal',
    dialSize: 46,
    rating: 4.7,
    reviews: [
      { id: 1, author: "Maria F.", rating: 5, comment: "The GPS is super accurate. Love the detailed workout summaries.", date: "2023-11-05" }
    ]
  },
  {
    id: 7,
    name: "Classic Century",
    brand: "Fjord",
    price: 25600,
    description: "A tribute to classic watchmaking at an accessible price. The Classic Century offers a clean, legible dial with a date window, perfect for daily wear.",
    images: [
      "https://i.pinimg.com/736x/5e/b9/67/5eb967164140d116b94785aaf2d209c4.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 39,
    rating: 4.4,
    reviews: [
       { id: 1, author: "David K.", rating: 5, comment: "Amazing value for money. Looks much more expensive than it is.", date: "2023-07-19" }
    ]
  },
  {
    id: 8,
    name: "Starlight Gala",
    brand: "Aurelian",
    price: 760000,
    description: "A dazzling display of diamond-set bezel and mother-of-pearl dial. The Starlight Gala is an evening watch that captures the magic of the night sky.",
    images: [
      "http://guesswatches.com/cdn/shop/products/GW0308L5_F.png?v=1692037583"
    ],
    category: 'Luxury',
    strapType: 'Metal',
    dialSize: 38,
    rating: 5,
    reviews: [
        { id: 1, author: "Eleanor W.", rating: 5, comment: "The most beautiful watch I have ever owned. It sparkles from every angle.", date: "2023-10-01" }
    ]
  },
];

export const testimonials = [
    {
        id: 1,
        quote: "The quality and service at ChronoLux are unparalleled. My Valois watch is a work of art that I'll cherish forever.",
        author: "Alexander Sterling",
        location: "New York, USA"
    },
    {
        id: 2,
        quote: "From browsing the stunning collection to the seamless checkout process, my experience was five-star. The watch exceeded all my expectations.",
        author: "Beatrice Dubois",
        location: "Paris, France"
    },
    {
        id: 3,
        quote: "I was looking for a statement piece, and I found it. The team was incredibly knowledgeable and helped me choose the perfect Aurelian.",
        author: "Kenji Tanaka",
        location: "Tokyo, Japan"
    }
];