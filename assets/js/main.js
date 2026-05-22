/* ═══════════════════════════════════════════════════════════
   Internet Baby Club — main.js
   Shared data, state, cart, wishlist, drawers, navbar, ticker
════════════════════════════════════════════════════════════ */

/* ─── Store Data ─────────────────────────────────────────── */
const CATEGORIES = [
  { id:"posters",       name:"Pôsteres",     emoji:"🖼️" },
  { id:"papelaria",     name:"Papelaria",     emoji:"📔" },
  { id:"moda",          name:"Moda",          emoji:"👕" },
  { id:"acessorios",    name:"Acessórios",    emoji:"📿" },
  { id:"colecionaveis", name:"Colecionáveis", emoji:"⭐" },
  { id:"canecas",       name:"Canecas",       emoji:"☕" },
  { id:"fanzines",      name:"Fanzines",      emoji:"📖" },
  { id:"bones",         name:"Bonés",         emoji:"🧢" },
  { id:"ecobags",       name:"Ecobags",       emoji:"🛍️" },
  { id:"chaveiros",     name:"Chaveiros",     emoji:"🔑" },
  { id:"camisetas",     name:"Camisetas",     emoji:"👕" },
];

const COLOR_MAP = {
  "bg-ibc-blue":   "var(--ibc-blue)",
  "bg-ibc-green":  "var(--ibc-green)",
  "bg-ibc-purple": "var(--ibc-purple)",
  "bg-ibc-cream":  "var(--ibc-cream)",
};

const BADGE_COLOR = {
  "Limitado":  "var(--ibc-purple)",
  "Pré-venda": "var(--ibc-blue)",
  "Novo Drop": "var(--ibc-green)",
  "Destaque":  "var(--ibc-green)",
};

const PRODUCTS = [
  { id:1,  name:"Poster Internet Baby — Edição Especial", price:45,  category:"posters",       artist:"studio-pixel",     emoji:"🖼️", color:"bg-ibc-blue",   badge:"Novo Drop", isNew:true  },
  { id:2,  name:"Fanzine Vol. 2 — Internet Era",          price:35,  category:"fanzines",       artist:"baby-zines",       emoji:"📖", color:"bg-ibc-green",  badge:"Pré-venda", isNew:true  },
  { id:3,  name:"Boné Baby Club — Collab",                price:135, category:"bones",          artist:"butterfly-stitch", emoji:"🧢", color:"bg-ibc-purple", badge:"Limitado",  isNew:true  },
  { id:4,  name:"Kit Pulseiras Y2K",                      price:48,  category:"acessorios",     artist:"digital-gem",      emoji:"📿", color:"bg-ibc-blue",   badge:null,        isNew:false },
  { id:5,  name:"Camiseta Digital Baby",                  price:89,  category:"camisetas",      artist:"butterfly-stitch", emoji:"👕", color:"bg-ibc-green",  badge:"Novo Drop", isNew:true  },
  { id:6,  name:"Caneca Baby Club",                       price:55,  category:"canecas",        artist:"studio-pixel",     emoji:"☕", color:"bg-ibc-cream",  badge:null,        isNew:false },
  { id:7,  name:"Digital Baby Tee",                       price:149, category:"camisetas",      artist:"butterfly-stitch", emoji:"👕", color:"bg-ibc-green",  badge:"Destaque",  isNew:true  },
  { id:8,  name:"Club Tote Bag",                          price:89,  category:"ecobags",        artist:"butterfly-stitch", emoji:"🛍️", color:"bg-ibc-blue",   badge:null,        isNew:false },
  { id:9,  name:"Offline Cap",                            price:120, category:"bones",          artist:"butterfly-stitch", emoji:"🧢", color:"bg-ibc-purple", badge:null,        isNew:false },
  { id:10, name:"Binary Dreams A3",                       price:75,  category:"posters",        artist:"studio-pixel",     emoji:"🖼️", color:"bg-ibc-blue",   badge:null,        isNew:false },
  { id:11, name:"Essential Logo Tee",                     price:130, category:"camisetas",      artist:"butterfly-stitch", emoji:"👕", color:"bg-ibc-green",  badge:"Destaque",  isNew:false },
  { id:12, name:"Analog Hat",                             price:110, category:"bones",          artist:"butterfly-stitch", emoji:"🧢", color:"bg-ibc-blue",   badge:null,        isNew:false },
  { id:13, name:"Fanzine Vol. 1",                         price:28,  category:"fanzines",       artist:"baby-zines",       emoji:"📖", color:"bg-ibc-green",  badge:null,        isNew:false },
  { id:14, name:"Pulseira IBC",                           price:18,  category:"acessorios",     artist:"digital-gem",      emoji:"📿", color:"bg-ibc-purple", badge:null,        isNew:false },
  { id:15, name:"Chaveiro IBC",                           price:22,  category:"chaveiros",      artist:"retro-figures",    emoji:"🔑", color:"bg-ibc-blue",   badge:null,        isNew:false },
  { id:16, name:"Caderno Baby",                           price:42,  category:"papelaria",      artist:"baby-zines",       emoji:"📔", color:"bg-ibc-green",  badge:null,        isNew:false },
  { id:17, name:"Mini Figura IBC",                        price:65,  category:"colecionaveis",  artist:"retro-figures",    emoji:"⭐", color:"bg-ibc-purple", badge:"Limitado",  isNew:true  },
  { id:18, name:"Poster Neon Dreams",                     price:40,  category:"posters",        artist:"studio-pixel",     emoji:"🖼️", color:"bg-ibc-green",  badge:null,        isNew:true  },
  { id:19, name:"Ecobag Internet Era",                    price:65,  category:"ecobags",        artist:"butterfly-stitch", emoji:"🛍️", color:"bg-ibc-purple", badge:null,        isNew:false },
  { id:20, name:"Caneta IBC Collection",                  price:15,  category:"papelaria",      artist:"baby-zines",       emoji:"🖊️", color:"bg-ibc-blue",   badge:null,        isNew:false },
];

