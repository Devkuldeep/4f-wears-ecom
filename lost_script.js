"        // Global variables for checkout state
        let activeProduct = null;
        let discountPercent = 0;
        let discountCouponCode = "";
        let selectedColor = "";
        let selectedSize = ""; // default selection
        let selectedImageUrl = "";

        const DEFAULT_PRODUCT_SET = [
            { id: 1, title: "Graffiti Boyfriend Oversized Hoodie", category: "Hoodie", price: 24.00, originalPrice: 48.00, rating: 5.0, badge: "50% off", image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop", fit: "Oversized", promotions: ["Best Seller"], inStock: true },
            { id: 2, title: "Sweatshirt Pink Soda Signature", category: "Sweatshirt", price: 35.00, originalPrice: 70.00, rating: 4.9, badge: "50% off", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop", fit: "Regular", promotions: ["New Arrival"], inStock: true },
            { id: 3, title: "Adidas Sport Hoodie Contempo", category: "Hoodie", price: 48.00, originalPrice: 60.00, rating: 4.8, badge: "20% off", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop", fit: "Athletic", promotions: ["Best Seller"], inStock: true },
            { id: 4, title: "Adidas Contempo Coral Tee", category: "T-Shirt", price: 24.00, originalPrice: 48.00, rating: 5.0, badge: "50% off", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop", fit: "Relaxed", promotions: ["On Sale"], inStock: true },
            { id: 5, title: "Urban Cargo Tapered Joggers", category: "Pants", price: 45.00, originalPrice: 90.00, rating: 4.7, badge: "50% off", image: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=800&auto=format&fit=crop", fit: "Relaxed", promotions: ["Best Seller"], inStock: true },
            { id: 6, title: "Raw Denim High-Style Jacket", category: "Jackets", price: 65.00,
<truncated 44105 bytes>