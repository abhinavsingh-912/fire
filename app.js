/* ═══════════════════════════════════════════════════
   DhamakaMart — Firecracker E-Commerce App Logic
   ═══════════════════════════════════════════════════ */

// ──────────────────── PRODUCT DATA ────────────────────
const PRODUCTS = [
    {
        id: 1, name: "Laxmi Bomb (10 Pcs)", category: "bombs",
        emoji: "💥", desc: "Loud & powerful classic Laxmi bombs with extra boom.",
        price: 250, originalPrice: 600, rating: 4.8, reviews: 1245,
        badges: ["60% OFF", "hot"], inStock: true
    },
    {
        id: 2, name: "Sky Shot Rockets (5 Pcs)", category: "rockets",
        emoji: "🚀", desc: "Multi-color sky rockets that light up the sky beautifully.",
        price: 350, originalPrice: 800, rating: 4.9, reviews: 982,
        badges: ["56% OFF", "hot"], inStock: true
    },
    {
        id: 3, name: "Electric Sparklers (Box of 50)", category: "sparklers",
        emoji: "✨", desc: "Safe & colorful sparklers for kids — green, red & gold.",
        price: 120, originalPrice: 300, rating: 4.7, reviews: 2150,
        badges: ["60% OFF", "new"], inStock: true
    },
    {
        id: 4, name: "Ground Chakkar Deluxe (10 Pcs)", category: "ground-chakkar",
        emoji: "🌀", desc: "Spinning ground chakkars with vibrant multi-color sparks.",
        price: 180, originalPrice: 400, rating: 4.6, reviews: 876,
        badges: ["55% OFF"], inStock: true
    },
    {
        id: 5, name: "Flower Pot (5 Pcs)", category: "fancy",
        emoji: "🌸", desc: "Fountain of colorful sparks shooting upwards like flowers.",
        price: 280, originalPrice: 650, rating: 4.8, reviews: 734,
        badges: ["57% OFF"], inStock: true
    },
    {
        id: 6, name: "Diwali Mega Combo Pack", category: "combos",
        emoji: "🎁", desc: "Complete family pack with 50+ items — rockets, sparklers, bombs & more.",
        price: 1499, originalPrice: 3999, rating: 4.9, reviews: 3200,
        badges: ["63% OFF", "hot"], inStock: true
    },
    {
        id: 7, name: "Pencil Crackers (20 Pcs)", category: "sparklers",
        emoji: "🖍️", desc: "Colourful pencil-shaped sparklers with crackling sound effect.",
        price: 99, originalPrice: 250, rating: 4.5, reviews: 1560,
        badges: ["60% OFF"], inStock: true
    },
    {
        id: 8, name: "Atom Bomb (5 Pcs)", category: "bombs",
        emoji: "💣", desc: "Loudest cracker in town — triple sound with smoke effect.",
        price: 350, originalPrice: 750, rating: 4.7, reviews: 920,
        badges: ["53% OFF", "limited"], inStock: true
    },
    {
        id: 9, name: "Color Smoke Bombs (6 Pcs)", category: "fancy",
        emoji: "🌈", desc: "Non-explosive color smoke bombs — great for celebrations & photos.",
        price: 220, originalPrice: 500, rating: 4.6, reviews: 680,
        badges: ["56% OFF", "new"], inStock: true
    },
    {
        id: 10, name: "Twinkling Star (10 Pcs)", category: "fancy",
        emoji: "⭐", desc: "Slow-burning aerial stars that twinkle like diamonds in the sky.",
        price: 420, originalPrice: 950, rating: 4.8, reviews: 540,
        badges: ["56% OFF"], inStock: true
    },
    {
        id: 11, name: "Chakri Anaar Combo (8 Pcs)", category: "ground-chakkar",
        emoji: "🎯", desc: "Spinning chakkars that transform into anaar fountain sparks.",
        price: 310, originalPrice: 700, rating: 4.7, reviews: 1100,
        badges: ["56% OFF"], inStock: true
    },
    {
        id: 12, name: "Whistling Rocket (10 Pcs)", category: "rockets",
        emoji: "🎵", desc: "Rockets with a loud whistle as they zoom into the sky.",
        price: 199, originalPrice: 499, rating: 4.5, reviews: 890,
        badges: ["60% OFF"], inStock: true
    },
    {
        id: 13, name: "Kids Safety Pack", category: "combos",
        emoji: "🧒", desc: "Child-friendly pack with sparklers, color snakes & smoke puffs.",
        price: 599, originalPrice: 1499, rating: 4.9, reviews: 2800,
        badges: ["60% OFF", "new"], inStock: true
    },
    {
        id: 14, name: "10000 Wala Garland", category: "bombs",
        emoji: "🧨", desc: "Iconic long-lasting cracker strip — the king of Diwali celebrations.",
        price: 850, originalPrice: 2000, rating: 4.6, reviews: 1650,
        badges: ["58% OFF", "hot"], inStock: true
    },
    {
        id: 15, name: "Butterfly Wings (10 Pcs)", category: "fancy",
        emoji: "🦋", desc: "Spinning aerial items that flutter like butterflies with sparks.",
        price: 275, originalPrice: 600, rating: 4.7, reviews: 430,
        badges: ["54% OFF"], inStock: true
    },
    {
        id: 16, name: "Premium Family Combo", category: "combos",
        emoji: "👨‍👩‍👧‍👦", desc: "100+ items mega combo — everything for a grand Diwali celebration!",
        price: 2999, originalPrice: 7999, rating: 4.9, reviews: 4500,
        badges: ["63% OFF", "hot"], inStock: true
    },
    {
        id: 17, name: "Silver Rain Rockets (8 Pcs)", category: "rockets",
        emoji: "🌧️", desc: "Silver shower of sparks falling like rain — mesmerizing!",
        price: 480, originalPrice: 1100, rating: 4.8, reviews: 610,
        badges: ["56% OFF"], inStock: true
    },
    {
        id: 18, name: "Magic Snake (10 Pcs)", category: "sparklers",
        emoji: "🐍", desc: "Light it and watch a magical ash snake grow from the tablet.",
        price: 49, originalPrice: 120, rating: 4.4, reviews: 3100,
        badges: ["59% OFF"], inStock: true
    },
    {
        id: 19, name: "Double Shot Gun (5 Pcs)", category: "rockets",
        emoji: "🎆", desc: "Twin-barrel rocket that fires two shots into the sky.",
        price: 550, originalPrice: 1200, rating: 4.7, reviews: 780,
        badges: ["54% OFF", "limited"], inStock: true
    },
    {
        id: 20, name: "Supreme Combo - All in One", category: "combos",
        emoji: "🏆", desc: "The ultimate 200+ item combo for the BIGGEST celebration ever!",
        price: 4999, originalPrice: 12999, rating: 5.0, reviews: 5600,
        badges: ["62% OFF", "hot"], inStock: true
    }
];

