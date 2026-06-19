/* ═══════════════════════════════════════
   GLOBAL DAILY — ADMIN PANEL LOGIC
   WITH 3 LANGUAGE SUPPORT
   ═══════════════════════════════════════ */

const KEYS = {
    NEWS: 'gd_news',
    ADS: 'gd_ads',
    CATS: 'gd_categories',
    ADMIN: 'gd_admin_user'
};

const DB = {
    get(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch { return fallback; }
    },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

/* ─── TOAST ─── */
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ─── PAGE NAVIGATION ─── */
let currentPage = 'dashboard';
function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${page}`).classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));

    const titles = {
        dashboard: 'Dashboard',
        news: 'Manage News Articles',
        ads: 'Manage Advertisements',
        categories: 'Categories',
        settings: 'Settings'
    };
    document.getElementById('page-title').textContent = titles[page] || 'Dashboard';

    if (page === 'dashboard') renderDashboard();
    if (page === 'news') renderNewsTable();
    if (page === 'ads') renderAdsTable();
    if (page === 'categories') renderCategoriesTable();
}

/* ─── DASHBOARD ─── */
function renderDashboard() {
    const news = DB.get(KEYS.NEWS, []);
    const ads = DB.get(KEYS.ADS, []);
    const cats = DB.get(KEYS.CATS, []);

    document.getElementById('stat-total-news').textContent = news.length;
    document.getElementById('stat-published').textContent = news.filter(n => n.status === 'published').length;
    document.getElementById('stat-active-ads').textContent = ads.filter(a => a.active).length;
    document.getElementById('stat-categories').textContent = cats.length;

    // Recent news
    const recentNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    document.getElementById('recent-news-table').innerHTML = recentNews.map(n => `
        <tr>
            <td style="font-weight:500;">${n.title.substring(0, 50)}${n.title.length > 50 ? '...' : ''}</td>
            <td><span class="badge badge-blue">${n.category}</span></td>
            <td>${new Date(n.date).toLocaleDateString()}</td>
            <td><span class="badge ${n.status === 'published' ? 'badge-green' : 'badge-gray'}">${n.status}</span></td>
        </tr>
    `).join('');

    // Recent ads
    const activeAds = ads.filter(a => a.active).slice(0, 5);
    document.getElementById('recent-ads-table').innerHTML = activeAds.map(a => `
        <tr>
            <td style="font-weight:500;">${a.title}</td>
            <td><span class="badge badge-blue">${a.position}</span></td>
            <td><span class="badge badge-green">Active</span></td>
        </tr>
    `).join('');
}

/* ─── NEWS MANAGEMENT ─── */
let editingNewsId = null;
let photoBase64 = '';
let videoBase64 = '';

function renderNewsTable() {
    const news = DB.get(KEYS.NEWS, []);
    const search = document.getElementById('news-search')?.value?.toLowerCase() || '';
    const filtered = news.filter(n =>
        n.title.toLowerCase().includes(search) ||
        n.title_en?.toLowerCase().includes(search) ||
        n.category.toLowerCase().includes(search) ||
        n.author.toLowerCase().includes(search)
    );

    document.getElementById('news-table-body').innerHTML = filtered.map(n => `
        <tr>
            <td><img src="${n.image}" alt="" onerror="this.src='https://via.placeholder.com/60x40?text=No+Image'"></td>
            <td style="font-weight:500; max-width:250px;">
                <div>${n.title}</div>
                <div style="font-size:0.8rem; color:#6b7280;">${n.title_en || ''}</div>
            </td>
            <td><span class="badge badge-blue">${n.category}</span></td>
            <td>${n.author}</td>
            <td>${new Date(n.date).toLocaleDateString()}</td>
            <td>${n.featured ? '⭐' : '—'}</td>
            <td><span class="badge ${n.status === 'published' ? 'badge-green' : 'badge-gray'}">${n.status}</span></td>
            <td>
                <button class="btn-icon btn-edit" onclick="editNews(${n.id})" title="Edit">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteNews(${n.id})" title="Delete">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function openNewsModal(id = null) {
    editingNewsId = id;
    photoBase64 = '';
    videoBase64 = '';
    const modal = document.getElementById('news-modal');
    const title = document.getElementById('news-modal-title');

    // Populate categories
    const cats = DB.get(KEYS.CATS, []);
    document.getElementById('news-category').innerHTML = cats.map(c => 
        `<option value="${c.ta}">${c.ta} | ${c.en} | ${c.si}</option>`
    ).join('');

    // Reset upload previews
    document.getElementById('news-photo-preview').style.display = 'none';
    document.getElementById('news-photo-preview').src = '';
    document.getElementById('news-video-preview').style.display = 'none';
    document.getElementById('news-video-preview').src = '';

    if (id) {
        const n = DB.get(KEYS.NEWS, []).find(x => x.id === id);
        if (!n) return;
        title.textContent = 'Edit Article';
        document.getElementById('news-id').value = n.id;
        
        // Tamil fields
        document.getElementById('news-title').value = n.title || '';
        document.getElementById('news-category').value = n.category || '';
        document.getElementById('news-author').value = n.author || '';
        document.getElementById('news-excerpt').value = n.excerpt || '';
        document.getElementById('news-content').value = n.content || '';
        
        // English fields (stored in data attributes or separate fields)
        document.getElementById('news-title-en').value = n.title_en || '';
        document.getElementById('news-excerpt-en').value = n.excerpt_en || '';
        document.getElementById('news-content-en').value = n.content_en || '';
        document.getElementById('news-author-en').value = n.author_en || '';
        
        // Sinhala fields
        document.getElementById('news-title-si').value = n.title_si || '';
        document.getElementById('news-excerpt-si').value = n.excerpt_si || '';
        document.getElementById('news-content-si').value = n.content_si || '';
        document.getElementById('news-author-si').value = n.author_si || '';
        
        document.getElementById('news-image-url').value = n.image || '';
        document.getElementById('news-featured').checked = n.featured;
        document.getElementById('news-trending').checked = n.trending;
        document.getElementById('news-status').checked = n.status === 'published';
        
        if (n.image) {
            document.getElementById('news-photo-preview').src = n.image;
            document.getElementById('news-photo-preview').style.display = 'block';
        }
        if (n.video) {
            document.getElementById('news-video-preview').src = n.video;
            document.getElementById('news-video-preview').style.display = 'block';
        }
    } else {
        title.textContent = 'Add New Article';
        clearNewsForm();
    }

    modal.classList.add('open');
}

