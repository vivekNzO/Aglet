import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { ENV } from "../config/env.js";


const products = [
  {
    name: "AirStride Pro Running Shoes",
    description:
      "Neutral daily trainer with responsive cushioning, breathable mesh upper, and durable rubber outsole for road miles.",
    price: 10799,
    stock: 60,
    category: "Running Shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.6,
    totalReviews: 342,
  },
  {
    name: "UrbanFlex Classic Sneakers",
    description:
      "Everyday low-top sneakers with cushioned insole and clean silhouette—easy to pair with casual outfits.",
    price: 7499,
    stock: 75,
    category: "Casual Sneakers",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.4,
    totalReviews: 210,
  },
  {
    name: "TrailBlazer Waterproof Hiking Shoes",
    description:
      "Rugged hiking shoes with waterproof membrane, grippy outsole, and reinforced toe—built for mixed terrain.",
    price: 12499,
    stock: 40,
    category: "Hiking Shoes",
    images: [
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c45eb28?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.7,
    totalReviews: 189,
  },
  {
    name: "CourtMaster High-Top Basketball Shoes",
    description:
      "High-top basketball shoes with ankle support, impact protection, and multi-directional traction for quick cuts.",
    price: 11699,
    stock: 35,
    category: "Basketball Shoes",
    images: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.5,
    totalReviews: 276,
  },
  {
    name: "Elegance Leather Oxford Shoes",
    description:
      "Premium leather oxfords with classic lace-up construction and cushioned footbed—ideal for office and events.",
    price: 9999,
    stock: 50,
    category: "Formal Shoes",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.3,
    totalReviews: 98,
  },
  {
    name: "StreetEdge High-Top Sneakers",
    description:
      "Padded high-tops with durable sole and supportive collar—street style with all-day comfort.",
    price: 8299,
    stock: 45,
    category: "High-Top Sneakers",
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.4,
    totalReviews: 154,
  },
  {
    name: "SprintLite Training Shoes",
    description:
      "Lightweight cross-trainers for gym, HIIT, and strength sessions—flexible forefoot and stable heel.",
    price: 9099,
    stock: 55,
    category: "Training Shoes",
    images: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401b7?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.5,
    totalReviews: 198,
  },
  {
    name: "ComfortWalk Slip-On Shoes",
    description:
      "Easy slip-ons with breathable knit upper and cushioned insole—great for daily errands and travel.",
    price: 6599,
    stock: 65,
    category: "Slip-On Shoes",
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.2,
    totalReviews: 121,
  },
  {
    name: "Velocity Pro Football Cleats",
    description:
      "Lightweight football cleats with aggressive studs and locked-in fit for speed and traction on the pitch.",
    price: 13299,
    stock: 30,
    category: "Sports Cleats",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.6,
    totalReviews: 164,
  },
  {
    name: "WinterGuard Insulated Snow Boots",
    description:
      "Insulated winter boots with waterproof shell and anti-slip tread—keeps feet warm and dry in cold weather.",
    price: 14099,
    stock: 28,
    category: "Boots",
    images: [
      "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.7,
    totalReviews: 143,
  },
  {
    name: "SwiftRun Daily Trainers",
    description:
      "Comfort-first road runners for daily jogs and long walks—light cushioning and breathable upper.",
    price: 8299,
    stock: 70,
    category: "Running Shoes",
    images: [
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.3,
    totalReviews: 184,
  },
  {
    name: "MetroWalk Canvas Sneakers",
    description:
      "Classic canvas sneakers with vulcanized rubber sole—lightweight and easy for everyday wear.",
    price: 5799,
    stock: 90,
    category: "Casual Sneakers",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.2,
    totalReviews: 142,
  },
  {
    name: "IronPeak Trekking Shoes",
    description:
      "Trekking shoes with shock-absorbing midsole and deep lugs for grip—ideal for rocky trails.",
    price: 13299,
    stock: 34,
    category: "Hiking Shoes",
    images: [
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1528701800489-20be3c45eb28?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.6,
    totalReviews: 211,
  },
  {
    name: "CourtDrive Indoor Badminton Shoes",
    description:
      "Non-marking indoor shoes with lateral stability and grippy outsole—built for fast footwork.",
    price: 9999,
    stock: 42,
    category: "Sports Shoes",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.5,
    totalReviews: 168,
  },
  {
    name: "Prime Leather Derby Shoes",
    description:
      "Smooth leather derby shoes with a timeless profile—great for business casual and formal occasions.",
    price: 11699,
    stock: 38,
    category: "Formal Shoes",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.4,
    totalReviews: 87,
  },
  {
    name: "CloudStep Memory Foam Slippers",
    description:
      "Soft slip-on slippers with memory foam cushioning—comfortable for home and quick errands.",
    price: 4199,
    stock: 110,
    category: "Slip-On Shoes",
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.1,
    totalReviews: 203,
  },
  {
    name: "AeroSprint Track Spikes",
    description:
      "Sprint spikes tuned for speed—rigid plate and aggressive traction for synthetic tracks.",
    price: 14999,
    stock: 22,
    category: "Sports Cleats",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.7,
    totalReviews: 96,
  },
  {
    name: "UrbanRise Chunky Sneakers",
    description:
      "Chunky sneakers with padded lining and bold sole—comfortable street style for daily wear.",
    price: 9099,
    stock: 58,
    category: "Casual Sneakers",
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401b7?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.3,
    totalReviews: 176,
  },
  {
    name: "EnduroMax Marathon Shoes",
    description:
      "Long-run shoes with energy-return cushioning and seamless upper—built for distance comfort.",
    price: 14099,
    stock: 31,
    category: "Running Shoes",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.8,
    totalReviews: 419,
  },
  {
    name: "SteelToe Safety Work Boots",
    description:
      "Industrial safety boots with steel toe and slip-resistant outsole—made for demanding job sites.",
    price: 15699,
    stock: 26,
    category: "Boots",
    images: [
      "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.6,
    totalReviews: 132,
  },
  {
    name: "FlexMove Cross Training Shoes",
    description:
      "Versatile trainers for gym sessions and agility drills—stable base with flexible forefoot.",
    price: 9549,
    stock: 47,
    category: "Training Shoes",
    images: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401b7?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.4,
    totalReviews: 159,
  },
  {
    name: "RetroCourt Tennis Shoes",
    description:
      "Court shoes with lateral support and durable outsole—made for quick movement on hard courts.",
    price: 10399,
    stock: 36,
    category: "Sports Shoes",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.5,
    totalReviews: 144,
  },
  {
    name: "NightRunner Reflective Shoes",
    description:
      "Road runners with reflective accents for visibility—balanced cushioning for evening runs.",
    price: 11299,
    stock: 44,
    category: "Running Shoes",
    images: [
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.5,
    totalReviews: 231,
  },
  {
    name: "SummitGrip Alpine Boots",
    description:
      "High-ankle boots with thermal lining and rugged grip—designed for cold and wet conditions.",
    price: 16599,
    stock: 21,
    category: "Boots",
    images: [
      "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.7,
    totalReviews: 118,
  },
  {
    name: "EasyWear Leather Loafers",
    description:
      "Minimal leather loafers with cushioned sole—smart comfort for semi-formal and casual days.",
    price: 7499,
    stock: 64,
    category: "Formal Shoes",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.2,
    totalReviews: 97,
  },
  {
    name: "SprintEdge Football Studs",
    description:
      "Football studs engineered for stability and quick acceleration—secure fit and durable upper.",
    price: 12499,
    stock: 29,
    category: "Sports Cleats",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.6,
    totalReviews: 173,
  },
  {
    name: "DailyEase Walking Shoes",
    description:
      "Walking shoes with supportive arch feel and cushioned heel—comfortable for long daily steps.",
    price: 7899,
    stock: 82,
    category: "Walking Shoes",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.3,
    totalReviews: 215,
  },
  {
    name: "Velocity Indoor Futsal Shoes",
    description:
      "Low-profile futsal shoes with non-slip indoor sole and close-to-ground control for quick play.",
    price: 9099,
    stock: 41,
    category: "Sports Shoes",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.4,
    totalReviews: 128,
  },
  {
    name: "StreetCore Skate Shoes",
    description:
      "Skate-ready shoes with reinforced toe and shock-absorbing midsole—built for durability and board feel.",
    price: 8299,
    stock: 53,
    category: "Casual Sneakers",
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.5,
    totalReviews: 187,
  },
  {
    name: "AllDay Comfort Work Shoes",
    description:
      "Slip-resistant work shoes designed for long shifts—supportive cushioning and stable fit.",
    price: 9999,
    stock: 48,
    category: "Work Shoes",
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&auto=format&fit=crop&q=60",
    ],
    averageRating: 4.6,
    totalReviews: 264,
  },
];


const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products");

    // Insert seed products
    await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${products.length} products`);

    // Display summary
    const categories = [...new Set(products.map((p) => p.category))];
    console.log("\n📊 Seeded Products Summary:");
    console.log(`Total Products: ${products.length}`);
    console.log(`Categories: ${categories.join(", ")}`);

    // Close connection
    await mongoose.connection.close();
    console.log("\n✅ Database seeding completed and connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();