// ──────────────────── COUPON CODES ────────────────────
const COUPONS = {
    "DIWALI10": { discount: 10, type: "percent", label: "DIWALI10 - 10%" },
    "FLAT200":  { discount: 200, type: "flat", label: "FLAT200 - ₹200" },
    "MEGA15":   { discount: 15, type: "percent", label: "MEGA15 - 15%" },
    "WELCOME5": { discount: 5, type: "percent", label: "WELCOME5 - 5%" },
};

// ──────────────────── STATE ────────────────────
let cart = JSON.parse(localStorage.getItem("dm_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("dm_wishlist")) || [];
let appliedCoupon = null;
let productsToShow = 8;
let currentCategory = "all";
let currentSort = "popular";

// ──────────────────── DOM REFS ────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ──────────────────── INIT ────────────────────
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
    updateWishlistCount();
    initCountdown();
    initParticles();
    initEventListeners();
});

// ──────────────────── PRODUCT RENDERING ────────────────────
function getFilteredProducts() {
    let products = [...PRODUCTS];

    // Category filter
    if (currentCategory !== "all") {
        products = products.filter(p => p.category === currentCategory);
    }

    // Search filter
    const query = ($("searchInput")?.value || "").toLowerCase().trim();
    if (query) {
        products = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }

    // Sort
    switch (currentSort) {
        case "price-low": products.sort((a, b) => a.price - b.price); break;
        case "price-high": products.sort((a, b) => b.price - a.price); break;
        case "discount": products.sort((a, b) => {
            const dA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
            const dB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
            return dB - dA;
        }); break;
        default: products.sort((a, b) => b.reviews - a.reviews); // popular
    }

    return products;
}