function clearNewsForm() {
    document.getElementById('news-id').value = '';
    document.getElementById('news-title').value = '';
    document.getElementById('news-title-en').value = '';
    document.getElementById('news-title-si').value = '';
    document.getElementById('news-author').value = '';
    document.getElementById('news-author-en').value = '';
    document.getElementById('news-author-si').value = '';
    document.getElementById('news-excerpt').value = '';
    document.getElementById('news-excerpt-en').value = '';
    document.getElementById('news-excerpt-si').value = '';
    document.getElementById('news-content').value = '';
    document.getElementById('news-content-en').value = '';
    document.getElementById('news-content-si').value = '';
    document.getElementById('news-image-url').value = '';
    document.getElementById('news-featured').checked = false;
    document.getElementById('news-trending').checked = false;
    document.getElementById('news-status').checked = true;
}

function closeNewsModal() {
    document.getElementById('news-modal').classList.remove('open');
    editingNewsId = null;
    photoBase64 = '';
    videoBase64 = '';
}

function saveNews() {
    // Get all language fields
    const title = document.getElementById('news-title').value.trim();
    const titleEn = document.getElementById('news-title-en').value.trim();
    const titleSi = document.getElementById('news-title-si').value.trim();
    
    const category = document.getElementById('news-category').value;
    const author = document.getElementById('news-author').value.trim();
    const authorEn = document.getElementById('news-author-en').value.trim();
    const authorSi = document.getElementById('news-author-si').value.trim();
    
    const excerpt = document.getElementById('news-excerpt').value.trim();
    const excerptEn = document.getElementById('news-excerpt-en').value.trim();
    const excerptSi = document.getElementById('news-excerpt-si').value.trim();
    
    const content = document.getElementById('news-content').value.trim();
    const contentEn = document.getElementById('news-content-en').value.trim();
    const contentSi = document.getElementById('news-content-si').value.trim();
    
    const imageUrl = document.getElementById('news-image-url').value.trim();
    const featured = document.getElementById('news-featured').checked;
    const trending = document.getElementById('news-trending').checked;
    const status = document.getElementById('news-status').checked ? 'published' : 'draft';

    if (!title || !category || !author || !excerpt) {
        showToast('Please fill Tamil fields (required)', 'error');
        return;
    }

    // Use uploaded photo or URL or placeholder
    const finalImage = photoBase64 || imageUrl || 'https://via.placeholder.com/800x500?text=No+Image';
    const finalVideo = videoBase64 || '';

    // Get category translations
    const cats = DB.get(KEYS.CATS, []);
    const catObj = cats.find(c => c.ta === category);
    const categoryEn = catObj?.en || category;
    const categorySi = catObj?.si || category;

    const news = DB.get(KEYS.NEWS, []);

    const articleData = {
        title, title_en: titleEn, title_si: titleSi,
        category, category_en: categoryEn, category_si: categorySi,
        author, author_en: authorEn, author_si: authorSi,
        excerpt, excerpt_en: excerptEn, excerpt_si: excerptSi,
        content, content_en: contentEn, content_si: contentSi,
        image: finalImage,
        video: finalVideo,
        featured, trending, status
    };

    if (editingNewsId) {
        const idx = news.findIndex(n => n.id === editingNewsId);
        if (idx !== -1) {
            news[idx] = { ...news[idx], ...articleData, date: news[idx].date };
            showToast('Article updated successfully!');
        }
    } else {
        const newArticle = {
            id: Date.now(),
            ...articleData,
            date: new Date().toISOString()
        };
        news.unshift(newArticle);
        showToast('Article published successfully!');
    }

    DB.set(KEYS.NEWS, news);
    closeNewsModal();
    renderNewsTable();
    renderDashboard();
}

