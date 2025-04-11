document.addEventListener('DOMContentLoaded', () => {
    const booksContainer = document.getElementById('books-container');
    const searchInput = document.getElementById('search');
    const shelfFilter = document.getElementById('shelf-filter');

    // Рендер книг
    function renderBooks(filteredBooks) {
        booksContainer.innerHTML = filteredBooks.map(book => `
            <div class="book-card" data-shelf="${book.shelf}">
                <img src="${book.cover}" alt="${book.title}" class="book-cover">
                <div class="book-info">
                    <h3><a href="book.html?id=${book.id}">${book.title}</a></h3>
                    <p class="author">${book.author}</p>
                    <div class="meta">
                        <span class="rating">${'★'.repeat(book.rating)}</span>
                        <span class="pages">${book.pages} стр.</span>
                    </div>
                    <span class="shelf ${book.shelf}">${getShelfLabel(book.shelf)}</span>
                </div>
            </div>
        `).join('');
    }

    // Фильтрация
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const shelf = shelfFilter.value;

        return books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                                book.author.toLowerCase().includes(searchTerm);
            const matchesShelf = shelf === 'all' || book.shelf === shelf;
            return matchesSearch && matchesShelf;
        });
    }

    // Обновление при изменении фильтров
    [searchInput, shelfFilter].forEach(element => {
        element.addEventListener('input', () => renderBooks(filterBooks()));
    });

    // Инициализация
    renderBooks(books);
});

function getShelfLabel(shelf) {
    const labels = {
        read: "Прочитано",
        reading: "Читаю",
        want: "Хочу прочитать"
    };
    return labels[shelf] || "";
}