function renderProducts() {
    const grid = $("productGrid");
    const products = getFilteredProducts();
    const visible = products.slice(0, productsToShow);

    grid.innerHTML = visible.map(p => {
        const discountPct = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
        const saved = p.originalPrice - p.price;
        const inCart = cart.find(c => c.id === p.id);
        const isWished = wishlist.includes(p.id);
        const starsHtml = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 ? "½" : "");

        const badgeColors = { hot: "badge-hot", new: "badge-new", limited: "badge-limited" };

        return `
        <div class="product-card" data-id="${p.id}">
            <div class="product-image">
                <div class="product-badges">
                    <span class="badge-tag badge-discount">${discountPct}% OFF</span>
                    ${p.badges.filter(b => !b.includes("%")).map(b =>
                        `<span class="badge-tag ${badgeColors[b] || 'badge-new'}">${b.toUpperCase()}</span>`
                    ).join("")}
                </div>
                <button class="product-wishlist ${isWished ? 'liked' : ''}" onclick="toggleWishlist(${p.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <span class="product-emoji">${p.emoji}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${formatCategory(p.category)}</div>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-rating">
                    <span class="stars">${starsHtml}</span>
                    <span>${p.rating}</span>
                    <span class="count">(${p.reviews.toLocaleString()})</span>
                </div>
                <div class="product-pricing">
                    <span class="price-current">₹${p.price.toLocaleString()}</span>
                    <span class="price-original">₹${p.originalPrice.toLocaleString()}</span>
                    <span class="price-saved">Save ₹${saved.toLocaleString()}</span>
                </div>
                <div class="product-actions">
                    ${inCart ? `
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQty(${p.id}, -1)">−</button>
                            <span class="qty-display">${inCart.qty}</span>
                            <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
                        </div>
                        <button class="btn-add-cart in-cart" onclick="removeFromCart(${p.id})">
                            <i class="fas fa-check"></i> In Cart
                        </button>
                    ` : `
                        <button class="btn-add-cart" onclick="addToCart(${p.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    `}
                </div>
            </div>
        </div>`;
    }).join("");

    // Load more button visibility
    const loadMore = $("loadMoreBtn");
    if (loadMore) {
        loadMore.style.display = visible.length < products.length ? "inline-flex" : "none";
    }
}

function formatCategory(cat) {
    const map = {
        "ground-chakkar": "Ground Chakkars",
        "rockets": "Rockets",
        "sparklers": "Sparklers",
        "bombs": "Bombs & Crackers",
        "fancy": "Fancy Items",
        "combos": "Combo Packs"
    };
    return map[cat] || cat;
}

// ──────────────────── CART FUNCTIONS ────────────────────
function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id, qty: 1 });
    }
    saveCart();
    renderProducts();
    updateCartUI();
    showToast(`${product.name} added to cart!`, "success");
}

function removeFromCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    cart = cart.filter(c => c.id !== id);
    saveCart();
    renderProducts();
    updateCartUI();
    if (product) showToast(`${product.name} removed from cart`, "error");
}

function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart();
    renderProducts();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("dm_cart", JSON.stringify(cart));
}

function updateCartUI() {
    const countEl = $("cartCount");
    const itemsEl = $("cartItems");
    const emptyEl = $("cartEmpty");
    const footerEl = $("cartFooter");

    const totalItems = cart.reduce((s, c) => s + c.qty, 0);
    countEl.textContent = totalItems;

    if (cart.length === 0) {
        emptyEl.style.display = "block";
        footerEl.style.display = "none";
        // Remove all cart items but keep empty state
        itemsEl.querySelectorAll(".cart-item").forEach(el => el.remove());
        return;
    }

    emptyEl.style.display = "none";
    footerEl.style.display = "block";

    // Remove old items
    itemsEl.querySelectorAll(".cart-item").forEach(el => el.remove());

    // Add items
    cart.forEach(item => {
        const p = PRODUCTS.find(pr => pr.id === item.id);
        if (!p) return;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-image">${p.emoji}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${p.name}</div>
                <div class="cart-item-price">₹${p.price.toLocaleString()} <span class="original">₹${p.originalPrice.toLocaleString()}</span></div>
                <div class="cart-item-actions">
                    <div class="cart-qty">
                        <button onclick="updateQty(${p.id}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty(${p.id}, 1)">+</button>
                    </div>
                    <span class="cart-item-total">₹${(p.price * item.qty).toLocaleString()}</span>
                    <button class="cart-remove" onclick="removeFromCart(${p.id})" title="Remove"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        itemsEl.appendChild(div);
    });

    // Calculate totals
    let subtotal = 0;
    let totalOriginal = 0;
    cart.forEach(item => {
        const p = PRODUCTS.find(pr => pr.id === item.id);
        if (p) {
            subtotal += p.price * item.qty;
            totalOriginal += p.originalPrice * item.qty;
        }
    });

    const productDiscount = totalOriginal - subtotal;
    let couponDisc = 0;
    const couponRow = $("couponRow");

    if (appliedCoupon) {
        const coup = COUPONS[appliedCoupon];
        if (coup.type === "percent") couponDisc = Math.round(subtotal * coup.discount / 100);
        else couponDisc = coup.discount;
        couponRow.style.display = "flex";
        $("couponLabel").textContent = coup.label;
        $("couponDiscount").textContent = `-₹${couponDisc.toLocaleString()}`;
    } else {
        couponRow.style.display = "none";
    }

    const delivery = subtotal >= 2000 ? 0 : 99;
    const total = subtotal - couponDisc + delivery;
    const totalSavings = productDiscount + couponDisc;

    $("cartSubtotal").textContent = `₹${subtotal.toLocaleString()}`;
    $("cartDiscount").textContent = `-₹${productDiscount.toLocaleString()}`;
    $("deliveryCharge").textContent = delivery === 0 ? "FREE 🎉" : `₹${delivery}`;
    $("cartTotal").textContent = `₹${total.toLocaleString()}`;
    $("totalSavings").textContent = totalSavings.toLocaleString();
}

// ──────────────────── WISHLIST ────────────────────
function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast("Removed from wishlist", "error");
    } else {
        wishlist.push(id);
        showToast("Added to wishlist! ❤️", "success");
    }
    localStorage.setItem("dm_wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderProducts();
}

function updateWishlistCount() {
    $("wishlistCount").textContent = wishlist.length;
}

// ──────────────────── TOAST NOTIFICATIONS ────────────────────
function showToast(message, type = "success") {
    const container = $("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(40px)";
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ──────────────────── COUNTDOWN TIMER ────────────────────
function initCountdown() {
    // Set sale end to 14 days from today
    const end = new Date();
    end.setDate(end.getDate() + 14);
    end.setHours(23, 59, 59);

    function update() {
        const now = new Date();
        const diff = end - now;
        if (diff <= 0) return;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        $("days").textContent = String(d).padStart(2, "0");
        $("hours").textContent = String(h).padStart(2, "0");
        $("minutes").textContent = String(m).padStart(2, "0");
        $("seconds").textContent = String(s).padStart(2, "0");
    }
    update();
    setInterval(update, 1000);
}

// ──────────────────── HERO PARTICLES ────────────────────
function initParticles() {
    const container = $("heroParticles");
    const colors = ["#ff4500", "#ffd700", "#ff6b35", "#ff1744", "#ffab00", "#ff5252"];
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 8 + 3;
        p.style.cssText = `
            width: ${size}px; height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 6}s;
            animation-duration: ${Math.random() * 4 + 4}s;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        container.appendChild(p);
    }
}

