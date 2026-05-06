async function topArticles(limit) {
  if (!Number.isInteger(limit) || limit <= 0) return [];

  const articles = [];

  async function fetchPage(page) {
    const url = `https://jsonmock.hackerrank.com/api/articles?page=${page}`;

    try {
      const res = await fetch(url);
        if (!res.ok) return null;

      return await res.json();
    } catch (err) {
      return null;
    }
  }

  const firstPage = await fetchPage(1);
  if (!firstPage) return [];

  const totalPages = firstPage.total_pages;

  for (let page = 1; page <= totalPages; page++) {
    const pageData = page === 1 ? firstPage : await fetchPage(page);

    if (!pageData?.data) continue;

    for (const item of pageData.data) {
      const name = item.title || item.story_title;

      if (!name) continue;

      const comments = item.num_comments ?? 0;

      articles.push({ name, comments });
    }
  }

  articles.sort((a, b) => {
    if (b.comments !== a.comments) {
      return b.comments - a.comments;
    }

    return b.name.localeCompare(a.name);
  });

  // Note: could be optimized using a heap for very large datasets,
  // but full sort is acceptable given typical API response sizes
  return articles.slice(0, limit).map(a => a.name);
}