function editNews(id) { openNewsModal(id); }

function deleteNews(id) {
    if (!confirm('Are you sure you want to delete this article? This cannot be undone.')) return;
    const news = DB.get(KEYS.NEWS, []).filter(n => n.id !== id);
    DB.set(KEYS.NEWS, news);
    renderNewsTable();
    renderDashboard();
    showToast('Article deleted successfully');
}

/* ─── FILE UPLOAD HANDLERS ─── */
function handleFileUpload(fileInput, previewElement, base64Storage) {
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (ev) => {
            const base64 = ev.target.result;
            previewElement.src = base64;
            previewElement.style.display = 'block';
            
            if (base64Storage === 'photo') photoBase64 = base64;
            if (base64Storage === 'video') videoBase64 = base64;
        };
        reader.readAsDataURL(file);
    });
}

/* ─── AD MANAGEMENT ─── */
let editingAdId = null;

function renderAdsTable() {
    const ads = DB.get(KEYS.ADS, []);
    document.getElementById('ads-table-body').innerHTML = ads.map(a => `
        <tr>
            <td><img src="${a.image}" alt="" style="width:80px;height:50px;object-fit:cover;border-radius:4px;" onerror="this.src='https://via.placeholder.com/80x50?text=Ad'"></td>
            <td style="font-weight:500;">${a.title}</td>
            <td><span class="badge badge-blue">${a.position}</span></td>
            <td><a href="${a.link}" target="_blank" style="color:#2563eb;word-break:break-all;">${a.link.substring(0, 40)}...</a></td>
            <td><span class="badge ${a.active ? 'badge-green' : 'badge-gray'}">${a.active ? 'Active' : 'Inactive'}</span></td>
            <td>
                <button class="btn-icon btn-edit" onclick="editAd(${a.id})" title="Edit">✏️</button>
                <button class="btn-icon btn-delete" onclick="deleteAd(${a.id})" title="Delete">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function openAdModal(id = null) {
    editingAdId = id;
    const modal = document.getElementById('ad-modal');
    const title = document.getElementById('ad-modal-title');

    if (id) {
        const a = DB.get(KEYS.ADS, []).find(x => x.id === id);
        if (!a) return;
        title.textContent = 'Edit Advertisement';
        document.getElementById('ad-id').value = a.id;
        document.getElementById('ad-title').value = a.title;
        document.getElementById('ad-link').value = a.link;
        document.getElementById('ad-position').value = a.position;
        document.getElementById('ad-image').value = a.image;
        document.getElementById('ad-active').checked = a.active;
        document.getElementById('ad-image-preview').src = a.image;
        document.getElementById('ad-image-preview').style.display = 'block';
    } else {
        title.textContent = 'Add Advertisement';
        document.getElementById('ad-id').value = '';
        document.getElementById('ad-title').value = '';
        document.getElementById('ad-link').value = '';
        document.getElementById('ad-position').value = 'header';
        document.getElementById('ad-image').value = '';
        document.getElementById('ad-active').checked = true;
        document.getElementById('ad-image-preview').style.display = 'none';
    }

    modal.classList.add('open');
}

function closeAdModal() {
    document.getElementById('ad-modal').classList.remove('open');
    editingAdId = null;
}

function saveAd() {
    const title = document.getElementById('ad-title').value.trim();
    const link = document.getElementById('ad-link').value.trim();
    const position = document.getElementById('ad-position').value;
    const image = document.getElementById('ad-image').value.trim();
    const active = document.getElementById('ad-active').checked;

    if (!title || !link) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    const ads = DB.get(KEYS.ADS, []);

    if (editingAdId) {
        const idx = ads.findIndex(a => a.id === editingAdId);
        if (idx !== -1) {
            ads[idx] = { ...ads[idx], title, link, position, image: image || ads[idx].image, active };
            showToast('Ad updated successfully!');
        }
    } else {
        ads.push({
            id: Date.now(),
            title, link, position,
            image: image || 'https://via.placeholder.com/800x200?text=Advertisement',
            active
        });
        showToast('Ad added successfully!');
    }

    DB.set(KEYS.ADS, ads);
    closeAdModal();
    renderAdsTable();
    renderDashboard();
}

function editAd(id) { openAdModal(id); }

function deleteAd(id) {
    if (!confirm('Delete this advertisement?')) return;
    const ads = DB.get(KEYS.ADS, []).filter(a => a.id !== id);
    DB.set(KEYS.ADS, ads);
    renderAdsTable();
    renderDashboard();
    showToast('Ad deleted successfully');
}

/* ─── CATEGORY MANAGEMENT ─── */
function renderCategoriesTable() {
    const cats = DB.get(KEYS.CATS, []);
    const news = DB.get(KEYS.NEWS, []);

    document.getElementById('categories-table-body').innerHTML = cats.map(cat => {
        const count = news.filter(n => n.category === cat.ta).length;
        return `
            <tr>
                <td style="font-weight:500;">
                    <div>${cat.ta}</div>
                    <div style="font-size:0.8rem; color:#6b7280;">${cat.en} | ${cat.si}</div>
                </td>
                <td><span class="badge badge-blue">${count} articles</span></td>
                <td>
                    <button class="btn-icon btn-delete" onclick="deleteCategory('${cat.ta}')" title="Delete">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

function openCatModal() {
    document.getElementById('cat-modal').classList.add('open');
    document.getElementById('cat-name').value = '';
    document.getElementById('cat-name-en').value = '';
    document.getElementById('cat-name-si').value = '';
}

function closeCatModal() {
    document.getElementById('cat-modal').classList.remove('open');
}

function saveCategory() {
    const nameTa = document.getElementById('cat-name').value.trim();
    const nameEn = document.getElementById('cat-name-en').value.trim();
    const nameSi = document.getElementById('cat-name-si').value.trim();
    
    if (!nameTa || !nameEn || !nameSi) {
        showToast('Please fill all three language fields', 'error');
        return;
    }
    
    const cats = DB.get(KEYS.CATS, []);
    if (cats.some(c => c.ta === nameTa || c.en === nameEn || c.si === nameSi)) {
        showToast('Category already exists', 'error');
        return;
    }
    
    cats.push({ ta: nameTa, en: nameEn, si: nameSi });
    DB.set(KEYS.CATS, cats);
    closeCatModal();
    renderCategoriesTable();
    renderDashboard();
    showToast('Category added successfully!');
}

function deleteCategory(name) {
    if (!confirm(`Delete category "${name}"? Articles in this category will remain but won't be filterable.`)) return;
    const cats = DB.get(KEYS.CATS, []).filter(c => c.ta !== name);
    DB.set(KEYS.CATS, cats);
    renderCategoriesTable();
    renderDashboard();
    showToast('Category deleted');
}

/* ─── SETTINGS ─── */
function changePassword() {
    const oldPass = document.getElementById('old-pass').value;
    const newPass = document.getElementById('new-pass').value;
    const confirmPass = document.getElementById('confirm-pass').value;
    const admin = DB.get(KEYS.ADMIN, { password: 'admin123' });

    if (oldPass !== admin.password) {
        showToast('Current password is incorrect', 'error');
        return;
    }
    if (newPass.length < 4) {
        showToast('Password must be at least 4 characters', 'error');
        return;
    }
    if (newPass !== confirmPass) {
        showToast('New passwords do not match', 'error');
        return;
    }

    DB.set(KEYS.ADMIN, { ...admin, password: newPass });
    document.getElementById('old-pass').value = '';
    document.getElementById('new-pass').value = '';
    document.getElementById('confirm-pass').value = '';
    showToast('Password updated successfully!');
}

function resetData() {
    if (!confirm('WARNING: This will delete ALL your data and restore defaults. Are you sure?')) return;
    localStorage.removeItem(KEYS.NEWS);
    localStorage.removeItem(KEYS.ADS);
    localStorage.removeItem(KEYS.CATS);
    showToast('Data reset to defaults. Refreshing...');
    setTimeout(() => location.reload(), 1500);
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => navigateTo(btn.dataset.page));
    });

    // News
    document.getElementById('btn-add-news').addEventListener('click', () => openNewsModal());
    document.getElementById('save-news').addEventListener('click', saveNews);
    document.getElementById('cancel-news').addEventListener('click', closeNewsModal);
    document.getElementById('close-news-modal').addEventListener('click', closeNewsModal);
    document.getElementById('news-search').addEventListener('input', renderNewsTable);

    // Photo upload
    handleFileUpload(
        document.getElementById('news-photo-file'),
        document.getElementById('news-photo-preview'),
        'photo'
    );

    // Video upload
    handleFileUpload(
        document.getElementById('news-video-file'),
        document.getElementById('news-video-preview'),
        'video'
    );

    // Image URL preview
    document.getElementById('news-image-url').addEventListener('input', (e) => {
        const img = document.getElementById('news-photo-preview');
        if (e.target.value) { 
            img.src = e.target.value; 
            img.style.display = 'block'; 
        }
    });

    // Ads
    document.getElementById('btn-add-ad').addEventListener('click', () => openAdModal());
    document.getElementById('save-ad').addEventListener('click', saveAd);
    document.getElementById('cancel-ad').addEventListener('click', closeAdModal);
    document.getElementById('close-ad-modal').addEventListener('click', closeAdModal);

    // Ad image upload
    document.getElementById('ad-image-file').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            document.getElementById('ad-image-preview').src = ev.target.result;
            document.getElementById('ad-image-preview').style.display = 'block';
            document.getElementById('ad-image').value = ev.target.result;
        };
        reader.readAsDataURL(file);
    });

    // Categories
    document.getElementById('btn-add-cat').addEventListener('click', openCatModal);
    document.getElementById('save-cat').addEventListener('click', saveCategory);
    document.getElementById('cancel-cat').addEventListener('click', closeCatModal);
    document.getElementById('close-cat-modal').addEventListener('click', closeCatModal);

    // Settings
    document.getElementById('btn-change-pass').addEventListener('click', changePassword);
    document.getElementById('btn-reset-data').addEventListener('click', resetData);

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('open');
        });
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
        }
    });

    // Initial render
    renderDashboard();
});