// ──────────────────── EVENT LISTENERS ────────────────────
function initEventListeners() {

    // — Cart toggle —
    $("cartToggle").addEventListener("click", e => { e.preventDefault(); openCart(); });
    $("cartClose").addEventListener("click", closeCart);
    $("cartOverlay").addEventListener("click", closeCart);
    $("cartShopBtn")?.addEventListener("click", e => { e.preventDefault(); closeCart(); });

    // — Category nav —
    $$(".cat-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            $$(".cat-link").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            currentCategory = link.dataset.category;
            productsToShow = 8;
            renderProducts();
            document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // — Sort filters —
    $$(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            $$(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSort = btn.dataset.sort;
            renderProducts();
        });
    });

    // — Load more —
    $("loadMoreBtn")?.addEventListener("click", () => {
        productsToShow += 8;
        renderProducts();
    });

    // — Search —
    $("searchInput")?.addEventListener("input", () => {
        productsToShow = 20;
        renderProducts();
    });
    $("searchBtn")?.addEventListener("click", () => {
        productsToShow = 20;
        renderProducts();
    });

    // — Sticky navbar —
    window.addEventListener("scroll", () => {
        const navbar = $("navbar");
        const backToTop = $("backToTop");
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
            backToTop.classList.add("show");
        } else {
            navbar.classList.remove("scrolled");
            backToTop.classList.remove("show");
        }
    });

    // — Back to top —
    $("backToTop").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // — Coupon —
    $("applyCoupon").addEventListener("click", () => {
        const code = $("couponInput").value.trim().toUpperCase();
        if (COUPONS[code]) {
            appliedCoupon = code;
            updateCartUI();
            showToast(`Coupon "${code}" applied! 🎉`, "success");
        } else {
            showToast("Invalid coupon code", "error");
        }
    });

    // — Checkout flow —
    $("checkoutBtn").addEventListener("click", () => {
        closeCart();
        openCheckout();
    });

    $("checkoutClose").addEventListener("click", closeCheckout);
    $("checkoutOverlay").addEventListener("click", e => {
        if (e.target === $("checkoutOverlay")) closeCheckout();
    });

    // Step 1 → Step 2
    $("addressForm").addEventListener("submit", e => {
        e.preventDefault();
        goToStep(2);
    });

    // Step 2 → Step 3
    $("proceedToConfirm").addEventListener("click", () => {
        goToStep(3);
        populateReview();
    });

    // Back buttons
    $("backToAddress").addEventListener("click", () => goToStep(1));
    $("backToPayment").addEventListener("click", () => goToStep(2));

    // Payment method toggle
    $$(".payment-option").forEach(opt => {
        opt.addEventListener("click", () => {
            $$(".payment-option").forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            const val = opt.querySelector("input").value;
            $("cardDetails").style.display = val === "card" ? "block" : "none";
            $("upiDetails").style.display = val === "upi" ? "block" : "none";
            if (val === "upi") updateQRAmount();
        });
    });

    // UPI App deep link buttons
    $$(".upi-app-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const app = btn.dataset.app;
            const totals = calcTotals();
            launchUPIApp(app, totals.total);
        });
    });

    // Card number formatting
    $("cardNumber")?.addEventListener("input", e => {
        let v = e.target.value.replace(/\D/g, "").slice(0, 16);
        e.target.value = v.replace(/(\d{4})(?=\d)/g, "$1 ");
    });
    $("cardExpiry")?.addEventListener("input", e => {
        let v = e.target.value.replace(/\D/g, "").slice(0, 4);
        if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
        e.target.value = v;
    });

    // Place order
    $("placeOrderBtn").addEventListener("click", placeOrder);

    // Continue shopping
    $("continueShopping").addEventListener("click", () => {
        $("successOverlay").classList.remove("open");
        cart = [];
        appliedCoupon = null;
        saveCart();
        renderProducts();
        updateCartUI();
    });

    // Newsletter
    $("newsletterForm").addEventListener("submit", e => {
        e.preventDefault();
        showToast("🎉 Subscribed! Check your email for 10% OFF code.", "success");
        e.target.reset();
    });

    // Mobile menu
    $("mobileMenuBtn")?.addEventListener("click", () => {
        const nav = $("categoryNav");
        nav.style.display = nav.style.display === "none" ? "block" : "none";
    });
}

