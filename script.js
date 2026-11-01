/* ==========================================================================
   The Chocolate Den - site JavaScript
   Features: mobile menu, cart counter, scroll animations, accordion, tabs,
   lightbox gallery, Leaflet map, dynamic product page, product search/filter/
   sort, and form validation for the enquiry and contact forms.
   ========================================================================== */

'use strict';

/* ---------- Product data (used by the shop, product and enquiry pages) ---------- */
const PRODUCTS = [
    {
        id: 'dark-chocolate-buttons',
        name: 'Dark Moulding Chocolate Buttons',
        category: 'Chocolate',
        price: 80,
        size: '500 g bag',
        stock: 40,
        image: 'products/dark-chocolate-buttons.jpg',
        alt: 'Pile of dark moulding chocolate buttons',
        description: 'Easy-melt dark moulding chocolate buttons that set firm and glossy without tempering. Perfect for chocolate moulds, dipping and drizzling.',
        details: 'Our dark moulding chocolate is the product that started it all. The buttons melt smoothly in the microwave or over a double boiler and set with a satisfying snap and shine, so even beginners get professional-looking chocolates. Use it in moulds, for dipping strawberries and biscuits, or for decorating cakes.',
        specs: { 'Weight': '500 g', 'Type': 'Compound (moulding) chocolate', 'Tempering needed': 'No', 'Storage': 'Cool, dry place (15-18 °C)' },
        tips: ['Melt in 30-second bursts in the microwave, stirring in between.', 'Tap filled moulds on the counter to release air bubbles.', 'Refrigerate for 10-15 minutes until the chocolate releases from the mould.']
    },
    {
        id: 'white-chocolate-buttons',
        name: 'White Moulding Chocolate Buttons',
        category: 'Chocolate',
        price: 90,
        size: '500 g bag',
        stock: 25,
        image: 'products/white-chocolate-buttons.jpg',
        alt: 'Pile of white moulding chocolate buttons',
        description: 'Creamy white moulding chocolate buttons that melt easily and can be coloured with oil-based colourants.',
        details: 'White moulding chocolate is a favourite for colourful creations. Add oil-based colouring or flavouring oils to create custom shades and flavours for birthdays, weddings and holidays. It also pairs beautifully with dark chocolate for two-tone designs.',
        specs: { 'Weight': '500 g', 'Type': 'Compound (moulding) chocolate', 'Tempering needed': 'No', 'Storage': 'Cool, dry place (15-18 °C)' },
        tips: ['Use only oil-based colours - water-based colours will make it seize.', 'Melt on a lower power than dark chocolate as white chocolate burns easily.', 'Paint details into moulds with coloured chocolate before filling.']
    },
    {
        id: 'caramel-toffee-spread',
        name: 'Caramel Toffee Spread',
        category: 'Fillings',
        price: 100,
        size: '500 g tub',
        stock: 18,
        image: 'products/caramel-toffee-spread.jpg',
        alt: '500 g tub of Chocolate Den caramel toffee spread',
        description: 'A rich, smooth caramel toffee filling for chocolates, cupcakes and tarts.',
        details: 'Our caramel toffee spread is thick enough to pipe into chocolate shells without leaking, yet smooth enough to spread on cakes or swirl into cupcake batter. It is a customer favourite for filled chocolates and caramel cupcakes.',
        specs: { 'Weight': '500 g', 'Texture': 'Smooth, pipeable', 'Uses': 'Filled chocolates, cupcakes, tarts', 'Storage': 'Refrigerate after opening' },
        tips: ['Fill chocolate shells only two-thirds full so you can seal them.', 'Warm slightly to make piping easier.', 'Pair with a pinch of salt for salted caramel chocolates.']
    },
    {
        id: 'banana-flavouring-oil',
        name: 'Banana Flavouring Oil',
        category: 'Flavourings',
        price: 70,
        size: '50 g bottle',
        stock: 30,
        image: 'products/banana-flavouring-oil.jpg',
        alt: '50 g bottle of banana flavouring oil',
        description: 'Concentrated oil-based banana flavouring, safe to use in melted chocolate.',
        details: 'Because it is oil-based, this banana flavouring blends straight into melted chocolate without causing it to seize. A few drops are enough to flavour a whole batch of chocolates, icing or cake batter.',
        specs: { 'Volume': '50 g', 'Base': 'Oil', 'Suitable for': 'Chocolate, icing, baking', 'Dosage': '3-5 drops per 500 g' },
        tips: ['Add flavouring once the chocolate is fully melted.', 'Start with fewer drops and taste - you can always add more.', 'Combine with dark chocolate for a banana-split flavour.']
    },
    {
        id: 'chilli-flavouring-oil',
        name: 'Chilli Flavouring Oil',
        category: 'Flavourings',
        price: 70,
        size: '50 g bottle',
        stock: 6,
        image: 'products/chilli-flavouring-oil.jpg',
        alt: '50 g bottle of chilli flavouring oil',
        description: 'Add a warm chilli kick to dark chocolate with this oil-based flavouring.',
        details: 'Chilli and dark chocolate is a classic combination. This oil-based flavouring gives your chocolates a gentle warmth that builds as you eat, and mixes smoothly into melted chocolate.',
        specs: { 'Volume': '50 g', 'Base': 'Oil', 'Suitable for': 'Chocolate, ganache', 'Dosage': '2-4 drops per 500 g' },
        tips: ['A little goes a long way - add one drop at a time.', 'Works best with dark chocolate.', 'Label chilli chocolates clearly for guests.']
    },
    {
        id: 'bakels-pettinice-blue-icing',
        name: 'Bakels Pettinice Blue Icing',
        category: 'Baking',
        price: 80,
        size: '1 kg pack',
        stock: 12,
        image: 'products/bakels-pettinice-blue-icing.jpg',
        alt: 'Bakels Pettinice blue ready-to-roll icing',
        description: 'Ready-to-roll fondant icing in blue for covering and decorating cakes.',
        details: 'Bakels Pettinice is a premium ready-to-roll icing used by professional cake decorators. It rolls out smoothly without cracking, giving cakes a flawless finish, and can be moulded into decorations.',
        specs: { 'Weight': '1 kg', 'Colour': 'Blue', 'Type': 'Ready-to-roll fondant', 'Brand': 'Bakels' },
        tips: ['Knead until soft and pliable before rolling.', 'Dust your surface lightly with icing sugar to prevent sticking.', 'Wrap unused icing tightly in cling film.']
    },
    {
        id: 'disposable-piping-bag',
        name: 'Disposable Piping Bags',
        category: 'Baking',
        price: 50,
        size: 'Pack of 10',
        stock: 50,
        image: 'products/disposable-piping-bag.jpg',
        alt: 'Disposable plastic piping bag',
        description: 'Strong, disposable piping bags for icing, fillings and melted chocolate.',
        details: 'These clear disposable piping bags make decorating quick and mess-free. Use them with or without nozzles for piping icing, filling chocolate shells with caramel or drizzling melted chocolate.',
        specs: { 'Quantity': '10 bags', 'Length': '30 cm', 'Material': 'Food-safe plastic', 'Nozzle': 'Fits standard nozzles' },
        tips: ['Stand the bag in a tall glass to fill it easily.', 'Twist the top to keep the filling from escaping.', 'Snip a tiny tip for fine chocolate decorations.']
    },
    {
        id: 'paper-muffin-cup-liners',
        name: 'Paper Muffin Cup Liners',
        category: 'Baking',
        price: 10,
        size: 'Pack of 20',
        stock: 100,
        image: 'products/paper-muffin-cup-liners.jpg',
        alt: 'Stack of white paper muffin cup liners',
        description: 'High-quality greaseproof paper liners for baking muffins and cupcakes. They fit standard muffin pans, keep your pans clean and make it easy to lift out baked goods without sticking.',
        details: 'Our paper muffin cup liners are a kitchen staple for anyone who bakes. The greaseproof paper holds its shape in the oven, keeps colours bright and peels away cleanly from the cake. Use them for muffins, cupcakes, mini cheesecakes or even for serving homemade chocolates and sweets.',
        specs: { 'Material': 'Greaseproof paper', 'Size': 'Standard (50 mm base)', 'Colour': 'White', 'Oven safe': 'Up to 220 °C' },
        tips: ['Fill liners two-thirds full for a nicely domed muffin.', 'Place liners in a muffin pan so they keep their shape while baking.', 'Let cupcakes cool completely before icing.']
    },
    {
        id: 'round-polystyrene-cake-dummy',
        name: 'Round Polystyrene Cake Dummy',
        category: 'Baking',
        price: 65,
        size: '20 cm x 7.5 cm',
        stock: 8,
        image: 'products/round-polystyrene-cake-dummy.jpg',
        alt: 'Round white polystyrene cake dummy',
        description: 'A lightweight cake dummy for practising decorating skills and building display cakes.',
        details: 'Cake dummies let you practise fondant covering and piping without baking a cake, and are ideal for display cakes in shop windows or for adding extra tiers to wedding cakes.',
        specs: { 'Diameter': '20 cm', 'Height': '7.5 cm', 'Material': 'High-density polystyrene', 'Reusable': 'Yes' },
        tips: ['Brush lightly with water or piping gel before covering with fondant.', 'Use as a top tier to make a cake look bigger.', 'Wipe clean and reuse for practice.']
    },
    {
        id: 'clear-pvc-gift-box',
        name: 'Clear PVC Gift Boxes',
        category: 'Packaging',
        price: 100,
        size: 'Pack of 10',
        stock: 22,
        image: 'products/clear-pvc-gift-box.jpg',
        alt: 'Clear PVC cube gift box for chocolates',
        description: 'Crystal-clear cube boxes that show off homemade chocolates and sweets.',
        details: 'Turn your homemade chocolates into beautiful gifts. These clear PVC boxes fold flat for storage and pop up into sturdy cubes. Add a ribbon and label for party favours, corporate gifts or market stalls.',
        specs: { 'Quantity': '10 boxes', 'Size': '8 cm x 8 cm x 8 cm', 'Material': 'Food-safe PVC', 'Assembly': 'Folds flat' },
        tips: ['Line with a paper doily or cup liner before adding chocolates.', 'Tie with satin ribbon for a finished look.', 'Store chocolates in a cool place once boxed.']
    },
    {
        id: 'white-cake-box',
        name: 'White Cake Boxes',
        category: 'Packaging',
        price: 25,
        size: '25 cm x 25 cm x 12 cm',
        stock: 60,
        image: 'products/white-cake-box.jpg',
        alt: 'White cardboard cake box',
        description: 'Sturdy white cardboard boxes for transporting cakes, cupcakes and treats.',
        details: 'Our white cake boxes are strong enough to protect cakes on the way to a party, yet simple to fold together. The clean white finish is easy to brand with your own stickers or stamps.',
        specs: { 'Size': '25 x 25 x 12 cm', 'Material': 'Food-grade cardboard', 'Colour': 'White', 'Assembly': 'Folds together, no glue' },
        tips: ['Place the cake on a cake board before boxing.', 'Carry the box flat from underneath.', 'Add a branded sticker to promote your business.']
    }
];

