/* ============================================
   Mira Shop - Script
   ============================================ */

// ---- i18n ----
const LANG = {
  pt: {
    nav_new: "Novidades", nav_women: "Feminino", nav_men: "Masculino", nav_contact: "Contacto",
    hero_label: "NOVA COLEÇÃO 2025", hero_title: "Estilo que<br>define você.",
    hero_subtitle: "Moda masculina e feminina com entrega em Matola e Maputo.",
    hero_cta: "Ver Coleção", hero_whatsapp: "Falar no WhatsApp",
    cat_women: "Feminino", cat_men: "Masculino", cat_explore: "Explorar →",
    new_label: "ACABOU DE CHEGAR", new_title: "Novidades",
    women_label: "PARA ELA", women_title: "Feminino",
    men_label: "PARA ELE", men_title: "Masculino",
    load_more: "Carregar mais",
    contact_title: "Contacto", contact_address_label: "Morada:", contact_phone_label: "Telefone:",
    contact_payment_label: "Pagamento:", contact_social_label: "Redes Sociais:",
    contact_whatsapp: "Enviar mensagem",
    footer_tagline: "Moda online com entrega em Matola e Maputo.",
    footer_nav: "Navegação", footer_contact: "Contacto", footer_payment: "Pagamento",
    footer_rights: "Todos os direitos reservados.",
    modal_order: "Pedir via WhatsApp", modal_info: "Pedir informações",
    modal_color: "COR", modal_size: "TAMANHO",
    badge_new: "Novo",
    wa_msg: "Olá, gostaria de encomendar este produto:\nNome: {name}\nLink: {link}\nTamanho: {size}\nCor: {color}",
    wa_info: "Olá, gostaria de pedir informações sobre:\nNome: {name}\nLink: {link}"
  },
  en: {
    nav_new: "New Arrivals", nav_women: "Women", nav_men: "Men", nav_contact: "Contact",
    hero_label: "NEW COLLECTION 2025", hero_title: "Style that<br>defines you.",
    hero_subtitle: "Men's and women's fashion with delivery in Matola and Maputo.",
    hero_cta: "View Collection", hero_whatsapp: "Chat on WhatsApp",
    cat_women: "Women", cat_men: "Men", cat_explore: "Explore →",
    new_label: "JUST ARRIVED", new_title: "New Arrivals",
    women_label: "FOR HER", women_title: "Women",
    men_label: "FOR HIM", men_title: "Men",
    load_more: "Load more",
    contact_title: "Contact", contact_address_label: "Address:", contact_phone_label: "Phone:",
    contact_payment_label: "Payment:", contact_social_label: "Social Media:",
    contact_whatsapp: "Send message",
    footer_tagline: "Online fashion with delivery in Matola and Maputo.",
    footer_nav: "Navigation", footer_contact: "Contact", footer_payment: "Payment",
    footer_rights: "All rights reserved.",
    modal_order: "Order via WhatsApp", modal_info: "Request information",
    modal_color: "COLOR", modal_size: "SIZE",
    badge_new: "New",
    wa_msg: "Hello, I would like to order this product:\nName: {name}\nLink: {link}\nSize: {size}\nColor: {color}",
    wa_info: "Hello, I would like information about:\nName: {name}\nLink: {link}"
  }
};

let currentLang = "pt";

function setLang(lang) {
  currentLang = lang;
  document.getElementById("langToggle").textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (LANG[lang][key]) el.innerHTML = LANG[lang][key];
  });
}

document.getElementById("langToggle").addEventListener("click", () => {
  setLang(currentLang === "pt" ? "en" : "pt");
});

// ---- Products Data ----
const PHONE = "258842644335";
const BASE_URL = window.location.origin + window.location.pathname;

function slug(name) { return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/-+$/,""); }