const ARTISTS = [
  { id:"studio-pixel",     name:"Studio Pixel",     tag:"Design & Ilustração",   emoji:"🎨", color:"bg-ibc-blue",   desc:"Criadores de pôsteres e prints com estética Y2K nostálgica e colorida." },
  { id:"baby-zines",       name:"Baby Zines",        tag:"Papelaria & Fanzines",  emoji:"✏️", color:"bg-ibc-green",  desc:"Fanzines artesanais e cadernos com arte exclusiva feita à mão." },
  { id:"butterfly-stitch", name:"Butterfly Stitch",  tag:"Moda & Acessórios",     emoji:"🦋", color:"bg-ibc-purple", desc:"Camisetas, bonés e ecobags com bordados e estampas únicas." },
  { id:"retro-figures",    name:"Retro Figures",     tag:"Colecionáveis",          emoji:"🌀", color:"bg-ibc-blue",   desc:"Mini figuras de resina inspiradas na cultura pop e na internet dos anos 2000." },
  { id:"digital-gem",      name:"Digital Gem",       tag:"Joias & Pulseiras",     emoji:"📿", color:"bg-ibc-green",  desc:"Pulseiras e acessórios handmade com miçangas e elementos digitais." },
];

/* ─── Path helper ────────────────────────────────────────── */
// Detect if we're inside /pages/ subfolder
const isSubPage = window.location.pathname.includes('/pages/');
const ROOT = isSubPage ? '../' : './';
const PAGES = isSubPage ? './' : './pages/';

function productUrl(id) { return `${PAGES}produto-detalhe.html?id=${id}`; }

/* ─── State ──────────────────────────────────────────────── */
let cart     = JSON.parse(localStorage.getItem('ibc-cart')     || '[]');
let wishlist = JSON.parse(localStorage.getItem('ibc-wishlist') || '[]');

