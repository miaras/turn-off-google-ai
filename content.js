// Content script to append -ai to search queries

function ensureSearchExcludesAI() {
    const urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('q');

    if (query) {
        // Check if the query already contains our exclusion term
        // We use a regex to handle cases where it might be in the middle or end
        // but typically we just append it.
        // Also check if it's purely an exclusion query (unlikely but safe).
        if (!query.includes('-ai')) {
            const newQuery = `${query} -ai`;
            urlParams.set('q', newQuery);

            // Construct the new URL
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`;

            // Redirect to the new URL
            window.location.replace(newUrl);
        }
    }
}

// Run immediately
ensureSearchExcludesAI();
