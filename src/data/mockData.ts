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
  // Titan Watches
  {
    id: 9,
    name: "Titan Edge Ultra Slim",
    brand: "Titan",
    price: 18950,
    description: "The world's slimmest watch with a thickness of just 3.5mm. The Titan Edge features a premium sapphire crystal, Japanese quartz movement, and a sophisticated design that redefines elegance. Perfect for those who appreciate minimalist luxury.",
    images: [
      "https://m.media-amazon.com/images/I/71VqJ8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Leather',
    dialSize: 40,
    rating: 4.7,
    reviews: [
      { id: 1, author: "Rajesh K.", rating: 5, comment: "Incredibly thin and elegant. Gets compliments everywhere I go.", date: "2023-11-10" },
      { id: 2, author: "Priya M.", rating: 4, comment: "Beautiful watch, very comfortable to wear. The leather strap is premium quality.", date: "2023-10-25" }
    ]
  },
  {
    id: 10,
    name: "Titan Neo Classic",
    brand: "Titan",
    price: 12450,
    description: "A timeless classic that combines contemporary design with traditional watchmaking. Features a reliable quartz movement, water resistance up to 5 ATM, and a polished stainless steel case. Ideal for everyday wear.",
    images: [
      "https://m.media-amazon.com/images/I/71K8Q8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 42,
    rating: 4.6,
    reviews: [
      { id: 1, author: "Amit S.", rating: 5, comment: "Great value for money. Looks premium and works perfectly.", date: "2023-11-05" }
    ]
  },
  {
    id: 11,
    name: "Titan Raga Elegance",
    brand: "Titan",
    price: 15990,
    description: "Designed exclusively for women, the Raga Elegance features a uniquely shaped case with a mother-of-pearl dial and diamond hour markers. The watch exudes sophistication and grace, perfect for special occasions.",
    images: [
      "https://m.media-amazon.com/images/I/61VqJ8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 32,
    rating: 4.8,
    reviews: [
      { id: 1, author: "Sneha P.", rating: 5, comment: "Absolutely stunning! The mother-of-pearl dial is mesmerizing.", date: "2023-10-20" }
    ]
  },
  {
    id: 12,
    name: "Titan Workwear Professional",
    brand: "Titan",
    price: 16950,
    description: "Built for professionals who demand reliability and style. Features a multifunction dial with day-date display, luminous hands, and a robust stainless steel construction. Water-resistant and built to last.",
    images: [
      "https://m.media-amazon.com/images/I/71K8Q8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 42,
    rating: 4.5,
    reviews: [
      { id: 1, author: "Vikram R.", rating: 4, comment: "Perfect for office wear. Professional look with great functionality.", date: "2023-09-15" }
    ]
  },
  {
    id: 13,
    name: "Titan Karishma",
    brand: "Titan",
    price: 14450,
    description: "A statement piece for the modern woman. Features a unique case design with a sunray dial, Roman numeral markers, and a comfortable leather strap. Combines elegance with everyday practicality.",
    images: [
      "https://m.media-amazon.com/images/I/61VqJ8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Leather',
    dialSize: 34,
    rating: 4.6,
    reviews: [
      { id: 1, author: "Anjali D.", rating: 5, comment: "Love the design! It's elegant and goes with everything.", date: "2023-11-01" }
    ]
  },
  // Fastrack Watches
  {
    id: 14,
    name: "Fastrack Reflex 3.0",
    brand: "Fastrack",
    price: 2499,
    description: "A feature-packed smartwatch with UltraVU display, 24/7 heart rate monitoring, sleep tracking, and 100+ sports modes. With 1.96\" AMOLED display and 7-day battery life, it's your perfect fitness companion.",
    images: [
      "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Smartwatch',
    strapType: 'Rubber',
    dialSize: 46,
    rating: 4.5,
    reviews: [
      { id: 1, author: "Rahul M.", rating: 5, comment: "Amazing smartwatch for the price! Great display and battery life.", date: "2023-11-08" },
      { id: 2, author: "Karan S.", rating: 4, comment: "Good value for money. Fitness tracking is accurate.", date: "2023-10-30" }
    ]
  },
  {
    id: 15,
    name: "Fastrack All Nighters",
    brand: "Fastrack",
    price: 1899,
    description: "Bold and edgy design for the night owls. Features a black dial with luminous hands, multifunction display, and a premium leather strap. Perfect for those who live life on their own terms.",
    images: [
      "https://m.media-amazon.com/images/I/71K8Q8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Leather',
    dialSize: 45,
    rating: 4.4,
    reviews: [
      { id: 1, author: "Arjun P.", rating: 4, comment: "Cool design, great for casual wear. The luminous hands are a nice touch.", date: "2023-10-18" }
    ]
  },
  {
    id: 16,
    name: "Fastrack OTS Style",
    brand: "Fastrack",
    price: 1599,
    description: "One-of-a-kind style with interchangeable straps and unique dial designs. The OTS collection lets you express your individuality with vibrant colors and bold patterns. Lightweight and comfortable for all-day wear.",
    images: [
      "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Rubber',
    dialSize: 44,
    rating: 4.3,
    reviews: [
      { id: 1, author: "Neha K.", rating: 5, comment: "Love the interchangeable straps! So many style options.", date: "2023-11-02" }
    ]
  },
  {
    id: 17,
    name: "Fastrack Stunners",
    brand: "Fastrack",
    price: 1299,
    description: "Sleek and modern design that stands out. Features a minimalist dial with bold hour markers, date display, and a comfortable metal strap. Perfect for the style-conscious youth.",
    images: [
      "https://m.media-amazon.com/images/I/71K8Q8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 42,
    rating: 4.4,
    reviews: [
      { id: 1, author: "Siddharth T.", rating: 4, comment: "Great watch for the price. Looks much more expensive than it is.", date: "2023-09-28" }
    ]
  },
  // Casio Watches
  {
    id: 18,
    name: "Casio G-Shock GA-2100",
    brand: "Casio",
    price: 8990,
    description: "The 'CasiOak' combines G-Shock's legendary toughness with a sleek octagonal design. Features shock resistance, 200M water resistance, world time, and stopwatch. The perfect blend of style and durability.",
    images: [
      "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Rubber',
    dialSize: 45,
    rating: 4.8,
    reviews: [
      { id: 1, author: "Aditya N.", rating: 5, comment: "Toughest watch I've ever owned. Survived everything I've thrown at it!", date: "2023-11-12" },
      { id: 2, author: "Rohit K.", rating: 5, comment: "Love the octagonal design. It's become my daily driver.", date: "2023-10-15" }
    ]
  },
  {
    id: 19,
    name: "Casio G-Shock DW-5600",
    brand: "Casio",
    price: 5990,
    description: "The iconic square G-Shock that started it all. Features shock resistance, 200M water resistance, multi-function alarm, and EL backlight. A timeless classic that never goes out of style.",
    images: [
      "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Rubber',
    dialSize: 43,
    rating: 4.9,
    reviews: [
      { id: 1, author: "Vishal R.", rating: 5, comment: "Classic G-Shock! Built like a tank and looks great.", date: "2023-11-05" },
      { id: 2, author: "Manish D.", rating: 5, comment: "The original and still the best. Can't go wrong with this one.", date: "2023-09-20" }
    ]
  },
  {
    id: 20,
    name: "Casio G-Shock GA-700",
    brand: "Casio",
    price: 7490,
    description: "Rugged analog-digital combination with large buttons for easy operation. Features shock resistance, 200M water resistance, world time, and 1/100-second stopwatch. Built for extreme conditions.",
    images: [
      "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Rubber',
    dialSize: 47,
    rating: 4.7,
    reviews: [
      { id: 1, author: "Kiran M.", rating: 5, comment: "Perfect for outdoor activities. Very durable and functional.", date: "2023-10-22" }
    ]
  },
  {
    id: 21,
    name: "Casio Edifice EFR-108",
    brand: "Casio",
    price: 8990,
    description: "Sophisticated chronograph with a sporty yet elegant design. Features 1/100-second stopwatch, date display, and luminous hands. The stainless steel case and bracelet offer premium durability and style.",
    images: [
      "https://m.media-amazon.com/images/I/71K8Q8KqH-L._AC_SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 44,
    rating: 4.6,
    reviews: [
      { id: 1, author: "Prateek S.", rating: 4, comment: "Great chronograph watch. Looks professional and works perfectly.", date: "2023-11-01" }
    ]
  },
  {
    id: 22,
    name: "Casio Vintage A159W",
    brand: "Casio",
    price: 2490,
    description: "Retro digital watch with a classic 80s aesthetic. Features dual time, daily alarm, hourly time signal, and LED backlight. A nostalgic timepiece that brings back the golden era of digital watches.",
    images: [
      "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
    ],
    category: 'Budget',
    strapType: 'Metal',
    dialSize: 33,
    rating: 4.5,
    reviews: [
      { id: 1, author: "Nikhil B.", rating: 5, comment: "Love the retro vibe! Takes me back to the 80s.", date: "2023-10-10" }
    ]
  },
  // Rolex Watches
  {
    id: 23,
    name: "Rolex Submariner Date",
    brand: "Rolex",
    price: 1250000,
    description: "The iconic diver's watch, a legend in its own right. Features a unidirectional rotatable bezel, luminescent Chromalight display, and water resistance up to 300 meters. Powered by the Caliber 3235 movement with 70-hour power reserve.",
    images: [
      "https://www.rolex.com/content/dam/rolexcom/e-brochure/2021/watches/submariner/m126610ln-0001/model-page-submariner-m126610ln-0001-2101jva_001.jpg"
    ],
    category: 'Luxury',
    strapType: 'Metal',
    dialSize: 41,
    rating: 5,
    reviews: [
      { id: 1, author: "Rohan M.", rating: 5, comment: "The ultimate dive watch. Precision, durability, and timeless design.", date: "2023-11-15" },
      { id: 2, author: "Akshay P.", rating: 5, comment: "Worth every penny. A true investment piece that will last generations.", date: "2023-10-05" }
    ]
  },
  {
    id: 24,
    name: "Rolex Datejust 41",
    brand: "Rolex",
    price: 980000,
    description: "The classic Datejust in a contemporary 41mm case. Features the signature Cyclops lens over the date, Oystersteel construction, and the Perpetual movement. A symbol of timeless elegance and precision.",
    images: [
      "https://www.rolex.com/content/dam/rolexcom/e-brochure/2021/watches/datejust/m126300-0001/model-page-datejust-m126300-0001-2101jva_001.jpg"
    ],
    category: 'Luxury',
    strapType: 'Metal',
    dialSize: 41,
    rating: 4.9,
    reviews: [
      { id: 1, author: "Varun S.", rating: 5, comment: "Elegant and sophisticated. The perfect watch for any occasion.", date: "2023-11-10" }
    ]
  },
  {
    id: 25,
    name: "Rolex Explorer II",
    brand: "Rolex",
    price: 1120000,
    description: "Designed for explorers and adventurers. Features a distinctive 24-hour hand, fixed bezel with 24-hour graduations, and luminescent Chromalight display. Built to withstand extreme conditions with 100-meter water resistance.",
    images: [
      "https://www.rolex.com/content/dam/rolexcom/e-brochure/2021/watches/explorer-ii/m226570-0001/model-page-explorer-ii-m226570-0001-2101jva_001.jpg"
    ],
    category: 'Luxury',
    strapType: 'Metal',
    dialSize: 42,
    rating: 4.9,
    reviews: [
      { id: 1, author: "Anirudh K.", rating: 5, comment: "Perfect for my adventures. Reliable, accurate, and built to last.", date: "2023-10-28" }
    ]
  },
  {
    id: 26,
    name: "Rolex GMT-Master II",
    brand: "Rolex",
    price: 1180000,
    description: "The ultimate travel companion. Features a bidirectional rotatable 24-hour bezel, independent 24-hour hand, and dual time zone display. Powered by the Caliber 3285 movement, perfect for frequent travelers.",
    images: [
      "https://www.rolex.com/content/dam/rolexcom/e-brochure/2021/watches/gmt-master-ii/m126710blnr-0001/model-page-gmt-master-ii-m126710blnr-0001-2101jva_001.jpg"
    ],
    category: 'Luxury',
    strapType: 'Metal',
    dialSize: 40,
    rating: 5,
    reviews: [
      { id: 1, author: "Karan J.", rating: 5, comment: "Essential for my international travels. The dual time zone is incredibly useful.", date: "2023-11-08" }
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