function saveCart()     { localStorage.setItem('ibc-cart',     JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('ibc-wishlist', JSON.stringify(wishlist)); }

function isInCart(id)     { return cart.some(i => i.id === id); }
function isInWishlist(id) { return wishlist.some(i => i.id === id); }
function cartCount()      { return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal()      { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function addToCart(product) {
  const ex = cart.find(i => i.id === product.id);
  if (ex) ex.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast('Adicionado à sacola ✓');
  refreshAddButtons();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  refreshAddButtons();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function toggleWishlist(product) {
  if (isInWishlist(product.id)) {
    wishlist = wishlist.filter(i => i.id !== product.id);
  } else {
    wishlist.push(product);
    showToast('Adicionado aos desejos ♥');
  }
  saveWishlist();
  renderWishlistDrawer();
  document.querySelectorAll(`.wish-btn[data-id="${product.id}"]`).forEach(btn => {
    btn.classList.toggle('wishlisted', isInWishlist(product.id));
  });
  // Also update wishlist page if open
  if (typeof window.renderWishlistPage === 'function') window.renderWishlistPage();
}

/* ─── Cart Badge ─────────────────────────────────────────── */
function updateCartBadge() {
  const c = cartCount();
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = c;
    b.style.display = c > 0 ? 'flex' : 'none';
  });
  const dc = document.getElementById('cart-drawer-count');
  if (dc) dc.textContent = c;
}

function refreshAddButtons() {
  document.querySelectorAll('.btn-add[data-id]').forEach(btn => {
    const id = Number(btn.dataset.id);
    if (isInCart(id)) {
      btn.classList.add('in-cart');
      btn.innerHTML = '✓ Adicionado';
    } else {
      btn.classList.remove('in-cart');
      btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Comprar`;
    }
  });
}

/* ─── Drawers ────────────────────────────────────────────── */
function openDrawer(id) {
  document.getElementById('overlay').classList.add('open');
  document.getElementById(id).classList.add('open');
  if (id === 'cart-drawer')     renderCartDrawer();
  if (id === 'wishlist-drawer') renderWishlistDrawer();
  if (id === 'search-drawer')   setTimeout(() => document.getElementById('search-input').focus(), 300);
}
function closeDrawer(id) {
  document.getElementById(id).classList.remove('open');
  if (!document.querySelector('.drawer.open')) {
    document.getElementById('overlay').classList.remove('open');
  }
}
function closeAllDrawers() {
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  document.getElementById('overlay').classList.remove('open');
}

function renderCartDrawer() {
  const body   = document.getElementById('cart-drawer-items');
  const footer = document.getElementById('cart-drawer-footer');
  if (!body) return;
  document.getElementById('cart-drawer-count').textContent = cartCount();

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="emoji">🛍️</div><p>Sua sacola está vazia</p></div>`;
    footer.innerHTML = '';
    return;
  }
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.',',')}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remover</button>
        </div>
      </div>
    </div>`).join('');
  footer.innerHTML = `
    <div class="cart-total"><span>Total</span><span>R$ ${cartTotal().toFixed(2).replace('.',',')}</span></div>
    <a class="btn-primary ibc-shadow" href="${PAGES}sacola.html" onclick="closeAllDrawers()">Ver sacola</a>
    <a class="btn-secondary" href="${PAGES}pagamento.html" onclick="closeAllDrawers()">Finalizar compra</a>`;
}

function renderWishlistDrawer() {
  const body = document.getElementById('wishlist-drawer-items');
  if (!body) return;
  document.getElementById('wish-drawer-count').textContent = wishlist.length;
  if (wishlist.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="emoji">🤍</div><p>Nenhum item salvo</p></div>`;
    return;
  }
  body.innerHTML = wishlist.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.',',')}</div>
        <div class="qty-controls">
          <button class="btn-add in-cart" style="font-size:10px;padding:6px 10px" onclick="addToCart(${JSON.stringify(item).replace(/"/g,'&quot;')})">Comprar</button>
          <button class="remove-btn" onclick="toggleWishlist(${JSON.stringify(item).replace(/"/g,'&quot;')})">Remover</button>
        </div>
      </div>
    </div>`).join('');
}

/* ─── Search ─────────────────────────────────────────────── */
function handleSearch(q) {
  const res = document.getElementById('search-results');
  if (!res) return;
  if (q.length < 2) { res.innerHTML = ''; return; }
  const found = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase())
  );
  if (!found.length) {
    res.innerHTML = `<p style="font-size:12px;opacity:.5;font-weight:700;text-transform:uppercase;margin-top:16px">Nenhum resultado para "${q}"</p>`;
    return;
  }
  res.innerHTML = found.slice(0, 6).map(p => `
    <a class="search-result" href="${productUrl(p.id)}">
      <div class="search-result-img" style="background:${COLOR_MAP[p.color]||'var(--ibc-cream)'}">${p.emoji}</div>
      <div>
        <div class="search-result-name">${p.name}</div>
        <div class="search-result-price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
      </div>
    </a>`).join('');
}

/* ─── Newsletter ─────────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const wrap = document.getElementById('nl-form-wrap');
  if (wrap) wrap.innerHTML = `<div class="nl-success">✓ Você entrou no clube!</div>`;
}

/* ─── Toast ──────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ─── Mobile Menu ────────────────────────────────────────── */
let mobileOpen = false;
function toggleMobile() {
  mobileOpen = !mobileOpen;
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  if (!menu) return;
  menu.style.display = mobileOpen ? 'block' : 'none';
  if (icon) icon.innerHTML = mobileOpen
    ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
    : '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>';
}

/* ─── Ticker ─────────────────────────────────────────────── */
function initTicker() {
  const phrases = ["Bem-vindos ao clube","Internet baby club","Feito de fãs para fãs","✦ nascida da internet ✦","Fan merchandise","Y2K culture"];
  const repeated = [...phrases,...phrases,...phrases,...phrases];
  const track = document.getElementById('ticker-track');
  if (!track) return;
  track.innerHTML = repeated.map(p => `<span>${p}</span>`).join('');

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const cur = window.pageYOffset;
    const ticker = document.getElementById('ticker');
    if (!ticker) return;
    if (cur <= 0 || cur < lastScroll) {
      ticker.style.height = '32px'; ticker.style.opacity = '1';
    } else {
      ticker.style.height = '0'; ticker.style.opacity = '0';
    }
    lastScroll = cur;
  }, { passive: true });
}

/* ─── Product Card Builder ───────────────────────────────── */
function buildProductCard(p, compact = false) {
  const bg = COLOR_MAP[p.color] || 'var(--ibc-cream)';
  const badgeHtml = p.badge
    ? `<span class="product-badge" style="background:${BADGE_COLOR[p.badge]||'var(--ibc-green)'}">${p.badge}</span>`
    : '';
  const wishlisted = isInWishlist(p.id) ? 'wishlisted' : '';
  const inCart     = isInCart(p.id);
  const imgH = compact ? 'product-img product-img-compact' : 'product-img';
  const pd = JSON.stringify(p).replace(/"/g,'&quot;');
  return `
    <a class="product-card" href="${productUrl(p.id)}">
      <div class="${imgH}" style="background:${bg}">
        <span>${p.emoji}</span>
        ${badgeHtml}
        <button class="product-wish wish-btn ${wishlisted}" data-id="${p.id}"
          onclick="event.preventDefault();event.stopPropagation();toggleWishlist(${pd})"
          aria-label="Favoritar">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <span class="product-price">R$ ${p.price.toFixed(2).replace('.',',')}</span>
          <button class="btn-add ${inCart?'in-cart':''}" data-id="${p.id}"
            onclick="event.preventDefault();event.stopPropagation();addToCart(${pd})">
            ${inCart ? '✓ Adicionado' :
              `<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Comprar`
            }
          </button>
        </div>
      </div>
    </a>`;
}

/* ─── Shared Navbar HTML ─────────────────────────────────── */
function injectNavbar(activePage) {
  const navLinks = [
    { href: `${ROOT}index.html`,           label: "Início",          page: "home" },
    { href: `${PAGES}lancamentos.html`,     label: "Lançamentos",     page: "lancamentos" },
    { href: `${PAGES}produtos.html`,        label: "Produtos",        page: "produtos" },
    { href: `${PAGES}artistas.html`,        label: "Artistas",        page: "artistas" },
    { href: `${PAGES}lista-de-desejos.html`,label: "Lista de Desejos",page: "lista-de-desejos" },
    { href: `${PAGES}sobre.html`,           label: "Sobre",           page: "sobre" },
    { href: `${PAGES}contato.html`,         label: "Contato",         page: "contato" },
  ];

  const desktopLinks = navLinks.map(l =>
    `<a href="${l.href}" class="nav-link${activePage===l.page?' active':''}">${l.label}</a>`
  ).join('');

  const mobileLinks = navLinks.map(l =>
    `<a href="${l.href}" class="${activePage===l.page?'active':''}">${l.label}</a>`
  ).join('');

  const html = `
  <nav id="main-nav" role="navigation" aria-label="Menu principal">
    <div id="ticker"><div class="ticker-track" id="ticker-track"></div></div>
    <div class="nav-top">
      <div class="nav-top-inner">
        <div style="display:flex;align-items:center;gap:12px;">
          <button class="hamburger" id="hamburger-btn" aria-label="Abrir menu" onclick="toggleMobile()">
            <svg id="hamburger-icon" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span class="nav-label nav-desktop-label">IBC</span>
        </div>
        <a href="${ROOT}index.html" class="nav-logo">Internet Baby Club</a>
        <div class="nav-actions">
          <button class="nav-icon-btn" onclick="openDrawer('search-drawer')" aria-label="Buscar">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <a href="${PAGES}perfil.html" class="nav-icon-btn desktop-only" aria-label="Perfil">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>
          <button class="nav-icon-btn desktop-only" onclick="openDrawer('wishlist-drawer')" aria-label="Lista de desejos">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="nav-icon-btn" onclick="openDrawer('cart-drawer')" aria-label="Carrinho">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="cart-badge" id="cart-badge">0</span>
          </button>
        </div>
      </div>
    </div>
    <div class="nav-links-bar">
      <div class="nav-links-inner">${desktopLinks}</div>
    </div>
    <div id="mobile-menu">${mobileLinks}
      <a href="${PAGES}perfil.html">Meu Perfil</a>
    </div>
  </nav>`;

  document.getElementById('navbar-placeholder').innerHTML = html;
}

/* ─── Shared Footer HTML ─────────────────────────────────── */
function injectFooter() {
  const html = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>Internet Baby Club</h3>
        <p>Feito de fãs para fãs, com muito amor e carinho. Nascido da internet, criado pela comunidade.</p>
      </div>
      <div class="footer-col">
        <h4>Loja</h4>
        <ul>
          <li><a href="${PAGES}produtos.html">Todos os produtos</a></li>
          <li><a href="${PAGES}lancamentos.html">Lançamentos</a></li>
          <li><a href="${PAGES}artistas.html">Artistas</a></li>
          <li><a href="${PAGES}lista-de-desejos.html">Lista de Desejos</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Informações</h4>
        <ul>
          <li><a href="${PAGES}sobre.html">Sobre nós</a></li>
          <li><a href="${PAGES}contato.html">Contato</a></li>
          <li><a href="mailto:oi@internetbabyclub.com">oi@internetbabyclub.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">© 2025 Internet Baby Club — feito de fãs para fãs 🦋</div>
  </footer>`;
  document.getElementById('footer-placeholder').innerHTML = html;
}

