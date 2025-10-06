import Navbar from "../ui/Navbar";
import ProductList from "../ui/ProductList";
import { useGetAllProductsQuery } from "../features/products/productApi";
const products = [
  {
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear headphones with 30 hours battery life.",
    price: 129.99,
    category: "ELECTRONICS",
    createdBy: 1,
  },
  {
    name: "Men's Casual Shirt",
    description: "Slim-fit cotton shirt perfect for office and casual wear.",
    price: 39.99,
    category: "FASHION",
    createdBy: 2,
  },
  {
    name: "The Pragmatic Programmer",
    description: "Classic book on software development best practices.",
    price: 49.99,
    category: "BOOKS",
    createdBy: 3,
  },
  {
    name: "Organic Apples Pack",
    description: "Fresh organic apples, 1kg pack.",
    price: 4.5,
    category: "GROCERY",
    createdBy: 4,
  },
  {
    name: "Non-stick Frying Pan",
    description: "Durable non-stick pan, 28cm diameter.",
    price: 24.99,
    category: "HOME",
    createdBy: 1,
  },
  {
    name: "Moisturizing Cream",
    description: "Hydrating face cream for dry skin, 100ml.",
    price: 14.99,
    category: "BEAUTY",
    createdBy: 2,
  },
  {
    name: "Football",
    description: "Professional size 5 football, durable material.",
    price: 19.99,
    category: "SPORTS",
    createdBy: 3,
  },
  {
    name: "Lego Classic Set",
    description: "500+ pieces creative building set for kids.",
    price: 59.99,
    category: "TOYS",
    createdBy: 4,
  },
  {
    name: "Car Vacuum Cleaner",
    description: "Portable vacuum cleaner for car interiors.",
    price: 34.99,
    category: "AUTOMOTIVE",
    createdBy: 1,
  },
  {
    name: "Diamond Pendant",
    description: "Elegant diamond pendant with silver chain.",
    price: 499.99,
    category: "JEWELRY",
    createdBy: 2,
  },
  {
    name: "Yoga Mat",
    description: "Non-slip yoga mat, 6mm thickness.",
    price: 29.99,
    category: "HEALTH",
    createdBy: 3,
  },
  {
    name: "Dog Food 5kg",
    description: "Nutrient-rich dog food suitable for adult dogs.",
    price: 45.0,
    category: "PET",
    createdBy: 4,
  },
  {
    name: "Office Chair",
    description: "Ergonomic office chair with adjustable height.",
    price: 199.99,
    category: "OFFICE",
    createdBy: 1,
  },
  {
    name: "Camping Tent",
    description: "4-person waterproof camping tent.",
    price: 149.99,
    category: "OUTDOOR",
    createdBy: 2,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 12h playtime.",
    price: 79.99,
    category: "ELECTRONICS",
    createdBy: 3,
  },
  {
    name: "Women's Handbag",
    description: "Stylish leather handbag with multiple compartments.",
    price: 89.99,
    category: "FASHION",
    createdBy: 4,
  },
  {
    name: "Data Structures & Algorithms",
    description: "In-depth guide for learning DSA in JavaScript.",
    price: 59.99,
    category: "BOOKS",
    createdBy: 1,
  },
  {
    name: "Organic Coffee Beans",
    description: "Premium roasted organic coffee beans, 500g.",
    price: 15.99,
    category: "GROCERY",
    createdBy: 2,
  },
  {
    name: "Hair Dryer",
    description: "1200W compact hair dryer with heat control.",
    price: 24.99,
    category: "BEAUTY",
    createdBy: 3,
  },
  {
    name: "Running Shoes",
    description: "Lightweight breathable running shoes for men.",
    price: 99.99,
    category: "SPORTS",
    createdBy: 4,
  },
];

const HomePage = () => {
  const { data: Product = [], isLoading, isError } = useGetAllProductsQuery();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-gray-700 text-2xl font-bold mb-6 border-b-1">
          All Products
        </h1>
        {/* {isError && (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-red-500 text-lg">Failed to load products.</p>
          </div>
        )} */}

        {isLoading ? (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600 text-lg">Loading products...</p>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
};

export default HomePage;