const PRODUCTS = [];
const femNames = ["Vestido Floral","Blusa Seda","Saia Midi","Calça Wide Leg","Top Cropped","Vestido Longo","Camisa Linho","Blazer Oversize","Cardigan Malha","Calça Alfaiataria","Macacão Elegante","Vestido Tubinho","Blusa Ombro a Ombro","Short Cintura Alta","Kimono Estampado","Vestido Cetim","Regata Básica","Calça Jogger","Jaqueta Jeans","Body Canelado","Saia Plissada","Vestido Tricot","Camisa Estampada","Top Halter","Calça Flare"];
const mascNames = ["Camisa Preta","Polo Slim","Bermuda Chino","Calça Cargo","Camiseta Básica","Jaqueta Bomber","Blazer Slim","Camisa Linho","Calça Slim","Hoodie Premium","T-Shirt Oversize","Short Moletom","Camisa Denim","Calça Jogger","Colete Acolchoado","Suéter Gola V","Camisa Social","Bermuda Sarja","Jaqueta Corta-Vento","T-Shirt Estampada","Calça Alfaiataria","Polo Manga Longa","Camiseta Henley","Short Linho","Cardigan Malha"];
const colors = [
  {name:"Preto",hex:"#111111"},{name:"Branco",hex:"#f5f5f5"},{name:"Azul",hex:"#3b82f6"},
  {name:"Verde",hex:"#22c55e"},{name:"Bege",hex:"#d4b896"},{name:"Rosa",hex:"#ec4899"},
  {name:"Cinza",hex:"#737373"},{name:"Vermelho",hex:"#ef4444"},{name:"Camel",hex:"#c4956a"}
];
const sizes = ["XS","S","M","L","XL"];

function randColors() { const n=2+Math.floor(Math.random()*3); const s=new Set(); while(s.size<n) s.add(colors[Math.floor(Math.random()*colors.length)]); return [...s]; }
function randPrice(min,max) { return (min+Math.random()*(max-min)).toFixed(0)+" MZN"; }

femNames.forEach((name,i) => {
  PRODUCTS.push({
    id: "f"+(i+1), slug: slug(name), name, price: randPrice(800,3500),
    category: "feminino", isNew: i < 6,
    desc: "Peça elegante e confortável, perfeita para qualquer ocasião. Tecido de alta qualidade.",
    colors: randColors(), sizes: sizes,
    images: ["images/produtos/fem-"+(i+1)+"-1.jpg","images/produtos/fem-"+(i+1)+"-2.jpg"]
  });
});
mascNames.forEach((name,i) => {
  PRODUCTS.push({
    id: "m"+(i+1), slug: slug(name), name, price: randPrice(600,3000),
    category: "masculino", isNew: i < 6,
    desc: "Corte moderno e tecido premium. Ideal para o dia a dia ou ocasiões especiais.",
    colors: randColors(), sizes: sizes,
    images: ["images/produtos/masc-"+(i+1)+"-1.jpg","images/produtos/masc-"+(i+1)+"-2.jpg"]
  });
});

// ---- Render Products ----
const PAGE_SIZE = 12;
const MAX = 50;
const state = { new:PAGE_SIZE, fem:PAGE_SIZE, masc:PAGE_SIZE };

function productCard(p) {
  const badge = p.isNew ? `<span class="product-badge">${LANG[currentLang].badge_new}</span>` : "";
  return `<div class="product-card" data-slug="${p.slug}">
    <div class="product-image">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22><rect fill=%22%23f5f5f5%22 width=%22300%22 height=%22400%22/><text x=%22150%22 y=%22200%22 text-anchor=%22middle%22 fill=%22%23a3a3a3%22 font-family=%22sans-serif%22 font-size=%2214%22>${encodeURIComponent(p.name)}</text></svg>'">
      ${badge}
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>
    </div>
  </div>`;
}

function renderSection(gridId, items, count, loadMoreId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = items.slice(0, count).map(productCard).join("");
  const wrap = document.getElementById(loadMoreId);
  wrap.style.display = count >= items.length || count >= MAX ? "none" : "block";
}

function renderAll() {
  const newItems = PRODUCTS.filter(p => p.isNew);
  const femItems = PRODUCTS.filter(p => p.category === "feminino");
  const mascItems = PRODUCTS.filter(p => p.category === "masculino");
  renderSection("productsNew", newItems, state.new, "loadMoreNewWrap");
  renderSection("productsFem", femItems, state.fem, "loadMoreFemWrap");
  renderSection("productsMasc", mascItems, state.masc, "loadMoreMascWrap");
}

document.getElementById("loadMoreNew").addEventListener("click", () => { state.new += PAGE_SIZE; renderAll(); });
document.getElementById("loadMoreFem").addEventListener("click", () => { state.fem += PAGE_SIZE; renderAll(); });
document.getElementById("loadMoreMasc").addEventListener("click", () => { state.masc += PAGE_SIZE; renderAll(); });