// ──────────────────── CART SIDEBAR ────────────────────
function openCart() {
    $("cartSidebar").classList.add("open");
    $("cartOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}
function closeCart() {
    $("cartSidebar").classList.remove("open");
    $("cartOverlay").classList.remove("open");
    document.body.style.overflow = "";
}

// ──────────────────── CHECKOUT ────────────────────
function openCheckout() {
    $("checkoutOverlay").classList.add("open");
    goToStep(1);
}
function closeCheckout() {
    $("checkoutOverlay").classList.remove("open");
}

function goToStep(step) {
    $$(".checkout-page").forEach(p => p.classList.remove("active"));
    $(`step${step}`).classList.add("active");
    $$(".checkout-steps .step").forEach(s => {
        const sn = parseInt(s.dataset.step);
        s.classList.remove("active", "done");
        if (sn === step) s.classList.add("active");
        else if (sn < step) s.classList.add("done");
    });
    // Update QR amount when entering payment step
    if (step === 2) updateQRAmount();
}

function populateReview() {
    // Address
    $("reviewAddress").innerHTML = `
        <p><strong>${$("fullName").value}</strong><br>
        ${$("address").value}<br>
        ${$("city").value}, ${$("state").value} - ${$("pincode").value}<br>
        📞 ${$("phone").value} | ✉️ ${$("email").value}</p>
    `;

    // Payment
    const payMethod = document.querySelector('input[name="payment"]:checked').value;
    const payLabels = { upi: "UPI / Google Pay / PhonePe", card: "Credit / Debit Card", netbanking: "Net Banking", cod: "Cash on Delivery" };
    $("reviewPayment").innerHTML = `<p>${payLabels[payMethod]}</p>`;

    // Items
    let html = "";
    cart.forEach(item => {
        const p = PRODUCTS.find(pr => pr.id === item.id);
        if (p) {
            html += `<div class="review-item">
                <span>${p.emoji} ${p.name} × ${item.qty}</span>
                <span>₹${(p.price * item.qty).toLocaleString()}</span>
            </div>`;
        }
    });
    $("reviewItems").innerHTML = html;

    // Total
    const totals = calcTotals();
    $("reviewTotal").innerHTML = `
        <div class="review-item"><span>Subtotal</span><span>₹${totals.subtotal.toLocaleString()}</span></div>
        <div class="review-item"><span>Product Discount</span><span style="color:var(--success)">-₹${totals.productDiscount.toLocaleString()}</span></div>
        ${totals.couponDisc > 0 ? `<div class="review-item"><span>Coupon Discount</span><span style="color:var(--success)">-₹${totals.couponDisc.toLocaleString()}</span></div>` : ""}
        <div class="review-item"><span>Delivery</span><span>${totals.delivery === 0 ? 'FREE' : '₹' + totals.delivery}</span></div>
        ${payMethod === 'cod' ? `<div class="review-item"><span>COD Charge</span><span>₹49</span></div>` : ""}
        <hr>
        <div class="review-item" style="font-weight:800;font-size:1.1rem;">
            <span>Total Payable</span>
            <span style="color:var(--primary)">₹${(totals.total + (payMethod === 'cod' ? 49 : 0)).toLocaleString()}</span>
        </div>
    `;

    $("finalAmount").textContent = `₹${(totals.total + (payMethod === 'cod' ? 49 : 0)).toLocaleString()}`;
}

function calcTotals() {
    let subtotal = 0, totalOriginal = 0;
    cart.forEach(item => {
        const p = PRODUCTS.find(pr => pr.id === item.id);
        if (p) {
            subtotal += p.price * item.qty;
            totalOriginal += p.originalPrice * item.qty;
        }
    });
    const productDiscount = totalOriginal - subtotal;
    let couponDisc = 0;
    if (appliedCoupon && COUPONS[appliedCoupon]) {
        const c = COUPONS[appliedCoupon];
        couponDisc = c.type === "percent" ? Math.round(subtotal * c.discount / 100) : c.discount;
    }
    const delivery = subtotal >= 2000 ? 0 : 99;
    return { subtotal, totalOriginal, productDiscount, couponDisc, delivery, total: subtotal - couponDisc + delivery };
}

// ──────────────────── PLACE ORDER ────────────────────
function placeOrder() {
    const btn = $("placeOrderBtn");
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing Payment...`;

    // Simulate payment processing
    setTimeout(() => {
        closeCheckout();

        // Generate order ID
        const orderId = "DM" + Date.now().toString().slice(-8);
        $("orderId").textContent = `#${orderId}`;

        // Save order to localStorage for admin dashboard
        const totals = calcTotals();
        const payMethod = document.querySelector('input[name="payment"]:checked').value;
        const order = {
            orderId,
            customer: {
                name: $("fullName").value,
                phone: $("phone").value,
                email: $("email").value,
                address: $("address").value,
                city: $("city").value,
                state: $("state").value,
                pincode: $("pincode").value
            },
            items: cart.map(item => {
                const p = PRODUCTS.find(pr => pr.id === item.id);
                return { id: p.id, name: p.name, emoji: p.emoji, price: p.price, originalPrice: p.originalPrice, qty: item.qty };
            }),
            payment: payMethod,
            subtotal: totals.subtotal,
            discount: totals.productDiscount,
            couponDiscount: totals.couponDisc,
            coupon: appliedCoupon || null,
            delivery: totals.delivery,
            total: totals.total + (payMethod === 'cod' ? 49 : 0),
            status: payMethod === 'cod' ? 'confirmed' : 'paid',
            date: new Date().toISOString()
        };
        const orders = JSON.parse(localStorage.getItem("dm_orders") || "[]");
        orders.push(order);
        localStorage.setItem("dm_orders", JSON.stringify(orders));

        // Show success
        $("successOverlay").classList.add("open");

        // Reset button
        btn.disabled = false;
        btn.innerHTML = `<i class="fas fa-lock"></i> Place Order — Pay <span id="finalAmount">₹0</span>`;
    }, 2500);
}