const CATEGORIES = ['Chocolate', 'Fillings', 'Flavourings', 'Baking', 'Packaging'];

/* ---------- Helpers ---------- */
function formatPrice(amount) {
    return 'R' + amount.toFixed(2);
}

function findProduct(id) {
    return PRODUCTS.find(function (product) { return product.id === id; });
}

function stockLabel(stock) {
    return stock <= 10 ? { text: 'Low stock - only ' + stock + ' left', className: 'low-stock' }
                       : { text: 'In stock', className: 'in-stock' };
}

// Builds a product card using DOM methods (no innerHTML, so data is never parsed as HTML)
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const thumb = document.createElement('button');
    thumb.className = 'product-thumb';
    thumb.type = 'button';
    thumb.dataset.lightbox = 'products';
    thumb.dataset.src = product.image;
    thumb.dataset.caption = product.name + ' - ' + formatPrice(product.price);
    thumb.setAttribute('aria-label', 'View larger image of ' + product.name);
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.alt;
    img.loading = 'lazy';
    thumb.appendChild(img);

    const category = document.createElement('span');
    category.className = 'product-category';
    category.textContent = product.category;

    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = 'product.html?id=' + encodeURIComponent(product.id);
    link.textContent = product.name;
    title.appendChild(link);

    const size = document.createElement('p');
    size.className = 'product-size';
    size.textContent = product.size;

    const stockInfo = stockLabel(product.stock);
    const stock = document.createElement('span');
    stock.className = 'stock ' + stockInfo.className;
    stock.textContent = stockInfo.text;

    const footer = document.createElement('div');
    footer.className = 'card-footer';
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = formatPrice(product.price);
    const button = document.createElement('button');
    button.className = 'btn btn-small add-to-cart';
    button.type = 'button';
    button.dataset.product = product.name;
    button.textContent = 'Add to Cart';
    footer.append(price, button);

    card.append(thumb, category, title, size, stock, footer);
    return card;
}

