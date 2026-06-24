import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUp, Award, Check, Clock, Facebook, Instagram, Mail, MapPin, Menu, Phone, Quote, Star, Store, Truck, Users, X, Youtube } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//#region src/assets/cat-birthday.jpg
var cat_birthday_default = "/CakeFete/assets/cat-birthday-dA77DYLM.jpg";
//#endregion
//#region src/assets/cat-anniversary.jpg
var cat_anniversary_default = "/CakeFete/assets/cat-anniversary-W-dAQQvR.jpg";
//#endregion
//#region src/assets/cat-kids.jpg
var cat_kids_default = "/CakeFete/assets/cat-kids-sZF6dQlC.jpg";
//#endregion
//#region src/assets/cat-wedding.jpg
var cat_wedding_default = "/CakeFete/assets/cat-wedding-B_RgkTd2.jpg";
//#endregion
//#region src/assets/feat-eggless.jpg
var feat_eggless_default = "/CakeFete/assets/feat-eggless-BY4U8uRe.jpg";
//#endregion
//#region src/assets/feat-chocolate.jpg
var feat_chocolate_default = "/CakeFete/assets/feat-chocolate-D643jVDI.jpg";
//#endregion
//#region src/assets/feat-blackforest.jpg
var feat_blackforest_default = "/CakeFete/assets/feat-blackforest-DI_1XK7x.jpg";
//#endregion
//#region src/assets/feat-redvelvet.jpg
var feat_redvelvet_default = "/CakeFete/assets/feat-redvelvet-CjAJMbgW.jpg";
//#endregion
//#region src/assets/feat-butterscotch.jpg
var feat_butterscotch_default = "/CakeFete/assets/feat-butterscotch-CjV8bG4-.jpg";
//#endregion
//#region src/data/site.ts
/**
* Central site configuration.
* Replace the placeholder contact / social values below with the real ones.
*/
var site = {
	brand: "Cake Fete",
	tagline: "Italian Pastries Welcomes You",
	subText: "Freshly Baked Goodness You Can't Resist",
	phoneDisplay: "+91 7200886659",
	whatsappNumber: "+91 7200886659",
	email: "hello@cakefete.com",
	social: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
		youtube: "https://youtube.com",
		whatsapp: "https://wa.me/+919566086659"
	},
	workHours: {
		days: "Monday - Sunday",
		time: "8 AM - 10 PM"
	}
};
var navLinks = [
	{
		label: "Home",
		id: "home"
	},
	{
		label: "About Us",
		id: "about"
	},
	{
		label: "Menu",
		id: "menu"
	},
	{
		label: "Gallery",
		id: "featured"
	},
	{
		label: "Outlets",
		id: "outlets"
	},
	{
		label: "Testimonials",
		id: "testimonials"
	},
	{
		label: "Contact",
		id: "contact"
	}
];
var categories = [
	{
		title: "Birthday Cakes",
		image: cat_birthday_default
	},
	{
		title: "Anniversary Cakes",
		image: cat_anniversary_default
	},
	{
		title: "Kids Designer Cakes",
		image: cat_kids_default
	},
	{
		title: "Wedding Cakes",
		image: cat_wedding_default
	}
];
var stats = [
	{
		value: 18,
		suffix: "+",
		label: "Years of Expertise"
	},
	{
		value: 5,
		suffix: "+",
		label: "Outlets"
	},
	{
		value: 5e4,
		suffix: "+",
		label: "Happy Customers",
		format: true
	},
	{
		value: 1,
		suffix: " Lakh+",
		label: "Deliveries"
	}
];
var featuredCakes = [
	{
		title: "Eggless Cake",
		image: feat_eggless_default
	},
	{
		title: "Chocolate Cake",
		image: feat_chocolate_default
	},
	{
		title: "Black Forest",
		image: feat_blackforest_default
	},
	{
		title: "Red Velvet",
		image: feat_redvelvet_default
	},
	{
		title: "Butterscotch",
		image: feat_butterscotch_default
	}
];
var occasions = [
	{
		label: "Birthday",
		icon: "🎂"
	},
	{
		label: "Anniversary",
		icon: "💍"
	},
	{
		label: "Wedding",
		icon: "💒"
	},
	{
		label: "House Warming",
		icon: "🏡"
	},
	{
		label: "Newborn Baby",
		icon: "👶"
	},
	{
		label: "Congratulations",
		icon: "🎉"
	}
];
var menuItems = [
	{
		name: "Rainbow",
		price: "₹500",
		desc: "Vanilla Cake, Fresh Cream, Assorted Fresh Fruits, Fruit Crushes"
	},
	{
		name: "Rasamalai",
		price: "₹700",
		desc: "Vanilla Cake, Rose Milk, Fresh Cream with Chopped Rose Jamuns"
	},
	{
		name: "Dead By Chocolate",
		price: "₹600",
		desc: "Vanilla & Chocolate Cake, White and Dark Choco Cream"
	},
	{
		name: "Chacho Cashew",
		price: "₹500",
		desc: "Chocolate Cake, Roasted Cashew, Choco Ganache, Cream"
	}
];
var testimonials = [
	{
		name: "Priya Raghavan",
		location: "Anna Nagar, Chennai",
		review: "Thanks Chocolate Monarch for the wonderful birthday cake. The taste was fantastic and your service was amazing."
	},
	{
		name: "Arjun Mehta",
		location: "Kolathur, Chennai",
		review: "The anniversary cake was a masterpiece — beautifully crafted and even better in taste. Highly recommended!"
	},
	{
		name: "Divya Shankar",
		location: "Periyar Nagar, Chennai",
		review: "Premium quality, fresh ingredients, and on-time delivery. Chocolate Monarch never disappoints us."
	},
	{
		name: "Karthik Iyer",
		location: "Mathur, Chennai",
		review: "Ordered a custom kids designer cake and my daughter was thrilled. The detailing was simply perfect."
	}
];
var outlets = [
	"Anna Nagar, Chennai",
	"Anjugam Nagar, Kolathur",
	"Periyar Nagar, Kolathur",
	"Srinivasa Nagar, Kolathur",
	"Lakshmipuram, Kolathur",
	"Mathur, Chennai"
];
//#endregion
//#region src/lib/scroll.ts
/** Smooth-scroll to a section id, accounting for the sticky navbar height. */
function scrollToSection(id) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 80;
	window.scrollTo({
		top,
		behavior: "smooth"
	});
}
//#endregion
//#region src/components/Navbar.tsx
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleNav = (id) => {
		setOpen(false);
		scrollToSection(id);
	};
	return /* @__PURE__ */ jsxs(motion.header, {
		initial: { y: -100 },
		animate: { y: 0 },
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-card/95 shadow-soft backdrop-blur-sm" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex h-[75px] max-w-[1280px] items-center justify-between px-5 md:h-[90px] md:px-8",
			children: [
				/* @__PURE__ */ jsxs("button", {
					onClick: () => handleNav("home"),
					className: "flex items-center gap-3",
					"aria-label": "Go to home",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold text-xl shadow-soft",
						children: "🍰"
					}), /* @__PURE__ */ jsxs("span", {
						className: "flex flex-col text-left leading-tight",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-heading text-lg font-700 text-chocolate md:text-xl",
							children: "Cake Fete"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-500 uppercase tracking-[0.18em] text-gold",
							children: "European Pastries"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden items-center gap-7 lg:flex",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
						onClick: () => handleNav(link.id),
						className: "group relative font-500 text-chocolate transition-colors hover:text-gold",
						children: [link.label, /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" })]
					}) }, link.id))
				}),
				/* @__PURE__ */ jsx("a", {
					href: site.social.whatsapp,
					target: "_blank",
					rel: "noreferrer",
					className: "hidden rounded-pill bg-gold px-6 py-2.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate lg:inline-block",
					children: "Order Now"
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(true),
					className: "rounded-full p-2 text-chocolate lg:hidden",
					"aria-label": "Open menu",
					children: /* @__PURE__ */ jsx(Menu, { className: "h-7 w-7" })
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setOpen(false),
			className: "fixed inset-0 z-40 bg-dark-brown/40 backdrop-blur-sm lg:hidden"
		}), /* @__PURE__ */ jsxs(motion.aside, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "tween",
				duration: .35,
				ease: "easeOut"
			},
			className: "fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-card p-6 shadow-large lg:hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-8 flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-heading text-lg font-700 text-chocolate",
						children: "Menu"
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => setOpen(false),
						className: "rounded-full p-2 text-chocolate",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" })
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "flex flex-col gap-1",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
						onClick: () => handleNav(link.id),
						className: "w-full rounded-xl px-4 py-3 text-left font-500 text-chocolate transition-colors hover:bg-beige hover:text-gold",
						children: link.label
					}) }, link.id))
				}),
				/* @__PURE__ */ jsx("a", {
					href: site.social.whatsapp,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-6 rounded-pill bg-gold px-6 py-3 text-center font-600 text-white shadow-soft transition-colors hover:bg-chocolate",
					children: "Order Now"
				})
			]
		})] }) })]
	});
}
//#endregion
//#region src/assets/hero-cake.png
var hero_cake_default = "/CakeFete/assets/hero-cake-JXi-WI3N.png";
//#endregion
//#region src/components/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative overflow-hidden bg-gradient-to-b from-beige via-cream to-cream pt-[110px] md:pt-[140px]",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.05]",
				style: {
					backgroundImage: "radial-gradient(var(--chocolate) 1.5px, transparent 1.5px)",
					backgroundSize: "28px 28px"
				}
			}),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-light-gold/20 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						ease: "easeOut"
					},
					className: "text-center lg:text-left",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block rounded-pill bg-white/70 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.2em] text-gold shadow-soft",
							children: "European Pastry Boutique"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-5 font-heading text-[42px] font-800 leading-[1.05] text-dark-brown md:text-[56px] lg:text-[72px]",
							children: [
								"Cake Fete",
								/* @__PURE__ */ jsx("span", {
									className: "mt-1 block text-gold",
									children: "Italian Pastries"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "block",
									children: "Welcomes You"
								})
							]
						}),
						/* @__PURE__ */ jsx("svg", {
							className: "mx-auto mt-3 h-4 w-56 text-gold lg:mx-0",
							viewBox: "0 0 220 16",
							fill: "none",
							children: /* @__PURE__ */ jsx("path", {
								d: "M2 8c20-8 40 8 60 0s40-8 60 0 40 8 56 0",
								stroke: "currentColor",
								strokeWidth: "4",
								strokeLinecap: "round"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-lg text-subtle md:text-xl",
							children: site.subText
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4 lg:justify-start",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => scrollToSection("featured"),
								className: "rounded-pill bg-gold px-8 py-3.5 font-600 text-white shadow-medium transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate",
								children: "View Products"
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => scrollToSection("menu"),
								className: "rounded-pill border-2 border-chocolate px-8 py-3.5 font-600 text-chocolate transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate hover:text-white",
								children: "Our Menu"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						ease: "easeOut",
						delay: .15
					},
					className: "relative mx-auto max-w-md lg:max-w-none",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-6 rounded-full bg-gradient-to-br from-light-gold/40 to-gold/20 blur-2xl" }), /* @__PURE__ */ jsx(motion.img, {
						src: hero_cake_default,
						alt: "Premium chocolate celebration cake with gold leaf and fresh berries",
						width: 1024,
						height: 1024,
						className: "relative w-full drop-shadow-2xl",
						animate: { y: [
							0,
							-16,
							0
						] },
						transition: {
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut"
						}
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/Reveal.tsx
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 32
	},
	visible: {
		opacity: 1,
		y: 0
	}
};
/** Scroll-triggered fade-up wrapper (0.6s, ease-out). */
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		variants: fadeUp,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .6,
			ease: "easeOut",
			delay
		},
		children
	});
}
var staggerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: .12 } }
};
var staggerItem = {
	hidden: {
		opacity: 0,
		y: 32
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: "easeOut"
		}
	}
};
//#endregion
//#region src/components/SectionHeading.tsx
function SectionHeading({ title, subtitle, light }) {
	return /* @__PURE__ */ jsxs(Reveal, {
		className: "mx-auto mb-12 max-w-2xl text-center md:mb-16",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: `font-heading text-3xl font-700 md:text-5xl ${light ? "text-white" : "text-chocolate"}`,
				children: title
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto mt-4 flex items-center justify-center gap-2",
				children: [
					/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }),
					/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rotate-45 bg-gold" }),
					/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" })
				]
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: `mt-4 text-base md:text-lg ${light ? "text-cream/80" : "text-subtle"}`,
				children: subtitle
			})
		]
	});
}
//#endregion
//#region src/components/Categories.tsx
function Categories() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-cream py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-5 md:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				title: "Our Special Cakes",
				subtitle: "Handcrafted for Every Celebration"
			}), /* @__PURE__ */ jsx(motion.div, {
				variants: staggerContainer,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .15
				},
				className: "grid grid-cols-2 gap-5 md:gap-7 lg:grid-cols-4",
				children: categories.map((cat) => /* @__PURE__ */ jsxs(motion.article, {
					variants: staggerItem,
					whileHover: { y: -10 },
					className: "group relative overflow-hidden rounded-card shadow-soft transition-shadow duration-300 hover:shadow-large",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-[280px] overflow-hidden md:h-[420px]",
							children: /* @__PURE__ */ jsx("img", {
								src: cat.image,
								alt: cat.title,
								loading: "lazy",
								width: 1024,
								height: 1024,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark-brown/85 via-dark-brown/10 to-transparent" }),
						/* @__PURE__ */ jsx("h3", {
							className: "absolute inset-x-0 bottom-0 p-5 font-heading text-lg font-600 text-white md:text-xl",
							children: cat.title
						})
					]
				}, cat.title))
			})]
		})
	});
}
//#endregion
//#region src/assets/about.jpg
var about_default = "/CakeFete/assets/about-DbJv6SO1.jpg";
//#endregion
//#region src/components/About.tsx
var features = [
	"Crafted with Passion",
	"Made with Premium Ingredients",
	"Perfect for Every Occasion"
];
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "bg-beige py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -left-4 -top-4 h-full w-full rounded-image border-2 border-gold/40" }), /* @__PURE__ */ jsx("img", {
					src: about_default,
					alt: "Pastry chef hand-decorating a cake",
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "relative w-full rounded-image object-cover shadow-medium"
				})]
			}) }), /* @__PURE__ */ jsxs(Reveal, {
				delay: .15,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-sm font-600 uppercase tracking-[0.2em] text-gold",
						children: "Our Story"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-heading text-3xl font-700 text-chocolate md:text-4xl",
						children: "About Cake Fete"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-subtle md:text-lg",
						children: "Step into a world of irresistible flavor and delightful indulgence. At Cake Fete, we don't just bake cakes — we craft experiences."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-7 space-y-4",
						children: features.map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold",
								children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsx("span", {
								className: "font-500 text-ink",
								children: f
							})]
						}, f))
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => scrollToSection("featured"),
						className: "mt-8 rounded-pill bg-chocolate px-8 py-3.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-gold",
						children: "About Us"
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/Counters.tsx
var icons = [
	Award,
	Store,
	Users,
	Truck
];
function formatValue(value, format) {
	if (format) return value.toLocaleString("en-IN");
	return value.toString();
}
function Counter({ value, suffix, format }) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: true,
		amount: .5
	});
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!inView) return;
		const duration = 1600;
		const start = performance.now();
		let frame;
		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.round(eased * value));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, value]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		className: "font-heading text-4xl font-800 text-gold md:text-5xl",
		children: [formatValue(count, format), suffix]
	});
}
function Counters() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-card py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-[1280px] grid-cols-2 gap-5 px-5 md:px-8 lg:grid-cols-4 lg:gap-7",
			children: stats.map((stat, i) => {
				const Icon = icons[i];
				return /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i * .1
					},
					className: "flex flex-col items-center rounded-card bg-beige p-6 text-center shadow-soft transition-shadow duration-300 hover:shadow-medium md:p-8",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold text-white shadow-soft",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ jsx(Counter, {
							value: stat.value,
							suffix: stat.suffix,
							format: stat.format
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm font-500 text-subtle md:text-base",
							children: stat.label
						})
					]
				}, stat.label);
			})
		})
	});
}
//#endregion
//#region src/assets/who-we-are.jpg
var who_we_are_default = "/CakeFete/assets/who-we-are-CwUgQ1s9.jpg";
//#endregion
//#region src/components/WhoWeAre.tsx
var checklist = [
	"High-quality ingredients, fruits & nuts",
	"Italian-style pastries with local flair",
	"Trained cake artists & decorators",
	"Affordable pricing with premium quality",
	"Reliable doorstep delivery"
];
function WhoWeAre() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-beige py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-sm font-600 uppercase tracking-[0.2em] text-gold",
					children: "Since 2010"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-heading text-3xl font-700 text-chocolate md:text-4xl",
					children: "Who We Are"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-base leading-relaxed text-subtle md:text-lg",
					children: "Since 2010, Cake Fete has been Chennai's go-to destination for cakes that blend tradition, quality, and passion."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-7 space-y-3",
					children: checklist.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white",
							children: /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-ink",
							children: item
						})]
					}, item))
				})
			] }), /* @__PURE__ */ jsx(Reveal, {
				delay: .15,
				className: "order-first lg:order-last",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -right-4 -bottom-4 h-full w-full rounded-image border-2 border-gold/40" }), /* @__PURE__ */ jsx("img", {
						src: who_we_are_default,
						alt: "Elegant display of assorted pastries in the bakery boutique",
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "relative w-full rounded-image object-cover shadow-medium"
					})]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/Featured.tsx