// ──────────────────── UPI DEEP LINKS & QR ────────────────────

// UPI payment config — replace with your actual UPI details
const UPI_CONFIG = {
    payeeVPA: "dhakakamart@ybl",          // Your UPI ID
    payeeName: "DhamakaMart",             // Business name
    merchantCode: "1234",                 // Merchant category code (optional)
    transactionNote: "DhamakaMart Order"  // Note on payment
};

function updateQRAmount() {
    const totals = calcTotals();
    const qrAmountEl = $("qrAmount");
    if (qrAmountEl) {
        qrAmountEl.textContent = `₹${totals.total.toLocaleString()}`;
    }
}

function buildUPIUri(amount, orderId) {
    const params = new URLSearchParams({
        pa: UPI_CONFIG.payeeVPA,
        pn: UPI_CONFIG.payeeName,
        mc: UPI_CONFIG.merchantCode,
        tid: "TXN" + Date.now(),
        tr: orderId || "DM" + Date.now().toString().slice(-8),
        tn: UPI_CONFIG.transactionNote,
        am: amount.toFixed(2),
        cu: "INR"
    });
    return `upi://pay?${params.toString()}`;
}

function launchUPIApp(appName, amount) {
    const orderId = "DM" + Date.now().toString().slice(-8);
    const upiUri = buildUPIUri(amount, orderId);

    // Deep link schemes for popular UPI apps
    const deepLinks = {
        gpay: `tez://upi/pay?${upiUri.split("?")[1]}`,
        phonepe: `phonepe://pay?${upiUri.split("?")[1]}`,
        paytm: `paytmmp://pay?${upiUri.split("?")[1]}`,
        bhim: upiUri  // BHIM uses standard upi:// scheme
    };

    const appNames = {
        gpay: "Google Pay",
        phonepe: "PhonePe",
        paytm: "Paytm",
        bhim: "BHIM UPI"
    };

    const link = deepLinks[appName] || upiUri;

    showToast(`Opening ${appNames[appName]}... ₹${amount.toLocaleString()}`, "success");

    // Try to open the app via deep link
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();

    // Fallback: if app doesn't open, try standard UPI URI after a delay
    setTimeout(() => {
        document.body.removeChild(anchor);
        // Try fallback with standard upi:// scheme
        if (appName !== "bhim") {
            const fallback = document.createElement("a");
            fallback.href = upiUri;
            fallback.style.display = "none";
            document.body.appendChild(fallback);
            fallback.click();
            setTimeout(() => document.body.removeChild(fallback), 100);
        }
    }, 1500);

    // Store pending order for verification
    const pendingOrder = {
        orderId, amount, appName,
        timestamp: new Date().toISOString(),
        status: "pending"
    };
    const pendingOrders = JSON.parse(localStorage.getItem("dm_pending_orders") || "[]");
    pendingOrders.push(pendingOrder);
    localStorage.setItem("dm_pending_orders", JSON.stringify(pendingOrders));
}

// ──────────────────── SMOOTH SCROLL ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
