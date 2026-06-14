// ========== Series Page Loader ==========

/**
 * 載入指定系列嘅產品到 product-grid
 * @param {string} seriesKey - 'MG' | 'RG' | 'PG' | 'HG' | 'SD' | 'RE100' | 'FM' | 'MEGASIZE'
 */
function loadSeries(seriesKey) {
    const products = GUNDAM_DATA[seriesKey] || [];
    const grid = document.getElementById('product-grid');
    const countEl = document.getElementById('product-count');

    if (!grid) return;

    countEl.textContent = `共 ${products.length} 件`;

    if (products.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">暫無產品，待日後加入。</div>';
        return;
    }

    grid.innerHTML = products.map(p => `
        <a href="product-detail.html?series=${seriesKey}&id=${p.no}" class="product-card">
            <div class="product-card-img">
                ${p.images.box
                    ? `<img src="${p.images.box}" alt="${p.name}" loading="lazy">`
                    : `<span>NO IMAGE</span>`
                }
            </div>
            <div class="product-card-body">
                <div class="product-no">${p.no}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-name-jp">${p.name_jp || ''}</div>
                <div class="product-release">${p.release || ''} | ¥${(p.price || 0).toLocaleString()}</div>
            </div>
        </a>
    `).join('');
}