// localStorage can be unavailable (private browsing), so every access is wrapped
function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

/* ---------- Mobile navigation ---------- */
function initNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });
}

/* ---------- Toast message ---------- */
let toastTimer;
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('role', 'status');
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2500);
}

/* ---------- Cart counter ---------- */
function updateCartCount(count) {
    document.querySelectorAll('.cart-count').forEach(function (badge) {
        badge.textContent = count;
        badge.classList.add('bump');
        setTimeout(function () { badge.classList.remove('bump'); }, 200);
    });
}

function initCart() {
    let count = parseInt(storageGet('chocolateDenCart'), 10) || 0;
    updateCartCount(count);

    // Event delegation so buttons added later (e.g. on the shop page) also work
    document.addEventListener('click', function (event) {
        const button = event.target.closest('.add-to-cart');
        if (!button) return;

        const qtyInput = document.getElementById('qty-input');
        const qty = button.id === 'product-add' && qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;
        count += qty;
        storageSet('chocolateDenCart', String(count));
        updateCartCount(count);
        showToast(qty + ' x ' + button.dataset.product + ' added to your cart');
    });
}

/* ---------- Fade-in on scroll ---------- */
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(function (item) { item.classList.add('visible'); });
        return;
    }
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(function (item) { observer.observe(item); });
}

