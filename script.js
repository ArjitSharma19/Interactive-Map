/* ============================================================
   Interactive Indian Art Map — script.js
   ============================================================ */

/* ── Dataset ──────────────────────────────────────────────── */
const LOCATIONS = [
  {
    name: "Ajanta Caves",
    state: "Maharashtra",
    lat: 20.5518,
    lng: 75.7033,
    artForm: "Buddhist cave murals & rock-cut sculpture",
    period: "2nd century BCE – c. 480 CE (Satavahana then Vakataka patronage)",
    category: "Cave & Temple Art",
    description: "29 rock-cut caves carved into a horseshoe-shaped gorge along the Waghora river, comprising monasteries (viharas) and prayer halls (chaityas). Caves 1, 2, 16, and 17 hold the best-preserved murals — tempera-technique paintings depicting Jataka tales (Buddha's past lives), courtly life, and Buddhist deities. Rediscovered by a British hunting party led by Captain John Smith in 1819; UNESCO World Heritage Site since 1983.",
    wikiImg: "ajanta.jpeg"
  },
  {
    name: "Ellora Caves",
    state: "Maharashtra",
    lat: 20.0258,
    lng: 75.1780,
    artForm: "Rock-cut architecture & sculpture (Buddhist, Hindu, Jain)",
    period: "6th–10th century CE",
    category: "Cave & Temple Art",
    description: "34 caves carved into a 2 km escarpment, representing three faiths side by side — a rare record of religious coexistence. The centerpiece is the Kailasa Temple (Cave 16), the world's largest monolithic structure, carved top-down from a single rock by the Rashtrakuta king Krishna I (r. 757–772 CE) to represent Shiva's Himalayan abode. Reliefs depict the Ramayana, Mahabharata, and Krishna's life.",
    wikiImg: "ElloraCaves.jpg"
  },
  {
    name: "Thanjavur (Tanjore)",
    state: "Tamil Nadu",
    lat: 10.7870,
    lng: 79.1378,
    artForm: "Chola bronzes, Tanjore painting, Dravidian temple architecture",
    period: "Bronzes: 9th–13th century CE; Painting: emerged ~1600s, flourished 17th–18th c.",
    category: "Temple Sculpture & Court Painting",
    description: "Former Chola imperial capital. The Brihadeeswara Temple (built by Raja Raja I, completed 1010 CE) is a UNESCO site and a peak of Dravidian architecture, famous for its 66m vimana tower and bronze sculptures of Shiva, including the iconic Nataraja form. Tanjore painting (locally 'Palagai Padam' — wooden-panel painting) is known for gold-foil relief work, gesso paste, and vivid depictions of Krishna and Hindu deities.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tanjore_Brihadeeswarar_temple.jpg/480px-Tanjore_Brihadeeswarar_temple.jpg"
  },
  {
    name: "Khajuraho",
    state: "Madhya Pradesh",
    lat: 24.8318,
    lng: 79.9199,
    artForm: "Temple sculpture, Nagara-style architecture",
    period: "950–1050 CE, Chandela dynasty",
    category: "Cave & Temple Art",
    description: "Originally 85 temples (Hindu and Jain), only ~20–25 survive. Famous for intricately carved Nayikas (female figures) and sculptural friezes depicting daily life, spiritual teaching, and erotic art — though this makes up only a small fraction of the actual carvings. The Kandariya Mahadeva Temple is considered the artistic and architectural peak of the site. UNESCO World Heritage Site since 1986.",
    wikiImg: "khajrao.jpg"
  },
  {
    name: "Madhubani",
    state: "Bihar",
    lat: 26.3667,
    lng: 86.0833,
    artForm: "Madhubani (Mithila) folk painting",
    period: "Ancient origin (legend ties it to the Ramayana); revived as paper art 1934–1966",
    category: "Folk & Tribal Painting",
    description: "Traditionally practiced by women of the Mithila region on mud walls and floors using rice paste and natural pigments, applied with fingers, twigs, or matchsticks. Five recognized styles: Bharni, Kachni, Tantrik, Godna, Kohbar. Themes are drawn from Hindu deities (Krishna, Shiva, Durga), nature motifs (the 'Tree of Life'), and fertility/wedding symbolism. GI-tag protected since 2007; noted artists include Sita Devi, Ganga Devi, and Jagdamba Devi.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Madhubani_painting%2C_Bihar.jpg/480px-Madhubani_painting%2C_Bihar.jpg"
  },
  {
    name: "Warli Region (Dahanu / Jawhar)",
    state: "Maharashtra",
    lat: 19.9668,
    lng: 72.7424,
    artForm: "Warli tribal wall painting",
    period: "Traced to around the 10th century CE; discovered outside the community in the 1970s",
    category: "Folk & Tribal Painting",
    description: "Practiced by the Warli tribe of the northern Sahyadri range using a monochrome palette — white rice paste on a mud/cow-dung base. Uses only basic geometric shapes (circle, triangle, square) to represent humans, animals, sun, and moon, depicting farming, hunting, dancing, and communal life. No deities or mythological figures are shown — it is entirely about daily life and nature. Artist Jivya Soma Mashe is credited with bringing Warli art to national and global audiences.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Warli_Painting_Maharashtra.jpg/480px-Warli_Painting_Maharashtra.jpg"
  },
  {
    name: "Puri",
    state: "Odisha",
    lat: 19.8135,
    lng: 85.8312,
    artForm: "Pattachitra scroll painting",
    period: "Traced to 8th–12th century CE, tied to the Jagannath Temple (12th c.)",
    category: "Folk & Tribal Painting",
    description: "Pattachitra ('patta' = cloth, 'chitra' = painting) developed as a devotional art form for the cult of Jagannath. During 'Anasar' — the 15-day period each year when temple idols are ritually secluded after a ceremonial bath — painted cloth images of Jagannath, Balabhadra, and Subhadra were used as stand-ins for worship. Painted with natural pigments on cloth stiffened with tamarind-seed paste and chalk. Key themes: Krishna Lila, the Jagannath temple itself (Thia Badhia), and epics. Centered in the artist village of Raghurajpur.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pattachitra_-_Odisha_State_Museum.jpg/480px-Pattachitra_-_Odisha_State_Museum.jpg"
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    artForm: "Jaipur School of miniature painting; Blue Pottery",
    period: "Miniature school: early 18th century; Blue Pottery revived mid-19th century",
    category: "Miniature Painting",
    description: "The Jaipur School of Miniature Painting broke away from other Rajput schools (Mewar, Bikaner, Bundi) to form its own court style under the Kachwaha rulers, blending Mughal technique with local subject matter. Blue Pottery — Persian/Turko-Mughal in origin — took root in Jaipur under Ram Singh II, who sent artisans to train in Delhi; the craft nearly died out before being revived by artist Kirpal Singh Shekhawat with support from Kamaladevi Chattopadhyay and Maharani Gayatri Devi. Known for cobalt-blue floral/geometric glaze work fired without clay.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Jaipur_Blue_Pottery.jpg/480px-Jaipur_Blue_Pottery.jpg"
  },
  {
    name: "Hampi",
    state: "Karnataka",
    lat: 15.3350,
    lng: 76.4600,
    artForm: "Vijayanagara sculpture & temple architecture",
    period: "1336–1565 CE",
    category: "Cave & Temple Art",
    description: "Capital of the Vijayanagara Empire, once the second-most populous city in the world (after Beijing) by 1500 CE. Granite sculpture across Shaiva, Vaishnava, and Jain traditions, blending earlier Chalukya, Hoysala, Chola, and Pandya influences with new Hindu-Islamic hybrid civic architecture. Notable for elaborately carved temple chariots (like the stone chariot at Vittala Temple), gopurams, and murals at the nearby Lepakshi temple. UNESCO World Heritage Site.",
    wikiImg: "hampi.jpg"
  },
  {
    name: "Srikalahasti / Machilipatnam",
    state: "Andhra Pradesh",
    lat: 13.7500,
    lng: 79.7000,
    artForm: "Kalamkari hand-painted/block-printed textile art",
    period: "Roots over 3,000 years old; matured under Golconda Sultanate and Mughal patronage",
    category: "Textile Art",
    description: "'Kalamkari' comes from Persian qalam (pen) + kari (craftsmanship). Two distinct styles: Srikalahasti — entirely freehand, drawn with a bamboo pen using natural dyes (indigo, pomegranate peel, iron rust), depicting temple deities and mythological scrolls; and Machilipatnam (Pedana) — block-printed, more decorative/floral, shaped by Persian design influence. A living textile-art tradition still centered in these two towns.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kalamkari_Andhra_Pradesh.jpg/480px-Kalamkari_Andhra_Pradesh.jpg"
  },
  {
    name: "Kangra Valley",
    state: "Himachal Pradesh",
    lat: 32.1008,
    lng: 76.2673,
    artForm: "Kangra (Pahari) miniature painting",
    period: "Mid-18th century onward, peaking under Raja Sansar Chand (r. 1775–1823)",
    category: "Miniature Painting",
    description: "Part of the broader 'Pahari' (hill) school of miniature painting, alongside Basohli, Chamba, and Guler. Emerged when Mughal court painters migrated to the hill states and merged their technique with local sensibility. Famous for lyrical, delicate depictions of Radha-Krishna romance (especially scenes from the Gita Govinda), soft naturalistic landscapes, and fine linework. Key artists: Nainsukh and Manaku. Received GI tag protection in 2023.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kangra_style_Painting.jpg/480px-Kangra_style_Painting.jpg"
  },
  {
    name: "Kishangarh",
    state: "Rajasthan",
    lat: 26.5833,
    lng: 74.8667,
    artForm: "Kishangarh School of miniature painting (Bani Thani)",
    period: "18th century, under Raja Sawant Singh (r. 1748–57)",
    category: "Miniature Painting",
    description: "A distinctive Rajasthani court style defined almost entirely by one painting: Bani Thani, by court artist Nihal Chand — an elongated-face, lotus-eyed portrait of a singer-poetess at the Kishangarh court, often called 'the Mona Lisa of India.' Raja Sawant Singh, a devotee of Krishna, cast himself and Bani Thani as Krishna and Radha in a series of large, romantic-devotional miniatures blending Mughal technique with Vaishnavite themes.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bani_Thani.jpg/480px-Bani_Thani.jpg"
  },
  {
    name: "Konark",
    state: "Odisha",
    lat: 19.8876,
    lng: 86.0945,
    artForm: "Kalinga-style temple sculpture (Sun Temple)",
    period: "c. 1250 CE, Eastern Ganga dynasty",
    category: "Cave & Temple Art",
    description: "The Konark Sun Temple, built by King Narasimhadeva I, is conceived as a colossal stone chariot for the sun god Surya — 24 carved wheels (that double as functioning sundials) pulled by seven stone horses. Its walls are covered with thousands of figures: musicians, dancers, courtly scenes, war scenes, and celestial beings. Rabindranath Tagore called it 'poetry in stone.' UNESCO World Heritage Site since 1984.",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Konarka_Temple.jpg/480px-Konarka_Temple.jpg"
  }
];