renderAll();

// ---- Modal ----
const modal = document.getElementById("productModal");
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;

function openModal(product) {
  currentProduct = product;
  selectedColor = product.colors[0];
  selectedSize = null;
  const m = modal;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalDesc").textContent = product.desc;
  document.getElementById("modalImage").src = product.images[0];
  document.getElementById("modalImage").alt = product.name;
  document.getElementById("modalImage").onerror = function(){ this.src=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23f5f5f5" width="300" height="400"/><text x="150" y="200" text-anchor="middle" fill="%23a3a3a3" font-family="sans-serif" font-size="14">${encodeURIComponent(product.name)}</text></svg>`; };

  // // Limpa eventos antigos
const thumbsContainer = document.getElementById("modalThumbs");
thumbsContainer.innerHTML = "";

// Adiciona novas thumbs
product.images.forEach((img, i) => {
  const thumb = document.createElement("img");
  thumb.src = img;
  thumb.alt = "thumb";
  thumb.dataset.idx = i;
  thumb.className = i === 0 ? "active" : "";
  thumb.onerror = () => { thumb.style.display = "none"; };
  thumb.addEventListener("click", () => {
    document.getElementById("modalImage").src = product.images[i];
    // Remove classe active de todas
    document.querySelectorAll("#modalThumbs img").forEach(x => x.classList.remove("active"));
    thumb.classList.add("active");
  });
  thumbsContainer.appendChild(thumb);
});

  // Colors
  const colorsEl = document.getElementById("modalColors");
  colorsEl.innerHTML = `<span class="color-label">${LANG[currentLang].modal_color}</span>` +
    product.colors.map(c => `<button class="color-swatch ${c===selectedColor?'active':''}" style="background:${c.hex}" data-color="${c.name}" title="${c.name}"></button>`).join("");
  colorsEl.querySelectorAll(".color-swatch").forEach(s => {
    s.addEventListener("click", () => {
      selectedColor = product.colors.find(c=>c.name===s.dataset.color);
      colorsEl.querySelectorAll(".color-swatch").forEach(x=>x.classList.remove("active"));
      s.classList.add("active");
      updateWhatsappLinks();
    });
  });

  // Sizes
  const sizesEl = document.getElementById("modalSizes");
  sizesEl.innerHTML = `<span class="size-label">${LANG[currentLang].modal_size}</span>` +
    product.sizes.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join("");
  sizesEl.querySelectorAll(".size-btn").forEach(b => {
    b.addEventListener("click", () => {
      selectedSize = b.dataset.size;
      sizesEl.querySelectorAll(".size-btn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      updateWhatsappLinks();
    });
  });

  updateWhatsappLinks();
  m.classList.add("active");
  document.body.style.overflow = "hidden";

  // URL
  history.pushState(null, "", "#produto/" + product.slug);
}

function updateWhatsappLinks() {
  if (!currentProduct) return;
  const link = BASE_URL + "#produto/" + currentProduct.slug;
  const colorName = selectedColor ? selectedColor.name : "-";
  const sizeName = selectedSize || "-";
  const msg = LANG[currentLang].wa_msg.replace("{name}",currentProduct.name).replace("{link}",link).replace("{size}",sizeName).replace("{color}",colorName);
  const infoMsg = LANG[currentLang].wa_info.replace("{name}",currentProduct.name).replace("{link}",link);
  document.getElementById("modalWhatsapp").href = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  document.getElementById("modalInfo").href = `https://wa.me/${PHONE}?text=${encodeURIComponent(infoMsg)}`;
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
  history.pushState(null, "", BASE_URL.replace(/\/$/, "") || "/");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// Click on product card
document.addEventListener("click", e => {
  const card = e.target.closest(".product-card");
  if (!card) return;
  const p = PRODUCTS.find(x => x.slug === card.dataset.slug);
  if (p) openModal(p);
});

// Deep link
function checkHash() {
  const hash = window.location.hash;
  if (hash.startsWith("#produto/")) {
    const s = hash.replace("#produto/","");
    const p = PRODUCTS.find(x => x.slug === s);
    if (p) openModal(p);
  }
}
window.addEventListener("hashchange", checkHash);
checkHash();

// ---- Nav scroll ----
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

// ---- Mobile menu ----
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
});
mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});