/* ─── Shared Drawers HTML ────────────────────────────────── */
function injectDrawers() {
  const html = `
  <div class="overlay" id="overlay" onclick="closeAllDrawers()"></div>
  <div class="drawer" id="cart-drawer">
    <div class="drawer-header">
      <h2>Sacola (<span id="cart-drawer-count">0</span>)</h2>
      <button class="drawer-close" onclick="closeDrawer('cart-drawer')">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="drawer-body" id="cart-drawer-items"></div>
    <div class="drawer-footer" id="cart-drawer-footer"></div>
  </div>
  <div class="drawer" id="search-drawer">
    <div class="drawer-header">
      <h2>Buscar</h2>
      <button class="drawer-close" onclick="closeDrawer('search-drawer')">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="drawer-body">
      <input class="search-input" id="search-input" type="text" placeholder="Buscar produtos..." oninput="handleSearch(this.value)" autocomplete="off" />
      <div id="search-results"></div>
    </div>
  </div>
  <div class="drawer" id="wishlist-drawer">
    <div class="drawer-header">
      <h2>Lista de Desejos (<span id="wish-drawer-count">0</span>)</h2>
      <button class="drawer-close" onclick="closeDrawer('wishlist-drawer')">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="drawer-body" id="wishlist-drawer-items"></div>
  </div>
  <div id="toast"></div>`;
  document.getElementById('drawers-placeholder').innerHTML = html;
}

/* ─── Init (called by every page) ────────────────────────── */
function initPage(activePage) {
  injectDrawers();
  injectNavbar(activePage);
  injectFooter();
  initTicker();
  updateCartBadge();
}