function Featured() {
	return /* @__PURE__ */ jsx("section", {
		id: "featured",
		className: "bg-cream py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-5 md:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				title: "Featured Cakes",
				subtitle: "A Slice of Sweet Perfection – Just for You"
			}), /* @__PURE__ */ jsx(Swiper, {
				modules: [Autoplay, Pagination],
				spaceBetween: 28,
				slidesPerView: 1.15,
				centeredSlides: false,
				loop: true,
				autoplay: {
					delay: 3e3,
					disableOnInteraction: false
				},
				pagination: { clickable: true },
				breakpoints: {
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				},
				className: "!pb-14",
				children: featuredCakes.map((cake) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("article", {
					className: "group overflow-hidden rounded-[25px] bg-card shadow-soft transition-shadow duration-300 hover:shadow-large",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-[280px] overflow-hidden md:h-[350px]",
						children: /* @__PURE__ */ jsx("img", {
							src: cake.image,
							alt: cake.title,
							loading: "lazy",
							width: 1024,
							height: 1024,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6 text-center",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-xl font-600 text-chocolate",
							children: cake.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-subtle",
							children: "Freshly baked & handcrafted"
						})]
					})]
				}) }, cake.title))
			})]
		})
	});
}
//#endregion
//#region src/components/Occasions.tsx
function Occasions() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-card py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-5 md:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "Cakes For Every Occasion" }), /* @__PURE__ */ jsx(motion.div, {
				variants: staggerContainer,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .15
				},
				className: "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6",
				children: occasions.map((occ) => /* @__PURE__ */ jsxs(motion.div, {
					variants: staggerItem,
					whileHover: { scale: 1.06 },
					className: "group flex flex-col items-center text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#D0D0D0] bg-beige text-4xl transition-all duration-300 group-hover:border-gold group-hover:shadow-medium md:h-28 md:w-28",
						children: occ.icon
					}), /* @__PURE__ */ jsx("span", {
						className: "mt-4 font-500 text-chocolate",
						children: occ.label
					})]
				}, occ.label))
			})]
		})
	});
}
//#endregion
//#region src/assets/why-choose.jpg
var why_choose_default = "/CakeFete/assets/why-choose-D_2oZz9Y.jpg";
//#endregion
//#region src/components/WhyChooseUs.tsx
function WhyChooseUs() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-cream py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -left-4 -top-4 h-full w-full rounded-image border-2 border-gold/40" }), /* @__PURE__ */ jsx("img", {
					src: why_choose_default,
					alt: "Decadent chocolate layer cake slice with ganache",
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "relative w-full rounded-image object-cover shadow-medium"
				})]
			}) }), /* @__PURE__ */ jsxs(Reveal, {
				delay: .15,
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-sm font-600 uppercase tracking-[0.2em] text-gold",
						children: "The Monarch Difference"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-heading text-3xl font-700 text-chocolate md:text-4xl",
						children: "Why Choose Us"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-subtle md:text-lg",
						children: "Because we blend creativity with consistency — every cake is handcrafted with precision, love, and just the right touch of magic."
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => scrollToSection("menu"),
						className: "mt-8 rounded-pill bg-gold px-8 py-3.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate",
						children: "Explore Menu"
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/Menu.tsx
function Menu$1() {
	return /* @__PURE__ */ jsx("section", {
		id: "menu",
		className: "bg-beige py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[920px] px-5 md:px-8",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, {
					title: "Our Menu",
					subtitle: "Recommendation Menu"
				}),
				/* @__PURE__ */ jsx(motion.div, {
					variants: staggerContainer,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						amount: .15
					},
					className: "space-y-5",
					children: menuItems.map((item) => /* @__PURE__ */ jsxs(motion.div, {
						variants: staggerItem,
						className: "rounded-card bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-medium",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline justify-between gap-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-heading text-xl font-600 text-chocolate",
								children: item.name
							}), /* @__PURE__ */ jsx("span", {
								className: "shrink-0 font-700 text-gold",
								children: item.price
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-subtle",
							children: item.desc
						})]
					}, item.name))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ jsx("a", {
						href: site.social.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-block rounded-pill bg-chocolate px-8 py-3.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-gold",
						children: "More Menu"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/Testimonials.tsx
function initials(name) {
	return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		id: "testimonials",
		className: "bg-beige py-[60px] md:py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-5 md:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "Our Customer Review" }), /* @__PURE__ */ jsx(Swiper, {
				modules: [Autoplay, Pagination],
				spaceBetween: 28,
				slidesPerView: 1,
				loop: true,
				autoplay: {
					delay: 4e3,
					disableOnInteraction: false
				},
				pagination: { clickable: true },
				breakpoints: {
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				},
				className: "!pb-14 !pt-2",
				children: testimonials.map((t) => /* @__PURE__ */ jsx(SwiperSlide, {
					className: "h-auto",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative flex h-full flex-col rounded-[30px] bg-card p-8 shadow-medium",
						children: [
							/* @__PURE__ */ jsx(Quote, { className: "absolute right-6 top-6 h-10 w-10 text-gold/30" }),
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-1 text-gold",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-gold" }, i))
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-4 grow leading-relaxed text-subtle",
								children: [
									"\"",
									t.review,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold font-600 text-white",
									children: initials(t.name)
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "font-600 text-chocolate",
									children: t.name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-subtle",
									children: t.location
								})] })]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
//#endregion
//#region src/components/SocialMedia.tsx
function WhatsAppIcon$1({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" })
	});
}
var socials = [
	{
		Icon: Facebook,
		href: site.social.facebook,
		label: "Facebook"
	},
	{
		Icon: Instagram,
		href: site.social.instagram,
		label: "Instagram"
	},
	{
		Icon: Youtube,
		href: site.social.youtube,
		label: "YouTube"
	},
	{
		Icon: WhatsAppIcon$1,
		href: site.social.whatsapp,
		label: "WhatsApp"
	}
];
function SocialMedia() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-cream py-[60px] md:py-[80px]",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto max-w-[1280px] px-5 text-center md:px-8",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-heading text-2xl font-700 text-chocolate md:text-3xl",
					children: "Follow Our Sweet Journey"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-subtle",
					children: "Stay connected for fresh bakes, offers & behind-the-scenes magic."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-7 flex justify-center gap-4",
					children: socials.map(({ Icon, href, label }) => /* @__PURE__ */ jsx("a", {
						href,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": label,
						className: "flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate",
						children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
					}, label))
				})
			]
		})
	});
}
//#endregion
//#region src/components/Footer.tsx
var quickLinks = navLinks.filter((l) => [
	"About Us",
	"Menu",
	"Gallery",
	"Outlets",
	"Contact"
].includes(l.label));
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		id: "contact",
		className: "bg-dark-brown text-cream",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-[1280px] px-5 py-16 md:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold text-xl",
								children: "🍰"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-heading text-xl font-700 text-white",
								children: "Cake Fete"
							})]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-4 text-sm leading-relaxed text-cream/70",
							children: [
								site.tagline,
								". ",
								site.subText
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 space-y-2 text-sm text-cream/80",
							children: [/* @__PURE__ */ jsxs("a", {
								href: `tel:${site.phoneDisplay.replace(/\s/g, "")}`,
								className: "flex items-center gap-2 transition-colors hover:text-gold",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-gold" }),
									" ",
									site.phoneDisplay
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: `mailto:${site.email}`,
								className: "flex items-center gap-2 transition-colors hover:text-gold",
								children: [
									/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-gold" }),
									" ",
									site.email
								]
							})]
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-lg font-600 text-white",
						children: "Quick Links"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-2.5",
						children: quickLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => scrollToSection(link.id),
							className: "text-sm text-cream/75 transition-colors hover:text-gold",
							children: link.label
						}) }, link.id))
					})] }),
					/* @__PURE__ */ jsxs("div", {
						id: "outlets",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-lg font-600 text-white",
							children: "Outlets"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-2.5",
							children: outlets.map((o) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-sm text-cream/75",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), o]
							}, o))
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-lg font-600 text-white",
						children: "Work Hours"
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex items-start gap-2 text-sm text-cream/80",
						children: [/* @__PURE__ */ jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: site.workHours.days }), /* @__PURE__ */ jsx("p", {
							className: "text-gold",
							children: site.workHours.time
						})] })]
					})] })
				]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsx("p", {
				className: "mx-auto max-w-[1280px] px-5 py-5 text-center text-sm text-cream/60 md:px-8",
				children: "© 2026 Cake Fete. All Rights Reserved."
			})
		})]
	});
}
//#endregion
//#region src/components/FloatingButtons.tsx
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" })
	});
}
function FloatingButtons() {
	const [showTop, setShowTop] = useState(false);
	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 500);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3 md:right-8",
		children: [/* @__PURE__ */ jsx(AnimatePresence, { children: showTop && /* @__PURE__ */ jsx(motion.button, {
			initial: {
				opacity: 0,
				scale: .6
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: {
				opacity: 0,
				scale: .6
			},
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-chocolate text-white shadow-medium transition-colors hover:bg-gold",
			"aria-label": "Scroll to top",
			children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
		}) }), /* @__PURE__ */ jsx(motion.a, {
			href: site.social.whatsapp,
			target: "_blank",
			rel: "noreferrer",
			initial: { scale: 0 },
			animate: { scale: 1 },
			transition: {
				delay: .8,
				type: "spring",
				stiffness: 200
			},
			whileHover: { scale: 1.08 },
			className: "flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-large transition-colors hover:bg-chocolate",
			"aria-label": "Chat on WhatsApp",
			children: /* @__PURE__ */ jsx(WhatsAppIcon, { className: "h-7 w-7" })
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-x-hidden bg-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Categories, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Counters, {}),
				/* @__PURE__ */ jsx(WhoWeAre, {}),
				/* @__PURE__ */ jsx(Featured, {}),
				/* @__PURE__ */ jsx(Occasions, {}),
				/* @__PURE__ */ jsx(WhyChooseUs, {}),
				/* @__PURE__ */ jsx(Menu$1, {}),
				/* @__PURE__ */ jsx(Testimonials, {}),
				/* @__PURE__ */ jsx(SocialMedia, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingButtons, {})
		]
	});
}
//#endregion
export { Index as component };
