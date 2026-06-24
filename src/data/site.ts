import catBirthday from "@/assets/cat-birthday.jpg";
import catAnniversary from "@/assets/cat-anniversary.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import featEggless from "@/assets/feat-eggless.jpg";
import featChocolate from "@/assets/feat-chocolate.jpg";
import featBlackforest from "@/assets/feat-blackforest.jpg";
import featRedvelvet from "@/assets/feat-redvelvet.jpg";
import featButterscotch from "@/assets/feat-butterscotch.jpg";

/**
 * Central site configuration.
 * Replace the placeholder contact / social values below with the real ones.
 */
export const site = {
  brand: "Cake Fete",
  tagline: "Italian Pastries Welcomes You",
  subText: "Freshly Baked Goodness You Can't Resist",
  // --- Contact placeholders — update with real details ---
  phoneDisplay: "+91 7200886659",
  whatsappNumber: "+91 7200886659", // digits only, country code first
  email: "hello@cakefete.com",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/+919566086659",
  },
  workHours: {
    days: "Monday - Sunday",
    time: "8 AM - 10 PM",
  },
} as const;

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Menu", id: "menu" },
  { label: "Gallery", id: "featured" },
  { label: "Outlets", id: "outlets" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export const categories = [
  { title: "Birthday Cakes", image: catBirthday },
  { title: "Anniversary Cakes", image: catAnniversary },
  { title: "Kids Designer Cakes", image: catKids },
  { title: "Wedding Cakes", image: catWedding },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years of Expertise" },
  { value: 5, suffix: "+", label: "Outlets" },
  { value: 50000, suffix: "+", label: "Happy Customers", format: true },
  { value: 1, suffix: " Lakh+", label: "Deliveries" },
];

export const featuredCakes = [
  { title: "Eggless Cake", image: featEggless },
  { title: "Chocolate Cake", image: featChocolate },
  { title: "Black Forest", image: featBlackforest },
  { title: "Red Velvet", image: featRedvelvet },
  { title: "Butterscotch", image: featButterscotch },
];

export const occasions = [
  { label: "Birthday", icon: "🎂" },
  { label: "Anniversary", icon: "💍" },
  { label: "Wedding", icon: "💒" },
  { label: "House Warming", icon: "🏡" },
  { label: "Newborn Baby", icon: "👶" },
  { label: "Congratulations", icon: "🎉" },
];

export const menuItems = [
  {
    name: "Rainbow",
    price: "₹500",
    desc: "Vanilla Cake, Fresh Cream, Assorted Fresh Fruits, Fruit Crushes",
  },
  {
    name: "Rasamalai",
    price: "₹700",
    desc: "Vanilla Cake, Rose Milk, Fresh Cream with Chopped Rose Jamuns",
  },
  {
    name: "Dead By Chocolate",
    price: "₹600",
    desc: "Vanilla & Chocolate Cake, White and Dark Choco Cream",
  },
  {
    name: "Chacho Cashew",
    price: "₹500",
    desc: "Chocolate Cake, Roasted Cashew, Choco Ganache, Cream",
  },
];

export const testimonials = [
  {
    name: "Priya Raghavan",
    location: "Anna Nagar, Chennai",
    review:
      "Thanks Chocolate Monarch for the wonderful birthday cake. The taste was fantastic and your service was amazing.",
  },
  {
    name: "Arjun Mehta",
    location: "Kolathur, Chennai",
    review:
      "The anniversary cake was a masterpiece — beautifully crafted and even better in taste. Highly recommended!",
  },
  {
    name: "Divya Shankar",
    location: "Periyar Nagar, Chennai",
    review:
      "Premium quality, fresh ingredients, and on-time delivery. Chocolate Monarch never disappoints us.",
  },
  {
    name: "Karthik Iyer",
    location: "Mathur, Chennai",
    review:
      "Ordered a custom kids designer cake and my daughter was thrilled. The detailing was simply perfect.",
  },
];

export const outlets = [
  "Anna Nagar, Chennai",
  "Anjugam Nagar, Kolathur",
  "Periyar Nagar, Kolathur",
  "Srinivasa Nagar, Kolathur",
  "Lakshmipuram, Kolathur",
  "Mathur, Chennai",
];
