// ====== 搜索 & 分类筛选 ======
(function() {
  var searchInput = document.getElementById('searchInput');
  var categorySelect = document.getElementById('categoryFilter');
  var cards = document.querySelectorAll('.post-card');
  var statsEl = document.getElementById('filterStats');
  var emptyEl = document.getElementById('filterEmpty');

  function filter() {
    var q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    var cat = categorySelect ? categorySelect.value : '';
    var visible = 0;

    cards.forEach(function(card) {
      var title = (card.getAttribute('data-title') || '').toLowerCase();
      var excerpt = (card.getAttribute('data-excerpt') || '').toLowerCase();
      var tags = (card.getAttribute('data-tags') || '').toLowerCase();
      var category = card.getAttribute('data-category') || '';

      var matchSearch = !q || title.indexOf(q) !== -1 || excerpt.indexOf(q) !== -1 || tags.indexOf(q) !== -1;
      var matchCat = !cat || category === cat;

      if (matchSearch && matchCat) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (statsEl) {
      statsEl.textContent = visible === cards.length ? '' : '筛选出 ' + visible + ' 篇';
    }
    if (emptyEl) {
      emptyEl.style.display = visible === 0 ? '' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      clearTimeout(searchInput._timer);
      searchInput._timer = setTimeout(filter, 200);
    });
  }
  if (categorySelect) {
    categorySelect.addEventListener('change', filter);
  }
})();