/* ---------- Accordion (About page FAQ) ---------- */
function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(function (header) {
        header.addEventListener('click', function () {
            const panel = document.getElementById(header.getAttribute('aria-controls'));
            const isOpen = header.getAttribute('aria-expanded') === 'true';

            // Close any other open item so only one answer shows at a time
            document.querySelectorAll('.accordion-header[aria-expanded="true"]').forEach(function (other) {
                if (other !== header) {
                    other.setAttribute('aria-expanded', 'false');
                    document.getElementById(other.getAttribute('aria-controls')).style.maxHeight = null;
                }
            });

            header.setAttribute('aria-expanded', String(!isOpen));
            panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
        });
    });
}

/* ---------- Tabs (Product page) ---------- */
function initTabs() {
    const tabList = document.querySelector('[role="tablist"]');
    if (!tabList) return;
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));

    function selectTab(tab) {
        tabs.forEach(function (t) {
            const selected = t === tab;
            t.setAttribute('aria-selected', String(selected));
            t.tabIndex = selected ? 0 : -1;
            document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
        });
        tab.focus();
    }

    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () { selectTab(tab); });
        tab.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowRight') selectTab(tabs[(index + 1) % tabs.length]);
            if (event.key === 'ArrowLeft') selectTab(tabs[(index - 1 + tabs.length) % tabs.length]);
        });
    });
}