/* ── Category Config ──────────────────────────────────────── */
const CATEGORIES = {
  "Cave & Temple Art":              { color: "#C0522A", emoji: "🏛️" },
  "Folk & Tribal Painting":         { color: "#2E7D52", emoji: "🎨" },
  "Miniature Painting":             { color: "#6B4CA0", emoji: "📜" },
  "Textile Art":                    { color: "#1A6E8E", emoji: "🧵" },
  "Temple Sculpture & Court Painting": { color: "#B8860B", emoji: "⚱️" }
};

/* ── State ────────────────────────────────────────────────── */
let map;
let markers = {};           // { locName: L.marker }
let activeFilters = new Set(Object.keys(CATEGORIES));
let activeItem = null;
let searchQuery = '';

/* ── Init Map ─────────────────────────────────────────────── */
function initMap() {
  map = L.map('map', {
    center: [22.9, 78.6],
    zoom: 5,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Move zoom control to top-right
  map.zoomControl.setPosition('topright');

  LOCATIONS.forEach(loc => addMarker(loc));
}

/* ── Create Custom Icon ───────────────────────────────────── */
function createIcon(category, isActive = false) {
  const cfg = CATEGORIES[category] || { color: '#888', emoji: '📍' };
  const size = isActive ? 42 : 36;
  const html = `
    <div class="custom-marker" style="
      background: ${cfg.color};
      width: ${size}px;
      height: ${size}px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 2.5px solid rgba(255,255,255,0.9);
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s ease;
    ">
      <span style="transform: rotate(45deg); font-size: ${isActive ? 18 : 15}px; line-height:1;">${cfg.emoji}</span>
    </div>`;

  return L.divIcon({
    className: '',
    html: html,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size]
  });
}

/* ── Build Popup HTML ─────────────────────────────────────── */
function buildPopupHTML(loc) {
  const cfg = CATEGORIES[loc.category] || { color: '#888' };
  const hasImg = !!loc.wikiImg;

  const imgSection = hasImg
    ? `<div class="popup-img-wrap">
         <img src="${loc.wikiImg}" alt="${loc.name}" onerror="this.parentElement.innerHTML='<div class=\\'popup-img-placeholder\\'><span style=\\'font-size:38px\\'>${cfg.emoji || '🖼️'}</span><span>${loc.name}</span></div>'"/>
       </div>`
    : `<div class="popup-img-wrap">
         <div class="popup-img-placeholder">
           <span>${cfg.emoji || '🖼️'}</span>
           <span>${loc.name}</span>
         </div>
       </div>`;

  return `
    <div class="popup-card">
      ${imgSection}
      <div class="popup-cat-bar" style="background: ${cfg.color};"></div>
      <div class="popup-body">
        <div class="popup-name">${loc.name}</div>
        <div class="popup-state">${loc.state} &nbsp;·&nbsp; ${loc.category}</div>
        <div class="popup-art-form">${loc.artForm}</div>
        <div class="popup-period">${loc.period}</div>
        <div class="popup-desc">${loc.description}</div>
      </div>
    </div>`;
}

/* ── Add Marker ───────────────────────────────────────────── */
function addMarker(loc) {
  const icon = createIcon(loc.category);
  const marker = L.marker([loc.lat, loc.lng], { icon })
    .addTo(map)
    .bindPopup(buildPopupHTML(loc), {
      maxWidth: 320,
      minWidth: 280,
      className: 'india-popup'
    });

  marker.on('click', () => {
    setActiveItem(loc.name);
    highlightSidebarItem(loc.name);
  });

  marker.on('popupclose', () => {
    // reset icon when popup closes via map X
    marker.setIcon(createIcon(loc.category, false));
  });

  markers[loc.name] = marker;
}

/* ── Sidebar: Build ───────────────────────────────────────── */
function buildSidebar() {
  const container = document.getElementById('location-groups');
  container.innerHTML = '';

  const groups = {};
  LOCATIONS.forEach(loc => {
    if (!groups[loc.category]) groups[loc.category] = [];
    groups[loc.category].push(loc);
  });

  Object.keys(CATEGORIES).forEach(cat => {
    if (!groups[cat]) return;
    const cfg = CATEGORIES[cat];
    const locs = groups[cat];

    const filtered = locs.filter(loc =>
      loc.name.toLowerCase().includes(searchQuery) ||
      loc.state.toLowerCase().includes(searchQuery) ||
      loc.artForm.toLowerCase().includes(searchQuery)
    );

    // Build group element
    const groupEl = document.createElement('div');
    groupEl.className = 'cat-group';
    groupEl.dataset.category = cat;

    groupEl.innerHTML = `
      <div class="cat-group-header">
        <div class="cat-dot" style="background:${cfg.color}"></div>
        <span>${cat}</span>
      </div>`;

    if (filtered.length === 0) {
      groupEl.style.display = 'none';
    }

    filtered.forEach(loc => {
      const item = document.createElement('div');
      item.className = 'location-item' + (activeItem === loc.name ? ' active' : '');
      item.dataset.name = loc.name;
      item.style.setProperty('--item-color', cfg.color);

      item.innerHTML = `
        <div class="loc-icon" style="background:${cfg.color}">${cfg.emoji}</div>
        <div class="loc-info">
          <div class="loc-name">${loc.name}</div>
          <div class="loc-state">${loc.state}</div>
          <div class="loc-art">${loc.artForm}</div>
        </div>`;

      item.addEventListener('click', () => {
        flyToLocation(loc);
      });

      groupEl.appendChild(item);
    });

    container.appendChild(groupEl);
  });

  applyFilterVisibility();
}

/* ── Filter Buttons: Build ────────────────────────────────── */
function buildFilterButtons() {
  const container = document.getElementById('filter-buttons');
  container.innerHTML = '';

  const counts = {};
  LOCATIONS.forEach(loc => {
    counts[loc.category] = (counts[loc.category] || 0) + 1;
  });

  Object.entries(CATEGORIES).forEach(([cat, cfg]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn active';
    btn.dataset.category = cat;
    btn.style.setProperty('--cat-color', cfg.color);

    btn.innerHTML = `
      <div class="dot" style="background:${cfg.color}"></div>
      <span>${cat}</span>
      <span class="count-pill">${counts[cat] || 0}</span>`;

    btn.addEventListener('click', () => toggleFilter(cat, btn));
    container.appendChild(btn);
  });
}

/* ── Toggle Filter ────────────────────────────────────────── */
function toggleFilter(cat, btn) {
  if (activeFilters.has(cat)) {
    activeFilters.delete(cat);
    btn.classList.remove('active');
  } else {
    activeFilters.add(cat);
    btn.classList.add('active');
  }
  applyFilterVisibility();
  updateCountBadge();
}

/* ── Apply Filter Visibility ──────────────────────────────── */
function applyFilterVisibility() {
  LOCATIONS.forEach(loc => {
    const marker = markers[loc.name];
    if (!marker) return;
    const visible = activeFilters.has(loc.category);
    if (visible) {
      if (!map.hasLayer(marker)) marker.addTo(map);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });

  // Update sidebar group visibility
  document.querySelectorAll('.cat-group').forEach(group => {
    const cat = group.dataset.category;
    const items = group.querySelectorAll('.location-item');
    const show = activeFilters.has(cat) && items.length > 0;
    group.style.display = show ? '' : 'none';
  });
}

/* ── Fly to Location ──────────────────────────────────────── */
function flyToLocation(loc) {
  setActiveItem(loc.name);
  map.flyTo([loc.lat, loc.lng], 8, { duration: 1.4, easeLinearity: 0.3 });
  setTimeout(() => {
    const marker = markers[loc.name];
    if (marker) marker.openPopup();
  }, 1500);
}

/* ── Set Active Item (marker highlight) ───────────────────── */
function setActiveItem(name) {
  // Reset old
  if (activeItem && markers[activeItem]) {
    const oldLoc = LOCATIONS.find(l => l.name === activeItem);
    if (oldLoc) markers[activeItem].setIcon(createIcon(oldLoc.category, false));
  }

  activeItem = name;

  // Set new
  const loc = LOCATIONS.find(l => l.name === name);
  if (loc && markers[name]) {
    markers[name].setIcon(createIcon(loc.category, true));
  }

  highlightSidebarItem(name);
  updateCountBadge();
}

/* ── Highlight Sidebar Item ───────────────────────────────── */
function highlightSidebarItem(name) {
  document.querySelectorAll('.location-item').forEach(el => {
    el.classList.toggle('active', el.dataset.name === name);
  });

  // Scroll into view
  const activeEl = document.querySelector(`.location-item[data-name="${name}"]`);
  if (activeEl) {
    activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ── Update Count Badge ───────────────────────────────────── */
function updateCountBadge() {
  const visible = LOCATIONS.filter(l => activeFilters.has(l.category)).length;
  document.getElementById('count-badge').textContent = `${visible} / ${LOCATIONS.length} sites`;
}

/* ── Build Map Legend ─────────────────────────────────────── */
function buildLegend() {
  const container = document.getElementById('legend-items');
  Object.entries(CATEGORIES).forEach(([cat, cfg]) => {
    const div = document.createElement('div');
    div.className = 'legend-item';
    div.innerHTML = `<div class="legend-dot" style="background:${cfg.color}"></div><span>${cat}</span>`;
    container.appendChild(div);
  });
}

/* ── Search ───────────────────────────────────────────────── */
function initSearch() {
  const input = document.getElementById('search-input');
  input.addEventListener('input', () => {
    searchQuery = input.value.toLowerCase().trim();
    buildSidebar();
  });
}

/* ── Sidebar Toggle ───────────────────────────────────────── */
function initSidebarToggle() {
  const btn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    btn.innerHTML = sidebar.classList.contains('collapsed') ? '☰' : '✕';
    // Trigger map resize after transition
    setTimeout(() => map.invalidateSize(), 300);
  });
}

/* ── Intro Overlay ────────────────────────────────────────── */
function initIntro() {
  const btn = document.getElementById('intro-close');
  const overlay = document.getElementById('intro-overlay');
  btn.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.35s ease';
    setTimeout(() => overlay.remove(), 350);
  });
}

/* ── Main Init ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  buildFilterButtons();
  buildSidebar();
  buildLegend();
  initSearch();
  initSidebarToggle();
  initIntro();
  updateCountBadge();
});