/* ---------- Lightbox gallery ---------- */
function initLightbox() {
    let lightbox = null;
    let items = [];
    let current = 0;
    let lastFocused = null;

    // The lightbox markup is created with JavaScript the first time it is needed
    function build() {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Image viewer');
        lightbox.innerHTML =
            '<button class="lightbox-btn lightbox-close" aria-label="Close image viewer">&times;</button>' +
            '<button class="lightbox-btn lightbox-prev" aria-label="Previous image">&#8249;</button>' +
            '<figure><img src="" alt=""><figcaption></figcaption></figure>' +
            '<button class="lightbox-btn lightbox-next" aria-label="Next image">&#8250;</button>';
        document.body.appendChild(lightbox);

        lightbox.querySelector('.lightbox-close').addEventListener('click', close);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { show(current - 1); });
        lightbox.querySelector('.lightbox-next').addEventListener('click', function () { show(current + 1); });
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) close();
        });
    }

    function show(index) {
        current = (index + items.length) % items.length;
        const item = items[current];
        const img = lightbox.querySelector('img');
        img.src = item.dataset.src;
        img.alt = item.querySelector('img') ? item.querySelector('img').alt : '';
        lightbox.querySelector('figcaption').textContent = item.dataset.caption || '';
        const multiple = items.length > 1;
        lightbox.querySelector('.lightbox-prev').hidden = !multiple;
        lightbox.querySelector('.lightbox-next').hidden = !multiple;
    }

    function open(trigger) {
        if (!lightbox) build();
        lastFocused = trigger;
        items = Array.from(document.querySelectorAll('[data-lightbox="' + trigger.dataset.lightbox + '"]'));
        show(items.indexOf(trigger));
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lightbox-close').focus();
    }

    function close() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    }

    document.addEventListener('click', function (event) {
        const trigger = event.target.closest('[data-lightbox]');
        if (trigger) open(trigger);
    });

    document.addEventListener('keydown', function (event) {
        if (!lightbox || !lightbox.classList.contains('open')) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowRight') show(current + 1);
        if (event.key === 'ArrowLeft') show(current - 1);
    });
}

/* ---------- Interactive map (Contact page) ---------- */
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement || typeof L === 'undefined') return;   // keep the text address if Leaflet fails to load

    mapElement.innerHTML = '';
    const shop = [-26.0941, 28.0012];
    const map = L.map(mapElement, { scrollWheelZoom: false }).setView(shop, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(shop).addTo(map)
        .bindPopup('<strong>The Chocolate Den</strong><br>123 Main Road, Randburg<br><a href="https://www.google.com/maps/dir/?api=1&destination=-26.0941,28.0012" target="_blank" rel="noopener noreferrer">Get directions</a>')
        .openPopup();

    // Only zoom with the scroll wheel after the user clicks the map, so the page scrolls normally
    map.on('click', function () { map.scrollWheelZoom.enable(); });
}

/* ---------- Open / closed status (Contact page) ---------- */
function initOpenStatus() {
    const status = document.getElementById('open-status');
    if (!status) return;

    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    let open = false;
    if (day >= 1 && day <= 5) open = minutes >= 510 && minutes < 1020;   // 08:30 - 17:00
    if (day === 6) open = minutes >= 510 && minutes < 780;               // 08:30 - 13:00

    status.textContent = open ? 'We are open right now - come say hello!' : 'We are currently closed. Leave us a message and we will reply next business day.';
    status.style.marginTop = '10px';
    status.style.fontWeight = '600';
    status.style.color = open ? 'var(--success)' : 'var(--pink-600)';
}

/* ---------- Dynamic product page (product.html?id=...) ---------- */
function initProductPage() {
    const detail = document.getElementById('product-detail');
    if (!detail) return;

    const id = new URLSearchParams(window.location.search).get('id');
    const product = findProduct(id) || findProduct('paper-muffin-cup-liners');

    if (findProduct(id)) {
        document.title = product.name + ' | The Chocolate Den';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', product.description);

        document.getElementById('breadcrumb-name').textContent = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-category').textContent = product.category;
        document.getElementById('product-price').textContent = formatPrice(product.price);
        document.getElementById('product-size').textContent = product.size;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-long-description').textContent = product.details;

        const img = document.getElementById('product-img');
        img.src = product.image;
        img.alt = product.alt;
        const imageButton = document.getElementById('product-image-btn');
        imageButton.dataset.src = product.image;
        imageButton.dataset.caption = product.name;
        document.getElementById('product-add').dataset.product = product.name;

        const specs = document.getElementById('product-specs');
        specs.replaceChildren();
        Object.keys(product.specs).forEach(function (key) {
            const row = document.createElement('tr');
            const th = document.createElement('th');
            th.scope = 'row';
            th.textContent = key;
            const td = document.createElement('td');
            td.textContent = product.specs[key];
            row.append(th, td);
            specs.appendChild(row);
        });

        const tips = document.getElementById('product-tips');
        tips.replaceChildren();
        product.tips.forEach(function (tip) {
            const li = document.createElement('li');
            li.textContent = tip;
            tips.appendChild(li);
        });

        // Related products: others in the same category first, then anything else
        const related = PRODUCTS
            .filter(function (p) { return p.id !== product.id; })
            .sort(function (a, b) { return (b.category === product.category) - (a.category === product.category); })
            .slice(0, 3);
        const relatedGrid = document.getElementById('related-products');
        relatedGrid.replaceChildren.apply(relatedGrid, related.map(createProductCard));
    }

    const stockInfo = stockLabel(product.stock);
    const stockBadge = document.getElementById('product-stock');
    stockBadge.textContent = stockInfo.text;
    stockBadge.className = 'stock ' + stockInfo.className;

    // Quantity selector
    const qtyInput = document.getElementById('qty-input');
    function setQty(value) {
        qtyInput.value = Math.min(99, Math.max(1, value || 1));
    }
    document.getElementById('qty-minus').addEventListener('click', function () { setQty(parseInt(qtyInput.value, 10) - 1); });
    document.getElementById('qty-plus').addEventListener('click', function () { setQty(parseInt(qtyInput.value, 10) + 1); });
    qtyInput.addEventListener('change', function () { setQty(parseInt(qtyInput.value, 10)); });
}

/* ---------- Shop page: dynamic product list with search, filter and sort ---------- */
function initCollection() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const searchInput = document.getElementById('product-search');
    const categorySelect = document.getElementById('category-filter');
    const sortSelect = document.getElementById('sort-products');
    const resultsCount = document.getElementById('results-count');
    const buttonBar = document.getElementById('category-buttons');

    // Quick-filter buttons are generated from the category list
    ['all'].concat(CATEGORIES).forEach(function (category) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.category = category;
        button.textContent = category === 'all' ? 'All' : category;
        buttonBar.appendChild(button);
    });

    // Allow links like collection.html?category=Packaging
    const params = new URLSearchParams(window.location.search);
    if (CATEGORIES.indexOf(params.get('category')) !== -1) {
        categorySelect.value = params.get('category');
    }

    function render() {
        const term = searchInput.value.trim().toLowerCase();
        const category = categorySelect.value;

        let results = PRODUCTS.filter(function (product) {
            const matchesCategory = category === 'all' || product.category === category;
            const haystack = (product.name + ' ' + product.category + ' ' + product.description).toLowerCase();
            return matchesCategory && haystack.indexOf(term) !== -1;
        });

        switch (sortSelect.value) {
            case 'price-asc': results.sort(function (a, b) { return a.price - b.price; }); break;
            case 'price-desc': results.sort(function (a, b) { return b.price - a.price; }); break;
            case 'name-asc': results.sort(function (a, b) { return a.name.localeCompare(b.name); }); break;
            case 'name-desc': results.sort(function (a, b) { return b.name.localeCompare(a.name); }); break;
        }

        buttonBar.querySelectorAll('button').forEach(function (button) {
            button.classList.toggle('active', button.dataset.category === category);
        });

        if (results.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'no-results';
            empty.textContent = 'No products match "' + searchInput.value.trim() + '". Try a different search or category.';
            grid.replaceChildren(empty);
        } else {
            grid.replaceChildren.apply(grid, results.map(createProductCard));
        }
        resultsCount.textContent = 'Showing ' + results.length + ' of ' + PRODUCTS.length + ' products';
    }

    searchInput.addEventListener('input', render);
    categorySelect.addEventListener('change', render);
    sortSelect.addEventListener('change', render);
    buttonBar.addEventListener('click', function (event) {
        const button = event.target.closest('button');
        if (!button) return;
        categorySelect.value = button.dataset.category;
        render();
    });
    document.getElementById('product-toolbar').addEventListener('submit', function (event) {
        event.preventDefault();
    });

    render();
}

/* ---------- Start everything ---------- */
initNavToggle();
initCart();
initReveal();
initAccordion();
initTabs();
initLightbox();
initMap();
initOpenStatus();
initProductPage();
initCollection();
